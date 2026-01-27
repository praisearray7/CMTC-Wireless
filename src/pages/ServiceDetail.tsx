'use client';

'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import StaggerContainer from '../components/animations/StaggerContainer';
import SEO from '../components/SEO';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { repairServices } from '../data/repairData';
import WhyChoose from '../components/WhyChoose';
import { colors } from '../theme/colors';


const ServiceDetail = () => {
    const params = useParams();
    // Handle potential array from catch-all routes, though typically it's a string in this context
    // Handle potential array from catch-all routes, though typically it's a string in this context
    const paramId = params?.id || params?.serviceId;
    const id = Array.isArray(paramId) ? paramId[0] : paramId;
    const service = repairServices.find(s => s.id === id);

    if (!service) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Service Not Found</Typography>
                <Button component={Link} href="/" variant="contained" sx={{ mt: 2 }}>Go Home</Button>
            </Container>
        );
    }

    const title = service.title || service.name;
    const description = service.shortDesc || `Expert ${title} services in Minneapolis & St. Paul.`;
    const image = service.image || '/store_image.png'; // Fallback to existing store image

    return (
        <>
            <SEO
                title={`${title} | CMTC Wireless`}
                description={description}
            />

            <Box sx={{ py: 4, bgcolor: '#f8fafc' }}>
                <Container maxWidth="xl">
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link href="/" style={{ color: colors.textSecondary || '#666', textDecoration: 'none' }}>Home</Link>
                        <Link href="/services" style={{ color: colors.textSecondary || '#666', textDecoration: 'none' }}>Services</Link>
                        <Typography color="text.primary">{title}</Typography>
                    </Breadcrumbs>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <StaggerContainer>
                            <Box
                                component="img"
                                src={image}
                                alt={title}
                                sx={{
                                    width: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </StaggerContainer>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <StaggerContainer delay={0.2}>
                            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
                                {title}
                            </Typography>
                            {service.priceRange && (
                                <Typography variant="h5" color="primary" sx={{ mb: 4, fontWeight: 600 }}>
                                    {service.priceRange}
                                </Typography>
                            )}
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: colors.textSecondary || '#666' }}>
                                {service.longDesc || `Professional ${title} with original quality parts and warranty.`}
                            </Typography>

                            <Box sx={{ mt: 4 }}>
                                <Link href="/contact-us" passHref style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            py: 1.5,
                                            px: 4,
                                            borderRadius: 2,
                                            fontWeight: 600
                                        }}
                                    >
                                        Book Repair
                                    </Button>
                                </Link>
                            </Box>
                        </StaggerContainer>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 12 }}>
                    <WhyChoose />
                </Box>
            </Container>
        </>
    );
};

export default ServiceDetail;
