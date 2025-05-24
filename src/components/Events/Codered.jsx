import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArrowLeft } from 'lucide-react';
const galleryImages = [
  '/images/codered1.jpg',
  '/images/codered2.jpg',
  '/images/codered3.jpg',
  '/images/codered4.jpg',
  '/images/codered5.jpg',
  '/images/codered6.jpg',
];

const stats = [
  { label: 'Participants', value: '500+' },
  { label: 'Challenges', value: '10+' },
  { label: 'Prize Pool', value: '₹1,00,000+' },
];

const Codered = () => {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
    <div className="absolute top-6 left-6 z-10">
        <a
          href="/#events"
          className="flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium text-sm md:text-base">Back to Events</span>
        </a>
      </div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
      <Navbar />
        <h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FD7722] to-orange-400 drop-shadow-lg"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          CODERED
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed">
          cODERED is a high-energy coding competition designed to test your logic, speed, and problem-solving skills. Experience the adrenaline of real-time challenges and claim your place among the best!
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-8 py-10 border-t border-gray-800 px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-orange-400">{stat.value}</p>
            <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Event Details */}
      <div className="px-6 py-12 max-w-4xl mx-auto text-gray-300 space-y-6">
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Why Join CODERED?
        </h2>
        <p className="text-base leading-relaxed">
          Whether you're a budding programmer or a seasoned coder, CodeRed provides an exciting platform to showcase your skills. Compete, collaborate, and rise through the ranks in a high-stakes, fast-paced coding arena.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>🔥 Real-time problem solving under pressure</li>
          <li>🏆 Win exciting prizes and certificates</li>
          <li>🌐 Compete with the brightest across the country</li>
          <li>🤝 Build connections with developers and mentors</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-white" style={{ fontFamily: 'Georgia, serif' }}>
          Glimpses of CodeRed
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`CodeRed snapshot ${index + 1}`}
              className="rounded-xl w-full object-cover hover:scale-105 transition-transform duration-300 shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default Codered;
