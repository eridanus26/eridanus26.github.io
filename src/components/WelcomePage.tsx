import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { blogData } from '../data/blogData';

export default function WelcomePage() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  if (!isHome) return null;

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-[#FAF7F4] overflow-hidden border-b border-[#A84848]/10">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4a8c8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A84848]/5 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-8 px-4 relative z-10"
        >
          <div className="space-y-2">
            <span className="text-sm font-serif tracking-[0.3em] uppercase text-[#A84848]/60">Welcome to</span>
            <h1 className="text-7xl md:text-9xl text-[#1A0E0C] font-serif italic tracking-tighter">
              {blogData.siteTitle.split('')[0]} <span className="text-[#d4a8c8] not-italic">{blogData.siteTitle.slice(1)}</span>
            </h1>
            <p className="text-xs font-serif tracking-[0.5em] uppercase text-[#A84848]/40 mt-4">{blogData.siteDescription}</p>
          </div>
          
          <p className="text-lg text-[#2A1A18]/60 font-serif italic max-w-md mx-auto">
            A collection of moments, flavors, and academic pursuits.
          </p>
          
          <div className="pt-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-3 text-[#A84848]/40"
            >
              <span className="text-xs font-serif tracking-[0.2em] uppercase">Scroll to Explore</span>
              <ChevronDown size={24} />
            </motion.div>
          </div>
        </motion.div>

        {/* Collage Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[15%] left-[10%] w-32 h-40 border border-[#A84848]/20 rotate-[-12deg]" />
          <div className="absolute bottom-[20%] right-[15%] w-40 h-32 border border-[#d4a8c8]/20 rotate-[8deg]" />
          <span className="absolute top-[25%] right-[20%] text-6xl opacity-40">🥐</span>
          <span className="absolute bottom-[25%] left-[20%] text-6xl opacity-40">📸</span>
        </div>
      </div>
    </div>
  );
}
