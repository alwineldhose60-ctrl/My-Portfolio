"use client";

import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

const exploring = [
  "Three.js for 3D Web Development",
  "Advanced Web Animations",
  "High-performance UI architectures",
  "AI integrations in modern web apps"
];

export default function Philosophy() {
  return (
    <section 
      className="py-32 px-4 md:px-10 overflow-hidden relative z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
              Philosophy & Growth
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              My goal is to create interfaces that feel fast, intuitive, and visually compelling.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              I focus on building modern, scalable, and engaging web experiences. 
              My goal is not just to build applications, but to craft digital environments 
              that leave a lasting impression.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-white uppercase tracking-wider text-opacity-50">Currently Exploring</h3>
              <ul className="space-y-4">
                {exploring.map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10, color: "#fff" }}
                    className="flex items-center gap-3 text-lg text-gray-400 border-b border-white/5 pb-2 transition-colors cursor-default"
                  >
                    <span className="text-white/20 font-mono text-sm">0{i + 1}</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
