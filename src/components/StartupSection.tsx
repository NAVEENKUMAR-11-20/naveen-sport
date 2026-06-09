import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StartupSection: React.FC = () => {
  const services = [
    { title: 'Web Development', desc: 'Custom website building with modern coding frameworks.' },
    { title: 'UI/UX Design', desc: 'Simple, direct layouts planned for clear user interactions.' },
    { title: 'Software Development', desc: 'Developing tailored tools to support company workflows.' },
    { title: 'E-commerce Websites', desc: 'Online shops focusing on secure checkout and fast loading.' },
    { title: 'Business Websites', desc: 'Corporate websites to highlight company profiles and details.' },
    { title: 'Website Maintenance', desc: 'Routine updates, server speed checks, and secure maintenance.' },
  ];

  return (
    <section id="denvex" className="py-28 bg-black border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
            DenveX
          </h2>
          <div className="w-24 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Contents Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-medium text-white tracking-wide">
              Official Agency
            </h3>
            <p className="text-slate-350 font-light leading-relaxed text-base sm:text-lg">
              DenveX is my startup focused on building clean, functional websites. We translate business ideas into responsive websites that work across all mobile and desktop devices.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-slate-400 font-light text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-700 rounded-full" />
                Performance optimization
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-700 rounded-full" />
                Mobile first layouts
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-700 rounded-full" />
                Search engine structures
              </li>
            </ul>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-900">
              {services.map((svc, idx) => (
                <div 
                  key={idx}
                  className="p-6 border border-slate-900 bg-[#070707] hover:border-slate-850 transition-all duration-300"
                >
                  <h4 className="text-base font-semibold text-white mb-2 font-sans">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://www.denvex.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white hover:text-slate-300 font-semibold pb-1 border-b border-white hover:border-slate-300 transition-all group"
              >
                Visit denvex.in
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-900 aspect-[4/5] bg-slate-950 relative group filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Startup Workplace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default StartupSection;