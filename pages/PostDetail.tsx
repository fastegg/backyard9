import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post, GithubConfig } from '../types';
import { fetchPosts } from '../services/githubService';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Calendar, ArrowLeft, Loader2 } from 'lucide-react';

interface Props {
  config: GithubConfig | null;
}

const PostDetail: React.FC<Props> = ({ config }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchPosts(config).then(posts => {
      if (!isMounted) return;
      const found = posts.find(p => p.slug === slug);
      setPost(found || null);
      setLoading(false);
    });

    return () => { isMounted = false; };
  }, [slug, config]);

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="animate-spin text-golf-600 w-10 h-10" />
        </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-stone-900">Post not found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-golf-600 hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      <div className="bg-stone-50 border-b border-stone-200 mb-10">
        <div className="max-w-3xl mx-auto px-4 py-12">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center text-stone-500 hover:text-golf-600 mb-6 text-sm font-medium transition-colors"
            >
                <ArrowLeft size={16} className="mr-2" /> Back to list
            </button>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-golf-900 mb-4 leading-tight">
                {post.metadata.title}
            </h1>
            <div className="flex items-center text-stone-500 text-sm">
                <Calendar size={16} className="mr-2" />
                {new Date(post.metadata.date).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'long', day: 'numeric'
                })}
                <span className="mx-3 text-stone-300">|</span>
                <span className="uppercase tracking-wide text-xs font-semibold text-golf-600">{post.metadata.category}</span>
            </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {post.metadata.image && (
            <img 
                src={post.metadata.image} 
                alt={post.metadata.title}
                className="w-full h-auto rounded-xl shadow-lg mb-10"
            />
        )}
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
};

export default PostDetail;