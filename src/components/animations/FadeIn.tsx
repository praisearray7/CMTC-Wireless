"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Box, type BoxProps } from '@mui/material';

interface FadeInProps extends BoxProps {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    threshold?: number; // 0 to 1, how much of the element must vary
    amount?: number; // distance in pixels
}

const FadeIn = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    amount = 30,
    sx,
    ...props
}: FadeInProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        let x = 0;
        let y = 0;

        switch (direction) {
            case 'up': y = amount; break;
            case 'down': y = -amount; break;
            case 'left': x = amount; break;
            case 'right': x = -amount; break;
            case 'none': break;
        }

        gsap.fromTo(element,
            {
                opacity: 0,
                x,
                y,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: duration,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: ref });

    return (
        <Box ref={ref} sx={{ opacity: 0, ...sx }} {...props}>
            {children}
        </Box>
    );
};

export default FadeIn;
