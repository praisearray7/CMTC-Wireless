import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Breadcrumbs, Box, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Monitor, HardDrive, Cpu, AlertTriangle, ShieldAlert, Power, Activity, Database, Zap, Box as BoxIcon } from 'lucide-react';
import { desktopData } from '../data/desktop';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';

import SEO from '../components/SEO';

const DesktopRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="Desktop Repair"
                description="Expert desktop repair services. Custom PC builds, GPU upgrades, motherboard replacement, and gaming PC diagnostics."
            />
            <RepairServiceLayout
                faqCategory="desktop"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Link to="/computer-repair" style={{ color: '#546E7A', textDecoration: 'none' }}>Computer Repair</Link>
                        <Typography color="text.primary" fontWeight={600}>Desktop Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                                Select your Desktop Type
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {desktopData.map((item) => (
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
                                            to={`/desktop-repair/${item.id}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Box component="img" src={item.image} alt={item.title} sx={{ width: "100%", maxWidth: 200, height: 'auto', objectFit: 'contain', mb: 2 }} />
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
                                    { title: "Custom PC Build", desc: "Professional assembly of your gaming rig or workstation.", icon: <Cpu size={32} color="#78E335" /> },
                                    { title: "GPU Installation", desc: "Upgrade your graphics card for better gaming performance.", icon: <Monitor size={32} color="#78E335" /> },
                                    { title: "Power Supply Swap", desc: "Replace faulty or underpowered PSUs safely.", icon: <Zap size={32} color="#78E335" /> },
                                    { title: "Liquid Cooling Setup", desc: "Install or maintain AIO and custom loop coolers.", icon: <Activity size={32} color="#78E335" /> },
                                    { title: "Motherboard Replacement", desc: "Expert swap of the main board with cable management.", icon: <Cpu size={32} color="#78E335" /> },
                                    { title: "Case Transfer", desc: "Move your components to a new, better-airflow case.", icon: <BoxIcon size={32} color="#78E335" /> },
                                    { title: "Storage Upgrade", desc: "Add NVMe SSDs or massive HDDs for more space.", icon: <HardDrive size={32} color="#78E335" /> },
                                    { title: "Virus Removal", desc: "Deep cleaning of malware and bloatware.", icon: <ShieldAlert size={32} color="#78E335" /> },
                                    { title: "Data Recovery", desc: "Retrieve lost files from failing desktop drives.", icon: <Database size={32} color="#78E335" /> }
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
                                                    {loading ? "Loading..." : getPriceRange('desktop', item.title)}
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
                                        issue: "Random Shutdowns",
                                        solution: "Often points to an overheating CPU or a failing power supply unit. We stress test both.",
                                        icon: <Power size={24} />
                                    },
                                    {
                                        issue: "No Display Signal",
                                        solution: "Could be the graphics card, RAM seating, or a bad cable. We isolate the component.",
                                        icon: <Monitor size={24} />
                                    },
                                    {
                                        issue: "Loud Fan Noise",
                                        solution: "Dust buildup or failing bearings. We clean the rig and replace noisy fans.",
                                        icon: <Activity size={24} />
                                    },
                                    {
                                        issue: "Blue Screen (BSOD)",
                                        solution: "Hardware conflict or driver corruption. We analyze crash dumps to fix the root cause.",
                                        icon: <AlertTriangle size={24} />
                                    },
                                    {
                                        issue: "PC Won't Post/Boot",
                                        solution: "Motherboard or RAM issue. We use diagnostic tools to read error codes.",
                                        icon: <Cpu size={24} />
                                    },
                                    {
                                        issue: "Slow Performance",
                                        solution: "Thermal throttling or slow HDD. A deep clean and SSD upgrade usually fixes this.",
                                        icon: <Zap size={24} />
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
                    Desktop Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                    Custom Gaming PC & Workstation Repair Services
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    Whether it's a high-end gaming rig that won't post or an office workstation acting sluggish, our experts know desktops inside and out. We handle customized builds, hardware upgrades, and complex diagnostics.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                    From cable management to improved airflow and liquid cooling maintenance, we ensure your desktop runs cool and fast.
                </Typography>

                <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                    Common Desktop Services
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                    <Box component="li"><Typography variant="body1">Graphics Card (GPU) Installation</Typography></Box>
                    <Box component="li"><Typography variant="body1">Power Supply (PSU) Replacement</Typography></Box>
                    <Box component="li"><Typography variant="body1">Custom PC Assembly</Typography></Box>
                    <Box component="li"><Typography variant="body1">Liquid Cooling Maintenance</Typography></Box>
                    <Box component="li"><Typography variant="body1">Motherboard Swaps</Typography></Box>
                    <Box component="li"><Typography variant="body1">Case Upgrades & Transfers</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default DesktopRepair;
