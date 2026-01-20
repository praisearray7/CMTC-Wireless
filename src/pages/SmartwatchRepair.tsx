import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { smartwatchData } from '../data/smartwatch';
import RepairServiceLayout from '../components/RepairServiceLayout';


const SmartwatchRepair = () => {
    return (
        <RepairServiceLayout
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>Smart Watch Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
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
