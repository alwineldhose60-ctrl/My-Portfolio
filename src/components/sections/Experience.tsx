"use client";

import FadeIn from "../animations/FadeIn";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "2Base Technologies",
    date: "2024 — Present",
    focus: "Building scalable Next.js applications, AI platforms, and modern UI systems.",
    highlights: [
      {
        name: "Next.js Admin Dashboard Starter",
        details: "Built an internal Next.js admin dashboard starter template. Designed reusable UI architecture that accelerated development across multiple internal tools."
      },
      {
        name: "AI Platform – Evolve",
        details: "Developed the complete frontend UI using Next.js and built small Python backend modules. Contributed to AI Resume Evaluation Platform, AI Training Chatbot, Mock Interview Platform, and Presales AI System."
      },
      {
        name: "Client AI & Enterprise Projects",
        details: "Worked on two confidential AI-powered enterprise platforms. Developed interactive dashboards for Logistics Fleet Management and Brewery Operations Platform."
      },
      {
        name: "ADNH Interactive Website",
        details: "Built a highly interactive Next.js website implementing advanced scroll-based animations using Framer Motion and Lenis Smooth Scroll."
      },
      {
        name: "IC Academy & Internal Website",
        details: "Contributed to a Laravel + Blade application with a video player and learning features. Implemented case studies, UI improvements, and feature updates for the official 2Base Technologies website."
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
            Experience
          </span>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-20">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Left Column: Title & Dates */}
            <FadeIn delay={0.1} className="lg:col-span-1 lg:sticky lg:top-32 h-fit">
              <p className="text-gray-400 font-mono text-sm mb-2">{exp.date}</p>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
              <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
            </FadeIn>

            {/* Right Column: Details */}
            <div className="lg:col-span-3 pb-8">
              <FadeIn delay={0.2}>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                  {exp.focus}
                </p>
              </FadeIn>

              <div className="space-y-12">
                {exp.highlights.map((highlight, hIndex) => (
                  <FadeIn key={hIndex} delay={0.2 + (hIndex * 0.1)} className="group">
                    <div className="flex gap-4">
                      <div className="w-1 h-full min-h-[40px] bg-white/10 rounded-full group-hover:bg-white/50 transition-colors mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{highlight.name}</h4>
                        <p className="text-gray-400 leading-relaxed">{highlight.details}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
