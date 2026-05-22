// import { useParams, Link } from 'react-router-dom';
// import { blogData } from '../data/blogData';
// import { motion } from 'motion/react';
// import { Calendar, MapPin, Tag, ArrowLeft, Clock, User } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import { Badge } from '@/components/ui/badge';

// export default function PostDetail() {
//   const { id } = useParams();
//   const post = blogData.posts.find(p => p.id === id);

//   if (!post) {
//     return (
//       <div className="container mx-auto px-4 py-32 text-center space-y-6">
//         <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
//         <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="pb-32">
//       {/* Hero Header */}
//       <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={post.coverImage} 
//             className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
//             referrerPolicy="no-referrer"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-[#FAF7F4]/40 to-transparent" />
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10 pb-16 text-center space-y-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl md:text-6xl font-serif italic text-[#1A0E0C] leading-tight max-w-4xl mx-auto">
//               {post.title}
//             </h1>
//             <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-serif italic text-[#2A1A18]/60">
//               <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
//               {post.location && <span className="flex items-center gap-2"><MapPin size={18} /> {post.location.name}</span>}
//               <span className="flex items-center gap-2"><Clock size={18} /> 5 min read</span>
//             </div>
            
//             {/* Breadcrumbs */}
//             <div className="flex justify-center items-center gap-2 text-sm font-serif tracking-widest uppercase text-[#A84848]/40 pt-4">
//               <Link to={`/archive/category/${post.category}`} className="hover:text-[#A84848] transition-colors">
//                 {post.category}
//               </Link>
//               {post.subcategory && (
//                 <>
//                   <span>/</span>
//                   <Link to={`/archive/category/${post.subcategory}`} className="hover:text-[#A84848] transition-colors">
//                     {post.subcategory}
//                   </Link>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* Content */}
//       <article className="container mx-auto px-4 mt-24">
//         <div className="max-w-4xl mx-auto space-y-16">
//           <div className="prose prose-stone lg:prose-2xl max-w-none font-serif leading-relaxed text-[#2A1A18]/80">
//             <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
//           </div>

//           {/* Post Footer */}
//           <div className="pt-20 border-t border-[#A84848]/10 space-y-12">
//             <div className="flex flex-wrap gap-4">
//               {post.tags.map(tag => (
//                 <Link 
//                   key={tag} 
//                   to={`/archive/tag/${tag}`}
//                   className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
//                 >
//                   #{tag}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
//               <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
//                 <ArrowLeft size={20} /> Back to Archive
//               </Link>
              
//               <div className="flex items-center gap-6">
//                 <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
//                 <div className="flex gap-4">
//                   {['Twitter', 'Instagram', 'Link'].map(p => (
//                     <button key={p} className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all">
//                       <span className="text-xs font-bold">{p[0]}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

// import { useParams, Link } from 'react-router-dom';
// import { blogData } from '../data/blogData';
// import { motion } from 'motion/react';
// import { Calendar, MapPin, Tag, ArrowLeft, Clock, User } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import { Badge } from '@/components/ui/badge';

// export default function PostDetail() {
//   const { id } = useParams();
//   const post = blogData.posts.find(p => p.id === id);

//   if (!post) {
//     return (
//       <div className="container mx-auto px-4 py-32 text-center space-y-6">
//         <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
//         <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="pb-32">
//       {/* Hero Header */}
//       <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={post.coverImage} 
//             className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
//             referrerPolicy="no-referrer"
//             alt={post.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-[#FAF7F4]/40 to-transparent" />
//         </div>

//         <div className="container mx-auto px-4 pb-12 relative z-10 text-center max-w-4xl space-y-6">
//           <Badge className="bg-[#A84848] text-white border-none font-serif text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
//             {post.category}
//           </Badge>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#1A0E0C] leading-tight">
//             {post.title}
//           </h1>
          
//           <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#2A1A18]/50 font-serif relative z-30">
//             <span className="flex items-center gap-2">
//               <Calendar size={14} className="text-[#A84848]/40" />
//               {post.date}
//             </span>

//             {/* Location block transformed to open the official Google Maps query link seamlessly */}
//             {post.location && (
//               <span className="flex items-center gap-2">
//                 <MapPin size={14} className="text-[#A84848]/40" />
//                 <a
//                   href={`https://www.google.com/maps/search/?api=1&query=${post.location.lat},${post.location.lng}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-[#A84848] hover:underline transition-colors cursor-pointer font-medium"
//                 >
//                   {post.location.name}
//                 </a>
//               </span>
//             )}

//             <span className="flex items-center gap-2">
//               <Clock size={14} className="text-[#A84848]/40" />
//               5 min read
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <article className="container mx-auto px-4 mt-16 max-w-3xl">
//         <div className="prose prose-neutral prose-stone max-w-none font-serif text-lg leading-relaxed text-[#2A1A18]/80 selection:bg-[#F0D0D0]">
//           <ReactMarkdown rehypePlugins={[rehypeRaw]}>
//             {post.content}
//           </ReactMarkdown>
//         </div>

//         {/* Footer info blocks / tags */}
//         <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
//           <div className="flex flex-wrap gap-4">
//             {post.tags.map(tag => (
//               <Link 
//                 key={tag} 
//                 to={`/archive/tag/${tag}`}
//                 className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
//               >
//                 #{tag}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
//             <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
//               <ArrowLeft size={20} /> Back to Archive
//             </Link>
            
//             <div className="flex items-center gap-6">
//               <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
//               <div className="flex gap-4">
//                 {['Twitter', 'Instagram', 'Link'].map(p => (
//                   <button key={p} className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all">
//                     <span className="text-xs font-bold">{p[0]}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

// import { useParams, Link } from 'react-router-dom';
// import { blogData } from '../data/blogData';
// import { motion } from 'motion/react';
// import { Calendar, MapPin, ArrowLeft, Clock, User } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import { Badge } from '@/components/ui/badge';

// export default function PostDetail() {
//   const { id } = useParams();
//   const post = blogData.posts.find(p => p.id === id);

//   if (!post) {
//     return (
//       <div className="container mx-auto px-4 py-32 text-center space-y-6">
//         <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
//         <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
//       </div>
//     );
//   }

//   // Safe formatting helper for the frontmatter timestamp
//   const formatPostTime = (isoString?: string): string => {
//     if (!isoString) return '';
//     const dateObj = new Date(isoString);
//     return dateObj.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="pb-32">
//       {/* Hero Header */}
//       <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={post.coverImage} 
//             className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
//             referrerPolicy="no-referrer"
//             alt={post.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0C] via-[#1A0E0C]/40 to-transparent" />
//         </div>
        
//         <div className="container mx-auto px-4 pb-12 relative z-10 text-center space-y-4 max-w-4xl">
//           <Badge className="bg-[#A84848] text-white hover:bg-[#A84848]/90 font-serif uppercase tracking-[0.2em] px-4 py-1 text-xs">
//             {post.category}
//           </Badge>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">
//             {post.title}
//           </h1>
          
//           <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70 font-serif italic pt-2">
//             <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            
//             {post.location && (
//               <a 
//                 href={`http://googleusercontent.com/maps.google.com/?q=${post.location.lat},${post.location.lng}`}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 /* 💡 Updated classes here: text-white/70 base, transitioning to text-[#A84848] on hover */
//                 className="flex items-center gap-1 text-white/70 hover:text-[#A84848] hover:underline transition-colors duration-200 cursor-pointer"
//               >
//                 <MapPin size={14} /> 
//                 <span>{post.location.name}</span>
//               </a>
//             )}
//           </div>
//         </div>
//       </header>
//       {/* Main Content Layout */}
//       <main className="container mx-auto px-4 pt-16 max-w-3xl">
//         <motion.article 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="prose prose-stone max-w-none 
//             prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A0E0C] 
//             prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#2A1A18]/80 
//             prose-li:font-serif prose-li:text-[#2A1A18]/80
//             prose-strong:text-[#1A0E0C] prose-strong:font-serif
//             prose-a:text-[#A84848] hover:prose-a:underline font-serif"
//         >
//           <ReactMarkdown rehypePlugins={[rehypeRaw]}>
//             {post.content}
//           </ReactMarkdown>
//         </motion.article>

//         {/* Links / Metadata Footer section */}
//         <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
          
//           {/* Last Updated Signature Line */}
//           {post.updatedAt && (
//             <div className="flex items-center gap-2 text-xs text-[#2A1A18]/40 font-serif italic tracking-wide bg-[#F0E8E4]/30 p-3 rounded-xl max-w-max">
//               <Clock size={12} className="text-[#A84848]/60" />
//               <span>This entry was last updated on {formatPostTime(post.updatedAt)}</span>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-4">
//             {post.tags.map(tag => (
//               <Link 
//                 key={tag} 
//                 to={`/archive/tag/${tag}`}
//                 className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
//               >
//                 #{tag}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
//             <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
//               <ArrowLeft size={20} /> Back to Archive
//             </Link>
            
//             <div className="flex items-center gap-6">
//               <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
//               <div className="flex gap-4">
//                 {['Twitter', 'Instagram', 'Link'].map(p => (
//                   <button key={p} className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer text-xs font-serif italic">
//                     {p}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// import { useParams, Link } from 'react-router-dom';
// import { blogData } from '../data/blogData';
// import { motion } from 'motion/react';
// import { Calendar, MapPin, ArrowLeft, Clock, ShoppingBag, Star, Utensils } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import { Badge } from '@/components/ui/badge';

// // Extending our local interface directly to handle the markdown food frontmatter entries safely
// interface FoodPostExtensions {
//   cuisine?: string;
//   ingredients?: string[];
//   price?: string;
//   rating?: number | string;
// }

// export default function PostDetail() {
//   const { id } = useParams();
//   const rawPost = blogData.posts.find(p => p.id === id);
//   const post = rawPost as typeof rawPost & FoodPostExtensions;

//   if (!post) {
//     return (
//       <div className="container mx-auto px-4 py-32 text-center space-y-6">
//         <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
//         <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
//       </div>
//     );
//   }

//   // Safe formatting helper for the frontmatter timestamp
//   const formatPostTime = (isoString?: string): string => {
//     if (!isoString) return '';
//     const dateObj = new Date(isoString);
//     return dateObj.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   // Helper logic to quickly parse which type of food context we are dealing with
//   const isFoodCategory = post.category?.toLowerCase() === 'food';
//   const isRecipe = isFoodCategory && post.subcategory?.toLowerCase() === 'recipe';
//   const isReview = isFoodCategory && post.subcategory?.toLowerCase() === 'review';

//   return (
//     <div className="pb-32">
//       {/* Hero Header */}
//       <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={post.coverImage} 
//             className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
//             referrerPolicy="no-referrer"
//             alt={post.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0C] via-[#1A0E0C]/40 to-transparent" />
//         </div>
        
//         <div className="container mx-auto px-4 pb-12 relative z-10 text-center space-y-4 max-w-4xl">
//           <Badge className="bg-[#A84848] text-white hover:bg-[#A84848]/90 font-serif uppercase tracking-[0.2em] px-4 py-1 text-xs">
//             {post.category} {post.subcategory && `/ ${post.subcategory}`}
//           </Badge>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">
//             {post.title}
//           </h1>
          
//           <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70 font-serif italic pt-2">
//             <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            
//             {post.location && (
//               <a 
//                 href={`http://googleusercontent.com/maps.google.com/?q=${post.location.lat},${post.location.lng}`}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-white/70 hover:text-[#A84848] hover:underline transition-colors duration-200 cursor-pointer"
//               >
//                 <MapPin size={14} /> 
//                 <span>{post.location.name}</span>
//               </a>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Main Content Layout */}
//       <main className="container mx-auto px-4 pt-16 max-w-3xl">
        
//         {/* 💡 1. RECIPE INGREDIENTS BANNER DECK */}
//         {isRecipe && (
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-12 p-6 md:p-8 bg-[#F0E8E4]/40 border border-[#A84848]/10 rounded-2xl font-serif space-y-4 shadow-sm"
//           >
//             <div className="flex items-center gap-2 text-[#A84848]">
//               <Utensils size={18} />
//               <h3 className="text-xl font-serif italic font-bold text-[#1A0E0C]">Recipe Quick Info</h3>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
//               {post.cuisine && (
//                 <div className="sm:col-span-3 text-sm text-[#2A1A18]/70">
//                   <span className="font-bold text-[#1A0E0C]">Cuisine:</span> {post.cuisine}
//                 </div>
//               )}
//               {post.ingredients && post.ingredients.length > 0 && (
//                 <div className="sm:col-span-3 space-y-2">
//                   <span className="text-sm font-bold text-[#1A0E0C]">Ingredients Needed:</span>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-[#2A1A18]/80 list-none pl-0">
//                     {post.ingredients.map((ing, i) => (
//                       <li key={i} className="flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#A84848]/50" />
//                         {ing}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}

//         {/* 💡 2. FOOD REVIEW BANNER DECK */}
//         {isReview && (
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-12 p-6 bg-white border border-[#A84848]/10 rounded-2xl font-serif shadow-md flex flex-wrap items-center justify-around gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#A84848]/10 text-center"
//           >
//             {post.cuisine && (
//               <div className="flex-1 min-w-[120px] space-y-1">
//                 <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
//                   <Utensils size={12} /> Cuisine
//                 </div>
//                 <div className="text-lg font-serif italic font-semibold text-[#1A0E0C]">{post.cuisine}</div>
//               </div>
//             )}
            
//             {post.price && (
//               <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
//                 <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
//                   <ShoppingBag size={12} /> Price Range
//                 </div>
//                 <div className="text-lg font-serif italic font-semibold text-[#A84848]">{post.price}</div>
//               </div>
//             )}

//             {post.rating && (
//               <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
//                 <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
//                   <Star size={12} /> Rating
//                 </div>
//                 <div className="text-lg font-serif italic font-semibold text-[#1A0E0C] flex items-center justify-center gap-1">
//                   {post.rating} <span className="text-xs text-[#2A1A18]/40">/ 5</span>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}

//         {/* Core Markdown Article Content */}
//         <motion.article 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="prose prose-stone max-w-none 
//             prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A0E0C] 
//             prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#2A1A18]/80 
//             prose-li:font-serif prose-li:text-[#2A1A18]/80
//             prose-strong:text-[#1A0E0C] prose-strong:font-serif
//             prose-a:text-[#A84848] hover:prose-a:underline font-serif"
//         >
//           <ReactMarkdown rehypePlugins={[rehypeRaw]}>
//             {post.content}
//           </ReactMarkdown>
//         </motion.article>

//         {/* Links / Metadata Footer section */}
//         <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
          
//           {/* Last Updated Signature Line */}
//           {post.updatedAt && (
//             <div className="flex items-center gap-2 text-xs text-[#2A1A18]/40 font-serif italic tracking-wide bg-[#F0E8E4]/30 p-3 rounded-xl max-w-max">
//               <Clock size={12} className="text-[#A84848]/60" />
//               <span>This entry was last updated on {formatPostTime(post.updatedAt)}</span>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-4">
//             {post.tags.map(tag => (
//               <Link 
//                 key={tag} 
//                 to={`/archive/tag/${tag}`}
//                 className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
//               >
//                 #{tag}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
//             <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
//               <ArrowLeft size={20} /> Back to Archive
//             </Link>
            
//             <div className="flex items-center gap-6">
//               <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
//               <div className="flex gap-4">
//                 {['Twitter', 'Instagram', 'Link'].map(p => (
//                   <button key={p} className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer text-xs font-serif italic">
//                     {p}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowLeft, Clock, ShoppingBag, Star, Utensils, Twitter, Instagram, Link2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface FoodPostExtensions {
  cuisine?: string;
  ingredients?: string[];
  price?: string;
  rating?: number | string;
}

export default function PostDetail() {
  const { id } = useParams();
  const rawPost = blogData.posts.find(p => p.id === id);
  const post = rawPost as typeof rawPost & FoodPostExtensions;

  // Track simple status feedback states for interactive share components
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [instaStatus, setInstaStatus] = useState<'idle' | 'notified'>('idle');

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-6">
        <h1 className="text-4xl font-serif italic text-[#1A0E0C]">Post not found</h1>
        <Link to="/posts" className="elegant-button inline-block">Back to Archive</Link>
      </div>
    );
  }

  const formatPostTime = (isoString?: string): string => {
    if (!isoString) return '';
    const dateObj = new Date(isoString);
    return dateObj.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const isFoodCategory = post.category?.toLowerCase() === 'food';
  const isRecipe = isFoodCategory && post.subcategory?.toLowerCase() === 'recipe';
  const isReview = isFoodCategory && post.subcategory?.toLowerCase() === 'review';

  // 💡 Explicit click actions for sharing natively
  const handleTwitterShare = () => {
    const shareText = encodeURIComponent(`"${post.title}" via ${blogData.siteTitle}`);
    const shareUrl = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramInteraction = () => {
    setInstaStatus('notified');
    setTimeout(() => setInstaStatus('idle'), 3000);
  };

  const handleLinkCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch (err) {
      console.error('Failed to copy active address track:', err);
    }
  };

  return (
    <div className="pb-32">
      {/* Hero Header */}
      <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.coverImage} 
            className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
            referrerPolicy="no-referrer"
            alt={post.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0C] via-[#1A0E0C]/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 pb-12 relative z-10 text-center space-y-4 max-w-4xl">
          <Badge className="bg-[#A84848] text-white hover:bg-[#A84848]/90 font-serif uppercase tracking-[0.2em] px-4 py-1 text-xs">
            {post.category} {post.subcategory && `/ ${post.subcategory}`}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70 font-serif italic pt-2">
            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            {post.location && (
              <a 
                href={`http://googleusercontent.com/maps.google.com/?q=${post.location.lat},${post.location.lng}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/70 hover:text-[#A84848] hover:underline transition-colors duration-200 cursor-pointer"
              >
                <MapPin size={14} /> 
                <span>{post.location.name}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 pt-16 max-w-3xl">
        {isRecipe && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 md:p-8 bg-[#F0E8E4]/40 border border-[#A84848]/10 rounded-2xl font-serif space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-[#A84848]">
              <Utensils size={18} />
              <h3 className="text-xl font-serif italic font-bold text-[#1A0E0C]">Recipe Quick Info</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {post.cuisine && (
                <div className="sm:col-span-3 text-sm text-[#2A1A18]/70">
                  <span className="font-bold text-[#1A0E0C]">Cuisine:</span> {post.cuisine}
                </div>
              )}
              {post.ingredients && post.ingredients.length > 0 && (
                <div className="sm:col-span-3 space-y-2">
                  <span className="text-sm font-bold text-[#1A0E0C]">Ingredients Needed:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-[#2A1A18]/80 list-none pl-0">
                    {post.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A84848]/50" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {isReview && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 bg-white border border-[#A84848]/10 rounded-2xl font-serif shadow-md flex flex-wrap items-center justify-around gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#A84848]/10 text-center"
          >
            {post.cuisine && (
              <div className="flex-1 min-w-[120px] space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                  <Utensils size={12} /> Cuisine
                </div>
                <div className="text-lg font-serif italic font-semibold text-[#1A0E0C]">{post.cuisine}</div>
              </div>
            )}
            {post.price && (
              <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
                <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                  <ShoppingBag size={12} /> Price Range
                </div>
                <div className="text-lg font-serif italic font-semibold text-[#A84848]">{post.price}</div>
              </div>
            )}
            {post.rating && (
              <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
                <div className="text-xs uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                  <Star size={12} /> Rating
                </div>
                <div className="text-lg font-serif italic font-semibold text-[#1A0E0C] flex items-center justify-center gap-1">
                  {post.rating} <span className="text-xs text-[#2A1A18]/40">/ 5</span>
                </div>
              </div>
            )}
          </motion.div>
        )}

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-stone max-w-none 
            prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A0E0C] 
            prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#2A1A18]/80 
            prose-li:font-serif prose-li:text-[#2A1A18]/80
            prose-strong:text-[#1A0E0C] prose-strong:font-serif
            prose-a:text-[#A84848] hover:prose-a:underline font-serif"
        >
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </motion.article>

        <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
          {post.updatedAt && (
            <div className="flex items-center gap-2 text-xs text-[#2A1A18]/40 font-serif italic tracking-wide bg-[#F0E8E4]/30 p-3 rounded-xl max-w-max">
              <Clock size={12} className="text-[#A84848]/60" />
              <span>This entry was last updated on {formatPostTime(post.updatedAt)}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/archive/tag/${tag}`}
                className="text-sm font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
              <ArrowLeft size={20} /> Back to Archive
            </Link>
            
            {/* 💡 Operational Share Grid segment */}
            <div className="flex items-center gap-6 relative">
              <span className="text-sm font-serif italic text-[#2A1A18]/40">Share this story:</span>
              <div className="flex items-center gap-3">
                {/* Twitter / X Integration */}
                <button 
                  onClick={handleTwitterShare}
                  title="Share on Twitter"
                  className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
                >
                  <Twitter size={14} />
                </button>

                {/* Instagram Notification Integration */}
                <button 
                  onClick={handleInstagramInteraction}
                  title="Instagram Info"
                  className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
                >
                  <Instagram size={14} />
                </button>

                {/* Copy Clipboard Integration */}
                <button 
                  onClick={handleLinkCopy}
                  title="Copy link to clipboard"
                  className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
                >
                  <Link2 size={14} />
                </button>
              </div>

              {/* Dynamic Notification Overlays */}
              {copyStatus === 'copied' && (
                <div className="absolute -top-10 right-0 bg-[#1A0E0C] text-white text-xs font-serif italic px-3 py-1.5 rounded-md shadow-md animate-fade-in-up">
                  Copied to clipboard!
                </div>
              )}
              {instaStatus === 'notified' && (
                <div className="absolute -top-10 right-0 bg-[#A84848] text-white text-xs font-serif italic px-3 py-1.5 rounded-md shadow-md animate-fade-in-up">
                  Share via story using our URL!
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}