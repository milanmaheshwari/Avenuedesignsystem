# Example: CategoryCard Migration

This document shows exactly how to migrate the CategoryCard component from `figma:asset` to production-ready image paths.

---

## Step 1: Download Images

From your running Figma Make app:

1. Navigate to the CategoryCard documentation page
2. Right-click on each category card image:
   - Music card → Save as `category-music.png`
   - Night Parties card → Save as `category-night-parties.png`
   - Sports card → Save as `category-sports.png`

---

## Step 2: Create Folder Structure

```bash
# In your project root
mkdir -p public/assets/images
```

Then move the downloaded images:
```
/public
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
```

---

## Step 3: Update CategoryCard.tsx

### BEFORE (Current Code - Figma Make Only):

```tsx
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";
import svgPathsMusicLarge from "../../imports/svg-30bgdzpzro";
import svgPathsMusicSmall from "../../imports/svg-21ulgngdfx";
import svgPathsNightLarge from "../../imports/svg-544wcgiqcd";
import svgPathsNightSmall from "../../imports/svg-5eiavb9sio";
import svgPathsSportsLarge from "../../imports/svg-yv13g2mk64";
import svgPathsSportsSmall from "../../imports/svg-crglv5kpn7";

export type CategoryCardTheme = 'music' | 'night-parties' | 'sports';
export type CategoryCardSize = 'large' | 'small';

interface CategoryCardProps {
  theme?: CategoryCardTheme;
  size?: CategoryCardSize;
}

// Theme configuration with gradients, colors, and content
const themeConfig = {
  music: {
    title: 'Music',
    descriptionLarge: 'Explore concerts, live shows and festivals near you',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: imgMusic,  // ← Uses figma:asset import
    gradient: "url('data:image/svg+xml...",
    // ... rest of config
  },
  'night-parties': {
    title: 'Night Parties',
    descriptionLarge: 'Groove and dance the night away with top DJs and parties nearby',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: imgNightParties,  // ← Uses figma:asset import
    gradient: "url('data:image/svg+xml...",
    // ... rest of config
  },
  sports: {
    title: 'Sports',
    descriptionLarge: 'Find matches and tournaments near you',
    descriptionSmall: 'Find matches and tournaments near you',
    image: imgSports,  // ← Uses figma:asset import
    gradient: "url('data:image/svg+xml...",
    // ... rest of config
  },
};
```

### AFTER (Production-Ready - Works Everywhere):

```tsx
// Remove figma:asset imports
// import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
// import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
// import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";

// Keep SVG imports - these are regular file imports and work everywhere
import svgPathsMusicLarge from "../../imports/svg-30bgdzpzro";
import svgPathsMusicSmall from "../../imports/svg-21ulgngdfx";
import svgPathsNightLarge from "../../imports/svg-544wcgiqcd";
import svgPathsNightSmall from "../../imports/svg-5eiavb9sio";
import svgPathsSportsLarge from "../../imports/svg-yv13g2mk64";
import svgPathsSportsSmall from "../../imports/svg-crglv5kpn7";

export type CategoryCardTheme = 'music' | 'night-parties' | 'sports';
export type CategoryCardSize = 'large' | 'small';

interface CategoryCardProps {
  theme?: CategoryCardTheme;
  size?: CategoryCardSize;
}

// Theme configuration with gradients, colors, and content
const themeConfig = {
  music: {
    title: 'Music',
    descriptionLarge: 'Explore concerts, live shows and festivals near you',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: "/assets/images/category-music.png",  // ← Now uses public path
    gradient: "url('data:image/svg+xml...",
    textColor: '#fdf4ff',
    shadowColor: 'rgba(192,38,211,0.05)',
  },
  'night-parties': {
    title: 'Night Parties',
    descriptionLarge: 'Groove and dance the night away with top DJs and parties nearby',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: "/assets/images/category-night-parties.png",  // ← Now uses public path
    gradient: "url('data:image/svg+xml...",
    textColor: '#faf5ff',
    shadowColor: 'rgba(147,51,234,0.05)',
  },
  sports: {
    title: 'Sports',
    descriptionLarge: 'Find matches and tournaments near you',
    descriptionSmall: 'Find matches and tournaments near you',
    image: "/assets/images/category-sports.png",  // ← Now uses public path
    gradient: "url('data:image/svg+xml...",
    textColor: '#fff7ed',
    shadowColor: 'rgba(234,88,12,0.05)',
  },
};

// Rest of the component remains exactly the same
// ...
```

---

## Step 4: Test Locally

```bash
# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

Open the preview URL (usually `http://localhost:4173`) and verify:
- ✅ All category cards display images correctly
- ✅ Music card shows the music illustration
- ✅ Night Parties card shows the party illustration  
- ✅ Sports card shows the sports illustration

---

## Alternative Approach: Vite Import (More Optimized)

If you want Vite to optimize images during build:

### Create src/assets folder:
```
/src
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
```

### Update imports:
```tsx
// Import as modules - Vite will optimize and add cache-busting hashes
import imgMusic from "@/assets/images/category-music.png";
import imgNightParties from "@/assets/images/category-night-parties.png";
import imgSports from "@/assets/images/category-sports.png";
import svgPathsMusicLarge from "../../imports/svg-30bgdzpzro";
import svgPathsMusicSmall from "../../imports/svg-21ulgngdfx";
import svgPathsNightLarge from "../../imports/svg-544wcgiqcd";
import svgPathsNightSmall from "../../imports/svg-5eiavb9sio";
import svgPathsSportsLarge from "../../imports/svg-yv13g2mk64";
import svgPathsSportsSmall from "../../imports/svg-crglv5kpn7";

// ... rest of component

const themeConfig = {
  music: {
    title: 'Music',
    image: imgMusic,  // ← Now uses Vite-optimized import
    // ...
  },
  'night-parties': {
    title: 'Night Parties',
    image: imgNightParties,  // ← Now uses Vite-optimized import
    // ...
  },
  sports: {
    title: 'Sports',
    image: imgSports,  // ← Now uses Vite-optimized import
    // ...
  },
};
```

**Benefits of Vite imports:**
- ✅ Automatic image optimization
- ✅ Cache-busting hashes (e.g., `category-music.a1b2c3d4.png`)
- ✅ Better long-term caching
- ✅ Type safety with TypeScript

---

## Comparison: Public vs. Src Assets

| Feature | Public Folder | Src Assets (Vite) |
|---------|---------------|-------------------|
| **Path in code** | `"/assets/images/name.png"` | `import img from "@/assets/images/name.png"` |
| **Build optimization** | ❌ No | ✅ Yes |
| **Cache busting** | ❌ Manual | ✅ Automatic hash |
| **Type safety** | ❌ String only | ✅ Import validation |
| **Simplicity** | ✅ Very simple | ⚠️ Slightly more complex |
| **Best for** | Static sites, small projects | Production apps, better perf |

---

## Complete File Changes Summary

### Files to Create:
```
/public/assets/images/category-music.png
/public/assets/images/category-night-parties.png
/public/assets/images/category-sports.png
```

### Files to Modify:
```
/src/app/components/CategoryCard.tsx
```

**Change count:** 
- Remove 3 import lines
- Add 3 string constants (or keep as imports if using src/assets)

---

## Git Workflow

```bash
# 1. Create folder and add images
mkdir -p public/assets/images
# Copy images to public/assets/images/

# 2. Update component code
# Edit CategoryCard.tsx as shown above

# 3. Test locally
npm run build
npm run preview

# 4. Verify everything works
# Open preview URL and check all components

# 5. Commit
git add public/assets/images/
git add src/app/components/CategoryCard.tsx
git commit -m "Migrate CategoryCard from figma:asset to public assets"

# 6. Push to GitHub
git push origin main

# 7. Deploy (Vercel, Netlify, etc.)
# Images will now work in production!
```

---

## Troubleshooting

### Images don't load in production

**Check 1: Verify paths**
```tsx
// ✅ Correct (starts with /)
image: "/assets/images/category-music.png"

// ❌ Wrong (missing /)
image: "assets/images/category-music.png"
```

**Check 2: Verify folder structure**
```
✅ /public/assets/images/category-music.png
❌ /public/images/category-music.png (wrong path)
❌ /assets/images/category-music.png (not in public)
```

**Check 3: Verify files are committed**
```bash
git ls-files public/assets/images/
# Should show all three images
```

**Check 4: Case sensitivity**
```
✅ category-music.png (in code and filename match)
❌ category-music.png in code but Category-Music.png file
```

### Images look blurry on retina displays

Export at 2x or 3x resolution from Figma:
```tsx
// Use srcset for responsive images
<img 
  src="/assets/images/category-music.png"
  srcSet="/assets/images/category-music@2x.png 2x, /assets/images/category-music@3x.png 3x"
  alt="Music category"
/>
```

### Images are too large

Optimize before committing:
- Use TinyPNG: https://tinypng.com/
- Use Squoosh: https://squoosh.app/
- Convert to WebP format for better compression

---

## Success Checklist

- [ ] Downloaded all 3 category images
- [ ] Created `/public/assets/images/` folder
- [ ] Saved images with correct names
- [ ] Updated `CategoryCard.tsx` imports
- [ ] Tested with `npm run build && npm run preview`
- [ ] All images load correctly in preview
- [ ] Committed images to git
- [ ] Pushed to GitHub
- [ ] Deployed to production
- [ ] Verified images load on live site

**Estimated time:** 15-20 minutes
