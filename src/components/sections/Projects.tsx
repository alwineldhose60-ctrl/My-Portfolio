"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";

const projects = [
  {
    title: "AI Resume Evaluation Platform",
    role: "Frontend Developer",
    description: "An AI-powered system that evaluates resumes and helps streamline recruitment processes. Built the complete frontend and integrated AI API responses into an interactive UI.",
    tech: ["Next.js", "AI APIs", "Tailwind CSS"],
    color: "from-blue-900/20 to-black"
  },
  {
    title: "AI Training Chatbot & Mock Interview",
    role: "Full-Stack Contributor",
    description: "An internal AI platform designed to help train candidates through conversational AI and simulated interviews. Features an AI chatbot interface and feedback system.",
    tech: ["Next.js", "Python", "AI APIs"],
    color: "from-purple-900/20 to-black"
  },
  {
    title: "Logistics Dashboard System",
    role: "UI Engineer",
    description: "Interactive dashboard for managing logistics fleet operations. Designed and built modern data visualization interfaces and implemented a chatbot UI for system assistance.",
    tech: ["Next.js", "Data Visualization", "Tailwind CSS"],
    color: "from-emerald-900/20 to-black"
  },
  {
    title: "ADNH Interactive Website",
    role: "Frontend Animator",
    description: "A modern marketing website built with advanced animation systems. Features smooth scroll animations, interactive sections, and a performance-optimized animation architecture.",
    tech: ["Next.js", "Framer Motion", "Lenis"],
    color: "from-orange-900/20 to-black"
  }
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative z-10 border-t border-white/5" ref={container}>
      <FadeIn>
        <div className="flex items-center gap-4 mb-24">
          <div className="h-px w-12 bg-white/30"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
            Selected Work
          </span>
        </div>
      </FadeIn>

      <div className="relative flex flex-col gap-12 md:gap-24 w-full mt-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track this specific card's position relative to the viewport
  const { scrollYProgress: cardY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Scale down when entering (0), scale to normal in middle (0.3-0.7), scale down when leaving (1)
  const scale = useTransform(cardY, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  // Fade in at the edges, stay fully visible in the middle
  const opacity = useTransform(cardY, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center">
      <motion.div
         style={{ scale, opacity }}
         className={`relative w-full h-[500px] md:h-[600px] rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-gradient-to-br ${project.color} backdrop-blur-xl`}
      >
        <div className="max-w-3xl">
          <p className="text-gray-400 font-mono mb-4 text-sm md:text-base">{project.role}</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {project.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string, idx: number) => (
            <span key={idx} className="px-4 py-2 rounded-full border border-white/20 bg-black/30 text-xs md:text-sm font-medium text-white">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
