export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const tabletData: SeriesData[] = [
    {
        id: 'ipad-link',
        title: 'iPad',
        subtitle: 'Apple iPad Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/iPad-Repair-by-Gophermods-200x200-1.jpg',
        description: [
            "The world's most popular tablet.",
            "We fix all models from the original to the latest Pro."
        ]
    },
    {
        id: 'android-tablet',
        title: 'Android Tablet',
        subtitle: 'Android Tablet Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Android-Tablet-Repair-200x200-1.jpg',
        description: [
            "Samsung Galaxy Tab, Amazon Fire, and more.",
            "Charging port and screen replacement service."
        ]
    },
    {
        id: 'surface',
        title: 'Microsoft Surface',
        subtitle: 'Surface Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Microsoft-Surface-Repair-200x200-1.jpg',
        description: [
            "Surface Pro, Surface Go, and Surface Book.",
            "Battery replacement and screen repair for Microsoft devices."
        ]
    }
];
