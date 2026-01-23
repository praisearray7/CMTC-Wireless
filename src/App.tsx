
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BuyDevice from './pages/BuyDevice';
import UnlockDevice from './pages/UnlockDevice';
import Reviews from './pages/Reviews';
import ModelDetail from './pages/ModelDetail';
import IpadRepair from './pages/IpadRepair';
import MacbookRepair from './pages/MacbookRepair';
import IphoneRepair from './pages/IphoneRepair';
import CellphoneRepair from './pages/CellphoneRepair';
import SmartwatchRepair from './pages/SmartwatchRepair';
import ComputerRepair from './pages/ComputerRepair';
import DesktopRepair from './pages/DesktopRepair';
import LaptopRepair from './pages/LaptopRepair';
import AllInOneRepair from './pages/AllInOneRepair';
import TabletRepair from './pages/TabletRepair';
import Warranty from './pages/Warranty';
import Blog from './pages/Blog';


import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/buy-device" element={<BuyDevice />} />
              <Route path="/unlock-device" element={<UnlockDevice />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/blog" element={<Blog />} />

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
            </Routes>
          </Box>
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
