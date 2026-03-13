"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    items: ["Next.js", "React", "JavaScript / TypeScript", "HTML5 / CSS3", "Tailwind CSS", "Responsive UI Design"]
  },
  {
    category: "Animation & Interactive UI",
    items: ["Framer Motion", "Lenis Smooth Scroll", "Scroll Based Animations", "Modern UI Transitions"]
  },
  {
    category: "Backend & APIs",
    items: ["Python", "REST API Integration", "Basic Backend Development"]
  },
  {
    category: "Other Technologies",
    items: ["Laravel", "Blade", "Git", "AI Tool Integration"]
  },
  {
    category: "Currently Exploring",
    items: ["Three.js", "WebGL Based Interfaces", "3D Web Experiences"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 text-white bg-gradient-to-b from-[#050505] to-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col md:items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-secondary drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent md:to-secondary mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: groupIndex * 0.15 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,38,255,0.1)]"
            >
              <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-8 text-white border-b border-zinc-700/50 pb-4 inline-block">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-4">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (itemIndex * 0.1) }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors shadow-none group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                    <span className="text-sm md:text-base text-zinc-400 group-hover:text-white font-light tracking-wide transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
