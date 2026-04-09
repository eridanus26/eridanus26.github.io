import { BlogData } from '../types';

export const blogData: BlogData = {
  siteTitle: '寒夜録',
  siteDescription: '無の世界',
  siteIntro: 'We are all made of stardust.',
  posts: [
    {
      id: '1',
      title: 'Morning in the Bakery',
      date: '2024-03-20',
      category: 'general',
      tags: ['lifestyle', 'bakery'],
      excerpt: 'The smell of fresh croissants in the morning is unbeatable...',
      content: 'The smell of fresh croissants in the morning is unbeatable. It fills the air with a buttery warmth that makes waking up early feel like a privilege rather than a chore.\n\nToday, I visited a small bakery tucked away in a quiet street. The baker was already busy at work, his hands covered in flour as he shaped the dough with practiced ease. I ordered a plain croissant and a café au lait, and sat by the window to watch the world go by.',
      coverImage: 'https://picsum.photos/seed/bakery1/800/600',
    },
    {
      id: '2',
      title: 'Tokyo Street Photography',
      date: '2024-03-15',
      category: 'photography',
      theme: 'Urban',
      collection: 'Japan 2024',
      tags: ['tokyo', 'street'],
      excerpt: 'Capturing the neon lights and quiet alleys of Shinjuku.',
      content: 'Capturing the neon lights and quiet alleys of Shinjuku was a dream come true. The city never sleeps, and every corner tells a story.\n\nI spent hours wandering through the narrow streets, waiting for the perfect moment when the light hit the pavement just right. The contrast between the modern skyscrapers and the traditional izakayas is what makes Tokyo so unique.',
      coverImage: 'https://picsum.photos/seed/tokyo/800/600',
      images: [
        'https://picsum.photos/seed/tokyo1/800/600',
        'https://picsum.photos/seed/tokyo2/800/600',
      ],
      showOnMap: true,
      location: { lat: 35.6895, lng: 139.6917, name: 'Shinjuku, Tokyo' }
    },
    {
      id: '3',
      title: 'Swiss Alps Adventure',
      date: '2024-02-10',
      category: 'travel',
      tags: ['hiking', 'mountains'],
      excerpt: 'A 5-day journey through the heart of Switzerland.',
      content: 'A 5-day journey through the heart of Switzerland was exactly what I needed to clear my head. The air was crisp, and the views were breathtaking.\n\nWe hiked through alpine meadows, stayed in cozy mountain huts, and even took a dip in a glacier-fed lake. The silence of the mountains is something I will never forget.',
      coverImage: 'https://picsum.photos/seed/swiss/800/600',
      duration: '5 days',
      showOnMap: true,
      location: { lat: 46.8182, lng: 8.2275, name: 'Interlaken, Switzerland' }
    },
    {
      id: '4',
      title: 'The Perfect Matcha Mille Crepe',
      date: '2024-03-01',
      category: 'food',
      foodType: 'recipe',
      cuisine: 'Japanese',
      tags: ['matcha', 'dessert', 'recipe'],
      ingredients: ['Matcha powder', 'Flour', 'Eggs', 'Milk', 'Heavy cream', 'Sugar'],
      excerpt: 'Step-by-step guide to making the lightest crepe cake.',
      content: 'Making a matcha mille crepe is a labor of love, but the result is so worth it. The key is to make the crepes as thin as possible.\n\nStart by whisking together the eggs, sugar, and matcha powder. Slowly add the milk and melted butter, then sift in the flour. Let the batter rest for at least an hour before cooking the crepes. Once they are all cooked and cooled, layer them with a light matcha-infused whipped cream.',
      coverImage: 'https://picsum.photos/seed/matcha/800/600',
    },
    {
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
    },
    {
      id: '6',
      title: 'Introduction to Computer Vision',
      date: '2024-03-25',
      category: 'academic',
      projectType: 'course-note',
      institution: 'Global Tech University',
      tags: ['AI', 'Computer Vision', 'Notes'],
      excerpt: 'Comprehensive notes on image processing and feature detection.',
      content: 'These are my personal notes from the Introduction to Computer Vision course. We covered everything from basic image filters to advanced deep learning models for object detection.\n\nKey topics included: Sobel filters, Canny edge detection, SIFT features, and the architecture of Convolutional Neural Networks (CNNs).',
      coverImage: 'https://picsum.photos/seed/cv/800/600',
    },
    {
      id: '7',
      title: 'Sustainable Architecture Project',
      date: '2024-02-28',
      category: 'academic',
      projectType: 'project',
      institution: 'Design Academy',
      tags: ['Architecture', 'Sustainability', 'Design'],
      excerpt: 'A conceptual design for a self-sustaining urban community.',
      content: 'This project explores the possibilities of sustainable architecture in a dense urban environment. The design features vertical gardens, rainwater harvesting systems, and solar panels integrated into the building facade.\n\nThe goal was to create a community that is not only environmentally friendly but also promotes social interaction and well-being.',
      coverImage: 'https://picsum.photos/seed/arch/800/600',
    }
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
