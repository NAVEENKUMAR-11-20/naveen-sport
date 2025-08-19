import React from 'react';
import { CheckCircle, Award, Users, Briefcase } from 'lucide-react';

const CompletedWorkSection: React.FC = () => {
  const achievements = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Web Development Projects",
      count: "25+",
      description: "Collaborated with brands to build functional and creative web experiences."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Projects",
      count: "10+",
      description: "Thrilled to have built and delivered web projects for different needs, from design to functionality."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates",
      count: "15+",
      description: "Recognition and certificate received for outstanding creativity."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Years Experience",
      count: "1+",
      description: "Dedicated journey of experience in creating impactful web solutions."
    }
  ];

  const projectHighlights = [
    {
      title: "Java Development Basics",
      description: "Completed IBM’s Java for Beginners course on Coursera, gaining strong foundations in object-oriented programming and backend logic.",
      image: "https://th.bing.com/th/id/R.78fa94304b5854ee501d9d7788cf8a8f?rik=dkR4SibR9bRfag&riu=http%3a%2f%2finfogrotech.com%2fassest%2fimg%2fjava1.png&ehk=MbAdsexF%2fFaksfIvq8G6jqH1L7q25322s8XngrUlu5w%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "UI/UX Design Foundations",
      description: "Trained with Infosys on UI/UX design principles, focusing on creating user-friendly, visually engaging, and accessible digital experiences.",
      image: "https://pixelstreet.in/blog/wp-content/uploads/2022/10/UI-UX-DESIGN-scaled.jpg"
    },
    {
      title: "Creative Web Projects",
      description: "Designed and built sample web applications that merge functionality with clean design, applying both coding and UI/UX principles to real-world scenarios.",
      image: "https://fireart.studio/wp-content/uploads/2021/09/10-10-640x469.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-wide text-gray-800">
          What I Have Completed
        </h2>
        
        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-gray-600 group-hover:text-black transition-colors duration-300">
                {achievement.icon}
              </div>
              <div className="text-3xl md:text-4xl font-light text-black mb-2">
                {achievement.count}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectHighlights.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedWorkSection;