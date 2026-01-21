import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { seriesData } from '../data/iphone';
import RepairServiceLayout from '../components/RepairServiceLayout';

const IphoneRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="cell-phone"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>iPhone Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#333', mb: 4 }}>
                        Select your iPhone Model
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {seriesData.map((item) => (
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
                                            boxShadow: "0px 0px 40px rgba(0,0,0,0.15)",
                                        },
                                    }}
                                    component={Link}
                                    to={`/iphone-repair/${item.id}`} // Linking to ModelDetail
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
                                        {item.title.replace(' Repair', '')}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            }
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                iPhone Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                Professional iPhone Screen Replacement & Repair Services
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Is your iPhone screen cracked, battery draining fast, or charging port not working? CMTC Wireless offers fast, reliable, and affordable iPhone repair services. Our certified technicians use high-quality parts to ensure your device works like new again.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                We cover everything from screen replacements and battery swaps to water damage repair and data recovery. Most repairs are done the same day!
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                Common iPhone Repairs
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">Screen & LCD Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Battery Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Charging Port Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Camera & Lens Repair</Typography></Box>
                <Box component="li"><Typography variant="body1">Back Glass Replacement</Typography></Box>
                <Box component="li"><Typography variant="body1">Water Damage Cleaning</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default IphoneRepair;
