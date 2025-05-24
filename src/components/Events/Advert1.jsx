import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArrowLeft, Users, Trophy, Calendar, Clock } from 'lucide-react';


const Advert = () => {
  const eventStats = [
    { icon: Users, label: 'Creative Teams', value: '56' },
    { icon: Trophy, label: 'Ad Campaigns', value: '168' },
    { icon: Calendar, label: 'Presentation Day', value: 'Jan 20, 2025' },
    { icon: Clock, label: 'Pitch Duration', value: '8 Hours' },
  ];

  const highlights = [
    "🎨 'Creative Minds' won with a groundbreaking social impact campaign",
    "💡 Innovative use of AI and AR in advertising presentations",
    "🌟 Record audience engagement with interactive ad demos",
    "🚀 Industry mentors praised the quality and creativity of submissions"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop", 
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>
        <Navbar />
        
        <div className="absolute top-6 left-6 z-20">
          <a href="/#events" className="group flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Events</span>
          </a>
        </div>

        <div className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              Creative Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ADVERT 1.0
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Where creativity meets strategy! The inaugural advertising competition that challenged teams to create 
              compelling campaigns, innovative concepts, and persuasive presentations.
            </p>
          </div>
        </div>

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {eventStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Creative Highlights
            </h2>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Behind the Campaigns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={src}
                    alt={`Advert 1.0 moment ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Advert;
