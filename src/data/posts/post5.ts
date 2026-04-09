import { FoodPost } from '../../types';

export const post5: FoodPost = {
  id: '5',
  title: 'Best Croissants in Paris',
  date: '2024-01-20',
  category: 'food',
  foodType: 'review',
  cuisine: 'French',
  price: '$$',
  rating: 4.8,
  tags: ['paris', 'croissant', 'review'],
  excerpt: 'My top 5 picks for authentic French pastries.',
  content: 'Paris is a city of bakeries, but not all croissants are created equal. After much "research," I have narrowed down my top 5 favorites.\n\nFrom the classic buttery layers at Du Pain et des Idées to the modern twists at Laurent Duchêne, each of these bakeries offers something special. If you are in Paris, make sure to try at least one of these!',
  coverImage: 'https://picsum.photos/seed/paris/800/600',
  showOnMap: true,
  location: { lat: 48.8566, lng: 2.3522, name: 'Paris, France' }
};
