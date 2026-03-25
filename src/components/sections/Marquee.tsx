"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Marquee() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={container} 
      className="py-10 md:py-20 overflow-hidden relative z-10"
    >
      <div className="pointer-events-none opacity-5 select-none space-y-4">
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-10">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[12vw] font-bold uppercase">Continuous Evolving Always Building</span>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-10">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[12vw] font-bold uppercase">Scalable High Performance Modern UI</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
