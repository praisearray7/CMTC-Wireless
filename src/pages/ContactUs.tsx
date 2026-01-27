'use client';

import { Suspense } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Stack, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import { contactInfo } from '../data/contactInfo';
import GoogleReviews from '../components/GoogleReviews';
import SEO from '../components/SEO';
import { colors } from '../theme/colors';
import FadeIn from '../components/animations/FadeIn';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <SEO
                title="Contact Us"
                description="Get a free quote for your device repair. Contact CMTC Wireless in Minneapolis or St. Paul today for fast and expert service."
            />
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <FadeIn delay={0.1}>
                        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                            <span style={{ color: '#000000' }}>Get</span>{' '}
                            <span style={{ color: colors.primary }}>in</span>{' '}
                            <span style={{ color: colors.primaryBlue }}>Touch</span>
                        </Typography>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Typography variant="h6" sx={{ color: '#000000', fontWeight: 400 }}>
                            Have a question or need a quote? We're here to help 24/7.
                        </Typography>
                    </FadeIn>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Info Side */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <FadeIn direction="right" delay={0.2}>
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
                        </FadeIn>
                    </Grid>

                    {/* Contact Form Side */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <FadeIn direction="left" delay={0.4}>
                            <Suspense fallback={
                                <Card sx={{ borderRadius: 4, height: { xs: 600, md: 750 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CircularProgress />
                                </Card>
                            }>
                                <ContactForm />
                            </Suspense>
                        </FadeIn>
                    </Grid>
                </Grid>
            </Container>

            <GoogleReviews />
        </Box>
    );
};

export default ContactUs;
