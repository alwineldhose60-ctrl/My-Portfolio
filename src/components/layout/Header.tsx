"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../animations/Magnetic";

export default function Header() {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("hasLoaded")) {
      // eslint-disable-next-line  
      setLogoVisible(true);
    } else {
      // Sync with preloader completion time
      const timer = setTimeout(() => {
        setLogoVisible(true);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setAtTop(currentScrollY < 10);

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setShow(false);
      } else {
        // scrolling up → show
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 px-10 py-6 flex justify-between items-center transition-all duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}
      ${atTop ? "bg-transparent" : "bg-black/10 backdrop-blur-md"}
      `}
    >
      <div className={`font-bold text-xl tracking-tight transition-opacity duration-500 ${logoVisible ? "opacity-100" : "opacity-0"}`}>
        <Magnetic>
          <Link href="/">Alwin.E</Link>
        </Magnetic>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="#about" className="hover:text-white transition-colors">About me</Link>
        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
        <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
        <Link href="#projects" className="hover:text-white transition-colors">Work</Link>
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