export interface ServiceDetail {
    company: string;
    device: string;
    service: string;
    cost: string; // Keeping as string to allow ranges or "N/A"
    duration: string; // Hours
    warranty: string;
    technicianAvailable: boolean;
}

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7ZZsn4Cvg3d3LsqdvuhjtWFOCKhVr-E3tBQ_GqW9hoQI4eSM6-UcAD_RmZ6M7XGn9w3b76CNcY2UL/pub?gid=0&single=true&output=csv';

const parseCSVLine = (line: string): string[] => {
    const values: string[] = [];
    let currentValue = '';
    let withinQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            withinQuotes = !withinQuotes;
        } else if (char === ',' && !withinQuotes) {
            values.push(currentValue.trim());
            currentValue = '';
        } else {
            currentValue += char;
        }
    }
    values.push(currentValue.trim());
    return values;
};

export const fetchServicesData = async (): Promise<ServiceDetail[]> => {
    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch CSV: ${response.statusText}`);
        }
        const text = await response.text();
        const lines = text.split(/\r?\n/).filter((line: string) => line.trim() !== '');
        
        // Remove header row
        const dataLines = lines.slice(1);

        return dataLines.map((line: string) => {
            const cols = parseCSVLine(line);
            // CSV columns based on your sheet:
            // 0: Company/Brand
            // 1: Device Model/Category
            // 2: Repair Service Name
            // 3: Estimated Cost (USD)
            // 4: Repair Duration (Hours)
            // 5: Technician Availability (TRUE/FALSE)
            // ... (Warranty not in CSV yet, defaulting)

            return {
                company: cols[0] || 'Unknown',
                device: cols[1] || 'Unknown',
                service: cols[2] || 'Unknown',
                cost: cols[3] || '0',
                duration: cols[4] || 'N/A',
                technicianAvailable: cols[5]?.toUpperCase() === 'TRUE',
                warranty: cols[2]?.toLowerCase().includes('inquiry') ? 'N/A' : '90 Days' // Default logic
            };
        });
    } catch (error) {
        console.error('Error loading service data:', error);
        return [];
    }
};
