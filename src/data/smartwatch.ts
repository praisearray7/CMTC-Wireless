export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const smartwatchData: SeriesData[] = [
    {
        id: 'apple-watch',
        title: 'Apple Watch Repair',
        subtitle: 'Apple Watch Series Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Apple-Watch-Repair-200x200-1.jpg',
        description: [
            "Expert repair for all Apple Watch Series. Series 9, Ultra, SE, and older models.",
            "Screen replacement, battery replacement, and more."
        ]
    },
    {
        id: 'galaxy-watch',
        title: 'Galaxy Watch Repair',
        subtitle: 'Samsung Galaxy Watch Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Samsung-Galaxy-Watch-Repair-200x200-1.jpg',
        description: [
            " repairs for Samsung Galaxy Watch 6, 5, 4, and Classic models.",
            "Fix broken screens, battery drain issues, and water damage."
        ]
    },
    {
        id: 'pixel-watch',
        title: 'Pixel Watch Repair',
        subtitle: 'Google Pixel Watch Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Google-Pixel-Watch-Repair-200x200-1.jpg',
        description: [
            "Google Pixel Watch repair services. Cracked screen? We can fix it.",
            "Fast and reliable service for your Pixel wearable."
        ]
    }
];
