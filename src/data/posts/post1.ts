import { AnyPost } from '../../types';

export const post1: AnyPost = {
  id: '1',
  title: 'Morning in the Bakery',
  date: '2024-03-20',
  category: 'general',
  subcategory: 'Bakery Visits / Local / Morning',
  tags: ['lifestyle', 'bakery'],
  excerpt: 'The smell of fresh croissants in the morning is unbeatable...',
  content: `
The smell of fresh croissants in the morning is unbeatable. It fills the air with a buttery warmth that makes waking up early feel like a privilege rather than a chore.

Today, I visited a small bakery tucked away in a quiet street. The baker was already busy at work, his hands covered in flour as he shaped the dough with practiced ease. I ordered a plain croissant and a café au lait, and sat by the window to watch the world go by.
  `,
  coverImage: 'https://picsum.photos/seed/bakery1/800/600',
};
