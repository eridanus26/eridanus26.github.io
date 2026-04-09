import { useMemo } from 'react';
import { blogData } from '../data/blogData';
import { PhotographyPost } from '../types';
import PostCard from '../components/PostCard';
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function Photography() {
  const photoPosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'photography') as PhotographyPost[], 
  []);

  const collections = useMemo(() => {
    const map = new Map<string, PhotographyPost[]>();
    photoPosts.forEach(post => {
      const list = map.get(post.collection) || [];
      list.push(post);
      map.set(post.collection, list);
    });
    return Array.from(map.entries());
  }, [photoPosts]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <Camera size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">Visual Stories</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">Capturing moments, light, and the quiet beauty of the everyday.</p>
      </div>

      {collections.map(([name, posts]) => (
        <section key={name} className="space-y-12">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-[#FAF7F4] border border-[#A84848]/10 rounded-xl">
              <ImageIcon size={20} className="text-[#A84848]" />
            </div>
            <h2 className="text-3xl font-serif italic text-[#1A0E0C]">{name}</h2>
            <div className="h-[1px] flex-1 bg-[#A84848]/10" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A84848]/60 font-serif">{posts.length} Captures</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ))}

      {photoPosts.length === 0 && (
        <div className="text-center py-32 space-y-6">
          <div className="text-6xl opacity-20">📸</div>
          <h3 className="text-2xl font-serif italic text-[#1A0E0C]">No captures yet</h3>
          <p className="text-[#2A1A18]/50 font-serif">The gallery is currently being curated.</p>
        </div>
      )}
    </div>
  );
}
