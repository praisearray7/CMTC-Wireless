export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

export const laptopData: SeriesData[] = [
    {
        id: 'macbook-repair',
        title: 'MacBook',
        subtitle: 'Apple MacBook Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2019/05/MacBook-Pro-Repair.jpg',
        description: [
            "Pro and Air models.",
            "Screen, battery, keyboard, and logic board repairs."
        ]
    },
    {
        id: 'windows-laptop',
        title: 'Windows Laptop',
        subtitle: 'PC Laptop Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Windows-Laptop-Repair-200x200-1.jpg',
        description: [
            "HP, Dell, Lenovo, Asus, Acer, and more.",
            "Hinge repair, charging port replacement, screen repair."
        ]
    },
    {
        id: 'chromebook-repair',
        title: 'Chromebook',
        subtitle: 'Chromebook Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/04/Chromebook-Repair-200x200-1.jpg',
        description: [
            "Affordable repairs for school and personal Chromebooks.",
            "Screen and battery replacements."
        ]
    }
];
