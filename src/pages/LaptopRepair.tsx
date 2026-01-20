import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Breadcrumbs, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { laptopData } from '../data/laptop';
import RepairServiceLayout from '../components/RepairServiceLayout';

const LaptopRepair = () => {
    return (
        <RepairServiceLayout
            breadcrumbs={
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                    <Link to="/computer-repair" style={{ color: '#546E7A', textDecoration: 'none' }}>Computer Repair</Link>
                    <Typography color="text.primary" fontWeight={600}>Laptop Repair</Typography>
                </Breadcrumbs>
            }
            bottomContent={
                <Grid container spacing={3} justifyContent="center">
                    {laptopData.map((item) => {
                        const linkPath = item.id === 'macbook-repair' ? '/macbook-repair' : `/laptop-repair/${item.id}`;
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
                                        transition: "all 0.35s ease",
                                        "&:hover": { boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" },
                                    }}
                                    component={Link}
                                    to={linkPath}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box component="img" src={item.image} sx={{ width: "100%", maxWidth: 200, mb: 2 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>{item.title}</Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            }
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 4, fontFamily: 'serif' }}>
                Laptop Repair
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#546E7A', mb: 3, lineHeight: 1.6 }}>
                Portable powerhouses need care too. We fix broken screens, keyboards, and batteries on all major laptop brands.
            </Typography>
        </RepairServiceLayout>
    );
};

export default LaptopRepair;
