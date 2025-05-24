import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArrowLeft, Users, Trophy, Calendar, Clock } from 'lucide-react';
import codered1 from "./assets/codered25/codered1.jpg";
import codered2 from "./assets/codered25/codered2.jpg";
import codered3 from "./assets/codered25/codered3.jpg";
import codered4 from "./assets/codered25/codered4.jpg";

const CodeRed25 = () => {
  const galleryImages = [codered1, codered2, codered3, codered4];
  
  const eventStats = [
    { icon: Users, label: 'Total Participants', value: '247' },
    { icon: Trophy, label: 'Winners', value: '3 Teams' },
    { icon: Calendar, label: 'Event Date', value: 'Feb 15, 2025' },
    { icon: Clock, label: 'Duration', value: '6 Hours' },
  ];

  const highlights = [
    "🏆 Team 'ByteForce' secured first place with an innovative solution",
    "💡 45+ creative algorithms were submitted across all challenges", 
    "🎯 Record-breaking participation with 80+ teams competing",
    "🔥 Live coding sessions that kept everyone on the edge"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>
        <Navbar />
        
        <div className="absolute top-6 left-6 z-20">
          <a href="/#events" className="group flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-all duration-300">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Events</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
              Event Recap
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              CODERED 25
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              An electrifying day of competitive programming that brought together the finest coding minds. 
              Witness the passion, the competition, and the incredible solutions that emerged.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {eventStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Event Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Event Highlights
            </h2>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Moments from CodeRed 25
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={src}
                    alt={`CodeRed 25 moment ${index + 1}`}
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

export default CodeRed25;
