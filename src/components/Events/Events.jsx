import React, { useState, useEffect, useRef } from 'react';

const ECellEventsScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);

  const events = [
    { name: "CodeRed", path: "/codered" },
    { name: "Advert1.0", path: "/advert" },
    { name: "Spl", path: "/spl" },
    { name: "Case Crackers", path: "/case-crackers" },
    { name: "Chitting", path: "/chitting" },
    { name: "Panel Discussion", path: "/panel-discussion" },
    { name: "Rip Off", path: "/rip-off" }
  ];

  // Duplicate events for infinite scroll effect
  const extendedEvents = [...events, ...events, ...events];

  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % events.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, events.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const items = itemRefs.current;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      items.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        
        const itemCenter = itemRect.top + itemRect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        
        const distance = Math.abs(itemCenter - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index % events.length;
        }
      });
      
      setActiveIndex(closestIndex);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [events.length]);

  const scrollToEvent = (index) => {
    setIsAutoplay(false);
    setActiveIndex(index);
    
    const targetItem = itemRefs.current[index + events.length];
    if (targetItem && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemRect = targetItem.getBoundingClientRect();
      
      const scrollTop = targetItem.offsetTop - container.offsetTop - (window.innerHeight / 2) + (itemRect.height / 2);
      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
    
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const handleEventClick = (event, index) => {
    const componentName = event.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    
    try {
      const newWindow = window.open('', '_blank');
      newWindow.document.write(`
        <html>
          <head>
            <title>${event.name} - E-Cell Event</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              body { 
                font-family: 'Sora', sans-serif; 
                background: #000000;
                color: white;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow-x: hidden;
              }
              
              .bg-pattern {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at 20% 80%, rgba(253, 119, 34, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(253, 119, 34, 0.08) 0%, transparent 50%);
                z-index: -1;
              }
              
              .back-btn { 
                position: fixed; 
                top: 30px; 
                left: 30px; 
                background: rgba(253, 119, 34, 0.1);
                border: 1px solid rgba(253, 119, 34, 0.3);
                color: #FD7722; 
                padding: 12px 24px; 
                border-radius: 8px; 
                cursor: pointer; 
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                z-index: 100;
              }
              
              .back-btn:hover { 
                background: rgba(253, 119, 34, 0.2);
                border-color: #FD7722;
                transform: translateY(-2px);
              }
              
              .container {
                text-align: center;
                max-width: 800px;
                padding: 0 40px;
              }
              
              .event-title {
                font-size: clamp(3rem, 8vw, 6rem);
                font-weight: 700;
                background: linear-gradient(135deg, #FD7722 0%, #ff8c42 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 30px;
                line-height: 1.1;
              }
              
              .event-subtitle {
                font-size: 1.2rem;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 40px;
                font-weight: 300;
                letter-spacing: 0.5px;
              }
              
              .event-description {
                font-size: 1.1rem;
                line-height: 1.8;
                color: rgba(255, 255, 255, 0.8);
                max-width: 600px;
                margin: 0 auto 50px;
              }
              
              .cta-button {
                background: linear-gradient(135deg, #FD7722 0%, #ff8c42 100%);
                border: none;
                color: white;
                padding: 16px 32px;
                border-radius: 8px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              
              .cta-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(253, 119, 34, 0.3);
              }
              
              .decorative-line {
                width: 80px;
                height: 3px;
                background: linear-gradient(90deg, #FD7722, transparent);
                margin: 30px auto;
              }
              
              @media (max-width: 768px) {
                .container {
                  padding: 0 20px;
                }
                
                .back-btn {
                  top: 20px;
                  left: 20px;
                  padding: 10px 20px;
                  font-size: 13px;
                }
                
                .event-description {
                  font-size: 1rem;
                }
                
                .cta-button {
                  padding: 14px 28px;
                  font-size: 1rem;
                }
              }
            </style>
          </head>
          <body>
            <div class="bg-pattern"></div>
            <button class="back-btn" onclick="window.close()">← Back to Events</button>
            
            <div class="container">
              <h1 class="event-title">${event.name}</h1>
              <div class="decorative-line"></div>
              <p class="event-subtitle">E-Cell Exclusive Event</p>
              <p class="event-description">
                Welcome to ${event.name}! This is an innovative event designed to challenge and inspire entrepreneurs. 
                Join us for an unforgettable experience filled with learning, networking, and growth opportunities.
                <br><br>
                Stay tuned for more details about registration, schedule, and exciting prizes!
              </p>
              <button class="cta-button" onclick="alert('Registration coming soon!')">
                Register Interest
              </button>
            </div>
          </body>
        </html>
      `);
    } catch (error) {
      console.log('Event component not found, showing default page');
    }
    
    scrollToEvent(index);
  };

  const getItemStyles = (index) => {
    const actualIndex = index % events.length;
    const isActive = actualIndex === activeIndex;
    
    return {
      transform: isActive ? 'scale(1.05)' : 'scale(0.85)',
      opacity: isActive ? 1 : 0.5,
      filter: isActive ? 'none' : 'grayscale(70%)',
    };
  };

  const formatEventName = (name) => {
    if (name === "Advert1.0") return ["Advert", "1.0"];
    if (name === "Case Crackers") return ["Case", "Crackers"];
    if (name === "Panel Discussion") return ["Panel", "Discussion"];
    if (name === "Rip Off") return ["Rip", "Off"];
    return [name];
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" style={{ fontFamily: 'Sora, sans-serif' }} id='events'>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

    
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#FD7722]/5"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#FD7722] rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#FD7722] rounded-full opacity-40"></div>
      </div>


      <div className="hidden lg:flex h-screen items-center">
    
        <div className="w-[55%] flex items-center justify-center pl-20 xl:pl-24">
          <div className="text-left">
            <div className="mb-6">
              <h2 className="text-sm font-medium tracking-[0.3em] text-gray-400 mb-6 uppercase" style={{ fontFamily: 'Georgia, sans-serif' }}>
                Check out
              </h2>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-3" style={{ fontFamily: 'Georgia, sans-serif' }}>
                E-Cell's
              </h3>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-3" style={{ fontFamily: 'Georgia, sans-serif' }}>
                Cool
              </h3>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, sans-serif' }}>
                & Fun
              </h3>
              <h3 className="text-6xl xl:text-7xl font-bold text-[#FD7722] leading-tight italic" style={{ fontFamily: 'Georgia, sans-serif' }}>
                EVENTS
              </h3>
            </div>
            
           
            <div className="mt-8">
              <div className="w-28 h-0.5 bg-gradient-to-r from-[#FD7722] to-transparent mb-8"></div>
              <h1 className="text-7xl xl:text-8xl font-black text-[#FD7722] leading-none" style={{ fontFamily: 'Sora, sans-serif' }}>
                {formatEventName(events[activeIndex].name).map((word, i) => (
                  <div key={i} className="leading-none">{word}</div>
                ))}
              </h1>
            </div>
          </div>
        </div>

      
        <div className="w-[45%] h-screen flex items-center justify-center relative">
         
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-16 opacity-15">
            <div className="text-7xl font-bold text-gray-600">E</div>
            <div className="text-5xl font-bold text-gray-600">CELL</div>
            <div className="text-7xl font-bold text-gray-600">HUB</div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="h-[85%] overflow-y-auto overflow-x-hidden scrollbar-hide w-full relative z-10"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex flex-col items-center justify-center py-8 space-y-8">
              {extendedEvents.map((event, index) => (
                <div
                  key={`${event.name}-${index}`}
                  ref={(el) => itemRefs.current[index] = el}
                  className="text-center cursor-pointer transition-all duration-700 ease-out group relative"
                  style={getItemStyles(index)}
                  onClick={() => handleEventClick(event, index % events.length)}
                >
                  <h3 className="text-3xl xl:text-4xl font-bold text-white hover:text-[#FD7722] transition-all duration-500 group-hover:scale-110" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {event.name}
                  </h3>
                  <div className="mt-4 h-0.5 w-0 bg-[#FD7722] mx-auto group-hover:w-20 transition-all duration-500"></div>
                  
           
                  <div className="absolute inset-0 -m-6 rounded-lg border border-transparent group-hover:border-[#FD7722]/20 group-hover:bg-[#FD7722]/5 transition-all duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <div className="lg:hidden h-screen flex flex-col">
 
        <div className="flex-shrink-0 pt-8 pb-4 px-4">
          <div className="text-center">
            <h2 className="text-xs font-medium tracking-[0.2em] text-gray-400 mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Check out our
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FD7722] italic mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Very Cool EVENTS
            </h3>
          </div>
        </div>

      
        <div className="flex-1 flex flex-col min-h-0">
       
          <div className="flex-shrink-0 py-6 px-4">
            <div className="text-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#FD7722] to-transparent mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                {formatEventName(events[activeIndex].name).map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </h1>
            </div>
          </div>

         
          <div className="flex-1 min-h-0">
            <div 
              ref={scrollContainerRef}
              className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide px-4"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex flex-col items-center py-4 space-y-6">
                {extendedEvents.map((event, index) => (
                  <div
                    key={`${event.name}-${index}`}
                    ref={(el) => itemRefs.current[index] = el}
                    className="text-center cursor-pointer transition-all duration-700 ease-out group relative w-full max-w-xs"
                    style={getItemStyles(index)}
                    onClick={() => handleEventClick(event, index % events.length)}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-[#FD7722] transition-all duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {event.name}
                    </h3>
                    <div className="mt-3 h-0.5 w-0 bg-[#FD7722] mx-auto group-hover:w-16 transition-all duration-500"></div>
                    
                  
                    <div className="absolute inset-0 -m-4 rounded-lg border border-transparent group-hover:border-[#FD7722]/20 group-hover:bg-[#FD7722]/5 transition-all duration-500 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <button
        onClick={() => setIsAutoplay(!isAutoplay)}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 z-20"
      >
        <div className="flex items-center space-x-2 text-xs font-medium">
          <div className={`w-2 h-2 rounded-full ${isAutoplay ? 'bg-[#FD7722]' : 'bg-red-500'}`}></div>
          <span style={{ fontFamily: 'Inter, sans-serif' }}>{isAutoplay ? 'AUTO' : 'MANUAL'}</span>
        </div>
      </button>

      {/* Gradient Overlays - More subtle */}
      <div className="absolute top-0 right-0 lg:w-[45%] w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 lg:w-[45%] w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ECellEventsScroll;