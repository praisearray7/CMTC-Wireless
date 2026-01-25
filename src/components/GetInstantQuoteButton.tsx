import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';
import RequestQuoteIcon from "@mui/icons-material/RequestQuote"
import { colors } from '../theme/colors';

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
                bgcolor: colors.primary,
                color: '#fff', // Black text for better contrast on bright green
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': {
                    bgcolor: '#14532d',
                    boxShadow: '0 4px 12px rgba(22, 101, 52, 0.4)'
                },
                ...sx
            }}
            {...props}
        >
            <RequestQuoteIcon sx={{ mr: 1 }} />
            Quote Now
        </Button>
    );
};

export default GetInstantQuoteButton;
