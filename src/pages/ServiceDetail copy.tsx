import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { repairServices } from '../data/repairData';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = repairServices.find(s => s.id === id);

    if (!service) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Service Not Found</Typography>
                <Button component={Link} to="/" sx={{ mt: 2 }}>Return Home</Button>
            </Container>
        );
    }

    const renderModelList = (models: any[]) => (
        <Grid container spacing={2}>
            {models.map((model) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={model.id}>
                    <Paper
                        component={Link}
                        to={`/service/${service?.id}/${model.id}`}
                        // state={{ deviceModel: model.name }} // State no longer needed for navigation, but keeping it won't hurt. Removing for cleanliness.
                        elevation={0}
                        sx={{
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 2,
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                            '&:hover': {
                                borderColor: '#78E335',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                transform: 'translateY(-2px)'
                            },
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant="body1" fontWeight={600} color="textPrimary">
                            {model.name}
                        </Typography>
                        <Typography variant="caption" color="primary" fontWeight={700}>
                            Repair &rarr;
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box sx={{ pb: 10 }}>
            {/* Header */}
            <Box sx={{ bgcolor: '#F4F6F8', py: 6, mb: 6 }}>
                <Container maxWidth="xl">
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link to="/" style={{ color: '#546E7A', textDecoration: 'none' }}>Home</Link>
                        <Typography color="text.primary" fontWeight={600}>{service.name}</Typography>
                    </Breadcrumbs>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>
                        {service.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', maxWidth: 800 }}>
                        Professional repair services for all {service.name} models. Select your device below to get started.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="xl">
                {/* Content */}
                {service.subCategories ? (
                    <Box>
                        {service.subCategories.map((sub) => (
                            <Box key={sub.name} sx={{ mb: 8 }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#2C3E50', mb: 3, borderBottom: '2px solid #f0f0f0', pb: 1, display: 'inline-block' }}>
                                    {sub.name}
                                </Typography>
                                {renderModelList(sub.models)}
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Box>
                        {service.models && service.models.length > 0 ? (
                            renderModelList(service.models)
                        ) : (
                            <Typography variant="body1">No models listed for this category yet.</Typography>
                        )}
                    </Box>
                )}

                {/* Bottom CTA */}
                <Box sx={{ mt: 8, p: 6, bgcolor: '#2C3E50', borderRadius: 4, textAlign: 'center', color: 'white' }}>
                    <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
                        Can't find your device?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        We fix almost everything! Contact us for a custom quote.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/contact-us" sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}>
                        Contact Us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceDetail;
