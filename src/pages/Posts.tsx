import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import PostCard from '../components/PostCard';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Tag, Layers } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Folder, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PostCategory } from '../types';

interface FolderNode {
  name: string;
  path: string;
  subfolders: Map<string, FolderNode>;
  posts: typeof blogData.posts;
}

function FolderItem({ node, depth = 0 }: { node: FolderNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(depth === 0);
  const hasSubfolders = node.subfolders.size > 0;
  
  return (
    <div className="space-y-2">
      <div 
        className={cn(
          "flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer group",
          depth === 0 ? "bg-[#F0E8E4]/50 border border-[#A84848]/10" : "hover:bg-[#F0E8E4]/30"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3 flex-1">
          {hasSubfolders ? (
            <ChevronRight 
              size={18} 
              className={cn("text-[#A84848] transition-transform", isOpen && "rotate-90")} 
            />
          ) : (
            <Folder size={18} className="text-[#A84848]/40" />
          )}
          <Link 
            to={`/archive/category/${encodeURIComponent(node.name)}`} 
            onClick={(e) => e.stopPropagation()}
            className="text-xl font-serif italic text-[#1A0E0C] hover:text-[#A84848] transition-colors"
          >
            {node.name}
          </Link>
          <span className="text-xs font-serif text-[#2A1A18]/30 ml-auto">{node.posts.length} items</span>
        </div>
      </div>

      {isOpen && (
        <div className={cn("space-y-2", depth >= 0 && "pl-8 border-l border-[#A84848]/10 ml-5")}>
          {hasSubfolders ? (
            Array.from(node.subfolders.values()).map(sub => (
              <FolderItem key={sub.path} node={sub} depth={depth + 1} />
            ))
          ) : (
            <div className="grid grid-cols-1 gap-2 pt-2">
              {node.posts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/post/${post.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F0E8E4] transition-all group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A84848]/20 group-hover:bg-[#A84848] transition-colors" />
                  <span className="text-base font-serif text-[#2A1A18]/60 group-hover:text-[#A84848] transition-colors">{post.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Posts() {
  const [search, setSearch] = useState('');

  const allPosts = useMemo(() => {
    return blogData.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const folderTree = useMemo(() => {
    const root = new Map<string, FolderNode>();

    allPosts.forEach(post => {
      const parts: string[] = [post.category];
      if (post.subcategory) {
        // Support multi-level subcategories via slash separation
        parts.push(...post.subcategory.split('/').map(s => s.trim()));
      }

      let currentMap = root;
      let currentPath = '';

      parts.forEach((part) => {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        if (!currentMap.has(part)) {
          currentMap.set(part, {
            name: part,
            path: currentPath,
            subfolders: new Map(),
            posts: []
          });
        }
        const node = currentMap.get(part)!;
        node.posts.push(post);
        currentMap = node.subfolders;
      });
    });

    return Array.from(root.values());
  }, [allPosts]);

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

      <Tabs defaultValue="all" className="space-y-20">
        <div className="flex justify-center">
          <TabsList className="bg-[#F0E8E4] border border-[#A84848]/10 rounded-full p-1 h-16">
            <TabsTrigger value="all" className="rounded-full px-10 text-sm font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Layers size={16} className="mr-2" /> All Posts
            </TabsTrigger>
            <TabsTrigger value="folders" className="rounded-full px-10 text-sm font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Folder size={16} className="mr-2" /> Folders
            </TabsTrigger>
            <TabsTrigger value="archives" className="rounded-full px-10 text-sm font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Calendar size={16} className="mr-2" /> Timeline
            </TabsTrigger>
            <TabsTrigger value="tags" className="rounded-full px-10 text-sm font-serif tracking-widest uppercase data-[state=active]:bg-[#A84848] data-[state=active]:text-white transition-all">
              <Tag size={16} className="mr-2" /> Tags
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>

        <TabsContent value="folders" className="max-w-4xl mx-auto space-y-4">
          {folderTree.map(node => (
            <FolderItem key={node.path} node={node} />
          ))}
        </TabsContent>

        <TabsContent value="archives" className="max-w-3xl mx-auto space-y-0">
          {allPosts.map((post, idx) => (
            <div key={post.id} className="timeline-item group">
              <div className="timeline-dot group-hover:scale-150 transition-transform" />
              <div className="space-y-4">
                <span className="text-xs font-serif tracking-[0.2em] uppercase text-[#A84848]/60">{post.date}</span>
                <h3 className="text-2xl font-serif italic text-[#1A0E0C] hover:text-[#A84848] transition-colors cursor-pointer">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-lg text-[#2A1A18]/50 font-serif line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="tags" className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/archive/tag/${tag}`}
                className="px-8 py-3 rounded-full border border-[#A84848]/10 bg-white text-lg font-serif italic text-[#2A1A18]/70 hover:bg-[#A84848] hover:text-white transition-all shadow-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
