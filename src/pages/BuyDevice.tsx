
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip, Stack, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { imagePaths, getImagePath } from '../data/imagePaths';
import { contactInfo } from '../data/contactInfo';
import GoogleReviews from '../components/GoogleReviews';
import FAQ from '../components/FAQ';

const BuyDevice = () => {
    const navigate = useNavigate();
    // Mock inventory
    const inventory = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            condition: 'Like New',
            price: 'Ask for Price',
            color: 'Natural Titanium',
            image: 'https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg?_gl=1*155wdu3*_ga*ODU3ODg3MjU0LjE3Njg5ODU3OTE.*_ga_8JE65Q40S6*czE3NjkwMDY3NDkkbzQkZzEkdDE3NjkwMDY3NjIkajQ3JGwwJGgw'
        },
        {
            id: 2,
            name: 'Samsung S24 Ultra',
            condition: 'Excellent',
            price: 'Ask for Price',
            color: 'Titanium Black',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 3,
            name: 'iPhone 14',
            condition: 'Good',
            price: 'Ask for Price',
            color: 'Midnight',
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 4,
            name: 'iPad Air 5',
            condition: 'New Open Box',
            price: 'Ask for Price',
            color: 'Space Gray',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop'
        },
    ];

    return (
        <Box sx={{ minHeight: '100vh', pt: 8, pb: 0 }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Certified Pre-Owned Devices</Typography>
                    <Typography variant="h6" sx={{ color: '#546E7A', fontWeight: 400, maxWidth: 700, mx: 'auto' }}>
                        Discover our selection of certified pre-owned phones. All meticulously inspected and restored to like-new condition. Get a reliable phone at a great price!
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Catalog Section */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#2C3E50' }}>Latest Arrivals</Typography>
                        <Grid container spacing={3}>
                            {inventory.map((item) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                                    <Card sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } }}>
                                        <CardMedia
                                            component="img"
                                            height="220"
                                            image={item.image}
                                            alt={item.name}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <Stack direction="row" justifyContent="space-between" alignItems="start" mb={1}>
                                                <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.name}</Typography>
                                                <Chip label={item.condition} size="small" color="primary" sx={{ fontWeight: 600 }} />
                                            </Stack>
                                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>Color: {item.color}</Typography>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                color="secondary"
                                                sx={{ borderRadius: 2 }}
                                                onClick={() => navigate('/contact-us', { state: { serviceNeeded: 'Check Availability', deviceModel: item.name } })}
                                            >
                                                Check Availability
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Inquiry Sidebar */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{
                            position: { xs: 'static', md: 'sticky' },
                            top: { md: 170 },
                            borderRadius: 3,
                            p: 2
                        }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#2C3E50' }}>Looking for something specific?</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                                    We have new inventory arriving daily. Let us know what you want and we'll find it for you.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    sx={{ mb: 2 }}
                                    href={contactInfo.phone.link}
                                >
                                    Call {contactInfo.phone.display}
                                </Button>
                                <Button variant="outlined" color="secondary" fullWidth size="large">
                                    Request a Device
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                {/* Value Props Section */}
                <Box sx={{ mt: 12, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#2C3E50', mb: 3 }}>
                        We Offer a Variety of Devices
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#546E7A', mb: 8, maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
                        Let us know which device you are looking for and we will have one of our device consultants reach out with some of our current deals!
                    </Typography>

                    <Grid container spacing={4}>
                        {[
                            {
                                icon: <FactCheckOutlinedIcon sx={{ fontSize: 40, color: '#78E335' }} />,
                                title: 'Fully Inspected & Refurbished',
                                desc: 'Checked for hardware and software issues and refurbished to factory standard functionality for a device that feels new.'
                            },
                            {
                                icon: <SavingsOutlinedIcon sx={{ fontSize: 40, color: '#78E335' }} />,
                                title: 'Higher Savings',
                                desc: 'Save up to 30% off retail price when you buy a new device. We have unbeatable prices and a wide selection.'
                            },
                            {
                                icon: <ThumbUpOutlinedIcon sx={{ fontSize: 40, color: '#78E335' }} />,
                                title: 'Top Customer Service',
                                desc: 'Let us know which device you are looking for and we will have one of our device consultants reach out with some of our current deals!'
                            }
                        ].map((item, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: 4,
                                        p: 2,
                                        textAlign: 'left'
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#2C3E50' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* BBB Accreditation Section */}
                <Box sx={{ mt: 6, mb: 12, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#2C3E50' }}>
                        BBB Accreditation
                    </Typography>
                    <Box
                        component="img"
                        src={getImagePath(imagePaths.bbbAccreditation)}
                        alt="BBB Accredited Business"
                        sx={{ maxWidth: '100%', height: 'auto', maxHeight: 120 }}
                    />
                </Box>
            </Container>

            {/* Google Reviews and FAQ */}
            <GoogleReviews />
            <FAQ category="buy" />
        </Box>
    );
};

export default BuyDevice;
