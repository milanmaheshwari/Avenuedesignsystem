# Figma Asset Migration Guide

## Problem
The `figma:asset` imports only work in Figma Make's environment. When you push to GitHub and deploy elsewhere (Vercel, Netlify, etc.), these virtual module imports will fail.

## Solution: Migrate to Real Image Files

### Step 1: Download Images from Figma Make

While in Figma Make, you need to download the actual image files. The images currently used are:

**CategoryCard Component:**
- `figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png` → Music category image
- `figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png` → Night Parties image
- `figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png` → Sports image

**ArtistCard Component:**
- `figma:asset/1bcfdda7b76166e70dd2ad2de96c66ab062cc5e1.png` → Artist image

**Other Components:**
- Check each component file for additional `figma:asset` imports

### Step 2: Create Folder Structure

```bash
# In your project root, create:
mkdir -p public/assets/images

# Or if using /src/assets (requires import statement changes):
mkdir -p src/assets/images
```

### Step 3: Save Images with Descriptive Names

Move downloaded images to `/public/assets/images/` with descriptive names:

```
/public
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
      artist-default.png
      topbar-logo.png
      (etc...)
```

### Step 4: Update Component Imports

You have **two options** for importing images:

---

## Option A: Public Folder (Recommended for Deployment)

**Pros:**
- ✅ Works everywhere (GitHub, Vercel, Netlify)
- ✅ No build configuration needed
- ✅ Images served from root path
- ✅ Easy CDN integration

**Cons:**
- ⚠️ Not optimized by Vite
- ⚠️ No hash-based cache busting

**Structure:**
```
/public
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
```

**Update CategoryCard.tsx:**

```tsx
// BEFORE (Figma Make only):
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";

// AFTER (Works everywhere):
const imgMusic = "/assets/images/category-music.png";
const imgNightParties = "/assets/images/category-night-parties.png";
const imgSports = "/assets/images/category-sports.png";

// Or as an object for better organization:
const images = {
  music: "/assets/images/category-music.png",
  nightParties: "/assets/images/category-night-parties.png",
  sports: "/assets/images/category-sports.png",
};
```

**Usage remains the same:**
```tsx
<img 
  src={imgMusic} 
  alt="Music category"
  className="..."
/>
```

---

## Option B: Src Assets Folder (Vite Optimized)

**Pros:**
- ✅ Vite optimizes images during build
- ✅ Automatic hash-based cache busting
- ✅ Better for production performance

**Cons:**
- ⚠️ Requires import statements
- ⚠️ Slightly more verbose

**Structure:**
```
/src
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
```

**Update CategoryCard.tsx:**

```tsx
// Import as modules (Vite will optimize)
import imgMusic from "@/assets/images/category-music.png";
import imgNightParties from "@/assets/images/category-night-parties.png";
import imgSports from "@/assets/images/category-sports.png";

// Or using relative paths:
import imgMusic from "../../assets/images/category-music.png";
```

---

## Complete Migration Example

### Before (Figma Make Only):

```tsx
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";

const themeConfig = {
  music: {
    image: imgMusic,
    // ...
  },
  'night-parties': {
    image: imgNightParties,
    // ...
  },
  sports: {
    image: imgSports,
    // ...
  },
};
```

### After (Option A - Public Folder):

```tsx
// No imports needed - use direct paths
const themeConfig = {
  music: {
    image: "/assets/images/category-music.png",
    // ...
  },
  'night-parties': {
    image: "/assets/images/category-night-parties.png",
    // ...
  },
  sports: {
    image: "/assets/images/category-sports.png",
    // ...
  },
};
```

### After (Option B - Src Assets):

```tsx
import imgMusic from "@/assets/images/category-music.png";
import imgNightParties from "@/assets/images/category-night-parties.png";
import imgSports from "@/assets/images/category-sports.png";

const themeConfig = {
  music: {
    image: imgMusic,
    // ...
  },
  'night-parties': {
    image: imgNightParties,
    // ...
  },
  sports: {
    image: imgSports,
    // ...
  },
};
```

---

## Files to Update

Search for `figma:asset` across your codebase:

```bash
# In your project root:
grep -r "figma:asset" src/
```

**Files that need updating:**
- `/src/app/components/CategoryCard.tsx`
- `/src/app/components/ArtistCard.tsx`
- `/src/app/components/Topbar.tsx`
- `/src/app/components/AddItem.tsx`
- `/src/app/components/AppNavBar.tsx`
- Any other components using `figma:asset`

---

## Recommended Workflow

### 1. For Local Development (Figma Make)
Keep using `figma:asset` - it works perfectly here.

### 2. For GitHub/Production Deployment
**Before pushing to GitHub:**

1. **Download all images** from the running Figma Make app
   - Right-click on images in browser → Save image as...
   - Use browser DevTools to find image URLs
   - Or export from Figma directly

2. **Create folder structure:**
   ```bash
   mkdir -p public/assets/images
   ```

3. **Copy images** with descriptive names:
   ```
   public/assets/images/
     category-music.png
     category-night-parties.png
     category-sports.png
     artist-default.png
     topbar-logo.png
   ```

4. **Update imports** in all component files (see examples above)

5. **Test locally** before pushing:
   ```bash
   npm run build
   npm run preview
   ```

6. **Push to GitHub** and deploy

---

## .gitignore Considerations

Add to `.gitignore` if using very large images:
```
# Large assets (if using external CDN)
public/assets/images/*.png
public/assets/images/*.jpg
```

But for most cases, **commit the images** to your repo so they deploy correctly.

---

## Alternative: Use External CDN

If images are very large, consider using an external CDN:

```tsx
const CDN_BASE = "https://cdn.yourproject.com/images/";

const themeConfig = {
  music: {
    image: `${CDN_BASE}category-music.png`,
    // ...
  },
};
```

Upload images to:
- Cloudinary
- AWS S3 + CloudFront
- Vercel Blob Storage
- Uploadthing
- imgix

---

## Summary

✅ **Recommended for GitHub/Production: Option A (Public Folder)**
- Simple, works everywhere
- Easy to maintain
- Good for most use cases

✅ **Recommended for Performance: Option B (Src Assets)**
- Better build optimization
- Automatic cache busting
- Slightly more complex

❌ **Don't rely on `figma:asset`** outside Figma Make environment

---

## Quick Reference

| Environment | Import Method |
|-------------|---------------|
| Figma Make only | `import img from "figma:asset/hash.png"` ✅ |
| GitHub/Vercel/etc | `const img = "/assets/images/name.png"` ✅ |
| Optimized build | `import img from "@/assets/images/name.png"` ✅ |
