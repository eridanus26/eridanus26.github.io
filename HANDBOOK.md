# 寒夜録 (Kanya Roku) - Site Handbook

Welcome to your personal digital archive. This handbook provides detailed instructions on how to maintain, update, and customize your website.

## 1. Managing Posts (New Workflow)

To keep your project organized, each blog post is stored in its own file within the `src/data/posts/` directory.

### How to add a new post:

1.  **Create a new file**: In `src/data/posts/`, create a new file named `postN.ts` (e.g., `post4.ts`).
2.  **Define the post**: Copy the structure from an existing post and update the fields.
3.  **Import in blogData**: Open `src/data/blogData.ts`, import your new post at the top, and add it to the `posts` array.

### Versatile Content Styling (Markdown + HTML)

You can now use multi-line text and even HTML directly inside your post content. This allows for advanced styling like wrapping text around images or embedding external plugins.

**Example of a versatile post content:**
```typescript
export const myPost = {
  // ... metadata ...
  content: `
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
  `
};
```

## 2. Image Storage

**Where to store your images:**
Store all your personal images in the `public/images/` folder.

-   **Referencing images**: In your post content, you can refer to them using a simple path: `/images/your-image.jpg`.
-   **Why `public/`?**: Files in the `public` folder are served directly at the root of your website, making them easy to link without complex imports.

## 3. Site Configuration & Timezone

You can customize global site settings in `src/data/blogData.ts`:

-   **Timezone**: Change the `timezone` field (e.g., `'Asia/Tokyo'`, `'Europe/Paris'`, `'America/New_York'`). This automatically updates the "Today is..." date on the homepage.
-   **Site Stats**: The "Days Running" starts from **April 8, 2026** (configurable in `src/components/Footer.tsx`).

## 4. Map & Locations

To link a post to the Map view:
1.  Add a `location` object: `{ lat: 35.6895, lng: 139.6917, name: 'Tokyo' }`.
2.  Set `showOnMap: true`.

**Map Formatting**:
The map is now constrained to a maximum height of 600px and is contained within a "collage-card" to prevent it from bleeding into the background. It is fully responsive and will scale down on mobile devices.

## 5. Local Development & Git Commands

### Viewing Local Updates
To see your changes on your own computer before pushing to GitHub:

1. **Open Terminal**: Open your project folder in VS Code and open the terminal (`Ctrl + ` ` or `Cmd + ` `).
2. **Install Dependencies** (Only needed once):
   ```bash
   npm install --legacy-peer-deps
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
   git push -u origin main --force
   ```

*Note: Use `--force` only for the first push to ensure your local code completely replaces whatever is currently on GitHub.*

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

### Troubleshooting Git Errors

#### Error: `fatal: unknown index entry format`
This means your Git index (the staging area) has become corrupted. To fix it:

1. **Delete the corrupted index**:
   ```bash
   rm -f .git/index
   ```
2. **Try adding files again**:
   ```bash
   git add .
   ```

#### Error: `fatal: not a git repository` or other persistent issues
If Git is still acting up, it's often easiest to start the Git state from scratch:

1. **Delete the entire .git folder**:
   ```bash
   rm -rf .git
   ```
2. **Re-initialize and push**:
   ```bash
   git init
   git add .
   git commit -m "Fresh start"
   git branch -M main
   git remote add origin https://github.com/eridanus26/eridanus26.github.io.git
   git push -u origin main --force
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
        run: npm install --legacy-peer-deps
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
