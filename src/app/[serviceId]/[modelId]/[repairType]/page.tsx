import RepairDetail from '@/pages/RepairDetail';

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
import { repairDetails } from '@/data/modelSpecificDetails';

import type { Metadata } from 'next';
import { getModelData } from '@/data/modelUtils';

export function generateStaticParams() {
    const params: { serviceId: string; modelId: string; repairType: string }[] = [];
    const repairTypes = Object.keys(repairDetails);

    // 1. Add paths from repairServices (Standard Models)
    repairServices.forEach((service) => {
        if (service.models) {
            service.models.forEach((model) => {
                repairTypes.forEach((repairType) => {
                    params.push({ serviceId: service.id, modelId: model.id, repairType });
                });
            });
        }

        if (service.subCategories) {
            service.subCategories.forEach((sub) => {
                sub.models.forEach((model) => {
                    repairTypes.forEach((repairType) => {
                        params.push({ serviceId: service.id, modelId: model.id, repairType });
                    });
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
            repairTypes.forEach((repairType) => {
                params.push({ serviceId, modelId: item.id, repairType });
            });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceId: string; modelId: string; repairType: string }> }): Promise<Metadata> {
    const { serviceId, modelId, repairType } = await params;
    const model = getModelData(serviceId, modelId);

    // Format repair type string (e.g. "screen-repair" -> "Screen Repair")
    const formattedRepairType = repairType
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    if (!model) {
        return {
            title: `${formattedRepairType} Service | CMTC Wireless`,
            description: `Expert ${formattedRepairType} services at CMTC Wireless.`
        };
    }

    return {
        title: `${formattedRepairType} for ${model.name} | CMTC Wireless`,
        description: `Professional ${formattedRepairType} for ${model.name} in Minneapolis. Fast, reliable, and affordable repair services.`,
    };
}

export default async function Page({ params }: { params: Promise<{ serviceId: string; modelId: string; repairType: string }> }) {
    await params; // Ensure params are ready
    return <RepairDetail />;
}
