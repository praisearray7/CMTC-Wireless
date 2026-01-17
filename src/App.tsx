
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
import ServiceDetail from './pages/ServiceDetail';
import Warranty from './pages/Warranty';
import Blog from './pages/Blog';
import PrepaidServices from './pages/PrepaidServices';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
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
              <Route path="/prepaid-services" element={<PrepaidServices />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
