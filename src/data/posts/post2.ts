import { PhotographyPost } from '../../types';

export const post2: PhotographyPost = {
  id: '2',
  title: 'Tokyo Street Photography',
  date: '2024-03-15',
  category: 'photography',
  theme: 'Urban',
  collection: 'Japan 2024',
  tags: ['tokyo', 'street'],
  excerpt: 'Capturing the neon lights and quiet alleys of Shinjuku.',
  content: `
Capturing the neon lights and quiet alleys of Shinjuku was a dream come true. The city never sleeps, and every corner tells a story.

I spent hours wandering through the narrow streets, waiting for the perfect moment when the light hit the pavement just right. The contrast between the modern skyscrapers and the traditional izakayas is what makes Tokyo so unique.
  `,
  coverImage: 'https://picsum.photos/seed/tokyo/800/600',
  images: [
    'https://picsum.photos/seed/tokyo1/800/600',
    'https://picsum.photos/seed/tokyo2/800/600',
  ],
  showOnMap: true,
  location: { lat: 35.6895, lng: 139.6917, name: 'Shinjuku, Tokyo' }
};
