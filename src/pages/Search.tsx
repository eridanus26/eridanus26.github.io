import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { blogData } from '../data/blogData';
import PostCard from '../components/PostCard';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = useMemo(() => {
    if (!query) return [];

    const scoredPosts = blogData.posts.map(post => {
      let score = 0;
      const title = post.title.toLowerCase();
      const tags = post.tags.map(t => t.toLowerCase());
      const location = post.location?.name.toLowerCase() || '';
      const category = post.category.toLowerCase();
      const subcategory = post.subcategory?.toLowerCase() || '';
      const content = post.content.toLowerCase();

      // Priority 1: Title
      if (title.includes(query)) score += 100;
      
      // Priority 2: Tags
      if (tags.some(t => t.includes(query))) score += 80;

      // Priority 3: Location
      if (location.includes(query)) score += 60;

      // Priority 4: Categories
      if (category.includes(query) || subcategory.includes(query)) score += 40;

      // Priority 5: Content
      if (content.includes(query)) score += 20;

      return { post, score };
    });

    return scoredPosts
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.post);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-20 space-y-16">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <SearchIcon size={32} />
        </div>
        <h1 className="text-5xl font-serif italic text-[#1A0E0C]">
          Search Results for "{query}"
        </h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">
          {results.length} {results.length === 1 ? 'story' : 'stories'} found matching your keywords.
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 space-y-6">
          <div className="text-6xl opacity-20">🔍</div>
          <h3 className="text-2xl font-serif italic text-[#1A0E0C]">No matches found</h3>
          <p className="text-[#2A1A18]/50 font-serif">Try different keywords or check your spelling.</p>
        </div>
      )}
    </div>
  );
}
