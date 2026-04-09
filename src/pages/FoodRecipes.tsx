import { useMemo, useState } from 'react';
import { blogData } from '../data/blogData';
import { FoodPost } from '../types';
import PostCard from '../components/PostCard';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function FoodRecipes() {
  const [search, setSearch] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('all');

  const recipePosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'food' && (p as FoodPost).foodType === 'recipe') as FoodPost[], 
  []);

  const filteredPosts = useMemo(() => {
    return recipePosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                           post.ingredients?.some(i => i.toLowerCase().includes(search.toLowerCase())) ||
                           post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCuisine = cuisineFilter === 'all' || post.cuisine === cuisineFilter;
      return matchesSearch && matchesCuisine;
    });
  }, [recipePosts, search, cuisineFilter]);

  const cuisines = useMemo(() => {
    const set = new Set<string>();
    recipePosts.forEach(p => p.cuisine && set.add(p.cuisine));
    return Array.from(set).sort();
  }, [recipePosts]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <ChefHat size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">Kitchen Experiments</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">Recipes from my kitchen, tested and perfected over time.</p>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-[#A84848]/10 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A84848]/40" size={18} />
            <Input 
              placeholder="Search ingredients or dishes..." 
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
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-[10px] uppercase tracking-widest text-[#A84848]/60 font-serif flex items-center mr-2">
            <Filter size={12} className="mr-1" /> Quick Filters:
          </span>
          {['Matcha', 'Dessert', 'Baking'].map(tag => (
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

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 space-y-6">
          <div className="text-6xl opacity-20">🍳</div>
          <h3 className="text-2xl font-serif italic text-[#1A0E0C]">No recipes found</h3>
          <p className="text-[#2A1A18]/50 font-serif">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
}
