import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { blogData } from '../data/blogData';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
  { name: 'Photography', path: '/photography' },
  { name: 'Travel', path: '/travel' },
  { name: 'Recipes', path: '/food/recipes' },
  { name: 'Reviews', path: '/food/reviews' },
  { name: 'Map', path: '/map' },
  { name: 'Academics', path: '/academics', icon: GraduationCap },
  { name: 'About', path: '/about' },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-[#A84848]/10 bg-[#FAF7F4]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-serif italic text-[#1A0E0C] leading-none">{blogData.siteTitle}</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A84848]/60 mt-1">{blogData.siteDescription}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs font-serif tracking-[0.15em] uppercase transition-all duration-300 hover:text-[#A84848]",
                location.pathname === item.path 
                  ? "text-[#A84848] font-bold border-b border-[#A84848]/30 pb-1" 
                  : "text-[#2A1A18]/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-[#A84848]/20" />
          <Button variant="ghost" size="icon" className="text-[#A84848]/60 hover:text-[#A84848]">
            <Search size={18} />
          </Button>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-[#A84848]">
                  <Menu size={24} />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-[#FAF7F4] border-l-[#A84848]/10 w-full sm:max-w-xs">
              <div className="flex flex-col gap-8 pt-20 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-serif italic transition-colors hover:text-[#A84848]",
                      location.pathname === item.path ? "text-[#A84848] font-bold" : "text-[#2A1A18]/70"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
