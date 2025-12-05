"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url(/assets/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/80 to-black/90" />
      <div className="pointer-events-none">
        <div className="absolute -top-36 -left-24 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full" />
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-sky-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[0.65rem] text-slate-300 mb-4">
            AI · MACHINE LEARNING · WEB DEVELOPMENT
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            We are <span className="text-transparent bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text">PixelPulse Devs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            A team crafting majestic AI, Machine Learning, and Web Development experiences -
            intelligent internal tools, proactive ML systems, and polished dashboards.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "AI-powered internal tools",
              "Data intelligence & automation",
              "Full-stack dashboards & ERPs",
            ].map((chip) => (
              <span
                key={chip}
                className="px-4 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-[0.65rem] uppercase tracking-widest text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="smooth-transition bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 shadow-xl shadow-cyan-500/30"
              onClick={() => scrollToSection("projects")}
            >
              View Our Contributions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="smooth-transition border border-slate-600 bg-slate-900/40 text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
              onClick={() => scrollToSection("about")}
            >
              Meet the Team
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="smooth-transition text-slate-200 hover:text-cyan-300"
              onClick={() => scrollToSection("contact")}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
