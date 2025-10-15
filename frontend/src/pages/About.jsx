import React from 'react';

const TechExpressAbout = () => {
  const stats = [
    { number: '10M+', label: 'Monthly Readers' },
    { number: '500+', label: 'Articles Published' },
    { number: '50+', label: 'Expert Writers' },
    { number: '2019', label: 'Est. Year' }
  ];

  const team = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Editor-in-Chief',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Former tech journalist with 15 years covering AI and emerging technologies.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Senior Tech Reporter',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Specializes in hardware reviews and semiconductor industry analysis.'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Software & Dev Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Expert in software development trends and open-source technologies.'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Cybersecurity Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Covers security threats, data privacy, and enterprise protection strategies.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Accuracy First',
      description: 'We verify every fact and source before publishing, ensuring our readers get reliable, trustworthy technology news.'
    },
    {
      icon: '⚡',
      title: 'Breaking News',
      description: 'Our team works around the clock to bring you the latest tech developments as they happen, keeping you ahead of the curve.'
    },
    {
      icon: '🔍',
      title: 'Deep Analysis',
      description: 'Beyond headlines, we provide in-depth analysis and expert commentary to help you understand the impact of tech trends.'
    },
    {
      icon: '🌐',
      title: 'Global Coverage',
      description: 'From Silicon Valley to Tokyo, we cover technology stories from every corner of the world that matter to you.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-about-gradient {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.9)), 
                      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=600&fit=crop');
          background-size: cover;
          background-position: center;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        
        .team-card {
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold gradient-text mb-2 tracking-tight">
            Tech Express
          </h1>
          <p className="text-sm text-gray-500 font-normal tracking-widest uppercase">
            About Us
          </p>
        </header>

        {/* Hero Section */}
        <div className="hero-about-gradient rounded-2xl overflow-hidden shadow-lg mb-16 px-10 py-24 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Your Trusted Source for<br />Technology News
          </h2>
          <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
            Since 2019, Tech Express has been delivering cutting-edge technology news, in-depth analysis, 
            and expert insights to millions of readers worldwide. We're passionate about making technology 
            accessible and understandable for everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-md card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Tech Express, we believe technology shapes our future. Our mission is to keep you informed 
              about the latest innovations, breakthroughs, and trends that are transforming our world. From 
              artificial intelligence and quantum computing to mobile technology and cybersecurity, we cover 
              it all with accuracy, depth, and clarity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're committed to delivering news that matters—stories that help you understand not just what's 
              happening in tech, but why it matters and how it affects your life, business, and future. Our 
              editorial team combines journalistic integrity with technical expertise to bring you content 
              you can trust.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Meet Our Team</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our diverse team of technology journalists, analysts, and industry experts brings decades 
            of combined experience to deliver the best tech news coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md team-card">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-indigo-500 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Cover</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {['Artificial Intelligence', 'Hardware & Devices', 'Software Development', 'Cybersecurity', 
              'Mobile Technology', '5G & Networking', 'Cloud Computing', 'Blockchain & Crypto', 
              'Gaming & VR', 'Startups & Innovation'].map((topic, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors">
                <p className="text-gray-700 font-medium text-sm">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-white text-opacity-90 text-lg mb-6 max-w-2xl mx-auto">
            Join millions of tech enthusiasts who trust Tech Express for their daily dose of technology news. 
            Follow us on social media and never miss an update.
          </p>
          <div className="flex justify-center gap-6 text-4xl">
            <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">💼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExpressAbout;