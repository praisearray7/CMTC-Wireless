import { Paper, Box, Typography } from '@mui/material';
import { colors } from '../theme/colors';

interface RepairCardProps {
    title: string;
    description: React.ReactNode;
    image?: string;
    icon?: any;
    priceContent?: React.ReactNode;
    children?: React.ReactNode;
    loading?: boolean;
}

const RepairCard = ({ title, description, image, icon: Icon, priceContent, children }: RepairCardProps) => {
    return (
        <Paper elevation={0} sx={{
            p: 3,
            height: '100%',
            bgcolor: '#fff',
            border: '1px solid #eee',
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 30px rgba(22, 101, 52, 0.1)',
                borderColor: colors.primary
            }
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {image ? (
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            width: 120,
                            height: 90,
                            objectFit: 'cover',
                            borderRadius: 2,
                            border: '1px solid #f0f0f0',
                            flexShrink: 0
                        }}
                    />
                ) : (
                    <Box sx={{
                        width: 60, height: 60,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: 2, bgcolor: '#f0fdf4', color: colors.primary,
                        flexShrink: 0
                    }}>
                        {Icon && <Icon size={32} />}
                    </Box>
                )}

                <Box sx={{ ml: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5, lineHeight: 1.2 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.5 }}>
                        {description}
                    </Typography>
                    {priceContent && (
                        <Box sx={{ mt: 0.5 }}>
                            {priceContent}
                        </Box>
                    )}
                </Box>
            </Box>
            {/* Slot for extra content like full-width buttons */}
            {children && (
                <Box sx={{ mt: 2 }}>
                    {children}
                </Box>
            )}
        </Paper>
    );
};

export default RepairCard;
