import { motion } from 'motion/react';
import { Calendar, Tag, MapPin, Star, BookOpen } from 'lucide-react';
import { AnyPost, FoodPost, AcademicPost } from '../types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: AnyPost;
}

export default function PostCard({ post }: PostCardProps) {
  const isFood = post.category === 'food';
  const isAcademic = post.category === 'academic';
  const foodPost = isFood ? (post as FoodPost) : null;
  const academicPost = isAcademic ? (post as AcademicPost) : null;

  return (
    <Link to={`/post/${post.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="collage-card group h-full flex flex-col"
      >
        <div className="relative h-56 overflow-hidden collage-border m-3">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge className="bg-[#FAF7F4] text-[#A84848] border-[#A84848]/20 hover:bg-white capitalize font-serif italic">
              {post.category}
            </Badge>
            {isAcademic && (
              <Badge className="bg-[#A84848] text-white border-none font-serif text-[10px]">
                {academicPost?.projectType}
              </Badge>
            )}
          </div>
        </div>

        <div className="p-6 pt-2 flex-1 flex flex-col space-y-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#9A7A78] font-serif">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} className="text-[#A84848]/40" />
              {post.date}
            </span>
            {post.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#A84848]/40" />
                {post.location.name}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-serif italic text-[#1A0E0C] group-hover:text-[#A84848] transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-sm text-[#2A1A18]/60 font-serif leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-[#A84848]/40 hover:text-[#A84848] transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
            
            {isFood && foodPost?.rating && (
              <div className="flex items-center gap-0.5 text-[#A84848]">
                <Star size={12} className="fill-current" />
                <span className="text-xs font-bold ml-1">{foodPost.rating}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
