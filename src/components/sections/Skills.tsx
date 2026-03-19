"use client";

import FadeIn from "../animations/FadeIn";

const skills = {
  "Frontend": ["Next.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  "Interactive UI": ["Framer Motion", "Lenis Smooth Scroll", "Scroll Based Animations", "Modern UI Transitions"],
  "Backend & APIs": ["Python", "REST API Integration", "Next.js API Routes", "Laravel", "Blade"],
  "Currently Exploring": ["Three.js", "WebGL", "3D Web Experiences", "AI Tool Integration"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
            Skills & Expertise
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gray-500 font-mono text-sm leading-none">0{index + 1}</span>
                {category}
              </h3>
            </FadeIn>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, sIndex) => (
                <FadeIn key={sIndex} delay={0.1 + (sIndex * 0.05)} direction="up">
                  <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default">
                    {skill}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
