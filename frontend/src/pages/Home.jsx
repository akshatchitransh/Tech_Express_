import React from 'react';

const TechExpressHomepage = () => {
  const articles = [
    {
      id: 1,
      category: 'Hardware',
      title: 'Next-Gen Processors Break Performance Records',
      description: 'New chip architecture delivers unprecedented computing power while reducing energy consumption by 40%.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop',
      date: '2 hours ago'
    },
    {
      id: 2,
      category: 'Software',
      title: 'Revolutionary Code Editor Powered by AI Launches',
      description: 'Developers celebrate new IDE that predicts code patterns and automates repetitive tasks with machine learning.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      date: '5 hours ago'
    },
    {
      id: 3,
      category: 'Mobile',
      title: '5G Networks Expand to Rural Areas Worldwide',
      description: 'Major carriers announce massive infrastructure investment bringing high-speed connectivity to underserved regions.',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=500&fit=crop',
      date: '1 day ago'
    },
    {
      id: 4,
      category: 'Security',
      title: 'Quantum Encryption Becomes Mainstream',
      description: 'Enterprise adoption of quantum-resistant cryptography accelerates as new standards are finalized by industry leaders.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      date: '2 days ago'
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
        
        .hero-gradient {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.8)), 
                      url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop');
          background-size: cover;
          background-position: center;
        }
        
        .article-card {
          transition: all 0.3s ease;
        }
        
        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        
        .hero-card {
          transition: all 0.3s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold gradient-text mb-2 tracking-tight">
            Tech Express
          </h1>
          <p className="text-sm text-gray-500 font-normal tracking-widest uppercase">
            Your Source for Technology News
          </p>
        </header>

        {/* Hero Section */}
        <div className="hero-card bg-white rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="hero-gradient h-[450px] flex items-end p-10">
            <div className="max-w-3xl">
              <span className="inline-block bg-white bg-opacity-20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-4 uppercase tracking-wide">
                Featured Story
              </span>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                The Future of AI: How Machine Learning is Transforming Industries
              </h2>
              <p className="text-white text-opacity-90 text-base mb-5">
                Exploring the revolutionary impact of artificial intelligence across healthcare, finance, and manufacturing sectors in 2025.
              </p>
            </div>
          </div>
          <div className="px-10 py-8">
            <div className="flex items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">📅 October 16, 2025</span>
              <span className="flex items-center gap-1.5">👤 Sarah Chen</span>
              <span className="flex items-center gap-1.5">⏱️ 8 min read</span>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="article-card bg-white rounded-xl overflow-hidden shadow-md">
              <div 
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${article.image})`
                }}
              />
              <div className="p-7">
                <span className="inline-block bg-gray-100 text-indigo-500 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <a href="#" className="text-indigo-500 font-semibold text-sm flex items-center gap-1.5">
                    Read More <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechExpressHomepage;