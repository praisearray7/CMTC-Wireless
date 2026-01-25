import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
    return (
        <Box sx={{
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
        }}>
            <CircularProgress sx={{ color: '#78E335' }} size={50} />
            <Typography variant="body1" color="textSecondary">
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;
