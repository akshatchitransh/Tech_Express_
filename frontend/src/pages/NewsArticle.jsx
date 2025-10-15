import React from 'react';

const TechExpressNews = () => {
  const categories = [
    'All News',
    'AI & Machine Learning',
    'Hardware',
    'Software',
    'Mobile',
    'Security',
    'Startups',
    'Gaming'
  ];

  const featuredNews = {
    id: 1,
    category: 'AI & Machine Learning',
    title: 'OpenAI Unveils GPT-5: The Next Evolution in Language Models',
    description: 'The latest iteration promises unprecedented reasoning capabilities and multimodal understanding that could reshape how we interact with AI systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    author: 'Sarah Chen',
    date: 'October 16, 2025',
    readTime: '12 min read',
    trending: true
  };

  const newsArticles = [
    {
      id: 2,
      category: 'Hardware',
      title: 'Apple Silicon M4 Chip Revolutionizes Desktop Computing',
      description: 'New architecture delivers 3x performance boost while maintaining energy efficiency, setting new standards for professional workstations.',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=800&h=500&fit=crop',
      author: 'Michael Rodriguez',
      date: 'October 16, 2025',
      readTime: '8 min read'
    },
    {
      id: 3,
      category: 'Security',
      title: 'Major Security Flaw Discovered in Popular Messaging Apps',
      description: 'Researchers identify vulnerability affecting over 2 billion users, prompting immediate patches from major tech companies.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      author: 'David Kim',
      date: 'October 15, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      category: 'Startups',
      title: 'Indian Startup Raises $200M for AI-Powered Healthcare Platform',
      description: 'Bangalore-based company secures massive funding to expand diagnostic AI tools across emerging markets.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      author: 'Emily Watson',
      date: 'October 15, 2025',
      readTime: '5 min read'
    },
    {
      id: 5,
      category: 'Mobile',
      title: 'Samsung Galaxy S25 Series Launches with Revolutionary Camera Tech',
      description: 'New flagship phones feature AI-enhanced photography and holographic display technology.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop',
      author: 'Michael Rodriguez',
      date: 'October 14, 2025',
      readTime: '7 min read'
    },
    {
      id: 6,
      category: 'Software',
      title: 'GitHub Copilot X Now Writes Entire Applications Autonomously',
      description: 'Latest update allows developers to describe apps in natural language and receive production-ready code.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop',
      author: 'Emily Watson',
      date: 'October 14, 2025',
      readTime: '10 min read'
    },
    {
      id: 7,
      category: 'Gaming',
      title: 'PlayStation 6 Announcement Teases Cloud-Native Gaming Future',
      description: 'Sony reveals next-gen console will seamlessly blend local and cloud gaming for unprecedented experiences.',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=500&fit=crop',
      author: 'Sarah Chen',
      date: 'October 13, 2025',
      readTime: '9 min read'
    },
    {
      id: 8,
      category: 'AI & Machine Learning',
      title: 'Google DeepMind Solves Protein Folding for All Known Structures',
      description: 'AlphaFold 3 completes comprehensive database of protein structures, accelerating drug discovery worldwide.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
      author: 'David Kim',
      date: 'October 13, 2025',
      readTime: '11 min read'
    },
    {
      id: 9,
      category: 'Hardware',
      title: 'NVIDIA Announces RTX 6090: First GPU to Break Petaflop Barrier',
      description: 'Gaming and AI performance reach new heights with groundbreaking architecture and advanced ray tracing.',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=500&fit=crop',
      author: 'Michael Rodriguez',
      date: 'October 12, 2025',
      readTime: '8 min read'
    },
    {
      id: 10,
      category: 'Security',
      title: 'Quantum-Resistant Encryption Becomes Mandatory for Financial Institutions',
      description: 'New regulations require banks to implement post-quantum cryptography ahead of quantum computing threats.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      author: 'David Kim',
      date: 'October 12, 2025',
      readTime: '6 min read'
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
        
        .featured-gradient {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.92), rgba(118, 75, 162, 0.88));
        }
        
        .article-card {
          transition: all 0.3s ease;
        }
        
        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        
        .featured-card {
          transition: all 0.3s ease;
        }
        
        .featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .category-tag {
          transition: all 0.2s ease;
        }
        
        .category-tag:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .trending-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold gradient-text mb-2 tracking-tight">
            Tech Express
          </h1>
          <p className="text-sm text-gray-500 font-normal tracking-widest uppercase">
            Latest Technology News
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-tag px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm ${
                index === 0 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                  : 'bg-white text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="featured-card bg-white rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div 
              className="h-80 md:h-auto bg-cover bg-center relative"
              style={{ backgroundImage: `url(${featuredNews.image})` }}
            >
              <div className="featured-gradient absolute inset-0"></div>
              {featuredNews.trending && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2 trending-pulse">
                  <span className="text-base">🔥</span> Trending Now
                </div>
              )}
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide mb-4 w-fit">
                {featuredNews.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredNews.title}
              </h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                {featuredNews.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">👤 {featuredNews.author}</span>
                <span className="flex items-center gap-1.5">📅 {featuredNews.date}</span>
                <span className="flex items-center gap-1.5">⏱️ {featuredNews.readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-base hover:gap-3 transition-all">
                Read Full Article <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Latest News Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Editor's Pick</option>
            </select>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article) => (
            <div key={article.id} className="article-card bg-white rounded-xl overflow-hidden shadow-md">
              <div 
                className="h-52 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${article.image})`
                }}
              >
                <span className="absolute top-4 left-4 bg-white bg-opacity-95 text-indigo-600 px-3 py-1 rounded-md text-xs font-semibold">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-700">{article.author}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Load More Articles
          </button>
          <p className="text-gray-500 text-sm mt-4">Showing 9 of 500+ articles</p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Never Miss a Story</h3>
          <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech news delivered directly to your inbox every morning.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExpressNews;