import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArrowLeft, Users, Trophy, Calendar, Clock } from 'lucide-react';
import img1 from "./assets/paneldiscussion/20241010_115150.jpg";
import img2 from "./assets/paneldiscussion/20241010_115151.jpg";
import img3 from "./assets/paneldiscussion";
import codered2 from "./assets/codered25/codered2.jpg";
import codered3 from "./assets/codered25/codered3.jpg";
import codered4 from "./assets/codered25/codered4.jpg";

const PanelDiscussion = () => {
  const eventStats = [
    { icon: Users, label: 'Industry Experts', value: '8' },
    { icon: Target, label: 'Key Topics', value: '5' },
    { icon: Calendar, label: 'Event Date', value: 'Feb 28, 2025' },
    { icon: Clock, label: 'Discussion Time', value: '4 Hours' },
  ];

  const highlights = [
    "🎙️ Industry leaders shared insights on AI's future in technology",
    "💡 Interactive Q&A sessions with 200+ engaged attendees",
    "🌟 Networking opportunities with C-suite executives",
    "📚 Exclusive industry reports and career guidance provided"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>
        <Navbar />
        
        <div className="absolute top-6 left-6 z-20">
          <a href="/#events" className="group flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all duration-300">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Events</span>
          </a>
        </div>

        <div className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6">
              Industry Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              PANEL DISCUSSION
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              An enlightening conversation with industry pioneers! Distinguished experts shared their wisdom, 
              discussed emerging trends, and provided invaluable career insights to aspiring professionals.
            </p>
          </div>
        </div>

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {eventStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Discussion Highlights
            </h2>
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Moments of Wisdom
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={src}
                    alt={`Panel Discussion moment ${index + 1}`}
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