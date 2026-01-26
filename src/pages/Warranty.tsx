
import { Box, Container, Typography, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import GppGoodIcon from '@mui/icons-material/GppGood';
import WarrantyIcon from '../components/WarrantyIcon';
import { colors } from '../theme/colors';

import SEO from '../components/SEO';

const Warranty = () => {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <SEO
                title="Warranty Promise"
                description="We stand behind our work with a one-year warranty on all repairs and certified pre-owned devices. Peace of mind guaranteed."
            />
            {/* Hero Section */}
            <Box sx={{ bgcolor: '#000000', color: 'white', py: 10, textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <WarrantyIcon sx={{ fontSize: 80, mb: 2 }} />
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                        <span style={{ color: 'white' }}>Our </span>
                        <span style={{ color: colors.primary }}>Warranty</span>
                        <span style={{ color: colors.primaryBlue }}> Promise</span>
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#B0BEC5', maxWidth: '800px', mx: 'auto' }}>
                        We stand behind our work. Every repair and certified pre-owned device is backed by our rock-solid One-Year Warranty.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    {/* Main Content */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 3 }}>
                                One-Year Warranty
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#000000', mb: 3, lineHeight: 1.8 }}>
                                At CMTC Wireless, we use only the highest quality parts for our repairs. We are so confident in our craftsmanship that we offer a comprehensive <strong>One-Year Warranty</strong> on all repairs and certified pre-owned devices.
                            </Typography>
                            <Paper sx={{ p: 3, bgcolor: colors.white, borderRadius: 2, borderLeft: `4px solid ${colors.primary}` }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center' }}>
                                    <GppGoodIcon sx={{ color: colors.primary, mr: 1 }} /> What is covered?
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><VerifiedUserIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Defects in the parts we replaced." secondary="If the screen glitches or the battery fails due to a manufacturing defect, we fix it for free." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><VerifiedUserIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Workmanship errors." secondary="If there is an issue related to how the device was reassembled, we will make it right." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><VerifiedUserIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Device defects (for Pre-Owned devices)." secondary="Any functional issue with a device bought from us is covered." />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Box>

                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 3 }}>
                                Exclusions
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#000000', mb: 3 }}>
                                While we cover a lot, our warranty does not cover issues caused by accidental damage after the repair.
                            </Typography>

                            <Accordion sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                        <ErrorOutlineIcon sx={{ color: '#EF5350', mr: 1 }} /> Physical Damage
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="textSecondary">
                                        Cracked screens, dented frames, or broken glass caused by drops or impacts are not covered. If you break the device again, the warranty is void for that specific part.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                        <ErrorOutlineIcon sx={{ color: '#EF5350', mr: 1 }} /> Liquid Damage
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="textSecondary">
                                        Our warranty does not apply to devices that have been exposed to liquid. Liquid damage is progressive and can cause unpredictable failures that are unrelated to the original repair.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                        <ErrorOutlineIcon sx={{ color: '#EF5350', mr: 1 }} /> Software Issues
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="textSecondary">
                                        We cannot guarantee software. Viruses, third-party apps, or OS updates that cause issues are not covered under our hardware warranty.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 3 }}>
                                Return Policy
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#000000', mb: 3 }}>
                                We want you to love your device.
                            </Typography>
                            <Paper sx={{ p: 3, bgcolor: '#E3F2FD', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center' }}>
                                    <AssignmentReturnIcon sx={{ color: '#1976D2', mr: 1 }} /> 30-Day Returns
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#000000' }}>
                                    You can return any Certified Pre-Owned device within <strong>30 days</strong> for any reason, as long as it is in the same condition as when it was sold. Broken or damaged devices are not eligible for return unless the damage is repaired at the cost of the customer. There are no restocking fees.
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Sidebar */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 4, borderRadius: 4, bgcolor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'sticky', top: 150 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Need to file a claim?</Typography>
                            <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
                                If you are experiencing issues with a repair or device, please visit us immediately. We will inspect it and make it right.
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Important:</Typography>
                            <List dense>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorOutlineIcon fontSize="small" color="warning" /></ListItemIcon>
                                    <ListItemText primary="Do not attempt to open the device yourself." />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorOutlineIcon fontSize="small" color="warning" /></ListItemIcon>
                                    <ListItemText primary="Bring your original receipt if possible." />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Warranty;
