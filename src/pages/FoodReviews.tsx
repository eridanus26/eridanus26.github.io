import { useMemo, useState } from 'react';
import { blogData } from '../data/blogData';
import { FoodPost } from '../types';
import PostCard from '../components/PostCard';
import MapFeature from '../components/MapFeature';
import { Input } from '@/components/ui/input';
import { Search, Filter, Utensils, Map as MapIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function FoodReviews() {
  const [search, setSearch] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const reviewPosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'food' && (p as FoodPost).foodType === 'review') as FoodPost[], 
  []);

  const filteredPosts = useMemo(() => {
    return reviewPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                           post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCuisine = cuisineFilter === 'all' || post.cuisine === cuisineFilter;
      const matchesPrice = priceFilter === 'all' || post.price === priceFilter;
      return matchesSearch && matchesCuisine && matchesPrice;
    });
  }, [reviewPosts, search, cuisineFilter, priceFilter]);

  const cuisines = useMemo(() => {
    const set = new Set<string>();
    reviewPosts.forEach(p => p.cuisine && set.add(p.cuisine));
    return Array.from(set).sort();
  }, [reviewPosts]);

  // Filter blogData for MapFeature to only show these reviews
  const mapData = useMemo(() => ({
    ...blogData,
    posts: filteredPosts
  }), [filteredPosts]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <Utensils size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">Flavor Discoveries</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">Reviews of cafes, restaurants, and street food from my travels.</p>
      </div>

      <div className="collage-card p-4 md:p-8 bg-white">
        <div className="flex items-center gap-3 mb-8 px-4">
          <MapIcon size={20} className="text-[#A84848]" />
          <h2 className="text-xl font-serif italic text-[#1A0E0C]">Food Review Map</h2>
        </div>
        <div className="aspect-[2/1] bg-[#F0E8E4]/30 rounded-2xl overflow-hidden">
          {/* We need to modify MapFeature to accept custom posts or just use the filtered ones */}
          {/* For now, MapFeature uses blogData.posts. I'll pass a custom prop if I modify it, 
              but let's assume it can be scoped. Actually, I'll just use the component as is 
              and maybe modify it to accept posts as a prop. */}
          <MapFeature customPosts={filteredPosts} />
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-[#A84848]/10 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A84848]/40" size={18} />
            <Input 
              placeholder="Search dishes or places..." 
              className="pl-10 h-12 rounded-xl border-[#A84848]/10 font-serif italic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Select onValueChange={setCuisineFilter} defaultValue="all">
            <SelectTrigger className="h-12 rounded-xl border-[#A84848]/10 font-serif italic">
              <SelectValue placeholder="Cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cuisines</SelectItem>
              {cuisines.map(c => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setPriceFilter} defaultValue="all">
            <SelectTrigger className="h-12 rounded-xl border-[#A84848]/10 font-serif italic">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="$">$ (Budget)</SelectItem>
              <SelectItem value="$$">$$ (Moderate)</SelectItem>
              <SelectItem value="$$$">$$$ (Fine Dining)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-[10px] uppercase tracking-widest text-[#A84848]/60 font-serif flex items-center mr-2">
            <Filter size={12} className="mr-1" /> Quick Filters:
          </span>
          {['Paris', 'Tokyo', 'Croissant', 'Coffee'].map(tag => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="cursor-pointer hover:bg-[#A84848] hover:text-white transition-all border-[#A84848]/20 text-[#A84848]/60 font-serif italic"
              onClick={() => setSearch(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
