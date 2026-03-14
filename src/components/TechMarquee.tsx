"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
    SiNextdotjs, 
    SiReact, 
    SiTypescript, 
    SiJavascript, 
    SiTailwindcss, 
    SiFramer, 
    SiPython, 
    SiLaravel,
    SiHtml5,
    SiCss,
    SiThreedotjs
} from "react-icons/si";

// Interface for Tech item
interface TechItem {
    name: string;
    icon: React.ElementType;
    color: string;
}

// Our Tech Stack data based on Skills.tsx
const techStack: TechItem[] = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
];

interface TechMarqueeProps {
    baseVelocity?: number;
}

export default function TechMarquee({ baseVelocity = 1 }: TechMarqueeProps) {
    const [isMounted, setIsMounted] = useState(false);
    const baseX = useMotionValue(0);
    const directionFactor = useRef<number>(1);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Creates the seamless infinite wrap effect (-20% to -80% usually works well for wide content)
    // We adjust the limits based on how many duplicates we render to ensure smooth looping
    const x = useTransform(baseX, (v) => `${wrap(-33.33, 0, v)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    // Duplicate the array 3 times to ensure the marquee always has content to show while wrapping
    const items = [...techStack, ...techStack, ...techStack];

    if (!isMounted) return <div className="py-12 md:py-16 w-full h-[144px] bg-[#050505]" />;

    return (
        <div className="container py-12 md:my-16 w-full overflow-hidden flex flex-col items-center justify-center bg-[#050505] relative z-10">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
            
            <motion.div className="flex flex-nowrap gap-12 md:gap-24 w-max" style={{ x }}>
                {items.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={`${tech.name}-${index}`}
                            className="flex items-center gap-4 group cursor-none relative"
                        >
                            <div className="
                                flex items-center justify-center 
                                text-zinc-600 transition-all duration-500 ease-out
                                group-hover:drop-shadow-[0_0_15px_var(--hover-color)]
                            "
                            style={{ "--hover-color": tech.color } as React.CSSProperties}
                            >
                                <Icon className="w-10 h-10 md:w-10 md:h-10 transition-colors duration-500 group-hover:text-[var(--hover-color)]" />
                            </div>
                            <span className="
                                font-thin text-base md:text-lg tracking-wider uppercase
                                text-zinc-800 transition-all duration-500 ease-out
                                group-hover:text-[var(--hover-color)]
                            "
                            style={{ "--hover-color": tech.color } as React.CSSProperties}
                            >
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
