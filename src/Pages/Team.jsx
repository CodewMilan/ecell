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
import shriya from './assets/team/shriya.jpg';

const ECellTeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeTeam, setActiveTeam] = useState(null);
  const [autoSelectIndex, setAutoSelectIndex] = useState(0);

  // Team data structure
  const teamData = {
    leadership: [
      {
        id: 'president',
        name: 'Maxson Matthew',
        position: 'President',
        image: maxson,
        bio: 'Leading E-Cell with vision and innovation',
        linkedin: '#',
        email: 'president@ecell.com'
      }
    ],
    mentor: [
      {
        id: 'mentor',
        name: 'Mohit Monnappa',
        position: 'Mentor',
        image: mohit,
        bio: 'Guiding students towards entrepreneurial excellence',
        linkedin: '#',
        email: 'mentor@ecell.com'
      }
    ],
    vicePresidents: [
      {
        id: 'vp1',
        name: 'Vaibhav P',
        position: 'Vice President',
        image: vaibhav,
        bio: 'Streamlining operations and processes',
        linkedin: '#',
        email: 'vp1@ecell.com'
      },
      {
        id: 'vp2',
        name: 'Nishitha Bodipati',
        position: 'Vice President',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
        bio: 'Strategic planning and business development',
        linkedin: '#',
        email: 'vp2@ecell.com'
      }
    ],
    verticalHeads: [
      {
        id: 'tech',
        name: 'Atul Kumar',
        position: 'Tech Head',
        vertical: 'Technology',
        image: atul,
        bio: 'Leading technical innovations',
        linkedin: '#',
        email: 'tech@ecell.com'
      },
      {
        id: 'marketing',
        name: 'Hitesh R',
        position: 'Media & Marketing Head',
        vertical: 'Media & Marketing',
        image: hitesh,
        bio: 'Brand building and communications',
        linkedin: '#',
        email: 'marketing@ecell.com'
      },
      {
        id: 'events',
        name: 'Gaganjith R',
        position: 'Events& Ops Head',
        vertical: 'Event & Operations',
        image: gaganjith,
        bio: 'Creating memorable experiences',
        linkedin: '#',
        email: 'events@ecell.com'
      },
      {
        id: 'Content',
        name: 'Shriya',
        position: 'Content Head',
        vertical: 'Content Head',
        image: shriya,
        bio: 'Crafting compelling narratives',
        linkedin: '#'
      },
      {
        id: 'Design',
        name: 'Tirth Panchori',
        position: 'Design Head',
        vertical: 'Content & Media',
        image:tirth ,
        bio: 'Crafting compelling narratives',
        linkedin: '#',
        email: 'content@ecell.com'
      },
      {
        id: 'Corporate Relations',
        name: 'Fardeen K',
        position: 'Outreach Head',
        vertical: 'Community Outreach',
        image: fardeen,
        bio: 'Building community connections',
        linkedin: '#',
        email: 'outreach@ecell.com'
      }
    ],
    teams: {
      tech: [
        { name: 'James Wilson', position: 'Technology Associate', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=400&fit=crop&crop=face' },
        { name: 'Maya Singh', position: 'Technology Associate', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=300&h=400&fit=crop&crop=face' },
        { name: 'Chris Taylor', position: 'Technology Associate', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face' },
        { name: 'Priya Sharma', position: 'Technology Associate', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face' }
      ],
      marketing: [
        { name: 'Noah Johnson', position: 'Marketing & PR Associate', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face' },
        { name: 'Zoe Chen', position: 'Marketing & PR Associate', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face' },
        { name: 'Ethan Davis', position: 'Marketing & PR Associate', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=400&fit=crop&crop=face' },
        { name: 'Ava Martinez', position: 'Marketing & PR Associate', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face' }
      ],
      events: [
        { name: 'Lucas Brown', position: 'Event Management Associate', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face' },
        { name: 'Mia Rodriguez', position: 'Event Management Associate', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face' },
        { name: 'Owen Wilson', position: 'Event Management Associate', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=400&fit=crop&crop=face' },
        { name: 'Isla Thompson', position: 'Event Management Associate', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face' }
      ],
      finance: [
        { name: 'Liam Garcia', position: 'Finance & Operations Associate', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face' },
        { name: 'Chloe Lee', position: 'Finance & Operations Associate', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face' },
        { name: 'Mason White', position: 'Finance & Operations Associate', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face' },
        { name: 'Harper Kim', position: 'Finance & Operations Associate', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face' }
      ],
      content: [
        { name: 'Jacob Miller', position: 'Content & Media Associate', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=400&fit=crop&crop=face' },
        { name: 'Grace Zhang', position: 'Content & Media Associate', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face' },
        { name: 'Logan Anderson', position: 'Content & Media Associate', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face' },
        { name: 'Lily Patel', position: 'Content & Media Associate', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=300&h=400&fit=crop&crop=face' }
      ],
      outreach: [
        { name: 'Carter Smith', position: 'Community Outreach Associate', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=400&fit=crop&crop=face' },
        { name: 'Aria Johnson', position: 'Community Outreach Associate', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face' },
        { name: 'Hunter Davis', position: 'Community Outreach Associate', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=400&fit=crop&crop=face' },
        { name: 'Nova Wilson', position: 'Community Outreach Associate', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face' }
      ]
    }
  };

  // Auto-selection effect for vertical heads
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoSelectIndex(prev => {
        const nextIndex = (prev + 1) % teamData.verticalHeads.length;
        setActiveTeam(teamData.verticalHeads[nextIndex].id);
        return nextIndex;
      });
    }, 3000);

    if (teamData.verticalHeads.length > 0) {
      setActiveTeam(teamData.verticalHeads[0].id);
    }

    return () => clearInterval(interval);
  }, []);

  const MemberCard = ({ member, size = 'normal' }) => (
    <div 
      className={`group relative cursor-pointer transition-all duration-700 hover:scale-[1.02] ${
        size === 'large' ? 'w-80' : size === 'medium' ? 'w-72' : 'w-64'
      }`}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 group-hover:border-orange-500/60 transition-all duration-700 shadow-2xl group-hover:shadow-orange-500/20">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
        
        <div className={`relative overflow-hidden ${size === 'large' ? 'h-96' : size === 'medium' ? 'h-80' : 'h-72'}`}>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className={`font-bold mb-2 ${size === 'large' ? 'text-2xl' : 'text-xl'} text-white group-hover:text-orange-400 transition-colors duration-300`}>
            {member.name}
          </h3>
          <p className="text-orange-400 font-semibold mb-2 text-sm uppercase tracking-wide">{member.position}</p>
          {member.bio && (
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {member.bio}
            </p>
          )}
        </div>
        
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-9 h-9 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
            <span>in</span>
          </div>
          <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
            <span>@</span>
          </div>
        </div>
      </div>
    </div>
  );

  const VerticalHead = ({ member, index }) => (
    <div 
      className={`relative cursor-pointer transition-all duration-700 group ${
        index % 2 === 0 ? 'transform translate-y-0' : 'transform translate-y-8'
      }`}
      style={{ 
        zIndex: teamData.verticalHeads.length - index,
        marginLeft: index > 0 ? '-40px' : '0'
      }}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => setActiveTeam(activeTeam === member.id ? null : member.id)}
    >
      <div className={`absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-xl transition-all duration-700 ${
        activeTeam === member.id ? 'opacity-60' : 'opacity-0 group-hover:opacity-100'
      }`}></div>
      
      <div className="relative w-20 h-32 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-56 lg:h-80">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 lg:w-24 lg:h-6 bg-black/30 blur-sm"></div>
        
        <div className={`relative w-full h-full rounded-t-full border-4 transition-all duration-700 overflow-hidden ${
          activeTeam === member.id 
            ? 'border-orange-500/80 scale-105' 
            : 'border-gray-500/30 group-hover:border-orange-500/60'
        }`}>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 transition-opacity duration-500 ${
            activeTeam === member.id ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'
          }`}></div>
          
          <div className="absolute inset-0 transform scale-100 group-hover:scale-105 transition-transform duration-700"></div>
        </div>
        
        <div className={`absolute -bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
          activeTeam === member.id 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 lg:px-4 lg:py-2 font-bold text-xs lg:text-sm whitespace-nowrap shadow-lg">
            {member.name}
          </div>
          <div className="text-gray-400 text-xs mt-1 font-medium">
            {member.vertical}
          </div>
        </div>
        
        {activeTeam === member.id && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white"></div>
          </div>
        )}
      </div>
    </div>
  );

  const MobileVerticalHead = ({ member, index }) => (
    <div 
      className="relative cursor-pointer transition-all duration-700 group"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => setActiveTeam(activeTeam === member.id ? null : member.id)}
    >
      <div className={`absolute -inset-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-lg transition-all duration-700 ${
        activeTeam === member.id ? 'opacity-60' : 'opacity-0 group-hover:opacity-100'
      }`}></div>
      
      <div className="relative w-24 h-40">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black/30 blur-sm"></div>
        
        <div className={`relative w-full h-full rounded-t-full border-3 transition-all duration-700 overflow-hidden ${
          activeTeam === member.id 
            ? 'border-orange-500/80 scale-105' 
            : 'border-gray-500/30 group-hover:border-orange-500/60'
        }`}>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 transition-opacity duration-500 ${
            activeTeam === member.id ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'
          }`}></div>
        </div>
        
        <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
          activeTeam === member.id 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 font-bold text-xs whitespace-nowrap shadow-lg">
            {member.name}
          </div>
          <div className="text-gray-400 text-xs mt-1 font-medium">
            {member.vertical}
          </div>
        </div>
        
        {activeTeam === member.id && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-white"></div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #f97316 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.05
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-orange-500 opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 lg:mb-16">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white mb-2 tracking-tight">
                Meet the
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 italic tracking-tight">
                TEAM
              </h1>
            
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 lg:mt-6"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto mt-2 opacity-60"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
                President
              </h2>
              <div className="flex justify-center">
                <MemberCard member={teamData.leadership[0]} size="large" />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
                Mentor
              </h2>
              <div className="flex justify-center">
                <MemberCard member={teamData.mentor[0]} size="large" />
              </div>
            </div>
          </div>

          <div className="mb-16 lg:mb-24">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 lg:mb-12 text-center">
              Vice Presidents
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
              {teamData.vicePresidents.map((member) => (
                <MemberCard key={member.id} member={member} size="medium" />
              ))}
            </div>
          </div>

          <div className="mb-16 lg:mb-24">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 lg:mb-12 text-center">
              Vertical Heads
            </h2>
            
            <div className="hidden lg:flex justify-center items-end mb-16 px-20">
              {teamData.verticalHeads.map((member, index) => (
                <VerticalHead key={member.id} member={member} index={index} />
              ))}
            </div>

            <div className="lg:hidden">
              <div className="flex justify-center items-end mb-8" style={{ marginLeft: '-20px' }}>
                {teamData.verticalHeads.slice(0, 3).map((member, index) => (
                  <div key={member.id} style={{ 
                    zIndex: 3 - index, 
                    marginLeft: index > 0 ? '-16px' : '0',
                    transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(16px)'
                  }}>
                    <MobileVerticalHead member={member} index={index} />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center items-end mb-12" style={{ marginLeft: '-20px' }}>
                {teamData.verticalHeads.slice(3, 6).map((member, index) => (
                  <div key={member.id} style={{ 
                    zIndex: 3 - index, 
                    marginLeft: index > 0 ? '-16px' : '0',
                    transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(16px)'
                  }}>
                    <MobileVerticalHead member={member} index={index + 3} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Members */}
          {activeTeam && teamData.teams[activeTeam] && (
            <div className="mb-20 border-t border-gray-800/50 pt-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                <span className="text-orange-500">
                  {teamData.verticalHeads.find(v => v.id === activeTeam)?.vertical}
                </span>
                <span className="text-white"> Team</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {teamData.teams[activeTeam].map((member, index) => (
                  <div key={index} className="group relative cursor-pointer transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-orange-500/60 transition-all duration-500">
                      <div className="relative overflow-hidden h-64">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-orange-400 font-medium text-sm">{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ECellTeamPage;