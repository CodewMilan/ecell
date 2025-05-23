
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
import ananya from './assets/team/ananya.jpg';

const ECellTeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

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
        position: 'Outreach Head',
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
        position: 'Vice Tech Head',
        image: milan
      },
      {
        id: 'vice-media&marketing',
        name: 'Bhanu Prasad',
        position: 'Vice Media & Marketing Head',
        image: bhanu
      },
      {
        id: 'vice-design',
        name: 'Akhilesh Pachnanda',
        position: 'Vice Design Head',
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
        name: 'Krishna',
        position: 'Marketing Associate',
        image: krishna
      },
      {
        name: 'Parathana Dillip',
        position: 'Corporate Relations Associate',
        image: parathana
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
        name: 'Dhyeya',
        position: 'Operations Associate',
        image: Dhyeya
      },
      {
        name: 'Bhavana',
        position: 'Marketing Associate',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Arush',
        position: 'Corporate Relations Associate',
        image: arush
      },
      {
        name: 'Gagan HS',
        position: 'Operations Associate',
        image: gaganhs
      },
      {
        name: 'krish Jain',
        position: 'Tech Associate',
        image: krishjain
      },
      {
        name: 'James Wilson',
        position: 'Technology Associate',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Jordan Smith',
        position: 'Design Associate',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Lily Patel',
        position: 'Content & Media Associate',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Logan Anderson',
        position: 'Content & Media Associate',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Lucas Brown',
        position: 'Event Management Associate',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face'
      },
      {
        name: 'Maya Singh',
        position: 'Technology Associate',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=300&h=400&fit=crop&crop=face'
      }
    ]
  };

  // Enhanced card component with cleaner design
  const TeamCard = ({ member, size = 'normal', rank = 'member' }) => {
    const sizeClasses = {
      hero: 'w-80 h-96',
      large: 'w-72 h-88',
      normal: 'w-64 h-80',
      small: 'w-56 h-72',
      tiny: 'w-48 h-64'
    };

    const isHovered = hoveredMember === (member.id || member.name);

    return (
      <div 
        className={`group relative cursor-pointer transition-all duration-700 hover:scale-105 ${sizeClasses[size]} mx-auto`}
        onMouseEnter={() => setHoveredMember(member.id || member.name)}
        onMouseLeave={() => setHoveredMember(null)}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
        
        <div className="relative w-full h-full bg-black border border-gray-800 group-hover:border-orange-500/60 transition-all duration-700 overflow-hidden shadow-2xl group-hover:shadow-orange-500/20">
          
          {/* Image container */}
          <div className="relative overflow-hidden h-3/4">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Rank indicator for leadership */}
            {rank === 'leadership' && (
              <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm px-3 py-1">
                <div className="w-2 h-2 bg-white animate-pulse"></div>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="relative h-1/4 flex flex-col justify-center px-4 py-3 bg-gradient-to-t from-black to-gray-900">
            <h3 className="font-bold text-base lg:text-lg text-white group-hover:text-orange-400 transition-colors duration-500 mb-1 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              {member.name}
            </h3>
            <p className="text-orange-500 font-semibold text-xs lg:text-sm uppercase tracking-wider leading-tight">
              {member.position}
            </p>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 transition-all duration-700"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #f97316 0.5px, transparent 0.5px),
            radial-gradient(circle at 80% 80%, #f97316 0.5px, transparent 0.5px)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.03
        }}></div>
        
        {/* Ambient orbs */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-orange-500/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-orange-600/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-500/3 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent h-px top-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent h-px top-3/4"></div>
      </div>

      <div className="relative z-10 pt-20 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-24">
            <div className="mb-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-2 tracking-tighter" style={{ fontFamily: "'Georgia', serif" }}>
                Meet Our
              </h1>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 italic tracking-tighter mb-8" style={{ fontFamily: "'Georgia', serif" }}>
                TEAM
              </h1>
            </div>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-48 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-orange-600 to-transparent"></div>
            </div>
          </div>

          {/* Leadership Section - President, VPs, Mentor together */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                LEADERSHIP
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            {/* President */}
            <div className="flex justify-center mb-16">
              <TeamCard member={teamData.leadership[0]} size="hero" rank="leadership" />
            </div>
            
            {/* Vice Presidents and Mentor */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl">
                {teamData.vicePresidents.map((member) => (
                  <TeamCard key={member.id} member={member} size="large" rank="leadership" />
                ))}
                <TeamCard member={teamData.mentor[0]} size="large" rank="leadership" />
              </div>
            </div>
          </div>

          {/* Department Heads */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                DEPARTMENT HEADS
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl">
                {teamData.heads.map((member) => (
                  <TeamCard key={member.id} member={member} size="normal" />
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                TEAM
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            {/* Vice Heads */}
            <div className="mb-20">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-orange-400" style={{ fontFamily: "'Georgia', serif" }}>
                Vice Heads
              </h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl">
                  {teamData.viceHeads.map((member) => (
                    <TeamCard key={member.id} member={member} size="small" />
                  ))}
                </div>
              </div>
            </div>

            {/* Associates */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-orange-400" style={{ fontFamily: "'Georgia', serif" }}>
                Associates
              </h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 max-w-7xl">
                  {teamData.associates.map((member, index) => (
                    <TeamCard key={index} member={member} size="tiny" />
                  ))}
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default ECellTeamPage;