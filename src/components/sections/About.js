import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-lg opacity-75">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="animate-fadeIn">
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                Passionate About Capturing Life's Beautiful Moments
              </h3>
              <p className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed mb-8 font-sans" style={{lineHeight: '2'}}>
                I am a wedding photographer with 8+ years of experience, dedicated to capturing genuine emotions and timeless memories. My approach blends creativity, professionalism, and a love for storytelling. Let's create beautiful moments together!
              </p>
            </div>

            {/* Skills/Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-extrabold text-pink-500 mb-2">500+</div>
                <div className="text-gray-800 dark:text-gray-100 text-lg font-medium">Happy Couples</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-extrabold text-purple-500 mb-2">8+</div>
                <div className="text-gray-800 dark:text-gray-100 text-lg font-medium">Years Experience</div>
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">My Approach</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📸', text: 'Candid Moments' },
                  { icon: '💕', text: 'Emotional Storytelling' },
                  { icon: '🎨', text: 'Artistic Vision' },
                  { icon: '⭐', text: 'Professional Service' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;