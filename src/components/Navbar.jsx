import { Menu, BookOpen, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">NeoLearn</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#courses" className="hover:text-white transition-colors">Courses</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-1">
            <Globe className="h-4 w-4" /> About
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white">
            Log in
          </button>
          <button className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-200 hover:to-blue-400 transition-shadow shadow-[0_8px_30px_rgba(59,130,246,0.35)]">
            Get Started
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/5">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}
