"use client";

import FadeIn from "../animations/FadeIn";
import Magnetic from "../animations/Magnetic";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { SVG } from "./SVG";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative z-10 border-t border-white/5 min-h-[80vh] flex flex-col justify-center">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column Text */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="uppercase tracking-widest text-sm text-gray-400 font-medium pb-1 border-b border-gray-600">
                Contact
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              Let&apos;s build <br/> something great.
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-10">
              I focus on building modern, scalable, and engaging web experiences. My goal is not just to build applications, but to create interfaces that feel fast, intuitive, and visually compelling.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex gap-6">
            <Magnetic>
              <Link href="mailto:alwineldhose7@gmail.com" className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                Email
                <MoveUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="https://www.linkedin.com/in/alwin-eldhose-97a892254" className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                LinkedIn
                <MoveUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </Magnetic>
            {/* <Magnetic>
              <Link href="#" className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                GitHub
                <MoveUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </Magnetic> */}
          </FadeIn>
        </div>
<SVG/>
        {/* Right Column Huge CTA */}
        <div className="flex justify-center lg:justify-end">
          <FadeIn delay={0.3}>
            <Magnetic strength={30}>
              <Link 
                href="mailto:alwineldhose7@gmail.com"
                className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full bg-white text-black text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-500 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gray-200 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
                <span className="relative z-10">Get in touch</span>
              </Link>
            </Magnetic>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
