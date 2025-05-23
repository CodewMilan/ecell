import React, { useState, useEffect } from 'react';

const ECellTeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeTeam, setActiveTeam] = useState(null);

  // Team data structure
  const teamData = {
    leadership: [
      {
        id: 'president',
        name: 'John Doe',
        position: 'President',
        image: '/api/placeholder/300/400',
        bio: 'Leading E-Cell with vision and innovation',
        linkedin: '#',
        email: 'president@ecell.com'
      }
    ],
    mentor: [
      {
        id: 'mentor',
        name: 'Dr. Sarah Wilson',
        position: 'Mentor',
        image: '/api/placeholder/300/400',
        bio: 'Guiding students towards entrepreneurial excellence',
        linkedin: '#',
        email: 'mentor@ecell.com'
      }
    ],
    vicePresidents: [
      {
        id: 'vp1',
        name: 'Alice Johnson',
        position: 'Vice President - Operations',
        image: '/api/placeholder/300/400',
        bio: 'Streamlining operations and processes',
        linkedin: '#',
        email: 'vp1@ecell.com'
      },
      {
        id: 'vp2',
        name: 'Mike Chen',
        position: 'Vice President - Strategy',
        image: '/api/placeholder/300/400',
        bio: 'Strategic planning and business development',
        linkedin: '#',
        email: 'vp2@ecell.com'
      }
    ],
    verticalHeads: [
      {
        id: 'tech',
        name: 'Alex Kumar',
        position: 'Tech Head',
        vertical: 'Technology',
        image: '/api/placeholder/300/400',
        bio: 'Leading technical innovations',
        linkedin: '#',
        email: 'tech@ecell.com'
      },
      {
        id: 'marketing',
        name: 'Emma Davis',
        position: 'Marketing Head',
        vertical: 'Marketing & PR',
        image: '/api/placeholder/300/400',
        bio: 'Brand building and communications',
        linkedin: '#',
        email: 'marketing@ecell.com'
      },
      {
        id: 'events',
        name: 'Ryan Patel',
        position: 'Events Head',
        vertical: 'Event Management',
        image: '/api/placeholder/300/400',
        bio: 'Creating memorable experiences',
        linkedin: '#',
        email: 'events@ecell.com'
      },
      {
        id: 'finance',
        name: 'Sophie Brown',
        position: 'Finance Head',
        vertical: 'Finance & Operations',
        image: '/api/placeholder/300/400',
        bio: 'Managing finances and operations',
        linkedin: '#',
        email: 'finance@ecell.com'
      },
      {
        id: 'content',
        name: 'David Lee',
        position: 'Content Head',
        vertical: 'Content & Media',
        image: '/api/placeholder/300/400',
        bio: 'Crafting compelling narratives',
        linkedin: '#',
        email: 'content@ecell.com'
      },
      {
        id: 'outreach',
        name: 'Lisa Wong',
        position: 'Outreach Head',
        vertical: 'Community Outreach',
        image: '/api/placeholder/300/400',
        bio: 'Building community connections',
        linkedin: '#',
        email: 'outreach@ecell.com'
      }
    ],
    teams: {
      tech: [
        { name: 'James Wilson', position: 'Full Stack Developer', image: '/api/placeholder/250/300' },
        { name: 'Maya Singh', position: 'UI/UX Designer', image: '/api/placeholder/250/300' },
        { name: 'Chris Taylor', position: 'Mobile Developer', image: '/api/placeholder/250/300' },
        { name: 'Priya Sharma', position: 'Data Scientist', image: '/api/placeholder/250/300' }
      ],
      marketing: [
        { name: 'Noah Johnson', position: 'Social Media Manager', image: '/api/placeholder/250/300' },
        { name: 'Zoe Chen', position: 'Content Strategist', image: '/api/placeholder/250/300' },
        { name: 'Ethan Davis', position: 'Brand Designer', image: '/api/placeholder/250/300' },
        { name: 'Ava Martinez', position: 'PR Specialist', image: '/api/placeholder/250/300' }
      ],
      events: [
        { name: 'Lucas Brown', position: 'Event Coordinator', image: '/api/placeholder/250/300' },
        { name: 'Mia Rodriguez', position: 'Logistics Manager', image: '/api/placeholder/250/300' },
        { name: 'Owen Wilson', position: 'Venue Coordinator', image: '/api/placeholder/250/300' },
        { name: 'Isla Thompson', position: 'Vendor Relations', image: '/api/placeholder/250/300' }
      ],
      finance: [
        { name: 'Liam Garcia', position: 'Financial Analyst', image: '/api/placeholder/250/300' },
        { name: 'Chloe Lee', position: 'Budget Manager', image: '/api/placeholder/250/300' },
        { name: 'Mason White', position: 'Treasurer', image: '/api/placeholder/250/300' },
        { name: 'Harper Kim', position: 'Operations Assistant', image: '/api/placeholder/250/300' }
      ],
      content: [
        { name: 'Jacob Miller', position: 'Content Writer', image: '/api/placeholder/250/300' },
        { name: 'Grace Zhang', position: 'Video Editor', image: '/api/placeholder/250/300' },
        { name: 'Logan Anderson', position: 'Photographer', image: '/api/placeholder/250/300' },
        { name: 'Lily Patel', position: 'Graphic Designer', image: '/api/placeholder/250/300' }
      ],
      outreach: [
        { name: 'Carter Smith', position: 'Community Manager', image: '/api/placeholder/250/300' },
        { name: 'Aria Johnson', position: 'Partnership Lead', image: '/api/placeholder/250/300' },
        { name: 'Hunter Davis', position: 'Alumni Relations', image: '/api/placeholder/250/300' },
        { name: 'Nova Wilson', position: 'Student Liaison', image: '/api/placeholder/250/300' }
      ]
    }
  };

  const MemberCard = ({ member, size = 'normal' }) => (
    <div 
      className={`group relative cursor-pointer transition-all duration-700 hover:scale-[1.02] ${
        size === 'large' ? 'w-80' : size === 'medium' ? 'w-72' : 'w-64'
      }`}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 group-hover:border-[#FD7722]/60 transition-all duration-700 shadow-2xl group-hover:shadow-orange-500/20">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FD7722] to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
        
        {/* Image */}
        <div className={`relative overflow-hidden ${size === 'large' ? 'h-96' : size === 'medium' ? 'h-80' : 'h-72'}`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FD7722]/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className={`font-bold mb-2 ${size === 'large' ? 'text-2xl' : 'text-xl'} text-white group-hover:text-[#FD7722] transition-colors duration-300`}>
            {member.name}
          </h3>
          <p className="text-[#FD7722] font-semibold mb-2 text-sm uppercase tracking-wide">{member.position}</p>
          {member.bio && (
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {member.bio}
            </p>
          )}
        </div>
        
        {/* Social links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-9 h-9 bg-gradient-to-r from-[#FD7722] to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
            <span>in</span>
          </div>
          <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
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
      {/* Glow background */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FD7722]/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
      
      {/* Person cutout */}
      <div className="relative w-20 h-32 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-56 lg:h-80">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 lg:w-24 lg:h-6 bg-black/30 rounded-full blur-sm"></div>
        
        {/* Person silhouette */}
        <div className="relative w-full h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-t-full border-4 border-gray-500/30 group-hover:border-[#FD7722]/60 transition-all duration-700 overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FD7722]/30 to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Hover scale effect */}
          <div className="absolute inset-0 transform scale-100 group-hover:scale-105 transition-transform duration-700"></div>
        </div>
        
        {/* Name label */}
        <div className="absolute -bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-gradient-to-r from-[#FD7722] to-orange-600 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg font-bold text-xs lg:text-sm whitespace-nowrap shadow-lg">
            {member.name}
          </div>
          <div className="text-gray-400 text-xs mt-1 font-medium">
            {member.vertical}
          </div>
        </div>
        
        {/* Active indicator */}
        {activeTeam === member.id && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FD7722] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #FD7722 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #FD7722 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.05
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FD7722] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#FD7722] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
       
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FD7722]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight">
                Meet the
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FD7722] to-orange-600 italic tracking-tight">
                TEAM
              </h1>
            
              <div className="w-24 h-1 bg-gradient-to-r from-[#FD7722] to-orange-600 mx-auto mt-6 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-[#FD7722] mx-auto mt-2 rounded-full opacity-60"></div>
            </div>
          </div>

      
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-32">
            
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-12">
                President
              </h2>
              <div className="flex justify-center">
                <MemberCard member={teamData.leadership[0]} size="large" />
              </div>
            </div>

  
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-12">
                Mentor
              </h2>
              <div className="flex justify-center">
                <MemberCard member={teamData.mentor[0]} size="large" />
              </div>
            </div>
          </div>

      
          <div className="mb-20 lg:mb-32">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Vice Presidents
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
              {teamData.vicePresidents.map((member) => (
                <MemberCard key={member.id} member={member} size="medium" />
              ))}
            </div>
          </div>

       
          <div className="mb-20 lg:mb-32">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
              Vertical Heads
            </h2>
            
            
            <div className="hidden lg:flex justify-center items-end mb-20 px-20">
              {teamData.verticalHeads.map((member, index) => (
                <VerticalHead key={member.id} member={member} index={index} />
              ))}
            </div>

            {/* Mobile - 3 columns with 2 rows */}
            <div className="lg:hidden grid grid-cols-3 gap-4 justify-items-center mb-16 px-4">
              {teamData.verticalHeads.map((member, index) => (
                <div key={member.id} className="relative">
                  <VerticalHead member={member} index={index} />
                </div>
              ))}
            </div>
          </div>

        
          {activeTeam && teamData.teams[activeTeam] && (
            <div className="mb-20 border-t border-gray-800/50 pt-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                <span className="text-[#FD7722]">
                  {teamData.verticalHeads.find(v => v.id === activeTeam)?.vertical}
                </span>
                <span className="text-white"> Team</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {teamData.teams[activeTeam].map((member, index) => (
                  <div key={index} className="group relative cursor-pointer transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-[#FD7722]/60 transition-all duration-500">
                      <div className="relative overflow-hidden h-64">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FD7722]/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#FD7722] transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-[#FD7722] font-medium text-sm">{member.position}</p>
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