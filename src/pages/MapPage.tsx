import { useMemo, useState } from 'react';
import { blogData } from '../data/blogData';
import MapFeature from '../components/MapFeature';
import { Map as MapIcon, Compass, Filter } from 'lucide-react';
import { PostCategory } from '../types';
import { cn } from '@/lib/utils';

export default function MapPage() {
  const [activeCategory, setActiveCategory] = useState<PostCategory | 'all'>('all');

  const categories: { label: string; value: PostCategory | 'all' }[] = [
    { label: 'All Stories', value: 'all' },
    { label: 'Photography', value: 'photography' },
    { label: 'Travel', value: 'travel' },
    { label: 'Food', value: 'food' },
  ];

  return (
    <div className="container mx-auto px-4 py-20 space-y-16">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <Compass size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">World Explorer</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">
          A geographical archive of my journeys, flavors, and visual captures.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all border",
              activeCategory === cat.value
                ? "bg-[#A84848] text-white border-[#A84848]"
                : "bg-white text-[#2A1A18]/60 border-[#A84848]/10 hover:border-[#A84848]/30"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="collage-card p-4 md:p-8 bg-white shadow-2xl">
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-3">
            <MapIcon size={20} className="text-[#A84848]" />
            <h2 className="text-xl font-serif italic text-[#1A0E0C]">Interactive Journey Map</h2>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-[#A84848]/40 font-serif flex items-center gap-2">
            <Filter size={12} /> Filtering: {activeCategory}
          </div>
        </div>
        <div className="aspect-[2/1] min-h-[400px] md:min-h-[600px]">
          <MapFeature filterCategory={activeCategory} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8 pt-12">
        <h3 className="text-3xl font-serif italic text-[#1A0E0C]">Mapping the Unseen</h3>
        <p className="text-lg text-[#2A1A18]/60 font-serif italic leading-relaxed">
          Every pin represents a moment in time, a flavor discovered, or a scene captured. 
          The world is a vast collection of stories, and this is my way of keeping track of the ones I've been lucky enough to witness.
        </p>
      </div>
    </div>
  );
}
