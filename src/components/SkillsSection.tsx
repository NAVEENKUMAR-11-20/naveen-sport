import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { title: 'Frontend Development', desc: 'Building responsive pages using React, TypeScript, and clean CSS styling.' },
    { title: 'Backend Development', desc: 'Writing server logic, API endpoints, and configuring database connections.' },
    { title: 'UI/UX Design', desc: 'Planning minimal site interfaces, styling guides, and structuring layouts.' },
    { title: 'Web Development', desc: 'Assembling complete web pages with quick load speeds and structured layouts.' },
    { title: 'Startup Management', desc: 'Coordinating team assets, scheduling releases, and expanding DenveX services.' },
    { title: 'Client Communication', desc: 'Interfacing directly with brands to outline requirements and project schedules.' },
    { title: 'Project Coordination', desc: 'Directing milestones, checking build features, and managing deployments.' }
  ];

  return (
    <section id="skills" className="py-28 bg-black border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
            Capabilities & Focus
          </h2>
          <div className="w-24 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Layout grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Workspace Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-900 aspect-[4/5] bg-slate-950 relative group filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 order-last lg:order-first">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
              src="chiyaan.png" 
              alt="Coding Workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Skills List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-slate-900 bg-[#0a0a0a] hover:border-slate-850 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3 font-sans tracking-wide">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-slate-450 font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
