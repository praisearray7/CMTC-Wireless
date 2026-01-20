export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const aioData: SeriesData[] = [
    {
        id: 'imac-repair',
        title: 'iMac',
        subtitle: 'Apple iMac Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/iMac-Repair-200x200-1.jpg',
        description: [
            "iMac stuck on apple logo? Slow performance? We can help.",
            "SSD upgrades and screen repairs."
        ]
    },
    {
        id: 'hp-aio',
        title: 'HP All-In-One',
        subtitle: 'HP AIO Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/HP-AIO-Repair-200x200-1.jpg',
        description: [
            "Touchscreen repair and hard drive replacement.",
            "HP Pavilion and Envy All-in-Ones."
        ]
    },
    {
        id: 'dell-aio',
        title: 'Dell All-In-One',
        subtitle: 'Dell AIO Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Dell-AIO-Repair-200x200-1.jpg',
        description: [
            "Inspiron and OptiPlex All-in-One repairs.",
            "Power supply and motherboard issues."
        ]
    }
];
