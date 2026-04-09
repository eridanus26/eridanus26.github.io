import { TravelPost } from '../../types';

export const post3: TravelPost = {
  id: '3',
  title: 'Swiss Alps Adventure',
  date: '2024-02-10',
  category: 'travel',
  tags: ['hiking', 'mountains'],
  excerpt: 'A 5-day journey through the heart of Switzerland.',
  content: `
A 5-day journey through the heart of Switzerland was exactly what I needed to clear my head. The air was crisp, and the views were breathtaking.

We hiked through alpine meadows, stayed in cozy mountain huts, and even took a dip in a glacier-fed lake. The silence of the mountains is something I will never forget.
  `,
  coverImage: 'https://picsum.photos/seed/swiss/800/600',
  duration: '5 days',
  showOnMap: true,
  location: { lat: 46.8182, lng: 8.2275, name: 'Interlaken, Switzerland' }
};
