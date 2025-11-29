import React, { useEffect, useState } from 'react';
import { Post, GithubConfig } from '../types';
import { fetchPosts } from '../services/githubService';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Calendar, AlertCircle, Loader2 } from 'lucide-react';

interface Props {
  title: string;
  category: string;
  mode: 'list' | 'single';
  subtitle?: string;
  config: GithubConfig | null;
}

const SectionPage: React.FC<Props> = ({ title, category, mode, subtitle, config }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchPosts(config)
      .then(fetchedPosts => {
        if (!isMounted) return;
        
        // Filter by category
        const filtered = fetchedPosts.filter(
          p => p.metadata.category?.toLowerCase() === category.toLowerCase()
        );
        setPosts(filtered);
      })
      .catch(err => {
        if (!isMounted) return;
        setError(err.message || 'Failed to load content.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [category, config]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-stone-400">
        <Loader2 className="animate-spin h-10 w-10 mb-4 text-golf-600" />
        <p>Loading the greens...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Oops! Handshake Problem.</h2>
        <p className="text-stone-600 mb-6">{error}</p>
        <p className="text-sm text-stone-500">
          Make sure your GitHub settings are correct in the config menu.
        </p>
      </div>
    );
  }

  // No Posts State
  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">{title}</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">{subtitle}</p>
        <div className="p-10 bg-stone-100 rounded-xl inline-block">
          <p className="text-stone-500 font-medium">No posts found in this section yet.</p>
          <p className="text-xs text-stone-400 mt-2">Add a markdown file with `category: {category}` to your repo.</p>
        </div>
      </div>
    );
  }

  // Render Logic: Single Post Mode (Take the newest one)
  if (mode === 'single') {
    const post = posts[0];
    return (
      <div className="bg-white min-h-screen pb-20">
        {/* Header Image if available */}
        {post.metadata.image && (
          <div className="w-full h-64 md:h-96 bg-stone-200 overflow-hidden relative">
            <img 
              src={post.metadata.image} 
              alt={post.metadata.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-md mb-2">
                {post.metadata.title}
              </h1>
              <div className="flex items-center text-white/90 text-sm">
                 <Calendar size={16} className="mr-2" />
                 {new Date(post.metadata.date).toLocaleDateString(undefined, {
                   year: 'numeric', month: 'long', day: 'numeric'
                 })}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {!post.metadata.image && (
             <div className="mb-10 border-b border-stone-200 pb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-golf-900 mb-4">
                  {post.metadata.title}
                </h1>
                <div className="flex items-center text-stone-500 text-sm">
                   <Calendar size={16} className="mr-2" />
                   {new Date(post.metadata.date).toLocaleDateString(undefined, {
                     year: 'numeric', month: 'long', day: 'numeric'
                   })}
                </div>
             </div>
          )}
          
          <MarkdownRenderer content={post.content} />
        </div>
      </div>
    );
  }

  // Render Logic: List Mode
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-golf-900 mb-6">{title}</h1>
        {subtitle && <p className="text-xl text-stone-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            {post.metadata.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.metadata.image} 
                  alt={post.metadata.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-stone-400 mb-3">
                <Calendar size={14} className="mr-1" />
                {new Date(post.metadata.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-3 leading-tight">
                {post.metadata.title}
              </h2>
              <p className="text-stone-600 text-sm line-clamp-3 mb-4 flex-grow">
                {post.metadata.excerpt || post.content.substring(0, 150) + '...'}
              </p>
              
              {/* Note: We aren't linking to individual pages for list items per spec (simplification), 
                  but in a real app we'd route to /post/:slug. 
                  Here we will just show the content inline or expand? 
                  The prompt implies "Planning should contain multiple posts". 
                  Usually, you click to read. I will add a simple 'Read More' that expands or a modal?
                  Actually, SPA usually has detailed routes. 
                  Given the simple requirements, I'll display the full content in a modal or make a simple client-side route for detail.
                  Let's assume the user just scrolls or we render full posts?
                  Better UX: Click to open detail modal.
              */}
              <button 
                onClick={() => window.location.hash = `#/post/${category}/${post.slug}`}
                className="text-golf-600 font-semibold text-sm hover:text-golf-700 mt-auto inline-flex items-center"
              >
                Read Article <span className="ml-1">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SectionPage;