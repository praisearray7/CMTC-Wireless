import { Box, Paper, Typography, Stack, Button } from '@mui/material';
import StaggerContainer from './animations/StaggerContainer';
import Link from 'next/link';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { colors } from '../theme/colors';

const WhyChoose = () => {
    const primaryGreen = colors.primary;

    const items = [
        {
            icon: <BuildOutlinedIcon sx={{ fontSize: 32, color: primaryGreen }} />,
            title: 'Same-Day Repairs',
            desc: 'We understand how important your device is, which is why most of our repairs are completed within just a few hours, getting you back online quickly.'
        },
        {
            icon: <ThumbUpOutlinedIcon sx={{ fontSize: 32, color: primaryGreen }} />,
            title: 'Certified Technicians',
            desc: 'Our team consists of highly trained and certified experts who have years of experience in handling complex repairs for all major device brands.'
        },
        {
            icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 32, color: primaryGreen }} />,
            title: 'Customer Satisfaction',
            desc: 'We prioritize your satisfaction above all else. Our goal is to provide a seamless repair experience with transparent pricing and excellent service.'
        },
        {
            icon: <CheckCircleOutlineIcon sx={{ fontSize: 32, color: primaryGreen }} />,
            title: 'Quality Parts',
            desc: 'We use only high-quality, premium replacement parts to ensure your device performs just like new and stands the test of time.'
        },
    ];

    return (
        <Paper
            elevation={0}
            sx={{
                bgcolor: '#ededed',
                p: 3,
                borderRadius: 4,
                height: 'fit-content'
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 800, color: colors.primary, mb: 3, textAlign: 'center' }}>
                Why Choose Us
            </Typography>

            <StaggerContainer childSelector=".why-choose-item" delay={0.2}>
                <Stack spacing={3}>
                    {items.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }} className="why-choose-item">
                            <Box sx={{ mt: 0.5 }}>{item.icon}</Box>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#000000', lineHeight: 1.2, mb: 0.5 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.5, color: '#37474f' }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </StaggerContainer>

            <Button
                component={Link}
                href="/about-us"
                variant="contained"
                disableElevation
                sx={{
                    bgcolor: '#fff',
                    color: colors.primary,
                    fontWeight: 700,
                    mt: 2,
                    py: 1.5,
                    px: 4,
                    width: '100%',
                    '&:hover': { bgcolor: '#daf3ddff' }
                }}
            >
                LEARN MORE
            </Button>
        </Paper>
    );
};

export default WhyChoose;
