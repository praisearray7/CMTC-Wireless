export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const computerData: SeriesData[] = [
    {
        id: 'desktop',
        title: 'Desktop Repair',
        subtitle: 'Desktop PC Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Desktop-Repair-200x200-1.jpg',
        description: [
            "We repair all brands of desktop computers. HP, Dell, Lenovo, Alienware, and custom builds.",
            "Hardware upgrades, virus removal, and diagnostics."
        ]
    },
    {
        id: 'laptop',
        title: 'Laptop Repair',
        subtitle: 'Laptop & Notebook Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Laptop-Repair-200x200-1.jpg',
        description: [
            "Screen replacement, keyboard repair, battery replacement for all laptop brands.",
            "MacBook, Windows Laptops, Chromebooks."
        ]
    },
    {
        id: 'all-in-one',
        title: 'All-In-One Repair',
        subtitle: 'All-In-One PC Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/All-in-One-Repair-200x200-1.jpg',
        description: [
            "Specialized repair for iMac, HP All-in-One, and Dell All-in-One computers.",
            "Display issues, hard drive upgrades, and board repair."
        ]
    }
];
