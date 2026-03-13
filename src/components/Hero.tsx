"use client";

import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CanvasVideo from "./CanvasVideo";

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
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none bg-black"
      >
        <CanvasVideo src="/images/VN20260313_190417.mp4" className="opacity-80 mix-blend-screen" />
        
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full px-6 lg:px-24 h-full flex items-center">
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center justify-center w-full h-full pt-20"
        >
          {/* Main Typography */}
          <div className="w-full text-center overflow-hidden flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h2 className="text-sm md:text-xl font-light tracking-[0.4em] text-zinc-300/80 mb-6 font-mono uppercase">
                Creative Developer & Animator
              </h2>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-black tracking-[0.1em] leading-[0.85] uppercase text-white drop-shadow-2xl"
              style={{
                textShadow: "0px 10px 40px rgba(0,0,0,0.8)"
              }}
            >
              ALWIN<br/>ELDHOSE
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="mt-8 md:mt-12 text-sm md:text-base text-zinc-400 font-light tracking-widest uppercase max-w-xl text-center leading-relaxed"
            >
              Crafting immersive digital experiences and high-end interactive storytelling.
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 mt-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-white text-black text-sm font-bold tracking-[0.2em] uppercase overflow-hidden cursor-none hover:scale-105 transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Explore Work
              </span>
            </a>
            <a
              href="#resume"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-500 cursor-none backdrop-blur-sm"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Layout Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-0 right-0 w-full px-6 lg:px-24 flex justify-between items-end z-20 pointer-events-none"
      >
        {/* Social Links */}
        <div className="flex flex-col gap-6 pointer-events-auto">
          {["Bē", "In", "Ig", "X"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="text-zinc-500 hover:text-white font-medium text-xs tracking-widest transition-colors cursor-none hover:scale-110 transform duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-4 text-zinc-500 pb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono [writing-mode:vertical-lr] rotate-180">
            Scroll to explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-t from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
