import { useState, useEffect, useRef } from 'react';

interface CountUpAnimationProps {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

const CountUpAnimation = ({ target, duration = 2000, suffix = '', prefix = '', decimals = 0 }: CountUpAnimationProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            setCount(target * easeOutQuart);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isVisible, target, duration]);

    return (
        <span ref={elementRef}>
            {prefix}{count.toFixed(decimals)}{suffix}
        </span>
    );
};

export default CountUpAnimation;
