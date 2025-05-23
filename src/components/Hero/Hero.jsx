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
      <div className="min-h-screen bg-black relative overflow-hidden">
    
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1], 
          x: [0, 10, -10, 0], 
          y: [0, -10, 10, 0] 
        }} 
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }} 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
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

      
      <div className="flex items-center justify-center min-h-screen relative px-4 pt-20 pb-8 z-10">
        
        
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ease-out ${
          animationStage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${animationStage >= 2 ? 'opacity-0 pointer-events-none scale-110' : ''}`}>
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              WE ARE<br />
              <span className="italic font-light">ENTREPRENEURSHIP</span><br />
              <span className="hidden sm:inline">CELL</span>
              <span className="sm:hidden">CELL</span>
            </h1>
          </div>
        </div>

       
        <div className={`w-full transition-all duration-2000 ease-out ${
          animationStage >= 2 ? 'opacity-100' : 'opacity-0'
        } ${animationStage < 2 ? 'pointer-events-none' : ''}`}>
          
          
          <div className="hidden lg:flex items-center justify-center gap-12 xl:gap-16">
            
       
            <div className={`text-right transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
            }`}>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                WE<br />
                <span className="italic font-light">ARE</span>
              </h1>
            </div>
            
       
            <div className={`relative flex-shrink-0 transform transition-all duration-1500 ease-out ${
              animationStage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="relative w-64 h-80 xl:w-72 xl:h-88">
                {cardConfig.map((_, index) => renderCard(index, false))}
              </div>
            </div>
            
           
            <div className={`text-left transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                E- <br />CELL
              </h1>
            </div>
            
          </div>
          
       
          <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-8">
            
           
            <div className={`transform transition-all duration-2000 ease-out ${
              animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                WE ARE<br />
                <span className="italic font-light">E-CELL</span>
              </h1>
            </div>
            
           
            <div className={`relative flex-shrink-0 transform transition-all duration-1500 ease-out ${
              animationStage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="relative w-48 h-60 sm:w-56 sm:h-72">
                {cardConfig.map((_, index) => renderCard(index, true))}
              </div>
            </div>
            
          </div>
          
      
          <div className={`mt-12 lg:mt-16 max-w-4xl mx-auto text-center transition-all duration-1500 ease-out ${
            animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed px-4">
              Empowering the next generation of innovators and entrepreneurs,<br className="hidden sm:inline" />
              fostering creativity, leadership, and entrepreneurial mindset<br className="hidden sm:inline" />
              to build tomorrow's game-changing ventures.
            </p>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes backgroundFloat {
          0%, 100% { transform: scale(1.15) translate(0, 0); }
          33% { transform: scale(1.15) translate(10px, -10px); }
          66% { transform: scale(1.15) translate(-10px, 10px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -10px); }
          66% { transform: translate(-20px, 10px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-15px, 15px); }
          66% { transform: translate(15px, -15px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(25px, -20px); }
          66% { transform: translate(-25px, 20px); }
        }
      `}</style>
    </div>
  );
};

export default ECellHero;