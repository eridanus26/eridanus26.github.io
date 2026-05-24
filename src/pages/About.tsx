import { blogData } from '../data/blogData';
import { motion } from 'motion/react';
import { Instagram, Twitter, Mail, Heart, Sparkles, MessageCircleMore, Utensils, Album, Tv } from 'lucide-react';
import { RubyText } from '../components/RubyText';

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
          <div className="absolute -bottom-8 -right-8 w-48 h-48 collage-border rotate-[6deg] shadow-xl overflow-hidden bg-white p-0 hidden md:block">
            <img 
              src="https://picsum.photos/seed/about-sub/400/400" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-baseline gap-2.5">
              <span className="text-base font-serif tracking-[0.3em] uppercase text-[#A84848]/60">夢想家 ・ 作家 ・ 私</span>
              {/* <Sparkles size={14} className="text-[#A84848]/60 translate-y-[1px] self-center sm:self-auto" /> */}
            </div>
            <h1 className="text-6xl md:text-7xl font-serif italic text-[#1A0E0C]">{about.name}</h1>
            <h2 className="text-3xl font-serif not-italic text-[#1A0E0C]">
              <RubyText kanji="波江" reading="なみえ" />  <RubyText kanji="えり" reading="" />
            </h2>
            {/* <div className="prose prose-stone lg:prose-xl font-serif italic text-[#2A1A18]/70 leading-relaxed">
              夢想家 · 作家 · 私
            </div> */}
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-serif not-italic text-[#1A0E0C]">哪里找到我 🔍</h3>
              <div className="h-[1px] flex-1 bg-[#A84848]/10" />
            </div>
            
            <div className="flex flex-wrap gap-6">
              {about.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-lg font-serif italic text-[#2A1A18]/60 hover:text-[#A84848] transition-all"
                >
                  <div className="p-3 rounded-full border border-[#A84848]/10 group-hover:bg-[#A84848] group-hover:text-white transition-all">
                    {social.platform === 'Instagram' && <Instagram size={20} />}
                    {social.platform === '微信公众号' && <MessageCircleMore size={20} />}
                    {social.platform === '食べログ' && <Utensils size={20} />}
                    {social.platform === '小红书' && <Album size={20} />}
                    {social.platform === '哔哩哔哩' && <Tv size={20} />}
                    {/* {!['Instagram', 'Twitter'].includes(social.platform) && <Mail size={20} />} */}
                  </div>
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-[#A84848]/10">
            {/* 💡 The container card with a soft background tone and a solid left border band */}
            <div className="bg-[#2A1A18]/5 border-l-2 border-[#A84848]/60 p-6 md:p-6 rounded-r-sm space-y-4">
              <p className="text-base md:text-base font-serif text-[#2A1A18]/80 leading-relaxed tracking-wide">
                今日ごとに<br />今日や限りと　惜しめども<br />またも今年に　逢ひにけるかな
              </p>
              <p className="text-sm font-serif text-[#2A1A18]/50 pl-1">
                藤原俊成
              </p>
            </div>
          </div>

          <div className="bg-[#2A1A18]/5 border-l-2 border-[#A84848]/60 p-6 md:p-6 rounded-r-sm space-y-4">
            <p className="text-base md:text-base font-serif text-[#2A1A18]/80 leading-relaxed tracking-wide">
              冬の夜も<br />うすくれなゐの　紙のはし<br />散れる灯かげは　心ときめく
            </p>
            <p className="text-sm font-serif text-[#2A1A18]/50 pl-1">
              与謝野晶子
            </p>
          </div>
          <div className="bg-[#2A1A18]/5 border-l-2 border-[#A84848]/60 p-6 md:p-6 rounded-r-sm space-y-4">
            <p className="text-base md:text-base font-serif text-[#2A1A18]/80 leading-relaxed tracking-wide">
              「寒いね」と　話しかければ<br />「寒いね」と　答える人の　いるあたたかさ
            </p>
            <p className="text-sm font-serif text-[#2A1A18]/50 pl-1">
              俵万智
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
