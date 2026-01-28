import { Smartphone, Battery, Zap, Camera, ScanFace, Droplets, Speaker } from 'lucide-react';

export interface ModelSpecificDetail {
    titleOverride?: string;
    descriptionOverride?: string;
    priceOverride?: string;
    features?: string[];
    specs?: Record<string, string>;
    compatibility?: string[];
}

export const genericRepairTemplate: ModelSpecificDetail = {
    titleOverride: '{model} {repairName}',
    descriptionOverride: `Are you looking for {model} {repairName} services or other {model} repair services in Minneapolis, MN?
When your device is not performing the way it's supposed to for any reason, you probably want it fixed as soon as possible.
The good news is CMTC Wireless specializes in this particular repair service.
Bring your device to our service center immediately and allow our technicians to determine which {model} repair service your device needs. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} {repairName} is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} issues. Did I mention this price includes labor, and brand-new premium grade parts?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement parts to fix your {model}.
For only {price} you can have your {model} repaired relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones, game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.`,
    features: [
        'Premium Quality Parts',
        'Professional Installation',
        '90-Day Warranty',
        'Fast Turnaround Time',
        'Data Safe Repair'
    ],
    specs: {
        'Service Type': 'Professional Repair',
        'Warranty': '90 Days',
        'Turnaround': 'Same Day (Most Repairs)'
    }
};

export const iphoneRepairTemplates: Record<string, ModelSpecificDetail> = {
    'battery-replacement': {
        titleOverride: '{model} Battery Replacement',
        descriptionOverride: `Are you looking for {model} Battery Replacement services or other {model} repair services in Minneapolis, MN?
The {model} comes with a high-capacity non-removable Li-Ion battery. When your device is not performing the way it's supposed to for any reason, you probably want it fixed as soon as possible.
The good news is CMTC Wireless specialize in this particular repair service.
Bring your iPhone to our service center immediately and allow our technicians to determine which {model} repair service your device needs. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} battery replacement is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} Battery issues. Did I mention this price includes labor, a brand-new premium grade {model} Battery?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement battery to fix your {model}.
For only {price} you can have your {model} Battery replaced relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} battery repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones, game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media? Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'High Capacity Li-Ion Cell',
            'Zero Cycle Count',
            'Texas Instruments (TI) Gas Gauge IC',
            '1-Year Performance Warranty',
            'Professional Installation',
            'Completed in 30 minutes or less'
        ],
        specs: {
            'Battery Type': 'Li-Ion (High Capacity)',
            'Cycle Count': 'Zero (Brand New)',
            'Warranty': '1 Year Performance',
            'Installation Time': '30 Minutes'
        }
    },
    'screen-replacement': {
        titleOverride: '{model} Premium OLED Screen Replacement',
        descriptionOverride: `Are you looking for {model} screen repair services or other {model} repair services in Minneapolis, MN?
Have you cracked your device screen or have you somehow damaged your OLED?
The {model} digitizer, also commonly known as the glass can be damaged or cracked when you drop your phone or bump it against a hard surface.
Your iPhone screen might be pitch black but you can still hear notifications as well as feel the device vibrate.
Sometimes it’s a line across your screen or the whole screen just appears distorted with weird looking colors on the screen.
Before you start thinking to yourself that the {model} screen repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} screen. Did I mention this price includes labor, a brand-new premium grade {model} Screen?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement screens to fix your {model}.
For only {price} you can have your {model} screen repaired relatively quickly and by a professional within 30 minutes.
CMTC Wireless is one of the most trusted {model} screen repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium Soft OLED Panel',
            'True Tone Programming Included',
            'Oleophobic Coating',
            'No "Important Display Message" Setup Available',
            'Lifetime Warranty on Defects',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Display Type': 'Premium OLED / LCD',
            'Touch Sensitivity': 'OEM Equivalent',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '30-45 Minutes'
        }
    },
    'back-glass-repair': {
        titleOverride: '{model} Back Glass Replacement',
        descriptionOverride: `Are you looking for {model} back cover replacement services or other {model} repair services in Minneapolis, MN?
Have you cracked your device back cover or have you somehow damaged your back cover?
The {model} back cover can be damaged or cracked when you drop your phone or bump it against a hard surface.
Your iPhone back cover might be pitch black but you can still hear notifications as well as feel the device vibrate.
Sometimes it’s a line across your back cover or the whole back cover just appears distorted with weird looking colors on the back cover.
Before you start thinking to yourself that the {model} back cover replacement is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} back cover. Did I mention this price includes labor, a brand-new premium grade {model} Back Cover?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement back covers to fix your {model}.
For only {price} you can have your {model} back cover repaired relatively quickly and by a professional within 30 minutes.
CMTC Wireless is one of the most trusted {model} back cover repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium Back Glass',
            'Laser Removal Process',
            'Factory Bond Strength',
            'Wireless Charging Tested',
            'Lifetime Warranty on Defects',
            'Same Day Service'
        ],
        specs: {
            'Material': 'Tempered Glass',
            'Technology': 'Laser Removal',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '2-3 Hours'
        }
    },
    'charging-port-repair': {
        titleOverride: '{model} Charging Port Repair',
        descriptionOverride: `Are you looking for {model} Charging Port Repair services or other {model} repair services in Minneapolis, MN?
When your device is not charging or connecting properly, you probably want it fixed as soon as possible.
The good news is CMTC Wireless specialize in this particular repair service.
Bring your iPhone to our service center immediately and allow our technicians to determine which {model} repair service your device needs. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} charging port repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} Charging Port issues. Did I mention this price includes labor, a brand-new premium grade Charging Port?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement parts to fix your {model}.
For only {price} you can have your {model} charging port repaired relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium OEM Quality Port',
            'Micro-soldering Service',
            'Charge & Data Sync Tested',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Charging Port Flex',
            'Connection Type': 'Lightning / USB-C',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '45-60 Minutes'
        }
    },
    'selfie-camera-repair': {
        titleOverride: '{model} Selfie Camera Repair',
        descriptionOverride: `Are you looking for {model} front camera repair services? Do you need other {model} repair services in Minneapolis, Minnesota?
Are you trying to take the perfect selfie and your {model} front cameras not working?
The {model} front camera can stop working due to several reasons, and you probably want it fixed as soon as possible. CMTC Wireless specializes in this particular repair service.
Bring your iPhone to our service center immediately and allow our technicians to determine if your {model} needs the repair service. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} Camera repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at.
That is right. fix your {model} front camera for as low as {price}. Did I mention this price includes labor, a brand-new premium grade {model} Selfie camera?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement cameras to fix your {model}.
For only {price} you can have your {model} Selfie camera repaired relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} Camera repair specialist in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium OEM Quality Camera',
            'Face ID Compatible (where applicable)',
            'Portrait Mode Tested',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Front Camera Module',
            'Resolution': 'OEM Standard',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '30-45 Minutes'
        }
    },
    'back-camera-repair': {
        titleOverride: '{model} Back Camera Repair',
        descriptionOverride: `Are you looking for {model} back camera repair services? Do you need other {model} repair services in Minneapolis, Minnesota?
Are you trying to take the perfect photo and your {model} rear cameras not working?
The {model} camera system is advanced but can stop working due to drops or other issues. CMTC Wireless specializes in this particular repair service.
Bring your iPhone to our service center immediately and allow our technicians determine if your {model} needs the repair service. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} Camera repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at.
That is right. fix your {model} back camera for as low as {price}. Did I mention this price includes labor, a brand-new premium grade {model} back camera?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement cameras to fix your {model}.
For only {price} you can have your {model} back camera repaired relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} Camera repair specialist in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium OEM Quality Camera',
            'Focus & Stabilization Tested',
            '4K Recording Tested',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Rear Camera Module',
            'Features': 'Focus & ISP Tested',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '30-45 Minutes'
        }
    },
    'volume-button-repair': {
        titleOverride: '{model} Volume Button Repair',
        descriptionOverride: `Are you looking for {model} Volume Button Repair services or other {model} repair services in Minneapolis, MN?
The good news is CMTC Wireless specializes in Apple {model} Volume Button Repair Service.
Bring your iPhone to our service center immediately and allow our technicians to determine which {model} Volume Button Repair service your device needs. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} Volume Button repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} Volume Button issues. Did I mention this price includes labor, a replacement premium grade {model} Volume Button?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement part to fix your {model} repair service.
For only {price} you can have your {model} Volume Buttons fixed relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} Volume Button repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium Flex Cable',
            'Tactile Click Restored',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Volume Flex Cable',
            'Function': 'Volume Up/Down/Mute',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '45-60 Minutes'
        }
    },
    'power-button-repair': {
        titleOverride: '{model} Power Button Repair',
        descriptionOverride: `Are you looking for {model} power button repair services or other {model} repair services in Minneapolis, MN?
Is your power button sticking down or will it not allow you to press it all together?
The {model} power button can be damaged when you drop your phone or simply press too hard too many times.
You might not be able to quiet your phone screen when you feel necessary, or you may not have the option to turn your phone on & off as you please
Before you start thinking to yourself that the {model} power button repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} Power button. Did I mention this price includes labor, a brand-new premium grade {model} power button?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement power buttons to fix your {model}
For only {price} you can have your {model} power button repaired relatively quickly and by a professional within 30 minutes.
CMTC Wireless is one of the most trusted {model} power button repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium Flex Cable',
            'Tactile Click Restored',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Power Button Flex',
            'Function': 'On/Off/Siri',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '45-60 Minutes'
        }
    },
    'loud-speaker-repair': {
        titleOverride: '{model} Loud Speaker Repair',
        descriptionOverride: `Are you looking for {model} Loud Speaker Repair services or other {model} repair services in Minneapolis, MN?
The good news is CMTC Wireless specializes in Apple {model} Loud Speaker Repair Service.
Bring your iPhone to our service center immediately and allow our technicians to repair determine which {model} Loud Speaker Repair service your device needs. We can have your device back to its original working state in no time.
Before you start thinking to yourself that the {model} Loud Speaker Phone repair is an easy enough repair you could perform, or that you should follow one of those do it yourself online video tutorials, I want you to consider the amazingly low price we are offering this service at; {price}
That is right. Only {price} to fix your {model} Loud Speaker Phone issues. Did I mention this price includes labor, a replacement premium grade {model} Loud Speaker Phone?
Premium parts at the most competitive prices
CMTC Wireless use only premium grade replacement part to fix your {model} repair service.
For only {price} you can have your {model} Loud Speaker Phone fixed relatively quickly and by a professional.
CMTC Wireless is one of the most trusted {model} Loud Speaker Phone repair specialists in the Twin Cities.
Thousands of satisfied customers have trusted CMTC Wireless since 2010 with all of their mobile device and electronics repair needs.
We have successfully repaired mobile phones,  game consoles, and laptop computers for our customers establishing ourselves as the premiere Twin Cities, go-to guys, whenever you need iPhone repair services.
I'm sure that your device is fully functional and can be fixed or restored to its original state within 30 minutes or less so go ahead and schedule an appointment immediately.
CMTC Wireless is your most trusted mobile device repair shop in the Twin Cities.
Be sure to check out what our customers are saying on Facebook and stay connected for deals and discounts.
Why would you want to follow us on social media?  Because CMTC Wireless will be offering flash sales and deals along with other promotions and contests.`,
        features: [
            'Premium Speaker Module',
            'Crystal Clear Audio',
            'Water Resistance Seal',
            'Lifetime Warranty',
            '1 Hour Turnaround Time'
        ],
        specs: {
            'Component': 'Loud Speaker Module',
            'Audio Quality': 'OEM Equivalent',
            'Warranty': 'Lifetime Warranty',
            'Installation Time': '45-60 Minutes'
        }
    }
};

export const modelSpecificDetails: Record<string, Record<string, ModelSpecificDetail>> = {
    // This can remain empty as we'll use iphoneRepairTemplates as generic defaults
};

export interface RepairDetail {
    title: string;
    desc: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        icon: Smartphone,
        image: "https://guide-images.cdn.ifixit.com/igi/KwZXWVoIYZDeqnWB.standard"
    },
    'charging-port-repair': {
        title: "Charging Port Repair",
        desc: "Fix loose lightning/USB-C ports or charging issues.",
        icon: Zap,
        image: "https://guide-images.cdn.ifixit.com/igi/XEeuXcRBSfRLqJrB.standard"
    },
    'selfie-camera-repair': {
        title: "Selfie Camera Repair",
        desc: "Replace shaky, blurry, or cracked front camera lenses.",
        icon: Camera,
        image: "https://guide-images.cdn.ifixit.com/igi/1K4RGTYVBiqJJBUE.standard"
    },
    'back-camera-repair': {
        title: "Back Camera Repair",
        desc: "Replace shaky, blurry, or cracked rear camera lenses.",
        icon: Camera,
        image: "https://guide-images.cdn.ifixit.com/igi/1K4RGTYVBiqJJBUE.standard"
    },
    'volume-button-repair': {
        title: "Volume Button Repair",
        desc: "Fix unresponsive or stuck volume buttons.",
        icon: ScanFace,
        image: "https://cart-products.cdn.ifixit.com/cart-products/GFmYE1LF5q6mpJxk.standard"
    },
    'power-button-repair': {
        title: "Power Button Repair",
        desc: "Fix unresponsive or stuck power buttons.",
        icon: Droplets,
        image: "https://guide-images.cdn.ifixit.com/igi/BFpQheP2LrgOScCW.standard"
    },
    'loud-speaker-repair': {
        title: "Loud Speaker Repair",
        desc: "Fix muffled sound or broken loud speakers.",
        icon: Speaker,
        image: "https://guide-images.cdn.ifixit.com/igi/BdjToYFP1FiY3bfn.standard"
    }
};
