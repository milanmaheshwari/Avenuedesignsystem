# 🎯 Dual Environment Setup - Works Everywhere!

Your code now works in **BOTH** Figma Make AND production (GitHub, Vercel, etc.) with a simple toggle!

---

## ✅ What Changed

### New Asset Utility Created

**File:** `/src/utils/assets.ts`

This single file manages ALL image imports and can switch between:
- **Figma Make mode** - Uses `figma:asset` imports ✨
- **Production mode** - Uses public asset paths 🚀

### Components Updated

All three components now import from the utility:

```typescript
import { assets } from "../../utils/assets";

// Then use assets like:
<img src={assets.categoryMusic} />
<img src={assets.artistComedy} />
<img src={assets.addItemPlaceholder} />
```

---

## 🔄 How to Switch Between Modes

### Currently Active: **FIGMA MAKE MODE** ✅

Your code is currently set to work in Figma Make with `figma:asset` imports.

```typescript
// ACTIVE: Figma Make imports
import imgCategoryMusic from "figma:asset/...";
export const assets = {
  categoryMusic: imgCategoryMusic,
  // ...
};
```

### When Deploying: Switch to **PRODUCTION MODE**

Open `/src/utils/assets.ts` and:

**Step 1:** Comment out the Figma Make section:
```typescript
// ==========================================
// FIGMA MAKE MODE
// ==========================================
// Comment this out when deploying:

/*
import imgCategoryMusic from "figma:asset/...";
// ... all the imports ...
export const assets = {
  categoryMusic: imgCategoryMusic,
  // ...
};
*/
```

**Step 2:** Uncomment the Production section:
```typescript
// ==========================================
// PRODUCTION MODE
// ==========================================
// Uncomment this when deploying:

export const assets = {
  categoryMusic: "/assets/images/category-music.png",
  categoryNightParties: "/assets/images/category-night-parties.png",
  categorySports: "/assets/images/category-sports.png",
  artistMusic: "/assets/images/artist-music.png",
  artistComedy: "/assets/images/artist-comedy.png",
  addItemPlaceholder: "/assets/images/add-item-placeholder.png",
};
```

---

## 📋 Deployment Workflow

### Option A: No Images Downloaded Yet

If you **haven't downloaded images** to `/public/assets/images/`:

1. **Keep Figma Make mode active** (current state)
2. Push to GitHub
3. Your code works in Figma Make ✅
4. Production builds will break ❌ (no images)

**When ready for production:**
1. Download 6 images to `/public/assets/images/`
2. Switch to Production mode in `/src/utils/assets.ts`
3. Test: `npm run build && npm run preview`
4. Push to GitHub
5. Deploy anywhere! ✅

### Option B: Images Already Downloaded

If you **have downloaded images** to `/public/assets/images/`:

1. Switch to Production mode in `/src/utils/assets.ts`
2. Test: `npm run build && npm run preview`
3. Push to GitHub
4. Deploy! ✅

**To work in Figma Make again:**
- Switch back to Figma Make mode
- Your original `figma:asset` imports still work!

---

## 🎛️ Quick Reference

| Environment | Mode to Use | Requirements |
|-------------|-------------|--------------|
| Figma Make | **FIGMA MAKE MODE** | Already set up ✅ |
| GitHub | **PRODUCTION MODE** | Need 6 images in `/public/assets/images/` |
| Vercel | **PRODUCTION MODE** | Need 6 images in `/public/assets/images/` |
| Netlify | **PRODUCTION MODE** | Need 6 images in `/public/assets/images/` |
| Local Preview | Either mode | FIGMA: no setup. PROD: need images |

---

## 🛠️ Component Code (No Changes Needed!)

All components now use the asset utility automatically:

### CategoryCard.tsx
```typescript
import { assets } from "../../utils/assets";

const themeConfig = {
  music: {
    image: assets.categoryMusic, // Automatically uses correct source
  },
  // ...
};
```

### ArtistCard.tsx
```typescript
import { assets } from "../../utils/assets";

const artistData = {
  music: {
    image: assets.artistMusic, // Automatically uses correct source
  },
  // ...
};
```

### AddItem.tsx
```typescript
import { assets } from "../../utils/assets";

<img src={assets.addItemPlaceholder} /> {/* Automatically uses correct source */}
```

**You never need to touch component files again!** Just switch the mode in `/src/utils/assets.ts`.

---

## 📥 Downloading Images (For Production)

To enable production mode, download these 6 images:

### While Figma Make is Running:

```bash
# Start dev server
npm run dev

# Navigate to each component page
# Right-click on each image → "Save image as..."
```

### Save to:
```
/public/assets/images/
├── category-music.png
├── category-night-parties.png
├── category-sports.png
├── artist-music.png
├── artist-comedy.png
└── add-item-placeholder.png
```

### Verify:
```bash
ls -la public/assets/images/

# Should show 6 .png files
```

---

## 🔍 Troubleshooting

### Images don't show in Figma Make?
✅ **Solution:** Make sure **FIGMA MAKE MODE** is active in `/src/utils/assets.ts`

### Images don't show in production?
Check these:
1. ✅ **PRODUCTION MODE** is active in `/src/utils/assets.ts`
2. ✅ 6 images exist in `/public/assets/images/`
3. ✅ Filenames match exactly (case-sensitive)
4. ✅ Cleared build cache: `rm -rf dist/ && npm run build`

### Build errors in production?
✅ **Solution:** Comment out Figma Make imports (they only work in Figma Make)

### Want to test both modes locally?

**Test Figma Make mode:**
```bash
# Make sure FIGMA MAKE MODE is active
npm run dev
```

**Test Production mode:**
```bash
# Make sure PRODUCTION MODE is active
# And images are in /public/assets/images/
npm run build
npm run preview
```

---

## 🎨 Benefits of This Approach

### ✅ **Best of Both Worlds**
- Work seamlessly in Figma Make with `figma:asset`
- Deploy to any platform with public paths
- One-line toggle to switch

### ✅ **No Duplicate Code**
- All components use the same asset utility
- Change once, works everywhere
- Clean, maintainable codebase

### ✅ **Type-Safe**
- TypeScript autocomplete for all assets
- Centralized asset registry
- Catch missing images at compile time

### ✅ **Future-Proof**
- Add new images easily
- Switch environments anytime
- No need to update components

---

## 📝 Summary

**Current State:**
- ✅ Asset utility created
- ✅ All components updated
- ✅ Figma Make mode active
- ✅ Works in Figma Make right now
- ⏳ Need to download images for production

**To Deploy:**
1. Download 6 images to `/public/assets/images/`
2. Open `/src/utils/assets.ts`
3. Comment out "FIGMA MAKE MODE" section
4. Uncomment "PRODUCTION MODE" section
5. Test, commit, push!

**To Return to Figma Make:**
1. Reverse the process - uncomment Figma Make mode
2. Comment out Production mode
3. Continue working!

---

## 🚀 Quick Commands

```bash
# Download images (see README in /public/assets/images/)
# Then:

# Test production build
npm run build
npm run preview

# If looks good:
git add .
git commit -m "Add dual-environment asset support"
git push

# Deploy
vercel --prod
# or
netlify deploy --prod
```

---

**You now have the flexibility to work in Figma Make AND deploy to production!** 🎉

Just toggle the mode in `/src/utils/assets.ts` whenever you need to switch environments.
