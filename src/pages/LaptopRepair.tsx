import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Breadcrumbs, Box, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Monitor, HardDrive, Battery, Keyboard, Zap, RefreshCw, MousePointer, Fan, Droplets, Thermometer, Wifi } from 'lucide-react';
import { laptopData } from '../data/laptop';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';

import SEO from '../components/SEO';

const LaptopRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="Laptop Repair"
                description="Reliable laptop repair for Dell, HP, Lenovo, Asus, and more. Screen replacement, battery fixes, hinge repair, and water damage cleanup."
            />
            <RepairServiceLayout
                faqCategory="laptop"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Link to="/computer-repair" style={{ color: '#546E7A', textDecoration: 'none' }}>Computer Repair</Link>
                        <Typography color="text.primary" fontWeight={600}>Laptop Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                                Select your Laptop Brand
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {laptopData.map((item) => {
                                    const linkPath = item.id === 'macbook-repair' ? '/macbook-repair' : `/laptop-repair/${item.id}`;
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
                                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>{item.title}</Typography>
                                            </Paper>
                                        </Grid>
                                    );
                                })}
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
                                    { title: "Screen Replacement", desc: "Fix cracked, bleeding, or flickering laptop screens.", icon: <Monitor size={32} color="#78E335" /> },
                                    { title: "Battery Replacement", desc: "Replace old batteries specifically for your model.", icon: <Battery size={32} color="#78E335" /> },
                                    { title: "Keyboard Replacement", desc: "Fix sticky, missing, or non-responsive keys.", icon: <Keyboard size={32} color="#78E335" /> },
                                    { title: "Charging Port Repair", desc: "Soldering repair for loose or broken power jacks.", icon: <Zap size={32} color="#78E335" /> },
                                    { title: "Hinge Repair", desc: "Repair broken physical hinges and casing damage.", icon: <RefreshCw size={32} color="#78E335" /> },
                                    { title: "Trackpad Repair", desc: "Fix erratic mouse movement or clicking issues.", icon: <MousePointer size={32} color="#78E335" /> },
                                    { title: "Fan Replacement", desc: "Stop loud grinding noises and prevent overheating.", icon: <Fan size={32} color="#78E335" /> },
                                    { title: "Water Damage Clean", desc: "Ultrasonic cleaning for liquid spills.", icon: <Droplets size={32} color="#78E335" /> },
                                    { title: "SSD Upgrade", desc: "Speed up slow laptops with a fast NVMe SSD.", icon: <HardDrive size={32} color="#78E335" /> }
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
                                                    {loading ? "Loading..." : getPriceRange('laptop', item.title)}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>{item.title}</Typography>
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
                                        issue: "Laptop Not Charging",
                                        solution: "Could be the battery, charger, or charging port. We test all three to find the culprit.",
                                        icon: <Zap size={24} />
                                    },
                                    {
                                        issue: "Broken / Loose Hinges",
                                        solution: "Common in plastic laptops. We reinforce the chassis or replace the top case assembly.",
                                        icon: <RefreshCw size={24} />
                                    },
                                    {
                                        issue: "Keys Not Typing",
                                        solution: "Underlying membrane damage. We replace the entire keyboard assembly for a like-new feel.",
                                        icon: <Keyboard size={24} />
                                    },
                                    {
                                        issue: "Screen Flickering",
                                        solution: "Loose video cable or failing LCD panel. We reseat connections first before recommending parts.",
                                        icon: <Monitor size={24} />
                                    },
                                    {
                                        issue: "Overheating / Hot to Touch",
                                        solution: "Dried thermal paste or clogged vents. A deep chemical clean and repaste solves this.",
                                        icon: <Thermometer size={24} />
                                    },
                                    {
                                        issue: "No WiFi Connection",
                                        solution: "Failed WiFi card or driver issue. We can install upgrade kits for faster internet speeds.",
                                        icon: <Wifi size={24} />
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
                    Laptop Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                    Professional Repair for All Laptop Brands
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    From cracked screens and broken hinges to battery replacements, we fix all major laptop brands including Dell, HP, Lenovo, Asus, Acer, and more.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    Our technicians are experts at sourcing hard-to-find parts and performing component-level board repairs when necessary.
                </Typography>

                <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                    Common Laptop Services
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                    <Box component="li"><Typography variant="body1">LCD / OLED Screen Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Keyboard Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Hinge & Chassis Repair</Typography></Box>
                    <Box component="li"><Typography variant="body1">Charging Port Soldering</Typography></Box>
                    <Box component="li"><Typography variant="body1">Water Damage Clean-up</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default LaptopRepair;
