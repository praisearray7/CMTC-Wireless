import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Box, type BoxProps } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggerContainerProps extends BoxProps {
    stagger?: number;
    delay?: number;
    childSelector?: string; // e.g., "> *" for direct children
    initialY?: number;
}

const StaggerContainer = ({
    children,
    stagger = 0.1,
    delay = 0,
    childSelector = "> *", // Target direct children by default
    initialY = 20,
    sx,
    ...props
}: StaggerContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        // Select children to animate
        const elements = gsap.utils.toArray(childSelector, container);

        gsap.fromTo(elements,
            {
                opacity: 0,
                y: initialY
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: stagger,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Box ref={containerRef} sx={sx} {...props}>
            {children}
        </Box>
    );
};

export default StaggerContainer;
