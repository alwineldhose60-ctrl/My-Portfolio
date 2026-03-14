"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "2Base Technologies",
    period: "2024 — Present",
    description: "Working as a Full-Stack Developer contributing to internal products, AI platforms, and client applications. My primary focus is building scalable Next.js applications, interactive dashboards, and modern UI systems.",
    contributions: [
      {
        title: "Next.js Admin Dashboard Starter",
        points: [
          "Built an internal Next.js admin dashboard starter template",
          "Designed reusable UI architecture for company projects",
          "Helped accelerate development across multiple internal tools",
        ]
      },
      {
        title: "AI Platform – Evolve",
        points: [
          "Developed the complete frontend UI using Next.js",
          "Built small Python backend modules",
          "Contributed to key systems: AI Resume Evaluation, AI Training Chatbot, Mock Interview Platform, Presales AI System",
        ]
      },
      {
        title: "Client AI Projects",
        points: [
          "Worked on two confidential AI-powered enterprise platforms",
          "Developed interactive dashboards for logistics systems",
          "Implemented AI chatbot interfaces",
          "Built modern UI systems for Logistics Fleet Management & Brewery Operations Platform",
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 text-white overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-4"></div>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#050505] border-2 border-primary rounded-full -left-[9px] top-2 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#e2e8f0]">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono tracking-widest text-secondary uppercase drop-shadow-[0_0_8px_rgba(176,38,255,0.6)]">
                  {exp.company}
                </span>
                <span className="text-sm tracking-widest text-zinc-500 hidden md:block">•</span>
                <span className="text-sm font-light tracking-widest text-zinc-400">
                  {exp.period}
                </span>
              </div>

              <p className="text-zinc-300 font-light leading-relaxed max-w-3xl mb-12 text-sm md:text-base">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {exp.contributions.map((contribution, cIndex) => (
                  <motion.div 
                    key={cIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 + (cIndex * 0.2) }}
                    className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                  >
                    <h4 className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-4">
                      {contribution.title}
                    </h4>
                    <ul className="space-y-3">
                      {contribution.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(176,38,255,0.6)]" />
                          <span className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
