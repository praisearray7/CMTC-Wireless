import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Monitor, HardDrive, Cpu, AlertTriangle, ShieldAlert, Power, Activity, Database, Zap } from 'lucide-react';
import { computerData } from '../data/computer';
import RepairServiceLayout from '../components/RepairServiceLayout';


const ComputerRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="computer"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>Computer Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <>
                    <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                            Select your Computer Type
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {computerData.map((item) => {
                                // Map category IDs to their specific repair pages
                                let linkPath = `/computer-repair/${item.id}`;
                                if (item.id === 'desktop') linkPath = '/desktop-repair';
                                if (item.id === 'laptop') linkPath = '/laptop-repair';
                                if (item.id === 'all-in-one') linkPath = '/aio-repair';

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
                                { title: "OS Install / Reformat", price: "$49 - $99", desc: "Clean install of Windows or macOS to fix software issues.", icon: <Monitor size={32} color="#78E335" /> },
                                { title: "Drive Replacement", price: "$149 - $299", desc: "Replace failing HDDs to restore your computer.", icon: <HardDrive size={32} color="#78E335" /> },
                                { title: "SSD Upgrade", price: "$149 - $399", desc: "Boost speed by up to 10x with a new Solid State Drive.", icon: <Zap size={32} color="#78E335" /> },
                                { title: "Data Recovery", price: "Varies", desc: "Recover lost photos & files from damaged drives.", icon: <Database size={32} color="#78E335" /> },
                                { title: "Logic Board Repair", price: "$199+", desc: "Component-level soldering for dead motherboards.", icon: <Cpu size={32} color="#78E335" /> },
                                { title: "Screen Repair", price: "Varies", desc: "Fix cracked screens on laptops and all-in-ones.", icon: <Monitor size={32} color="#78E335" /> },
                                { title: "Power Issues", price: "Varies", desc: "Fix charging ports and power supply failures.", icon: <Power size={32} color="#78E335" /> },
                                { title: "Virus Removal", price: "$99 Flat Rate", desc: "Remove malware, spyware, and annoying pop-ups.", icon: <ShieldAlert size={32} color="#78E335" /> },
                                { title: "RAM Upgrade", price: "Varies", desc: "Increase memory for better multitasking performance.", icon: <Activity size={32} color="#78E335" /> }
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
                                    issue: "No Power / Not Turning On",
                                    solution: "Could be a power supply, battery, or motherboard issue. We verify the power path first.",
                                    icon: <Power size={24} />
                                },
                                {
                                    issue: "Computer is Running Slow",
                                    solution: "Often caused by failing hard drives or background bloatware. SSD upgrades and cleanups work wonders.",
                                    icon: <Activity size={24} />
                                },
                                {
                                    issue: "Random Freezing & Restarts",
                                    solution: "Signs of overheating, failing RAM, or driver conflicts. We run full stress tests to diagnose.",
                                    icon: <AlertTriangle size={24} />
                                },
                                {
                                    issue: "Programs Not Opening",
                                    solution: "Likely software corruption or malware. System file repairs or OS reinstalls usually fix this.",
                                    icon: <Database size={24} />
                                },
                                {
                                    issue: "Pop-up Messages & Ads",
                                    solution: "Classic malware symptoms. Our virus removal service cleans this up and secures your system.",
                                    icon: <ShieldAlert size={24} />
                                },
                                {
                                    issue: "Fan Grinding Noises",
                                    solution: "Failing fan bearings or debris. We replace the fan to prevent overheating damage.",
                                    icon: <Cpu size={24} />
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
                                q: "Do I need to book an appointment?",
                                a: "No, walk-ins are welcome! You can visit us anytime, though calling ahead is always appreciated."
                            },
                            {
                                q: "Do you charge for diagnostics?",
                                a: "We have a $49 basic diagnostic fee. This is waived or credited towards the repair if you choose to proceed with our service."
                            },
                            {
                                q: "Is it expensive?",
                                a: "We strive for competitive, flat-rate labor pricing (often around $99 + parts). We provide transparent quotes before starting any work."
                            },
                            {
                                q: "Do you repair screens and replace hard drives?",
                                a: "Yes! These are our most common repairs. We can replace screens on thousands of models and upgrade old hard drives to fast SSDs."
                            },
                            {
                                q: "How long does it take?",
                                a: "Screen replacements or simple part swaps are often done within 24-48 hours if parts are in stock. Complex motherboard repairs may take longer."
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
            {/* Hero Section */}
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                Computer Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                Professional Computer & Laptop Repair Services
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Is your computer running slow, screen cracked, or drive failing? CMTC Wireless offers fast, reliable, and affordable computer repair services. Our certified technicians use high-quality parts to ensure your device works like new again.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                We cover everything from screen replacements and SSD upgrades to virus removal and data recovery. Most repairs are done the same day!
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                Common Computer Repairs
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">Screen & LCD Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Hard Drive & SSD Upgrade</Typography></Box>
                <Box component="li"><Typography variant="body1">Virus & Malware Removal</Typography></Box>
                <Box component="li"><Typography variant="body1">Data Recovery</Typography></Box>
                <Box component="li"><Typography variant="body1">Water Damage Cleaning</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default ComputerRepair;
