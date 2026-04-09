export type PostCategory = 'general' | 'photography' | 'travel' | 'food' | 'academic';

export interface BasePost {
  id: string;
  title: string;
  date: string;
  category: PostCategory;
  tags: string[];
  content: string;
  excerpt: string;
  coverImage: string;
  showOnMap?: boolean;
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
}

export interface PhotographyPost extends BasePost {
  category: 'photography';
  theme: string;
  collection: string;
  images: string[];
}

export interface TravelPost extends BasePost {
  category: 'travel';
  duration: string;
}

export interface FoodPost extends BasePost {
  category: 'food';
  foodType: 'recipe' | 'review';
  cuisine?: string;
  price?: '$' | '$$' | '$$$' | '$$$$';
  rating?: number;
  ingredients?: string[];
}

export interface AcademicPost extends BasePost {
  category: 'academic';
  projectType: 'course-note' | 'project' | 'research';
  institution?: string;
}

export type AnyPost = BasePost | PhotographyPost | TravelPost | FoodPost | AcademicPost;

export interface BlogData {
  posts: AnyPost[];
  siteTitle: string;
  siteDescription: string;
  siteIntro: string;
  timezone: string;
  about: {
    name: string;
    bio: string;
    avatar: string;
    socials: {
      platform: string;
      url: string;
    }[];
  };
  gratitudeLibrary: string[];
  foodIllustrations: string[];
}
