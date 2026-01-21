import googlePixelWatchImg from '../assets/GooglePixelWatch.png';

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
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-hermes-ultra-202509_GEO_US?wid=680&hei=528&fmt=jpeg&qlt=90&.v=Ly93VWF6a1dGOWJLL3RMM0s0eGZ6bGptdm4xZHhxZWZzUlhoOU9Da0hNNVU4aHdGN0xlWGtoZjR6dnFUWE9VVTV0VzZXemQ1ZkRzK0p5ZFBxZERkQ3o2K3c3eDN1QlVKV09nQzhyNmV5TTNjeFVjd0E0NEk3ZEplNUNxd0pRazY',
        description: [
            "Expert repair for all Apple Watch Series. Series 9, Ultra, SE, and older models.",
            "Screen replacement, battery replacement, and more."
        ]
    },
    {
        id: 'galaxy-watch',
        title: 'Galaxy Watch Repair',
        subtitle: 'Samsung Galaxy Watch Repair',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch7-l310-sm-l310nzsains-542366980?$684_547_PNG$',
        description: [
            " repairs for Samsung Galaxy Watch 6, 5, 4, and Classic models.",
            "Fix broken screens, battery drain issues, and water damage."
        ]
    },
    {
        id: 'pixel-watch',
        title: 'Pixel Watch Repair',
        subtitle: 'Google Pixel Watch Repair',
        image: googlePixelWatchImg,
        description: [
            "Google Pixel Watch repair services. Cracked screen? We can fix it.",
            "Fast and reliable service for your Pixel wearable."
        ]
    }
];
