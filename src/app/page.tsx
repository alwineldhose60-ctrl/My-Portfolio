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
        <Navigation />
        <Hero />
        
        <About />

        <Resume />

        {/* Simple Footer */}
        <footer className="py-8 bg-black/50 backdrop-blur-md text-center border-t border-white/5 relative z-10 transition-colors">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Alwin Eldhose. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}
