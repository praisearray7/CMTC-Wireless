import { repairServices } from './repairData';
import { seriesData as iphoneData } from './iphone';
import { cellphoneData } from './cellphone';
import { smartwatchData } from './smartwatch';
import { computerData } from './computer';
import { desktopData } from './desktop';
import { laptopData } from './laptop';
import { aioData } from './aio';
import { tabletData } from './tablet';
import { ipadData } from './ipad';
import { macbookData } from './macbook';

export const getModelData = (serviceId: string, modelId: string) => {
    // 1. Check repairServices (Standard Models)
    for (const service of repairServices) {
        if (service.id === serviceId) {
            if (service.models) {
                const model = service.models.find(m => m.id === modelId);
                if (model) return { ...model, category: service.name };
            }
            if (service.subCategories) {
                for (const sub of service.subCategories) {
                    const model = sub.models.find(m => m.id === modelId);
                    if (model) return { ...model, category: service.name };
                }
            }
        }
    }

    // 2. Check Series Data
    const seriesMap: Record<string, any[]> = {
        'iphone-repair': iphoneData,
        'cell-phone-repair': cellphoneData,
        'smart-watch-repair': smartwatchData,
        'computer-repair': computerData,
        'desktop-repair': desktopData,
        'laptop-repair': laptopData,
        'aio-repair': aioData,
        'tablet-repair': tabletData,
        'ipad-repair': ipadData,
        'macbook-repair': macbookData,
    };

    const data = seriesMap[serviceId];
    if (data) {
        const model = data.find(m => m.id === modelId);
        if (model) {
            return { ...model, category: getCategoryName(serviceId) };
        }
    }

    return null;
};

const getCategoryName = (id: string) => {
    const service = repairServices.find(s => s.id === id);
    if (service) return service.name;
    
    // Fallback mapping
    const map: Record<string, string> = {
         'iphone-repair': 'iPhone',
         'cell-phone-repair': 'Cell Phone',
         'smart-watch-repair': 'Smart Watch',
         'computer-repair': 'Computer',
         'desktop-repair': 'Desktop',
         'laptop-repair': 'Laptop',
         'aio-repair': 'All-In-One',
         'tablet-repair': 'Tablet',
         'ipad-repair': 'iPad',
         'macbook-repair': 'MacBook',
    };
    return map[id] || 'Device';
};
