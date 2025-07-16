import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Engagement Photography',
      description: 'Capturing the love and connection between couples in beautiful, romantic settings.',
      icon: '💕',
      features: ['Pre-wedding consultation', 'Multiple locations', 'Edited gallery delivery']
    },
    {
      title: 'Pre-Wedding Photography',
      description: 'Creating stunning pre-wedding memories with creative concepts and storytelling.',
      icon: '👫',
      features: ['Creative concepts', 'Outfit changes', 'Same-day preview']
    },
    {
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage from getting ready to the final dance.',
      icon: '💒',
      features: ['Full day coverage', 'Candid moments', 'Family portraits']
    },
    {
      title: 'Maternity Photography',
      description: 'Beautiful maternity sessions celebrating the journey to motherhood.',
      icon: '🤱',
      features: ['Studio & outdoor options', 'Partner & family inclusion', 'Gentle posing guidance']
    },
    {
      title: 'Birthday Photography',
      description: 'Fun and vibrant birthday celebration photography for all ages.',
      icon: '🎂',
      features: ['Party coverage', 'Candid moments', 'Group photos']
    },
    {
      title: 'Half Saree Ceremony',
      description: 'Traditional half saree ceremony photography capturing cultural significance.',
      icon: '👗',
      features: ['Traditional setups', 'Family portraits', 'Ceremonial moments']
    },
    {
      title: 'Commercial Events',
      description: 'Professional event photography for corporate and commercial gatherings.',
      icon: '🏢',
      features: ['Corporate events', 'Product launches', 'Professional documentation']
    },
    {
      title: 'Fashion Photography',
      description: 'Creative fashion photography showcasing style, elegance, and personality.',
      icon: '📸',
      features: ['Fashion shoots', 'Portfolio building', 'Creative direction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services Offered
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;