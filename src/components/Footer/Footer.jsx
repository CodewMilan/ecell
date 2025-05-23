import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Lightbulb,
  Users,
  Calendar,
  Award
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-500 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-500" style={{ fontFamily: 'Georgia, serif' }}>
                    E-Cell
                  </h3>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Innovation Hub
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Sora, sans-serif' }}>
                Empowering the next generation of entrepreneurs through innovation, mentorship, and cutting-edge resources.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-500 flex items-center" style={{ fontFamily: 'Georgia, serif' }}>
                <Users className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                {['About Us', 'Our Team', 'Mentorship', 'Startup Resources', 'Success Stories', 'Join E-Cell'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events & Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-500 flex items-center" style={{ fontFamily: 'Georgia, serif' }}>
                <Calendar className="w-5 h-5 mr-2" />
                Events & Programs
              </h4>
              <ul className="space-y-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                {['Startup Bootcamp', 'Pitch Competitions', 'Networking Events', 'Workshops', 'Hackathons', 'Guest Lectures'].map((event) => (
                  <li key={event}>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {event}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-500 flex items-center" style={{ fontFamily: 'Georgia, serif' }}>
                <Award className="w-5 h-5 mr-2" />
                Get In Touch
              </h4>
              <div className="space-y-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Innovation Center, Block A<br />
                      Your College Campus<br />
                      City, State - 123456
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href="mailto:contact@ecell.college.edu" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    contact@ecell.college.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h5 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Stay Updated
                </h5>
                <p className="text-gray-400" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Subscribe to our newsletter for the latest updates and opportunities
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-4 py-3 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-r-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400" style={{ fontFamily: 'Sora, sans-serif' }}>
                  © 2024 E-Cell. All rights reserved. | 
                  <a href="#" className="text-orange-500 hover:text-orange-400 ml-1">Privacy Policy</a> | 
                  <a href="#" className="text-orange-500 hover:text-orange-400 ml-1">Terms of Service</a>
                </p>
              </div>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;