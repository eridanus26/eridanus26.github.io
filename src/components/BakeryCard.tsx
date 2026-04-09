import { motion } from 'motion/react';
import { Calendar, Tag, MapPin, Star } from 'lucide-react';
import { AnyPost, FoodPost } from '../types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BakeryCardProps {
  post: AnyPost;
  onClick?: () => void;
}

export default function BakeryCard({ post, onClick }: BakeryCardProps) {
  const isFood = post.category === 'food';
  const foodPost = isFood ? (post as FoodPost) : null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bakery-card overflow-hidden cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-bakery-pink text-bakery-brown hover:bg-bakery-pink border-none capitalize">
            {post.category}
          </Badge>
          {isFood && foodPost?.foodType && (
            <Badge className="bg-bakery-yellow text-bakery-brown hover:bg-bakery-yellow border-none">
              {foodPost.foodType}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-4 text-xs text-bakery-brown/60 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {post.date}
          </span>
          {post.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {post.location.name}
            </span>
          )}
        </div>

        <h3 className="text-xl font-display text-bakery-brown group-hover:text-bakery-berry transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-bakery-brown/70 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-2 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-bakery-brown/40">
              #{tag}
            </span>
          ))}
        </div>

        {isFood && foodPost?.rating && (
          <div className="flex items-center gap-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  i < Math.floor(foodPost.rating || 0) 
                    ? "fill-bakery-yellow text-bakery-yellow" 
                    : "text-bakery-brown/20"
                )}
              />
            ))}
            <span className="text-xs font-bold ml-1">{foodPost.rating}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
