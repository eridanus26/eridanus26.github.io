// // import { useState, useMemo } from 'react';
// // import { motion } from 'motion/react';
// // import { MapPin, Info, ArrowRight } from 'lucide-react';
// // import { blogData } from '../data/blogData';
// // import { AnyPost, PostCategory } from '../types';
// // import { Badge } from '@/components/ui/badge';
// // import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// // import { Link } from 'react-router-dom';

// // interface MapFeatureProps {
// //   customPosts?: AnyPost[];
// //   filterCategory?: PostCategory | 'all';
// // }

// // export default function MapFeature({ customPosts, filterCategory = 'all' }: MapFeatureProps) {
// //   const postsWithLocation = useMemo(() => {
// //     const source = customPosts || blogData.posts;
// //     return source.filter(p => {
// //       const hasLocation = p.location && p.showOnMap;
// //       const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
// //       return hasLocation && matchesCategory;
// //     });
// //   }, [customPosts, filterCategory]);

// //   // Simple coordinate mapping for a generic SVG map
// //   const getCoords = (lat: number, lng: number) => {
// //     // This is a very rough mapping for demonstration
// //     const x = (lng + 180) * (800 / 360);
// //     const y = (90 - lat) * (400 / 180);
// //     return { x, y };
// //   };

// //   const getCategoryColor = (category: PostCategory) => {
// //     switch (category) {
// //       case 'photography': return '#7A3030';
// //       case 'travel': return '#7A3850';
// //       case 'food': return '#1A0E0C';
// //       case 'academic': return '#A84848';
// //       default: return '#A84848';
// //     }
// //   };

// //   return (
// //     <div className="h-full flex flex-col space-y-8">
// //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //         <div className="space-y-1">
// //           <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Journey Explorer</h2>
// //           <p className="text-xs text-[#2A1A18]/50 font-serif">Discover stories by their geographical footprints.</p>
// //         </div>
// //         <div className="flex flex-wrap gap-2">
// //           <Badge className="bg-[#F0D0D0] text-[#7A3030] border-none font-serif italic">Photography</Badge>
// //           <Badge className="bg-[#E8D8E0] text-[#7A3850] border-none font-serif italic">Travel</Badge>
// //           <Badge className="bg-[#F0E8E4] text-[#1A0E0C] border-none font-serif italic">Food</Badge>
// //         </div>
// //       </div>

// //       <div className="relative flex-grow bg-[#F0E8E4]/50 rounded-[2rem] border border-[#A84848]/10 overflow-hidden shadow-inner">
// //         {/* Simplified World Map SVG */}
// //         <svg viewBox="0 0 800 400" className="w-full h-full opacity-10">
// //           <path
// //             fill="currentColor"
// //             d="M150,100 Q200,50 300,100 T500,150 T700,100 T750,200 T600,300 T400,350 T200,300 T100,200 Z"
// //             className="text-[#A84848]"
// //           />
// //         </svg>

// //         {/* Markers */}
// //         {postsWithLocation.map((post) => {
// //           const { x, y } = getCoords(post.location!.lat, post.location!.lng);
// //           const markerColor = getCategoryColor(post.category);
          
// //           return (
// //             <Popover key={post.id}>
// //               <PopoverTrigger
// //                 render={
// //                   <motion.button
// //                     initial={{ scale: 0 }}
// //                     animate={{ scale: 1 }}
// //                     whileHover={{ scale: 1.2 }}
// //                     style={{ 
// //                       left: `${(x / 800) * 100}%`, 
// //                       top: `${(y / 400) * 100}%`,
// //                       backgroundColor: 'white',
// //                       color: markerColor,
// //                       borderColor: `${markerColor}40` // 40 is hex for 25% opacity
// //                     }}
// //                     className="absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full shadow-xl border z-10 hover:text-white transition-all"
// //                     onMouseEnter={(e) => {
// //                       e.currentTarget.style.backgroundColor = markerColor;
// //                       e.currentTarget.style.color = 'white';
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.currentTarget.style.backgroundColor = 'white';
// //                       e.currentTarget.style.color = markerColor;
// //                     }}
// //                   >
// //                     <MapPin size={14} />
// //                   </motion.button>
// //                 }
// //               />
// //               <PopoverContent className="w-72 p-0 bg-white border-[#A84848]/10 rounded-2xl overflow-hidden shadow-2xl">
// //                 <div className="relative h-32 overflow-hidden">
// //                   <img src={post.coverImage} className="w-full h-full object-cover grayscale-[0.2]" referrerPolicy="no-referrer" />
// //                   <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest">{post.category}</Badge>
// //                 </div>
// //                 <div className="p-4 space-y-3">
// //                   <h4 className="font-serif italic text-[#1A0E0C] leading-tight">{post.title}</h4>
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-[10px] text-[#2A1A18]/50 font-serif flex items-center gap-1">
// //                       <MapPin size={10} /> {post.location?.name}
// //                     </span>
// //                     <Link to={`/post/${post.id}`} className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-1 hover:underline">
// //                       Read <ArrowRight size={10} />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </PopoverContent>
// //             </Popover>
// //           );
// //         })}

// //         <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-md p-3 rounded-xl border border-[#A84848]/10 flex items-center gap-2 text-[10px] text-[#2A1A18]/60 font-serif italic">
// //           <Info size={12} className="text-[#A84848]" />
// //           Click on markers to explore the stories.
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useMemo, useEffect, useRef } from 'react';
// import { MapPin, Info, ArrowRight } from 'lucide-react';
// import { blogData } from '../data/blogData';
// import { AnyPost, PostCategory } from '../types';
// import { Badge } from '@/components/ui/badge';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Link } from 'react-router-dom';

// // 1. Declare MapKit globally so TypeScript recognizes window.mapkit
// declare global {
//   interface Window {
//     mapkit: any;
//   }
// }

// interface MapFeatureProps {
//   customPosts?: AnyPost[];
//   filterCategory?: PostCategory | 'all';
//   // It's best practice to pass your MapKit JWT token via props or environment variables
//   mapkitToken?: string; 
// }

// export default function MapFeature({ customPosts, filterCategory = 'all', mapkitToken }: MapFeatureProps) {
//   const mapContainerRef = useRef<HTMLDivElement>(null);
//   const mapInstanceRef = useRef<any>(null);
//   const [activePost, setActivePost] = useState<AnyPost | null>(null);
//   const [popoverAnchor, setPopoverAnchor] = useState<{ x: number; y: number } | null>(null);

//   // Filter posts with valid locations
//   const postsWithLocation = useMemo(() => {
//     const source = customPosts || blogData.posts;
//     return source.filter(p => {
//       const hasLocation = p.location && p.showOnMap;
//       const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
//       return hasLocation && matchesCategory;
//     });
//   }, [customPosts, filterCategory]);

//   const getCategoryColor = (category: PostCategory) => {
//     switch (category) {
//       case 'photography': return '#7A3030';
//       case 'travel': return '#7A3850';
//       case 'food': return '#1A0E0C';
//       case 'academic': return '#A84848';
//       default: return '#A84848';
//     }
//   };

//   // 2. Dynamically script-load MapKit JS from Apple CDN
//   useEffect(() => {
//     if (!window.mapkit) {
//       const script = document.createElement('script');
//       script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
//       script.crossOrigin = 'anonymous';
//       script.async = true;
//       script.onload = () => initMap();
//       document.head.appendChild(script);
//     } else {
//       initMap();
//     }

//     function initMap() {
//       const mapkit = window.mapkit;
//       if (!mapkit || mapInstanceRef.current) return;

//       // Initialize authorization
//       mapkit.init({
//         authorizationCallback: (done: (token: string) => void) => {
//           // Replace with your real MapKit token or prop
//           done(mapkitToken || process.env.REACT_APP_MAPKIT_TOKEN || ''); 
//         }
//       });

//       // Create Map Instance
//       const map = new mapkit.Map(mapContainerRef.current, {
//         showsMapTypeControl: false,
//         showsZoomControl: true,
//         // Centers broadly over a global view by default
//         region: new mapkit.CoordinateRegion(
//           new mapkit.Coordinate(30, 0),
//           new mapkit.CoordinateSpan(80, 120)
//         )
//       });

//       mapInstanceRef.current = map;
//       renderMarkers();
//     }

//     return () => {
//       if (mapInstanceRef.current) {
//         mapInstanceRef.current.destroy();
//         mapInstanceRef.current = null;
//       }
//     };
//   }, []);

//   // 3. Sync Markers when posts or map data changes
//   useEffect(() => {
//     renderMarkers();
//   }, [postsWithLocation]);

//   const renderMarkers = () => {
//     const mapkit = window.mapkit;
//     const map = mapInstanceRef.current;
//     if (!mapkit || !map) return;

//     // Clear existing annotations
//     map.removeAnnotations(map.annotations);

//     // Create new markers
//     const annotations = postsWithLocation.map((post) => {
//       const coord = new mapkit.Coordinate(post.location!.lat, post.location!.lng);
      
//       const annotation = new mapkit.MarkerAnnotation(coord, {
//         title: post.title,
//         color: getCategoryColor(post.category),
//         glyphText: '📍', // Customize pin inner graphics or text
//       });

//       // Tie post data to annotation object so we can read it on selection
//       annotation.data = post; 
//       return annotation;
//     });

//     // Handle Marker Selection
//     map.addEventListener('select', (event: any) => {
//       const selectedAnnotation = event.annotation;
//       if (selectedAnnotation && selectedAnnotation.data) {
//         const post = selectedAnnotation.data;
        
//         // Convert geographical coordinate to absolute viewport pixel dimensions
//         const pixelPoint = map.convertCoordinateToPointOnPage(selectedAnnotation.coordinate);
//         const containerRect = mapContainerRef.current?.getBoundingClientRect();

//         if (containerRect) {
//           setActivePost(post);
//           setPopoverAnchor({
//             x: pixelPoint.x - containerRect.left,
//             y: pixelPoint.y - containerRect.top
//           });
//         }
//       }
//     });

//     map.addEventListener('deselect', () => {
//       setActivePost(null);
//       setPopoverAnchor(null);
//     });

//     map.showItems(annotations);
//   };

//   return (
//     <div className="h-full flex flex-col space-y-8">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="space-y-1">
//           <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Journey Explorer</h2>
//           <p className="text-xs text-[#2A1A18]/50 font-serif">Discover stories by their geographical footprints.</p>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           <Badge className="bg-[#F0D0D0] text-[#7A3030] border-none font-serif italic">Photography</Badge>
//           <Badge className="bg-[#E8D8E0] text-[#7A3850] border-none font-serif italic">Travel</Badge>
//           <Badge className="bg-[#F0E8E4] text-[#1A0E0C] border-none font-serif italic">Food</Badge>
//         </div>
//       </div>

//       {/* Map Wrapping Parent Box */}
//       <div className="relative flex-grow bg-[#F0E8E4]/50 rounded-[2rem] border border-[#A84848]/10 overflow-hidden shadow-inner min-h-[400px]">
        
//         {/* Apple Maps Container */}
//         <div ref={mapContainerRef} className="w-full h-full absolute inset-0" />

//         {/* Custom shadcn Overlay Popover anchored on active pin selection */}
//         {activePost && popoverAnchor && (
//           <div 
//             className="absolute z-50 pointer-events-none"
//             style={{ left: `${popoverAnchor.x}px`, top: `${popoverAnchor.y}px` }}
//           >
//             <div className="relative -translate-x-1/2 -translate-y-[calc(100%+20px)] pointer-events-auto w-72 bg-white border border-[#A84848]/10 rounded-2xl overflow-hidden shadow-2xl">
//               <div className="relative h-32 overflow-hidden">
//                 <img src={activePost.coverImage} className="w-full h-full object-cover grayscale-[0.2]" referrerPolicy="no-referrer" />
//                 <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest">{activePost.category}</Badge>
//               </div>
//               <div className="p-4 space-y-3">
//                 <h4 className="font-serif italic text-[#1A0E0C] leading-tight">{activePost.title}</h4>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] text-[#2A1A18]/50 font-serif flex items-center gap-1">
//                     <MapPin size={10} /> {activePost.location?.name}
//                   </span>
//                   <Link to={`/post/${activePost.id}`} className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-1 hover:underline">
//                     Read <ArrowRight size={10} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-md p-3 rounded-xl border border-[#A84848]/10 flex items-center gap-2 text-[10px] text-[#2A1A18]/60 font-serif italic z-10 pointer-events-none">
//           <Info size={12} className="text-[#A84848]" />
//           Click on markers to explore the stories.
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo } from 'react';
import { MapPin, Info, ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import { AnyPost, PostCategory } from '../types';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Isolated subpath imports to ensure no build/syntax errors
import { APIProvider } from '@vis.gl/react-google-maps';
import { Map } from '@vis.gl/react-google-maps';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { InfoWindow } from '@vis.gl/react-google-maps';
import { useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

interface MapFeatureProps {
  customPosts?: AnyPost[];
  filterCategory?: PostCategory | 'all';
}

export default function MapFeature({ customPosts, filterCategory = 'all' }: MapFeatureProps) {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const postsWithLocation = useMemo(() => {
    const source = customPosts || blogData.posts;
    return source.filter(p => {
      const hasLocation = p.location && p.showOnMap;
      const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
      return hasLocation && matchesCategory;
    });
  }, [customPosts, filterCategory]);

  const getCategoryColor = (category: PostCategory) => {
    switch (category) {
      case 'photography': return '#7A3030';
      case 'travel': return '#7A3850';
      case 'food': return '#1A0E0C';
      case 'academic': return '#A84848';
      default: return '#A84848';
    }
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
      <div className="h-full flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Journey Explorer</h2>
            <p className="text-xs text-[#2A1A18]/50 font-serif">Discover stories by their geographical footprints.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#F0D0D0] text-[#7A3030] border-none font-serif italic">Photography</Badge>
            <Badge className="bg-[#E8D8E0] text-[#7A3850] border-none font-serif italic">Travel</Badge>
            <Badge className="bg-[#F0E8E4] text-[#1A0E0C] border-none font-serif italic">Food</Badge>
          </div>
        </div>

        {/* Map Container Wrapper */}
        <div className="relative flex-grow bg-[#F0E8E4]/50 rounded-[2rem] border border-[#A84848]/10 overflow-hidden shadow-inner min-h-[450px]">
          
          <Map
            defaultCenter={{ lat: 25, lng: 0 }}
            defaultZoom={2}
            gestureHandling={'cooperative'}
            disableDefaultUI={true}
            zoomControl={true}
            // CRITICAL: Change "DEMO_MAP_ID" to your actual Google Cloud Map ID string
            mapId="cd045a4e6fa89eed9b02217d" 
          >
            {postsWithLocation.map((post) => {
              const markerColor = getCategoryColor(post.category);
              const position = { lat: post.location!.lat, lng: post.location!.lng };
              
              return (
                <MarkerWithPopover
                  key={post.id}
                  post={post}
                  position={position}
                  markerColor={markerColor}
                  isOpen={activePostId === post.id}
                  onToggleOpen={(open) => setActivePostId(open ? post.id : null)}
                />
              );
            })}
          </Map>

          <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-md p-3 rounded-xl border border-[#A84848]/10 flex items-center gap-2 text-[10px] text-[#2A1A18]/60 font-serif italic z-10 pointer-events-none">
            <Info size={12} className="text-[#A84848]" />
            Click on markers to explore the stories.
          </div>
        </div>
      </div>
    </APIProvider>
  );
}

interface MarkerWithPopoverProps {
  post: AnyPost;
  position: { lat: number; lng: number };
  markerColor: string;
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
}

// function MarkerWithPopover({ post, position, markerColor, isOpen, onToggleOpen }: MarkerWithPopoverProps) {
//   const [markerRef, marker] = useAdvancedMarkerRef();
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <AdvancedMarker
//         ref={markerRef}
//         position={position}
//         title={post.title}
//         onClick={() => onToggleOpen(!isOpen)}
//       >
//         {/* Added explicit sizing rules block directly to inline styles to force rendering */}
//         <button
//           style={{
//             backgroundColor: isHovered || isOpen ? markerColor : 'white',
//             color: isHovered || isOpen ? 'white' : markerColor,
//             borderColor: `${markerColor}40`,
//             width: '32px',
//             height: '32px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transform: 'translate(-50%, -50%)',
//           }}
//           className="rounded-full shadow-xl border transition-all duration-200 pointer-events-auto"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <MapPin size={14} />
//         </button>
//       </AdvancedMarker>

//       {isOpen && (
//         <InfoWindow
//           anchor={marker}
//           onCloseClick={() => onToggleOpen(false)}
//         >
//           <div className="w-64 bg-white rounded-xl overflow-hidden shadow-xl -m-2">
//             <div className="relative h-28 overflow-hidden">
//               <img 
//                 src={post.coverImage} 
//                 className="w-full h-full object-cover grayscale-[0.2]" 
//                 referrerPolicy="no-referrer" 
//                 alt={post.title}
//               />
//               <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest">
//                 {post.category}
//               </Badge>
//             </div>
//             <div className="p-3 space-y-2">
//               <h4 className="font-serif italic text-[#1A0E0C] leading-tight text-sm font-bold">
//                 {post.title}
//               </h4>
//               <div className="flex items-center justify-between">
//                 <span className="text-[10px] text-[#2A1A18]/50 font-serif flex items-center gap-1">
//                   <MapPin size={10} /> {post.location?.name}
//                 </span>
//                 <Link 
//                   to={`/post/${post.id}`} 
//                   className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-1 hover:underline font-semibold"
//                 >
//                   Read <ArrowRight size={10} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </InfoWindow>
//       )}
//     </>
//   );
// }

// Find this function at the bottom of your MapFeature.tsx file
// function MarkerWithPopover({ post, position, markerColor, isOpen, onToggleOpen }: MarkerWithPopoverProps) {
//   const [markerRef, marker] = useAdvancedMarkerRef();
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <AdvancedMarker
//         ref={markerRef}
//         position={position}
//         title={post.title}
//         onClick={() => onToggleOpen(!isOpen)}
//       >
//         <button
//           style={{
//             backgroundColor: isHovered || isOpen ? markerColor : 'white',
//             color: isHovered || isOpen ? 'white' : markerColor,
//             borderColor: `${markerColor}40`,
//             width: '32px',
//             height: '32px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transform: 'translate(-50%, -50%)',
//           }}
//           className="rounded-full shadow-xl border transition-all duration-200 pointer-events-auto"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <MapPin size={14} />
//         </button>
//       </AdvancedMarker>

//       {isOpen && (
//         <InfoWindow
//           anchor={marker}
//           onCloseClick={() => onToggleOpen(false)}
//         >
//           <div className="w-64 bg-white rounded-xl overflow-hidden shadow-xl -m-2">
//             <div className="relative h-28 overflow-hidden">
//               <img 
//                 src={post.coverImage} 
//                 className="w-full h-full object-cover grayscale-[0.2]" 
//                 referrerPolicy="no-referrer" 
//                 alt={post.title}
//               />
//               <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest">
//                 {post.category}
//               </Badge>
//             </div>
//             <div className="p-3 space-y-2">
//               <h4 className="font-serif italic text-[#1A0E0C] leading-tight text-sm font-bold">
//                 {post.title}
//               </h4>
//               <div className="flex items-center justify-between">
                
//                 {/* 🔴 REPLACE YOUR OLD SPAN WITH THIS ANCHOR TAG 🔴 */}
//                 <a 
//                   href={`https://www.google.com/maps/search/?api=1&query=${post.location!.lat},${post.location!.lng}`}
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-[10px] text-[#2A1A18]/50 hover:text-[#A84848] font-serif flex items-center gap-1 hover:underline transition-colors cursor-pointer"
//                 >
//                   <MapPin size={10} /> {post.location?.name}
//                 </a>

//                 <Link 
//                   to={`/post/${post.id}`} 
//                   className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-1 hover:underline font-semibold"
//                 >
//                   Read <ArrowRight size={10} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </InfoWindow>
//       )}
//     </>
//   );
// }

function MarkerWithPopover({ post, position, markerColor, isOpen, onToggleOpen }: MarkerWithPopoverProps) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        title={post.title}
        onClick={() => onToggleOpen(!isOpen)}
      >
        <button
          style={{
            backgroundColor: isHovered || isOpen ? markerColor : 'white',
            color: isHovered || isOpen ? 'white' : markerColor,
            borderColor: `${markerColor}40`,
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translate(-50%, -50%)',
          }}
          className="rounded-full shadow-xl border transition-all duration-200 pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MapPin size={14} />
        </button>
      </AdvancedMarker>

      {isOpen && (
        <InfoWindow
          anchor={marker}
          onCloseClick={() => onToggleOpen(false)}
          // 💡 FIX 1: Disables Google's rigid default header container spacing
          headerDisabled={true} 
        >
          {/* 💡 FIX 2: Set an exact maximum width and clean up text container bounds without negative margins */}
          <div className="w-60 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
            
            {/* Image Header wrapper container */}
            <div className="relative h-24 w-full overflow-hidden">
              <img 
                src={post.coverImage} 
                className="w-full h-full object-cover grayscale-[0.2]" 
                referrerPolicy="no-referrer" 
                alt={post.title}
              />
              <Badge className="absolute top-2 left-2 bg-white/90 text-[#A84848] text-[9px] font-serif uppercase tracking-widest pointer-events-none">
                {post.category}
              </Badge>
            </div>

            {/* Typography and interactive metadata link rows */}
            <div className="p-3 flex flex-col justify-between space-y-2">
              {/* 💡 FIX 3: Bound title text parameters using line-clamp utility to avoid running out of room */}
              <h4 className="font-serif italic text-[#1A0E0C] leading-tight text-xs font-bold line-clamp-2">
                {post.title}
              </h4>
              
              <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${post.location!.lat},${post.location!.lng}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#2A1A18]/50 hover:text-[#A84848] font-serif flex items-center gap-1 hover:underline transition-colors cursor-pointer truncate max-w-[130px]"
                >
                  <MapPin size={10} className="shrink-0" /> 
                  <span className="truncate">{post.location?.name}</span>
                </a>

                <Link 
                  to={`/post/${post.id}`} 
                  className="text-[10px] font-serif tracking-widest uppercase text-[#A84848] flex items-center gap-0.5 hover:underline font-semibold shrink-0"
                >
                  Read <ArrowRight size={10} />
                </Link>
              </div>
            </div>

          </div>
        </InfoWindow>
      )}
    </>
  );
}