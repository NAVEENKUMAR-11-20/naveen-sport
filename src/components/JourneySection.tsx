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
      year: '2024 - Present',
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
      year: '2023 - Present',
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
      year: '2023 - 2024',
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
    <section id="journey" className="py-24 bg-black border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            Journey & Experience
          </h2>
          <div className="w-16 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-900 pl-6 md:pl-10 space-y-12">
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-black border border-slate-850" />

              {/* Box */}
              <div className="p-6 border border-slate-950 bg-[#070707] hover:border-slate-900 transition-colors duration-300">
                
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {item.year}
                </span>

                <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">
                    {item.company}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet details */}
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-500 font-light">
                      <span className="w-1 h-1 bg-slate-800 rounded-full mt-1.5 shrink-0" />
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
