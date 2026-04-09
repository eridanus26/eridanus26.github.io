import { useMemo } from 'react';
import { blogData } from '../data/blogData';
import { TravelPost } from '../types';
import PostCard from '../components/PostCard';
import MapFeature from '../components/MapFeature';
import { Compass, Map as MapIcon } from 'lucide-react';

export default function Travel() {
  const travelPosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'travel') as TravelPost[], 
  []);

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <Compass size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">Wanderlust</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">Journeys across borders, cultures, and landscapes.</p>
      </div>

      <div className="collage-card p-4 md:p-8 bg-white">
        <div className="flex items-center gap-3 mb-8 px-4">
          <MapIcon size={20} className="text-[#A84848]" />
          <h2 className="text-xl font-serif italic text-[#1A0E0C]">Interactive Journey Map</h2>
        </div>
        <MapFeature customPosts={travelPosts} />
      </div>

      <section className="space-y-12">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl font-serif italic text-[#1A0E0C]">Recent Journeys</h2>
          <div className="h-[1px] flex-1 bg-[#A84848]/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {travelPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {travelPosts.length === 0 && (
        <div className="text-center py-32 space-y-6">
          <div className="text-6xl opacity-20">✈️</div>
          <h3 className="text-2xl font-serif italic text-[#1A0E0C]">No journeys logged</h3>
          <p className="text-[#2A1A18]/50 font-serif">The passport is waiting for its next stamp.</p>
        </div>
      )}
    </div>
  );
}
