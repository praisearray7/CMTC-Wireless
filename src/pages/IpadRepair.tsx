import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Tablet, Zap, Volume2, RefreshCw, Maximize, Touchpad } from 'lucide-react';
import { ipadData } from '../data/ipad';
import RepairServiceLayout from '../components/RepairServiceLayout';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { colors } from '../theme/colors';
import RepairCard from '../components/RepairCard';
import { repairDetails } from '../data/modelSpecificDetails';
import StaggerContainer from '../components/animations/StaggerContainer';

import SEO from '../components/SEO';

const IpadRepair = () => {
    const { getPriceRange, loading } = useRepairPricing();

    return (
        <>
            <SEO
                title="iPad Repair"
                description="Professional iPad repair services for schools, businesses, and individuals. Screen replacement, battery fixes, and charging port repair."
            />
            <RepairServiceLayout
                faqCategory="ipad"
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#000000', textDecoration: 'none' }}>Home</Link>
                        <Typography color="text.primary" fontWeight={600}>iPad Repair</Typography>
                    </Breadcrumbs>
                }
                bottomContent={
                    <>
                        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#000000', mb: 4 }}>
                                Select your iPad Model
                            </Typography>

                            <StaggerContainer childSelector=".ipad-model-card">
                                <Grid container spacing={3} justifyContent="center">
                                    {ipadData.map((item) => (
                                        <Grid size={{ xs: 6, sm: 6, md: 3 }} key={item.id} className="ipad-model-card">
                                            <Link
                                                to="/contact-us"
                                                state={{ deviceModel: item.title, serviceNeeded: "Repair Service" }}
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
                                                            maxWidth: 180,
                                                            height: "auto",
                                                            objectFit: "contain",
                                                            mb: 2,
                                                            transition: "none",
                                                        }}
                                                    />
                                                    <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600, textAlign: 'center' }}>{item.title}</Typography>
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
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 4, textAlign: 'center' }}>
                                Most Popular Repairs
                            </Typography>
                            <StaggerContainer childSelector=".repair-card-item">
                                <Grid container spacing={3}>
                                    {Object.values(repairDetails).map((item: any, index: number) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} className="repair-card-item">
                                            <RepairCard
                                                title={item.title}
                                                description={item.desc}
                                                image={item.image}
                                                icon={item.icon}
                                                priceContent={
                                                    <Typography variant="h6" sx={{ fontWeight: 700, whiteSpace: 'nowrap', color: colors.primary }}>
                                                        {loading ? "Loading..." : getPriceRange('ipad', item.title)}
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </StaggerContainer>
                        </Box>

                        <Divider sx={{ my: 8, opacity: 0.1 }} />

                        {/* Common Issues Section */}
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 4, textAlign: 'center' }}>
                                Common Issues & Solutions
                            </Typography>
                            <StaggerContainer childSelector=".common-issue-item">
                                <Grid container spacing={3}>
                                    {[
                                        {
                                            issue: "Spiderweb Cracked Glass",
                                            solution: "If the screen still lights up fine, we often replace just the top glass digitizer.",
                                            icon: <Tablet size={24} />
                                        },
                                        {
                                            issue: "Bent Chassis / Frame",
                                            solution: "iPad Pros can bend easily. We gently reshape the frame to fit the new screen.",
                                            icon: <Maximize size={24} />
                                        },
                                        {
                                            issue: "Boot Loop / Apple Logo",
                                            solution: "Failed updates can cause this. We restore firmware without data loss if possible.",
                                            icon: <RefreshCw size={24} />
                                        },
                                        {
                                            issue: "Slow Charging / Not Charging",
                                            solution: "Usually a dirty or damaged charge port. We clean or microsolder a new one.",
                                            icon: <Zap size={24} />
                                        },
                                        {
                                            issue: "Ghost Touch",
                                            solution: "iPad typing on its own? The digitizer layer is damaged. Replacement fixes it.",
                                            icon: <Touchpad size={24} />
                                        },
                                        {
                                            issue: "No Sound",
                                            solution: "Blown speakers or stuck headphone mode. We diagnose audio ICs.",
                                            icon: <Volume2 size={24} />
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
                <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#000000', mb: 2, fontFamily: 'serif' }}>
                    iPad Repair
                </Typography>

                <Typography variant="h6" sx={{ color: '#000000', mb: 3, fontWeight: 400 }}>
                    iPad Repair Services for Schools and Small Businesses
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                    Keep your classrooms and teams moving. CMTC Wireless provides worry-free depot iPad repairs with clear SLAs, consistent quality, and streamlined shipping to and from our repair facility.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                    Our trained technicians have repaired iPads for over ten years. We use professional tools, OEM-grade parts where available, and multi-point testing so devices return ready for use. Choose standard one to three business day turnaround after depot check-in, or ask about accelerated options on approved programs. Shipping time is additional.
                </Typography>

                <Typography variant="h6" sx={{ color: '#000000', mb: 2, fontWeight: 600 }}>
                    What we repair
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#000000' }}>
                    <Box component="li"><Typography variant="body1">Cracked screens and digitizers</Typography></Box>
                    <Box component="li"><Typography variant="body1">Batteries and charging issues</Typography></Box>
                    <Box component="li"><Typography variant="body1">No power and boot failures</Typography></Box>
                    <Box component="li"><Typography variant="body1">Buttons, cameras, speakers, and microphones</Typography></Box>
                    <Box component="li"><Typography variant="body1">Liquid damage evaluation with recovery when possible</Typography></Box>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default IpadRepair;
