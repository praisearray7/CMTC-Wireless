import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Link from 'next/link';
import { getImagePath } from '../data/imagePaths';
import { colors } from '../theme/colors';
import StaggerContainer from './animations/StaggerContainer';

const items = [
    { title: 'iPad Repair', image: 'https://www.gophermods.com/wp-content/uploads/2020/04/iPad-Repair-by-Gophermods-200x200-1.jpg', link: '/ipad-repair' },
    { title: 'MacBook Repair', image: 'https://www.gophermods.com/wp-content/uploads/2018/03/MacBook-Repair.jpg', link: '/macbook-repair' },
    { title: 'Laptop Repair', image: 'https://www.gophermods.com/wp-content/uploads/2019/02/Chromebook-Repair.jpg', link: '/laptop-repair' },
    { title: 'iPhone Repair', image: 'https://www.gophermods.com/wp-content/uploads/2025/06/iPhone-16-Repairs-Minneapolis.jpg', link: '/iphone-repair' },
    { title: 'Computer Repair', image: 'https://www.gophermods.com/wp-content/uploads/2014/11/mac-200x200.jpg', link: '/computer-repair' },
    { title: 'Cell Phone Repair', image: 'https://www.gophermods.com/wp-content/uploads/2025/06/Google-Pixel-Repairs-Minneapolis.jpg', link: '/cell-phone-repair' },
    { title: 'Samsung Repair', image: 'https://www.gophermods.com/wp-content/uploads/2021/01/Galaxy-Note-20.jpg', link: '/contact-us?deviceModel=Samsung' },
    { title: 'Smart Watch Repair', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-hermes-ultra-202509_GEO_US?wid=680&hei=528&fmt=jpeg&qlt=90&.v=Ly93VWF6a1dGOWJLL3RMM0s0eGZ6bGptdm4xZHhxZWZzUlhoOU9Da0hNNVU4aHdGN0xlWGtoZjR6dnFUWE9VVTV0VzZXemQ1ZkRzK0p5ZFBxZERkQ3o2K3c3eDN1QlVKV09nQzhyNmV5TTNjeFVjd0E0NEk3ZEplNUNxd0pRazY', link: '/contact-us?deviceModel=Smart+Watch' },
];

const ServiceGridBanner = () => {
    return (
        <Box sx={{ mb: 10 }}>
            {/* Red Banner Section */}
            <Box
                sx={{
                    bgcolor: colors.primary, // Bright red as requested
                    py: 8,
                    position: 'relative',
                    textAlign: 'center',
                    mb: 8 // Space for the triangle
                }}
            >
                <Container maxWidth="xl">
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#fff',
                            fontWeight: 400,
                            fontFamily: 'serif',
                            maxWidth: 'md',
                            mx: 'auto'
                        }}
                    >
                        We are a depot repair and lifecycle partner for iPhone, iPad, Mac, Chromebooks, and Windows laptops.
                    </Typography>
                </Container>

                {/* Triangle Pointer */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '25px solid transparent',
                        borderRight: '25px solid transparent',
                        borderTop: `25px solid ${colors.primary}`,
                    }}
                />
            </Box>

            {/* Grid Section */}
            <Container maxWidth="xl">
                <StaggerContainer childSelector=".service-grid-item">
                    <Grid container spacing={4} justifyContent="center">
                        {items.map((item) => (
                            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={item.title} className="service-grid-item">
                                <Paper
                                    elevation={0}
                                    component={Link}
                                    href={item.link}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        bgcolor: 'transparent',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)'
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={getImagePath(item.image)}
                                        alt={item.title}
                                        sx={{
                                            width: '100%',
                                            maxWidth: 180,
                                            height: 'auto',
                                            aspectRatio: '1/1',
                                            objectFit: 'contain',
                                            mb: 2
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#000000',
                                            fontWeight: 400,
                                            fontSize: '1rem',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </StaggerContainer>
            </Container>
        </Box>
    );
};

export default ServiceGridBanner;
