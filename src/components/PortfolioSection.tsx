import React from 'react';

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Fashion Editorial",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1464207/pexels-photo-1464207.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Street Style",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Brand Collaboration",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Portrait Session",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Campaign Shoot",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      title: "Lifestyle",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;