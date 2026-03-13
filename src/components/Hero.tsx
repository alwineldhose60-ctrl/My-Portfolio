"use client";

import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticParticles from "./MagneticParticles";
import Image from "next/image";

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
      {/* <MagneticParticles /> */}
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
<div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-t from-[#050505] to-[#050505]/0">
  <Image
    src="/images/horo-bg2.png"
    alt="Alwin Eldhose"
    width={300}
    height={300}
    priority
    className="w-100 h-auto"
  />
</div>
      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center mt-44"
        >
          {/* Main Typography */}
          <div className="w-full max-w-3xl overflow-hidden text-start">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-light tracking-[0.2em] text-zinc-400 mb-2 font-mono uppercase"
            >
              Hi I'm
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-6xl md:text-[160px] font-black tracking-[0.3em] leading-none mb-4 uppercase -z-10 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
            >
              ALWIN
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            {/* <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="text-lg md:text-2xl tracking-[0.3em] font-medium text-zinc-300 uppercase"
            >
              Next.js Specialist
            </motion.p> */}
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
              className="px-8 py-3 rounded-full border border-primary text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-[#050505] transition-all duration-300 cursor-none shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-secondary text-sm font-bold tracking-widest text-zinc-300 uppercase hover:bg-secondary hover:text-[#050505] transition-all duration-300 cursor-none shadow-[0_0_15px_rgba(176,38,255,0.3)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] text-white"
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
