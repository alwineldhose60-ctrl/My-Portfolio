"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Resume Evaluation Platform",
    description: "An AI-powered system that evaluates resumes and helps streamline recruitment processes.",
    roleOrFeatures: "Key Contributions",
    points: [
      "Built full frontend using Next.js",
      "Developed UI for AI feedback results",
      "Integrated AI API responses into interactive UI"
    ],
    tech: ["Next.js", "React", "AI APIs"]
  },
  {
    title: "AI Training Chatbot & Mock Interview Platform",
    description: "An internal AI platform designed to help train candidates through conversational AI and simulated interviews.",
    roleOrFeatures: "Features",
    points: [
      "AI chatbot interface",
      "Interview simulation UI",
      "AI feedback system"
    ],
    tech: ["Next.js", "Python", "AI APIs"]
  },
  {
    title: "Logistics Dashboard System",
    description: "Interactive dashboard for managing logistics fleet operations.",
    roleOrFeatures: "My Role",
    points: [
      "Designed and built modern dashboard UI",
      "Developed data visualisation interfaces",
      "Implemented chatbot UI for system assistance"
    ],
    tech: ["Next.js", "React", "Frontend Data Viz"]
  },
  {
    title: "ADNH Interactive Website",
    description: "A modern marketing website built with advanced animation systems.",
    roleOrFeatures: "Highlights",
    points: [
      "Smooth scroll animations",
      "Interactive sections",
      "Performance-optimized animation architecture"
    ],
    tech: ["Next.js", "Framer Motion", "Lenis"]
  },
  {
    title: "2Base Technologies Website",
    description: "Contributing to the official company website.",
    roleOrFeatures: "Work Done",
    points: [
      "Case study development",
      "UI improvements",
      "Feature implementations",
      "Backend integrations"
    ],
    tech: ["Next.js", "React", "Backend APIs"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 text-white bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-24">
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col md:items-end text-right"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-primary to-transparent md:from-primary mt-4 self-end"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
              className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-zinc-700 hover:bg-[#0c0c0c] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#e2e8f0] mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm md:text-base mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                    {project.roleOrFeatures}
                  </h4>
                  <ul className="space-y-3">
                    {project.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-0.5 shadow-[0_0_8px_rgba(0,255,255,0.8)]">▹</span>
                        <span className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-zinc-900 group-hover:border-zinc-800 transition-colors">
                  {project.tech.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1 bg-zinc-900 text-zinc-400 text-[10px] md:text-xs font-mono uppercase tracking-wider rounded-md border border-zinc-800 group-hover:border-transparent group-hover:text-secondary transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
