export interface SeriesData {
    id: string;
    title: string;
    subtitle: string;
    description: string[]; // Paragraphs
    image: string;
}

export const seriesData: SeriesData[] = [
    {
        id: 'iphone-17-series',
        title: 'iPhone 17 Series Repair',
        subtitle: 'iPhone 17 Series Repair Services by CMTC Wireless',
        image: 'iphone 17.jpeg',
        description: [
            "Apple introduced the <b color='green'>iPhone 17</b> lineup in September 2024, featuring the <b color='green'>iPhone 17</b>, <b color='green'>17 Plus</b>, <b color='green'>17 Pro</b>, <b color='green'>17 Pro Max</b>, and the budget-friendly <b color='green'>iPhone 17e</b>. Notably, Apple discontinued the Mini model due to low sales, replacing it with the 6.1-inch iPhone 16e.",
            "The iPhone <b color='green'>17</b> and <b color='green'>17 Plus</b> come equipped with the <b color='green'>A18 chip</b>, offering improved performance and efficiency. These models feature a 48MP Fusion camera, the new Camera Control button for enhanced photography, and the customizable Action Button. Both models boast Super Retina XDR OLED displays and longer battery life, thanks to internal design improvements and iOS 18 optimizations.",
            "The iPhone <b color='green'>17 Pro</b> and <b color='green'>17 Pro Max</b> elevate the experience with the <b color='green'>A18 Pro chip</b>, larger displays (6.3-inch and 6.9 inch respectively), and advanced camera systems, including a 48MP Ultra Wide lens and a 5x Telephoto camera. These models also support 4K video recording at 120 fps and feature a Grade 5 titanium body for durability.",
            "The iPhone <b color='green'>17e</b>, introduced in February 2025, serves as a more affordable option, though it lacks features like MagSafe, the ultrawide camera, and Camera Control.",
            "All iPhone 17 models run on <b color='green'>iOS 18</b> and are built to support Apple Intelligence, Apple's personal intelligence system designed to enhance user experience while maintaining privacy.",
            "CMTC Wireless offers exceptional repair services for the entire <b color='green'>iPhone 17 series</b>. Whether you need a screen replacement, battery service, or camera repair, our expert technicians are equipped to keep your device in peak condition."
        ]
    },
    {
        id: 'iphone-16-series',
        title: 'iPhone 16 Series Repair',
        subtitle: 'iPhone 16 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2025/06/iPhone-16-Repairs-Minneapolis.jpg',
        description: [
            "Apple introduced the <b color='green'>iPhone 16</b> lineup in September 2024, featuring the <b color='green'>iPhone 16</b>, <b color='green'>16 Plus</b>, <b color='green'>16 Pro</b>, <b color='green'>16 Pro Max</b>, and the budget-friendly <b color='green'>iPhone 16e</b>. Notably, Apple discontinued the Mini model due to low sales, replacing it with the 6.1-inch iPhone 16e.",
            "The <b color='green'>iPhone 16</b> and <b color='green'>16 Plus</b> come equipped with the <b color='green'>A18 chip</b>, offering improved performance and efficiency. These models feature a 48MP Fusion camera, the new Camera Control button for enhanced photography, and the customizable Action Button. Both models boast Super Retina XDR OLED displays and longer battery life, thanks to internal design improvements and iOS 18 optimizations.",
            "The <b color='green'>iPhone 16 Pro</b> and <b color='green'>16 Pro Max</b> elevate the experience with the <b color='green'>A18 Pro chip</b>, larger displays (6.3-inch and 6.9 inch respectively), and advanced camera systems, including a 48MP Ultra Wide lens and a 5x Telephoto camera. These models also support 4K video recording at 120 fps and feature a Grade 5 titanium body for durability.",
            "The <b color='green'>iPhone 16e</b>, introduced in February 2025, serves as a more affordable option, though it lacks features like MagSafe, the ultrawide camera, and Camera Control.",
            "All iPhone 16 models run on <b color='green'>iOS 18</b> and are built to support Apple Intelligence, Apple's personal intelligence system designed to enhance user experience while maintaining privacy.",
            "CMTC Wireless offers exceptional repair services for the entire <b color='green'>iPhone 16 series</b>. Whether you need a screen replacement, battery service, or camera repair, our expert technicians are equipped to keep your device in peak condition."
        ]
    },
    // Placeholders for other series to prevent errors if clicked
    {
        id: 'iphone-15-series',
        title: 'iPhone 15 Series Repair',
        subtitle: 'iPhone 15 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2024/03/iPhone-15-Repairs.jpg', // Placeholder image
        description: [
            "Apple unveiled the <b color='green'>iPhone 15</b>, <b color='green'>15 Pro</b>, <b color='green'>15 Pro Max</b>, and <b color='green'>iPhone 15 Mini</b> in 2023. The <b color='green'>iPhone 15 series</b> showcases a remarkable design evolution with further upgraded camera features, including a more sophisticated camera system and even larger sensor sizes for superior low-light performance.",
            "The new models’ displays are more vibrant and responsive than ever, offering an unmatched viewing experience. Battery life has been significantly improved, allowing you to enjoy your device for extended periods without the need for frequent recharging.",
            "Powered by the <b color='green'>A17 Bionic chip</b>, the <b color='green'>iPhone 15 series</b> is the fastest and most efficient range to date, making every task smoother and faster. This chip also introduces new possibilities in augmented reality and machine learning, enhancing your interaction with the digital world.",
            "The base models of the <b color='green'>iPhone 15 series</b> start with 128GB of storage, with options to upgrade to 256GB, 512GB, or a new 1TB option for those requiring maximum space. Trust Gophermods to offer exceptional repair services for your iPhone 15 series, ensuring your device remains in peak condition for years to come."
        ]
    },
    {
        id: 'iphone-14-series',
        title: 'iPhone 14 Series Repair',
        subtitle: 'iPhone 14 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2022/10/iPhone-14-Repair.jpg',
        description: [
            "Apple unveiled the <b color='green'>iPhone 14</b>, <b color='green'>14 Pro</b>, <b color='green'>14 Pro Max</b>, and <b color='green'>iPhone 14 Mini</b> in 2022. The <b color='green'>iPhone 14 series</b> boasts a stunning design with upgraded camera features, including an enhanced camera system and larger sensor sizes for even better low-light performance.",
            "The new model’s display is more vivid and responsive, providing an unparalleled viewing experience. The battery life has also been extended, ensuring you can use your device for longer periods without needing to recharge.",
            "The <b color='green'>A16 Bionic chip</b> powering the <b color='green'>iPhone 14 series</b> is faster and more efficient than any chip that came before it, allowing you to complete tasks with ease and speed. Additionally, the chip enables new features like improved augmented reality capabilities and advanced machine learning.",
            "The base models of the <b color='green'>iPhone 14 series</b> come with 128GB of storage, which can be expanded to 256GB or 512GB for those who need more space. Trust Gophermods to provide top-notch repair services for your <b color='green'>iPhone 14 series</b>, so you can keep your device running smoothly for years to come."
        ]
    },
    {
        id: 'iphone-13-series',
        title: 'iPhone 13 Series Repair',
        subtitle: 'iPhone 13 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2022/01/iPhone-13-Repair-by-Gophermods.jpg',
        description: [
            "Apple announced the <b color='green'>iPhone 13</b>, <b color='green'>13 Pro</b>, <b color='green'>13 Pro Max</b>, and <b color='green'>iPhone 13 Mini</b> in 2021. The <b color='green'>iPhone 13 series</b> may not look all that new — other than the new camera lens layout — it as an incremental upgrade over the previous generation.",
            "The new model’s screen is brighter than its predecessor’s. The battery lasts longer too. Apple has improved an already great camera with new sensors and computational photography features that make you feel like a pro.",
            "The <b color='green'>A15 Bionic chip</b> powering the <b color='green'>iPhone 13 series</b> is faster than every chip out there. And it’s not just about how fast it is. The chip lets you do things you couldn’t do before, like add depth of field to your videos while automatically shifting focus, and change the way your pictures look with Photographic Styles.",
            "The <b color='green'>iPhone 13 series</b> base models now include 128GB of storage (up from 64GB on the iPhone 12), which goes up to 256GB or 512GB. If you’re considering upgrading your device, you can also sell your iPhone to us."
        ]
    },
    {
        id: 'iphone-12-series',
        title: 'iPhone 12 Series Repair',
        subtitle: 'iPhone 12 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2021/09/iPhone-12-Repair.jpg',
        description: [
            "Apple announced the <b color='green'>iPhone 12</b>, <b color='green'>12 Pro</b>, <b color='green'>12 Pro Max</b>, and <b color='green'>iPhone 12 Mini</b> in 2020. With features including 5G, a super-fast and powerful processor, and fantastic rear cameras, the <b color='green'>iPhone 12 series</b> will likely be a top choice for anyone in need of a phone.",
            "In general, all four iPhone 12 models look similar. All have OLED displays, are IP68 rated for water-resistance, have magnetic backings that work with new MagSafe chargers and accessories and have more durable screens strengthened by ceramic. And like past iPhone models, they don’t have headphone jacks.",
            "The <b color='green'>iPhone 12 series</b> comes in six color variants: a deep blue, a minty green, red, purple, white, and black. The <b color='green'>iPhone 12 Pro</b> and <b color='green'>12 Pro Max</b>, which have four colors. Apple offers the familiar grey, silver, and gold and a grayish-blue it calls Pacific blue. If you’re considering upgrading your device, you can also sell your iPhone to us."
        ]
    },
    {
        id: 'iphone-11-series',
        title: 'iPhone 11 Series Repair',
        subtitle: 'iPhone 11 Series Repair Services by CMTC Wireless',
        image: 'https://www.gophermods.com/wp-content/uploads/2019/09/iPhone-11-Repair-Thumb.jpg',
        description: [
            "Apple announced the <b color='green'>iPhone 11</b>, <b color='green'>11 Pro</b> and <b color='green'>11 Pro Max</b> in 2019. The <b color='green'>iPhone 11 series</b> phones have fantastic cameras, a blazingly fast processor, and excellent build quality.",
            "All three phones have the same processor, same main, ultrawide and selfie cameras, and are compatible with iOS 15. The <b color='green'>iPhone 11 Pro</b> and <b color='green'>11 Pro Max</b> are identical in nearly every way aside from price, size, weight, battery life, and screen resolution. The <b color='green'>iPhone 11</b> has many of the same 11 Pro features. On the other hand, the <b color='green'>iPhone 11 Pro</b> has a few key additions that make it stand out.",
            "As far as colors, you can buy an iPhone 11 in six bright and fun colors. The <b color='green'>iPhone 11 Pro</b> and <b color='green'>Pro Max</b> is less flashy and comes in four rather serious finishes (space gray, silver, gold or midnight green). If you’re considering upgrading your device, you can also sell your iPhone to us."
        ]
    },
    {
        id: 'iphone-se-2022-series',
        title: 'iPhone SE (3rd Gen) Repair',
        subtitle: 'iPhone SE 2022 Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2023/06/iPhone-SE-2022-3rd-Gen-Repair.jpg',
        description: [
            "Apple unveiled the <b color='green'>iPhone SE 2022</b>, also known as the <b color='green'>3rd Gen iPhone SE</b>, an affordable and compact smartphone packed with impressive features. Building upon the success of the <b color='green'>iPhone SE 2020</b>, this device combines a sleek design with powerful performance. It features a 4.7-inch Retina IPS LCD display with vibrant visuals and ion-strengthened glass protection.",
            "Powered by the Apple A15 Bionic chip, with options available in 64GB, 128GB, and 256GB storage capacities, all paired with 4GB of RAM.",
            "The device excels in photography with its single 12-megapixel rear camera, equipped with advanced features like Quad-LED flash and HDR. It supports 4K video recording at various frame rates. The front-facing 7-megapixel camera captures detailed selfies and supports 1080p video recording.",
            "Available in Midnight, Starlight, and Red color variants, the <b color='green'>iPhone SE 2022</b> offers a modern design that is both elegant and durable. If you’re considering upgrading your device, you can also sell your iPhone to us."
        ]
    },
    {
        id: 'iphone-se-2020-series',
        title: 'iPhone SE (2nd Gen) Repair',
        subtitle: 'iPhone SE 2020 Repair Services',
        image: 'https://www.gophermods.com/wp-content/uploads/2020/05/iPhone-SE-2020-200x200.jpg',
        description: [
            "Apple introduced the <b color='green'>iPhone SE 2020</b>, also known as the <b color='green'>2nd Gen iPhone SE</b>, a budget-friendly option for those seeking the latest technology in a compact design. Released alongside the iPhone 11 series, the <b color='green'>iPhone SE 2020</b> offers a range of features that make it an appealing choice for many users.",
            "The design of the <b color='green'>iPhone SE 2020</b> resembles that of the iPhone 8, featuring a 4.7-inch Retina HD display with True Tone technology. This compact size makes it comfortable to hold and operate with one hand, catering to those who prefer smaller smartphones. The device retains the classic Home button with Touch ID, providing a familiar and convenient unlocking method.",
            "A <b color='green'>iPhone SE 2020</b> comes in three classic choices: black, white, and red.",
            "If you’re looking for a cost-effective iPhone that doesn’t compromise on performance, the <b color='green'>iPhone SE 2020</b> is a solid choice. With its powerful processor, capable camera system, compact design, and affordable price tag, it caters to those who prioritize functionality and value in a smartphone. If you’re considering upgrading your device, you can also sell your iPhone to us."
        ]
    },
];
