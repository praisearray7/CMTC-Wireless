

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardContent, Box, Button, CardMedia, Paper, Stack, Menu, MenuItem } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import StarIcon from '@mui/icons-material/Star';
import { repairServices } from '../data/repairData';

import { imagePaths, getImagePath } from '../data/imagePaths';

const Home = () => {
    // CMTC Brand Colors
    const primaryGreen = '#78E335';
    // const darkNavy = '#2C3E50';

    const [viewServicesAnchorEl, setViewServicesAnchorEl] = useState<null | HTMLElement>(null);

    const handleViewServicesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setViewServicesAnchorEl(event.currentTarget);
    };

    const handleViewServicesClose = () => {
        setViewServicesAnchorEl(null);
    };

    const getCategoryImage = (id: string) => {
        if (id === 'iphone-repair') return getImagePath(imagePaths.iphoneRepair);
        if (id === 'ipad-repair') return imagePaths.placeholders.ipad;
        if (id === 'cell-phone-repair') return imagePaths.placeholders.cellPhone;
        if (id === 'smart-watch-repair') return imagePaths.placeholders.smartWatch;
        if (id === 'computer-repair') return imagePaths.placeholders.computer;
        if (id === 'tablet-repair') return imagePaths.placeholders.tablet;
        return `https://placehold.co/300x200/f5f5f5/2C3E50?text=${id.split('-')[0]}`;
    };

    return (
        <>
            {/* Custom Hero Override for CMTC */}
            <Box sx={{ bgcolor: '#ffffff', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        {/* Left: Content */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.8rem', md: '4rem' }, color: '#2C3E50', lineHeight: 1.1 }}>
                                Fast, Reliable <br />
                                <span style={{ color: primaryGreen }}>Phone Repairs</span> Near You.
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#546E7A', mb: 5, fontWeight: 400, lineHeight: 1.6, maxWidth: 600 }}>
                                Get your phone fixed quickly and efficiently by our expert technicians. We offer same day repairs for most devices, ensuring you stay connected.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 6 }}>
                                <Button
                                    component={Link}
                                    to="/contact-us"
                                    state={{ serviceNeeded: 'Get Instant Quote' }}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ px: 5, py: 2, fontSize: '1.2rem' }}
                                >
                                    Get Instant Quote
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    onClick={handleViewServicesClick}
                                    sx={{ px: 5, py: 2, fontSize: '1.2rem', borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                                >
                                    View Services
                                </Button>
                                <Menu
                                    anchorEl={viewServicesAnchorEl}
                                    open={Boolean(viewServicesAnchorEl)}
                                    onClose={handleViewServicesClose}
                                    PaperProps={{
                                        sx: {
                                            mt: 1,
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                            borderRadius: 2,
                                            minWidth: 200
                                        }
                                    }}
                                >
                                    <MenuItem
                                        component="a"
                                        href="#repair-services"
                                        onClick={handleViewServicesClose}
                                        sx={{ py: 2, px: 4, fontSize: '1.1rem', fontWeight: 500 }}
                                    >
                                        Repair Services
                                    </MenuItem>
                                    <MenuItem
                                        component={Link}
                                        to="/buy-device"
                                        onClick={handleViewServicesClose}
                                        sx={{ py: 2, px: 4, fontSize: '1.1rem', fontWeight: 500 }}
                                    >
                                        Buy a Device
                                    </MenuItem>
                                </Menu>
                            </Stack>

                            <Stack direction="row" spacing={4} alignItems="center">
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#2C3E50' }}>15+</Typography>
                                    <Typography variant="body2" color="textSecondary">Years Experience</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#2C3E50' }}>50k+</Typography>
                                    <Typography variant="body2" color="textSecondary">Devices Fixed</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#2C3E50' }}>4.9</Typography>
                                    <Stack direction="row" sx={{ color: '#FFD700' }}><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /></Stack>
                                </Box>
                            </Stack>
                        </Grid>

                        {/* Right: Modern Visuals */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -40,
                                        right: { xs: -20, md: -40 },
                                        width: { xs: 200, md: 300 },
                                        height: { xs: 200, md: 300 },
                                        bgcolor: '#f5f5f5',
                                        borderRadius: '50%',
                                        zIndex: 0
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={getImagePath(imagePaths.heroDevices)} // Reusing the high quality one
                                    alt="Devices"
                                    sx={{ width: '100%', height: 'auto', borderRadius: 4, position: 'relative', zIndex: 1, boxShadow: '0 20px 80px rgba(0,0,0,0.1)' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Hero Cards Section (Repair, Buy, Unlock) */}
            <Container maxWidth="xl" sx={{ py: 8 }}>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        {
                            title: 'Repair a Device',
                            desc: 'Broken phone? We fix screens, batteries, charging ports, and more — fast.',
                            img: getImagePath(imagePaths.homeCardRepair),
                            btnText: 'Get a Free Quote',
                            link: '/contact-us'
                        },
                        {
                            title: 'Buy a Device',
                            desc: 'Certified pre-owned phones at unbeatable prices, fully tested and ready to go.',
                            img: getImagePath(imagePaths.homeCardBuy),
                            btnText: 'Shop Now',
                            link: '/buy-device'
                        },
                        {
                            title: 'Unlock Any Device',
                            desc: 'Unlock your device today — no hassle, no waiting.',
                            btnText: 'Get a Free Quote', // Consistent text with screenshot
                            img: getImagePath(imagePaths.homeCardUnlock),
                            link: '/unlock-device' // Assuming route
                        }
                    ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    bgcolor: '#dcedc8', // Light green similar to screenshot
                                    borderRadius: 6,
                                    overflow: 'hidden',
                                    textAlign: 'center',
                                    p: 4,
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'translateY(-8px)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={item.title}
                                    sx={{
                                        width: '180px',
                                        height: 'auto',
                                        mb: 3,
                                        mixBlendMode: 'multiply', // Helps blend if png has white bg, though these are transparent likely
                                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                                    }}
                                />
                                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 4, color: '#37474f', lineHeight: 1.5 }}>
                                    {item.desc}
                                </Typography>
                                <Button
                                    component={Link}
                                    to={item.link}
                                    variant="text"
                                    sx={{
                                        color: '#78E335', // Bright green text
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                                    }}
                                >
                                    {item.btnText}
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Value Props / Why Choose Us */}
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 800, color: '#2C3E50' }}>
                    Why Choose Us
                </Typography>
                <Grid container spacing={4}>
                    {[
                        { icon: <BuildOutlinedIcon sx={{ fontSize: 40, color: primaryGreen }} />, title: 'Same-Day Repairs', desc: 'Most repairs completed within hours.' },
                        { icon: <ThumbUpOutlinedIcon sx={{ fontSize: 40, color: primaryGreen }} />, title: 'Certified Technicians', desc: 'Our team is highly trained and certified.' },
                        { icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 40, color: primaryGreen }} />, title: 'Customer Satisfaction', desc: 'We prioritize your satisfaction.' },
                        { icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: primaryGreen }} />, title: 'Quality Parts', desc: 'We use only high-quality replacement parts.' },
                    ].map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card elevation={0} sx={{ height: '100%', bgcolor: '#F9FAFB', borderRadius: 4, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#2C3E50' }}>{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>{item.desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* BBB Accreditation Section */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#2C3E50' }}>
                        BBB Accreditation
                    </Typography>
                    <Box
                        component="img"
                        src={getImagePath(imagePaths.bbbAccreditation)}
                        alt="BBB Accredited Business"
                        sx={{ maxWidth: '100%', height: 'auto', maxHeight: 150 }}
                    />
                </Container>
            </Box>

            {/* Service Categories Section */}
            <Box id="repair-services" sx={{ bgcolor: '#ffffff', py: 10 }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontWeight: 800, color: '#2C3E50' }}>
                        What Can We Fix For You?
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mb: 8, color: '#546E7A', maxWidth: 600, mx: 'auto' }}>
                        Select your device type to see our repair services. From screens to logic boards, we handle it all.
                    </Typography>

                    <Grid container spacing={4}>
                        {repairServices.map((service) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                                <Card sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }
                                }}>
                                    <Box sx={{ height: 220, overflow: 'hidden', bgcolor: '#f4f4f4', position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            image={getCategoryImage(service.id)}
                                            alt={service.name}
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)' }} />
                                        <Typography variant="h5" sx={{ position: 'absolute', bottom: 20, left: 24, fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                            {service.name}
                                        </Typography>
                                    </Box>
                                    <CardContent sx={{ p: 4, flexGrow: 1 }}>

                                        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                                            {(service.subCategories || service.models)?.slice(0, 4).map((item: any) => (
                                                <Paper key={item.name} elevation={0} sx={{ bgcolor: '#F0F4F8', px: 1.5, py: 0.5, borderRadius: 2 }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#546E7A' }}>{item.name}</Typography>
                                                </Paper>
                                            ))}
                                            <Paper
                                                elevation={0}
                                                component={Link}
                                                to={`/service/${service.id}`}
                                                sx={{ bgcolor: '#E8F5E9', px: 1.5, py: 0.5, borderRadius: 2, textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                            >
                                                <Typography variant="caption" sx={{ fontWeight: 600, color: primaryGreen }}>+ more</Typography>
                                            </Paper>
                                        </Stack>

                                        <Button
                                            component={Link}
                                            to={`/service/${service.id}`}
                                            variant="outlined"
                                            color="primary"
                                            fullWidth
                                            sx={{ borderRadius: 3, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                                        >
                                            Start Repair
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
