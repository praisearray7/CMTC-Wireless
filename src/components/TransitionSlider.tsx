import React, { useEffect, useRef, useState, useMemo } from "react";

type Props = {
    images: string[];
    intervalMs?: number;
    height?: number | string;
    showBottomBar?: boolean;
};

type TransitionEffect = 'pixel' | 'column' | 'row' | 'fade' | 'twist' | 'spin' | 'blinds' | 'zoomIn' | 'zoomOut';

export default function TransitionSlider({
    images,
    intervalMs = 5000,
    height = 650,
    showBottomBar = true,
}: Props) {
    const [active, setActive] = useState(0);
    const [nextActive, setNextActive] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [effectType, setEffectType] = useState<TransitionEffect>('pixel');

    // Dynamic grid dimensions based on effect
    const [gridRows, setGridRows] = useState(6);
    const [gridCols, setGridCols] = useState(10);

    const containerRef = useRef<HTMLDivElement | null>(null);

    // Reuse a large pool of random delays to avoid recalculating per transition
    // We'll just slice what we need. 200 is plenty (max 12x12 = 144)
    const randomDelays = useMemo(() => Array.from({ length: 200 }, () => Math.random()), []);

    // Auto-play
    useEffect(() => {
        if (images.length <= 1 || isPaused || isTransitioning) return;
        const t = setInterval(() => {
            triggerTransition((active + 1) % images.length);
        }, intervalMs);
        return () => clearInterval(t);
    }, [active, images.length, intervalMs, isPaused, isTransitioning]);

    const triggerTransition = (nextIndex: number) => {
        if (nextIndex === active || isTransitioning) return;

        // Randomly select next effect
        const effects: TransitionEffect[] = ['pixel', 'column', 'row', 'fade', 'twist', 'spin', 'blinds', 'zoomIn', 'zoomOut'];
        const nextEffect = effects[Math.floor(Math.random() * effects.length)];

        setEffectType(nextEffect);

        // Configure grid based on effect
        if (nextEffect === 'pixel' || nextEffect === 'twist' || nextEffect === 'spin') {
            setGridRows(6);
            setGridCols(10);
        } else if (nextEffect === 'column' || nextEffect === 'blinds') {
            setGridRows(1);
            setGridCols(12);
        } else if (nextEffect === 'row') {
            setGridRows(8);
            setGridCols(1);
        } else {
            // Fade, ZoomIn, ZoomOut - treated as single block
            setGridRows(1);
            setGridCols(1);
        }

        setNextActive(nextIndex);
        setIsTransitioning(true);

        setTimeout(() => {
            setActive(nextIndex);
            setNextActive(null);
            setIsTransitioning(false);
        }, 1400); // 1.4s total transition time
    };

    // Calculate cell delay based on effect type
    const getDelay = (i: number) => {
        if (effectType === 'pixel' || effectType === 'twist' || effectType === 'spin') {
            return randomDelays[i] * 0.6; // Random 0-0.6s
        }
        if (effectType === 'column' || effectType === 'blinds') {
            // Sequential wave from left to right (or random check)
            // Let's do random columns for 'columnated' feel or sequential
            return (i * 0.05); // Standard wave
        }
        if (effectType === 'row') {
            return (i * 0.08); // Standard wave down
        }
        // Fade
        return 0;
    };

    if (!images || images.length === 0) return null;

    const totalCells = gridRows * gridCols;

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={styles.sliderWrapper(height)}
        >
            {/* Base Slide (active) */}
            <div style={styles.slideStack}>
                <figure className="hero-slide active">
                    <img
                        src={images[active]}
                        alt={`Slide ${active + 1}`}
                        className="hero-image ken-burns"
                        draggable={false}
                    />
                    <div style={styles.overlay} />
                </figure>
            </div>

            {/* Transition Grid (next) */}
            {isTransitioning && nextActive !== null && (
                <div style={styles.gridContainer}>
                    {Array.from({ length: totalCells }).map((_, i) => {
                        // Current col/row index
                        const c = i % gridCols;
                        const r = Math.floor(i / gridCols);

                        return (
                            <div
                                key={i}
                                className={`pixel-cell ${effectType}`}
                                style={{
                                    width: `${100 / gridCols}%`,
                                    height: `${100 / gridRows}%`,
                                    left: `${c * (100 / gridCols)}%`,
                                    top: `${r * (100 / gridRows)}%`,
                                    animationDelay: `${getDelay(i)}s`,
                                }}
                            >
                                <img
                                    src={images[nextActive]}
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: `${gridCols * 100}%`,
                                        height: `${gridRows * 100}%`,
                                        left: `-${c * 100}%`,
                                        top: `-${r * 100}%`,
                                        maxWidth: 'none',
                                        objectFit: 'cover',
                                    }}
                                    draggable={false}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Dots */}
            <div style={styles.dotsWrapper(showBottomBar)}>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => triggerTransition(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`hero-dot ${idx === active || idx === nextActive ? "active" : ""}`}
                        style={{ outline: "none" }}
                    />
                ))}
            </div>

            {/* Bottom Bar */}
            {showBottomBar && (
                <div style={styles.bottomBar}>
                    <h2 style={styles.bottomText}>Get Your Repair Started</h2>
                </div>
            )}

            <style>{`
        /* Prevent horizontal scrollbar from 100vw width */
        body, html {
          overflow-x: hidden !important;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          overflow: hidden;
          margin: 0;
        }

        .hero-image.ken-burns {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
          max-width: none;
          transform-origin: center center;
          animation: kenBurnsAuto 20s ease-out forwards;
        }

        @keyframes kenBurnsAuto {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        /* Transition Cells - Base */
        .pixel-cell {
          position: absolute;
          overflow: hidden;
          opacity: 0;
          box-shadow: 0 0 1px rgba(0,0,0,0.05); /* Slight anti-bleed */
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Default Pixel / Flip / Random Fade */
        .pixel-cell.pixel {
           transform: scale(0.95);
           animation: cellIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Column / Row Slide */
        .pixel-cell.column, .pixel-cell.row {
           transform: scale(1);
           animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Twist (3D Flip) */
        .pixel-cell.twist {
          transform: rotateY(90deg) scale(0.5);
          animation: twistIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Spin */
        .pixel-cell.spin {
          transform: rotate(180deg) scale(0);
          animation: spinIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Blinds (Vertical Flip) */
        .pixel-cell.blinds {
           transform: rotateX(90deg);
           transform-origin: top;
           animation: blindsIn 0.8s ease-out forwards;
        }

        /* Zoom In */
        .pixel-cell.zoomIn {
           transform: scale(0.5);
           opacity: 0;
           animation: zoomInKey 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Zoom Out */
        .pixel-cell.zoomOut {
           transform: scale(1.5);
           opacity: 0;
           animation: zoomOutKey 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }


        @keyframes cellIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes slideIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes twistIn {
          0% { opacity: 0; transform: rotateY(90deg) scale(0.5); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }

        @keyframes spinIn {
          0% { opacity: 0; transform: rotate(180deg) scale(0); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        @keyframes blindsIn {
          0% { opacity: 0; transform: rotateX(90deg); }
          100% { opacity: 1; transform: rotateX(0deg); }
        }

        @keyframes zoomInKey {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes zoomOutKey {
          0% { opacity: 0; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Dots */
        .hero-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .hero-dot:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: scale(1.2);
        }
        .hero-dot.active {
          background-color: #7DBA2F;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(125, 186, 47, 0.6);
        }
      `}</style>
        </div>
    );
}

const styles = {
    sliderWrapper: (height: number | string): React.CSSProperties => ({
        position: "relative",
        width: "100%",
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: "hidden",
        left: 0,
        transform: "none",
        maxWidth: "100%",
    }),
    slideStack: {
        position: "absolute" as const,
        inset: 0,
    },
    gridContainer: {
        position: "absolute" as const,
        inset: 0,
        zIndex: 10,
        overflow: 'hidden',
    },
    overlay: {
        position: "absolute" as const,
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%)",
        pointerEvents: "none" as const,
    },
    dotsWrapper: (showBottomBar: boolean): React.CSSProperties => ({
        position: "absolute" as const,
        bottom: showBottomBar ? "110px" : "20px", // Adjust based on bar presence
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        zIndex: 20,
    }),
    bottomBar: {
        position: "absolute" as const,
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#7DBA2F",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 30,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
    },
    bottomText: {
        color: "#fff",
        fontSize: "clamp(24px, 5vw, 44px)", // Responsive font size
        fontWeight: 700,
        margin: 0,
        textTransform: "capitalize" as const,
        letterSpacing: "0.5px",
    },
};
