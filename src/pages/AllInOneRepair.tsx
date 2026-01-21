import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Breadcrumbs, Box, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Monitor, HardDrive, Zap, Activity, Database, ShieldAlert, Cpu, Layers, Power } from 'lucide-react';
import { aioData } from '../data/aio';
import RepairServiceLayout from '../components/RepairServiceLayout';

const AllInOneRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="desktop"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Link to="/computer-repair" style={{ color: '#546E7A', textDecoration: 'none' }}>Computer Repair</Link>
                    <Typography color="text.primary" fontWeight={600}>All-In-One Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <>
                    <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                            Select your All-In-One Brand
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {aioData.map((item) => (
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
                                        to={`/aio-repair/${item.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Box component="img" src={item.image} sx={{ width: "100%", maxWidth: 200, height: 'auto', objectFit: 'contain', mb: 2 }} />
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>{item.title}</Typography>
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
                                { title: "SSD Upgrade", price: "$149 - $249", desc: "The best upgrade for slow All-In-One PCs.", icon: <HardDrive size={32} color="#78E335" /> },
                                { title: "Screen Replacement", price: "$199+", desc: "Fix cracked glass or LCDs on iMacs and HP AIOs.", icon: <Monitor size={32} color="#78E335" /> },
                                { title: "Power Supply Repair", price: "$129+", desc: "Repair or replace internal power supply units.", icon: <Zap size={32} color="#78E335" /> },
                                { title: "RAM Upgrade", price: "$89 - $149", desc: "Multitask better with more memory.", icon: <Layers size={32} color="#78E335" /> },
                                { title: "Data Recovery", price: "Varies", desc: "Safe file extraction from failing drives.", icon: <Database size={32} color="#78E335" /> },
                                { title: "Virus Removal", price: "$99 Flat Rate", desc: "Remove malware without losing your data.", icon: <ShieldAlert size={32} color="#78E335" /> },
                                { title: "Fan Cleaning & Noise", price: "$99", desc: "Fix loud buzzing noises and overheating.", icon: <Activity size={32} color="#78E335" /> },
                                { title: "Motherboard Repair", price: "$199+", desc: "Component level repair for dead units.", icon: <Cpu size={32} color="#78E335" /> },
                                { title: "OS Reinstallation", price: "$99", desc: "Fresh install of Windows or macOS.", icon: <Monitor size={32} color="#78E335" /> }
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
                                    issue: "Extremely Slow / Freezing",
                                    solution: "Most AIOs use slow HDDs. Upgrading to an SSD makes them 10x faster.",
                                    icon: <Zap size={24} />
                                },
                                {
                                    issue: "Loud Fan Noise",
                                    solution: "Dust accumulates easily in AIOs. We open them up and clean the cooling system.",
                                    icon: <Activity size={24} />
                                },
                                {
                                    issue: "Cracked Screen Glass",
                                    solution: "We can replace just the glass on some models, or the full display assembly.",
                                    icon: <Monitor size={24} />
                                },
                                {
                                    issue: "Won't Turn On",
                                    solution: "Could be the external power brick or internal power supply. We test both.",
                                    icon: <Power size={24} />
                                },
                                {
                                    issue: "Touchscreen Not Working",
                                    solution: "Driver corruption or digitizer failure. We diagnose and repair the touch layer.",
                                    icon: <Monitor size={24} />
                                },
                                {
                                    issue: "Boot Loops / Blue Screen",
                                    solution: "Operating system corruption is common. We can repair Windows or macOS.",
                                    icon: <ShieldAlert size={24} />
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
                                q: "My All-In-One is very slow. Can it be fixed?",
                                a: "Yes! The #1 reason for this is a slow spinning hard drive. Replacing it with an SSD usually makes the computer faster than when it was new."
                            },
                            {
                                q: "Do you repair iMacs?",
                                a: "Yes, we specialize in Apple iMac repairs, including screen adhesive replacement, SSD upgrades, and RAM upgrades."
                            },
                            {
                                q: "Is it expensive to fix a cracked AIO screen?",
                                a: "It can be, as the screens are large and often glued. However, it's usually much cheaper than buying a brand new computer."
                            },
                            {
                                q: "Do you offer on-site / home repair?",
                                a: "No, we recommend bringing it to our shop where we have a clean, static-free environment and all the necessary heavy equipment."
                            },
                            {
                                q: "Can you upgrade the RAM in my AIO?",
                                a: "Most likely. Some newer models have soldered RAM, but many can still be upgraded. We can check your specific model."
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
                All-In-One Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                Expert Service for iMacs, HP, Dell & More
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                All-In-One computers save space but are notorious for being difficult to service. Our technicians have the specialized tools and expertise to safely open and repair these sleek machines.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Whether it's a slow hard drive, a cracked screen, or a noisy fan, we can restore your All-In-One to peak performance.
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                Common All-In-One Services
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">SSD & RAM Upgrades</Typography></Box>
                <Box component="li"><Typography variant="body1">Screen & Glass Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Power Supply Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Motherboard Logic Board Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Data Recovery</Typography></Box>
                <Box component="li"><Typography variant="body1">Fan Cleaning & Thermal Paste</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default AllInOneRepair;
