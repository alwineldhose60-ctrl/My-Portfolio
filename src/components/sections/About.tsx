"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";

const text =
  "I am a Full-Stack Developer currently working at 2Base Technologies with over 1.5 years of professional experience building modern web applications and AI-driven platforms.";

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start"],
  });

  const words = text.split(" ");

  const y = useTransform(scrollYProgress, [0, 1], [200, 100]);

  const mouseX = useMotionValue(0);

  // Smooth "magnetic" feel
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // normalize to -0.5 → 0.5
      const x = e.clientX / innerWidth - 0.5;

      // scale intensity (keep small for subtle effect)
      mouseX.set(x * 20); // try 40–100
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative z-10"
      ref={container}
    >
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#0161a4]"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 medium pb-1 border-b border-gray-600">
            About Me
          </span>
        </div>
      </FadeIn>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          stiffness: 100,
          bounce: 0.2,
        }}
        exit={{ opacity: 0 }}
        style={{
          x: smoothX,
          y,
        }}
        className="absolute inset-0 top-24 right-0 rounded-full -z-1 w-96 h-96 translate-x-200"
      >
        <div className="absolute w-full h-full bg-[#fc7923]  rounded-full -translate-y-12 -z-3 blur-[50px]" />

        <div className="absolute w-full h-full bg-[#0161a4]  rounded-full -translate-x-12 -z-3 blur-[50px]" />

        <div className="absolute w-full h-full bg-[#fc7923]  rounded-full translate-x-12 -z-3 blur-[50px]" />
        <div className="absolute w-full h-full bg-[#0161a4]  rounded-full translate-y-12 -translate-x-12 -z-3 blur-[50px]" />
        <Image
          src="/images/alwin.jpeg"
          alt="Alwin Eldhose"
          fill
          className="object-cover hidden md:block -z-1 rounded-full border-2 border-white/30"
          priority
        />
      </motion.div>
      <div className="">
        <h2 className="text-3xl md:text-5xl medium leading-[1.2] tracking-tight flex flex-wrap gap-x-3 gap-y-2 mb-12 max-w-3xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 text-lg leading-relaxed">
          <FadeIn delay={0.2}>
            <p>
              I started my journey as a Software Developer Intern, where I
              quickly developed strong expertise in Next.js and frontend
              architecture by building an internal Next.js Admin Dashboard
              Starter Kit for the company.
            </p>
            <p className="mt-6">
              Since then, I have worked on multiple internal and client
              projects, contributing to AI platforms, enterprise dashboards, and
              highly interactive websites. My work ranges from frontend
              architecture and UI development to backend integration using
              Python and Laravel.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p>
              I enjoy creating modern, high-performance interfaces and
              continuously explore new technologies such as Three.js and
              advanced animation frameworks to push the boundaries of web
              experiences.
            </p>
            <p className="mt-6">
              Currently, I also contribute to the official company website
              development, implementing both frontend and backend features.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Word({ children, range, progress }: any) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blur = useTransform(progress, range, [10, 0]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
