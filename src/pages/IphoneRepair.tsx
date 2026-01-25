import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Smartphone, Battery, Zap, Camera, Maximize, Droplets, Volume2, Database, RefreshCw, Wifi, ScanFace } from 'lucide-react';
import { seriesData } from '../data/iphone';
import { getImagePath } from '../data/imagePaths';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';

import SEO from '../components/SEO';

const IphoneRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="iPhone Repair"
                description="Expert iPhone repair services including screen replacement, battery replacement, and charging port repair. Fast turnaround and warranty included."
            />
            <RepairServiceLayout
                faqCategory="iphone"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Typography color="text.primary" fontWeight={600}>iPhone Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                                Select your iPhone Model
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {seriesData.map((item) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                cursor: "pointer",
                                                borderRadius: "18px",
                                                background: "transparent",
                                                transition: "all 0.35s ease",
                                                "&:hover": {
                                                    background: "#fff",
                                                    boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                                                    transform: "translateY(-5px)"
                                                },
                                            }}
                                            component={Link}
                                            to={`/iphone-repair/${item.id}`} // Linking to ModelDetail
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Box
                                                component="img"
                                                src={getImagePath(item.image)}
                                                alt={item.title}
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: 200,
                                                    height: 200,
                                                    objectFit: "contain",
                                                    mb: 2,
                                                }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>
                                                {item.title.replace(' Repair', '')}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Most Popular Repairs */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
                                Most Popular Repairs
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    { title: "Screen Replacement", desc: "Fix cracked screens, dead pixels, or ghost touch issues (OLED/LCD).", icon: <Smartphone size={32} color="#78E335" /> },
                                    { title: "Battery Replacement", desc: "Restore peak performance and all-day battery life.", icon: <Battery size={32} color="#78E335" /> },
                                    { title: "Back Glass Repair", desc: "Laser removal for shattered back glass panels.", icon: <Maximize size={32} color="#78E335" /> },
                                    { title: "Charging Port Repair", desc: "Fix loose lightning/USB-C ports or charging issues.", icon: <Zap size={32} color="#78E335" /> },
                                    { title: "Camera Repair", desc: "Replace shaky, blurry, or cracked camera lenses.", icon: <Camera size={32} color="#78E335" /> },
                                    { title: "Face ID Repair", desc: "Restore Face ID functionality (on supported models).", icon: <ScanFace size={32} color="#78E335" /> },
                                    { title: "Water Damage Cleaning", desc: "Professional ultrasonic cleaning for liquid damage.", icon: <Droplets size={32} color="#78E335" /> },
                                    { title: "Speaker Repair", desc: "Fix muffled sound or broken ear speakers.", icon: <Volume2 size={32} color="#78E335" /> },
                                    { title: "Data Recovery", desc: "Retrieve photos and data from dead iPhones.", icon: <Database size={32} color="#78E335" /> }
                                ].map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                        <Paper elevation={0} sx={{
                                            p: 3,
                                            height: '100%',
                                            bgcolor: '#fff',
                                            border: '1px solid #eee',
                                            borderRadius: 4,
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 12px 30px rgba(120, 227, 53, 0.15)',
                                                borderColor: '#78E335'
                                            }
                                        }}>
                                            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#f0fdf4' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="subtitle1" sx={{ color: '#78E335', fontWeight: 700 }}>
                                                    {loading ? "Loading..." : getPriceRange('iphone', item.title)}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#2C3E50' }}>{item.title}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{item.desc}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Common Issues Section */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
                                Common Issues & Solutions
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    {
                                        issue: "iPhone Stuck on Apple Logo",
                                        solution: "Usually caused by full storage or failed update. We can often fix this without data loss.",
                                        icon: <RefreshCw size={24} />
                                    },
                                    {
                                        issue: "Ghost Touch",
                                        solution: "Screen acts on its own. This is a digitizer failure; a screen replacement fixes it immediately.",
                                        icon: <Smartphone size={24} />
                                    },
                                    {
                                        issue: "Battery Drains Quickly",
                                        solution: "Battery health under 80% causes shutdowns. We install new premium cells.",
                                        icon: <Battery size={24} />
                                    },
                                    {
                                        issue: "Won't Charge",
                                        solution: "Lint in port or damaged pins. We clean or replace the charging flex cable.",
                                        icon: <Zap size={24} />
                                    },
                                    {
                                        issue: "No Service / Searching",
                                        solution: "Baseband IC issue or antenna damage. We diagnose motherboard level faults.",
                                        icon: <Wifi size={24} />
                                    },
                                    {
                                        issue: "Face ID Not Working",
                                        solution: "Often caused by water damage to the dot projector. We can repair specific components.",
                                        icon: <ScanFace size={24} />
                                    }
                                ].map((item, index) => (
                                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                                        <Paper elevation={0} sx={{
                                            p: 3,
                                            display: 'flex',
                                            gap: 2,
                                            border: '1px solid #f0f0f0',
                                            borderRadius: 3,
                                            '&:hover': { bgcolor: '#fafafa' }
                                        }}>
                                            <Box sx={{
                                                minWidth: 48,
                                                height: 48,
                                                borderRadius: '50%',
                                                bgcolor: '#78E335',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {item.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.1rem' }}>{item.issue}</Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{item.solution}</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </>
                }
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                    iPhone Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                    Professional iPhone Screen Replacement & Repair Services
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    Is your iPhone screen cracked, battery draining fast, or charging port not working? CMTC Wireless offers fast, reliable, and affordable iPhone repair services. Our certified technicians use high-quality parts to ensure your device works like new again.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    We cover everything from screen replacements and battery swaps to water damage repair and data recovery. Most repairs are done the same day!
                </Typography>

                <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                    Common iPhone Repairs
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                    <Box component="li"><Typography variant="body1">Screen & LCD Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Charging Port Repair</Typography></Box>
                    <Box component="li"><Typography variant="body1">Camera & Lens Repair</Typography></Box>
                    <Box component="li"><Typography variant="body1">Back Glass Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Water Damage Cleaning</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default IphoneRepair;
