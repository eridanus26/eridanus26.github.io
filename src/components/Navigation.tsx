import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, GraduationCap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { blogData } from '../data/blogData';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
  { name: 'Photography', path: '/photography' },
  { name: 'Travel', path: '/travel' },
  { name: 'Food', path: '/food' },
  { name: 'Map', path: '/map' },
  { name: 'Academics', path: '/academics', icon: GraduationCap },
  { name: 'About', path: '/about' },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-[#A84848]/10 bg-[#FAF7F4]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col flex-shrink-0">
          <span className="text-3xl font-serif italic text-[#1A0E0C] leading-none">{blogData.siteTitle}</span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#A84848]/60 mt-1">{blogData.siteDescription}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-serif tracking-[0.15em] uppercase transition-all duration-300 hover:text-[#A84848]",
                location.pathname === item.path 
                  ? "text-[#A84848] font-bold border-b border-[#A84848]/30 pb-1" 
                  : "text-[#2A1A18]/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-[#A84848]/20" />
          
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger render={
              <Button variant="ghost" size="icon" className="text-[#A84848]/60 hover:text-[#A84848]">
                <Search size={20} />
              </Button>
            } />
            <DialogContent className="sm:max-w-[600px] bg-[#FAF7F4] border-[#A84848]/10 p-12">
              <form onSubmit={handleSearch} className="space-y-8">
                <div className="space-y-4 text-center">
                  <h2 className="text-4xl font-serif italic text-[#1A0E0C]">Search the Archive</h2>
                  <p className="text-lg text-[#2A1A18]/50 font-serif">Enter keywords to find stories, recipes, or notes.</p>
                </div>
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type something..."
                    className="w-full bg-white border-b-2 border-[#A84848]/20 focus:border-[#A84848] py-4 px-2 text-2xl font-serif italic outline-none transition-colors"
                  />
                  <Button type="submit" className="absolute right-0 bottom-2 bg-transparent hover:bg-transparent text-[#A84848]">
                    <ArrowRight size={24} />
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger render={
              <Button variant="ghost" size="icon" className="text-[#A84848]">
                <Search size={22} />
              </Button>
            } />
            <DialogContent className="sm:max-w-[600px] bg-[#FAF7F4] border-[#A84848]/10 p-12">
              <form onSubmit={handleSearch} className="space-y-8">
                <div className="space-y-4 text-center">
                  <h2 className="text-4xl font-serif italic text-[#1A0E0C]">Search the Archive</h2>
                  <p className="text-lg text-[#2A1A18]/50 font-serif">Enter keywords to find stories, recipes, or notes.</p>
                </div>
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type something..."
                    className="w-full bg-white border-b-2 border-[#A84848]/20 focus:border-[#A84848] py-4 px-2 text-2xl font-serif italic outline-none transition-colors"
                  />
                  <Button type="submit" className="absolute right-0 bottom-2 bg-transparent hover:bg-transparent text-[#A84848]">
                    <ArrowRight size={24} />
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-[#A84848]">
                  <Menu size={24} />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-[#FAF7F4] border-l-[#A84848]/10 w-full sm:max-w-xs overflow-y-auto">
              <div className="flex flex-col gap-8 pt-32 px-10 pb-20">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-serif italic transition-colors hover:text-[#A84848]",
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
