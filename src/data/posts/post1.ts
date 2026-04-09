import { AnyPost } from '../../types';

export const post1: AnyPost = {
  id: '1',
  title: 'Morning in the Bakery',
  date: '2024-03-20',
  category: 'general',
  tags: ['lifestyle', 'bakery'],
  excerpt: 'The smell of fresh croissants in the morning is unbeatable...',
  content: `
The smell of fresh croissants in the morning is unbeatable. It fills the air with a buttery warmth that makes waking up early feel like a privilege rather than a chore.

Today, I visited a small bakery tucked away in a quiet street. 
The baker was already busy at work, his hands covered in flour as he shaped the dough with practiced ease. 
I ordered a plain croissant and a café au lait, and sat by the window to watch the world go by.

# My Artistic Story

You can write naturally across multiple lines.

<div style="display: flex; gap: 20px; align-items: center; margin: 40px 0;">
  <img src="/images/my-photo.jpg" style="width: 200px; border-radius: 20px; transform: rotate(-2deg);" />
  <p style="font-style: italic; opacity: 0.8;">
    This text is wrapped next to a rotated image using a simple HTML div!
  </p>
</div>

### Embedding Plugins
You can paste embed codes from Spotify, Google Maps, or YouTube directly:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/..." width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `,
  coverImage: 'https://picsum.photos/seed/bakery1/800/600',
};
