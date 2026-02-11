import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="parker.jpeg"
          alt="Naveen Kumar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-12 md:mb-16 tracking-wide">
          Naveen Kumar
        </h1>
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-12 md:mb-16">
          <a
            href="https://linkedin.com"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={28} />
          </a>
        </div>

        {/* About Text */}
        <div className="max-w-md lg:max-w-lg">
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Fashion fuels my spirit—the thrill of expressing myself through every piece is a story 
            I’m always eager to tell. Yet beyond the runway of creativity, I hold another role just as deeply
            : the responsibility of caring for my family. My world is a blend of passion and duty,
             and through it all, I continue to explore, create, and grow.
          </p>
        </div>
      </div>

      {/* Right Navigation Menu */}
      <div className="relative z-10 flex flex-col justify-center pr-8 md:pr-16 lg:pr-24">
        <nav className="space-y-6 md:space-y-8">
          {[
            { name: 'Collabs', href: '#collabs' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Startup', href: '#startup' },
          ].map((item) => (
            <div key={item.name} className="text-right">
              <a
                href={item.href}
                className="text-white text-lg md:text-xl lg:text-2xl font-light hover:text-gray-300 transition-colors duration-300 block py-2 border-b border-white/20 hover:border-white/40"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Hidden on larger screens */}
      <div className="md:hidden absolute top-6 right-6 z-20">
        <button className="text-white p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;