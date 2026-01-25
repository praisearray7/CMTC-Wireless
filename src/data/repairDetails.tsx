import { Smartphone, Battery, Zap, Camera, ScanFace, Droplets, Speaker, Database, SmartphoneNfc } from 'lucide-react';

export interface RepairDetail {
    title: string;
    desc: string;
    icon: any;
    image?: string;
}

export const repairDetails: Record<string, RepairDetail> = {
    'screen-replacement': {
        title: "Screen Replacement",
        desc: "Fix cracked screens, dead pixels, or ghost touch issues (OLED/LCD).",
        icon: Smartphone,
        image: "https://guide-images.cdn.ifixit.com/igi/Nhidj6Zds5eAZUsO.standard"
    },
    'battery-replacement': {
        title: "Battery Replacement",
        desc: "Restore peak performance and all-day battery life.",
        icon: Battery,
        image: "https://guide-images.cdn.ifixit.com/igi/rUCKeCXJZV2KhrhI.standard"
    },
    'back-glass-repair': {
        title: "Back Glass Repair",
        desc: "Laser removal for shattered back glass panels.",
        icon: SmartphoneNfc,
        image: "https://guide-images.cdn.ifixit.com/igi/KwZXWVoIYZDeqnWB.standard"
    },
    'charging-port-repair': {
        title: "Charging Port Repair",
        desc: "Fix loose lightning/USB-C ports or charging issues.",
        icon: Zap,
        image: "https://guide-images.cdn.ifixit.com/igi/XEeuXcRBSfRLqJrB.standard"
    },
    'camera-repair': {
        title: "Camera Repair",
        desc: "Replace shaky, blurry, or cracked camera lenses.",
        icon: Camera,
        image: "https://guide-images.cdn.ifixit.com/igi/1K4RGTYVBiqJJBUE.standard"
    },
    'face-id-repair': {
        title: "Face ID Repair",
        desc: "Restore Face ID functionality (on supported models).",
        icon: ScanFace,
        image: "https://cart-products.cdn.ifixit.com/cart-products/GFmYE1LF5q6mpJxk.standard"
    },
    'water-damage-cleaning': {
        title: "Water Damage Cleaning",
        desc: "Professional ultrasonic cleaning for liquid damage.",
        icon: Droplets,
        image: "https://guide-images.cdn.ifixit.com/igi/BFpQheP2LrgOScCW.standard"
    },
    'speaker-repair': {
        title: "Speaker Repair",
        desc: "Fix muffled sound or broken ear speakers.",
        icon: Speaker,
        image: "https://guide-images.cdn.ifixit.com/igi/BdjToYFP1FiY3bfn.standard"
    },
    'data-recovery': {
        title: "Data Recovery",
        desc: "Retrieve photos and data from dead devices.",
        icon: Database,
        image: "https://guide-images.cdn.ifixit.com/igi/ySKnJN5VU2UOdNHR.standard"
    },
    // 'unlock-services': {
    //     title: "Unlock Services",
    //     desc: "Carrier unlocks and Google FRP removal services.",
    //     icon: Unlock,
    //     image: "https://guide-images.cdn.ifixit.com/igi/NewImagePlaceholder.standard" // Placeholder or reuse
    // },
    // 'glass-replacement': {
    //     title: "Glass Replacement",
    //     desc: "Replace cracked digitizer glass (if separate from LCD).",
    //     icon: Tablet,
    //     image: "https://guide-images.cdn.ifixit.com/igi/NewImagePlaceholder.standard"
    // },
    // 'lcd-screen-repair': {
    //     title: "LCD Screen Repair",
    //     desc: "Fix bleeding colors, dead pixels, or black screens.",
    //     icon: Monitor,
    //     image: "https://guide-images.cdn.ifixit.com/igi/NewImagePlaceholder.standard"
    // },
    // 'home-button-repair': {
    //     title: "Home Button Repair",
    //     desc: "Fix stuck or unresponsive home buttons.",
    //     icon: CircleDot,
    //     image: "https://guide-images.cdn.ifixit.com/igi/NewImagePlaceholder.standard"
    // },
    // 'frame-straightening': {
    //     title: "Frame Straightening",
    //     desc: "Reshape bent iPad housings (common on Pros).",
    //     icon: Maximize,
    //     image: "https://guide-images.cdn.ifixit.com/igi/NewImagePlaceholder.standard"
    // }
};
