import React from 'react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Founded Startup', value: 'DenveX' },
    { label: 'Core Services Offered', value: '6+' },
    { label: 'Real-world Client Projects', value: '15+' },
  ];

  return (
    <section id="about" className="relative py-28 bg-black border-y border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
            Developer & Founder
          </h2>
          <div className="w-24 h-[1px] bg-slate-800 mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
            <p className="text-lg sm:text-xl font-normal text-white">
              I am Naveen Kumar P, a developer based in Chennai, Tamil Nadu. I focus on writing clean code, building usable websites, and learning new tools to improve my work.
            </p>
            <p>
              My journey has led me to start DenveX, where I coordinate projects, talk with clients, and deliver websites. As a founder, I balance the technical side of development with the practical steps of leading a business.
            </p>
            <p>
              I enjoy finding simple ways to solve complex tasks. Whether I am styling a frontend layout or writing backend systems, I strive to make sure every line is purposeful.
            </p>

            {/* Metrics */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-900">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="pb-4 border-b border-slate-900 sm:border-b-0 flex sm:flex-col justify-between sm:justify-start items-end sm:items-start gap-2"
                >
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                  <span className="text-3xl font-light text-white font-sans">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-900 aspect-[4/5] bg-slate-950 relative group filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
              src="naveend.png" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
