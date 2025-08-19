import React from 'react';

const WorkWithMeSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-wide text-gray-800">
          Work with Me
        </h2>
        
        {/* Profile Image */}
        <div className="mb-16">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200">
            <img
              src="Yellow And White Action Movie Poster.jpg"
              alt="Naveen Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Phone Number */}
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-2 underline">
              Phone Number
            </h3>
            <p className="text-gray-600">
              +91-6380722750
            </p>
          </div>

          {/* Mailing Address */}
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-2 underline">
              Mailing Address
            </h3>
            <p className="text-gray-600">
              Arumbbakkum, chennai-600025
            </p>
          </div>

          {/* Email Address */}
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-2 underline">
              Email Address
            </h3>
            <p className="text-gray-600">
              naveenkumar11202006@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;