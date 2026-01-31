import RepairDetail from '@/components/SubCategoryDetail';

export default function SubCategoryPage() {
  return <RepairDetail />;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
  const CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7ZZsn4Cvg3d3LsqdvuhjtWFOCKhVr-E3tBQ_GqW9hoQI4eSM6-UcAD_RmZ6M7XGn9w3b76CNcY2UL/pub?gid=1867337181&single=true&output=csv';

  try {
    const response = await fetch(CSV_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const text = await response.text();
    const rows = text.split('\n').map((row) => row.split(','));

    // Find header row
    let headerIdx = -1;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].includes('Sub-Type Title')) {
        headerIdx = i;
        break;
      }
    }

    if (headerIdx === -1) return [];

    const headers: Record<string, number> = {};
    rows[headerIdx].forEach((cell, idx) => {
      if (cell) headers[cell.trim()] = idx;
    });

    const params: { serviceId: string; modelId: string; repairId: string }[] = [];

    // Process data rows
    for (let i = headerIdx + 1; i < rows.length; i++) {
      const row = rows[i];
      const device = row[headers['Device']]?.trim().toLowerCase();
      const model = row[headers['Device Model']]?.trim();
      const subTitle = row[headers['Sub-Type Title']]?.trim();

      if (device && model && subTitle) {
        const serviceId = device === 'iphone' ? 'iphone-repair' : `${device}-repair`;
        const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
        // Use subSlug directly as repairId
        const subSlug = subTitle
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');

        params.push({
          serviceId,
          modelId: modelSlug,
          repairId: subSlug // Matches folder name [repairId]
        });
      }
    }

    return params;
  } catch (error) {
    console.error('Failed to generate subcategory params:', error);
    return [];
  }
}
