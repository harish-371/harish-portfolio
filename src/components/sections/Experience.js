import React from 'react';

const Experience = () => {
  const stats = [
    {
      number: '200+',
      label: 'Events Covered',
      icon: '🎉',
      description: 'Weddings, half sarees, birthdays, and various special celebrations'
    },
    {
      number: '8+',
      label: 'Years of Experience',
      icon: '⭐',
      description: 'Dedicated years perfecting the art of photography since 2017'
    },
    {
      number: '150+',
      label: 'Weddings Captured',
      icon: '💍',
      description: 'Beautiful wedding ceremonies documented with artistic vision'
    },
    {
      number: '300+',
      label: 'Happy Clients',
      icon: '😊',
      description: 'Satisfied clients across various photography categories'
    },
    {
      number: '50+',
      label: 'Half Saree Events',
      icon: '�',
      description: 'Traditional half saree ceremonies beautifully captured'
    },
    {
      number: '100+',
      label: 'Fashion Shoots',
      icon: '📸',
      description: 'Creative fashion photography and portfolio shoots'
    }
  ];

  const photographyJourney = [
    {
      year: '2017',
      title: 'Photography Journey Begins',
      milestone: 'First Camera Purchase',
      description: 'Started exploring photography as a hobby with my first DSLR camera'
    },
    {
      year: '2018',
      title: 'Learning & Practice',
      milestone: 'Skill Development',
      description: 'Dedicated time to learning photography techniques and practicing regularly'
    },
    {
      year: '2019',
      title: 'First Professional Shoots',
      milestone: 'Career Transition',
      description: 'Transitioned from hobby to profession with first paid photography assignments'
    },
    {
      year: '2020',
      title: 'Specialization Focus',
      milestone: 'Wedding Photography',
      description: 'Specialized in wedding photography and traditional ceremony documentation'
    },
    {
      year: '2021',
      title: 'Business Growth',
      milestone: 'Client Base Expansion',
      description: 'Expanded services to include fashion, maternity, and commercial photography'
    },
    {
      year: '2022',
      title: 'Professional Recognition',
      milestone: 'Industry Experience',
      description: 'Gained recognition for quality work and built strong client relationships'
    },
    {
      year: '2023',
      title: 'Continued Excellence',
      milestone: 'Service Diversification',
      description: 'Expanded to cover various events and maintained high-quality standards'
    },
    {
      year: 'Present',
      title: 'Established Professional',
      milestone: 'Current Status',
      description: 'Established photographer with expertise across multiple photography genres'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My photography journey started in 2017, and over the years, I've had the privilege of capturing 
            countless precious moments across various categories. Here's a glimpse of my professional growth.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {stat.label}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        {/* Timeline Section removed */}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Create Beautiful Memories?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's work together to capture your special moments with the same passion and expertise 
            that I've developed throughout my photography journey.
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