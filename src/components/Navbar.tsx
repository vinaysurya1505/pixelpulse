"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Interests", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-3xl z-50 border-b border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-baseline space-x-2 group"
        >
          <span className="text-xl md:text-2xl font-bold tracking-[0.35em] text-slate-100">
            PixelPulse Devs
          </span>
          <span className="hidden md:inline text-[0.65rem] uppercase text-slate-400 group-hover:text-sky-300 smooth-transition">
            AI · Machine Learning · Web Development
          </span>
        </button>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-semibold text-slate-200 hover:text-cyan-300 smooth-transition transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md text-slate-200 hover:text-cyan-300 smooth-transition"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-icon">ƒ~ø</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 border-t border-slate-800">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-4 py-3 text-slate-200 hover:text-cyan-300 smooth-transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
