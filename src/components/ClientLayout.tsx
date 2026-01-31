'use client';

import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactWidget from './FloatingContactWidget';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* <LandingIntro onComplete={() => setShowIntro(false)} /> */}
      <>
        <Navbar />
        <Box component='main' sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
        <FloatingContactWidget />
      </>
    </Box>
  );
}
