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
            "<b color='green'>Pro</b> and <b color='green'>Air</b> models.",
            "Screen, battery, keyboard, and logic board repairs."
        ]
    },
    {
        id: 'windows-laptop',
        title: 'Windows Laptop',
        subtitle: 'PC Laptop Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2019/02/toshiba-chromebook-repair.jpg',
        description: [
            "<b color='green'>HP</b>, <b color='green'>Dell</b>, <b color='green'>Lenovo</b>, <b color='green'>Asus</b>, <b color='green'>Acer</b>, and more.",
            "Hinge repair, charging port replacement, screen repair."
        ]
    },
    {
        id: 'chromebook-repair',
        title: 'Chromebook',
        subtitle: 'Chromebook Repair',
        image: 'https://www.gophermods.com/wp-content/uploads/2019/02/samsung-chromebook-repair.png',
        description: [
            "Affordable repairs for school and personal Chromebooks.",
            "Screen and battery replacements."
        ]
    }
];
