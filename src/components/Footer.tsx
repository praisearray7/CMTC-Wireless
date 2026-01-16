
import { Box, Container, Grid, Typography, Link as MuiLink, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { navLinks } from '../data/repairData';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1a252f', color: 'white', pt: 10, pb: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={8}>
                    {/* Column 1: Logo & Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h4" component="div" sx={{ fontWeight: 900, mb: 3 }}>
                            CMTC<span style={{ color: '#78E335' }}>WIRELESS</span>
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#90A4AE', mb: 3, lineHeight: 1.8 }}>
                            Trusted by thousands for fast, reliable device repairs. We're here to keep you connected with expert service and quality parts.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton color="inherit" aria-label="facebook" href="https://www.facebook.com/MetroBrooklynParkMN10222653/" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><FacebookIcon /></IconButton>
                            <IconButton color="inherit" aria-label="twitter" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><TwitterIcon /></IconButton>
                            <IconButton color="inherit" aria-label="instagram"  sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><InstagramIcon /></IconButton>
                        </Stack>
                    </Grid>

                    {/* Column 2: Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, letterSpacing: '0.5px' }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={2}>
                            {navLinks.slice(0, 5).map(link => (
                                <MuiLink key={link.title} href={link.path} underline="hover" color="inherit" sx={{ fontSize: '1rem', color: '#B0BEC5', '&:hover': { color: '#78E335' } }}>
                                    {link.title}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Column 3: Contact */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, letterSpacing: '0.5px' }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#78E335', fontWeight: 600, mb: 0.5 }}>PHONE</Typography>
                                <Typography variant="body1" sx={{ color: '#B0BEC5' }}>(612) 446-0559</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#78E335', fontWeight: 600, mb: 0.5 }}>EMAIL</Typography>
                                <Typography variant="body1" sx={{ color: '#B0BEC5' }}>support@cmtcwireless.com</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#78E335', fontWeight: 600, mb: 0.5 }}>HOURS</Typography>
                                <Typography variant="body1" sx={{ color: '#B0BEC5' }}>Mon-Fri: 9am - 7pm</Typography>
                                <Typography variant="body1" sx={{ color: '#B0BEC5' }}>Sat: 10am - 5pm</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid #2C3E50', mt: 8, pt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#546E7A' }}>
                        © {new Date().getFullYear()} CMTC Wireless. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
