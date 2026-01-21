export interface FAQItem {
    question: string;
    answer: string;
}

// Shared questions for similar devices can be referenced or duplicated
const computerQuestions = [
    {
        question: 'How long does a computer repair take?',
        answer: 'Most software issues are resolved within 24 hours. Hardware repairs like screen or battery replacements typically take 1-3 days depending on parts.'
    },
    {
        question: 'Can you recover data from my dead computer?',
        answer: 'Yes, we specialize in data recovery from failing hard drives and SSDs, even if the computer itself does not turn on.'
    },
    {
        question: 'Is it worth fixing an old laptop?',
        answer: 'It depends on the specs. Usage of an SSD and RAM upgrade can often make an old laptop feel brand new for a fraction of the cost of a replacement.'
    },
    {
        question: 'Do you remove viruses and malware?',
        answer: 'Absolutely. We can remove viruses, spyware, and malware, and also install protection to prevent future infections.'
    }
];

export const faqData: Record<string, FAQItem[]> = {
    'cell-phone': [
        {
            question: 'How long does a typical phone repair take?',
            answer: 'Most standard repairs, such as screen or battery replacements, are completed within 30-60 minutes. More complex issues like water damage or motherboard repairs may take longer.'
        },
        {
            question: 'Do you offer a warranty on phone repairs?',
            answer: 'Yes, we offer a warranty on parts and labor for all our repairs. Please ask our staff for specific details regarding your repair type.'
        },
        {
            question: 'Will I lose my data during the repair?',
            answer: 'In most cases, your data remains safe. However, we always recommend backing up your device before bringing it in, just to be safe.'
        },
        {
            question: 'Do you use original parts?',
            answer: 'We use high-quality parts that meet or exceed the original manufacturer\'s specifications. We also offer original parts for certain devices upon request.'
        },
        {
            question: 'Can you fix water-damaged phones?',
            answer: 'Yes, we have specialized equipment and expertise to treat wate damage. Success depends on how severe the damage is and how quickly you bring it to us.'
        }
    ],
    'macbook': [
        {
            question: 'How long does a MacBook screen replacement take?',
            answer: 'Screen replacements usually take 2-4 hours, depending on part availability. We strive to get your device back to you as quickly as possible.'
        },
        {
            question: 'Can you upgrade the RAM or SSD on my MacBook?',
            answer: 'It depends on the specific model. Older models are often upgradeable, while newer models have soldered components. Bring it in for a free consultation.'
        },
        {
            question: 'My MacBook won\'t turn on. Can you fix it?',
            answer: 'Yes, we diagnose power issues, logic board failures, and battery problems. Our diagnostic service is free.'
        },
        {
            question: 'Do you offer data recovery services for MacBooks?',
            answer: 'Yes, we can attempt to recover data from failing hard drives or SSDs. We also work with clean room partners for severe mechanical failures.'
        },
        {
            question: 'Is it worth repairing an older MacBook?',
            answer: 'Often, yes! A battery replacement or SSD upgrade can significantly extend the life of an older Mac. We can give you an honest assessment.'
        }
    ],
    'ipad': [
        {
            question: 'How long does an iPad glass replacement take?',
            answer: 'iPad screen repairs typically take 2-3 hours as the adhesive needs time to properly set.'
        },
        {
            question: 'My iPad battery drains fast. Can you replace it?',
            answer: 'Yes, we can replace iPad batteries. It usually takes a few hours and revitalizes your device\'s battery life.'
        },
        {
            question: 'Do you fix charging port issues?',
            answer: 'Yes, if your iPad is not charging or connecting to the computer, we can replace the charging port.'
        }
    ],
    'tablet': [ // Alias for tablet using iPad-like questions or generic
         {
            question: 'How long does a tablet screen repair take?',
            answer: 'Most tablet screen repairs take 2-3 hours to ensure the adhesive sets properly.'
        },
        {
            question: 'Can you replace the battery in my tablet?',
            answer: 'Yes, we replace batteries for most major tablet brands including Samsung and iPad.'
        },
        {
            question: 'My tablet is not charging. Can you help?',
            answer: 'Charging port issues are common and we can typically replace the port to restore functionality.'
        }
    ],
    'computer': computerQuestions,
    'laptop': computerQuestions,
    'desktop': computerQuestions,
    'smartwatch': [
        {
            question: 'Can you replace the glass on my Apple Watch?',
            answer: 'Yes, we offer screen replacements for Apple Watch and other smartwatches.'
        },
        {
            question: 'Do you verify water resistance after repair?',
            answer: 'We use original-grade adhesives, but we generally recommend avoiding swimming with a repaired device to be safe.'
        }
    ],
    'buy': [
        {
            question: 'Are these devices new or used?',
            answer: 'We sell certified pre-owned devices. Each one is rigorously tested, inspected, and cleaned to ensure it works like new. We define the condition (e.g., Like New, Excellent, Good) clearly for each device.'
        },
        {
            question: 'Do the phones come with a warranty?',
            answer: 'Yes! All our pre-owned devices come with a warranty. This covers any functional defects but does not cover accidental damage like drops or spills.'
        },
        {
            question: 'Are the phones unlocked?',
            answer: 'Most of our devices are unlocked and can be used with any carrier. We will explicitly state if a device is locked to a specific network.'
        },
        {
            question: 'Can I trade in my old device?',
            answer: 'Absolutely. We offer trade-ins for many devices. Bring your old phone in for an appraisal, and you can apply that credit toward your new purchase.'
        },
        {
            question: 'Do you offer financing?',
            answer: 'We have various payment options available. Please ask our staff about current financing plans.'
        }
    ],
    'default': [
        {
            question: 'Are you sure you can fix it?',
            answer: 'We have a very high success rate with all types of electronic repairs. Our technicians are highly trained and experienced.'
        },
        {
            question: 'Can I bring you parts from the Apple Self-Repair Program?',
            answer: 'Yes, we are happy to install parts you have purchased yourself, though we cannot offer a warranty on the parts themselves.'
        },
        {
            question: 'Do you accept AppleCare?',
            answer: 'We are an independent repair shop and do not directly bill AppleCare. However, our prices are often more competitive.'
        },
        {
            question: 'Will you need my passcode?',
            answer: 'For testing purposes after repair (cameras, speakers, etc.), it is helpful. If you are uncomfortable, we can test basic functions without it.'
        },
        {
            question: 'How fast can you repair it?',
            answer: 'Most common repairs are done within an hour. We perform diagnostics first to give you an accurate time estimate.'
        },
        {
            question: 'Do you have any guarantees?',
            answer: 'Yes, we stand by our work with a comprehensive warranty on all repairs.'
        },
        {
            question: 'What if you can\'t fix it?',
            answer: 'If we can\'t fix it, you don\'t pay. We operate on a "No Fix, No Fee" policy for most standard repairs.'
        }
    ]
};
