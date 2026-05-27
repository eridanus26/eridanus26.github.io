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
import { Calendar, MapPin, ArrowLeft, Clock, ShoppingBag, Star, Utensils, Link2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm'; // 💡 Add this import
import remarkHeadingId from 'remark-heading-id'; // 💡 Handles {#custom-id}
import remarkSupersub from 'remark-supersub';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface FoodPostExtensions {
  cuisine?: string;
  ingredients?: string[];
  price?: number | string;
  rating?: number | string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function PostDetail() {
  const { id } = useParams();
  const rawPost = blogData.posts.find(p => p.id === id);
  const post = rawPost as typeof rawPost & FoodPostExtensions;

  // Track the copy state status for the clipboard feedback overlay
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const [toc, setToc] = useState<TocItem[]>([]);

  const allPosts = blogData.posts;
  const currentIndex = allPosts.findIndex(p => p.id === id);
  

  // 2. Identify neighbors
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

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

  // Clipboard API Handler to copy the current page link
  const handleLinkCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch (err) {
      console.error('Failed to copy active address track:', err);
    }
  };

useEffect(() => {
  // 1. Instantly reset the table of contents state while changing posts
  setToc([]);

  // 2. Force the browser window to snap smoothly back to the top of the new post
  window.scrollTo({ top: 0, behavior: 'instant' });

  const timer = setTimeout(() => {
    const contentArea = document.querySelector('.markdown-body');
    if (!contentArea) return;

    const headingElements = contentArea.querySelectorAll('h1, h2, h3');
    
    const parsedToc: TocItem[] = Array.from(headingElements).map((heading, index) => {
      const cleanText = heading.textContent || '';
      const generatedId = cleanText
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const finalId = generatedId || `section-${index}`;
      heading.setAttribute('id', finalId);
      
      return {
        id: finalId,
        text: cleanText,
        level: parseInt(heading.tagName.replace('H', ''), 10),
      };
    });

    setToc(parsedToc);
  }, 200); // 200ms layout delay handles markdown rendering flawlessly

    return () => clearTimeout(timer);
  }, [post.content, id]); // 💡 Added 'id' here to force a reload when the Next/Last buttons are clicked!
  // useEffect(() => {
  //   // Clear any existing TOC data while switching posts
  //   setToc([]);

  //   const timer = setTimeout(() => {
  //     const contentArea = document.querySelector('.markdown-body');
  //     if (!contentArea) return;

  //     const headingElements = contentArea.querySelectorAll('h1, h2, h3');
      
  //     const parsedToc: TocItem[] = Array.from(headingElements).map((heading, index) => {
  //       // Get the exact, compiled clean text from the browser element
  //       const cleanText = heading.textContent || '';
        
  //       // Generate a consistent slug that works flawlessly for English, Chinese, numbers, and spaces
  //       const generatedId = cleanText
  //         .toLowerCase()
  //         .trim()
  //         .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-') // Replaces spaces/special chars with hyphens
  //         .replace(/^-+|-+$/g, ''); // Trims trailing or leading hyphens

  //       const finalId = generatedId || `section-${index}`;

  //       // Force-inject this id directly into the actual HTML element on the page
  //       heading.setAttribute('id', finalId);
        
  //       return {
  //         id: finalId,
  //         text: cleanText,
  //         level: parseInt(heading.tagName.replace('H', ''), 10),
  //       };
  //     });

  //     setToc(parsedToc);
  //   }, 200); // 200ms ensures the markdown layout completely settles on screen

  //   return () => clearTimeout(timer);
  // }, [post.content]); // Listens directly to content string changes

  // useEffect(() => {
  //   // 1. Locate the container holding your markdown content
  //   const contentArea = document.querySelector('.markdown-body');
  //   if (!contentArea) return;

  //   // 2. Query all h1, h2, and h3 elements inside it automatically
  //   const headingElements = contentArea.querySelectorAll('h1, h2, h3');
    
  //   const parsedToc: TocItem[] = Array.from(headingElements).map((heading, index) => {
  //     // 3. Generates a fallback slug ID if your markdown parser hasn't added one already
  //     if (!heading.id) {
  //       heading.id = `auto-toc-${index}`;
  //     }
      
  //     return {
  //       id: heading.id,
  //       text: heading.textContent || '',
  //       // Extracts the heading level (e.g., "H2" string becomes number 2)
  //       level: parseInt(heading.tagName.replace('H', ''), 10),
  //     };
  //   });

  //   setToc(parsedToc);
  // }, [post]); // Re-runs layout scan automatically if the post switches
  
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
          {/* <Badge className="bg-[#A84848] text-white hover:bg-[#A84848]/90 font-serif uppercase tracking-[0.2em] px-4 py-1 text-sm">
            {post.category} {post.subcategory && `/ ${post.subcategory}`}
          </Badge> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-lg text-white/70 font-serif italic pt-2">
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

      {/* 💡 Multi-column Grid Container */}
      <div className="container mx-auto px-4 pt-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Blog Post Column (9 Columns Wide) */}
          <main className="lg:col-span-9 w-full min-w-0">
            {/* Recipe Header Block */}
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
                    <div className="sm:col-span-3 text-base text-[#2A1A18]/70">
                      <span className="font-bold text-[#1A0E0C]">Cuisine:</span> {post.cuisine}
                    </div>
                  )}
                  {post.ingredients && post.ingredients.length > 0 && (
                    <div className="sm:col-span-3 space-y-2">
                      <span className="text-base font-bold text-[#1A0E0C]">Ingredients Needed:</span>
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

            {/* Review Header Block */}
            {isReview && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 p-6 bg-white border border-[#A84848]/10 rounded-2xl font-serif shadow-md flex flex-wrap items-center justify-around gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#A84848]/10 text-center"
              >
                {post.cuisine && (
                  <div className="flex-1 min-w-[120px] space-y-1">
                    <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                      <Utensils size={14} /> Cuisine
                    </div>
                    <div className="text-xl font-serif italic font-semibold text-[#1A0E0C]">{post.cuisine}</div>
                  </div>
                )}
                {post.price && (
                  <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
                    <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                      <ShoppingBag size={14} /> Price
                    </div>
                    <div className="text-xl font-serif italic font-semibold text-[#A84848]">{post.price}</div>
                  </div>
                )}
                {post.rating && (
                  <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
                    <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
                      <Star size={14} /> Rating
                    </div>
                    <div className="text-xl font-serif italic font-semibold text-[#1A0E0C] flex items-center justify-center gap-1">
                      {post.rating} <span className="text-xs text-[#2A1A18]/40">/ 5</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Markdown Article Wrapper */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="markdown-body prose prose-stone max-w-none 
                prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A0E0C] 
                prose-p:font-serif prose-p:leading-relaxed prose-p:text-[#2A1A18]/80 
                prose-li:font-serif prose-li:text-[#2A1A18]/80
                prose-strong:text-[#1A0E0C] prose-strong:font-serif
                prose-a:text-[#A84848] hover:prose-a:underline font-serif"
            >
              {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown> */}
              <ReactMarkdown 
                remarkPlugins={[remarkGfm, remarkHeadingId, remarkSupersub, remarkMath]} 
                rehypePlugins={[rehypeRaw, rehypeKatex]}  
                components={{
                  // Keep ONLY your working code block formatter here
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /node-repl|[\n\r]/.test(String(children));
                    const isInline = inline !== undefined ? inline : !match;
                    return isInline ? (
                      <code className="bg-[#F0E8E4] text-[#7A3030] px-1.5 py-0.5 rounded-md font-mono text-sm border border-[#A84848]/10" {...props}>
                        {children}
                      </code>
                    ) : (
                      <pre className="bg-[#F0E8E4] border border-[#A84848]/15 p-5 rounded-xl overflow-x-auto my-6 custom-scrollbar text-sm font-mono text-[#7A3030] w-full block">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    );
                  }
                }}
              >
                {/* Pass the pristine markdown content directly */}
                {post.content}
              </ReactMarkdown>
            </motion.article>

            {/* Post Footer Information */}
            {/* <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
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
                    className="text-base font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
                  >
                    # {tag}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <Link to="/posts" className="flex items-center gap-2 text-xl font-serif italic text-[#A84848] hover:underline">
                  <ArrowLeft size={20} /> Back to Archive
                </Link>
                
                <div className="flex items-center gap-4 relative">
                  <span className="text-base font-serif italic text-[#2A1A18]/40">Copy Link:</span>
                  <button 
                    onClick={handleLinkCopy}
                    title="Copy link to clipboard"
                    className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
                  >
                    <Link2 size={16} />
                  </button>

                  {copyStatus === 'copied' && (
                    <div className="absolute -top-10 right-0 bg-[#1A0E0C] text-white text-xs font-serif italic px-3 py-1.5 rounded-md shadow-md">
                      Copied to clipboard!
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            {/* Post Footer Information */}
            <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
              
              {/* 📁 NEW: Category Hierarchy Folder Button */}
              <div className="space-y-2">
                {/* <span className="text-xs font-serif tracking-widest uppercase text-[#2A1A18]/40 block">Posted Under Layout Folder:</span> */}
                <div className="inline-flex items-center bg-[#F0E8E4]/60 border border-[#A84848]/10 px-4 py-2 rounded-xl text-base font-serif font-medium text-[#1A0E0C]">
                  <Link 
                    to={`/archive/category/${post.category?.toLowerCase()}`}
                    className="hover:text-[#A84848] transition-colors"
                  >
                    {post.category}
                  </Link>
                  {post.subcategory && (
                    <>
                      <span className="mx-2 text-[#A84848]/30 font-sans text-xs">/</span>
                      <Link 
                        to={`/archive/category/${post.subcategory?.toLowerCase()}`}
                        className="hover:text-[#A84848] transition-colors italic"
                      >
                        {post.subcategory}
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Core Tags Row */}
              <div className="flex flex-wrap gap-4">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/archive/tag/${tag}`}
                    className="text-base font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
                  >
                    # {tag}
                  </Link>
                ))}
              </div>

              {/* 🔀 NEW: Chronological Navigation Toggle Pagination Interface */}
              {/* Replace the navigation block inside your Post Footer with this updated version */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-b border-[#A84848]/5 py-6">
                {/* Last / Previous Post Button */}
                {prevPost ? (
                  <Link 
                    to={`/post/${prevPost.id}`}
                    onClick={() => window.scrollTo(0, 0)} // 💡 Forces layout frame reset on mobile views
                    className="group flex flex-col p-4 rounded-xl border border-[#A84848]/10 bg-white hover:bg-[#F0E8E4]/20 transition-all text-left"
                  >
                    <span className="text-base text-[#A84848] font-serif uppercase tracking-wider mb-1">← Next Entry</span>
                    <span className="text-base font-serif font-medium text-[#1A0E0C] group-hover:underline line-clamp-1">{prevPost.title}</span>
                  </Link>
                ) : (
                  <div className="flex flex-col p-4 rounded-xl border border-dashed border-[#2A1A18]/10 bg-gray-50 opacity-40 cursor-not-allowed text-left">
                    <span className="text-base text-[#2A1A18]/50 font-serif uppercase tracking-wider mb-1">← Next Entry</span>
                    <span className="text-base font-serif italic text-[#2A1A18]/40">Newest post reached</span>
                  </div>
                )}

                {/* Next Post Button */}
                {nextPost ? (
                  <Link 
                    to={`/post/${nextPost.id}`}
                    onClick={() => window.scrollTo(0, 0)} // 💡 Forces layout frame reset on mobile views
                    className="group flex flex-col p-4 rounded-xl border border-[#A84848]/10 bg-white hover:bg-[#F0E8E4]/20 transition-all text-right"
                  >
                    <span className="text-base text-[#A84848] font-serif uppercase tracking-wider mb-1">Last Entry →</span>
                    <span className="text-base font-serif font-medium text-[#1A0E0C] group-hover:underline line-clamp-1">{nextPost.title}</span>
                  </Link>
                ) : (
                  <div className="flex flex-col p-4 rounded-xl border border-dashed border-[#2A1A18]/10 bg-gray-50 opacity-40 cursor-not-allowed text-right">
                    <span className="text-base text-[#2A1A18]/50 font-serif uppercase tracking-wider mb-1">Last Entry →</span>
                    <span className="text-base font-serif italic text-[#2A1A18]/40">Oldest post reached</span>
                  </div>
                )}
              </div>

              {/* Action Footer Utilities Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
                <Link to="/posts" className="flex items-center gap-2 text-lg font-serif italic text-[#A84848] hover:underline">
                  <ArrowLeft size={16} /> Back to Archive
                </Link>
                
                <div className="flex items-center gap-4 relative">
                  <span className="text-base font-serif italic text-[#2A1A18]/40">Copy Link:</span>
                  <button 
                    onClick={handleLinkCopy}
                    title="Copy link to clipboard"
                    className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
                  >
                    <Link2 size={16} />
                  </button>

                  {copyStatus === 'copied' && (
                    <div className="absolute -top-10 right-0 bg-[#1A0E0C] text-white text-xs font-serif italic px-3 py-1.5 rounded-md shadow-md">
                      Copied to clipboard!
                    </div>
                  )}
                </div>
              </div>

            </div>
          </main>

          {/* 💡 Automated Sidebar Column (3 Columns Wide) */}
          {/* 💡 Updated Sidebar Column with Perfect Header Offsets */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 p-6 bg-[#F0E8E4]/30 border border-[#A84848]/5 rounded-2xl max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-serif tracking-widest uppercase text-[#A84848] mb-6 font-semibold">
              目录 / Contents
            </h3>
            
            {toc.length > 0 ? (
              <nav className="space-y-3">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const targetElement = document.getElementById(item.id);
                      if (targetElement) {
                        // 1. Calculate where the title sits relative to the viewport
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        // 2. Add the current window scroll offset
                        const offsetPosition = elementPosition + window.pageYOffset - 100; // 💡 Change 100 to match your header's height

                        // 3. Smoothly slide exactly to the top of the title text block
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="w-full text-left block text-lg font-serif italic text-[#2A1A18]/60 hover:text-[#A84848] transition-colors duration-200 truncate cursor-pointer"
                    style={{
                      paddingLeft: `${(item.level - 1) * 16}px`
                    }}
                  >
                    {item.level === 3 && <span className="text-[#A84848]/40 mr-1.5">•</span>}
                    {item.text}
                  </button>
                ))}
              </nav>
            ) : (
              <p className="text-sm font-serif italic text-[#2A1A18]/30">暂无目录索引</p>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="pb-32">
  //     {/* Hero Header */}
  //     <header className="relative h-[60vh] flex items-end justify-center overflow-hidden">
  //       <div className="absolute inset-0 z-0">
  //         <img 
  //           src={post.coverImage} 
  //           className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
  //           referrerPolicy="no-referrer"
  //           alt={post.title}
  //         />
  //         <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0C] via-[#1A0E0C]/40 to-transparent" />
  //       </div>
        
  //       <div className="container mx-auto px-4 pb-12 relative z-10 text-center space-y-4 max-w-4xl">
  //         <Badge className="bg-[#A84848] text-white hover:bg-[#A84848]/90 font-serif uppercase tracking-[0.2em] px-4 py-1 text-sm">
  //           {post.category} {post.subcategory && `/ ${post.subcategory}`}
  //         </Badge>
  //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">
  //           {post.title}
  //         </h1>
          
  //         <div className="flex flex-wrap justify-center items-center gap-6 text-lg text-white/70 font-serif italic pt-2">
  //           <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
  //           {post.location && (
  //             <a 
  //               href={`http://googleusercontent.com/maps.google.com/?q=${post.location.lat},${post.location.lng}`}
  //               target="_blank" 
  //               rel="noopener noreferrer"
  //               className="flex items-center gap-1 text-white/70 hover:text-[#A84848] hover:underline transition-colors duration-200 cursor-pointer"
  //             >
  //               <MapPin size={14} /> 
  //               <span>{post.location.name}</span>
  //             </a>
  //           )}
  //         </div>
  //       </div>
  //     </header>

  //     {/* Main Content Layout */}
  //     <main className="container mx-auto px-4 pt-16 max-w-3xl">
  //       {/* Recipe Header Block */}
  //       {isRecipe && (
  //         <motion.div 
  //           initial={{ opacity: 0, y: 15 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           className="mb-12 p-6 md:p-8 bg-[#F0E8E4]/40 border border-[#A84848]/10 rounded-2xl font-serif space-y-4 shadow-sm"
  //         >
  //           <div className="flex items-center gap-2 text-[#A84848]">
  //             <Utensils size={18} />
  //             <h3 className="text-xl font-serif italic font-bold text-[#1A0E0C]">Recipe Quick Info</h3>
  //           </div>
  //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
  //             {post.cuisine && (
  //               <div className="sm:col-span-3 text-sm text-[#2A1A18]/70">
  //                 <span className="font-bold text-[#1A0E0C]">Cuisine:</span> {post.cuisine}
  //               </div>
  //             )}
  //             {post.ingredients && post.ingredients.length > 0 && (
  //               <div className="sm:col-span-3 space-y-2">
  //                 <span className="text-sm font-bold text-[#1A0E0C]">Ingredients Needed:</span>
  //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-[#2A1A18]/80 list-none pl-0">
  //                   {post.ingredients.map((ing, i) => (
  //                     <li key={i} className="flex items-center gap-2">
  //                       <span className="w-1.5 h-1.5 rounded-full bg-[#A84848]/50" />
  //                       {ing}
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             )}
  //           </div>
  //         </motion.div>
  //       )}

  //       {/* Review Header Block */}
  //       {isReview && (
  //         <motion.div 
  //           initial={{ opacity: 0, y: 15 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           className="mb-12 p-6 bg-white border border-[#A84848]/10 rounded-2xl font-serif shadow-md flex flex-wrap items-center justify-around gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#A84848]/10 text-center"
  //         >
  //           {post.cuisine && (
  //             <div className="flex-1 min-w-[120px] space-y-1">
  //               <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
  //                 <Utensils size={14} /> Cuisine
  //               </div>
  //               <div className="text-xl font-serif italic font-semibold text-[#1A0E0C]">{post.cuisine}</div>
  //             </div>
  //           )}
  //           {post.price && (
  //             <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
  //               <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
  //                 <ShoppingBag size={14} /> Price
  //               </div>
  //               <div className="text-xl font-serif italic font-semibold text-[#A84848]">{post.price}</div>
  //             </div>
  //           )}
  //           {post.rating && (
  //             <div className="flex-1 min-w-[120px] space-y-1 pt-4 sm:pt-0 sm:pl-4">
  //               <div className="text-sm uppercase tracking-widest text-[#2A1A18]/40 flex items-center justify-center gap-1">
  //                 <Star size={14} /> Rating
  //               </div>
  //               <div className="text-xl font-serif italic font-semibold text-[#1A0E0C] flex items-center justify-center gap-1">
  //                 {post.rating} <span className="text-xs text-[#2A1A18]/40">/ 5</span>
  //               </div>
  //             </div>
  //           )}
  //         </motion.div>
  //       )}

  //       <motion.article 
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.6 }}
  //         className="prose prose-stone max-w-none 
  //           prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A0E0C] 
  //           prose-p:font-serif prose-p:text-xl prose-p:leading-relaxed prose-p:text-[#2A1A18]/80 
  //           prose-li:font-serif prose-li:text-[#2A1A18]/80
  //           prose-strong:text-[#1A0E0C] prose-strong:font-serif
  //           prose-a:text-[#A84848] hover:prose-a:underline font-serif"
  //       >
  //         <ReactMarkdown rehypePlugins={[rehypeRaw]}>
  //           {post.content}
  //         </ReactMarkdown>
  //       </motion.article>

  //       <div className="mt-16 pt-8 border-t border-[#A84848]/10 space-y-12">
  //         {post.updatedAt && (
  //           <div className="flex items-center gap-2 text-xs text-[#2A1A18]/40 font-serif italic tracking-wide bg-[#F0E8E4]/30 p-3 rounded-xl max-w-max">
  //             <Clock size={12} className="text-[#A84848]/60" />
  //             <span>This entry was last updated on {formatPostTime(post.updatedAt)}</span>
  //           </div>
  //         )}

  //         <div className="flex flex-wrap gap-4">
  //           {post.tags.map(tag => (
  //             <Link 
  //               key={tag} 
  //               to={`/archive/tag/${tag}`}
  //               className="text-base font-serif italic text-[#A84848] bg-[#F0D0D0] px-6 py-2 rounded-full hover:bg-[#A84848] hover:text-white transition-all"
  //             >
  //               #{tag}
  //             </Link>
  //           ))}
  //         </div>

  //         <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
  //           <Link to="/posts" className="flex items-center gap-2 text-xl font-serif italic text-[#A84848] hover:underline">
  //             <ArrowLeft size={20} /> Back to Archive
  //           </Link>
            
  //           {/* 💡 Only the Clipboard Copy Link interface button remains here */}
  //           <div className="flex items-center gap-4 relative">
  //             <span className="text-base font-serif italic text-[#2A1A18]/40">Copy Link:</span>
  //             <button 
  //               onClick={handleLinkCopy}
  //               title="Copy link to clipboard"
  //               className="w-10 h-10 rounded-full border border-[#A84848]/10 flex items-center justify-center text-[#A84848] hover:bg-[#A84848] hover:text-white transition-all cursor-pointer bg-white"
  //             >
  //               <Link2 size={16} />
  //             </button>

  //             {/* Toast Feedback Notification */}
  //             {copyStatus === 'copied' && (
  //               <div className="absolute -top-10 right-0 bg-[#1A0E0C] text-white text-xs font-serif italic px-3 py-1.5 rounded-md shadow-md">
  //                 Copied to clipboard!
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
}