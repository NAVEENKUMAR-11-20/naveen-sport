import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "Dinesh s",
      role: "Fashion Brand Director",
      company: "Luxe Fashion Co.",
      rating: 5,
      review: "Working with you has been engaging and enjoyable, as you ask clear and thoughtful questions.You show genuine curiosity and flexibility, which makes collaboration smooth.Overall, it feels productive and motivating to interact with you.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Naveen K",
      role: "Creative Director",
      company: "Urban Style Magazine",
      rating: 5,
      review: "Naveen's work on our editorial shoots has been consistently outstanding. His ability to capture the essence of fashion while telling a compelling story is unmatched. A true professional.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mohan",
      role: "Startup Founder",
      company: "TechStyle Innovations",
      rating: 5,
      review: "The team at Deepware Studio delivered exactly what we needed for our tech startup. Their innovative approach and technical expertise helped us launch successfully. Highly recommended!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-800">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What my clients say about working with me and the results we've achieved together.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gray-400" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                "{review.review}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {review.role}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to work together and create something amazing?
          </p>
          <a
            href=""
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;