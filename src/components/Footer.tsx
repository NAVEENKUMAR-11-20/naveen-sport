import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-slate-900/60 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Logo Mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-650 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-600/10">
            NK
          </div>
          <div>
            <p className="text-sm font-bold text-white tracking-wide">Naveen Kumar P</p>
            <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Founder & CEO @ DenveX</p>
          </div>
        </div>

        {/* Middle Side: Quick Nav Links */}
        <div className="flex flex-col items-center gap-3 text-xs font-semibold text-slate-400">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition-colors">Skills</a>
          <a href="#denvex" onClick={(e) => handleScrollTo(e, 'denvex')} className="hover:text-white transition-colors">DenveX</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#journey" onClick={(e) => handleScrollTo(e, 'journey')} className="hover:text-white transition-colors">Journey</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Side: Social Handles */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/naveen-kumar-p-034658300/"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/NAVEENKUMAR-11-20"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/denvex_official"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.denvex.in/"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="DenveX Website"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900 flex items-center justify-center relative z-10 text-[11px] text-slate-500 font-medium">
        <p>© {currentYear} Naveen Kumar P. All rights reserved.</p>
      </div>

      {/* Ambient micro spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
    </footer>
  );
};

export default Footer;