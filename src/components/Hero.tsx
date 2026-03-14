"use client";

import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticParticles from "./MagneticParticles";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
  const blur = useTransform(scrollYProgress, [0, 0.8], [0, 20]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full flex flex-col justify-center items-center overflow-hidden text-white pt-20"
    >
      <div className="w-full h-screen relative">
        {/* <MagneticParticles /> */}
        {/* Background Parallax Layer */}

        <div className="absolute top-0 inset-0 flex items-end lg:items-end justify-center lg:justify-end lg:pr-24 bg-gradient-to-t from-[#050505] to-[#050505]/0 pointer-events-none z-0">
          <Image
            src="/images/horo-bg2.png"
            alt="Alwin Eldhose"
            width={600}
            height={600}
            priority
            className="w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto object-contain opacity-40 lg:opacity-100"
          />
        </div>
        
        {/* Foreground Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-24 h-full">
          <motion.div
            style={{ y: textY, opacity, filter: `blur(${blur}px)` }}
            className="flex flex-col items-start w-full lg:w-3/5"
          >
            {/* Main Typography */}
            <div className="w-full max-w-4xl overflow-hidden text-left space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-3xl font-light tracking-[0.2kem] text-zinc-400 font-orbitron  uppercase"
              >
                Hi I'm
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] font-black tracking-[0.2em] leading-none my-2 uppercase -z-10 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
              >
                ALWIN
              </motion.h1>
            </div>
            
            <div className="overflow-hidden max-w-4xl mt-2 mb-6">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="text-xl md:text-2xl tracking-[0.1em] font-bold text-white uppercase text-left w-full"
              >
                Crafting Modern Web Experiences with Next.js
              </motion.h3>
            </div>

            <div className="overflow-hidden max-w-xl lg:max-w-2xl text-left mb-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                className="text-sm md:text-base font-light text-zinc-400 leading-relaxed text-left"
              >
                Full-stack developer with 1.5+ years of professional experience building scalable web applications, AI-powered platforms, and interactive web interfaces. I specialize in Next.js, modern frontend architecture, and high-performance UI systems, with experience integrating AI tools, Python backends, and complex dashboards.
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12 text-left"
            >
              {[
                "1.5+ Years Industry Experience",
                "Specialized in Next.js & Interactive UI",
                "Experience with AI-Driven Platforms",
                "Building Modern Web Experiences",
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)] flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium tracking-wider uppercase">{highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-wrap flex-row gap-4 w-full max-w-3xl"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary text-xs font-bold tracking-widest text-primary uppercase hover:bg-primary hover:text-[#050505] transition-all duration-300 cursor-none shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-secondary text-xs font-bold tracking-widest text-secondary uppercase hover:bg-secondary hover:text-[#050505] transition-all duration-300 cursor-none shadow-[0_0_15px_rgba(176,38,255,0.3)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full border border-zinc-500 text-xs font-bold tracking-widest text-zinc-300 uppercase hover:bg-zinc-100 hover:text-[#050505] transition-all duration-300 cursor-none"
              >
                Download Resume
              </a>
            </motion.div>
            
            {/* Bottom Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-start gap-6 mt-12 w-full max-w-3xl"
            >
              {[
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/alwin-eldhose-97a892254", 
                  icon: <FaLinkedin size={24} />,
                  hoverColor: "hover:text-[#0a66c2]",
                  hoverShadow: "hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.8)]"
                },
                { 
                  name: "GitHub", 
                  url: "https://github.com/alwineldhose60-ctrl", 
                  icon: <FaGithub size={24} />,
                  hoverColor: "hover:text-white",
                  hoverShadow: "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                },
                { 
                  name: "Instagram", 
                  url: "https://www.instagram.com/al_w_i_n_?igsh=aXZ3cXBlYmJnaDhi", 
                  icon: (
                    <div className="relative w-6 h-6">
                      {/* Base Icon */}
                      <FaInstagram size={24} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />
                      {/* Gradient Icon Wrapper */}
                      <svg width="0" height="0" className="absolute">
                        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </svg>
                      <FaInstagram 
                        size={24} 
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                        style={{ fill: "url(#ig-grad)" }} 
                      />
                    </div>
                  ),
                  hoverColor: "", // Color is handled by the crossfaded SVG fill
                  hoverShadow: "hover:drop-shadow-[0_0_10px_rgba(220,39,67,0.8)]"
                },
                { 
                  name: "Gmail", 
                  url: "mailto:alwineldhose7@gmail.com", 
                  icon: <SiGmail size={24} />,
                  hoverColor: "hover:text-[#EA4335]",
                  hoverShadow: "hover:drop-shadow-[0_0_10px_rgba(234,67,53,0.8)]"
                },
                { 
                  name: "Phone", 
                  url: "tel:+919562604824", // Placeholder phone number
                  icon: <FaPhone size={22} />,
                  hoverColor: "hover:text-[#25D366]", // WhatsApp/Phone green
                  hoverShadow: "hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]"
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-zinc-500 font-bold text-lg transition-all duration-300 cursor-none relative group ${social.hoverColor} ${social.hoverShadow}`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">
                     {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-gradient-to-t from-[#050505] pointer-events-none to-[#050505]/0 absolute bottom-0 h-32 w-full z-20" />
      </div>
    </section>
  );
}
