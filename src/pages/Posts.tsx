import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import PostCard from '../components/PostCard';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Tag, Layers } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Folder, ChevronRight } from 'lucide-react';

export default function Posts() {
  const [search, setSearch] = useState('');

  const allPosts = useMemo(() => {
    return blogData.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                           post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchesSearch;
    });
  }, [allPosts, search]);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    allPosts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allPosts]);

  const categories = useMemo(() => {
    const catMap = new Map<string, typeof allPosts>();
    allPosts.forEach(p => {
      const list = catMap.get(p.category) || [];
      list.push(p);
      catMap.set(p.category, list);
    });
    return Array.from(catMap.entries());
  }, [allPosts]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">The Archive</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">A chronological collection of thoughts, captures, and discoveries.</p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A84848]/40" size={20} />
        <Input 
          placeholder="Search by title or tag..." 
          className="pl-12 h-14 rounded-full border-[#A84848]/10 bg-white shadow-sm focus-visible:ring-[#A84848]/30 font-serif italic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="space-y-16">
        <div className="flex justify-center">
          <TabsList className="bg-[#F0E8E4] border border-[#A84848]/10 rounded-full p-1 h-14">
            <TabsTrigger value="all" className="rounded-full px-8 text-xs font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Layers size={14} className="mr-2" /> All Posts
            </TabsTrigger>
            <TabsTrigger value="folders" className="rounded-full px-8 text-xs font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Folder size={14} className="mr-2" /> Folders
            </TabsTrigger>
            <TabsTrigger value="archives" className="rounded-full px-8 text-xs font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Calendar size={14} className="mr-2" /> Timeline
            </TabsTrigger>
            <TabsTrigger value="tags" className="rounded-full px-8 text-xs font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Tag size={14} className="mr-2" /> Tags
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>

        <TabsContent value="folders" className="max-w-4xl mx-auto space-y-12">
          {categories.map(([cat, posts]) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center gap-4 border-b border-[#A84848]/10 pb-4">
                <Folder size={20} className="text-[#A84848]" />
                <h3 className="text-2xl font-serif italic text-[#1A0E0C] capitalize">{cat}</h3>
                <span className="text-xs font-serif text-[#2A1A18]/40 ml-auto">{posts.length} items</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                {posts.map(post => (
                  <Link 
                    key={post.id} 
                    to={`/post/${post.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F0E8E4] transition-all group"
                  >
                    <ChevronRight size={14} className="text-[#A84848]/40 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-serif text-[#2A1A18]/70 group-hover:text-[#A84848] transition-colors">{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="archives" className="max-w-3xl mx-auto space-y-0">
          {allPosts.map((post, idx) => (
            <div key={post.id} className="timeline-item group">
              <div className="timeline-dot group-hover:scale-150 transition-transform" />
              <div className="space-y-2">
                <span className="text-[10px] font-serif tracking-[0.2em] uppercase text-[#A84848]/60">{post.date}</span>
                <h3 className="text-2xl font-serif italic text-[#1A0E0C] hover:text-[#A84848] transition-colors cursor-pointer">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-[#2A1A18]/50 font-serif line-clamp-2">{post.excerpt}</p>
                <div className="flex gap-2 pt-2">
                  <Badge variant="outline" className="text-[9px] font-serif uppercase tracking-widest border-[#A84848]/20 text-[#A84848]/60">
                    {post.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="tags" className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                className="px-6 py-2 rounded-full border border-[#A84848]/10 bg-white text-sm font-serif italic text-[#2A1A18]/70 hover:bg-[#A84848] hover:text-white transition-all shadow-sm"
              >
                #{tag}
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
