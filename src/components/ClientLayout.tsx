'use client';

import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactWidget from './FloatingContactWidget';
// import LandingIntro from './LandingIntro';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    // const [showIntro, setShowIntro] = useState(true);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
                 {/* <LandingIntro onComplete={() => setShowIntro(false)} /> */}
                <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        {children}
                    </Box>
                    <Footer />
                    <FloatingContactWidget />
                </>
        </Box>
    );
}
