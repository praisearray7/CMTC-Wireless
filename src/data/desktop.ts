export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const desktopData: SeriesData[] = [
    {
        id: 'gaming-desktop',
        title: 'Gaming Desktop',
        subtitle: 'Gaming PC Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Gaming-PC-Repair-200x200-1.jpg',
        description: [
            "High performance repairs for high performance machines.",
            "Water cooling maintenance, GPU upgrades, and overheating fixes."
        ]
    },
    {
        id: 'workstation',
        title: 'Workstation',
        subtitle: 'Professional Workstation Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Workstation-Repair-200x200-1.jpg',
        description: [
            "Reliable repairs for business critical workstations.",
            "Xeon processors, ECC RAM, and Quadro GPU support."
        ]
    },
    {
        id: 'home-office',
        title: 'Home/Office PC',
        subtitle: 'Standard Desktop Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Home-Office-PC-Repair-200x200-1.jpg',
        description: [
            "Everyday computer repairs for browsing, email, and office work.",
            "Power supply replacement, hard drive checking, and cleanup."
        ]
    }
];
