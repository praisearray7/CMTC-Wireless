import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';

interface GetInstantQuoteButtonProps extends ButtonProps {
    to?: string;
    state?: any;
}

const GetInstantQuoteButton: React.FC<GetInstantQuoteButtonProps> = ({
    to = "/contact-us",
    state = { serviceNeeded: 'Get Instant Quote' },
    sx,
    children,
    ...props
}) => {
    return (
        <Button
            component={Link}
            to={to}
            state={state}
            variant="contained"
            color="primary"
            sx={{
                bgcolor: '#78E335',
                color: '#fff',
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': {
                    bgcolor: '#66C22E',
                    boxShadow: '0 4px 12px rgba(120, 227, 53, 0.4)'
                },
                ...sx
            }}
            {...props}
        >
            {children || "Get Instant Quote"}
        </Button>
    );
};

export default GetInstantQuoteButton;
