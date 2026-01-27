import { useState, useRef } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../theme/colors';

// Import assets
import logicBoardBg from '../assets/logic_board_thumb.jpg';
import pixelWatch from '../assets/GooglePixelWatch.png';
import iphoneFloating from '../assets/iphone_floating.png';
import { repairServices } from '../data/repairData';

interface LandingIntroProps {
    onComplete: () => void;
}

const LandingIntro = ({ onComplete }: LandingIntroProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isExiting, setIsExiting] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial setup
        tl.set('.intro-element', { y: 30, opacity: 0 });
        tl.set('.floating-element', { opacity: 0, scale: 0.8 });

        // Animation in
        tl.to('.intro-element', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        })
            .to('.floating-element', {
                opacity: 0.4, // Lower opacity for subtle background effect
                scale: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: 'elastic.out(1, 0.7)'
            });

        // Marquee animation
        const marqueeTrack = containerRef.current?.querySelector('.marquee-track');
        if (marqueeTrack) {
            // Clone width calculation is approximate, but usually xPercent: -50 works for doubled content
            gsap.to(marqueeTrack, {
                xPercent: -50, // Move by half the width (since we doubled the content)
                duration: 20, // Adjust speed here
                ease: 'none',
                repeat: -1
            });
        }

        // Continuous floating animation
        gsap.to('.floating-element', {
            y: 15,
            ease: 'sine.inOut',
            stagger: {
                each: 0.5,
                from: "random"
            }
        });

    }, { scope: containerRef });

    const handleEnter = () => {
        if (isExiting) return;
        setIsExiting(true);

        const tl = gsap.timeline({
            onComplete: onComplete
        });

        tl.to(containerRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power4.in'
        });
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                bgcolor: '#050505',
                color: '#ffffff',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image Overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${logicBoardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1, // Very subtle tech texture
                filter: 'grayscale(100%) contrast(1.2)',
                zIndex: 0
            }} />

            {/* Gradient Overlay for Depth */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(22, 101, 52, 0.15) 0%, #050505 80%)', // Subtle primary green tint in center
                zIndex: 1
            }} />

            {/* Floating Decorative Elements - Blurred & Background */}
            <Box className="floating-element" sx={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: { xs: 200, md: 400 },
                zIndex: 0, // Pushed back
                transform: 'rotate(15deg)',
                opacity: 0,
                filter: 'blur(8px) grayscale(30%)' // Blurred and slightly desaturated
            }}>
                <img src={pixelWatch} alt="Smartwatch" style={{ width: '100%' }} />
            </Box>

            <Box className="floating-element" sx={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: { xs: 220, md: 450 },
                zIndex: 0, // Pushed back
                transform: 'rotate(-15deg)',
                opacity: 0,
                filter: 'blur(12px) grayscale(30%)' // Heavily blurred for depth
            }}>
                <img src={iphoneFloating} alt="iPhone Repair" style={{ width: '100%' }} />
            </Box>

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
                <Stack spacing={3} alignItems="center" textAlign="center">
                    {/* Brand Badge */}
                    <Box
                        className="intro-element"
                        sx={{
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            px: 3,
                            py: 0.8,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        <Typography variant="caption" sx={{ letterSpacing: '3px', fontWeight: 600, color: '#aaa', textTransform: 'uppercase' }}>
                            Established in Minneapolis
                        </Typography>
                    </Box>

                    {/* Main Title - Logo */}
                    <Box className="intro-element" sx={{ mb: 2 }}>
                        <Box
                            component="img"
                            src="/cmtc_logo.png"
                            alt="CMTC Wireless"
                            sx={{
                                width: { xs: '250px', md: '450px' }, // Slightly smaller for tighter feel
                                height: 'auto',
                                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))',
                                display: 'block',
                                mx: 'auto'
                            }}
                        />
                    </Box>
                    <Box className="intro-element">
                        <Typography variant="h5" sx={{
                            color: '#ccc',
                            fontWeight: 300,
                            maxWidth: '650px',
                            mx: 'auto',
                            lineHeight: 1.5, // Slightly tighter line height
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        }}>
                            Expert repair services for the devices you rely on every day.
                            <br />
                            <span style={{ opacity: 0.7, fontSize: '0.9em' }}>Fast. Reliable. Professional.</span>
                        </Typography>
                    </Box>

                    {/* Action Area */}
                    <Box className="intro-element" sx={{ pt: 1 }}> {/* Reduced padding */}
                        <Button
                            onClick={handleEnter}
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                color: '#000',
                                bgcolor: '#fff',
                                textTransform: 'none',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                px: 6,
                                py: 1.8,
                                borderRadius: '50px',
                                boxShadow: '0 0 30px rgba(255,255,255,0.1)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                '&:hover': {
                                    bgcolor: '#fff',
                                    transform: 'scale(1.05) translateY(-2px)',
                                    boxShadow: '0 0 50px rgba(255,255,255,0.3)'
                                },
                                '&:active': {
                                    transform: 'scale(0.98)'
                                }
                            }}
                        >
                            Enter Site
                        </Button>
                    </Box>

                    {/* Footer Services (Sliding Marquee) */}
                    <Box
                        className="intro-element"
                        sx={{
                            pt: 5, // Reduced from 8
                            width: '100%',
                            maxWidth: '800px',
                            mx: 'auto',
                            overflow: 'hidden',
                            position: 'relative',
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}
                    >
                        <Stack
                            direction="row"
                            className="marquee-track"
                            sx={{
                                width: 'fit-content',
                                display: 'flex',
                                gap: 2 // 16px gap
                            }}
                        >
                            {/* Duplicate list for seamless loop */}
                            {[...repairServices, ...repairServices].map((service, index) => (
                                <Box key={`${service.id}-${index}`} sx={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    px: 3,
                                    py: 1,
                                    borderRadius: '50px', // Pill shape looks better for slider
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    backdropFilter: 'blur(5px)',
                                    color: '#aaa',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease',
                                    flexShrink: 0, // Prevent shrinking
                                    '&:hover': {
                                        borderColor: colors.primary,
                                        color: '#fff',
                                        bgcolor: 'rgba(22, 101, 52, 0.1)'
                                    }
                                }}>
                                    <Typography variant="button" sx={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        {service.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default LandingIntro;
