import { blogData } from '../data/blogData';
import { motion } from 'motion/react';
import { Instagram, Twitter, Mail, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const { about } = blogData;

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="collage-border rotate-[-3deg] shadow-2xl overflow-hidden aspect-[4/5]">
            <img 
              src={about.avatar} 
              alt={about.name} 
              className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 collage-border rotate-[6deg] shadow-xl overflow-hidden bg-white p-2 hidden md:block">
            <img 
              src="https://picsum.photos/seed/about-sub/400/400" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif tracking-[0.3em] uppercase text-[#A84848]/60">The Storyteller</span>
              <Sparkles size={14} className="text-[#d4a8c8]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-serif italic text-[#1A0E0C]">I'm {about.name}</h1>
            <div className="prose prose-stone lg:prose-xl font-serif italic text-[#2A1A18]/70 leading-relaxed">
              {about.bio}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-serif italic text-[#1A0E0C]">Let's Connect</h3>
              <div className="h-[1px] flex-1 bg-[#A84848]/10" />
            </div>
            
            <div className="flex flex-wrap gap-6">
              {about.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-serif italic text-[#2A1A18]/60 hover:text-[#A84848] transition-all"
                >
                  <div className="p-3 rounded-full border border-[#A84848]/10 group-hover:bg-[#A84848] group-hover:text-white transition-all">
                    {social.platform === 'Instagram' && <Instagram size={20} />}
                    {social.platform === 'Twitter' && <Twitter size={20} />}
                    {!['Instagram', 'Twitter'].includes(social.platform) && <Mail size={20} />}
                  </div>
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-[#A84848]/10">
            <p className="text-sm font-serif italic text-[#2A1A18]/40 flex items-center gap-2">
              <Heart size={14} className="text-[#A84848]/40" />
              "Life is a collection of stories, make yours a masterpiece."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
