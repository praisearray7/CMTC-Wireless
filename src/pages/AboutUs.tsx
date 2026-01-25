import { Box, Container, Grid, Typography, Card, Divider, Stack } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TimerIcon from '@mui/icons-material/Timer';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GoogleReviews from '../components/GoogleReviews';
import { imagePaths, getImagePath } from '../data/imagePaths';
import CountUpAnimation from '../components/CountUpAnimation';

import SEO from '../components/SEO';

const AboutUs = () => {
    return (
        <Box>
            <SEO
                title="About CMTC Wireless"
                description="Your trusted local electronics repair experts in Minneapolis and St. Paul. Over 15 years of experience in phone, computer, and tablet repair."
            />
            {/* Hero Banner */}
            <Box sx={{ bgcolor: '#2C3E50', color: 'white', py: 10, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                        <span style={{ color: 'white' }}>Our Mission:  </span>
                        <span style={{ color: '#78E335' }}>Restoring </span>
                        <span style={{ color: '#2196f3' }}>Connections</span>
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#B0BEC5', fontWeight: 400, maxWidth: 800, mx: 'auto' }}>
                        Discover top-notch iPhone, MacBook, and Samsung repair services all under one roof. Our skilled technicians are dedicated to providing swift and reliable solutions to get your devices back in peak condition.
                        Our mission is to provide reliable and efficient repair services for all your electronic devices, ensuring you stay connected. We pride ourselves on our commitment to quality, customer satisfaction, and our deep roots in the community.
                    </Typography>
                </Container>
                {/* Decorative background element */}
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(120, 227, 53, 0.1)', zIndex: 1 }} />
                <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.05)', zIndex: 1 }} />
            </Box>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 3, mb: 10 }}>
                <Grid container spacing={3}>
                    {[
                        { count: 15, suffix: '+', label: 'Years Experience', icon: <GroupsIcon sx={{ fontSize: 40, color: '#78E335', mb: 1 }} /> },
                        { count: 50, suffix: 'k+', label: 'Devices Fixed', icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#78E335', mb: 1 }} /> },
                        { count: 12, suffix: 'k+', label: 'Happy Customers', icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#78E335', mb: 1 }} /> },
                        { count: 45, suffix: 'm', label: 'Avg Repair Time', icon: <TimerIcon sx={{ fontSize: 40, color: '#78E335', mb: 1 }} /> }
                    ].map((stat, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card sx={{ textAlign: 'center', py: 4, borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                                <Typography variant="h3" sx={{ fontWeight: 800, color: '#2C3E50', mb: 0.5 }}>
                                    <CountUpAnimation target={stat.count} suffix={stat.suffix} />
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 1 }}>{stat.label}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Mission & Warranty Cards */}
            <Container maxWidth="lg" sx={{ mb: 10 }}>
                <Grid container spacing={4}>
                    {[
                        {
                            icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#78E335' }} />,
                            title: 'Our Mission',
                            text: 'We strive to get your device back to its original condition in the shortest amount of time possible, without sacrificing quality.'
                        },
                        {
                            icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#78E335' }} />,
                            title: 'Our Warranty',
                            text: 'Rest assured if something is out of the ordinary after your repair, we will take care of it for you free of charge.'
                        }
                    ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card variant="outlined" sx={{ p: 4, height: '100%', borderRadius: 4, borderColor: '#eee', '&:hover': { borderColor: '#78E335', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#2C3E50', mb: 2 }}>{item.title}</Typography>
                                    <Typography variant="body1" sx={{ color: '#546E7A', lineHeight: 1.6 }}>{item.text}</Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Story & Values */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ position: 'relative' }}>
                            {/* Placeholder for About Us Image */}
                            {/* About Us Image */}
                            <Box
                                component="img"
                                src={getImagePath(imagePaths.aboutStore)}
                                alt="CMTC Wireless Store"
                                sx={{
                                    width: '100%',
                                    height: 400,
                                    objectFit: 'cover',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                                }}
                            />
                            <Box sx={{ position: 'absolute', bottom: -20, right: -20, bgcolor: '#ffffff', p: 3, borderRadius: 3, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#2C3E50' }}>Authorized Specialists</Typography>
                                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#78E335' }} />
                                    <Typography variant="body2" color="textSecondary">iPhone</Typography>
                                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#78E335' }} />
                                    <Typography variant="body2" color="textSecondary">Samsung</Typography>
                                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#78E335' }} />
                                    <Typography variant="body2" color="textSecondary">iPad</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="overline" sx={{ color: '#78E335', fontWeight: 800, letterSpacing: 2 }}>OUR HISTORY</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, color: '#2C3E50', mb: 3 }}>Deep Roots in the Community</Typography>
                        <Typography variant="body1" sx={{ color: '#546E7A', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                            What started as a small passion project has grown into Minneapolis and St. Paul's most trusted device repair center. We saw a need for transparent, high-quality repairs in an industry often plagued by shortcuts.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#546E7A', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Our technicians aren't just parts swappers; they are micro-soldering experts and diagnostic specialists dedicated to bringing your dead devices back to life.
                        </Typography>

                        <Divider sx={{ my: 4 }} />

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Core Values</Typography>
                            <Grid container spacing={2}>
                                {['Transparency', 'Quality Parts', 'Speed', 'Education'].map(val => (
                                    <Grid size={{ xs: 6 }} key={val}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <VerifiedUserIcon sx={{ color: '#78E335', fontSize: 20 }} />
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{val}</Typography>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <GoogleReviews />
        </Box>
    );
};

export default AboutUs;
