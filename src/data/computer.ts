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
        image: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=2048x2048&w=is&k=20&c=W5EgkJh_-8XOIwJpt7QKMgOWqDgqRpRFPQ0aP_gEo_E=',
        description: [
            "We repair all brands of desktop computers. HP, Dell, Lenovo, Alienware, and custom builds.",
            "Hardware upgrades, virus removal, and diagnostics."
        ]
    },
    {
        id: 'laptop',
        title: 'Laptop Repair',
        subtitle: 'Laptop & Notebook Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2019/02/toshiba-chromebook-repair.jpg',
        description: [
            "Screen replacement, keyboard repair, battery replacement for all laptop brands.",
            "MacBook, Windows Laptops, Chromebooks."
        ]
    },
    {
        id: 'all-in-one',
        title: 'All-In-One Repair',
        subtitle: 'All-In-One PC Repair Services',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrcLKZ9DMSncfH6aLGYmFoX3qquo28gribHQKuG_G64ZQ_Eaw9YDhMbiKFL1jMs_Hp5E7mFmGZYiBIa4ccOgHETL82TJk4DEPQ-NUZcKv_8nK_qCfRqFkiPg',
        description: [
            "Specialized repair for iMac, HP All-in-One, and Dell All-in-One computers.",
            "Display issues, hard drive upgrades, and board repair."
        ]
    }
];
