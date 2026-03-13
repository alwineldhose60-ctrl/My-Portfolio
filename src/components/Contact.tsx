"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react"; // Only if we want to use lucide icons, but let's use standard text arrows

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-white relative z-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Philosophy & Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-[#e2e8f0] uppercase mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text inline-block">
                My Development Philosophy
              </h3>
              <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                I focus on building modern, scalable, and engaging web experiences. 
                My goal is not just to build applications, but to create interfaces that feel fast, intuitive, and visually compelling.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-widest text-zinc-300 uppercase mb-6">
                Learning & Growth
              </h3>
              <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed mb-6">
                I strongly believe in continuously evolving as a developer. Along with my professional work, I actively explore emerging technologies and advanced frontend techniques.
                Currently exploring:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                  <span className="text-primary mt-0.5">▹</span> Three.js for 3D Web Development
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                  <span className="text-secondary mt-0.5">▹</span> Advanced Web Animations
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                  <span className="text-primary mt-0.5">▹</span> High-performance UI architectures
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                  <span className="text-secondary mt-0.5">▹</span> AI integrations in modern web apps
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: CTA & Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">
              Let's Build <br/>
              <span className="text-zinc-500">Something Great</span>
            </h2>
            
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-12 max-w-md">
              I'm always open to discussing new opportunities, innovative projects, and collaborations.
            </p>

            <div className="flex flex-col space-y-6">
              <a 
                href="mailto:alwineldhose7@gmail.com"
                className="group flex items-center justify-between p-6 rounded-2xl border border-zinc-800 hover:border-primary transition-all duration-300 bg-zinc-900/30 hover:bg-zinc-800/50 cursor-none"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl">📧</span>
                  <span className="text-lg font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">Email Me</span>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  ↗
                </span>
              </a>

              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border border-zinc-800 hover:border-secondary transition-all duration-300 bg-zinc-900/30 hover:bg-zinc-800/50 cursor-none"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl">💼</span>
                  <span className="text-lg font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">LinkedIn</span>
                </div>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  ↗
                </span>
              </a>

              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border border-zinc-800 hover:border-zinc-400 transition-all duration-300 bg-zinc-900/30 hover:bg-zinc-800/50 cursor-none"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl">💻</span>
                  <span className="text-lg font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">GitHub</span>
                </div>
                <span className="text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
