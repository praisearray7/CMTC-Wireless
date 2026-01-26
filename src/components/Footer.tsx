
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
import { colors } from '../theme/colors';

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
                            <Typography variant="h4" component="div" sx={{ fontWeight: 900, mb: 2 }}>
                                <span style={{ color: '#ffffff' }}>CMTC </span>
                                <span style={{ color: colors.primary }}>WIRE</span>
                                <span style={{ color: colors.primaryBlue }}>LESS</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#e5e7eb', lineHeight: 1.7, maxWidth: '90%' }}>
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.03)',
                                            color: '#f3f4f6',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: colors.primaryLight,
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
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: colors.white }}>
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
                                        color: '#f3f4f6',
                                        transition: 'all 0.2s',
                                        display: 'inline-block',
                                        '&:hover': {
                                            color: colors.primaryLight,
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
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: colors.white }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2.5}>
                            <Box>
                                <Typography variant="caption" sx={{ color: colors.primaryLight, fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    PHONE & TEXT
                                </Typography>
                                <MuiLink href={contactInfo.phone.link} underline="hover" sx={{ display: 'block', color: '#f3f4f6', '&:hover': { color: colors.primaryLight } }}>
                                    Call: {contactInfo.phone.display}
                                </MuiLink>
                                <MuiLink href={contactInfo.text.link} underline="hover" sx={{ display: 'block', color: '#f3f4f6', '&:hover': { color: colors.primaryLight } }}>
                                    Text: {contactInfo.text.display}
                                </MuiLink>
                            </Box>

                            <Box>
                                <Typography variant="caption" sx={{ color: colors.primaryLight, fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    EMAIL
                                </Typography>
                                <MuiLink href={contactInfo.email.link} underline="hover" sx={{ color: '#f3f4f6', '&:hover': { color: colors.primaryLight } }}>
                                    {contactInfo.email.display}
                                </MuiLink>
                            </Box>

                            <Box>
                                <Typography variant="caption" sx={{ color: colors.primaryLight, fontWeight: 700, letterSpacing: '1px', mb: 0.5, display: 'block' }}>
                                    HOURS
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#f3f4f6', whiteSpace: 'pre-line' }}>
                                    {contactInfo.hours.weekday}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#f3f4f6', whiteSpace: 'pre-line' }}>
                                    {contactInfo.hours.weekend}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Column 4: Locate Us */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.5px', color: colors.white }}>
                            Locate Us
                        </Typography>
                        <Stack spacing={2.5}>
                            <Box
                                sx={{
                                    overflow: 'hidden',
                                    borderRadius: 3,
                                    mb: 2.5,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    height: 180,
                                    width: '100%',
                                    position: 'relative'
                                }}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="CMTC Wireless Locations"
                                    style={{ border: 0, width: '100%', height: '100%' }}
                                    src="https://maps.google.com/maps?q=CMTC+Wireless+Minneapolis+Saint+Paul&z=11&output=embed"
                                    allowFullScreen
                                ></iframe>
                            </Box>

                            <Stack direction="row" spacing={12}>
                                {/* Minneapolis */}
                                <Stack direction="row" spacing={1} alignItems="flex-start">
                                    <LocationOnIcon sx={{ color: colors.primaryLight, fontSize: 20, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>Minneapolis</Typography>
                                        <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 0.5 }}>920 E Lake St</Typography>
                                        <MuiLink
                                            href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Minneapolis+MN/@44.9486757,-93.2607411,17z"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: colors.primaryLight, fontSize: '0.75rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, whiteSpace: 'nowrap' }}
                                        >
                                            Get Directions
                                        </MuiLink>
                                    </Box>
                                </Stack>

                                {/* St Paul */}
                                <Stack direction="row" spacing={1} alignItems="flex-start">
                                    <LocationOnIcon sx={{ color: colors.primaryLight, fontSize: 20, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>St Paul</Typography>
                                        <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 0.5 }}>957 Rice St</Typography>
                                        <MuiLink
                                            href="https://www.google.com/maps/place/CMTC+Wireless+-+24%2F7+Saint+Paul/@44.9700122,-93.106482,17z"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: colors.primaryLight, fontSize: '0.75rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, whiteSpace: 'nowrap' }}
                                        >
                                            Get Directions
                                        </MuiLink>
                                    </Box>
                                </Stack>
                            </Stack>
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
                            target="_blank"
                            rel="noopener noreferrer"
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
