"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Parallax from "../animations/Parallax";
import FadeIn from "../animations/FadeIn";
import Magnetic from "../animations/Magnetic";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      <Image
        src="/images/alwin_eldhose.png"
        alt="Alwin Eldhose"
        fill
        className="object-contain opacity-50"
        priority
      />
<div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"/>
      {/* 2. Central Image Layer (Fills Section) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4 py-24 md:p-12 lg:p-20"></div>

      {/* 3. Typography Layer (Top-most) */}
      {/* We use mix-blend-color for the grayscale effect on the image area */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-20">

      </div>

      {/* 4. Floating Slash Labels (Top-most) */}
      <div className="absolute inset-0 pointer-events-none z-40 hidden md:block">
        <div className="absolute top-[40%] left-[5%] lg:left-[12%]">
          <Parallax offset={-40}>
            <p className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase">
              <span className="text-white/20">/</span> Website Design.
            </p>
          </Parallax>
        </div>
        <div className="absolute top-[60%] left-[8%] lg:left-[18%]">
          <Parallax offset={30}>
            <p className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase">
              <span className="text-white/20">/</span> AI Solutions.
            </p>
          </Parallax>
        </div>

        <div className="absolute top-[45%] right-[5%] lg:right-[12%]">
          <Parallax offset={50}>
            <p className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase text-right">
              <span className="text-white/20">/</span> UI Architecture.
            </p>
          </Parallax>
        </div>
        <div className="absolute top-[65%] right-[8%] lg:right-[18%]">
          <Parallax offset={-25}>
            <p className="font-semibold text-xs lg:text-sm text-white/50 flex items-center gap-2 tracking-widest uppercase text-right">
              <span className="text-white/20">/</span> Next.js Expert.
            </p>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
