"use client";

import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticParticles from "./MagneticParticles";

export default function Hero() {
  const ref = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full flex items-center overflow-hidden text-white"
    >
      <MagneticParticles />
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        {/* Abstract cinematic dark background texture placeholder */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#3f3f46_0%,_#050505_100%)]" />
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-start"
        >
          {/* Main Typography */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-light tracking-[0.2em] text-zinc-400 mb-2 font-mono uppercase"
            >
              Alwin
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase"
            >
              Eldhose
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="text-lg md:text-2xl tracking-[0.3em] font-medium text-zinc-300 uppercase"
            >
              Next.js Specialist
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center gap-6 mt-12"
          >
            <a
              href="#resume"
              className="px-8 py-3 rounded-full border border-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-none"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-zinc-600 text-sm font-bold tracking-widest text-zinc-400 uppercase hover:border-white hover:text-white transition-all duration-300 cursor-none"
            >
              Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 lg:left-24 flex items-center space-x-6 z-20"
      >
        {["Bē", "f", "in", "IG", "P"].map((icon) => (
          <a
            key={icon}
            href="#"
            className="text-zinc-500 hover:text-white font-bold text-lg transition-colors cursor-none"
          >
            {icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
