import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Info, ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import { AnyPost, PostCategory } from '../types';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from 'react-router-dom';

interface MapFeatureProps {
  customPosts?: AnyPost[];
  filterCategory?: PostCategory | 'all';
}

export default function MapFeature({ customPosts, filterCategory = 'all' }: MapFeatureProps) {
  const postsWithLocation = useMemo(() => {
    const source = customPosts || blogData.posts;
    return source.filter(p => {
      const hasLocation = p.location && p.showOnMap;
      const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
      return hasLocation && matchesCategory;
    });
  }, [customPosts, filterCategory]);

  // Simple coordinate mapping for a generic SVG map
  const getCoords = (lat: number, lng: number) => {
    // This is a very rough mapping for demonstration
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Journey Explorer</h2>
          <p className="text-xs text-[#2A1A18]/50 font-serif">Discover stories by their geographical footprints.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-[#F0D0D0] text-[#7A3030] border-none font-serif italic">Photography</Badge>
          <Badge className="bg-[#E8D8E0] text-[#7A3850] border-none font-serif italic">Travel</Badge>
          <Badge className="bg-[#F0E8E4] text-[#1A0E0C] border-none font-serif italic">Food</Badge>
        </div>
      </div>

      <div className="relative aspect-[2/1] bg-[#F0E8E4]/50 rounded-[2rem] border border-[#A84848]/10 overflow-hidden shadow-inner">
        {/* Simplified World Map SVG */}
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-10">
          <path
            fill="currentColor"
            d="M150,100 Q200,50 300,100 T500,150 T700,100 T750,200 T600,300 T400,350 T200,300 T100,200 Z"
            className="text-[#A84848]"
          />
        </svg>

        {/* Markers */}
        {postsWithLocation.map((post) => {
          const { x, y } = getCoords(post.location!.lat, post.location!.lng);
          return (
            <Popover key={post.id}>
              <PopoverTrigger
                render={
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    style={{ left: `${(x / 800) * 100}%`, top: `${(y / 400) * 100}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-xl border border-[#A84848]/20 text-[#A84848] z-10 hover:bg-[#A84848] hover:text-white transition-all"
                  >
                    <MapPin size={14} />
                  </motion.button>
                }
              />
              <PopoverContent className="w-72 p-0 bg-white border-[#A84848]/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-32 overflow-hidden">
                  <img src={post.coverImage} className="w-full h-full object-cover grayscale-[0.2]" referrerPolicy="no-referrer" />
                  <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest">{post.category}</Badge>
                </div>
                <div className="p-4 space-y-3">
                  <h4 className="font-serif italic text-[#1A0E0C] leading-tight">{post.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#2A1A18]/50 font-serif flex items-center gap-1">
                      <MapPin size={10} /> {post.location?.name}
                    </span>
                    <Link to={`/post/${post.id}`} className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-1 hover:underline">
                      Read <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}

        <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-md p-3 rounded-xl border border-[#A84848]/10 flex items-center gap-2 text-[10px] text-[#2A1A18]/60 font-serif italic">
          <Info size={12} className="text-[#A84848]" />
          Click on markers to explore the stories.
        </div>
      </div>
    </div>
  );
}
