import { useState } from 'react';
import { Box, Container, Grid, Typography, Rating, Avatar, Pagination } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import googleLogo from '../assets/google-logo.svg';

const GoogleReviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Jean Gray',
            text: '"My phone screen was shattered, and they fixed it in just a few hours. Highly recommend!"',
            title: 'They saved my day!'
        },
        {
            id: 2,
            name: 'Barry Allen',
            text: '"The battery replacement service was quick and easy"',
            title: 'Phone is like new'
        },
        {
            id: 3,
            name: 'Diana Prince',
            text: '"The friendly staff repaired my water-damaged phone perfectly"',
            title: 'Excellent service'
        },
        {
            id: 4,
            name: 'Peter Parker',
            text: '"Great prices and super fast service. My laptop screen looks brand new!"',
            title: 'Amazing quality'
        },
        {
            id: 5,
            name: 'Natasha Romanoff',
            text: '"I thought my data was lost forever, but they managed to recover everything."',
            title: 'Lifesavers!'
        },
        {
            id: 6,
            name: 'Bruce Wayne',
            text: '"Professional, reliable, and efficient. I trust them with all my gadgets."',
            title: 'Top notch repair'
        },
        {
            id: 7,
            name: 'Tony Stark',
            text: '"They fixed my custom tech setup. Impressive knowledge and skill."',
            title: 'Genius level service'
        },
        {
            id: 8,
            name: 'Clark Kent',
            text: '"Honest pricing and transparent service. A rare find these days."',
            title: 'Superb experience'
        },
        {
            id: 9,
            name: 'Wanda Maximoff',
            text: '"My tablet was glitching badly, but they restored it to perfection."',
            title: 'Magic touch'
        },
        {
            id: 10,
            name: 'Steve Rogers',
            text: '"Old school customer service with modern repair techniques. Highly respected."',
            title: 'Reliable & Trustworthy'
        },
        {
            id: 11,
            name: 'Carol Danvers',
            text: '"Fastest turnaround I have ever seen. Back in action in no time."',
            title: 'Higher, further, faster'
        },
        {
            id: 12,
            name: 'T\'Challa',
            text: '"State-of-the-art repair facility. The quality of work is unmatched."',
            title: 'King of repairs'
        },
        {
            id: 13,
            name: 'Scott Lang',
            text: '"Small details matter, and they nailed it. Big thanks!"',
            title: 'Huge help'
        },
        {
            id: 14,
            name: 'Stephen Strange',
            text: '"They diagnosed a complex motherboard issue that others missed."',
            title: 'Sorcerer supreme of repairs'
        },
        {
            id: 15,
            name: 'Thor Odinson',
            text: '"My device was smashed, but they brought it back to life! Another!"',
            title: 'Worthy repairs'
        },
        {
            id: 16,
            name: 'Kara Zor-El',
            text: '"Friendly atmosphere and super helpful staff. Will definitely come back."',
            title: 'Super service'
        },
        {
            id: 17,
            name: 'Matt Murdock',
            text: '"I rely heavily on my devices for accessibility. They understood and delivered."',
            title: 'See the difference'
        },
        {
            id: 18,
            name: 'Logan',
            text: '"Tough device, but they fixed it. Good work, Bub."',
            title: 'Solid work'
        }
    ];

    const [page, setPage] = useState(1);
    const visibleItems = 6;
    const step = 6; // Set step equal to visibleItems for unique pages

    const totalPages = Math.ceil(reviews.length / visibleItems);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex = (page - 1) * step;
    const paginatedReviews = reviews.slice(startIndex, startIndex + visibleItems);

    return (
        <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mb: 2 }}>
                        Over 500 Positive Google Reviews
                    </Typography>
                </Box>

                <Box sx={{ minHeight: 400, position: 'relative', overflow: 'hidden' }}>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        sx={{
                            mb: 6,
                            // Simple fade-in animation on page change
                            animation: 'fadeIn 0.5s ease-in-out',
                            '@keyframes fadeIn': {
                                '0%': { opacity: 0, transform: 'translateX(20px)' },
                                '100%': { opacity: 1, transform: 'translateX(0)' }
                            }
                        }}
                        key={page} // Key forces re-render to trigger animation
                    >
                        {paginatedReviews.map((review) => (
                            <Grid size={{ xs: 12, md: 4 }} key={review.id}>
                                <Box sx={{
                                    textAlign: 'center',
                                    px: 3,
                                    py: 4,
                                    borderRadius: 4,
                                    bgcolor: '#fff',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}>
                                    <Avatar
                                        src={`https://i.pravatar.cc/150?u=${review.name}`}
                                        sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0a1929', mb: 1 }}>
                                        {review.name}
                                    </Typography>

                                    <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#FAAF00' }} />

                                    <Typography variant="body1" sx={{ color: '#37474F', mb: 3, minHeight: 60, lineHeight: 1.6, fontSize: '0.95rem' }}>
                                        {review.text}
                                        <Typography component="span" sx={{ color: '#1976d2', cursor: 'pointer', ml: 0.5, fontSize: 'inherit' }}>
                                            See More
                                        </Typography>
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mt: 'auto' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                            <ThumbUpAltOutlinedIcon sx={{ fontSize: 20, color: '#78909c', mr: 0.5 }} />
                                            <Typography variant="caption" sx={{ color: '#78909c', fontWeight: 500 }}>0</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ChatBubbleOutlineIcon sx={{ fontSize: 20, color: '#78909c', mr: 0.5 }} />
                                            <Typography variant="caption" sx={{ color: '#78909c', fontWeight: 500 }}>0</Typography>
                                        </Box>

                                        <Box sx={{ flexGrow: 1 }} />

                                        <Box component="img" src={googleLogo} alt="Google" sx={{ width: 24, height: 24 }} />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default GoogleReviews;
