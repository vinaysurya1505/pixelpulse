import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PixelPulse Devs | AI, ML & Web Development",
  description:
    "Portfolio of PixelPulse Devs - a team building intelligent AI/ML solutions and beautiful web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="smooth-scroll dark-gradient text-slate-100">{children}</body>
    </html>
  );
}
