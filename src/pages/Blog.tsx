
import { Box, Container, Typography } from '@mui/material';

const Blog = () => {
    return (
        <Box sx={{ py: 10, textAlign: 'center', minHeight: '60vh' }}>
            <Container>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Blog</Typography>
                <Typography variant="h6" color="textSecondary">Coming Soon</Typography>
            </Container>
        </Box>
    );
};

export default Blog;
