import { Box, Container, Grid, Typography, Rating, Avatar } from '@mui/material';

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
        }
    ];

    return (
        <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mb: 2 }}>
                        Over 500 Positive Google Reviews
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {reviews.map((review) => (
                        <Grid size={{ xs: 12, md: 4 }} key={review.id}>
                            <Box sx={{ textAlign: 'center', px: 2 }}>
                                <Avatar
                                    src={`https://i.pravatar.cc/150?u=${review.name}`}
                                    sx={{ width: 80, height: 80, mx: 'auto', mb: 3, border: '4px solid #fff', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0a1929', mb: 1 }}>
                                    {review.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#546E7A', mb: 2, fontStyle: 'italic', minHeight: 80 }}>
                                    {review.text}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0a1929', mb: 1 }}>
                                    - {review.name}
                                </Typography>
                                <Rating value={5} readOnly size="small" />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default GoogleReviews;
