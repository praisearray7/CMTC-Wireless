import { useState, useRef } from 'react';
import { Button, Menu, Box, Typography, Stack, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import type { RepairCategory } from '../data/repairData';
import { colors } from '../theme/colors';

interface NavDropdownProps {
    title: string;
    items: RepairCategory[];
    getLink: (service: RepairCategory) => string;
}

const NavDropdown = ({ title, items, getLink }: NavDropdownProps) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setAnchorEl(event.currentTarget);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setAnchorEl(null);
        }, 100);
    };

    const handleMenuEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                onClick={handleMenuOpen}
                onMouseEnter={handleMenuOpen}
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
                {title}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
                    {items.map((service) => (
                        <Box
                            key={service.id}
                            component={Link}
                            href={getLink(service)}
                            onClick={handleClose}
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
                        </Box>
                    ))}
                </Stack>
            </Menu>
        </Box>
    );
};

export default NavDropdown;
