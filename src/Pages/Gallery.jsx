import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample gallery images with varying heights for masonry effect
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop",
      alt: "Startup Event 1",
      title: "Annual Startup Summit 2024",
      height: "h-80"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=600&fit=crop",
      alt: "Workshop Event",
      title: "Entrepreneurship Workshop",
      height: "h-64"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
      alt: "Team Meeting",
      title: "E-Cell Team Meeting",
      height: "h-72"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=450&fit=crop",
      alt: "Innovation Lab",
      title: "Innovation Lab Session",
      height: "h-56"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=700&fit=crop",
      alt: "Pitch Competition",
      title: "Business Pitch Competition",
      height: "h-96"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      alt: "Networking Event",
      title: "Networking Session",
      height: "h-60"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=650&fit=crop",
      alt: "Conference",
      title: "Entrepreneurship Conference",
      height: "h-80"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=550&fit=crop",
      alt: "Awards Ceremony",
      title: "Annual Awards Ceremony",
      height: "h-68"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      alt: "Team Collaboration",
      title: "Team Brainstorming Session",
      height: "h-52"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=750&fit=crop",
      alt: "Presentation",
      title: "Startup Presentation",
      height: "h-88"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=480&fit=crop",
      alt: "Workshop Session",
      title: "Technical Workshop",
      height: "h-64"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=620&fit=crop",
      alt: "Innovation Hub",
      title: "Innovation Hub Activities",
      height: "h-76"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=420&fit=crop",
      alt: "Mentorship Session",
      title: "Mentorship Program",
      height: "h-56"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=680&fit=crop",
      alt: "Strategic Planning",
      title: "Strategic Planning Meeting",
      height: "h-84"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=520&fit=crop",
      alt: "Community Event",
      title: "Community Networking",
      height: "h-68"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop",
      alt: "Panel Discussion",
      title: "Expert Panel Discussion",
      height: "h-60"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=720&fit=crop",
      alt: "Celebration",
      title: "Achievement Celebration",
      height: "h-80"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=380&fit=crop",
      alt: "Research Session",
      title: "Research & Development",
      height: "h-52"
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop",
      alt: "Demo Day",
      title: "Demo Day Presentations",
      height: "h-72"
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=500&fit=crop",
      alt: "Alumni Meet",
      title: "Alumni Networking Event",
      height: "h-64"
    },
    {
      id: 21,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=780&fit=crop",
      alt: "Global Summit",
      title: "Global Entrepreneurship Summit",
      height: "h-92"
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=440&fit=crop",
      alt: "Recognition Event",
      title: "Excellence Recognition",
      height: "h-58"
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=660&fit=crop",
      alt: "Investor Meet",
      title: "Investor Meetup",
      height: "h-76"
    },
    {
      id: 24,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      alt: "Knowledge Share",
      title: "Knowledge Sharing Session",
      height: "h-56"
    },
    {
      id: 25,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=580&fit=crop",
      alt: "Future Leaders",
      title: "Future Leaders Program",
      height: "h-72"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
          
          .font-georgia {
            font-family: Georgia, 'Times New Roman', serif;
          }
          
          .font-sora {
            font-family: 'Sora', sans-serif;
          }
          
          .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem;
          }
          
          @media (min-width: 640px) {
            .masonry-grid {
              column-count: 2;
            }
          }
          
          @media (min-width: 1024px) {
            .masonry-grid {
              column-count: 3;
            }
          }
          
          @media (min-width: 1280px) {
            .masonry-grid {
              column-count: 4;
            }
          }
          
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
            display: inline-block;
            width: 100%;
          }
        `}
      </style>
      
     <div className="min-h-screen bg-white py-16 px-4">
  <Navbar />
  <div className="max-w-7xl mx-auto pt-12"> {/* Add top padding here instead of <br/> */}
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="font-georgia text-5xl md:text-6xl font-bold text-gray-900 mb-7">
        Gallery
      </h1>
      <p className="font-sora text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Capturing moments of innovation, collaboration, and entrepreneurial spirit at our E-Cell events and activities.
      </p>
    </div>

          {/* Masonry Gallery Grid */}
          <div className="masonry-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
                onClick={() => openLightbox(image)}
              >
                <div className={`relative ${image.height} w-full`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-sora text-white text-lg font-semibold leading-tight">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div 
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 rounded-b-xl">
                  <h3 className="font-sora text-white text-2xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="font-sora text-white/80 text-sm">
                    Press ← → to navigate or ESC to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;