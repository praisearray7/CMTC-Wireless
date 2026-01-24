import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Grid, Typography, Card, CardContent, TextField, Button, Stack, Autocomplete, Chip, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { fetchServicesData, type ServiceDetail } from '../data/services';
import { contactInfo } from '../data/contactInfo';
import GoogleReviews from '../components/GoogleReviews';

const ContactUs = () => {
    const location = useLocation();

    // Form State
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Data State
    const [servicesData, setServicesData] = useState<ServiceDetail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchServicesData();
                setServicesData(data);
            } catch (err) {
                setError('Failed to load service options.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // Derived States
    const companies = useMemo(() => Array.from(new Set(servicesData.map(s => s.company))).sort(), [servicesData]);

    const devices = useMemo(() => {
        if (!selectedCompany) return [];
        return Array.from(new Set(
            servicesData
                .filter(s => s.company === selectedCompany)
                .map(s => s.device)
        )).sort();
    }, [selectedCompany, servicesData]);

    const services = useMemo(() => {
        if (!selectedCompany || !selectedDevice) return [];
        return servicesData
            .filter(s => s.company === selectedCompany && s.device === selectedDevice)
            .map(s => s.service)
            .sort();
    }, [selectedCompany, selectedDevice, servicesData]);

    const currentServiceDetail: ServiceDetail | undefined = useMemo(() => {
        if (!selectedCompany || !selectedDevice || !selectedService) return undefined;
        return servicesData.find(s =>
            s.company === selectedCompany &&
            s.device === selectedDevice &&
            s.service === selectedService
        );
    }, [selectedCompany, selectedDevice, selectedService, servicesData]);

    // Handle incoming state from other pages
    useEffect(() => {
        if (!loading && servicesData.length > 0 && location.state?.deviceModel) {
            const found = servicesData.find(s => s.device === location.state.deviceModel || s.device.includes(location.state.deviceModel));
            if (found) {
                setSelectedCompany(found.company);
                setSelectedDevice(found.device);
            }
        }
    }, [location.state, loading, servicesData]);

    useEffect(() => {
        if (!image) {
            setPreviewUrl(null);
            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreviewUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [image]);

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Get in Touch</Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', fontWeight: 400 }}>
                        Have a question or need a quote? We're here to help 24/7.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Info Side */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { md: 10 } }}>
                        <Stack spacing={4}>
                            <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', bgcolor: '#F9FAFB', '&:hover': { boxShadow: '0 4px 20px rgba(163, 219, 145, 1)', color: '#78E335' } }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Stack
                                        component="a"
                                        href={contactInfo.address.minneapolis.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                        sx={{ mb: 4, textDecoration: 'none', color: 'inherit', transition: '0.2s', '&:hover': { opacity: 0.7 } }}

                                    >
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: '#78E335' }}><LocationOnIcon /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{contactInfo.address.minneapolis.name}</Typography>
                                            <Typography variant="body1" color="textSecondary">{contactInfo.address.minneapolis.street}<br />{contactInfo.address.minneapolis.cityStateZip}</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack
                                        component="a"
                                        href={contactInfo.address.stPaul.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                        sx={{ textDecoration: 'none', color: 'inherit', transition: '0.2s', '&:hover': { opacity: 0.7 } }}
                                    >
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: '#78E335' }}><LocationOnIcon /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{contactInfo.address.stPaul.name}</Typography>
                                            <Typography variant="body1" color="textSecondary">{contactInfo.address.stPaul.street}<br />{contactInfo.address.stPaul.cityStateZip}</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', bgcolor: '#2C3E50', color: 'white' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Stack spacing={3}>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            component="a"
                                            href={contactInfo.phone.link}
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#78E335' } }}
                                        >
                                            <PhoneIcon sx={{ color: '#78E335' }} />
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>{contactInfo.phone.display}</Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            component="a"
                                            href={contactInfo.email.link}
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#78E335' } }}
                                        >
                                            <EmailIcon sx={{ color: '#78E335' }} />
                                            <Typography variant="body1">{contactInfo.email.display}</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="flex-start">
                                            <AccessTimeIcon sx={{ color: '#78E335' }} />
                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 700, color: '#78E335', mb: 0.5 }}>OPEN 24 HOURS</Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>Monday - Saturday</Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>Sunday: Closed</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Contact Form Side */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Card sx={{ borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: '100%' }}>
                            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#2C3E50' }}>Get Instant Quote</Typography>

                                {loading && <Typography>Loading options...</Typography>}
                                {!loading && servicesData.length === 0 && <Alert severity="warning">No service data loaded. Please refresh.</Alert>}

                                {error && <Alert severity="error">{error}</Alert>}

                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField label="Full Name" fullWidth variant="outlined" InputProps={{ sx: { borderRadius: 2 } }} />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField label="Phone Number" fullWidth variant="outlined" InputProps={{ sx: { borderRadius: 2 } }} />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField label="Email Address" type="email" fullWidth variant="outlined" InputProps={{ sx: { borderRadius: 2 } }} />
                                    </Grid>

                                    {/* Brand Selection */}
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            options={companies}
                                            value={selectedCompany}
                                            loading={loading}
                                            onChange={(_, newValue) => {
                                                setSelectedCompany(newValue);
                                                setSelectedDevice(null);
                                                setSelectedService(null);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Company/Brand"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Device Selection */}
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            options={devices}
                                            value={selectedDevice}
                                            disabled={!selectedCompany}
                                            loading={loading}
                                            onChange={(_, newValue) => {
                                                setSelectedDevice(newValue);
                                                setSelectedService(null);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Device Model/Category"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Service Selection */}
                                    <Grid size={{ xs: 12 }}>
                                        <Autocomplete
                                            options={services}
                                            value={selectedService}
                                            disabled={!selectedDevice}
                                            loading={loading}
                                            onChange={(_, newValue) => setSelectedService(newValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Repair Service Name"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Service Details Summary */}
                                    {currentServiceDetail && (
                                        <Grid size={{ xs: 12 }}>
                                            <Box sx={{
                                                p: 3,
                                                bgcolor: '#F0F9FF',
                                                borderRadius: 2,
                                                border: '1px solid #B3E5FC',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 2
                                            }}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Typography variant="subtitle1" fontWeight={700} color="#0288D1">Estimated Cost:</Typography>
                                                    <Typography variant="h5" fontWeight={800} color="#0288D1">${currentServiceDetail.cost}</Typography>
                                                </Stack>
                                                {currentServiceDetail.service !== 'Buy a Phone' && (
                                                    <>
                                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                            <Typography variant="body2" color="text.secondary">Repair Duration:</Typography>
                                                            <Typography variant="body2" fontWeight={600} color="text.primary">{currentServiceDetail.duration} Hours</Typography>
                                                        </Stack>
                                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                            <Typography variant="body2" color="text.secondary">Warranty:</Typography>
                                                            <Chip label={currentServiceDetail.warranty || "N/A"} size="small" color="primary" variant="outlined" />
                                                        </Stack>
                                                    </>
                                                )}
                                                {!currentServiceDetail.technicianAvailable && (
                                                    <Alert severity="warning" sx={{ mt: 1 }}>
                                                        Technician currently unavailable for this service. Please contact us to schedule.
                                                    </Alert>
                                                )}
                                            </Box>
                                        </Grid>
                                    )}

                                    <Grid size={{ xs: 12 }}>
                                        <TextField label="How can we help?" multiline rows={4} fullWidth variant="outlined" InputProps={{ sx: { borderRadius: 2 } }} />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Box>
                                            <Button
                                                component="label"
                                                variant="outlined"
                                                fullWidth
                                                sx={{ py: 1.5, borderRadius: 2, borderStyle: 'dashed' }}
                                            >
                                                {image ? `Selected: ${image.name}` : "Upload Your Device Image (Optional)"}
                                                <input
                                                    type="file"
                                                    hidden
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        if (e.target.files && e.target.files[0]) {
                                                            setImage(e.target.files[0]);
                                                        }
                                                    }}
                                                />
                                            </Button>

                                            {image && previewUrl && (
                                                <Box sx={{ mt: 2, position: 'relative', display: 'inline-block' }}>
                                                    <Box
                                                        component="img"
                                                        src={previewUrl}
                                                        alt="Device preview"
                                                        sx={{
                                                            width: 100,
                                                            height: 100,
                                                            objectFit: 'cover',
                                                            borderRadius: 2,
                                                            border: '1px solid #eee'
                                                        }}
                                                    />
                                                    <Button
                                                        size="small"
                                                        onClick={() => setImage(null)}
                                                        sx={{
                                                            position: 'absolute',
                                                            top: -10,
                                                            right: -10,
                                                            minWidth: 'auto',
                                                            width: 24,
                                                            height: 24,
                                                            p: 0,
                                                            bgcolor: '#ef5350',
                                                            color: 'white',
                                                            borderRadius: '50%',
                                                            '&:hover': { bgcolor: '#d32f2f' }
                                                        }}
                                                    >
                                                        ×
                                                    </Button>
                                                </Box>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button variant="contained" color="primary" size="large" fullWidth endIcon={<SendIcon />} sx={{ py: 1.5, fontSize: '1.1rem' }}>
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <GoogleReviews />
        </Box>
    );
};

export default ContactUs;
