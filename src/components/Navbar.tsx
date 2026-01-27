
'use client';

import { useState, useRef } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { AppBar, Toolbar, Button, Container, Box, IconButton, useTheme, useMediaQuery, Stack, Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';
import Link from 'next/link';
import { navLinks, repairServices, buyServices } from '../data/repairData';
import type { RepairCategory } from '../data/repairData';
import { imagePaths, getImagePath } from '../data/imagePaths';
import { contactInfo } from '../data/contactInfo';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import GetInstantQuoteButton from './GetInstantQuoteButton';
import ScheduleAppointmentButton from './ScheduleAppointmentButton';
import { PhoneIcon } from 'lucide-react';
import { colors } from '../theme/colors';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    // State for inline menus (Buy Device)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleMenuOpen = (event: MouseEvent<HTMLElement>, menuTitle: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setAnchorEl(event.currentTarget);
        setActiveMenu(menuTitle);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setAnchorEl(null);
            setActiveMenu(null);
        }, 100);
    };

    const handleMenuEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const getLink = (service: RepairCategory, isBuyMenu: boolean) => {
        if (isBuyMenu) {
            return `/buy-device?category=${service.id}`;
        }
        if (service.id === 'ipad-repair') return '/ipad-repair';
        if (service.id === 'macbook-repair') return '/macbook-repair';
        if (service.id === 'iphone-repair') return '/iphone-repair';
        if (service.id === 'cell-phone-repair') return '/cell-phone-repair';
        if (service.id === 'smart-watch-repair') return '/smart-watch-repair';
        if (service.id === 'computer-repair') return '/computer-repair';
        if (service.id === 'desktop-repair') return '/desktop-repair';
        if (service.id === 'laptop-repair') return '/laptop-repair';
        if (service.id === 'aio-repair') return '/aio-repair';
        if (service.id === 'tablet-repair') return '/tablet-repair';

        return `/${service.id}`;
    };



    return (
        <>
            <AppBar position="fixed" color="inherit" elevation={0} sx={{ top: 0, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.95)', zIndex: (theme) => theme.zIndex.appBar }}>
                {/* Top Contact Bar */}
                <Box sx={{ bgcolor: '#1565C0', color: 'white', py: 1 }}>
                    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', whiteSpace: 'nowrap', px: { xs: 0, md: 4 } }}>
                        <Box sx={{ display: 'flex', gap: { xs: 0.7, md: 2 }, alignItems: 'center', px: '0 !important' }}>
                            <IconButton color="inherit" aria-label="whatsapp" href={contactInfo.whatsapp.link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><WhatsAppIcon /></IconButton>
                            <IconButton color="inherit" aria-label="google-location" href={contactInfo.address.both.mapLink} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><LocationOnIcon /></IconButton>
                        </Box>

                        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, alignItems: 'center' }}>
                            <IconButton color="inherit" aria-label="phone" href={contactInfo.phone.link} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><PhoneIcon /></IconButton>
                            <Stack component="a" href={contactInfo.phone.link} direction="row" spacing={1} alignItems="center" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { opacity: 0.8 } }}>
                                <Typography variant="body2" sx={{ fontWeight: 800, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                    {contactInfo.phone.display}
                                </Typography>
                            </Stack>
                            <IconButton color="inherit" aria-label="message" href={contactInfo.text.link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><MessageIcon /></IconButton>
                            <Stack component="a" href={contactInfo.text.link} direction="row" spacing={1} alignItems="center" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { opacity: 0.8 } }}>
                                <Typography variant="body2" sx={{ fontWeight: 800, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                    {contactInfo.text.display}
                                </Typography>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ height: 60 }}>
                        {/* Logo */}
                        <Box component={Link} href="/" sx={{ flexGrow: 0, mr: 4, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <img src={getImagePath(imagePaths.logo)} alt="CMTC Wireless" style={{ height: 70, objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <Stack direction="row" spacing={1} alignItems="center">
                                {navLinks.map((link) => {
                                    if (link.isDropdown) {
                                        const isBuyMenu = link.title === 'Buy a Device';
                                        const menuItems = isBuyMenu ? buyServices : repairServices;

                                        // Use NavDropdown ONLY for Repair Services
                                        if (link.title === 'Repair Services') {
                                            return (
                                                <NavDropdown
                                                    key={link.title}
                                                    title={link.title}
                                                    items={menuItems}
                                                    getLink={(service) => getLink(service, false)}
                                                />
                                            );
                                        }

                                        // Inline logic for other dropdowns (e.g., Buy a Device)
                                        return (
                                            <Box key={link.title}>
                                                <Button
                                                    onClick={(e) => handleMenuOpen(e, link.title)}
                                                    onMouseEnter={(e) => handleMenuOpen(e, link.title)}
                                                    onMouseLeave={handleMenuLeave}
                                                    endIcon={<KeyboardArrowDownIcon />}
                                                    sx={{
                                                        color: '#000000',
                                                        fontWeight: 600,
                                                        fontSize: '0.95rem',
                                                        mx: 0.5,
                                                        px: 2,
                                                        minWidth: 'auto',
                                                        height: 65,
                                                        borderRadius: 0,
                                                        boxShadow: 'none',
                                                        borderTop: '3px solid transparent',
                                                        borderBottom: '3px solid transparent',
                                                        transition: 'color 0.2s',
                                                        '&:hover': {
                                                            color: theme.palette.primary.main,
                                                            backgroundColor: 'transparent',
                                                            borderTopColor: colors.primary,
                                                            borderBottomColor: colors.primary,
                                                            boxShadow: 'none',
                                                            transform: 'none',
                                                        }
                                                    }}
                                                >
                                                    {link.title}
                                                </Button>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl) && activeMenu === link.title}
                                                    onClose={handleMenuLeave}
                                                    hideBackdrop
                                                    disableScrollLock
                                                    autoFocus={false}
                                                    disableRestoreFocus
                                                    sx={{ pointerEvents: 'none' }}
                                                    MenuListProps={{
                                                        onMouseEnter: handleMenuEnter,
                                                        onMouseLeave: handleMenuLeave,
                                                    }}
                                                    slotProps={{
                                                        paper: {
                                                            sx: {
                                                                mt: 0.5,
                                                                minWidth: 200,
                                                                p: 1,
                                                                borderRadius: 2,
                                                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                                pointerEvents: 'auto'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <Stack spacing={0.5}>
                                                        {menuItems.map((service) => (
                                                            <Box
                                                                key={service.id}
                                                                component={Link}
                                                                href={getLink(service, isBuyMenu)}
                                                                onClick={handleMenuLeave}
                                                                sx={{
                                                                    textDecoration: 'none',
                                                                    color: '#000000',
                                                                    py: 1.5,
                                                                    px: 2,
                                                                    borderRadius: 1,
                                                                    transition: 'background-color 0.2s',
                                                                    '&:hover': {
                                                                        backgroundColor: '#f5f5f5',
                                                                        color: theme.palette.primary.main
                                                                    }
                                                                }}
                                                            >
                                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                                    {service.name}
                                                                </Typography>
                                                                {/* Optional: Add subtitle or category count if needed */}
                                                            </Box>
                                                        ))}
                                                    </Stack>
                                                </Menu>
                                            </Box>
                                        );
                                    }
                                    return (
                                        <Button
                                            key={link.title}
                                            component={Link}
                                            href={link.path}
                                            sx={{
                                                color: '#000000',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                mx: 0.5,
                                                px: 2,
                                                minWidth: 'auto',
                                                height: 65,
                                                borderRadius: 0,
                                                boxShadow: 'none',
                                                borderTop: '3px solid transparent',
                                                borderBottom: '3px solid transparent',
                                                transition: 'color 0.2s',
                                                '&:hover': {
                                                    color: theme.palette.primary.main,
                                                    backgroundColor: 'transparent',
                                                    borderTopColor: colors.primary,
                                                    boxShadow: 'none',
                                                    transform: 'none',
                                                }
                                            }}
                                        >
                                            {link.title}
                                        </Button>
                                    );
                                })}
                                <GetInstantQuoteButton sx={{ ml: 2, px: 2, fontSize: '0.9rem' }} />
                                <ScheduleAppointmentButton sx={{ ml: 1, px: 2, fontSize: '0.9rem' }} />
                            </Stack>
                        )}

                        {/* Mobile Menu Icon */}
                        {isMobile && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>

                {/* Mobile Menu Component */}
                <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            </AppBar>
            {/* Height Spacer to prevent content from hiding behind fixed navbar */}
            <Box sx={{ height: 80 }} />
        </>
    );
};

export default Navbar;
