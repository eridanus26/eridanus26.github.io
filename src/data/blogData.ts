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

import matter from 'gray-matter';
import { BlogData, AnyPost } from '../types';

// 1. Dynamically read all markdown files as raw text strings at build time
const markdownModules = import.meta.glob('./posts/*.md', { query: '?raw', eager: true });

const parsedPosts: AnyPost[] = Object.entries(markdownModules).map(([path, fileContent]) => {
  const rawSource = (fileContent as { default: string }).default;
  
  // Parse the frontmatter metadata block and raw markdown content
  const { data, content } = matter(rawSource);
  
  return {
    id: data.id,
    title: data.title,
    date: data.date,
    category: data.category,
    subcategory: data.subcategory || '',
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    coverImage: data.coverImage,
    content: content, // This passes along the pure markdown body string down to ReactMarkdown
    location: data.location ? {
      name: data.location.name,
      lat: data.location.lat,
      lng: data.location.lng
    } : undefined,
    // Add additional conditional custom fields if needed (e.g. rating, projectType)
    ...(data.rating && { rating: data.rating }),
    ...(data.projectType && { projectType: data.projectType })
  } as AnyPost;
});

export const blogData: BlogData = {
  siteTitle: '寒夜録',
  siteDescription: '無の世界',
  siteIntro: 'We are all made of stardust.',
  timezone: 'America/Los_Angeles',
  
  // The dynamically generated array of posts, sorted by date automatically
  posts: parsedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  
  about: {
    name: '寒夜',
    bio: '無の世界。Curating moments of silence and sweetness in a loud world.',
    avatar: 'https://picsum.photos/seed/kanya/400/400',
    socials: [
      { platform: 'Instagram', url: '#' },
      { platform: 'WeChat', url: '#' },
      { platform: '食べログ', url: '#' }
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
    "🥐", "🧁", "🥨", "🍰", "🍩", "🍪", "🥞", "🧇", "🥧"
  ]
};