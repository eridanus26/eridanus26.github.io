# 寒夜録 (Kanya Roku) - Site Handbook

Welcome to your personal digital archive. This handbook provides detailed instructions on how to maintain, update, and customize your website.

## 1. Updating Content (Posts)

All site content is managed in `src/data/blogData.ts`. To add or edit a post, find the `posts` array and add a new object following these formats:

### General Post Format
```typescript
{
  id: 'unique-id',
  title: 'Post Title',
  date: 'YYYY-MM-DD',
  category: 'general',
  tags: ['tag1', 'tag2'],
  excerpt: 'Short summary for the card view.',
  content: 'Full markdown content here...',
  coverImage: 'https://url-to-image.jpg',
}
```

### Photography Post Format
```typescript
{
  id: 'unique-id',
  title: 'Collection Name',
  date: 'YYYY-MM-DD',
  category: 'photography',
  theme: 'Urban/Nature/etc',
  collection: 'Collection Name',
  tags: ['tag1'],
  excerpt: '...',
  content: '...',
  coverImage: '...',
  images: ['img1-url', 'img2-url'],
  showOnMap: true, // Optional
  location: { lat: 0, lng: 0, name: 'Location Name' } // Optional
}
```

### Travel Post Format
```typescript
{
  id: 'unique-id',
  title: 'Trip Name',
  date: 'YYYY-MM-DD',
  category: 'travel',
  duration: '5 days',
  tags: ['tag1'],
  excerpt: '...',
  content: '...',
  coverImage: '...',
  showOnMap: true,
  location: { lat: 0, lng: 0, name: 'City, Country' }
}
```

### Food Post Format (Recipe or Review)
```typescript
{
  id: 'unique-id',
  title: 'Dish Name',
  date: 'YYYY-MM-DD',
  category: 'food',
  foodType: 'recipe', // or 'review'
  cuisine: 'Japanese/French/etc',
  price: '$$', // For reviews
  rating: 4.5, // For reviews
  ingredients: ['item1', 'item2'], // For recipes
  tags: ['tag1'],
  excerpt: '...',
  content: '...',
  coverImage: '...',
  showOnMap: true, // Recommended for reviews
  location: { lat: 0, lng: 0, name: 'Restaurant Name' }
}
```

## 2. Customizing Site Identity

To change the site title, description, or intro, edit the top-level fields in `src/data/blogData.ts`:

- `siteTitle`: Appears in the navigation and welcome page.
- `siteDescription`: Appears under the title on the welcome page.
- `siteIntro`: Appears in the footer.
- `about`: Update your bio, avatar, and social links here.

## 3. Editing Styles & Artistic Expressions

### Floating Illustrations
To add or edit floating illustrations (like the emojis on the welcome page), edit `src/components/WelcomePage.tsx`. Look for the "Collage Elements" section. You can add more `<span>` elements with different emojis and CSS animations.

To make them move, you can use Tailwind's `animate-bounce` or create custom keyframes in `src/index.css`.

### Avant-Garde Styling
The "collage" look is achieved using the `.collage-card` and `.collage-border` classes in `src/index.css`. You can modify these to change the shadow offsets, border styles, or rotation angles.

To add more "personal" touches, consider adding `rotate-[xdeg]` classes to images or cards to give them a "scattered on a desk" feel.

### Quick Filters
Quick filters for Food and Posts are defined in their respective page files (`src/pages/FoodRecipes.tsx`, `src/pages/FoodReviews.tsx`, `src/pages/Posts.tsx`). 

To edit these:
1. Open the page file (e.g., `src/pages/FoodRecipes.tsx`).
2. Find the `Quick Filters` section in the JSX.
3. Update the array of strings (e.g., `['Matcha', 'Dessert', 'Baking']`).
4. The filtering logic uses `setSearch(tag)`, which automatically updates the search input and filters the list.

## 4. Advanced Map Integration

The current map uses `react-simple-maps` for a lightweight, SVG-based interactive experience. If you want to switch to a more detailed map like Google Maps:

### Option A: Google Maps (via `google-map-react`)
1. **Install the library**: `npm install google-map-react`
2. **Get an API Key**: Obtain a key from the Google Cloud Console.
3. **Replace MapFeature**: Create a new component that uses `GoogleMapReact`.
4. **Markers**: Use custom React components as markers on the map.

### Option B: Leaflet (Open Source)
1. **Install**: `npm install react-leaflet leaflet`
2. **Setup**: Leaflet is great for detailed street maps without an API key (using OpenStreetMap tiles).

### Option C: Mapbox
1. **Install**: `npm install react-map-gl mapbox-gl`
2. **Setup**: Offers highly customizable, beautiful vector maps (requires a Mapbox token).

*Note: For most personal blogs, the current SVG map is preferred as it requires no API keys and loads instantly.*

## 5. Local Development & Git Commands

### Viewing Local Updates
To see your changes on your own computer before pushing to GitHub:

1. **Open Terminal**: Open your project folder in VS Code and open the terminal (`Ctrl + ` ` or `Cmd + ` `).
2. **Install Dependencies** (Only needed once):
   ```bash
   npm install
   ```
3. **Start Dev Server**:
   ```bash
   npm run dev
   ```
4. **Open Browser**: Go to `http://localhost:3000`. The page will refresh automatically as you save files.

---

### Pushing to GitHub for the First Time
Run these commands in order to link your local folder to your new GitHub repository:

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Add All Files**:
   ```bash
   git add .
   ```
3. **Initial Commit**:
   ```bash
   git commit -m "Initial commit from AI Studio"
   ```
4. **Rename Branch**:
   ```bash
   git branch -M main
   ```
5. **Link to GitHub**: (Replace `eridanus26` with your username if different)
   ```bash
   git remote add origin https://github.com/eridanus26/eridanus26.github.io.git
   ```
6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

---

### Pushing Future Updates
Whenever you make changes in the future, run these three commands:

1. **Stage Changes**:
   ```bash
   git add .
   ```
2. **Commit Changes**: (Replace the message with what you changed)
   ```bash
   git commit -m "Updated blog posts and fixed map layout"
   ```
3. **Push Changes**:
   ```bash
   git push origin main
   ```

---

## 6. Deployment (GitHub Pages)

To make your website public via GitHub Pages using the automated workflow I've set up:

1. **Create a GitHub Repository**: Create a new repository on GitHub named `eridanus26.github.io`.
2. **Push Code**: Push all the files (including the new `.github` folder) to your repository.
3. **Enable GitHub Actions Deployment**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. **Wait for Build**: Go to the **Actions** tab in your repository. You should see a workflow named "Deploy static content to Pages" running.
5. **View Results**: Once the workflow finishes, your site will be live at `https://eridanus26.github.io/`.

### Why was it blank?
- **Build Step**: GitHub Pages needs the *compiled* files (the `dist` folder), not the raw source code. The new GitHub Action I added automatically runs `npm run build` and deploys the result for you.
- **Routing**: I switched the app to use `HashRouter`. This ensures that when you refresh the page or share a link to a specific section (like `/photography`), it doesn't result in a 404 error from GitHub. Your URLs will now look like `https://eridanus26.github.io/#/photography`.

## 7. Missing Hidden Files (.github, .gitignore, etc.)

If the ZIP download from AI Studio omits hidden files (files starting with a dot), you must create them manually in your project folder before pushing to GitHub.

### 1. Create `.github/workflows/deploy.yml`
Create a folder named `.github`, then a folder inside it named `workflows`. Create a file named `deploy.yml` inside that and paste this:

```yaml
name: Deploy static content to Pages
on:
  push:
    branches: ["main"]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 2. Create `.gitignore`
Create a file named `.gitignore` in the root folder and paste this:

```text
node_modules/
build/
dist/
coverage/
.DS_Store
*.log
.env*
!.env.example
```

### 3. Create `.env.example`
Create a file named `.env.example` in the root folder and paste this:

```text
GEMINI_API_KEY="MY_GEMINI_API_KEY"
APP_URL="MY_APP_URL"
```

---
*Created with stardust.*
