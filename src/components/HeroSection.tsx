import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center bg-black overflow-hidden select-none">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#030712]">
        <img
          src="parker.jpeg"
          alt="Naveen Kumar P"
          className="w-full h-full object-cover filter brightness-[1.12] contrast-[1.10] opacity-[0.72] object-[55%_35%] md:object-[62%_center]"
          onError={(e) => {
            // Fallback to a plain dark color if the local image is not found
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Gradient for text readability on left, and subtle spotlight highlight centered on the face area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,transparent_15%,rgba(3,7,18,0.5)_60%,rgba(3,7,18,0.8)_95%)] z-1" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        {/* Left Aligned Content */}
        <div className="md:col-span-8 flex flex-col justify-center h-full pt-16">
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-6 font-sans">
            Naveen Kumar P
          </h1>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-8 text-slate-300">
            <a
              href="https://www.linkedin.com/in/naveen-kumar-p-034658300/"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href="https://github.com/NAVEENKUMAR-11-20"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href="https://www.instagram.com/denvex_official"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-xl">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light font-sans">
              I build websites, learn new technologies, and grow DenveX with a focus on clean design and real-world projects. I continue to explore, create, and grow my skills to deliver simple, high-quality results.
            </p>
          </div>
        </div>

        {/* Right Aligned Navigation */}
        <div className="md:col-span-4 flex justify-end items-center h-full">
          <nav className="flex flex-col gap-8 text-right pr-4 md:pr-8">
            {[
              { name: 'Collabs', target: 'journey' },
              { name: 'Portfolio', target: 'projects' },
              { name: 'Startup', target: 'denvex' },
              { name: 'Contact', target: 'contact' },
            ].map((link, index) => (
              <button
                key={index}
                onClick={() => handleScrollTo(link.target)}
                className="text-slate-300 hover:text-white text-2xl md:text-3xl font-light tracking-wide py-2 text-right transition-colors duration-300 border-b border-white/10 hover:border-white/30 outline-none"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;