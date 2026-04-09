import { motion } from 'motion/react';
import { blogData } from '../data/blogData';
import PostCard from '../components/PostCard';
import MapFeature from '../components/MapFeature';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Quote, Map as MapIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const featuredPosts = blogData.posts.slice(0, 3);
  const latestPosts = blogData.posts.slice(0, 6);
  
  const [todayInfo, setTodayInfo] = useState({
    date: '',
    gratitude: '',
    illustration: ''
  });

  useEffect(() => {
    const randomGratitude = blogData.gratitudeLibrary[Math.floor(Math.random() * blogData.gratitudeLibrary.length)];
    const randomIllustration = blogData.foodIllustrations[Math.floor(Math.random() * blogData.foodIllustrations.length)];
    const formattedDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    setTodayInfo({
      date: formattedDate,
      gratitude: randomGratitude,
      illustration: randomIllustration
    });
  }, []);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section - Collage Style */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAF7F4]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-xs font-serif tracking-[0.4em] uppercase text-[#A84848]/60 block">Est. 2024</span>
              <h1 className="text-6xl md:text-8xl text-[#1A0E0C] font-serif italic leading-[1.1] tracking-tighter">
                {blogData.siteTitle.split('')[0]} <span className="text-[#A84848] not-italic">{blogData.siteTitle.slice(1)}</span>
              </h1>
            </div>
            
            <p className="text-xl text-[#2A1A18]/60 font-serif italic max-w-lg leading-relaxed">
              {blogData.siteDescription} — A digital collage of photography, travel, culinary experiments, and academic pursuits.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <Link to="/posts">
                <button className="elegant-button">Explore Archive</button>
              </Link>
              <Link to="/about" className="group flex items-center gap-3 text-xs font-serif tracking-widest uppercase text-[#1A0E0C] hover:text-[#A84848] transition-colors">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] collage-border rotate-[-2deg] shadow-2xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/collage-main/800/1000" 
                className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-square collage-border rotate-[5deg] shadow-xl overflow-hidden bg-white p-2">
              <img 
                src="https://picsum.photos/seed/collage-sub/400/400" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 p-6 bg-[#d4a8c8] text-white rounded-full shadow-lg animate-pulse">
              <Sparkles size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Today's Info Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F0E8E4] p-10 md:p-16 rounded-[3rem] border border-[#A84848]/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Quote size={120} className="text-[#A84848]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A84848]/60 font-serif">Today is</span>
              <h3 className="text-2xl font-serif italic text-[#1A0E0C]">{todayInfo.date}</h3>
            </div>
            
            <div className="space-y-4 text-center px-8 border-x border-[#A84848]/10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A84848]/60 font-serif">Gratitude</span>
              <p className="text-xl font-serif italic text-[#2A1A18]/80 leading-relaxed">
                "{todayInfo.gratitude}"
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A84848]/60 font-serif">Daily Bite</span>
              <div className="text-6xl animate-bounce">
                {todayInfo.illustration}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif italic text-[#1A0E0C]">Today's Specials</h2>
            <p className="text-[#2A1A18]/50 font-serif max-w-md">A hand-picked selection of stories that resonate with the current season.</p>
          </div>
          <Link to="/posts" className="text-xs font-serif tracking-widest uppercase text-[#A84848] hover:underline">
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="container mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif italic text-[#1A0E0C]">Journey Map</h2>
            <p className="text-[#2A1A18]/50 font-serif max-w-md">Explore stories by their geographical footprints across the globe.</p>
          </div>
          <Link to="/map">
            <button className="elegant-button flex items-center gap-2">
              <MapIcon size={16} /> Open Full Map
            </button>
          </Link>
        </div>
        <div className="collage-card p-4 md:p-8 bg-white">
          <MapFeature />
        </div>
      </section>

      {/* Latest Stories Section */}
      <section className="bg-[#1A0E18] py-32 rounded-[4rem] text-[#E8D8E0]">
        <div className="container mx-auto px-4 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-serif italic text-[#F0E0E4]">Fresh from the Oven</h2>
            <p className="text-[#E8D8E0]/40 font-serif max-w-xl mx-auto">The latest musings, captures, and discoveries from my daily explorations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {latestPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/post/${post.id}`} 
                className="group flex gap-8 items-center border-b border-[#E8D8E0]/10 pb-12 last:border-0"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 collage-border border-white/20">
                  <img src={post.coverImage} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4a8c8] font-serif">{post.category}</span>
                  <h3 className="text-2xl font-serif italic group-hover:text-[#d4a8c8] transition-colors leading-tight">{post.title}</h3>
                  <p className="text-sm text-[#E8D8E0]/50 line-clamp-1 font-serif italic">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center pt-10">
            <Link to="/posts">
              <button className="elegant-button bg-[#C89098] hover:bg-[#E0B0B8]">Explore Full Archive</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
