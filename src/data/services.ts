import Papa from 'papaparse';

export interface ServiceDetail {
    company: string;
    device: string;
    service: string;
    cost: string;
    duration: string;
    warranty: string;
    technicianAvailable: boolean;
}

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7ZZsn4Cvg3d3LsqdvuhjtWFOCKhVr-E3tBQ_GqW9hoQI4eSM6-UcAD_RmZ6M7XGn9w3b76CNcY2UL/pub?gid=1867337181&single=true&output=csv';

interface RawRow {
    Device: string;
    'Device Model': string;
    'Repair Type': string;
    'Sub-Type Title': string;
    'Sub-Type Price (USD)': string;
    Warranty: string;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const formatService = (s: string) => {
    return s.split(/[-/]/).map(word => capitalize(word)).join(' ');
};

export const fetchServicesData = async (): Promise<ServiceDetail[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse(GOOGLE_SHEET_CSV_URL, {
            download: true,
            header: false, // Handle dirty CSV manually
            complete: (results) => {
                const rows = results.data as string[][];
                
                // 1. Find Headers
                let headerRowIndex = -1;
                const headers: Record<string, number> = {};

                for (let i = 0; i < rows.length; i++) {
                    const row = rows[i];
                    if (row.includes('Device') && row.includes('Sub-Type Price (USD)')) {
                        headerRowIndex = i;
                        row.forEach((cell, index) => {
                            if (cell) headers[cell.trim()] = index;
                        });
                        break;
                    }
                }

                if (headerRowIndex === -1) {
                    console.error('Could not find header row in CSV');
                    resolve([]);
                    return;
                }

                // 2. Parse Rows into Objects
                const validRows: RawRow[] = rows.slice(headerRowIndex + 1).map(row => {
                    const getVal = (key: string) => row[headers[key]] || '';
                    if (!getVal('Device') || !getVal('Repair Type')) return null;
                    return {
                        Device: getVal('Device'),
                        'Device Model': getVal('Device Model'),
                        'Repair Type': getVal('Repair Type'),
                        'Sub-Type Title': getVal('Sub-Type Title'),
                        'Sub-Type Price (USD)': getVal('Sub-Type Price (USD)'),
                        Warranty: getVal('Warranty')
                    } as RawRow;
                }).filter((r): r is RawRow => r !== null);


                // 3. Aggregate Data (Group by Device + Model + Service + SubType)
                const groupedData: Record<string, {
                    company: string;
                    device: string;
                    service: string;
                    subType: string;
                    prices: number[];
                    warranty: string;
                }> = {};

                validRows.forEach(row => {
                    const subType = row['Sub-Type Title'] || 'Standard';
                    const key = `${row.Device}|${row['Device Model']}|${row['Repair Type']}|${subType}`;
                    
                    if (!groupedData[key]) {
                        groupedData[key] = {
                            company: row.Device,
                            device: row['Device Model'],
                            service: row['Repair Type'],
                            subType: subType,
                            prices: [],
                            warranty: row.Warranty || '90 Days'
                        };
                    }

                    const price = parseFloat(row['Sub-Type Price (USD)'].replace(/[^0-9.]/g, ''));
                    if (!isNaN(price) && price > 0) {
                        groupedData[key].prices.push(price);
                    }
                });

                // 4. Transform to ServiceDetail array
                const services: ServiceDetail[] = Object.values(groupedData).map(group => {
                    let cost = "Contact for Price";
                    if (group.prices.length > 0) {
                        const min = Math.min(...group.prices);
                        const max = Math.max(...group.prices);
                        cost = min === max ? `$${min}` : `$${min} - $${max}`;
                    }

                    // Formatting Brand (e.g. "iphone" -> "iPhone")
                    let company = capitalize(group.company);
                    if (company.toLowerCase() === 'iphone') company = 'iPhone';
                    if (company.toLowerCase() === 'ipad') company = 'iPad';
                    if (company.toLowerCase() === 'aio') company = 'All-In-One';

                    let serviceName = formatService(group.service);
                    if (group.subType && group.subType !== 'Standard') {
                        serviceName += ` - ${group.subType}`;
                    } else if (group.subType === 'Standard' && group.service === 'charging-port-repair') {
                         // Optional: clean up standard if repetitive
                    }

                    return {
                        company,
                        device: group.device,
                        service: serviceName,
                        cost,
                        duration: '1-2', // Default info not in CSV
                        warranty: group.warranty,
                        technicianAvailable: true
                    };
                });

                resolve(services);
            },
            error: (err) => {
                console.error('CSV Parse Error:', err);
                reject(err);
            }
        });
    });
};
