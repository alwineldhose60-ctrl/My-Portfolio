import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] scroll-smooth text-white">
      <CustomCursor />
      {/* Set main content above the particles background */}
      <div className="relative z-10">
        <Hero />
        <TechMarquee baseVelocity={-0.8} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
