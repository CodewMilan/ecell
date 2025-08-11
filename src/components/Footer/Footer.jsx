import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Add Inter font for modern look */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
      
      <footer className="relative bg-black text-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          
          {/* Top Section - Brand and Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-6">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-black font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl tracking-tight leading-none">E-CELL</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">BMSIT&M</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-lg font-light">
                Empowering the next generation of entrepreneurs through innovation, collaboration, and cutting-edge programs at BMSIT&M.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <Youtube size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              {/* Navigate */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Navigate</h4>
                <ul className="space-y-4">
                  {['Home', 'Events', 'Gallery', 'Team', 'Alumni'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Programs</h4>
                <ul className="space-y-4">
                  {['Incubation', 'Bootcamp', 'Workshops', 'Mentorship', 'Case Crackers'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Connect</h4>
                <div className="space-y-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={14} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium leading-relaxed">
                        BMS Institute of Technology<br />
                        & Management<br />
                        <span className="text-gray-400">Bengaluru, Karnataka</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-gray-400" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">contact@ecell.bmsit.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm font-medium tracking-wide mb-1">
                © 2025 E-CELL BMSIT&M
              </p>
              <p className="text-gray-500 text-xs font-light tracking-wider uppercase">
                Ideate • Innovate • Inspire
              </p>
            </div>
            
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </footer>
    </>
  );
};

export default Footer;