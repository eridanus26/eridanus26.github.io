import { BlogData } from '../types';
import { post1 } from './posts/post1';
import { post2 } from './posts/post2';
import { post3 } from './posts/post3';
import { post4 } from './posts/post4';
import { post5 } from './posts/post5';
import { post6 } from './posts/post6';
import { post7 } from './posts/post7';

export const blogData: BlogData = {
  siteTitle: '寒夜録',
  siteDescription: '無の世界',
  siteIntro: 'We are all made of stardust.',
  timezone: 'America/Los_Angeles',
  posts: [
    post1,
    post2,
    post3,
    post4,
    post5,
    post6,
    post7
  ],
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
