# Figma Asset Inventory

## Images to Download Before GitHub Push

This document lists all `figma:asset` imports found in your codebase. You need to download these images from Figma Make before deploying to GitHub/production.

---

## Primary Component Images (CRITICAL)

These are used in your main components and MUST be migrated:

### CategoryCard Component
**File:** `/src/app/components/CategoryCard.tsx`

| Variable Name | Hash | Suggested Filename | Description |
|---------------|------|-------------------|-------------|
| `imgMusic` | `8b69c147bc89f3d328bd03bc1feec1e058214bd9.png` | `category-music.png` | Music category 3D illustration |
| `imgNightParties` | `f8a07e6bf6825d62c02876d0fe17f37281ebff79.png` | `category-night-parties.png` | Night parties 3D illustration |
| `imgSports` | `e11cd373cec97f96673d91e50e2ae9765b8ab20d.png` | `category-sports.png` | Sports category 3D illustration |

### ArtistCard Component
**File:** `/src/app/components/ArtistCard.tsx`

| Variable Name | Hash | Suggested Filename | Description |
|---------------|------|-------------------|-------------|
| `imgImg1` | `fae9216881de499113dd7791f82ff50e3aaa7af1.png` | `artist-music.png` | Music artist image |
| `imgImg2` | `fd092aafde0b7229084b06b4cb61662024365b50.png` | `artist-comedy.png` | Comedy artist image |

### AddItem Component
**File:** `/src/app/components/AddItem.tsx`

| Variable Name | Hash | Suggested Filename | Description |
|---------------|------|-------------------|-------------|
| `imgImage` | `a5561ce6332b43441a50ac1c989d165d124b3efd.png` | `add-item-placeholder.png` | Add item placeholder image |

---

## Reference Files (OPTIONAL)

These are in `/src/imports/` and are Figma reference files. You don't need to migrate these unless you're using them directly:

### Additional Image Hashes Found
- `9faf841b6acf305e366bde0b263681cccf2b1c71.png` - Found in multiple CategoryCard variants
- Other variations in `/src/imports/CategoryCard-*.tsx` files

---

## Download Instructions

### Method 1: Screenshot from Browser (Quick)

1. **Run your Figma Make app locally**
2. **Open the component page** (e.g., CategoryCardPage)
3. **Right-click on each image** → "Save image as..."
4. **Save with descriptive names** (see table above)

### Method 2: Browser DevTools (Better Quality)

1. **Open browser DevTools** (F12)
2. **Go to Network tab**
3. **Filter by "Img"**
4. **Refresh the page**
5. **Find the image requests** and copy the resolved URLs
6. **Download from those URLs**

### Method 3: Export from Figma Directly

1. **Open your Figma file**
2. **Select the image/frame**
3. **Export settings** → PNG at 2x or 3x for retina displays
4. **Export and save**

---

## Recommended Folder Structure

After downloading, organize images like this:

```
/public
  /assets
    /images
      /categories
        category-music.png
        category-night-parties.png
        category-sports.png
      /artists
        artist-music.png
        artist-comedy.png
      /placeholders
        add-item-placeholder.png
```

Or simpler:

```
/public
  /assets
    /images
      category-music.png
      category-night-parties.png
      category-sports.png
      artist-music.png
      artist-comedy.png
      add-item-placeholder.png
```

---

## Migration Checklist

- [ ] Download all 6 primary images (see table above)
- [ ] Create `/public/assets/images/` folder
- [ ] Save images with descriptive names
- [ ] Update `/src/app/components/CategoryCard.tsx`
- [ ] Update `/src/app/components/ArtistCard.tsx`
- [ ] Update `/src/app/components/AddItem.tsx`
- [ ] Test locally with `npm run build && npm run preview`
- [ ] Verify all images load correctly
- [ ] Commit to git
- [ ] Push to GitHub
- [ ] Deploy and verify on production

---

## Code Changes Required

### CategoryCard.tsx

**Before:**
```tsx
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";
```

**After (Option A - Public folder):**
```tsx
const imgMusic = "/assets/images/category-music.png";
const imgNightParties = "/assets/images/category-night-parties.png";
const imgSports = "/assets/images/category-sports.png";
```

**After (Option B - Import from src):**
```tsx
import imgMusic from "@/assets/images/category-music.png";
import imgNightParties from "@/assets/images/category-night-parties.png";
import imgSports from "@/assets/images/category-sports.png";
```

### ArtistCard.tsx

**Before:**
```tsx
import imgImg1 from "figma:asset/fae9216881de499113dd7791f82ff50e3aaa7af1.png";
import imgImg2 from "figma:asset/fd092aafde0b7229084b06b4cb61662024365b50.png";
```

**After (Option A):**
```tsx
const imgImg1 = "/assets/images/artist-music.png";
const imgImg2 = "/assets/images/artist-comedy.png";
```

### AddItem.tsx

**Before:**
```tsx
import imgImage from "figma:asset/a5561ce6332b43441a50ac1c989d165d124b3efd.png";
```

**After (Option A):**
```tsx
const imgImage = "/assets/images/add-item-placeholder.png";
```

---

## Important Notes

1. **Image Quality**: Export at 2x or 3x resolution for retina displays
2. **File Size**: Optimize with tools like TinyPNG or ImageOptim before committing
3. **Git LFS**: If images are very large (>1MB), consider using Git LFS
4. **CDN**: For production, consider hosting on Cloudinary or similar
5. **WebP Format**: Consider converting to WebP for better compression

---

## Testing Before Deployment

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview

# Check for broken images
# Open http://localhost:4173 (or similar)
# Navigate through all component pages
# Verify all images load correctly
```

---

## Troubleshooting

**Images not loading after deployment?**
- ✅ Check if images are in `/public/assets/images/`
- ✅ Verify paths start with `/` (e.g., `/assets/images/...`)
- ✅ Check file names match exactly (case-sensitive!)
- ✅ Ensure images are committed to git
- ✅ Clear browser cache and try again

**Images blurry on retina displays?**
- Export at 2x or 3x resolution from Figma
- Use `srcset` for responsive images

**Large file sizes?**
- Optimize with TinyPNG, ImageOptim, or Squoosh
- Convert to WebP format
- Use a CDN with automatic optimization

---

## Estimated Time

- ⏱️ Downloading images: **10-15 minutes**
- ⏱️ Organizing files: **5 minutes**
- ⏱️ Updating code: **10 minutes**
- ⏱️ Testing: **5 minutes**

**Total: ~30-35 minutes**
