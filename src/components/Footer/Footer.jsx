import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Left section - Brand */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-black">E</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">E-Cell</h2>
                <p className="text-gray-400 text-sm">BMSIT</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Empowering the next generation of entrepreneurs through innovation, mentorship, and cutting-edge resources.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/ecell.bmsit?igsh=MW5ldWh3YXVtNGNndA==", label: "Instagram" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/ecellbmsit", label: "LinkedIn" }
              ].map(({ Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10 hover:border-orange-500/50"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {label}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right section - Contact */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Get In Touch
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent" />
            </h3>
            
            {/* Desktop: Horizontal layout, Mobile: Vertical */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="group">
                <div className="flex lg:flex-col items-start lg:items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 text-center lg:text-center">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Visit Us</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      BMSIT, Lab Block<br />
                      Bengaluru, KA
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <a href="tel:+918867162414" className="flex lg:flex-col items-start lg:items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 text-center lg:text-center">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Call Us</p>
                    <p className="text-gray-400 text-xs group-hover:text-orange-500 transition-colors duration-300">
                      +91 88671 62414
                    </p>
                  </div>
                </a>
              </div>

              <div className="group">
                <a href="mailto:ecell@bmsit.in" className="flex lg:flex-col items-start lg:items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 text-center lg:text-center">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Email Us</p>
                    <p className="text-gray-400 text-xs group-hover:text-orange-500 transition-colors duration-300">
                      ecell@bmsit.in
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
      
      </div>
    </footer>
  );
};

export default Footer;