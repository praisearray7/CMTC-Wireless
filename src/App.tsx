
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, lazy } from 'react';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const BuyDevice = lazy(() => import('./pages/BuyDevice'));
const UnlockDevice = lazy(() => import('./pages/UnlockDevice'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Warranty = lazy(() => import('./pages/Warranty'));
const Blogs = lazy(() => import('./pages/Blog'));

// Repair Pages
const IpadRepair = lazy(() => import('./pages/IpadRepair'));
const MacbookRepair = lazy(() => import('./pages/MacbookRepair'));
const IphoneRepair = lazy(() => import('./pages/IphoneRepair'));
const CellphoneRepair = lazy(() => import('./pages/CellphoneRepair'));
const SmartwatchRepair = lazy(() => import('./pages/SmartwatchRepair'));
const ComputerRepair = lazy(() => import('./pages/ComputerRepair'));
const DesktopRepair = lazy(() => import('./pages/DesktopRepair'));
const LaptopRepair = lazy(() => import('./pages/LaptopRepair'));
const AllInOneRepair = lazy(() => import('./pages/AllInOneRepair'));
const TabletRepair = lazy(() => import('./pages/TabletRepair'));

// Dynamic Details
const ModelDetail = lazy(() => import('./pages/ModelDetail'));
const RepairDetail = lazy(() => import('./pages/RepairDetail'));

import { useState } from 'react';
import LandingIntro from './components/LandingIntro';

// ... existing imports ...

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {showIntro ? (
        <LandingIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <HashRouter>
          <ScrollToTop />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/buy-device" element={<BuyDevice />} />
                  <Route path="/unlock-device" element={<UnlockDevice />} />
                  <Route path="/warranty" element={<Warranty />} />
                  <Route path="/blogs" element={<Blogs />} />

                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/reviews" element={<Reviews />} />

                  <Route path="/ipad-repair" element={<IpadRepair />} />
                  <Route path="/macbook-repair" element={<MacbookRepair />} />
                  <Route path="/iphone-repair" element={<IphoneRepair />} />
                  <Route path="/cell-phone-repair" element={<CellphoneRepair />} />
                  <Route path="/smart-watch-repair" element={<SmartwatchRepair />} />
                  <Route path="/computer-repair" element={<ComputerRepair />} />
                  <Route path="/desktop-repair" element={<DesktopRepair />} />
                  <Route path="/laptop-repair" element={<LaptopRepair />} />
                  <Route path="/aio-repair" element={<AllInOneRepair />} />
                  <Route path="/tablet-repair" element={<TabletRepair />} />

                  {/* Dynamic Route for Model Details - Placed last to avoid conflicts */}
                  <Route path="/:serviceId/:modelId" element={<ModelDetail />} />
                  <Route path="/:serviceId/:modelId/:repairType" element={<RepairDetail />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </Box>
        </HashRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
