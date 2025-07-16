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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services Offered
          </h2>
        </div>
        <ol className="list-decimal list-inside text-xl text-gray-700 dark:text-gray-200 max-w-xl mx-auto space-y-2">
          {services.map((service, index) => (
            <li key={index}>{service.title}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Services;