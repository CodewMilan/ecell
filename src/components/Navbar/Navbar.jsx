import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#timeline' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Failure Story', href: '#failurestory' },
    { name: 'Team', href: '/team' }
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
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 ' 
      }`} style={{ fontFamily: 'Sora, sans-serif' }}>
        {/* Desktop Navigation */}
     <div className="hidden md:flex items-center bg-black px-6 py-3 shadow-lg border border-gray-800 font-sora">
  {/* Placeholder Logo */}
  <div className="flex items-center mr-8 text-white font-bold text-sm justify-center">
    <img src="./src/assets/ecellor.png" alt="" width={40} height={40}/>
  </div>

  {/* Navigation Links */}
  <ul className="flex items-center space-x-6 text-white">
    {navItems.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          className="hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>


        {/* Mobile Navigation Toggle */}
        <div className="md:hidden bg-black rounded-full p-3 shadow-lg border border-gray-800">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black rounded-2xl p-6 shadow-xl border border-gray-800 w-80 max-w-sm">
            <ul className="space-y-4 font-sora text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="text-white block hover:text-gray-300 transition-colors duration-200 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNav;
