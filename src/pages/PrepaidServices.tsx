
import { Box, Container, Typography } from '@mui/material';

const PrepaidServices = () => {
    return (
        <Box sx={{ py: 10, textAlign: 'center', minHeight: '60vh' }}>
            <Container>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Prepaid Services</Typography>
                <Typography variant="h6" color="textSecondary">Coming Soon</Typography>
            </Container>
        </Box>
    );
};

export default PrepaidServices;
