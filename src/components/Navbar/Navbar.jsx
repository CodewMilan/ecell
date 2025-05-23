import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/#events' }, 
  { name: 'Failure Story', href: '/#failure-story' }, 
  { name: 'Gallery', href: '/gallery' }, 
  { name: 'Team', href: '/team' },
  { name: 'Alumni', href: '/alumni' } 
];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Floating Navigation */}
      <nav className={`text-white fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' 
      }`} style={{ fontFamily: 'Sora, sans-serif' }}>
        
        {/* Desktop Navigation - Sharp & Compact */}
        <div className="hidden md:flex items-center bg-gradient-to-r from-black/95 via-black/98 to-black/95 backdrop-blur-xl px-3 py-2 shadow-2xl border border-orange-500/40 rounded-full hover:border-orange-400/60 transition-all duration-300">
          {/* Compact Logo */}
          <div className="flex items-center mr-4 text-white font-bold">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg border border-orange-400/30">
              <span className="text-white font-bold text-sm">E</span>
            </div>
          </div>

          {/* Sharp Navigation Links */}
          <ul className="flex items-center space-x-1 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium relative group px-3 py-1.5 rounded-full hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30"
                >
                  {item.name}
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Toggle - Fixed to Top Right */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className={`fixed top-6 right-6 z-50 text-white hover:text-orange-400 transition-all duration-300 p-3 rounded-xl bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-orange-500/30 hover:border-orange-400/50 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-90'
          }`}
          aria-label="Toggle menu"
        >
          <div className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`fixed top-20 right-4 left-4 bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-500/40 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
        }`}>
          
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-orange-500/30">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <span className="text-white font-semibold text-xl">E-Cell</span>
                <p className="text-orange-400/80 text-sm font-medium">Navigation Menu</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="text-gray-100 block hover:text-white transition-all duration-300 text-lg font-medium py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/15 hover:to-orange-600/10 border border-transparent hover:border-orange-500/20 transform hover:translate-x-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <div className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-6"></div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-b-2xl">
            <div className="text-center">
              <span className="text-orange-400 text-sm font-semibold tracking-wide">E-CELL COMMUNITY</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;