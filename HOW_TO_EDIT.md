# 🧁 How to Update Your Bakery Blog

Welcome to your new blog! Updating your content is as simple as editing a single file.

## 📝 Updating Posts

All your blog posts, photography collections, travel stories, and food reviews are managed in:
`src/data/blogData.ts`

### 1. Adding a General Post
Add a new object to the `posts` array:
```typescript
{
  id: 'unique-id',
  title: 'My New Post',
  date: '2024-04-01',
  category: 'general',
  tags: ['tag1', 'tag2'],
  excerpt: 'A short summary...',
  content: 'Your full story here (supports Markdown!)',
  coverImage: 'https://link-to-your-image.jpg',
}
```

### 2. Adding Photography
Specify the `theme` and `collection` to group your photos:
```typescript
{
  ...baseFields,
  category: 'photography',
  theme: 'Nature',
  collection: 'Spring 2024',
  images: ['url1', 'url2'],
}
```

### 3. Adding Travel (with Map!)
Include `location` coordinates to show it on the interactive map:
```typescript
{
  ...baseFields,
  category: 'travel',
  duration: '3 days',
  location: { lat: 35.6, lng: 139.7, name: 'Tokyo, Japan' }
}
```

### 4. Adding Food (Recipes or Reviews)
Set `foodType` to either `'recipe'` or `'review'`:
```typescript
{
  ...baseFields,
  category: 'food',
  foodType: 'review',
  cuisine: 'Italian',
  price: '$$',
  rating: 5,
}
```

## 🖼️ Updating Images
You can use any image URL. If you're working locally, you can place images in the `public/` folder and reference them as `/my-image.jpg`.

## 👤 Updating About Page
Edit the `about` object at the bottom of `src/data/blogData.ts` to change your name, bio, avatar, and social links.

## 🚀 Deploying to GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select **GitHub Actions** as the source.
4. Use a standard Vite deployment workflow (I can help you set this up if needed!).

---
*Happy Baking & Blogging!* 🥐✨

---
Update 0409 00:13

How to add a new post now:

Create a new file in src/data/posts/ (e.g., post4.ts).

Define your post using the structure in the handbook.

Import it in src/data/blogData.ts and add it to the list.

Push to GitHub using the commands provided in the handbook.