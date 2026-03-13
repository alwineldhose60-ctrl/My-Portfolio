"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-[#050505]/80 backdrop-blur-md py-4 border-primary/20 shadow-[0_4px_30px_rgba(0,255,255,0.1)]" : "bg-transparent py-8 border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Left Side Links */}
        <div className="flex items-center space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Resume", id: "resume" },
            { name: "Portfolio", id: "projects" }
          ].map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-xs md:text-sm font-semibold tracking-wide text-zinc-400 hover:text-primary transition-colors uppercase hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Info */}
        <div className="hidden md:flex items-center text-zinc-400 text-sm font-mono transition-colors hover:text-secondary cursor-none hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]">
          📱 956-260-4824
        </div>
      </div>
    </motion.nav>
  );
}
