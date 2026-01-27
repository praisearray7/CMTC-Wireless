import ModelDetail from '@/pages/ModelDetail';
import { repairServices } from '@/data/repairData';
import { seriesData as iphoneData } from '@/data/iphone';
import { cellphoneData } from '@/data/cellphone';
import { smartwatchData } from '@/data/smartwatch';
import { computerData } from '@/data/computer';
import { desktopData } from '@/data/desktop';
import { laptopData } from '@/data/laptop';
import { aioData } from '@/data/aio';
import { tabletData } from '@/data/tablet';
import { ipadData } from '@/data/ipad';
import { macbookData } from '@/data/macbook';

import type { Metadata } from 'next';
import { getModelData } from '@/data/modelUtils';

export function generateStaticParams() {
    const params: { serviceId: string; modelId: string }[] = [];

    // 1. Add paths from repairServices (Standard Models)
    repairServices.forEach((service) => {
        if (service.models) {
            service.models.forEach((model) => {
                params.push({ serviceId: service.id, modelId: model.id });
            });
        }

        if (service.subCategories) {
            service.subCategories.forEach((sub) => {
                sub.models.forEach((model) => {
                    params.push({ serviceId: service.id, modelId: model.id });
                });
            });
        }
    });

    // 2. Add paths from Series Data
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

    Object.entries(seriesMap).forEach(([serviceId, data]) => {
        data.forEach((item) => {
            params.push({ serviceId, modelId: item.id });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceId: string; modelId: string }> }): Promise<Metadata> {
    const { serviceId, modelId } = await params;
    const model = getModelData(serviceId, modelId);

    if (!model) {
        return {
            title: 'Refurbished Device | CMTC Wireless',
            description: 'Check out our high-quality refurbished devices at CMTC Wireless.'
        };
    }

    return {
        title: `${model.name} Repair Services | CMTC Wireless`,
        description: `Professional ${model.name} repair in Minneapolis & St. Paul. Screen, battery, and component replacement with warranty.`,
    };
}

export default async function Page({ params }: { params: Promise<{ serviceId: string; modelId: string }> }) {
    await params; // Ensure params are ready
    return <ModelDetail />;
}
