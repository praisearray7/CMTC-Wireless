export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const cellphoneData: SeriesData[] = [
    {
        id: 'samsung',
        title: 'Samsung Phone Repair',
        subtitle: 'Samsung Galaxy Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Samsung-Galaxy-Repair-200x200-1.jpg',
        description: [
            "We offer professional repair services for all Samsung Galaxy models including the S Series, Note Series, and A Series.",
            "From cracked screens to battery replacements, we use high quality parts to get your device back to working condition."
        ]
    },
    {
        id: 'motorola',
        title: 'Motorola Phone Repair',
        subtitle: 'Motorola Moto Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Motorola-Repair-200x200-1.jpg',
        description: [
            "Expert Motorola repair services for Moto G, Moto E, Moto Z, and Moto X series.",
            "Fast turnaround times for screen replacements, charging port repairs, and more."
        ]
    },
    {
        id: 'lg',
        title: 'LG Phone Repair',
        subtitle: 'LG Smartphone Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/LG-Repair-200x200-1.jpg',
        description: [
            "Reliable LG phone repair for G Series, V Series, and other models.",
            "We handle broken screens, battery issues, and software problems."
        ]
    },
    {
        id: 'oneplus',
        title: 'OnePlus Phone Repair',
        subtitle: 'OnePlus Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/OnePlus-Repair-200x200-1.jpg',
        description: [
            "Specialized repair for OnePlus devices. Screen, battery, and component level repairs.",
            "Get your OnePlus 11, 10, 9, or Nord series device fixed today."
        ]
    },
    {
        id: 'google',
        title: 'Google Pixel Repair',
        subtitle: 'Google Pixel Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Google-Pixel-Repair-200x200-1.jpg',
        description: [
            "Certified repair services for Google Pixel phones. Pixel 8, 7, 6, and older generations.",
            "Original quality parts for displays and batteries."
        ]
    },
    {
        id: 'other',
        title: 'Other Brands Repair',
        subtitle: 'Other Smartphone Brand Repairs',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Cellphone-Repair-200x200-1.jpg',
        description: [
            "We also repair HTC, Huawei, Sony, and many other smartphone brands.",
            "Contact us for a quote on your specific device."
        ]
    }
];
