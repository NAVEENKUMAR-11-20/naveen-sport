import React from 'react';
import { Rocket, Users, Target, TrendingUp } from 'lucide-react';

const StartupSection: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation First",
      description: "Cutting-edge technology solutions for modern businesses"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Talented professionals dedicated to delivering excellence"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Client Focus",
      description: "Tailored solutions that meet specific business needs"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Driven",
      description: "Strategies designed to scale and grow your business"
    }
  ];

  return (
    <section id="startup" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-800">
            DeepWare Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deepware Studio is my startup dedicated to creating modern, responsive websites that combine creativity with technology. 
            We design and develop digital experiences that are functional, scalable, and user-friendly.
          </p>
        </div>

        {/* Startup Hero Image */}
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-200 rounded-lg mb-16">
          <img src="banner.jpg"
            alt="Deepware Studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Deepware Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-medium text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Deepware Studio, we harness the power of technology to transform creative ideas into reality.
              Our mission is to craft innovative web solutions that empower individuals and businesses to achieve 
              their goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
             We specialize in responsive web development and creative digital experiences that leave a lasting impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-800 mb-6">
              What We Do
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Custom Website Development & Design
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Logo & Brand Identity Design
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>          
              Pamphlet & Brochure Design
              </li>
                            <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Creative Banners & Posters
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Brand Identity & Creative Solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-gray-600 group-hover:text-black transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupSection;