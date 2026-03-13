"use client";

import { motion } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";

// Helper component for animated progress bars
function ProgressBar({ label, percentage }: { label: string; percentage: number }) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase">
                    {label}
                </span>
            </div>
            <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-zinc-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Animated dot head */}
                <motion.div
                    className="absolute top-1/2 -mt-[3px] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"
                    initial={{ left: 0 }}
                    whileInView={{ left: `calc(${percentage}% - 3px)` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

export default function Resume() {
    return (
        <section id="resume" className="py-32 text-white h-auto">
                    <div className="absolute -z-10">
                <ScrollyCanvas />
<div className="bg-gradient-to-b from-black via-black/80 to-black h-full absolute w-full  top-0"/>

        </div>
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">

                    {/* Column 1: Skills & Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-10 text-white border-b border-zinc-800 pb-4 inline-block">
                            Software Skills
                        </h3>
                        <div className="mb-12">
                            <ProgressBar label="Next.js / React" percentage={95} />
                            <ProgressBar label="TypeScript" percentage={90} />
                            <ProgressBar label="Node.js" percentage={85} />
                            <ProgressBar label="FastAPI (Python)" percentage={80} />
                            <ProgressBar label="Tailwind CSS" percentage={95} />
                        </div>

                        <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-10 text-white border-b border-zinc-800 pb-4 inline-block mt-4">
                            Languages
                        </h3>
                        <div>
                            <ProgressBar label="English" percentage={90} />
                            <ProgressBar label="Malayalam" percentage={100} />
                        </div>
                    </motion.div>

                    {/* Column 2: Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-10 text-white border-b border-zinc-800 pb-4 inline-block">
                            Experience
                        </h3>

                        <div className="relative border-l border-zinc-800 pl-8 ml-3 space-y-12">
                            {/* Point 1 */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-[#050505] border-2 border-zinc-400 rounded-full -left-[38px] top-1.5" />
                                <h4 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase mb-1">
                                    Associate Software Engineer
                                </h4>
                                <div className="text-[10px] tracking-widest text-zinc-500 uppercase mb-3">
                                    2Base Technologies | Aug 2024 - Present
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                                    Optimizing Next.js SSR performance and developing full-stack features with FastAPI backends. Leading agile front-end initiatives.
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-[#050505] border-2 border-zinc-600 rounded-full -left-[38px] top-1.5" />
                                <h4 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">
                                    SE Intern
                                </h4>
                                <div className="text-[10px] tracking-widest text-zinc-600 uppercase mb-3">
                                    2Base Technologies | Feb 2024 - Jul 2024
                                </div>
                                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                                    Assisted in API integrations and mastered Next.js framework fundamentals under strict mentorship.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3: Expertise & Projects summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-10 text-white border-b border-zinc-800 pb-4 inline-block">
                            What Can I Do ?
                        </h3>
                        <div className="mb-12 space-y-3">
                            <p className="text-xs tracking-widest text-zinc-400 uppercase font-bold">
                                SSR Optimization · API Integration
                            </p>
                            <p className="text-xs tracking-widest text-zinc-400 uppercase font-bold">
                                Agile Dev · Responsive UI
                            </p>
                            <p className="text-xs tracking-widest text-zinc-400 uppercase font-bold">
                                Full-Stack Architecture
                            </p>
                        </div>

                        <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-10 text-white border-b border-zinc-800 pb-4 inline-block">
                            Key Projects
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase">Buffaload AI</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-light">Next.js Logistics Dashboard</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase">Brewman AI</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-light">Brewery Intelligence UI</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase">IC Academy</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-light">Legacy system overhaul</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
