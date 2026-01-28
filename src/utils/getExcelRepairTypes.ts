import { repairDetails } from '@/data/modelSpecificDetails';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7ZZsn4Cvg3d3LsqdvuhjtWFOCKhVr-E3tBQ_GqW9hoQI4eSM6-UcAD_RmZ6M7XGn9w3b76CNcY2UL/pub?gid=1867337181&single=true&output=csv';

export async function getExcelRepairTypes(): Promise<string[]> {
    try {
        const response = await fetch(CSV_URL, { next: { revalidate: 3600 } });
        if (!response.ok) return Object.keys(repairDetails);
        const text = await response.text();
        
        // Simple CSV parse
        const rows = text.split('\n').map(row => row.split(','));
        if (rows.length < 2) return Object.keys(repairDetails);

        // Find 'Repair Type' column index
        let typeIndex = -1;
        
        for (const row of rows) {
             const idx = row.findIndex(c => c.trim() === 'Repair Type');
             if (idx !== -1) {
                 typeIndex = idx;
                 break;
             }
        }

        if (typeIndex === -1) return Object.keys(repairDetails);

        const types = new Set<string>();
        rows.forEach(row => {
            const val = row[typeIndex]?.trim();
            // Normalize: lowercase, replace spaces with dashes to match URL slugs
            if (val) {
                 const slug = val.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
                 if (slug) types.add(slug);
            }
        });

        // Add hardcoded ones to be safe
        Object.keys(repairDetails).forEach(k => types.add(k));

        return Array.from(types);
    } catch (e) {
        console.error('Failed to fetch Excel repair types', e);
        return Object.keys(repairDetails);
    }
}
