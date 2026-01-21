import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Grid, Typography, Card, CardContent, TextField, Button, Stack, Autocomplete } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { repairServices } from '../data/repairData';
import GoogleReviews from '../components/GoogleReviews';

const ContactUs = () => {
    const location = useLocation();
    const [deviceModel, setDeviceModel] = useState<string | null>(null);
    const [serviceNeeded, setServiceNeeded] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (location.state?.deviceModel) {
            setDeviceModel(location.state.deviceModel);
        }
        if (location.state?.serviceNeeded) {
            setServiceNeeded(location.state.serviceNeeded);
        }
    }, [location.state]);

    useEffect(() => {
        if (!image) {
            setPreviewUrl(null);
            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreviewUrl(objectUrl);

        // cleanup function to avoid memory leaks
        return () => URL.revokeObjectURL(objectUrl);
    }, [image]);

    // Flatten all models for autocomplete
    const allModels = repairServices.reduce((acc: string[], service) => {
        if (service.subCategories) {
            service.subCategories.forEach(sub => {
                sub.models.forEach(model => acc.push(model.name));
            });
        }
        if (service.models) {
            service.models.forEach(model => acc.push(model.name));
        }
        return acc;
    }, []).sort();

    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Get in Touch</Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', fontWeight: 400 }}>
                        Have a question or need a quote? We're here to help 24/7.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Info Side */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={4}>
                            <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', bgcolor: '#F9FAFB' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Stack
                                        component="a"
                                        href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Minneapolis+MN/@44.9486757,-93.2607411,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x87f6281268b5bf95:0x9b46b4b64d7202cd!8m2!3d44.9486757!4d-93.2607411"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                        sx={{ mb: 4, textDecoration: 'none', color: 'inherit', transition: '0.2s', '&:hover': { opacity: 0.7 } }}
                                    >
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: '#78E335' }}><LocationOnIcon /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Minneapolis</Typography>
                                            <Typography variant="body1" color="textSecondary">920 E Lake St<br />Minneapolis, MN 55407</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack
                                        component="a"
                                        href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Saint+Paul/@44.9700122,-93.106482,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x52b32bb295c62feb:0xb4e923ed2e4799ef!8m2!3d44.9700122!4d-93.106482"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                        sx={{ textDecoration: 'none', color: 'inherit', transition: '0.2s', '&:hover': { opacity: 0.7 } }}
                                    >
                                        <Box sx={{ p: 1.5, bgcolor: '#E8F5E9', borderRadius: '50%', color: '#78E335' }}><LocationOnIcon /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>St Paul</Typography>
                                            <Typography variant="body1" color="textSecondary">957 Rice St<br />St Paul, MN 55117</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', bgcolor: '#2C3E50', color: 'white' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Stack spacing={3}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <PhoneIcon sx={{ color: '#78E335' }} />
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}> (612) 446-0559</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <EmailIcon sx={{ color: '#78E335' }} />
                                            <Typography variant="body1">support@cmtcwireless.com</Typography>
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
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            freeSolo
                                            forcePopupIcon
                                            options={allModels}
                                            value={deviceModel}
                                            onChange={(_, newValue) => setDeviceModel(newValue)}
                                            onInputChange={(_, newInputValue) => setDeviceModel(newInputValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Device Model"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Autocomplete
                                            freeSolo
                                            forcePopupIcon
                                            options={[
                                                "Repair Service",
                                                "Buy a Phone",
                                                "Unlock any Phone",
                                                "Check Availability",
                                                "Get Instant Quote",
                                                "General Inquiry"
                                            ]}
                                            value={serviceNeeded}
                                            onChange={(_, newValue) => setServiceNeeded(newValue || '')}
                                            onInputChange={(_, newInputValue) => setServiceNeeded(newInputValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Service Needed"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                                                />
                                            )}
                                        />
                                    </Grid>
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
