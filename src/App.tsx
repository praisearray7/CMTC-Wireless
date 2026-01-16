
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ServiceDetail from './pages/ServiceDetail';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
