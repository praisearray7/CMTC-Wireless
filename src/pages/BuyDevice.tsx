
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const BuyDevice = () => {
    const navigate = useNavigate();
    // Mock inventory
    const inventory = [
        { id: 1, name: 'iPhone 15 Pro Max', condition: 'Like New', price: 'Ask for Price', color: 'Natural Titanium' },
        { id: 2, name: 'Samsung S24 Ultra', condition: 'Excellent', price: 'Ask for Price', color: 'Titanium Black' },
        { id: 3, name: 'iPhone 14', condition: 'Good', price: 'Ask for Price', color: 'Midnight' },
        { id: 4, name: 'iPad Air 5', condition: 'New Open Box', price: 'Ask for Price', color: 'Space Gray' },
    ];

    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Certified Pre-Owned Devices</Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', fontWeight: 400, maxWidth: 700, mx: 'auto' }}>
                        Discover our selection of certified pre-owned phones. All meticulously inspected and restored to like-new condition. Get a reliable phone at a great price!
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Catalog Section */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#2C3E50' }}>Latest Arrivals</Typography>
                        <Grid container spacing={3}>
                            {inventory.map((item) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                                    <Card sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } }}>
                                        <Box sx={{ height: 200, bgcolor: '#eeeeee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SmartphoneIcon sx={{ fontSize: 80, color: '#bdbdbd' }} />
                                        </Box>
                                        <CardContent>
                                            <Stack direction="row" justifyContent="space-between" alignItems="start" mb={1}>
                                                <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.name}</Typography>
                                                <Chip label={item.condition} size="small" color="primary" sx={{ fontWeight: 600 }} />
                                            </Stack>
                                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>Color: {item.color}</Typography>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                color="secondary"
                                                sx={{ borderRadius: 2 }}
                                                onClick={() => navigate('/contact-us', { state: { serviceNeeded: 'Check Availability', deviceModel: item.name } })}
                                            >
                                                Check Availability
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Inquiry Sidebar */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{ position: 'sticky', top: 100, borderRadius: 3, p: 2 }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#2C3E50' }}>Looking for something specific?</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                                    We have new inventory arriving daily. Let us know what you want and we'll find it for you.
                                </Typography>
                                <Button variant="contained" color="primary" fullWidth size="large" sx={{ mb: 2 }}>
                                    Call (612) 446-0559
                                </Button>
                                <Button variant="outlined" color="secondary" fullWidth size="large">
                                    Request a Device
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BuyDevice;
