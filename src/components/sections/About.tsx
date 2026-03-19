"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../animations/FadeIn";

const text = "I am a Full-Stack Developer currently working at 2Base Technologies with over 1.5 years of professional experience building modern web applications and AI-driven platforms.";

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <section id="about" className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative z-10" ref={container}>
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
            About Me
          </span>
        </div>
      </FadeIn>

      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight flex flex-wrap gap-x-3 gap-y-2 mb-12">
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
              I started my journey as a Software Developer Intern, where I quickly developed strong expertise in Next.js and frontend architecture by building an internal Next.js Admin Dashboard Starter Kit for the company.
            </p>
            <p className="mt-6">
              Since then, I have worked on multiple internal and client projects, contributing to AI platforms, enterprise dashboards, and highly interactive websites. My work ranges from frontend architecture and UI development to backend integration using Python and Laravel.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p>
              I enjoy creating modern, high-performance interfaces and continuously explore new technologies such as Three.js and advanced animation frameworks to push the boundaries of web experiences.
            </p>
            <p className="mt-6">
              Currently, I also contribute to the official company website development, implementing both frontend and backend features.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Word({ children, range, progress }: any) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.style style={{ opacity }}>{children}</motion.style>
    </span>
  );
}
