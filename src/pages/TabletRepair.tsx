import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Breadcrumbs, Box, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Tablet, Battery, Zap, Monitor, Volume2, Camera, Droplets, RefreshCw, PlayCircle, MousePointer, Music } from 'lucide-react';
import { tabletData } from '../data/tablet';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { colors } from '../theme/colors';

import SEO from '../components/SEO';

const TabletRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="Tablet Repair"
                description="Professional tablet repair for iPad, Samsung Galaxy Tab, Surface, and more. Screen replacement, battery fixes, and charging port repair."
            />
            <RepairServiceLayout
                faqCategory="tablet"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#000000', textDecoration: 'none' }}>Home</Link>
                        <Link to="/cell-phone-repair" style={{ color: '#000000', textDecoration: 'none' }}>Cell Phone Repair</Link>
                        <Typography color="text.primary" fontWeight={600}>Tablet Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#000000', mb: 4 }}>
                                Select your Tablet Brand
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {tabletData.map((item) => {
                                    // Check if it's "iPad Repair" to route directly to /ipad-repair
                                    const linkPath = item.id === 'ipad' ? '/ipad-repair' : `/tablet-repair/${item.id}`;
                                    return (
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
                                                to={linkPath}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <Box component="img" src={item.image} alt={item.title} sx={{ width: "100%", maxWidth: 200, height: 'auto', objectFit: 'contain', mb: 2 }} />
                                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', textAlign: 'center' }}>{item.title}</Typography>
                                            </Paper>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Most Popular Repairs */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 4, textAlign: 'center' }}>
                                Most Popular Repairs
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    { title: "Glass Replacement", desc: "Replace cracked outer glass (digitizer) while keeping original LCD.", icon: <Tablet size={32} color={colors.primary} /> },
                                    { title: "LCD Replacement", desc: "Fix display issues like bleeding colors or dead pixels.", icon: <Monitor size={32} color={colors.primary} /> },
                                    { title: "Battery Replacement", desc: "Revive old tablets tailored for iPad, Samsung, and Surface.", icon: <Battery size={32} color={colors.primary} /> },
                                    { title: "Charging Port Repair", desc: "Fix loose or broken USB-C / Lightning ports.", icon: <Zap size={32} color={colors.primary} /> },
                                    { title: "Camera Repair", desc: "Replace blurry or cracked front/rear cameras.", icon: <Camera size={32} color={colors.primary} /> },
                                    { title: "Button Repair", desc: "Fix stuck power, volume, or home buttons.", icon: <Volume2 size={32} color={colors.primary} /> },
                                    { title: "Liquid Damage Clean", desc: "Specialized cleaning for water damaged tablets.", icon: <Droplets size={32} color={colors.primary} /> },
                                    { title: "Headphone Jack", desc: "Repair broken audio jacks for clear sound.", icon: <Music size={32} color={colors.primary} /> },
                                    { title: "Software Restore", desc: "Fix boot loops, freezing, and update errors.", icon: <PlayCircle size={32} color={colors.primary} /> }
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
                                                borderColor: colors.primary
                                            }
                                        }}>
                                            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#f0fdf4' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="subtitle1" sx={{ color: colors.primary, fontWeight: 700 }}>
                                                    {loading ? "Loading..." : getPriceRange('tablet', item.title)}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>{item.title}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{item.desc}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Common Issues Section */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 4, textAlign: 'center' }}>
                                Common Issues & Solutions
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    {
                                        issue: "Cracked Glass / spiderweb",
                                        solution: "If the image is fine, we just replace the digitizer glass. This saves you money.",
                                        icon: <Tablet size={24} />
                                    },
                                    {
                                        issue: "Touch Not Working",
                                        solution: "Usually a digitizer failure. Replacing the front panel restores full touch response.",
                                        icon: <MousePointer size={24} />
                                    },
                                    {
                                        issue: "Tablet Won't Charge",
                                        solution: "Lint in port or damaged pins. We clean or replace the charging flex cable.",
                                        icon: <Zap size={24} />
                                    },
                                    {
                                        issue: "Battery Drains Quickly",
                                        solution: "Batteries chemically age. A new battery brings back all-day usage.",
                                        icon: <Battery size={24} />
                                    },
                                    {
                                        issue: "Stuck on Apple Logo",
                                        solution: "Boot loop caused by full storage or failed update. We can often fix this without data loss.",
                                        icon: <RefreshCw size={24} />
                                    },
                                    {
                                        issue: "No Sound / Deformed Audio",
                                        solution: "Blown speakers or clogged grills. We clean and replace audio components.",
                                        icon: <Volume2 size={24} />
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
                                                bgcolor: colors.primary,
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

                        <Divider sx={{ my: 8 }} />
                    </>
                }
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#000000', mb: 2, fontFamily: 'serif' }}>
                    Tablet Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#000000', mb: 3, fontWeight: 400 }}>
                    iPad, Galaxy Tab, Surface & More
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                    Tablets are your portable entertainment and work hubs. When they break, you need a fast fix. We repair screens, batteries, and charging ports for all major tablet brands.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                    From shattered iPad glass to Surface Pros not turning on, our certified technicians have seen it all.
                </Typography>

                <Typography variant="h6" sx={{ color: '#000000', mb: 2, fontWeight: 600 }}>
                    Common Tablet Services
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#000000' }}>
                    <Box component="li"><Typography variant="body1">Glass Digitizer Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">LCD Display Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Charging Port Repair</Typography></Box>
                    <Box component="li"><Typography variant="body1">Camera Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Button Repair (Home/Power)</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default TabletRepair;
