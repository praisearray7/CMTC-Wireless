
import { Box, Container, Grid, Typography, Button, Stack, Rating } from '@mui/material';
import { imagePaths, getImagePath } from '../data/imagePaths';

const Hero = () => {
    return (
        <Box sx={{ bgcolor: '#ffffff', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Left: Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#333', lineHeight: 1.1 }}>
                            A better way to supporting your technology.
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#666', mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
                            Gophermods is the premier repair partner for K-12 schools and businesses. We keep your devices running so you can focus on what matters.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                            <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
                                K12 SCHOOLS
                            </Button>
                            <Button variant="outlined" color="secondary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: '#333', color: '#333' }}>
                                BUSINESSES
                            </Button>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Rating value={4.8} precision={0.1} readOnly />
                                <Typography variant="body2" sx={{ ml: 1, fontWeight: 600 }}>
                                    4.8/5
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                | Based on 600+ Reviews
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Right: Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={getImagePath(imagePaths.heroDevices)}
                            alt="Devices"
                            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
