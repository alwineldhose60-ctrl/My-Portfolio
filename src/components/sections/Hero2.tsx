"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-0, 150]);

  const mouseX = useMotionValue(0);

  // Smooth "magnetic" feel
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // normalize to -0.5 → 0.5
      const x = e.clientX / innerWidth - 0.5;

      // scale intensity (keep small for subtle effect)
      mouseX.set(x * 80); // try 40–100
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const combinedX = useTransform(
    [x, smoothX],
    ([scrollX, mouseX]) => (scrollX as any) + mouseX,
  );

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      <motion.div
        initial={{ x: -300, opacity: 0, scale: 0.8 }}
        animate={{ x: -100, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // smooth easeOutExpo feel
        }}
        style={{ x }}
        className="absolute w-1/4 h-1/2 flex items-center justify-center rounded-full z-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full bg-blue-900 blur-[80px] rounded-full"
        />

        <motion.div
          animate={{
            y: [30, 10, 40, 20, 30],
            opacity: [0.6, 0.8, 0.7, 0.85, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ x: combinedX }}
          className="absolute w-full h-full bg-pink-900 blur-[80px] rounded-full translate-y-8"
        />
        <motion.div
          animate={{
            y: [30, 10, 40, 20, 30],
            opacity: [0.6, 0.8, 0.7, 0.85, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ x: combinedX }}
          className="absolute w-full h-full bg-pink-900 blur-[80px] rounded-full translate-x-8"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full bg-blue-900 blur-[80px] rounded-full"
        />
      </motion.div>

      <motion.div style={{ y }} className="text-white z-1 relative">
        <div className="overflow-hidden pb-4 -mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-[120px] font-bold tracking-widest font-"
          >
            PORTFOLIO
          </motion.h1>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
              },
            },
          }}
          className="flex flex-col md:flex-row md:items-center gap-4 justify-between mt-8"
        >
          <div className="overflow-hidden pb-1 -mb-1">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase text-right"
            >
              <span className="text-white/20">/</span> Next.js Expert.
            </motion.p>
          </div>
          <div className="overflow-hidden pb-1 -mb-1">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase"
            >
              <span className="text-white/20">/</span> Website Design.
            </motion.p>
          </div>

          <div className="overflow-hidden pb-1 -mb-1">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase"
            >
              <span className="text-white/20">/</span> AI Solutions.
            </motion.p>
          </div>

          <div className="overflow-hidden pb-1 -mb-1">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase text-right"
            >
              <span className="text-white/20">/</span> UI Architecture.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-20">
        {/* Top Titles */}
        <div className="flex justify-end items-start w-full pe-4">
          <motion.div
            style={{ opacity }}
            className="text-right max-w-[150px] md:max-w-[300px] pt-24 md:pt-8"
          >
            <p className="text-gray-300 text-sm md:text-2xl leading-[1.1] font-medium tracking-tight uppercase opacity-60">
              Build
              <br />
              Interactive <br />
              Modern <br /> Scalable
              <br /> UI's
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-16 mx-auto w-full flex justify-center gap-4">
        <div className="w-px h-auto bg-linear-to-b from-gray-500 to-transaparent my-1" />
        <p className="text-gray-500 text-xs tracking-widest font-mono uppercase font-thin m-0! ">
          scroll
          <br />
          down
        </p>
      </div>

    </section>
  );
}
