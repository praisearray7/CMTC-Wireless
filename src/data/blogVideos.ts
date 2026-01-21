import macbookThumb from '../assets/macbook_repair_thumb.jpg';
import logicBoardThumb from '../assets/logic_board_thumb.jpg';

export interface VideoData {
    title: string;
    category: string;
    thumbnail?: string; // URL or imported image
    link: string; // Google Drive Folder ID or Full URL
    isDirectFile?: boolean; // If true, opens as specific file. If false, opens as folder view.
}

export interface BlogSection {
    id: string;
    title: string;
    description: string;
    videos: VideoData[];
}

// ----------------------------------------------------------------------
// HELPER: Generate placeholder videos with cycling thumbnails
// ----------------------------------------------------------------------
const generatePlaceholders = (count: number, category: string, defaultLink: string, thumb: string | string[], baseTitle: string): VideoData[] => {
    return Array.from({ length: count }, (_, i) => {
        let selectedThumb = '';
        if (Array.isArray(thumb)) {
             selectedThumb = thumb[i % thumb.length];
        } else {
             selectedThumb = thumb;
        }

        return {
            title: `${baseTitle} ${i + 1}`,
            category: category,
            thumbnail: selectedThumb,
            link: defaultLink,
            isDirectFile: false
        };
    });
};

// Thumbnail Arrays for Variety (10 Unique Images Each)
const pcThumbnails = [
    'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.pexels.com/photos/15109651/pexels-photo-15109651.jpeg?_gl=1*1006gio*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODYyMjMkajU1JGwwJGgw', // 3. Gaming Rig (New)
    'https://images.pexels.com/photos/33693785/pexels-photo-33693785.jpeg?_gl=1*18sm2r2*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODYzNjckajUzJGwwJGgw', // 4. RGB Setup (New)
    'https://images.pexels.com/photos/30265371/pexels-photo-30265371.jpeg?_gl=1*kbaonc*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODY0NzkkajMkbDAkaDA.', // 5. PC Build Process (New)
    'https://images.pexels.com/photos/30469974/pexels-photo-30469974.jpeg?_gl=1*1564608*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODY1MjIkajU1JGwwJGgw', // 6. Internal Components (New)
    'https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg?_gl=1*f6vnfq*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODY1NzAkajckbDAkaDA.', // 7. Fan Detail (New)
    'https://images.pexels.com/photos/33050962/pexels-photo-33050962.jpeg?_gl=1*rvfhgc*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODY2NTMkajM2JGwwJGgw', // 8. Motherboard (New)
    'https://images.pexels.com/photos/15109454/pexels-photo-15109454.jpeg?_gl=1*11zrcys*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODU5NDkkajIkbDAkaDA.', // 9. Workspace (New - replaced invalid pexels link)
    'https://images.pexels.com/photos/18966456/pexels-photo-18966456.jpeg?_gl=1*8sprmr*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODY2OTEkajU5JGwwJGgw'  // 10. Abstract Tech (New)
];

const phoneThumbnails = [
    '/cellphone_thumbnails/anton-maksimov-5642-su-R2ljPFJju1s-unsplash.jpg',
    '/cellphone_thumbnails/du-BZNZ_N5qU5Y-unsplash.jpg',
    '/cellphone_thumbnails/insung-yoon-dRUqU4RpeOE-unsplash.jpg',
    '/cellphone_thumbnails/joel-rohland-MCL2xxjZJvs-unsplash.jpg',
    '/cellphone_thumbnails/kat-2lijqbLePBM-unsplash.jpg',
    '/cellphone_thumbnails/kenny-leys-Imc_FwGf92U-unsplash.jpg',
    '/cellphone_thumbnails/kilian-seiler-PZLgTUAhxMM-unsplash.jpg',
    '/cellphone_thumbnails/max-bushuev-U46ib4fUniY-unsplash.jpg',
    '/cellphone_thumbnails/vitalijus-y2QUqmEzjzA-unsplash.jpg',
    '/cellphone_thumbnails/vlad-cAtU4XU8NHg-unsplash.jpg'
];

const macbookThumbnails = [
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 1. Laptop Screen (Fresh)
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 2. MacBook Desk (Existing)
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 3. Keyboard/Mouse (New Replacement)
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 4. Repair vibe (Existing)
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 5. Laptop Code (Fresh)
    'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 6. Typing (Existing)
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 7. Tech parts (Fresh)
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 8. Screen (Existing - wait duplicated? let's use another)
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 9. Laptop Work (Fresh)
    macbookThumb // 10. Local Asset (Guaranteed to work)
];

const logicBoardThumbnails = [
    logicBoardThumb, // User's local image - Priority 1
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Circuit Board
    'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // 3. Electronics (New)
    'https://images.pexels.com/photos/6477209/pexels-photo-6477209.jpeg?_gl=1*dq6yk5*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODczNDkkajUzJGwwJGgw', // 4. Chipset (New)
    'https://images.pexels.com/photos/6128826/pexels-photo-6128826.jpeg?_gl=1*r38ekh*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODc0MzQkajQwJGwwJGgw', // 5. PCB Macro (New)
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // 6. Circuit Traces (Working - Keeping it)
    'https://images.pexels.com/photos/6754838/pexels-photo-6754838.jpeg?_gl=1*da9ig8*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3Njg5ODU3OTAkbzEkZzEkdDE3Njg5ODc1MzckajE1JGwwJGgw', // 7. Hardware (New)
    'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // 8. Repair (New)
    'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // 9. Tech (New)
    'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'  // 10. Components (New)
];

// ----------------------------------------------------------------------
// SECTION 1: MACBOOK REPAIRS
// ----------------------------------------------------------------------
const macbookVideos: VideoData[] = generatePlaceholders(
    100, 
    'Laptop Repair', 
    '1v3R2eqYYU6GWtrHFBbsRXEdggma_wxwh', 
    macbookThumbnails, 
    'MacBook Repair Guide'
);
// ----------------------------------------------------------------------
// SECTION 2: PC CUSTOM BUILDS
// ----------------------------------------------------------------------
const pcVideos: VideoData[] = generatePlaceholders(
    100, 
    'Custom Builds', 
    '1N8vswoII1zu2g_yfGZvL7zHwcCT5bmeu', 
    pcThumbnails, 
    'PC Build Series'
);

// ----------------------------------------------------------------------
// SECTION 3: CELL PHONE REPAIRS
// ----------------------------------------------------------------------
const phoneVideos: VideoData[] = generatePlaceholders(
    100, 
    'Mobile Repair', 
    '1T-vw8ipPax6YjME1UzUqJs6uo3M9n89J', 
    phoneThumbnails, 
    'Phone Fix'
);

// ----------------------------------------------------------------------
// SECTION 4: LOGIC BOARD MICROSOLDERING
// ----------------------------------------------------------------------
const logicBoardVideos: VideoData[] = generatePlaceholders(
    100, 
    'Micro Soldering', 
    '1yLD3ib0-Di-4lQGtmsmvLwM2oeJ0wFJ9', 
    logicBoardThumbnails, 
    'Logic Board Reel'
);

// ----------------------------------------------------------------------
// EXPORT ALL SECTIONS
// ----------------------------------------------------------------------
export const blogSections: BlogSection[] = [
    {
        id: 'macbook',
        title: 'Laptop Repairs',
        description: 'Expert screen, battery, and logic board repairs for all Mac models.',
        videos: macbookVideos
    },
    {
        id: 'pc',
        title: 'PC Custom Builds',
        description: 'Watch us build high-performance gaming and workstation PCs.',
        videos: pcVideos
    },
    {
        id: 'phone',
        title: 'Cell Phone Repairs',
        description: 'iPhone and Android screen replacements, battery swaps, and more.',
        videos: phoneVideos
    },
    {
        id: 'logicboard',
        title: 'Logic Board Microsoldering',
        description: 'Advanced component-level repairs and soldering work.',
        videos: logicBoardVideos
    }
];
