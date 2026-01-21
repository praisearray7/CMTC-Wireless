import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { macbookData } from '../data/macbook';
import RepairServiceLayout from '../components/RepairServiceLayout';


const MacbookRepair = () => {
    return (
        <RepairServiceLayout
            faqCategory="macbook"
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Typography color="text.primary" fontWeight={600}>MacBook Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                    <Grid container spacing={3} justifyContent="center">
                        {macbookData.map((item) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
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
                                                maxWidth: 220,
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
                MacBook Repair
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                MacBook Repair Services for Schools and Small Businesses
            </Typography>

            <Typography variant="h5" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                MacBook repairs you can trust
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Your classrooms and teams rely on MacBooks every day. When devices fail, you need a dependable partner that restores uptime fast. CMTC Wireless delivers depot repair programs built for education and small business fleets with clear SLAs, consistent quality, and simple logistics.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                We have repaired Mac laptops for over ten years. Our trained technicians follow documented processes and multi point testing so devices return ready for use. Every repair includes a one year warranty on covered work.
            </Typography>

            <Typography variant="h6" sx={{ color: '#333', mb: 2, fontWeight: 600 }}>
                What we repair
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#546E7A' }}>
                <Box component="li"><Typography variant="body1">Cracked and damaged displays</Typography></Box>
                <Box component="li"><Typography variant="body1">Batteries and charging issues</Typography></Box>
                <Box component="li"><Typography variant="body1">Keyboards, trackpads, and ports</Typography></Box>
                <Box component="li"><Typography variant="body1">No power and boot failures</Typography></Box>
                <Box component="li"><Typography variant="body1">Storage replacement and data recovery options</Typography></Box>
                <Box component="li"><Typography variant="body1">Liquid damage evaluation with recovery when possible</Typography></Box>
            </Box>
        </RepairServiceLayout>
    );
};

export default MacbookRepair;
