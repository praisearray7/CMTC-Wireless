import React, { useState } from 'react';
import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Collapse,
    IconButton,
    Typography,
    Stack
} from '@mui/material';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { navLinks, repairServices, buyServices } from '../data/repairData';
import type { RepairCategory } from '../data/repairData';
import GetInstantQuoteButton from './GetInstantQuoteButton';
import ScheduleAppointmentButton from './ScheduleAppointmentButton';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    // We can duplicate the getLink logic here or pass it. 
    // For a cleaner component, I'll duplicate the simple logic to avoid prop drilling complex functions if it's stable.
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
    // State to track which dropdown is open. Using string ID or Title.
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const handleToggleMenu = (title: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title]
        }));
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
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: 350,
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    // Improve paper shadow and border
                    boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                }
            }}
        >
            {/* Header */}
            <Box sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
                    Menu
                </Typography>
                <IconButton onClick={onClose} edge="end">
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Content using Scrollbar */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <List component="nav" disablePadding>
                    {navLinks.map((link) => {
                        const hasSubmenu = link.isDropdown;
                        const isOpen = openMenus[link.title] || false;
                        const menuItems = link.title === 'Buy a Device' ? buyServices : repairServices;

                        if (hasSubmenu) {
                            return (
                                <Box key={link.title}>
                                    <ListItem disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            onClick={() => handleToggleMenu(link.title)}
                                            sx={{
                                                py: 2,
                                                borderBottom: '1px solid rgba(0,0,0,0.03)',
                                            }}
                                        >
                                            <ListItemText
                                                primary={link.title}
                                                primaryTypographyProps={{
                                                    fontSize: '1rem',
                                                    fontWeight: 600,
                                                    color: '#2C3E50'
                                                }}
                                            />
                                            {isOpen ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
                                        </ListItemButton>
                                    </ListItem>
                                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ bgcolor: '#F8F9FA' }}>
                                            {menuItems.map((service) => (
                                                <ListItemButton
                                                    key={service.id}
                                                    component={Link}
                                                    href={getLink(service, link.title === 'Buy a Device')}
                                                    onClick={onClose}
                                                    sx={{ pl: 4, py: 1.5 }}
                                                >
                                                    <ListItemText
                                                        primary={service.name}
                                                        secondary={service.subCategories ? `${service.subCategories.length} Categories` : `${service.models?.length} Models`}
                                                        primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }}
                                                        secondaryTypographyProps={{ fontSize: '0.8rem' }}
                                                    />
                                                    <ChevronRightIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                </Box>
                            );
                        }

                        return (
                            <ListItem key={link.title} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={link.path}
                                    onClick={onClose}
                                    sx={{ py: 2, borderBottom: '1px solid rgba(0,0,0,0.03)' }}
                                >
                                    <ListItemText
                                        primary={link.title}
                                        primaryTypographyProps={{
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            color: '#2C3E50'
                                        }}
                                    />
                                    {link.title !== 'Home' && <ChevronRightIcon color="action" />}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            {/* Footer Actions */}
            <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
                <GetInstantQuoteButton fullWidth size="large" sx={{ py: 1.5, mb: 2 }} onClick={onClose} />
                <ScheduleAppointmentButton fullWidth size="large" sx={{ py: 1.5 }} onClick={onClose} />
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3, mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                        © 2026 CMTC Wireless
                    </Typography>
                </Stack>
            </Box>
        </Drawer>
    );
};

export default MobileMenu;
