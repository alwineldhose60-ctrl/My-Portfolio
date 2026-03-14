"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
    text: string | string[]; // Can accept array of paragraphs
    className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Trigger from when the top of the text enters the bottom of the viewport
        // until the bottom of the text hits the middle of the viewport
        offset: ["0 0.9", "1 0.7"] 
    });

    // If array of strings, join with special newline markers to preserve paragraph splits, else just use the string
    const paragraphs = Array.isArray(text) ? text : [text];

    return (
        <div ref={containerRef} className={`space-y-6 ${className}`}>
            {paragraphs.map((paragraph, pIndex) => {
                const words = paragraph.split(" ");
                // To keep progress continuous across paragraphs, we need total word count
                const totalWords = paragraphs.reduce((acc, p) => acc + p.split(" ").length, 0);
                const previousWords = paragraphs.slice(0, pIndex).reduce((acc, p) => acc + p.split(" ").length, 0);

                return (
                    <p key={pIndex} className="inline-block w-full text-sm md:text-base text-zinc-300 font-light leading-relaxed">
                        {words.map((word, wIndex) => {
                            const wordAbsoluteIndex = previousWords + wIndex;
                            const start = wordAbsoluteIndex / totalWords;
                            const end = start + (1 / totalWords);
                            
                            return (
                                <span key={wIndex}>
                                    <Word progress={scrollYProgress} range={[start, end]}>
                                        {word}
                                    </Word>
                                    {wIndex < words.length - 1 && " "}
                                </span>
                            );
                        })}
                    </p>
                );
            })}
        </div>
    );
}


// Separate Word component handles the individual interpolation
function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    // We animate opacity locally to transition from faint to fully solid text
    const opacity = useTransform(progress, range, [0.15, 1]);
    
    return (
        <span className="relative inline-block">
            {/* Base faint text */}
            <span className="absolute opacity-20">{children}</span>
            {/* Solid text that gets revealed */}
            <motion.span style={{ opacity }} className="text-zinc-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                {children}
            </motion.span>
        </span>
    );
}
