import { useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { motion } from 'motion/react';
import { Tag, Folder, ArrowLeft, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Archive() {
  const { type, value } = useParams();
  const [searchParams] = useSearchParams();
  
  const filterType = type || 'category';
  const filterValue = value || searchParams.get('q') || '';

  const filteredPosts = useMemo(() => {
    return blogData.posts.filter(post => {
      if (filterType === 'tag') {
        return post.tags.some(t => t.toLowerCase() === filterValue.toLowerCase());
      }
      if (filterType === 'category') {
        const categoryMatch = post.category.toLowerCase() === filterValue.toLowerCase();
        const subcategoryMatch = post.subcategory?.split('/').some(s => s.trim().toLowerCase() === filterValue.toLowerCase());
        return categoryMatch || subcategoryMatch;
      }
      if (filterType === 'search') {
        const q = filterValue.toLowerCase();
        return post.title.toLowerCase().includes(q) || 
               post.excerpt.toLowerCase().includes(q) ||
               post.content.toLowerCase().includes(q) ||
               post.tags.some(t => t.toLowerCase().includes(q));
      }
      return true;
    });
  }, [filterType, filterValue]);

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <Link to="/posts" className="inline-flex items-center gap-2 text-sm font-serif italic text-[#A84848] hover:underline mb-8">
            <ArrowLeft size={16} /> Back to All Posts
          </Link>
          
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-[#F0E8E4] rounded-full text-[#A84848]">
              {filterType === 'tag' ? <Tag size={32} /> : filterType === 'category' ? <Folder size={32} /> : <Tag size={32} />}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif italic text-[#1A0E0C]">
              {filterType === 'tag' ? `Posts tagged with "${filterValue}"` : 
               filterType === 'category' ? `Collection: ${filterValue}` : 
               `Search results for "${filterValue}"`}
            </h1>
            <p className="text-xl text-[#2A1A18]/50 font-serif italic">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'} found
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-2xl collage-border">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm font-serif italic text-[#A84848]/60">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  </div>
                  <Link to={`/post/${post.id}`}>
                    <h2 className="text-2xl font-serif italic text-[#1A0E0C] group-hover:text-[#A84848] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-lg text-[#2A1A18]/60 font-serif leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to={`/archive/tag/${tag}`}
                        className="text-xs font-serif italic text-[#A84848]/60 hover:text-[#A84848]"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 space-y-6">
              <p className="text-2xl font-serif italic text-[#2A1A18]/40">No stories found matching your criteria.</p>
              <Link to="/posts" className="elegant-button inline-block">Explore All Stories</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
