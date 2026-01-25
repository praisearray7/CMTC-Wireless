import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';

interface ScheduleAppointmentButtonProps extends ButtonProps {
    href?: string;
}

const ScheduleAppointmentButton: React.FC<ScheduleAppointmentButtonProps> = ({
    href = "https://calendly.com/martinakinseye/cmtcwireless",
    sx,
    children,
    ...props
}) => {
    return (
        <Button
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
                bgcolor: '#1565C0', // Darker Blue for WCAG AA
                color: '#fff',
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': {
                    bgcolor: '#0D47A1',
                    boxShadow: '0 4px 12px rgba(21, 101, 192, 0.4)'
                },
                ...sx
            }}
            {...props}
        >
            <HandymanIcon sx={{ mr: 1 }} />
            {children || "Fix Now"}
        </Button>
    );
};

export default ScheduleAppointmentButton;
