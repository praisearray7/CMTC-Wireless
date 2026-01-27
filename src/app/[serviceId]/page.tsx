

import React from 'react';
import { notFound } from 'next/navigation';
import IphoneRepair from '@/pages/IphoneRepair';
import IpadRepair from '@/pages/IpadRepair';
import MacbookRepair from '@/pages/MacbookRepair';
import CellphoneRepair from '@/pages/CellphoneRepair';
import SmartwatchRepair from '@/pages/SmartwatchRepair';
import ComputerRepair from '@/pages/ComputerRepair';
import DesktopRepair from '@/pages/DesktopRepair';
import LaptopRepair from '@/pages/LaptopRepair';
import AllInOneRepair from '@/pages/AllInOneRepair';
import TabletRepair from '@/pages/TabletRepair';
import ServiceDetail from '@/pages/ServiceDetail';
import { repairServices } from '@/data/repairData';

export function generateStaticParams() {
    return repairServices.map((service) => ({
        serviceId: service.id,
    }));
}

// Map service IDs to their specific components
const COMPONENT_MAP: Record<string, React.ComponentType> = {
    'iphone-repair': IphoneRepair,
    'ipad-repair': IpadRepair,
    'macbook-repair': MacbookRepair,
    'cell-phone-repair': CellphoneRepair,
    'smart-watch-repair': SmartwatchRepair,
    'computer-repair': ComputerRepair,
    'desktop-repair': DesktopRepair,
    'laptop-repair': LaptopRepair,
    'aio-repair': AllInOneRepair,
    'tablet-repair': TabletRepair,
};

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
    const { serviceId } = await params;
    const Component = COMPONENT_MAP[serviceId];

    if (Component) {
        return <Component />;
    }

    // Fallback to generic ServiceDetail if no specific component exists
    // ServiceDetail handles its own "not found" state or data fetching based on URL
    return <ServiceDetail />;
}
