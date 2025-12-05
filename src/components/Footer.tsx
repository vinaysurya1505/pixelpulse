export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-black/80">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-2 text-center">
        <p className="text-xs text-slate-300">
          &copy; {year} PixelPulse Devs. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
        <p className="text-xs text-slate-500">
          AI &bull; Machine Learning &bull; Web Development
        </p>
      </div>
    </footer>
  );
}
