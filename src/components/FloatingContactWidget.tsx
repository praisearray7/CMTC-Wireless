import { useState, useRef } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { colors } from '../theme/colors';
import { contactInfo } from '../data/contactInfo';
import { getImagePath } from '../data/imagePaths';

const FloatingContactWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(true);

    useGSAP(() => {
        if (!isVisible) return;
        const tl = gsap.timeline();

        if (isOpen) {
            // Open animation with autoAlpha (combines opacity + visibility)
            tl.to(actionsRef.current, {
                autoAlpha: 1,
                duration: 0
            })
                .fromTo('.action-btn',
                    { y: 20, autoAlpha: 0, scale: 0.8 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.3,
                        stagger: 0.1,
                        ease: 'back.out(1.7)'
                    }
                );
        } else {
            // Close animation
            tl.to('.action-btn', {
                y: 20,
                autoAlpha: 0,
                scale: 0.8,
                duration: 0.2,
                stagger: { each: 0.05, from: 'end' },
                ease: 'power2.in'
            })
                .to(actionsRef.current, {
                    autoAlpha: 0,
                    duration: 0
                });
        }
    }, { scope: containerRef, dependencies: [isOpen, isVisible] });

    if (!isVisible) return null;

    return (
        <Box
            ref={containerRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 40 },
                right: { xs: 20, md: 40 },
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
            }}
        >
            {/* Actions Container */}
            <Box
                ref={actionsRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    visibility: 'hidden', // Initially hidden
                    mb: 1
                }}
            >
                {/* WhatsApp Button */}
                <Tooltip title="Chat on WhatsApp" placement="left" arrow>
                    <IconButton
                        className="action-btn"
                        href={contactInfo.whatsapp.link} // Replace with actual number if different
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            bgcolor: '#25D366',
                            color: '#fff',
                            width: 56,
                            height: 56,
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                            '&:hover': {
                                bgcolor: '#1fb956',
                                transform: 'scale(1.1)'
                            },
                            transition: 'transform 0.2s'
                        }}
                    >
                        <WhatsAppIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Tooltip>

                {/* Phone Button */}
                <Tooltip title="Call Us" placement="left" arrow>
                    <IconButton
                        className="action-btn"
                        href={contactInfo.phone.link} // Replace with actual number if different
                        sx={{
                            bgcolor: '#FF0000', // Red as requested
                            color: '#fff',
                            width: 56,
                            height: 56,
                            boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4)',
                            '&:hover': {
                                bgcolor: '#d30000',
                                transform: 'scale(1.1)'
                            },
                            transition: 'transform 0.2s'
                        }}
                    >
                        <PhoneIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Main Toggle Button Wrapper */}
            <Box sx={{ position: 'relative' }}>
                {/* Dismiss Button */}
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        width: 20,
                        height: 20,
                        zIndex: 10,
                        '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.8)'
                        }
                    }}
                >
                    <CloseIcon sx={{ fontSize: 14 }} />
                </IconButton>

                <IconButton
                    onClick={() => setIsOpen(!isOpen)}
                    sx={{
                        width: 64,
                        height: 64,
                        padding: 0,
                        bgcolor: isOpen ? '#fff' : colors.primary,
                        color: isOpen ? '#FF0000' : '#fff',
                        border: isOpen ? '2px solid #FF0000' : `2px solid ${colors.primary}`,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        position: 'relative',

                        // Ripple Animation Styles
                        '&::before, &::after': !isOpen ? {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '50%',
                            border: `2px solid ${colors.primary}`,
                            opacity: 0,
                            zIndex: -1,
                            animation: 'ripple 3s infinite cubic-bezier(0, 0.2, 0.8, 1)'
                        } : {},
                        '&::after': !isOpen ? {
                            animationDelay: '1.5s'
                        } : {},
                        '@keyframes ripple': {
                            '0%': {
                                transform: 'scale(1)',
                                opacity: 0.6
                            },
                            '100%': {
                                transform: 'scale(1.8)',
                                opacity: 0
                            }
                        },

                        '&:hover': {
                            bgcolor: isOpen ? '#f5f5f5' : colors.secondary,
                            transform: 'scale(1.05)',
                            border: isOpen ? '2px solid #d30000' : `2px solid ${colors.secondary}`
                        }
                    }}
                >
                    {isOpen ? (
                        <CloseIcon sx={{ fontSize: 32 }} />
                    ) : (
                        <Box
                            component="img"
                            src={getImagePath('support-girl.png')}
                            alt="Support"
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                p: 0
                            }}
                        />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};

export default FloatingContactWidget;
