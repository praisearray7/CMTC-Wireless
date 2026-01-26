import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Grid, Typography, Card, CardContent, TextField, Button, Stack, Autocomplete, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import { fetchServicesData, type ServiceDetail } from '../data/services';
import { contactInfo } from '../data/contactInfo';
import GoogleReviews from '../components/GoogleReviews';
import SEO from '../components/SEO';
import { colors } from '../theme/colors';

const ContactUs = () => {
    const location = useLocation();

    // Form State
    // const [selectedCompany, setSelectedCompany] = useState<string | null>(null); // Removed per request
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
    // const companies = useMemo(() => Array.from(new Set(servicesData.map(s => s.company))).sort(), [servicesData]);

    const devices = useMemo(() => {
        return Array.from(new Set(
            servicesData
                .map(s => s.device)
        )).sort();
    }, [servicesData]);

    const services = useMemo(() => {
        if (!selectedDevice) return [];
        return servicesData
            .filter(s => s.device === selectedDevice)
            .map(s => s.service)
            .sort();
    }, [selectedDevice, servicesData]);



    // Handle incoming state from other pages - Immediate Population
    useEffect(() => {
        if (location.state?.deviceModel) {
            // Directly set the text, don't wait for validation
            setSelectedDevice(location.state.deviceModel);
        }
        if (location.state?.serviceType) {
            setSelectedService(location.state.serviceType);
        }
    }, [location.state]);

    // Backfill Company information when data becomes available - REMOVED or Simplified logic if needed
    // logic to auto-select company is removed as field is gone
    /* 
    useEffect(() => {
       ... 
    }, ...); 
    */

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
            <SEO
                title="Contact Us"
                description="Get a free quote for your device repair. Contact CMTC Wireless in Minneapolis or St. Paul today for fast and expert service."
            />
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                        <span style={{ color: '#000000' }}>Get</span>{' '}
                        <span style={{ color: colors.primary }}>in</span>{' '}
                        <span style={{ color: colors.primaryBlue }}>Touch</span>
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#000000', fontWeight: 400 }}>
                        Have a question or need a quote? We're here to help 24/7.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Info Side */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { md: 10 } }}>
                        <Stack spacing={4}>
                            <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', bgcolor: '#F9FAFB', '&:hover': { boxShadow: '0 4px 20px rgba(163, 219, 145, 1)', color: colors.primary } }}>
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
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: colors.primary }}><LocationOnIcon /></Box>
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
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: colors.primary }}><LocationOnIcon /></Box>
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
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: colors.primary } }}
                                        >
                                            <PhoneIcon sx={{ color: colors.primary }} />
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>{contactInfo.phone.display}</Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            component="a"
                                            href={contactInfo.email.link}
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: colors.primary } }}
                                        >
                                            <EmailIcon sx={{ color: colors.primary }} />
                                            <Typography variant="body1">{contactInfo.email.display}</Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            component="a"
                                            href={contactInfo.text.link}
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: colors.primary } }}
                                        >
                                            <SmsIcon sx={{ color: colors.primary }} />
                                            <Typography variant="body1">Text: {contactInfo.text.display}</Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            component="a"
                                            href={contactInfo.whatsapp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: colors.primary } }}
                                        >
                                            <WhatsAppIcon sx={{ color: colors.primary }} />
                                            <Typography variant="body1">WhatsApp</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="flex-start">
                                            <AccessTimeIcon sx={{ color: colors.primary }} />
                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 700, color: colors.primary, mb: 0.5 }}>OPEN HOURS</Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>{contactInfo.hours.weekday}</Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>{contactInfo.hours.weekend}</Typography>
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
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: colors.primary, textAlign: 'center' }}>Get Instant Quote</Typography>

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

                                    {/* Device Selection */}
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            freeSolo
                                            options={devices}
                                            value={selectedDevice}
                                            loading={loading}
                                            onChange={(_, newValue) => {
                                                setSelectedDevice(newValue);
                                                setSelectedService(null);
                                            }}
                                            onInputChange={(_, newInputValue) => {
                                                setSelectedDevice(newInputValue);
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
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            freeSolo
                                            options={services}
                                            value={selectedService}
                                            loading={loading}
                                            onChange={(_, newValue) => setSelectedService(newValue)}
                                            onInputChange={(_, newInputValue) => {
                                                setSelectedService(newInputValue);
                                            }}
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
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth
                                            endIcon={<SendIcon />}
                                            sx={{
                                                py: 1.5,
                                                fontSize: '1.1rem',
                                                color: '#fff',
                                                fontWeight: 700
                                            }}
                                        >
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
