"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import { MouseEvent, useRef } from "react";
import ScrollRevealText from "./ScrollRevealText";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll through the whole About section
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ["0 1", "0.3 1"], // Trigger from when section enters until it's 30% into view
  });

  const titleOpacity = useTransform(sectionScroll, [0, 1], [0, 1]);
  const titleY = useTransform(sectionScroll, [0, 1], [50, 0]);
  const titleBlur = useTransform(sectionScroll, [0, 1], [10, 0]);

  const blurFilter = useMotionTemplate`blur(${titleBlur}px)`;
  const imageOpacity = useTransform(sectionScroll, [0.2, 1], [0, 1]);
  const imageScale = useTransform(sectionScroll, [0.2, 1], [0.9, 1]);

  // Track mouse position relative to the container
  const mouseX = useMotionValue(0.5); // Default center
  const mouseY = useMotionValue(0.5); // Default center

  // Apply a much softer spring for a very slight, smooth tracking effect
  const springX = useSpring(mouseX, { damping: 50, stiffness: 50, mass: 1 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 50, mass: 1 });

  // Map 0-1 relative values strictly to CSS percentages but compress the movement scale (e.g. 40% to 60%)
  // so the spotlight doesn't stray too far from center
  const backgroundX = useTransform(springX, [0, 1], ["40%", "60%"]);
  const backgroundY = useTransform(springY, [0, 1], ["40%", "60%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-32 text-[#e2e8f0] overflow-x-clip flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10 w-full">
        {/* Left Column: Image Section */}
        <div className="w-full h-full relative">
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: imageOpacity, scale: imageScale }}
            className="w-full h-[400px] md:h-[500px] z-10 cursor-none relative overflow-hidden rounded-2xl md:rounded-none group md:sticky md:top-32"
          >
            {/* Dynamic Magnetic Vignette Portrait */}
            <motion.div
              className="w-full h-full bg-zinc-800 absolute inset-0 pointer-events-none"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: "url('/images/profile.png')",
                // Create a very smooth, wide spotlight effect connected to our subtle magnetic mouse springs
                maskImage: useTransform(
                  () =>
                    `radial-gradient(circle 250px at ${backgroundX.get()} ${backgroundY.get()}, rgba(176,38,255,0.3) 40%, transparent 100%)`,
                ),
                WebkitMaskImage: useTransform(
                  () =>
                    `radial-gradient(circle 250px at ${backgroundX.get()} ${backgroundY.get()}, rgba(176,38,255,0.3) 40%, transparent 100%)`,
                ),
              }}
            />

            {/* Dark Overlay to sink it further into the background */}
            {/* <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply pointer-events-none" /> */}
          </motion.div>
        </div>
        {/* Right Column: Text Content */}
        <motion.div style={{}} className="w-full z-20">
          <motion.h2
            style={{ y: titleY, opacity: titleOpacity, filter: blurFilter }}
            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          >
            ABOUT ME
          </motion.h2>
          <motion.a
            style={{ y: titleY }}
            href="mailto:alwineldhose7@gmail.com"
            className="text-sm md:text-base font-mono text-zinc-500 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.8)] transition-colors block mb-12 cursor-none"
          >
            alwineldhose7@gmail.com
          </motion.a>

          <div className="space-y-6 text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-xl ">
            <ScrollRevealText
              text={[
                "I am a Full-Stack Developer currently working at 2Base Technologies with over 1.5 years of professional experience building modern web applications and AI-driven platforms.",
                "I started my journey as a Software Developer Intern, where I quickly developed strong expertise in Next.js and frontend architecture by building an internal Next.js Admin Dashboard Starter Kit for the company.",
                "Since then, I have worked on multiple internal and client projects, contributing to AI platforms, enterprise dashboards, and highly interactive websites. My work ranges from frontend architecture and UI development to backend integration using Python and Laravel.",
                "I enjoy creating modern, high-performance interfaces and continuously explore new technologies such as Three.js and advanced animation frameworks to push the boundaries of web experiences.",
                "Currently, I also contribute to the official company website development, implementing both frontend and backend features.",
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 pt-8 border-t border-zinc-800 inline-block"
          >
            <p className="text-xs tracking-widest text-zinc-500 uppercase font-bold">
              Kerala, Kothamangalam
              <br />
              India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
