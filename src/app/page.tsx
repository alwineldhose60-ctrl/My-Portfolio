import Hero from "@/components/sections/Hero2";
import Hero1 from "@/components/sections/Hero";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Philosophy from "@/components/sections/Philosophy";
import Marquee from "@/components/sections/Marquee";
import Contact from "@/components/sections/Contact";
import Banner from "@/components/sections/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full bg-black overflow-hidden selection:bg-white/20">
      <Hero />
      {/* <Banner/> */}
      {/* <Hero1/> */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <Marquee />
      <Contact />
    </main>
  );
}
