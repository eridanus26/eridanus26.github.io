import { useEffect, useState } from 'react';
import { blogData } from '../data/blogData';

export default function Footer() {
  const [daysRunning, setDaysRunning] = useState(0);
  const startDate = new Date('2024-01-01'); // Mock start date

  useEffect(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysRunning(diff);
  }, []);

  return (
    <footer className="bg-white border-t border-[#A84848]/10 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-[#1A0E0C]">{blogData.siteTitle}</h3>
            <p className="text-sm text-[#2A1A18]/50 font-serif">
              {blogData.siteIntro}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-serif tracking-[0.2em] uppercase text-[#A84848]/60">Site Stats</h4>
            <ul className="space-y-2 text-sm text-[#2A1A18]/70 font-serif">
              <li>Days Running: <span className="text-[#A84848] font-bold">{daysRunning}</span></li>
              <li>Total Visitors: <span className="text-[#A84848] font-bold">1,234</span></li>
              <li>Last Update: <span className="text-[#A84848] font-bold">{new Date().toLocaleDateString()}</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-serif tracking-[0.2em] uppercase text-[#A84848]/60">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              {blogData.about.socials.map(s => (
                <a key={s.platform} href={s.url} className="text-sm hover:text-[#A84848] transition-colors font-serif italic">
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#A84848]/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A1A18]/30">
            © 2024 • Crafted with Elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
