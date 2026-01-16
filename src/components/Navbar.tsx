
import { useState, Fragment } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { AppBar, Toolbar, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Stack, Menu, Typography, Grid, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { navLinks, repairServices, buyServices } from '../data/repairData';

import { imagePaths, getImagePath } from '../data/imagePaths';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // Switched to lg break for more menu items
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuOpen = (event: MouseEvent<HTMLElement>, menuTitle: string) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(menuTitle);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box sx={{ width: 280 }} role="presentation">
            <List>
                {navLinks.map((link) => (
                    <Fragment key={link.title}>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to={link.path} onClick={toggleDrawer(false)}>
                                <ListItemText primary={link.title} />
                            </ListItemButton>
                        </ListItem>
                        {link.isDropdown && (
                            <Box sx={{ pl: 4 }}>
                                {(link.title === 'Buy a Device' ? buyServices : repairServices).map((service) => (
                                    <ListItem key={service.id} disablePadding>
                                        <ListItemButton component={Link} to={link.title === 'Buy a Device' ? `/buy-device?category=${service.id}` : `/service/${service.id}`} onClick={toggleDrawer(false)}>
                                            <ListItemText primary={service.name} secondary={service.subCategories ? `${service.subCategories.length} Categories` : `${service.models?.length} Models`} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Box>
                        )}
                    </Fragment>
                ))}
                <ListItem sx={{ mt: 2 }}>
                    <Button
                        component={Link}
                        to="/contact-us"
                        state={{ serviceNeeded: 'Get Instant Quote' }}
                        onClick={toggleDrawer(false)}
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                    >
                        Get Instant Quote
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #f0f0f0', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.95)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 90 }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ flexGrow: 0, mr: 4, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <img src={getImagePath(imagePaths.logo)} alt="CMTC Wireless" style={{ height: 50, objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Stack direction="row" spacing={1} alignItems="center">
                            {navLinks.map((link) => {
                                if (link.isDropdown) {
                                    const isBuyMenu = link.title === 'Buy a Device';
                                    const menuItems = isBuyMenu ? buyServices : repairServices;

                                    return (
                                        <Box key={link.title}>
                                            <Button
                                                onClick={(e) => handleMenuOpen(e, link.title)}
                                                endIcon={<KeyboardArrowDownIcon />}
                                                sx={{
                                                    color: '#2C3E50',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    mx: 0.5,
                                                    '&:hover': { color: theme.palette.primary.main, backgroundColor: 'transparent' }
                                                }}
                                            >
                                                {link.title}
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl) && activeMenu === link.title}
                                                onClose={handleMenuClose}
                                                MenuListProps={{ onMouseLeave: handleMenuClose }}
                                                PaperProps={{ sx: { mt: 2, width: 900, maxWidth: '95vw', p: 5, borderRadius: 2, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' } }}
                                            >
                                                <Grid container spacing={4}>
                                                    {menuItems.map((service) => (
                                                        <Grid size={{ xs: 6, md: 4 }} key={service.id}>
                                                            <Typography
                                                                variant="h6"
                                                                component={Link}
                                                                to={isBuyMenu ? `/buy-device?category=${service.id}` : `/service/${service.id}`}
                                                                onClick={handleMenuClose}
                                                                sx={{ fontWeight: 800, color: '#2C3E50', textDecoration: 'none', '&:hover': { color: theme.palette.primary.main }, display: 'block', mb: 2, fontSize: '1rem', letterSpacing: 0.5 }}
                                                            >
                                                                {service.name}
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                                                                {(service.subCategories || service.models)?.slice(0, 4).map((item: any) => (
                                                                    <Typography key={item.name} variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#546E7A' }}>
                                                                        {item.name}
                                                                    </Typography>
                                                                ))}
                                                            </Box>
                                                            <Typography
                                                                variant="caption"
                                                                component={Link}
                                                                to={isBuyMenu ? `/buy-device?category=${service.id}` : `/service/${service.id}`}
                                                                onClick={handleMenuClose}
                                                                sx={{ fontWeight: 800, cursor: 'pointer', textDecoration: 'none', display: 'block', color: '#78E335', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: 1 }}
                                                            >
                                                                View All {service.name} &rarr;
                                                            </Typography>
                                                        </Grid>
                                                    ))}
                                                </Grid>
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
                                            '&:hover': { color: theme.palette.primary.main, backgroundColor: 'transparent' }
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
                                sx={{ ml: 2, px: 3 }}
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
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
