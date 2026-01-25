import { Box, Container, Grid, Typography, Card, CardContent, Rating, Avatar, Stack } from '@mui/material';
import SEO from '../components/SEO';

const Reviews = () => {
    const reviews = [
        { id: 1, name: 'Sarah J.', rating: 5, text: 'Absolutely amazing service! Fixed my shattered iPhone screen in 20 minutes. Looks brand new.', date: '2 days ago' },
        { id: 2, name: 'Mike T.', rating: 5, text: 'Honest folks. Told me my charging port just needed cleaning instead of replacing it. Saved me huge money.', date: '1 week ago' },
        { id: 3, name: 'Emily R.', rating: 5, text: 'Best prices in Minneapolis. I called 3 other places and CMTC beat them all. Plus the warranty gives me peace of mind.', date: '2 weeks ago' },
        { id: 4, name: 'David B.', rating: 4, text: 'Great service, just a bit busy when I went in. Worth the wait though for the quality work.', date: '1 month ago' },
        { id: 5, name: 'Jessica L.', rating: 5, text: 'Unlocked my Samsung phone so I could travel internationally. Super fast process.', date: '1 month ago' },
        { id: 6, name: 'Chris P.', rating: 5, text: 'My iPad wouldn\'t turn on. They diagnosed a board issue and fixed it. Apple told me to buy a new one!', date: '2 months ago' },
    ];

    return (
        <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', py: 10 }}>
            <SEO
                title="Customer Reviews"
                description="Read what our happy customers have to say about our iPhone repair, computer repair, and tablet repair services."
            />
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#2C3E50', mb: 2 }}>Customer Stories</Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={2}>
                        <Typography variant="h3" sx={{ fontWeight: 800, color: '#2C3E50' }}>4.9</Typography>
                        <Stack>
                            <Rating value={5} readOnly precision={0.5} size="large" />
                            <Typography variant="caption" color="textSecondary">Based on 1,200+ reviews</Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Grid container spacing={4}>
                    {reviews.map((review) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={review.id}>
                            <Card sx={{ height: '100%', borderRadius: 4, transform: 'translateZ(0)', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                                        <Avatar sx={{ bgcolor: '#78E335', color: '#003300', fontWeight: 700 }}>{review.name[0]}</Avatar>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={700}>{review.name}</Typography>
                                            <Typography variant="caption" color="textSecondary">{review.date}</Typography>
                                        </Box>
                                    </Stack>
                                    <Rating value={review.rating} readOnly size="small" sx={{ mb: 2 }} />
                                    <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                                        "{review.text}"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;
