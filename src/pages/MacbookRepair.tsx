import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Battery, Zap, Monitor, Keyboard, HardDrive, Coffee, RefreshCw, Fan, MousePointer } from 'lucide-react';
import { macbookData } from '../data/macbook';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';


import SEO from '../components/SEO';

const MacbookRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="MacBook Repair"
                description="Expert MacBook repair for Air and Pro models. Screen replacement, battery service, keyboard repair, and liquid damage recovery."
            />
            <RepairServiceLayout
                faqCategory="macbook"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Typography color="text.primary" fontWeight={600}>MacBook Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                                Select your MacBook Model
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {macbookData.map((item) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                                        <Link
                                            to="/contact-us"
                                            state={{ deviceModel: item.title, serviceNeeded: 'Repair Service' }}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    pt: "20px",
                                                    pb: "20px",
                                                    px: "20px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    cursor: "pointer",
                                                    borderRadius: "18px",
                                                    background: "transparent",
                                                    position: "relative",
                                                    overflow: "visible",
                                                    zIndex: 1,
                                                    transition: "all 0.35s ease",
                                                    "&:hover": {
                                                        pb: "20px",
                                                        zIndex: 10,
                                                        background: "#fff",
                                                        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={item.image}
                                                    alt={item.title}
                                                    sx={{
                                                        width: "100%",
                                                        maxWidth: 220,
                                                        height: "auto",
                                                        objectFit: "contain",
                                                        mb: 2,
                                                        transition: "none",
                                                    }}
                                                />
                                                <Typography variant="h6" sx={{ color: "#1a1a1a", fontWeight: 600, textAlign: 'center' }}>{item.title}</Typography>
                                            </Paper>
                                        </Link>
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
                                    { title: "Screen Replacement", desc: "Retina display assembly replacement for broken LCDs.", icon: <Monitor size={32} color="#78E335" /> },
                                    { title: "Battery Replacement", desc: "Fix 'Service Battery' warnings and short runtime.", icon: <Battery size={32} color="#78E335" /> },
                                    { title: "Keyboard Replacement", desc: "Fix sticky, repeating, or unresponsive keys.", icon: <Keyboard size={32} color="#78E335" /> },
                                    { title: "Trackpad Repair", desc: "Fix cracked or unresponsive force touch trackpads.", icon: <MousePointer size={32} color="#78E335" /> },
                                    { title: "Liquid Damage Repair", desc: "Logic board cleaning and component level repair.", icon: <Coffee size={32} color="#78E335" /> },
                                    { title: "Flexgate Repair", desc: "Fix 'stage light' effect on 2016+ MacBook Pros.", icon: <Monitor size={32} color="#78E335" /> },
                                    { title: "SSD Upgrade", desc: "Upgrade storage on older MacBook Air/Pro models.", icon: <HardDrive size={32} color="#78E335" /> },
                                    { title: "Fan Cleaning & Repair", desc: "Fix loud fan noise and overheating issues.", icon: <Fan size={32} color="#78E335" /> },
                                    { title: "MacOS Restoration", desc: "Fresh install of macOS if system is corrupted.", icon: <RefreshCw size={32} color="#78E335" /> }
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
                                                <Typography variant="subtitle1" sx={{ color: '#166534', fontWeight: 700 }}>
                                                    {loading ? "Loading..." : getPriceRange('macbook', item.title)}
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
                                        issue: "Flexgate / Stage Light",
                                        solution: "Backlight cable failure causes uneven lighting. We repair the cable instead of replacing the screen.",
                                        icon: <Monitor size={24} />
                                    },
                                    {
                                        issue: "Sticky Keyboard Keys",
                                        solution: "Common on Butterfly keyboards. We replace individual keys or the entire top case assembly.",
                                        icon: <Keyboard size={24} />
                                    },
                                    {
                                        issue: "Question Mark Folder",
                                        solution: "Indicates the hard drive is missing or corrupt. We run diagnostics and replace the SSD.",
                                        icon: <HardDrive size={24} />
                                    },
                                    {
                                        issue: "Not Charging",
                                        solution: "Could be the battery, USB-C port, or logic board. We test each to find the real culprit.",
                                        icon: <Zap size={24} />
                                    },
                                    {
                                        issue: "Overheating / Loud Fan",
                                        solution: "Dust buildup clogs airflow. A deep cleaning and thermal paste re-application fixes this.",
                                        icon: <Fan size={24} />
                                    },
                                    {
                                        issue: "Water Damage",
                                        solution: "Turn it off instantly! We perform ultrasonic cleaning to remove corrosion from the logic board.",
                                        icon: <Coffee size={24} />
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

                        <Divider sx={{ my: 8 }} />
                    </>
                }
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                    MacBook Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                    MacBook Repair Services for Schools and Small Businesses
                </Typography>

                <Typography variant="h5" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                    MacBook repairs you can trust
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    Your classrooms and teams rely on MacBooks every day. When devices fail, you need a dependable partner that restores uptime fast. CMTC Wireless delivers depot repair programs built for education and small business fleets with clear SLAs, consistent quality, and simple logistics.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    We have repaired Mac laptops for over ten years. Our trained technicians follow documented processes and multi point testing so devices return ready for use. Every repair includes a one year warranty on covered work.
                </Typography>

                <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                    What we repair
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                    <Box component="li"><Typography variant="body1">Cracked and damaged displays</Typography></Box>
                    <Box component="li"><Typography variant="body1">Batteries and charging issues</Typography></Box>
                    <Box component="li"><Typography variant="body1">Keyboards, trackpads, and ports</Typography></Box>
                    <Box component="li"><Typography variant="body1">No power and boot failures</Typography></Box>
                    <Box component="li"><Typography variant="body1">Storage replacement and data recovery options</Typography></Box>
                    <Box component="li"><Typography variant="body1">Liquid damage evaluation with recovery when possible</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default MacbookRepair;
