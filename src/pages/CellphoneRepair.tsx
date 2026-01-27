'use client';

import Link from 'next/link';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Smartphone, Zap, Volume2, RefreshCw, Wifi, Maximize } from 'lucide-react';
import { cellphoneData } from '../data/cellphone';
import RepairCard from '../components/RepairCard';
import { repairDetails } from '../data/modelSpecificDetails';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { colors } from '../theme/colors';


import SEO from '../components/SEO';
import StaggerContainer from '../components/animations/StaggerContainer';

const CellphoneRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="Cell Phone Repair"
                description="Professional repair services for all major cell phone brands including Samsung, Pixel, Motorola, and more. Screen, battery, and port repairs."
            />
            <RepairServiceLayout
                faqCategory="cell-phone"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link href="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Typography color="text.primary" fontWeight={600}>Cell Phone Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                                Select your Cell Phone Brand
                            </Typography>
                            <StaggerContainer childSelector=".cellphone-brand-item">
                                <Grid container spacing={3} justifyContent="center">
                                    {cellphoneData.map((item) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} className="cellphone-brand-item">
                                            <Link
                                                href={`/contact-us?deviceModel=${encodeURIComponent(item.title)}&serviceNeeded=Repair+Service`}
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
                            </StaggerContainer>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Most Popular Repairs */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
                                Most Popular Repairs
                            </Typography>
                            <StaggerContainer childSelector=".most-popular-repair-item">
                                <Grid container spacing={3}>
                                    {[
                                        'screen-replacement', 'charging-port-repair', 'battery-replacement',
                                        'back-glass-repair', 'water-damage-cleaning', 'camera-repair',
                                        'speaker-repair', 'data-recovery', 'unlock-services'
                                    ].map((type, index) => {
                                        const item = repairDetails[type];
                                        if (!item) return null;
                                        return (
                                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} className="most-popular-repair-item">
                                                <RepairCard
                                                    title={item.title}
                                                    description={item.desc}
                                                    image={item.image}
                                                    icon={item.icon}
                                                    priceContent={
                                                        <Typography variant="h6" sx={{ fontWeight: 700, whiteSpace: 'nowrap', color: colors.primary }}>
                                                            {loading ? "Loading..." : getPriceRange('android', item.title)}
                                                        </Typography>
                                                    }
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </StaggerContainer>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Common Issues Section */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
                                Common Issues & Solutions
                            </Typography>
                            <StaggerContainer childSelector=".common-issue-item">
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
                                        <Grid size={{ xs: 12, md: 6 }} key={index} className="common-issue-item">
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
                            </StaggerContainer>
                        </Box>

                        <Divider sx={{ my: 8 }} />
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
        </>
    );
};

export default CellphoneRepair;
