import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://instagram.com"
            className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <p className="text-white/70">
          © Naveen Kumar 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;