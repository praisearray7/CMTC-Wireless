import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import Link from 'next/link';
import RequestQuoteIcon from "@mui/icons-material/RequestQuote"
import { colors } from '../theme/colors';

interface GetInstantQuoteButtonProps extends ButtonProps {
    href?: string;
}

const GetInstantQuoteButton: React.FC<GetInstantQuoteButtonProps> = ({
    href = "/contact-us?serviceNeeded=Get+Instant+Quote",
    sx,
    children,
    ...props
}) => {
    return (
        <Button
            component={Link}
            href={href}
            variant="contained"
            color="primary"
            sx={{
                bgcolor: colors.primary,
                color: '#fff',
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
