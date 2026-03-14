"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 text-white bg-gradient-to-t from-[#0A0A0A] to-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left Column: Learning & Philosophy */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-secondary drop-shadow-[0_0_15px_rgba(176,38,255,0.5)] mb-6 border-b border-zinc-800 pb-4 inline-block">
                Learning & Growth
              </h3>
              <p className="text-zinc-300 font-light leading-relaxed max-w-lg mb-8 text-sm md:text-base">
                I strongly believe in continuously evolving as a developer. Along with my professional work, I actively explore emerging technologies and advanced frontend techniques.
              </p>
              
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                <h4 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase mb-4">
                  Currently Exploring
                </h4>
                <ul className="space-y-3">
                  {[
                    "Three.js for 3D Web Development",
                    "Advanced Web Animations",
                    "High-performance UI architectures",
                    "AI integrations in modern web apps"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(176,38,255,0.6)]" />
                      <span className="text-xs md:text-sm text-zinc-400 font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-zinc-300 font-light leading-relaxed max-w-lg text-sm md:text-base border-l-2 border-primary pl-6">
                I focus on building modern, scalable, and engaging web experiences. 
                My goal is not just to build applications, but to create interfaces that feel fast, intuitive, and visually compelling.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6">
              Let's Build<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Something Great
              </span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-md mb-12 text-sm md:text-base">
              I'm always open to discussing new opportunities, innovative projects, and collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:alwineldhose7@gmail.com"
                className="group relative px-8 py-4 bg-white text-[#050505] font-bold text-sm tracking-widest uppercase overflow-hidden cursor-none"
              >
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Email Me
                </span>
              </a>
              
              <div className="flex items-center gap-6">
                <a 
                  href="https://linkedin.com/in/alwineldhose" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors cursor-none hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] shadow-transparent rounded-full p-2"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/alwineldhose60-ctrl" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors cursor-none hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] shadow-transparent rounded-full p-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Alwin Eldhose. All rights reserved.
          </p>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            Built with Next.js <span className="w-1 h-1 bg-primary rounded-full animate-pulse" /> Hosted on Vercel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
