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
    <section id="skills" className="py-24 bg-black border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            Capabilities & Focus
          </h2>
          <div className="w-16 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 border border-slate-900 bg-[#0a0a0a] hover:border-slate-800 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-medium text-white mb-2 font-sans tracking-wide">
                  {skill.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
