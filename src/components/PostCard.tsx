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
    <div className="h-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="collage-card group h-full flex flex-col relative"
      >
        <Link to={`/post/${post.id}`} className="absolute inset-0 z-0" />
        
        <div className="relative h-64 overflow-hidden collage-border m-3 z-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {isAcademic && (
              <Badge className="bg-[#A84848] text-white border-none font-serif text-xs px-3 py-1">
                {academicPost?.projectType}
              </Badge>
            )}
          </div>
        </div>

        <div className="p-8 pt-4 flex-1 flex flex-col space-y-6 z-10 pointer-events-none">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#9A7A78] font-serif">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#A84848]/40" />
              {post.date}
            </span>
            {post.location && (
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-[#A84848]/40" />
                {post.location.name}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-serif italic text-[#1A0E0C] group-hover:text-[#A84848] transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-lg text-[#2A1A18]/60 font-serif leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between pointer-events-auto">
            <div className="flex flex-wrap gap-4">
              {post.tags.slice(0, 2).map(tag => (
                <Link 
                  key={tag} 
                  to={`/archive/tag/${tag}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs uppercase tracking-widest font-bold text-[#A84848]/40 hover:text-[#A84848] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            
            {isFood && foodPost?.rating && (
              <div className="flex items-center gap-1 text-[#A84848]">
                <Star size={14} className="fill-current" />
                <span className="text-sm font-bold ml-1">{foodPost.rating}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
