import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ipadData } from '../data/ipad';
import RepairServiceLayout from '../components/RepairServiceLayout';

const IpadRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="ipad"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>iPad Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                        Select your iPad Model
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {ipadData.map((item) => (
                            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={item.id}>
                                <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
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
                                        <Typography variant="h6" sx={{ color: "#1a1a1a", fontWeight: 600, textAlign: 'center' }}>{item.title}</Typography>
                                    </Paper>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            }
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                iPad Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                iPad Repair Services for Schools and Small Businesses
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Keep your classrooms and teams moving. CMTC Wireless provides worry-free depot iPad repairs with clear SLAs, consistent quality, and streamlined shipping to and from our repair facility.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Our trained technicians have repaired iPads for over ten years. We use professional tools, OEM-grade parts where available, and multi-point testing so devices return ready for use. Choose standard one to three business day turnaround after depot check-in, or ask about accelerated options on approved programs. Shipping time is additional.
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                What we repair
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">Cracked screens and digitizers</Typography></Box>
                <Box component="li"><Typography variant="body1">Batteries and charging issues</Typography></Box>
                <Box component="li"><Typography variant="body1">No power and boot failures</Typography></Box>
                <Box component="li"><Typography variant="body1">Buttons, cameras, speakers, and microphones</Typography></Box>
                <Box component="li"><Typography variant="body1">Liquid damage evaluation with recovery when possible</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default IpadRepair;
