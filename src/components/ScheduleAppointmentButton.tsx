import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';

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
                bgcolor: '#2196F3', // Blue color
                color: '#fff',
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': {
                    bgcolor: '#1976D2',
                    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)'
                },
                ...sx
            }}
            {...props}
        >
            {children || "Schedule Appointment"}
        </Button>
    );
};

export default ScheduleAppointmentButton;
