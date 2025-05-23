
import React, { useState, useEffect } from 'react';
import arush from './assets/team/arush.jpg';
import ashutosh from './assets/team/ashutosh.jpg';
import deepthijain from './assets/team/deepthijain.jpg';
import Dhyeya from './assets/team/Dhyeya.jpg';
import divyashree from './assets/team/divyashree.jpg';
import gaganhs from './assets/team/gaganhs.jpeg';
import gaganjith from './assets/team/gaganjith.jpg';
import jasvanti from './assets/team/jasvanti.jpeg';
import jayakeerthi from './assets/team/jayakeerthi.jpg';
import krishna from './assets/team/krishna.jpg';
import manal from './assets/team/manal.png';
import maxson from './assets/team/maxson.JPG';
import mohit from './assets/team/mohit.jpeg';
import parathana from './assets/team/parathana.jpeg';
import sathyashivani from './assets/team/sathyashivani.jpeg';
import vaibhav from './assets/team/vaibhav.jpg';
import atul from './assets/team/atul.jpg';
import hitesh from './assets/team/hitesh.jpeg';
import tirth from './assets/team/tirth.jpg';
import fardeen from './assets/team/fardeen.jpeg';
import krishjain from './assets/team/krishjain.jpg'
import shriya from './assets/team/shriya.jpg';
import nishitha from './assets/team/nishitha.jpeg'
import milan from './assets/team/milan.jpg';
import akhilesh from './assets/team/akhilesh.jpeg';
import bhanu from './assets/team/bhanu.JPG';
import raashi from './assets/team/raashi.jpg';
import ananya from './assets/team/ananya.jpg';
import anvita from './assets/team/anvita.jpg';
import ansu from './assets/team/ansu.jpg';
import bhavana from './assets/team/bhavana.jpg';
import faizan from './assets/team/faizan.jpg';
import rishav from './assets/team/rishav.jpg';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const ECellTeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Team data structure with vice heads added
  const teamData = {
    leadership: [
      {
        id: 'president',
        name: 'Maxson Matthew',
        position: 'President',
        image: maxson
      }
    ],
    mentor: [
      {
        id: 'mentor',
        name: 'Mohit Monnappa',
        position: 'Mentor',
        image: mohit
      }
    ],
    vicePresidents: [
      {
        id: 'vp2',
        name: 'Nishitha Bodipati',
        position: 'Vice President',
        image: nishitha
      },
      {
        id: 'vp1',
        name: 'Vaibhav P',
        position: 'Vice President',
        image: vaibhav
      }
    ],
    heads: [
      {
        id: 'tech',
        name: 'Atul Kumar',
        position: 'Tech Head',
        image: atul
      },
      {
        id: 'outreach',
        name: 'Fardeen K',
        position: 'Corporate Relations Head',
        image:fardeen
      },
      {
        id: 'events',
        name: 'Gaganjith R',
        position: 'Events & Ops Head',
        image: gaganjith
      },
      {
        id: 'marketing',
        name: 'Hitesh R',
        position: 'Media & Marketing Head',
        image: hitesh
      },
      {
        id: 'content',
        name: 'Shriya',
        position: 'Content Head',
        image: shriya
      },
      {
        id: 'design',
        name: 'Tirth Panchori',
        position: 'Design Head',
        image: tirth
      }
    ],
    viceHeads: [
      {
        id: 'vice-tech',
        name: 'Milan S',
        position: 'Tech Vice Head',
        image: milan
      },
      {
        id: 'vice-media&marketing',
        name: 'Bhanu Prasad',
        position: 'Media Vice Head',
        image: bhanu
      },
      {
        id: 'vice-design',
        name: 'Akhilesh Pachnanda',
        position: 'Design Vice Head',
        image: akhilesh
      }
    ],
    associates: [
      {
        name: 'Ananya',
        position: 'Media Associate',
        image: ananya
      },
        {
        name: 'Bhavana',
        position: 'Marketing Associate',
        image: bhavana
      },
      {
        name: 'Dhyeya',
        position: 'Operations Associate',
        image: Dhyeya
      },
       {
        name: 'Divyashree',
        position: 'Operations Associate',
        image: divyashree
      },
       {
        name: 'Jasvanti',
        position: 'Design Associate',
        image: jasvanti
      },
      {
        name: 'Krishna',
        position: 'Marketing Associate',
        image: krishna
      },
      {
        name: 'Faizan Khan',
        position: 'Marketing Associate',
        image: faizan
      },
      {
        name: 'Parathana Dillip',
        position: 'Corporate Relations Associate',
        image: parathana
      },
     
     {
        name: 'Ansu Kumar',
        position: 'Tech Associate',
        image: ansu
      },
      {
        name: 'anvita',
        position: 'Marketing Associate',
        image: anvita
      },
    
      {
        name: 'Arush',
        position: 'Corporate Relations Associate',
        image: arush
      },
      {
        name: 'Ashutosh',
        position: 'Content Associate',
        image: ashutosh
      },
      {
        name: 'Deepthi Jain',
        position: 'Event & Ops Associate',
        image: deepthijain
      },
      {
        name: 'Gagan HS',
        position: 'Operations Associate',
        image: gaganhs
      },
      {
        name: 'Jayakeerthi',
        position: 'Content Associate',
        image: jayakeerthi
      },
      {
        name: 'krish Jain',
        position: 'Tech Associate',
        image: krishjain
      },
       {
        name: 'Manal',
        position: 'Marketing Associate',
        image: manal
      },
      
      {
        name: 'Raashi',
        position: 'Design Associate',
        image: raashi
      },
      {
         name: 'Rishav',
        position: 'Event & Ops Associate',
        image: rishav
      },
      {
        name: 'Sathya Shivani',
        position: 'Corporate Relations Associate',
        image: sathyashivani
      }
      
     
      
      
    ]
  };
  const TeamCard = ({ member, size = 'normal' }) => {
    const sizeClasses = {
      hero: 'w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem]',
      large: 'w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96',
      normal: 'w-56 h-70 sm:w-64 sm:h-80 md:w-72 md:h-88 lg:w-80 lg:h-96',
      small: 'w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 lg:w-72 lg:h-88',
      tiny: 'w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-70 lg:w-64 lg:h-80'
    };

    return (
      <div 
        className={`group relative cursor-pointer transition-all duration-300 hover:scale-105 ${sizeClasses[size]} mx-auto`}
        onMouseEnter={() => setHoveredMember(member.id || member.name)}
        onMouseLeave={() => setHoveredMember(null)}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="relative w-full h-full bg-gray-900 border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-xl group-hover:shadow-2xl rounded-lg">

          {/* Image container - increased height ratio */}
          <div className="relative overflow-hidden h-3/4">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 bg-gray-800"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Orange accent on hover */}
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform rotate-45 translate-x-6 -translate-y-6 group-hover:translate-x-3 group-hover:-translate-y-3 sm:translate-x-8 sm:-translate-y-8 sm:group-hover:translate-x-4 sm:group-hover:-translate-y-4"></div>
          </div>

          {/* Content section - increased height for better text spacing */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black/90 backdrop-blur-sm flex flex-col justify-center px-4 py-3 sm:px-5 sm:py-4 border-t border-orange-500/30">
            <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-1 leading-tight text-center" style={{ fontFamily: "'Sora', serif" }}>
              {member.name}
            </h3>
            <p className="text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-wider leading-tight text-center">
              {member.position}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Particles Background */}
      <canvas 
        id="particles-canvas" 
        className="fixed inset-0 pointer-events-none z-0"
      ></canvas>

      {/* Background grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative z-20 pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <Navbar />
          <div className="text-center mb-16 sm:mb-24">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter" style={{ fontFamily: "'Georgia', serif" }}>
                Meet Our
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 italic tracking-tighter mb-8 sm:mb-12" style={{ fontFamily: "'Georgia', serif" }}>
                TEAM
              </h1>
            </div>
            
            {/* Divider */}
            <div className="flex justify-center items-center space-x-3 sm:space-x-4">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 transform rotate-45"></div>
              <div className="w-20 sm:w-32 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-600 transform rotate-45"></div>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-orange-600 to-transparent"></div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                LEADERSHIP
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            {/* President */}
            <div className="flex justify-center mb-16 sm:mb-20">
              <TeamCard member={teamData.leadership[0]} size="hero" />
            </div>
            
            {/* Vice Presidents and Mentor - Better centering */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl justify-items-center">
                {teamData.vicePresidents.map((member) => (
                  <TeamCard key={member.id} member={member} size="large" />
                ))}
                <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
                  <TeamCard member={teamData.mentor[0]} size="large" />
                </div>
              </div>
            </div>
          </div>

          {/* Department Heads - Improved spacing for mobile */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                VERTICAL HEADS
              </h2>
              <div className="w-10 sm:w-14 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl justify-items-center">
                {teamData.heads.map((member) => (
                  <TeamCard key={member.id} member={member} size="normal" />
                ))}
              </div>
            </div>
          </div>

          {/* Vice Heads - Properly centered */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                VICE HEADS
              </h2>
              <div className="w-10 sm:w-14 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl justify-items-center">
                {teamData.viceHeads.map((member) => (
                  <TeamCard key={member.id} member={member} size="small" />
                ))}
              </div>
            </div>
          </div>

          {/* Associates - Better spacing and larger cards */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                ASSOCIATES
              </h2>
              <div className="w-10 sm:w-14 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-8xl justify-items-center">
                {teamData.associates.map((member, index) => (
                  <TeamCard key={index} member={member} size="tiny" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ECellTeamPage;