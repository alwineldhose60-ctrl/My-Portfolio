"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Parallax from "../animations/Parallax";
import FadeIn from "../animations/FadeIn";
import Magnetic from "../animations/Magnetic";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background with slight grain/darkness */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 bg-[#050505]"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex flex-col items-center">
        
        {/* Background Typography (Visible on dark bg) */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap">
            FULL-STACK
          </h1>
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap lg:ml-32">
            DEVELOPER
          </h1>
        </motion.div>

        {/* Central Element / Portrait */}
        <FadeIn delay={0.2} direction="up" className="relative z-10 mt-10">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Using a placeholder for the portrait based on the prompt "keep images in public" but we don't know the image name */}
            <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
            <Image 
              src="/images/1000133219.png" 
              alt="Alwin Eldhose"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-gray-300 mb-2 font-medium">Alwin Eldhose</p>
              <h2 className="text-xl font-semibold text-white">Next.js & Modern Web UI</h2>
            </div>
          </div>
        </FadeIn>

        {/* Foreground Typography (Grayscale effect on image) */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mix-blend-color z-20"
        >
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap">
            FULL-STACK
          </h1>
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap lg:ml-32">
            DEVELOPER
          </h1>
        </motion.div>

        {/* Floating Tags */}
        <div className="absolute top-1/3 left-[5%] md:left-[10%] z-20 hidden md:block">
          <Parallax offset={-30}>
            <p className="font-mono text-xs md:text-sm text-gray-400">/ 1.5+ Years Exp.</p>
          </Parallax>
        </div>
        
        <div className="absolute top-1/4 right-[5%] md:right-[15%] z-20 hidden md:block">
          <Parallax offset={40}>
            <p className="font-mono text-xs md:text-sm text-gray-400">/ AI Driven Platforms.</p>
          </Parallax>
        </div>

        <div className="absolute bottom-1/4 left-[5%] md:left-[15%] z-20 hidden md:block">
          <Parallax offset={20}>
            <p className="font-mono text-xs md:text-sm text-gray-400">/ Modern Interactive UI.</p>
          </Parallax>
        </div>

        <div className="absolute bottom-1/3 right-[5%] md:right-[10%] z-20 hidden md:block">
          <Parallax offset={-50}>
            <p className="font-mono text-xs md:text-sm text-gray-400">/ Next.js Expert.</p>
          </Parallax>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 z-20"
      >
        <Magnetic strength={20}>
          <Link href="#about" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300">
            <ArrowDown className="w-5 h-5" />
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}
