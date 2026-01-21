import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Watch, Battery, Zap, Droplets, Activity, Heart, Maximize, RefreshCw } from 'lucide-react';
import { smartwatchData } from '../data/smartwatch';
import RepairServiceLayout from '../components/RepairServiceLayout';


const SmartwatchRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="smartwatch"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>Smart Watch Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <>
                    <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                            Select your Watch
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {smartwatchData.map((item) => (
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
                                        to={`/smart-watch-repair/${item.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{
                                                width: "100%",
                                                maxWidth: 200,
                                                height: "auto",
                                                objectFit: "contain",
                                                mb: 2,
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>
                                            {item.title}
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
                                { title: "Screen Replacement", price: "$89 - $249", desc: "Fix cracked glass or dead pixels on Apple Watch & Galaxy Watch.", icon: <Watch size={32} color="#78E335" /> },
                                { title: "Battery Replacement", price: "$59 - $89", desc: "Restore all-day battery life to your wearable.", icon: <Battery size={32} color="#78E335" /> },
                                { title: "Back Glass/Sensor Repair", price: "$79 - $129", desc: "Fix cracked back glass or heart rate sensors.", icon: <Activity size={32} color="#78E335" /> },
                                { title: "Crown & Button Repair", price: "$69+", desc: "Fix stuck digital crowns or unresponsive side buttons.", icon: <Zap size={32} color="#78E335" /> },
                                { title: "Water Damage Cleaning", price: "$69", desc: "Ultrasonic cleaning for watches exposed to liquid.", icon: <Droplets size={32} color="#78E335" /> },
                                { title: "Software Restore", price: "$49", desc: "Fix boot loops, update failures, or pairing issues.", icon: <RefreshCw size={32} color="#78E335" /> }
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
                                                {item.price}
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
                                    issue: "Screen Pops Off",
                                    solution: "Common on older Apple Watches due to swollen batteries. We replace the battery and reseal the screen.",
                                    icon: <Maximize size={24} />
                                },
                                {
                                    issue: "Won't Charge",
                                    solution: "Could be a dirty contact or internal charging coil failure. We diagnose and fix it.",
                                    icon: <Zap size={24} />
                                },
                                {
                                    issue: "Stuck on Logo",
                                    solution: "Software crash or update failure. We can often restore firmware without data loss.",
                                    icon: <RefreshCw size={24} />
                                },
                                {
                                    issue: "Heart Rate Sensor Fail",
                                    solution: "Cracked back glass can damage sensors. We replace the back housing assembly.",
                                    icon: <Heart size={24} />
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
                Smart Watch Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                Apple Watch, Galaxy Watch & More
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Broken smart watch screen? Battery not holding a charge? We repair all major smart watch brands including Apple Watch, Samsung Galaxy Watch, and Google Pixel Watch.
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                Common Repairs
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">OLED Screen Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Glass Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Crown & Button Repair</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default SmartwatchRepair;
