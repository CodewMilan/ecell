import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } 
        // Hide navbar when scrolling down
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsOpen(false); // Close mobile menu when hiding
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`} 
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-200/20 dark:border-slate-700/50 rounded-2xl px-8 py-3 flex items-center justify-between w-[95%] max-w-4xl transition-all duration-300 hover:shadow-3xl">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
              E-CELL
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/50 rounded-2xl shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-6 space-y-4">
              <a href="#" className="block text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-base py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                Home
              </a>
              <a href="#" className="block text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-base py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                About
              </a>
              <a href="#" className="block text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium text-base py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                Services
              </a>
              <a href="#" className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 mt-4">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}