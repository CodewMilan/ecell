import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgimage from './assets/back.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

const cardConfig = [
  {
    id: 1,
    emoji: "⚡",
    title: "LEAD",
    subtitle: "Change Makers",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    bgColor: "from-red-500 to-red-600",
    imageUrl: `${img1}`
  },
  {
    id: 2,
    emoji: "💡",
    title: "CREATE",
    subtitle: "Solutions Matter",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    bgColor: "from-purple-500 to-purple-600",
    imageUrl: `${img2}`
  },
  {
    id: 3,
    emoji: "🚀",
    title: "INNOVATE",
    subtitle: "Future Forward",
    gradient: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
    bgColor: "from-orange-500 to-orange-600",
   imageUrl: `${img3}`
  }
];

const ECellHero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [cardAnimation, setCardAnimation] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 2500);
    const timer3 = setTimeout(() => setAnimationStage(3), 4000);
    
   
    const cardTimer = setTimeout(() => {
      setInterval(() => {
        setCardAnimation(prev => (prev + 1) % 3);
      }, 2500);
    }, 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(cardTimer);
    };
  }, []);

const renderCardContent = (card) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl">
      {card.imageUrl && (
        <img
          src={card.imageUrl}
          alt={card.imageAlt || "Card image"}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};


  const renderCard = (cardIndex, isMobile = false) => {
    const card = cardConfig[cardIndex];
    const roundedClass = isMobile ? 'rounded-2xl' : 'rounded-3xl';
    const shadowClass = isMobile ? 'shadow-xl' : 'shadow-2xl';
    
 
    const getAnimationClasses = (position) => {
      const translations = isMobile ? 
        ['translate-x-4 translate-y-4', 'translate-x-2 translate-y-2', 'translate-x-0 translate-y-0'] :
        ['translate-x-6 translate-y-6', 'translate-x-3 translate-y-3', 'translate-x-0 translate-y-0'];
      
      const rotations = ['rotate-12', 'rotate-6', 'rotate-0'];
      const scales = ['scale-95', 'scale-98', 'scale-100'];
      const zIndexes = ['z-10', 'z-20', 'z-30'];
      
      const currentPosition = (cardAnimation + position) % 3;
      
      return `${rotations[currentPosition]} ${translations[currentPosition]} ${zIndexes[currentPosition]} ${scales[currentPosition]}`;
    };

    return (
      <div 
        key={card.id}
        className={`absolute inset-0 ${roundedClass} ${shadowClass} transition-all duration-1000 ease-out ${getAnimationClasses(cardIndex)}`}
        style={{
          background: card.gradient,
          boxShadow: isMobile ? '0 20px 40px -12px rgba(0, 0, 0, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {renderCardContent(card, isMobile)}
      </div>
    );
  };

  return (
      <div className="min-h-screen bg-black lg:bg-transparent relative overflow-hidden" >
    
{/* Desktop Background - Hidden on Mobile */}
<motion.div 
  animate={{ 
    x: [0, 5, -5, 0],     
    y: [0, -5, 5, 0]      
  }} 
  transition={{ 
    duration: 15, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }} 
  className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
  style={{ 
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          className="absolute w-40 h-40 bg-white/10 rounded-full blur-3xl top-1/3 left-1/4" 
          animate={{ 
            x: [0, 20, -20, 0], 
            y: [0, -10, 10, 0] 
          }} 
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }} 
        />
       
        <motion.div 
          className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-2xl top-2/3 right-1/4" 
          animate={{ 
            x: [0, -15, 15, 0], 
            y: [0, 15, -15, 0] 
          }} 
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }} 
        />
        <motion.div 
          className="absolute w-24 h-24 bg-orange-500/10 rounded-full blur-xl top-1/2 right-1/3" 
          animate={{ 
            x: [0, 25, -25, 0], 
            y: [0, -20, 20, 0] 
          }} 
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }} 
        />
      </motion.div>

    {/* Logos Section - responsive positioning */}
<nav className="flex justify-between items-center px-4 lg:px-8 pt-4">
  {/* Left: Logo 1 & Logo 2 - always visible */}
  <div className="flex gap-4 items-center">
    <img src="https://via.placeholder.com/50x50?text=Logo+1" alt="Logo 1" className="h-10 w-auto" />
    <img src="https://via.placeholder.com/50x50?text=Logo+2" alt="Logo 2" className="h-10 w-auto" />
    
    {/* Logo 3 (mobile only) */}
    <img
      src="https://via.placeholder.com/50x50?text=Logo+3"
      alt="Logo 3"
      className="h-10 w-auto lg:hidden"
    />
  </div>

  {/* Right: Logo 3 (desktop only) */}
  <div className="hidden lg:block">
    <img
      src="https://via.placeholder.com/50x50?text=Logo+3"
      alt="Logo 3"
      className="h-10 w-auto"
    />
  </div>
</nav>

       <div className="flex items-center justify-center min-h-screen relative px-4 pt-20 pb-8 z-10">
        
        {/* Initial Animation - "WE ARE ENTREPRENEURSHIP CELL" */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ease-out ${
          animationStage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${animationStage >= 2 ? 'opacity-0 pointer-events-none scale-110' : ''}`}>
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              WE ARE<br />
              <span className="italic font-light">ENTREPRENEURSHIP</span><br />
              <span className="hidden sm:inline">CELL</span>
              <span className="sm:hidden">CELL</span>
            </h1>
          </div>
        </div>

        {/* Main Layout */}
        <div className={`w-full transition-all duration-2000 ease-out ${
          animationStage >= 2 ? 'opacity-100' : 'opacity-0'
        } ${animationStage < 2 ? 'pointer-events-none' : ''}`}>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center gap-16 xl:gap-20 2xl:gap-24">
            
            {/* Left Text */}
            <div className={`text-right transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
            }`}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                WE<br />
                <span className="italic font-light">ARE</span><br />
                <span className="text-4xl lg:text-5xl xl:text-6xl">E-CELL</span>
              </h1>
            </div>
            
            {/* Center Cards - Balanced Size */}
            <div className={`relative flex-shrink-0 transform transition-all duration-1500 ease-out ${
              animationStage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="relative w-72 h-88 xl:w-80 xl:h-96">
                {cardConfig.map((_, index) => renderCard(index, false))}
              </div>
            </div>
            
            {/* Right Text */}
            <div className={`text-left transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="italic font-bold">IDEATE</span><br />
                <span className="italic font-bold">INNOVATE</span><br />
                <span className="italic font-bold">INSPIRE</span>
              </h1>
            </div>
            
          </div>
          
          {/* Mobile Layout - Centered */}
          <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-8">
            
            {/* Mobile Text - Centered */}
            <div className={`transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight text-center" style={{ fontFamily: 'Sora, sans-serif' }}>
                WE ARE<br />
                <span className="italic font-light">E-CELL</span>
              </h1>
            </div>
            
            {/* Mobile Cards - Centered */}
            <div className={`relative flex-shrink-0 transform transition-all duration-1500 ease-out ${
              animationStage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="relative w-52 h-68 sm:w-56 sm:h-72 mx-auto">
                {cardConfig.map((_, index) => renderCard(index, true))}
              </div>
            </div>
            
            {/* Mobile Additional Text - Centered */}
          
            
          </div>
          
          {/* Description Text - Centered */}
          <div className={`mt-12 lg:mt-16 max-w-4xl mx-auto text-center transition-all duration-1500 ease-out ${
            animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed px-4 text-center" style={{ fontFamily: 'Sora, sans-serif' }}>
              Empowering the next generation of innovators and entrepreneurs,<br className="hidden sm:inline" />
              fostering creativity, leadership, and entrepreneurial mindset<br className="hidden sm:inline" />
              to build tomorrow's game-changing ventures.
            </p>
          </div>
          
        </div>
      </div>

     
    </div>
  );
};

export default ECellHero;