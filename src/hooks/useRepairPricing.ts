'use client';

import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7ZZsn4Cvg3d3LsqdvuhjtWFOCKhVr-E3tBQ_GqW9hoQI4eSM6-UcAD_RmZ6M7XGn9w3b76CNcY2UL/pub?gid=1867337181&single=true&output=csv';

interface RepairData {
  Device: string;
  'Device Model': string;
  'Repair Type': string;
  'Sub-Type Title': string;
  'Sub-Type Price (USD)': string;
  Warranty: string;
}

export const useRepairPricing = () => {
  const [data, setData] = useState<RepairData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = 'repair_pricing_data';
    const CACHE_TIMESTAMP_KEY = 'repair_pricing_timestamp';
    const CACHE_VERSION_KEY = 'repair_pricing_version';
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    const CURRENT_VERSION = 'v1.1'; // Increment this to force cache clear on deployment

    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const cachedVersion = localStorage.getItem(CACHE_VERSION_KEY);

    if (cachedData && cachedTimestamp && cachedVersion === CURRENT_VERSION) {
      const age = Date.now() - parseInt(cachedTimestamp, 10);
      if (age < CACHE_DURATION) {
        try {
          const parsed = JSON.parse(cachedData);
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setData(parsed);
          setLoading(false);
          return;
        } catch (e) {
          console.error('Failed to parse cached data', e);
        }
      }
    }

    Papa.parse(CSV_URL, {
      download: true,
      header: false, // Parse as arrays to handle leading empty rows/columns
      complete: (results) => {
        const rows = results.data as string[][];

        // Find the header row index
        let headerRowIndex = -1;
        const headers: Record<string, number> = {};

        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          // Look for key columns to identify header row
          // We need Device and Sub-Type Price (USD) at minimum
          if (row.includes('Device') && row.includes('Sub-Type Price (USD)')) {
            headerRowIndex = i;
            // Map headers to indices
            row.forEach((cell, index) => {
              if (cell) headers[cell.trim()] = index;
            });
            break;
          }
        }

        if (headerRowIndex === -1) {
          console.error('Could not find header row in CSV');
          setLoading(false);
          return;
        }

        // Process data rows
        const parsedData: RepairData[] = rows
          .slice(headerRowIndex + 1)
          .map((row) => {
            const getVal = (key: string) => row[headers[key]]?.trim() || '';

            // Skip empty rows
            if (!getVal('Device') && !getVal('Repair Type')) return null;

            return {
              Device: getVal('Device'),
              'Device Model': getVal('Device Model'),
              'Repair Type': getVal('Repair Type'),
              'Sub-Type Title': getVal('Sub-Type Title'),
              'Sub-Type Price (USD)': getVal('Sub-Type Price (USD)'),
              Warranty: getVal('Warranty')
            };
          })
          .filter((item): item is RepairData => item !== null);

        setData(parsedData);
        setLoading(false);

        // Save to cache
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(parsedData));
          localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
          localStorage.setItem(CACHE_VERSION_KEY, CURRENT_VERSION);
        } catch (e) {
          console.error('Failed to save to cache', e);
        }
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        setLoading(false);
      }
    });
  }, []);

  const getPriceRange = (deviceType: string, repairTitle: string, modelName?: string) => {
    if (loading) return 'Loading...';
    if (!data.length) return 'Contact for Price';

    const normalizedRepairType = repairTitle.toLowerCase().replace(/ /g, '-').replace('/', '-'); // handle "Speaker / Mic" -> "speaker---mic" might need care

    // Improve normalization if needed based on known keys
    // "Screen Replacement" -> "screen-replacement"
    // "Charging Port Repair" -> "charging-port-repair"

    // Filter rows for the device category (e.g., 'iphone', 'android')
    // deviceType in CSV is generic 'iphone', 'android'.
    const deviceRows = data.filter((row) => row.Device?.toLowerCase() === deviceType.toLowerCase());

    // Filter for specific repair type
    // We match CSV 'Repair Type' against our constructed key
    let repairRows = deviceRows.filter((row) => {
      const rowRepairType = row['Repair Type']?.toLowerCase();
      // Try exact match or match with normalized title
      return (
        rowRepairType === normalizedRepairType ||
        rowRepairType === repairTitle.toLowerCase().replace(/ /g, '-')
      );
    });

    // Filter by Model Name if provided
    if (modelName) {
      repairRows = repairRows.filter(
        (row) =>
          row['Device Model']?.toLowerCase().replace(/\s+/g, '') ===
          modelName.toLowerCase().replace(/\s+/g, '')
      );
    }

    if (repairRows.length === 0) return 'Contact for Price';

    // Extract prices from "Sub-Type Price (USD)" ONLY
    const allPrices: number[] = [];

    repairRows.forEach((row) => {
      const subPrice = row['Sub-Type Price (USD)'];
      if (subPrice) {
        const p = parseFloat(subPrice.replace(/[^0-9.]/g, ''));
        if (!isNaN(p) && p > 0) allPrices.push(p);
      }
    });

    if (allPrices.length === 0) {
      return 'Contact for Price';
    }

    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);

    if (minPrice === maxPrice) {
      return `$${minPrice}`;
    }

    return `$${minPrice} - $${maxPrice}`;
  };

  return { loading, getPriceRange, rawData: data };
};
