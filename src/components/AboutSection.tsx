import React from 'react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Founded Startup', value: 'DenveX' },
    { label: 'Core Services Offered', value: '6+' },
    { label: 'Real-world Client Projects', value: '15+' },
  ];

  return (
    <section id="about" className="relative py-24 bg-black border-y border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            Developer & Founder
          </h2>
          <div className="w-16 h-[1px] bg-slate-800 mt-4" />
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Text */}
          <div className="md:col-span-8 space-y-6 text-slate-400 font-light leading-relaxed text-sm sm:text-base">
            <p>
              I am Naveen Kumar P, a developer based in Chennai, Tamil Nadu. I focus on writing clean code, building usable websites, and learning new tools to improve my work.
            </p>
            <p>
              My journey has led me to start DenveX, where I coordinate projects, talk with clients, and deliver websites. As a founder, I balance the technical side of development with the practical steps of leading a business.
            </p>
            <p>
              I enjoy finding simple ways to solve complex tasks. Whether I am styling a frontend layout or writing backend systems, I strive to make sure every line is purposeful.
            </p>
          </div>

          {/* Right Metrics */}
          <div className="md:col-span-4 space-y-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="py-4 border-b border-slate-800 flex justify-between items-end"
              >
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
                <span className="text-xl font-light text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
