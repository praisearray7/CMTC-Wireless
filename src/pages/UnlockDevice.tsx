
import { Box, Container, Grid, Typography, Card, CardContent, TextField, Button, MenuItem, Stepper, Step, StepLabel } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { colors } from '../theme/colors';

import SEO from '../components/SEO';

const UnlockDevice = () => {
    return (
        <Box sx={{ minHeight: '80vh', py: 10 }}>
            <SEO
                title="Unlock Your Device"
                description="Unlock your phone for any carrier. Fast, secure, and permanent unlocking for iPhone, Samsung, and more."
            />
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <LockOpenIcon sx={{ fontSize: 60, color: colors.primary, mb: 2 }} />
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Unlock Your Device</Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', fontWeight: 400 }}>
                        Switch carriers freely. Fast, secure, and permanent unlocking for most major brands.
                    </Typography>
                </Box>

                <Card sx={{ borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    <Box sx={{ bgcolor: '#f9f9f9', p: 3 }}>
                        <Stepper activeStep={0} alternativeLabel>
                            {['Device Info', 'Contact Details', 'Get Quote'].map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField select label="Select Brand" fullWidth variant="outlined">
                                    {['Apple', 'Samsung', 'Google', 'Motorola', 'LG'].map((option) => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField label="Model (e.g. iPhone 14)" fullWidth variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="Current Carrier (e.g. AT&T)" fullWidth variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="IMEI Number (Dial *#06#)" fullWidth variant="outlined" helperText="We need this to check eligibility." />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <Button variant="contained" color="primary" size="large" fullWidth sx={{ py: 1.5 }}>
                                    Check Eligibility & Price
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default UnlockDevice;
