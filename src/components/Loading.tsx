import { Box, CircularProgress, Typography } from '@mui/material';
import { colors } from '../theme/colors';

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
            <CircularProgress sx={{ color: colors.primary }} size={50} />
            <Typography variant="body1" color="textSecondary">
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;
