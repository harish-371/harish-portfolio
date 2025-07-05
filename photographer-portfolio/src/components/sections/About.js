import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
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
          <div className="space-y-6">
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passionate About Capturing Life's Beautiful Moments
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 8 years of experience in photography, I specialize in creating timeless 
                wedding memories that couples will treasure forever. My journey began with a simple 
                love for capturing genuine emotions and authentic moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I believe that every couple has a unique story, and my goal is to document your 
                special day in a way that reflects your personality and love story. From intimate 
                ceremonies to grand celebrations, I approach each wedding with creativity, 
                professionalism, and an eye for detail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When I'm not behind the camera, you'll find me exploring new photography techniques, 
                traveling to discover inspiring locations, or spending time with my family. I'm also 
                passionate about technology and love incorporating the latest innovations into my 
                photography workflow to deliver the best possible results for my clients.
              </p>
            </div>

            {/* Skills/Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-500 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">My Approach</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📸', text: 'Candid Moments' },
                  { icon: '💕', text: 'Emotional Storytelling' },
                  { icon: '🎨', text: 'Artistic Vision' },
                  { icon: '⭐', text: 'Professional Service' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
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