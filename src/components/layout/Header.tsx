"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../animations/Magnetic";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-10 flex justify-between items-center mix-blend-difference">
      <div className="font-bold text-xl tracking-tight">
        <Magnetic>
          <Link href="/">Alwin.E</Link>
        </Magnetic>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Magnetic><Link href="#about" className="hover:text-white transition-colors">About me</Link></Magnetic>
        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
        <Magnetic><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></Magnetic>
        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
        <Magnetic><Link href="#projects" className="hover:text-white transition-colors">Work</Link></Magnetic>
      </nav>

      <div className="flex items-center gap-4">
        <Magnetic>
          <Link 
            href="#contact" 
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm text-white"
          >
            <span>Let&apos;s talk!</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </Magnetic>
      </div>
    </header>
  );
}
