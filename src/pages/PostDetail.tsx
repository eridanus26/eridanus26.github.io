import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { motion } from 'motion/react';
import { Calendar, MapPin, Tag, ArrowLeft, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Badge } from '@/components/ui/badge';

export default function PostDetail() {
  const { id } = useParams();
  const post = blogData.posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-6">
        <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
        <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Hero Header */}
      <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.coverImage} 
            className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-[#FAF7F4]/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pb-16 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-serif italic text-[#1A0E0C] leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-serif italic text-[#2A1A18]/60">
              <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
              {post.location && <span className="flex items-center gap-2"><MapPin size={18} /> {post.location.name}</span>}
              <span className="flex items-center gap-2"><Clock size={18} /> 5 min read</span>
            </div>
            
            {/* Breadcrumbs */}
            <div className="flex justify-center items-center gap-2 text-sm font-serif tracking-widest uppercase text-[#A84848]/40 pt-4">
              <Link to={`/archive/category/${post.category}`} className="hover:text-[#A84848] transition-colors">
                {post.category}
              </Link>
              {post.subcategory && (
                <>
                  <span>/</span>
                  <Link to={`/archive/category/${post.subcategory}`} className="hover:text-[#A84848] transition-colors">
                    {post.subcategory}
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <article className="container mx-auto px-4 mt-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="prose prose-stone lg:prose-2xl max-w-none font-serif leading-relaxed text-[#2A1A18]/80">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
          </div>

          {/* Post Footer */}
          <div className="pt-20 border-t border-[#A84848]/10 space-y-12">
            <div className="flex flex-wrap gap-4">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  to={`/archive/tag/${tag}`}
                  className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
                <ArrowLeft size={20} /> Back to Archive
              </Link>
              
              <div className="flex items-center gap-6">
                <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
                <div className="flex gap-4">
                  {['Twitter', 'Instagram', 'Link'].map(p => (
                    <button key={p} className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all">
                      <span className="text-xs font-bold">{p[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
