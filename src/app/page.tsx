import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import CustomCursor from "@/components/CustomCursor";
import ScrollyCanvas from "@/components/ScrollyCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] scroll-smooth text-white">
      <CustomCursor />
      {/* Set main content above the particles background */}
      <div className="relative z-10">
        <Hero />
        
        <About />

        <Resume />
      </div>
    </main>
  );
}
