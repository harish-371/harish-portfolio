import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services Offered
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional photography services tailored to capture your most precious moments
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Service Content */}
              <div className="flex-1 lg:max-w-lg">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Image Placeholder */}
              <div className="flex-1 lg:max-w-lg">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Book Your Session?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss your photography needs and create something beautiful together.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300"
            >
              Get Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;