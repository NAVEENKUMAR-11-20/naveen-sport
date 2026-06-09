import React from 'react';

interface JourneyItem {
  year: string;
  role: string;
  company: string;
  description: string;
  details: string[];
}

const JourneySection: React.FC = () => {
  const items: JourneyItem[] = [
    {
      year: '2025 - Present',
      role: 'Founder & CEO',
      company: 'DenveX',
      description: 'Set up DenveX to build custom, responsive websites and software solutions for client brands.',
      details: [
        'Coordinate project releases, deliverables timelines, and testing milestones.',
        'Handle client briefings and translate business ideas into structured layouts.',
        'Collaborate with developers and design resources to ensure clean deployment.'
      ]
    },
    {
      year: '2025 - Present',
      role: 'Web Developer Journey',
      company: 'Self-Directed Projects',
      description: 'Building custom web apps, learning core programming concepts, and mastering frontend/backend integrations.',
      details: [
        'Assembled layouts using React, Vite, and custom CSS styling systems.',
        'Acquired IBM Java foundations certification and Infosys design training.',
        'Maintained web standards for page speed, accessibility, and clean code paths.'
      ]
    },
    {
      year: '2025 - 2026',
      role: 'Freelance & Client Delivery',
      company: 'Digital Projects',
      description: 'Worked on individual websites and digital resources directly helping local brands start their web footprint.',
      details: [
        'Built simple web catalogs and e-commerce setups.',
        'Helped clients shift from old static templates to modern, responsive systems.',
        'Performed recurring site audits, asset updates, and security tests.'
      ]
    }
  ];

  return (
    <section id="journey" className="relative py-28 bg-black border-b border-slate-900 overflow-hidden">
      {/* Timeline image background with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
          alt="Technical Pathway" 
          className="w-full h-full object-cover opacity-15 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
            Journey & Experience
          </h2>
          <div className="w-24 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 pl-6 md:pl-10 space-y-12">
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-black border border-slate-700" />

              {/* Box */}
              <div className="p-8 border border-slate-900 bg-[#070707]/90 backdrop-blur-sm hover:border-slate-850 transition-colors duration-300">
                
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {item.year}
                </span>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-slate-400">
                    {item.company}
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet details */}
                <ul className="mt-6 space-y-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 font-light">
                      <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JourneySection;
