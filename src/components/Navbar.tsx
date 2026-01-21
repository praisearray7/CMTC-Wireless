import { useState, useRef } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { AppBar, Toolbar, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Stack, Menu, Typography, ListItemButton, Collapse } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { navLinks, repairServices, buyServices } from '../data/repairData';
import type { RepairCategory } from '../data/repairData';
import { imagePaths, getImagePath } from '../data/imagePaths';
import NavDropdown from './NavDropdown';

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

    // State for mobile dropdowns
    const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});

    const handleMobileClick = (title: string) => {
        setMobileOpen((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const drawerContent = (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }} role="presentation">
            {/* Drawer Header */}
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#2C3E50' }}>Menu</Typography>
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <List sx={{ flexGrow: 1, overflowY: 'auto', py: 2 }}>
                {navLinks.map((link) => {
                    const hasDropdown = link.isDropdown;
                    const isOpen = mobileOpen[link.title] || false;
                    const menuItems = link.title === 'Buy a Device' ? buyServices : repairServices;
                    const isBuyMenu = link.title === 'Buy a Device';

                    return (
                        <Box key={link.title} sx={{ mb: 1 }}>
                            {/* Main Link Item */}
                            {hasDropdown ? (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => handleMobileClick(link.title)} sx={{ py: 1.5 }}>
                                        <ListItemText
                                            primary={link.title}
                                            primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem', color: '#2C3E50' }}
                                        />
                                        {isOpen ? <ExpandLessIcon sx={{ color: theme.palette.primary.main }} /> : <ExpandMoreIcon />}
                                    </ListItemButton>
                                </ListItem>
                            ) : (
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={link.path} onClick={toggleDrawer(false)} sx={{ py: 1.5 }}>
                                        <ListItemText
                                            primary={link.title}
                                            primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem', color: '#2C3E50' }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )}

                            {/* Collapsible Content */}
                            {hasDropdown && (
                                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                                        {menuItems.map((service) => (
                                            <ListItemButton
                                                key={service.id}
                                                component={Link}
                                                to={getLink(service, isBuyMenu)}
                                                onClick={toggleDrawer(false)}
                                                sx={{ pl: 4, py: 1.5 }}
                                            >
                                                <ListItemText
                                                    primary={service.name}
                                                    secondary={service.subCategories ? `${service.subCategories.length} Categories` : undefined}
                                                    primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }}
                                                />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    );
                })}
            </List>

            <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
                <Button
                    component={Link}
                    to="/contact-us"
                    state={{ serviceNeeded: 'Get Instant Quote' }}
                    onClick={toggleDrawer(false)}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ py: 1.5, borderRadius: 2, fontWeight: 700 }}
                >
                    Get Instant Quote
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.95)', borderBottom: `1px solid ${theme.palette.divider}` }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 90 }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ flexGrow: 0, mr: 4, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
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

                                    return (
                                        <Box key={link.title}>
                                            <Button
                                                onClick={(e) => handleMenuOpen(e, link.title)}
                                                onMouseEnter={(e) => handleMenuOpen(e, link.title)}
                                                onMouseLeave={handleMenuLeave}
                                                endIcon={<KeyboardArrowDownIcon />}
                                                sx={{
                                                    color: '#2C3E50',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    mx: 0.5,
                                                    px: 2,
                                                    minWidth: 'auto',
                                                    height: 90,
                                                    borderRadius: 0,
                                                    boxShadow: 'none',
                                                    borderTop: '3px solid transparent',
                                                    borderBottom: '3px solid transparent',
                                                    transition: 'all 0.2s',
                                                    '&:hover': {
                                                        color: theme.palette.primary.main,
                                                        backgroundColor: 'transparent',
                                                        borderBottomColor: theme.palette.primary.main,
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
                                                sx={{ pointerEvents: 'none' }}
                                                MenuListProps={{
                                                    onMouseEnter: handleMenuEnter,
                                                    onMouseLeave: handleMenuLeave,
                                                }}
                                                slotProps={{
                                                    paper: { sx: { mt: 0, pointerEvents: 'auto', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' } }
                                                }}
                                            >
                                                <Stack spacing={0}>
                                                    {menuItems.map((service) => (
                                                        <Box
                                                            key={service.id}
                                                            component={Link}
                                                            to={getLink(service, isBuyMenu)}
                                                            onClick={handleMenuLeave}
                                                            sx={{
                                                                textDecoration: 'none',
                                                                color: '#2C3E50',
                                                                py: 1.5,
                                                                px: 3,
                                                                transition: 'background-color 0.2s',
                                                                '&:hover': {
                                                                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                                                    color: theme.palette.primary.main
                                                                }
                                                            }}
                                                        >
                                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                                {service.name}
                                                            </Typography>
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
                                        to={link.path}
                                        sx={{
                                            color: '#2C3E50',
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            mx: 0.5,
                                            px: 2,
                                            height: 90,
                                            borderRadius: 0,
                                            borderTop: '3px solid transparent',
                                            borderBottom: '3px solid transparent',
                                            '&:hover': {
                                                color: theme.palette.primary.main,
                                                backgroundColor: 'transparent',
                                                borderBottomColor: theme.palette.primary.main,
                                            }
                                        }}
                                    >
                                        {link.title}
                                    </Button>
                                );
                            })}
                            <Button
                                component={Link}
                                to="/contact-us"
                                state={{ serviceNeeded: 'Get Instant Quote' }}
                                variant="contained"
                                color="primary"
                                sx={{ ml: 2, px: 3, borderRadius: 2, fontWeight: 700 }}
                            >
                                Get Instant Quote
                            </Button>
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
                            sx={{ color: '#2C3E50' }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { width: '100%', maxWidth: 360 }
                }}
            >
                {drawerContent}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
