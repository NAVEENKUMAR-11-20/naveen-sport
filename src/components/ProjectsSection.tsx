import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  category: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'DenveX Business Portal',
      description: 'The official brand website for DenveX, built with Vite, React, and Tailwind. Designed with a focus on simplicity, responsiveness, and clear typography.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      liveLink: 'https://www.denvex.in/',
      githubLink: 'https://github.com/NAVEENKUMAR-11-20',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'E-Commerce Web Suite',
      description: 'A modular storefront layout for businesses. Includes custom layout views, cart options, and optimized performance guidelines.',
      tags: ['React', 'Node.js', 'Express', 'Tailwind'],
      liveLink: 'https://naveen-sport.vercel.app/',
      githubLink: 'https://github.com/NAVEENKUMAR-11-20',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Founder Dashboard UI',
      description: 'A personal board dashboard for checking project phases and managing client requests.',
      tags: ['React', 'TypeScript', 'CSS Grid'],
      liveLink: '#',
      githubLink: 'https://github.com/NAVEENKUMAR-11-20',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            Portfolio
          </h2>
          <div className="w-16 h-[1px] bg-slate-800 mt-4" />
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group border border-slate-900 bg-[#070707] hover:border-slate-850 flex flex-col justify-between transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-900">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[9px] font-medium text-slate-500 px-2 py-0.5 rounded border border-slate-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4 text-xs font-medium pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white hover:text-slate-300 pb-0.5 border-b border-transparent hover:border-white transition-all group/btn"
                    >
                      Demo
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
