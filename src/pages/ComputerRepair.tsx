import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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
            }
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 2, fontFamily: 'serif' }}>
                Reliable
                <br />
                Chromebook
                <br />
                Repair Service
            </Typography>

            <Typography variant="h6" sx={{ color: '#546E7A', mb: 3, fontWeight: 400 }}>
                Chromebook Repair for Schools and Small Businesses
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6, fontStyle: 'italic' }}>
                Effective October 1, 2025, CMTC Wireless partners exclusively with schools and small businesses. We do not offer walk in retail service for the general public.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Keep devices in student and staff hands. CMTC Wireless provides depot Chromebook repair with clear SLAs, consistent quality, and simple logistics. Whether you need fast screen replacements or a full lifecycle program with accidental damage protection, device maintenance, white glove deployment, device refresh, and spare pool management, we are ready to help.
            </Typography>
        </RepairServiceLayout>
    );
};

export default ComputerRepair;
