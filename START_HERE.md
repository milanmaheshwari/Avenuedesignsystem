# 🚀 START HERE: Figma Assets for GitHub

## The Issue

You asked: **"How to solve this if I'm pushing the code to a github repo. The images won't be visible then"**

You're absolutely right! The `figma:asset` imports in your code will **break** when you push to GitHub.

---

## The Quick Answer

Replace this:
```tsx
import img from "figma:asset/abc123.png"  // ❌ Breaks outside Figma Make
```

With this:
```tsx
const img = "/assets/images/my-image.png"  // ✅ Works everywhere
```

---

## What You Need to Do (30 minutes)

### 1. Download 6 Images (10 min)
While your Figma Make app is running:
- Right-click on each category card → "Save image as..."
- Save with these names:
  - `category-music.png`
  - `category-night-parties.png`
  - `category-sports.png`
  - `artist-music.png`
  - `artist-comedy.png`
  - `add-item-placeholder.png`

### 2. Create Folder (1 min)
```bash
mkdir -p public/assets/images
```

### 3. Move Images (1 min)
Copy all 6 images to `/public/assets/images/`

### 4. Update Code (10 min)
**File: `/src/app/components/CategoryCard.tsx`**

Remove:
```tsx
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";
```

Update themeConfig:
```tsx
const themeConfig = {
  music: {
    image: "/assets/images/category-music.png",  // ← Change this
    // ... rest stays same
  },
  'night-parties': {
    image: "/assets/images/category-night-parties.png",  // ← Change this
    // ... rest stays same
  },
  sports: {
    image: "/assets/images/category-sports.png",  // ← Change this
    // ... rest stays same
  },
};
```

**Do the same for:**
- `/src/app/components/ArtistCard.tsx` (2 images)
- `/src/app/components/AddItem.tsx` (1 image)

### 5. Test (5 min)
```bash
npm run build
npm run preview
```
Open the preview URL and verify all images load.

### 6. Deploy (3 min)
```bash
git add .
git commit -m "Migrate to production-ready assets"
git push origin main
```

---

## Complete Documentation

I've created comprehensive guides for you:

### 📖 Documentation Files Created

| File | Purpose | Time |
|------|---------|------|
| **QUICK_REFERENCE.md** ⚡ | Fast lookup & troubleshooting | 5 min |
| **DEPLOYMENT_CHECKLIST.md** ✅ | Step-by-step deployment | Follow along |
| **MIGRATION_GUIDE.md** 📘 | Complete migration guide | 15 min |
| **EXAMPLE_MIGRATION.md** 💻 | Before/after code examples | 10 min |
| **ASSET_INVENTORY.md** 📋 | List of all images to download | 5 min |
| **README_ASSETS.md** 📚 | How the system works | 10 min |
| **VISUAL_GUIDE.md** 🎨 | Visual diagrams | Quick scan |
| **ASSETS_INDEX.md** 🗂️ | Index of all docs | Navigation |

---

## Recommended Path

### If you want the fastest solution:
1. Read: **QUICK_REFERENCE.md** (5 min)
2. Follow: **DEPLOYMENT_CHECKLIST.md** (30 min)
3. Done! ✅

### If you want to understand everything:
1. Read: **README_ASSETS.md** (10 min)
2. Read: **MIGRATION_GUIDE.md** (15 min)
3. Follow: **DEPLOYMENT_CHECKLIST.md** (30 min)
4. Done! ✅

### If you just want to fix it now:
1. Download 6 images (10 min)
2. Create `/public/assets/images/` folder
3. Update 3 component files (see above)
4. Test: `npm run build && npm run preview`
5. Push to GitHub
6. Done! ✅

---

## Key Points

✅ **What needs migration:**
- 6 raster images (PNG files)
- 3 component files (CategoryCard, ArtistCard, AddItem)

❌ **What DOESN'T need migration:**
- SVG files in `/src/imports/` - these work everywhere!
- Your CSS and design tokens - unaffected
- Other component code - stays the same

⏱️ **Time needed:**
- Fast path: 15 minutes
- Thorough path: 60 minutes
- One-time task: never repeat

🎯 **Result:**
- ✅ Works on GitHub
- ✅ Works on Vercel/Netlify
- ✅ Works everywhere

---

## Why This Happens

**figma:asset is a virtual module**
- It's not a real file path
- It's a special scheme that Figma Make resolves
- Works perfectly in Figma Make
- Breaks everywhere else (GitHub, Vercel, etc.)

**The solution: Real files in /public**
- Actual PNG files in your repo
- Standard paths that work everywhere
- No special processing needed

---

## Common Questions

**Q: Can I just copy the images somewhere else?**  
A: No, you must use the `/public` folder or import from `/src/assets`

**Q: Do I need to change SVG imports?**  
A: No! SVG imports in `/src/imports/` already work everywhere

**Q: What if I have more images in the future?**  
A: Use `/public/assets/images/` from the start instead of `figma:asset`

**Q: Will this break my design system?**  
A: No, CSS variables and design tokens are unaffected

**Q: Can I still develop in Figma Make?**  
A: Yes! After migration, everything still works in Figma Make

---

## Next Steps

### Option 1: Quick Migration (15-30 min)
👉 Open **QUICK_REFERENCE.md** and follow the steps

### Option 2: Thorough Understanding (60 min)  
👉 Start with **README_ASSETS.md** then **MIGRATION_GUIDE.md**

### Option 3: Systematic Deployment (40 min)
👉 Follow **DEPLOYMENT_CHECKLIST.md** step-by-step

---

## Summary

**Problem:** `figma:asset` imports break outside Figma Make  
**Solution:** Use real files in `/public/assets/images/`  
**Time:** 30-40 minutes one-time effort  
**Result:** Code works on GitHub and all deployment platforms  

**Start with:** [QUICK_REFERENCE.md](QUICK_REFERENCE.md) or [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

---

## Quick Command Reference

```bash
# Create folder
mkdir -p public/assets/images

# Copy images to this folder (manually)
# Then update code in 3 component files

# Test locally
npm run build
npm run preview

# Deploy
git add .
git commit -m "Migrate to production assets"
git push origin main
```

---

**Ready?** → Open [QUICK_REFERENCE.md](QUICK_REFERENCE.md) to get started! 🚀

Or jump straight to the checklist: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
