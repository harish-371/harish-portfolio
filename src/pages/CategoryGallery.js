import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryGallery = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // To use your own images:
  // 1. Upload your images to the public folder or a CDN.
  // 2. Replace the 'src' fields below with your image URLs.
  // 3. Make sure the category keys (e.g., 'wedding', 'engagement', etc.) match those in Portfolio.js.
  const galleryData = {
    wedding: {
      title: 'Wedding Photography',
      description: 'Capturing the most beautiful moments of your special day',
      images: [
        // Example:
        // { id: 1, src: '/your-uploaded-image.jpg', title: 'Your Title', description: 'Your Description' },
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Ceremony Moments',
          description: 'Beautiful ceremony captured with natural lighting'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Reception Joy',
          description: 'Candid moments of celebration and happiness'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Romantic Portraits',
          description: 'Intimate couple portraits in golden hour'
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Wedding Details',
          description: 'Beautiful details and decorations'
        },
        {
          id: 5,
          src: 'https://images.unsplash.com/photo-1594736797933-d0f1de7293ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Bridal Portraits',
          description: 'Elegant bridal photography'
        },
        {
          id: 6,
          src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Family Moments',
          description: 'Capturing family joy and togetherness'
        }
      ]
    },
    engagement: {
      title: 'Engagement Photography',
      description: 'Intimate couple sessions capturing your love story',
      images: [
        // Example:
        // { id: 1, src: '/your-uploaded-image.jpg', title: 'Your Title', description: 'Your Description' },
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Romantic Embrace',
          description: 'Capturing intimate moments between couples'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Sunset Love',
          description: 'Golden hour engagement photography'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Playful Moments',
          description: 'Fun and candid engagement photos'
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Natural Beauty',
          description: 'Beautiful outdoor engagement session'
        }
      ]
    },
    portraits: {
      title: 'Portrait Photography',
      description: 'Professional and lifestyle portraits',
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Professional Headshots',
          description: 'Clean and professional portrait photography'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Lifestyle Portraits',
          description: 'Natural and relaxed portrait style'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Creative Portraits',
          description: 'Artistic and creative portrait photography'
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Studio Portraits',
          description: 'Professional studio portrait session'
        }
      ]
    },
    events: {
      title: 'Special Events',
      description: 'Corporate events, parties, and celebrations',
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Corporate Events',
          description: 'Professional event photography'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Party Celebrations',
          description: 'Capturing joyful party moments'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Special Occasions',
          description: 'Memorable special event photography'
        }
      ]
    },
    family: {
      title: 'Family Photography',
      description: 'Beautiful family moments and milestones',
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1511895426328-dc8714eba2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Family Portraits',
          description: 'Beautiful family photography sessions'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Children Photography',
          description: 'Capturing precious childhood moments'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Maternity Sessions',
          description: 'Beautiful maternity photography'
        }
      ]
    },
    lifestyle: {
      title: 'Lifestyle Photography',
      description: 'Candid lifestyle and documentary photography',
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Candid Moments',
          description: 'Natural and authentic lifestyle photography'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Documentary Style',
          description: 'Storytelling through photography'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          title: 'Everyday Beauty',
          description: 'Finding beauty in everyday moments'
        }
      ]
    }
  };

  const currentGallery = galleryData[categoryId];

  useEffect(() => {
    if (!currentGallery) {
      navigate('/');
    }
  }, [categoryId, currentGallery, navigate]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    if (selectedImage && currentGallery) {
      const currentIndex = currentGallery.images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % currentGallery.images.length;
      setSelectedImage(currentGallery.images[nextIndex]);
    }
  }, [selectedImage, currentGallery]);

  const prevImage = useCallback(() => {
    if (selectedImage && currentGallery) {
      const currentIndex = currentGallery.images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
      setSelectedImage(currentGallery.images[prevIndex]);
    }
  }, [selectedImage, currentGallery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  if (!currentGallery) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Harish Pampaana Photography</h1>
          </div>
        </div>
      </div>

      {/* Gallery Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentGallery.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{currentGallery.description}</p>
          <div className="mt-6">
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
              {currentGallery.images.length} Photos
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentGallery.images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-semibold text-lg mb-1">{selectedImage.title}</h3>
              <p className="text-white/90 text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create beautiful memories together. Get in touch to discuss your photography needs.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Me
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryGallery;