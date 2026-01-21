import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Smartphone, Battery, Zap, Monitor, Droplets, Camera, Volume2, Database, Unlock, RefreshCw, Wifi, Maximize } from 'lucide-react';
import { cellphoneData } from '../data/cellphone';
import RepairServiceLayout from '../components/RepairServiceLayout';


const CellphoneRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="cell-phone"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>Cell Phone Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <>
                    <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                            Select your Cell Phone Brand
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {cellphoneData.map((item) => (
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
                                                    maxWidth: 200,
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
                                { title: "Screen Replacement", price: "$79 - $299", desc: "AMOLED & LCD replacements for Samsung, Pixel, Motorola, etc.", icon: <Smartphone size={32} color="#78E335" /> },
                                { title: "Charging Port Repair", price: "$59 - $99", desc: "Microsoldering for loose USB-C and Micro-USB ports.", icon: <Zap size={32} color="#78E335" /> },
                                { title: "Battery Replacement", price: "$49 - $89", desc: "New cells for extended battery life and staying power.", icon: <Battery size={32} color="#78E335" /> },
                                { title: "Back Glass Repair", price: "$59+", desc: "Replace cracked back panels tailored to your model.", icon: <Monitor size={32} color="#78E335" /> },
                                { title: "Water Damage Cleaning", price: "$89", desc: "Ultrasonic cleaning to remove oxidation and corrosion.", icon: <Droplets size={32} color="#78E335" /> },
                                { title: "Camera Lens Repair", price: "$49+", desc: "Detailed replacement of cracked rear camera glass.", icon: <Camera size={32} color="#78E335" /> },
                                { title: "Speaker / Mic Repair", price: "$59+", desc: "Fix low volume, crackling sound, or mute microphones.", icon: <Volume2 size={32} color="#78E335" /> },
                                { title: "Data Recovery", price: "Varies", desc: "Software solutions to retrieve contacts and photos.", icon: <Database size={32} color="#78E335" /> },
                                { title: "Unlock Services", price: "Varies", desc: "Carrier unlocks and Google FRP removal services.", icon: <Unlock size={32} color="#78E335" /> }
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
                                    issue: "Won't Charge",
                                    solution: "Common on Samsungs and Motos. We solder new USB-C ports on the motherboard.",
                                    icon: <Zap size={24} />
                                },
                                {
                                    issue: "Broken Screen / No Display",
                                    solution: "OLED screens are delicate. We replace the full assembly for a factory-fresh look.",
                                    icon: <Smartphone size={24} />
                                },
                                {
                                    issue: "Boot Loop / Stuck on Logo",
                                    solution: "Software corruption. We can re-flash firware or replace the battery if voltage is low.",
                                    icon: <RefreshCw size={24} />
                                },
                                {
                                    issue: "Can't Hear Calls",
                                    solution: "Earpiece speaker mesh gets clogged. We clean or replace the receiver speaker.",
                                    icon: <Volume2 size={24} />
                                },
                                {
                                    issue: "Network Issues",
                                    solution: "Weak signal? It could be a loose antenna cable or damaged SIM reader.",
                                    icon: <Wifi size={24} />
                                },
                                {
                                    issue: "Back Glass Smashed",
                                    solution: "We carefully remove broken glass to keep the wireless charging coil safe.",
                                    icon: <Maximize size={24} />
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

                    {/* FAQ Section */}
                    <Box sx={{ mb: 8, maxWidth: '900px', mx: 'auto' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
                            Frequently Asked Questions
                        </Typography>
                        {[
                            {
                                q: "Do you fix phones other than iPhone/Samsung?",
                                a: "Yes! We repair Motorola, LG, Google Pixel, OnePlus, and many other brands. Call us for a quote."
                            },
                            {
                                q: "Do you have parts in stock?",
                                a: "We stock common Samsung and Pixel screens. For less common models, we can order parts for next-day delivery."
                            },
                            {
                                q: "Is my water resistant phone still waterproof after repair?",
                                a: "We use factory-grade adhesive to seal the phone, but we always advise treating any repaired device as non-waterproof."
                            },
                            {
                                q: "My charging port is loose. Do I need a new battery?",
                                a: "Likely not. A loose port usually means the port itself is worn out or dirty. We can clean or solder a new one."
                            },
                            {
                                q: "How much is a screen for a [Brand] phone?",
                                a: "Prices vary wildly by model (LCD vs OLED). Please contact us with your specific model number for an exact price."
                            }
                        ].map((faq, index) => (
                            <Accordion key={index} elevation={0} sx={{
                                mb: 2,
                                border: '1px solid #E0E0E0',
                                borderRadius: 2,
                                '&:before': { display: 'none' }
                            }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#78E335' }} />}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>{faq.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">{faq.a}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </>
            }
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                Cell Phone Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                We Repair All Major Smartphone Brands
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Looking for a reliable cell phone repair shop? We repair Samsung, Google Pixel, Motorola, OnePlus, Nothing, Xiaomi, Realme, Oppo, Vivo, and many other brands. Whether you have a broken screen, bad battery, or charging issues, we can help.
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                Services We Offer
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">Cracked Screen Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Charging Port Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Software Troubleshooting</Typography></Box>
                <Box component="li"><Typography variant="body1">Data Recovery</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default CellphoneRepair;
