// import { BlogData } from '../types';
// import { post1 } from './posts/post1';
// import { post2 } from './posts/post2';
// import { post3 } from './posts/post3';
// import { post4 } from './posts/post4';
// import { post5 } from './posts/post5';
// import { post6 } from './posts/post6';
// import { post7 } from './posts/post7';

// export const blogData: BlogData = {
//   siteTitle: '寒夜録',
//   siteDescription: '無の世界',
//   siteIntro: 'We are all made of stardust.',
//   timezone: 'America/Los_Angeles',
//   posts: [
//     post1,
//     post2,
//     post3,
//     post4,
//     post5,
//     post6,
//     post7
//   ],
//   about: {
//     name: '寒夜',
//     bio: '無の世界。Curating moments of silence and sweetness in a loud world.',
//     avatar: 'https://picsum.photos/seed/kanya/400/400',
//     socials: [
//       { platform: 'Instagram', url: '#' },
//       { platform: 'WeChat', url: '#' },
//       { platform: '食べログ', url: '#' }
//     ]
//   },
//   gratitudeLibrary: [
//     "I am grateful for the warm sunlight on my face this morning.",
//     "Today, I find inspiration in the quiet moments of reflection.",
//     "The beauty of nature never fails to amaze me.",
//     "I am thankful for the kind words of a stranger.",
//     "Every day is a new opportunity to learn and grow.",
//     "The smell of fresh rain on dry earth is a simple joy.",
//     "I am inspired by the creativity of those around me."
//   ],
//   foodIllustrations: [
//     "🥐", "🧁", "🥨", "🍰", "🍩", "🍪", "🥞", "🧇", "🥧"
//   ]
// };

import fm from 'front-matter';
import { BlogData, AnyPost } from '../types';

// Dynamically pull all markdown files as raw text strings at build time
const markdownModules = import.meta.glob('./posts/*.md', { query: '?raw', eager: true });

const parsedPosts: AnyPost[] = Object.entries(markdownModules).map(([path, fileContent]) => {
  const rawSource = (fileContent as { default: string }).default;
  
  // Use front-matter to cleanly parse attributes and the main body text
  const { attributes, body } = fm<any>(rawSource);
  
  // Construct the base object matching your core post fields
  const basePost = {
    id: attributes.id,
    title: attributes.title,
    date: attributes.date,
    category: attributes.category,
    subcategory: attributes.subcategory || '',
    tags: attributes.tags || [],
    excerpt: attributes.excerpt || '',
    coverImage: attributes.coverImage,
    content: body, // The main markdown content text block
  };

  // Safely pass through any optional or specific category fields 
  // (e.g., location objects, images arrays, ratings, etc.)
  return {
    ...basePost,
    ...attributes, // This spreads all variant-specific fields seamlessly
  } as AnyPost;
});

export const blogData: BlogData = {
  siteTitle: '寒夜録',
  siteDescription: '無の世界',
  siteIntro: 'We are all made of stardust.',
  timezone: 'America/New_York',
  
  // Dynamically populated posts array sorted by date
  posts: parsedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  
  about: {
    name: 'Eri',
    bio: '無の世界',
    avatar: 'https://picsum.photos/seed/kanya/400/400',
    socials: [
      { platform: 'Instagram', url: 'https://www.instagram.com/eri24_camera/' },
      { platform: 'WeChat', url: '#' },
      { platform: '食べログ', url: 'https://tabelog.com/rvwr/030070185/' }
    ]
  },
  gratitudeLibrary: [
    "I am grateful for the warm sunlight on my face this morning.",
    "Today, I find inspiration in the quiet moments of reflection.",
    "The beauty of nature never fails to amaze me.",
    "I am thankful for the kind words of a stranger.",
    "Every day is a new opportunity to learn and grow.",
    "The smell of fresh rain on dry earth is a simple joy.",
    "I am inspired by the creativity of those around me."
  ],
  foodIllustrations: [
    "🍙", "🍎", "🥗", "🍣", "🍛", "🍡", "🍢", "🍱", "🍜", "🍝"
  ]
};