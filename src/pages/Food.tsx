import { useMemo, useState } from 'react';
import { blogData } from '../data/blogData';
import { FoodPost } from '../types';
import PostCard from '../components/PostCard';
import { Input } from '@/components/ui/input';
import { Search, Filter, UtensilsCrossed, ChefHat, Star, Coffee } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Food() {
  const [search, setSearch] = useState('');

  const foodPosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'food') as FoodPost[], 
  []);

  const filteredPosts = useMemo(() => {
    return foodPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                           post.ingredients?.some(i => i.toLowerCase().includes(search.toLowerCase())) ||
                           post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchesSearch;
    });
  }, [foodPosts, search]);

  const recipes = useMemo(() => filteredPosts.filter(p => p.foodType === 'recipe'), [filteredPosts]);
  const reviews = useMemo(() => filteredPosts.filter(p => p.foodType === 'review'), [filteredPosts]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <UtensilsCrossed size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">美食</h1>
        {/* <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">A collection of recipes from my kitchen and reviews of flavors I've discovered.</p> */}
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-[#A84848]/10 shadow-sm space-y-8">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A84848]/40" size={20} />
          <Input 
            placeholder="搜索食材或菜肴..." 
            className="pl-12 h-14 rounded-full border-[#A84848]/10 bg-white shadow-sm focus-visible:ring-[#A84848]/30 font-serif placeholder:text-base italic"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="text-sm uppercase tracking-widest text-[#A84848]/60 font-serif flex items-center mr-2">
            <Filter size={18} className="mr-2" /> 
          </span>
          {['Matcha', 'Croissant', 'Paris', 'Dessert', 'Baking'].map(tag => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="cursor-pointer hover:bg-[#A84848] hover:text-white transition-all border-[#A84848]/20 text-[#A84848]/60 font-serif italic px-4 py-4 text-lg"
              onClick={() => setSearch(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-16">
        <div className="flex justify-center">
          <TabsList className="bg-[#F0E8E4] border border-[#A84848]/10 rounded-full py-5 h-auto flex items-center">
            <TabsTrigger value="all" className="rounded-full px-10 py-4 text-base font-serif tracking-widest uppercase flex items-center justify-center data-[state=active]:bg-white data-[state=active]:text-[#1A0E0C] data-[state=active]:shadow-sm transition-all">
              {/* <Coffee size={16} className="mr-2" />  */} 全部
            </TabsTrigger>
            <TabsTrigger value="recipes" className="rounded-full px-10 py-4 text-base font-serif tracking-widest uppercase flex items-center justify-center data-[state=active]:bg-white data-[state=active]:text-[#1A0E0C] data-[state=active]:shadow-sm transition-all">
              {/* <ChefHat size={16} className="mr-2" />  */} 菜谱
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-full px-10 py-4 text-base font-serif tracking-widest uppercase flex items-center justify-center data-[state=active]:bg-white data-[state=active]:text-[#1A0E0C] data-[state=active]:shadow-sm transition-all">
              {/* <Star size={16} className="mr-2" />  */} 食评
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </TabsContent>

        <TabsContent value="recipes">
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recipes.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </TabsContent>

        <TabsContent value="reviews">
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {reviews.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-32 space-y-6">
      <div className="text-6xl opacity-20">🍽️</div>
      <h3 className="text-2xl font-serif italic text-[#1A0E0C]">No flavors found</h3>
      <p className="text-[#2A1A18]/50 font-serif">Try adjusting your filters or search terms.</p>
    </div>
  );
}
