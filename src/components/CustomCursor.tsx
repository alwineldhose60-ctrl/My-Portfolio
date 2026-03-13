"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics for smooth trailing effect
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10); // Center the custom 20px cursor
            cursorY.set(e.clientY - 10);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    // Handle hover states on interactive elements
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Outer trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-25%",
                    translateY: "-25%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
            {/* Inner solid dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-secondary rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_rgba(176,38,255,0.8)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "30%",
                    translateY: "30%",
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
}
