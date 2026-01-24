
import { Box, Container, Grid, Typography, Link as MuiLink, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { navLinks } from '../data/repairData';
import { contactInfo } from '../data/contactInfo';

import { Link as RouterLink } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';

const Footer = () => {
    return (
        <Box sx={{
            background: 'linear-gradient(180deg, #111827 0%, #1F2937 100%)', // Rich dark gradient
            color: '#e5e7eb',
            pt: 12,
            pb: 6,
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    {/* Column 1: Logo & Info */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Stack spacing={3}>
                            <Typography variant="h4" component="div" sx={{ fontWeight: 900, letterSpacing: '-0.5px' }}>
                                CMTC<span style={{ color: '#78E335' }}>WIRELESS</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#9ca3af', lineHeight: 1.7, maxWidth: '90%' }}>
                                Trusted by thousands for fast, reliable device repairs. We're here to keep you connected with expert service and quality parts.
                            </Typography>
                            <Stack direction="row" spacing={1.5}>
                                {[
                                    { icon: <FacebookIcon />, href: "https://www.facebook.com/MetroBrooklynParkMN10222653/", label: "Facebook" },
                                    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
                                    { icon: <InstagramIcon />, href: "#", label: "Instagram" }
                                ].map((social) => (
                                    <IconButton
                                        key={social.label}
                                        color="inherit"
                                        aria-label={social.label}
                                        href={social.href}
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.03)',
                                            color: '#d1d5db',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: '#78E335',
                                                color: '#000',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Column 2: Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: '#fff' }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1.5}>
                            {navLinks.slice(0, 6).map(link => (
                                <MuiLink
                                    key={link.title}
                                    component={RouterLink}
                                    to={link.path}
                                    underline="none"
                                    sx={{
                                        fontSize: '0.95rem',
                                        color: '#9ca3af',
                                        transition: 'all 0.2s',
                                        display: 'inline-block',
                                        '&:hover': {
                                            color: '#78E335',
                                            transform: 'translateX(4px)'
                                        }
                                    }}
                                >
                                    {link.title}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Column 3: Contact */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: '#fff' }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2.5}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#78E335', fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    PHONE & TEXT
                                </Typography>
                                <MuiLink href={contactInfo.phone.link} underline="hover" sx={{ display: 'block', color: '#d1d5db', '&:hover': { color: '#78E335' } }}>
                                    Call: {contactInfo.phone.display}
                                </MuiLink>
                                <MuiLink href={contactInfo.text.link} underline="hover" sx={{ display: 'block', color: '#d1d5db', '&:hover': { color: '#78E335' } }}>
                                    Text: {contactInfo.text.display}
                                </MuiLink>
                            </Box>

                            <Box>
                                <Typography variant="caption" sx={{ color: '#78E335', fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    EMAIL
                                </Typography>
                                <MuiLink href={contactInfo.email.link} underline="hover" sx={{ color: '#d1d5db', '&:hover': { color: '#78E335' } }}>
                                    {contactInfo.email.display}
                                </MuiLink>
                            </Box>

                            <Box>
                                <Typography variant="caption" sx={{ color: '#78E335', fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    HOURS
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#d1d5db', whiteSpace: 'pre-line' }}>
                                    {contactInfo.hours.weekday}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#d1d5db', whiteSpace: 'pre-line' }}>
                                    {contactInfo.hours.weekend}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Column 4: Locate Us */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: '#fff' }}>
                            Locate Us
                        </Typography>
                        <Stack spacing={2.5}>
                            {/* Minneapolis */}
                            <Box
                                component="a"
                                href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Minneapolis+MN/@44.9486757,-93.2607411,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x87f6281268b5bf95:0x9b46b4b64d7202cd!8m2!3d44.9486757!4d-93.2607411"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    display: 'block',
                                    group: 'hover'
                                }}
                            >
                                <Box sx={{ overflow: 'hidden', borderRadius: 3, mb: 1.5, border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Box
                                        component="img"
                                        src="/map_minneapolis.png"
                                        alt="Minneapolis Location"
                                        sx={{
                                            width: '100%',
                                            height: 120,
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                            '&:hover': { transform: 'scale(1.05)' }
                                        }}
                                    />
                                </Box>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <LocationOnIcon sx={{ color: '#78E335', fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>Minneapolis</Typography>
                                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>920 E Lake St</Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            {/* St Paul */}
                            <Box
                                component="a"
                                href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Saint+Paul/@44.9700122,-93.106482,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x52b32bb295c62feb:0xb4e923ed2e4799ef!8m2!3d44.9700122!4d-93.106482"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    display: 'block'
                                }}
                            >
                                <Box sx={{ overflow: 'hidden', borderRadius: 3, mb: 1.5, border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Box
                                        component="img"
                                        src="/map_stpaul.png"
                                        alt="St Paul Location"
                                        sx={{
                                            width: '100%',
                                            height: 120,
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                            '&:hover': { transform: 'scale(1.05)' }
                                        }}
                                    />
                                </Box>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <LocationOnIcon sx={{ color: '#78E335', fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>St Paul</Typography>
                                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>957 Rice St</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    mt: 8,
                    pt: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Box>
                        <IconButton
                            aria-label="whatsapp"
                            href="https://wa.me/16123009007"
                            sx={{
                                bgcolor: 'rgba(35, 200, 73, 0.1)',
                                color: '#23c849',
                                '&:hover': { bgcolor: 'rgba(35, 200, 73, 0.2)' }
                            }}
                        >
                            <WhatsAppIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#6b7280', textAlign: 'center' }}>
                        © {new Date().getFullYear()} CMTC Wireless. All Rights Reserved.
                    </Typography>

                    <Box>
                        <IconButton
                            aria-label="phone"
                            href="tel:+16123009007"
                            sx={{
                                bgcolor: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.2)' }
                            }}
                        >
                            <PhoneIcon size={32} />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
