import React from 'react';

const Experience = () => {
  const stats = [
    {
      number: '500+',
      label: 'Weddings Captured',
      icon: '💍',
      description: 'Beautiful wedding ceremonies documented with care and precision'
    },
    {
      number: '1200+',
      label: 'Photoshoots Completed',
      icon: '📸',
      description: 'Professional photoshoots across various categories and styles'
    },
    {
      number: '8+',
      label: 'Years of Experience',
      icon: '⭐',
      description: 'Dedicated years perfecting the art of photography'
    },
    {
      number: '50+',
      label: 'Events Covered',
      icon: '🎉',
      description: 'Corporate events, parties, and special celebrations'
    },
    {
      number: '300+',
      label: 'Happy Families',
      icon: '👨‍👩‍👧‍👦',
      description: 'Family portraits and milestone celebrations captured'
    },
    {
      number: '25+',
      label: 'Awards & Recognition',
      icon: '🏆',
      description: 'Industry awards and client recognition for excellence'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Wedding Photographer',
      organization: 'Regional Photography Awards',
      description: 'Recognized for excellence in wedding photography and client satisfaction'
    },
    {
      year: '2022',
      title: 'Featured Artist',
      organization: 'Photography Masters Magazine',
      description: 'Featured work in the annual showcase of top photographers'
    },
    {
      year: '2021',
      title: 'People\'s Choice Award',
      organization: 'Local Photography Competition',
      description: 'Voted by the community for outstanding portrait photography'
    },
    {
      year: '2020',
      title: 'Certified Professional',
      organization: 'Professional Photographers Association',
      description: 'Achieved professional certification in advanced photography techniques'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over the years, I've had the privilege of capturing countless precious moments and building 
            lasting relationships with my clients. Here's a glimpse of my journey and accomplishments.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-700 mb-3">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Recent Achievements
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-500 rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-pink-500 font-bold text-lg mb-2">
                      {achievement.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <div className="text-gray-600 font-medium mb-3">
                      {achievement.organization}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Create Beautiful Memories?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's work together to capture your special moments with the same passion and expertise 
            that has earned me recognition in the industry.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Session
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;