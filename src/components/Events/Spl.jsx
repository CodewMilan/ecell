import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArrowLeft, Users, Trophy, Calendar, Clock } from 'lucide-react';


const SPL = () => {
  const eventStats = [
    { icon: Users, label: 'Teams Participated', value: '32' },
    { icon: Trophy, label: 'Matches Played', value: '28' },
    { icon: Calendar, label: 'Tournament Days', value: '3 Days' },
    { icon: Clock, label: 'Total Hours', value: '18 Hours' },
  ];

  const highlights = [
    "🏏 'Code Crushers' dominated the league with unbeaten streak",
    "⚡ Lightning fast problem-solving in pressure situations",
    "🎯 Strategic team formations led to spectacular victories", 
    "🔥 Nail-biting finale that kept everyone at the edge of their seats"
  ];

  // Mock images for SPL
  const galleryImages = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>
        <Navbar />
        
        <div className="absolute top-6 left-6 z-20">
          <a href="/#events" className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Events</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              Tournament Recap
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              SPL 2025
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The most competitive programming league of the year! Teams battled through intense coding challenges, 
              strategic gameplay, and championship-level competition.
            </p>
          </div>
        </div>

        {/* Stats and content similar to CodeRed but with blue theme */}
        <div className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {eventStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              League Highlights
            </h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Championship Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={src}
                    alt={`SPL moment ${index + 1}`}
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

export default SPL;
