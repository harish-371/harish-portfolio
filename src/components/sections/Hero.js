import React, { useEffect, useState } from 'react';

const GREETINGS = ["Hi, I'm", "Welcome to my portfolio", "Capturing Life's Beauty"];
const ROLES = ["Wedding Photographer", "Passionate Photographer", "Visual Storyteller"];

const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingText, setGreetingText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showGreeting, setShowGreeting] = useState(true);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typing effect for roles
  const typeRole = (text, onComplete) => {
    let currentIndex = 0;
    setIsTyping(true);
    
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setRoleText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, 80);

    return () => clearInterval(interval);
  };

  // Effect for animations
  useEffect(() => {
    // Fade out current greeting
    setShowGreeting(false);
    
    const greetingTimeout = setTimeout(() => {
      // Set new greeting text and fade it in
      setGreetingText(GREETINGS[greetingIndex]);
      setShowGreeting(true);
      
      // Start typing role after greeting appears
      setTimeout(() => {
        typeRole(ROLES[roleIndex]);
      }, 300);
    }, 200);

    return () => clearTimeout(greetingTimeout);
  }, [greetingIndex, roleIndex]);

  // Switch texts sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setRoleText("");
        setShowGreeting(false);
        setTimeout(() => {
          setGreetingIndex((current) => (current + 1) % GREETINGS.length);
          setRoleIndex((current) => (current + 1) % ROLES.length);
        }, 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Translucent Background Image */}
      <img
        src="/logo512.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          {/* Dynamic Greeting */}
          <div className="text-2xl md:text-3xl font-medium tracking-tight mb-4 h-12">
            <span 
              className={`text-gray-700 dark:text-gray-300 inline-block min-h-[1.5em] transition-opacity duration-300 ${
                showGreeting ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {greetingText}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Harish Pampaana
            </span>
          </h1>

          {/* Dynamic Role */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 h-12 mb-8">
            <span className="inline-block typing-cursor min-h-[1.5em] relative">
              {roleText}
              {isTyping && (
                <span className="ml-1 animate-pulse text-blue-600 dark:text-blue-400">|</span>
              )}
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay">
            Capturing life's precious moments through artistic vision and professional expertise. 
            Specializing in weddings, portraits, events, and creating memories that last forever.
          </p>

          {/* CTA Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-2">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-600/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400/50 dark:bg-gray-600/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;