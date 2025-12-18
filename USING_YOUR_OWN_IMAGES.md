# 🖼️ Using Your Own Images - Quick Guide

Replace Unsplash placeholders with your custom images in 3 easy steps.

---

## Quick Steps

### 1. Add Your Images

Place 6 PNG files in `/public/assets/images/`:

```
/public/assets/images/
├── category-music.png          (400x400px, < 100KB)
├── category-night-parties.png  (400x400px, < 100KB)
├── category-sports.png         (400x400px, < 100KB)
├── artist-music.png            (400x400px, < 100KB)
├── artist-comedy.png           (400x400px, < 100KB)
└── add-item-placeholder.png    (400x400px, < 100KB)
```

### 2. Update Configuration

Open `/src/utils/assets.ts`:

**Comment out** Unsplash URLs (line ~33):
```typescript
/*
export const assets = {
  categoryMusic: "https://images.unsplash.com/...",
  // ... rest of Unsplash
};
*/
```

**Uncomment** local paths (line ~48):
```typescript
export const assets = {
  categoryMusic: "/assets/images/category-music.png",
  categoryNightParties: "/assets/images/category-night-parties.png",
  categorySports: "/assets/images/category-sports.png",
  artistMusic: "/assets/images/artist-music.png",
  artistComedy: "/assets/images/artist-comedy.png",
  addItemPlaceholder: "/assets/images/add-item-placeholder.png",
};
```

### 3. Test & Deploy

```bash
# Test locally
npm run build && npm run preview

# Deploy
git add public/assets/images/
git add src/utils/assets.ts
git commit -m "Add custom images"
git push origin main
```

**Done!** ✅

---

## Image Requirements

### Format
- PNG (recommended) or JPG
- RGB color space
- Web-optimized

### Size
- Recommended: 400x400px
- Minimum: 300x300px
- Maximum: 800x800px

### File Size
- Each image: < 100KB
- Total: < 500KB
- Use [TinyPNG](https://tinypng.com) to optimize

### File Names (Exact Match Required)
✅ `category-music.png`
❌ `category-music.PNG`
❌ `CategoryMusic.png`
❌ `music.png`

**Case-sensitive and must match exactly!**

---

## Where Images Appear

### Category Cards
- **category-music.png** → Music category card (purple gradient background)
- **category-night-parties.png** → Night Parties card (purple gradient)
- **category-sports.png** → Sports category card (orange gradient)

Displayed at: 220x220px (large), 124x124px (small)

### Artist Cards
- **artist-music.png** → Music artist card
- **artist-comedy.png** → Comedy artist card

Displayed at: 220x220px (large), 160x160px (medium), 124x124px (small)

### Add Item
- **add-item-placeholder.png** → Add item placeholder image

Displayed at: 184x184px

---

## Optimize Your Images

### Using TinyPNG

1. Go to [tinypng.com](https://tinypng.com)
2. Upload your PNG files
3. Download compressed versions
4. Save to `/public/assets/images/`

**Typical results**: 500KB → 150KB (70% smaller!)

### Using Squoosh

1. Go to [squoosh.app](https://squoosh.app)
2. Drop your image
3. Choose "OxiPNG" or "MozJPEG"
4. Adjust quality (80-90%)
5. Download optimized image

### Command Line (Optional)

```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Resize and optimize
convert input.png -resize 400x400^ -gravity center -extent 400x400 -quality 85 output.png
```

---

## Quick Test

After adding images:

```bash
# 1. Build
npm run build

# 2. Preview
npm run preview

# 3. Open browser
# http://localhost:4173/

# 4. Check pages
# - HomePage → See component previews
# - CategoryCard page → See your category images
# - ArtistCard page → See your artist images
# - AddItem page → See your placeholder
```

**Look for**:
- ✅ Images load (not broken)
- ✅ Images look sharp
- ✅ No console errors (F12)

---

## Common Issues

### Images don't show (404 error)

**Check:**
- [ ] Files in `/public/assets/images/` folder?
- [ ] File names match exactly (case-sensitive)?
- [ ] Uncommented local paths in `assets.ts`?
- [ ] Ran `npm run build` after changes?

### Images look blurry

**Solutions:**
- Use at least 400x400px images
- Save as PNG (better than JPG for graphics)
- Don't compress too much (keep quality > 80%)

### Images too large (slow loading)

**Solutions:**
- Optimize with TinyPNG or Squoosh
- Target < 100KB per image
- Consider WebP format (smaller files)

### Wrong image shows

**Check:**
- Correct image for correct filename?
- Clear browser cache (Ctrl+Shift+R)?
- Rebuilt with `npm run build`?

---

## Alternative: Keep Using Unsplash

**Don't want to use custom images?**

The app works perfectly with Unsplash placeholders! No changes needed.

**Pros of Unsplash:**
- ✅ No setup required
- ✅ High-quality professional photos
- ✅ Fast CDN delivery
- ✅ No storage/bandwidth costs

**Pros of Custom Images:**
- ✅ Full control over visuals
- ✅ Match your brand/design
- ✅ No external dependencies
- ✅ Works offline (after first load)

**Both options work perfectly!** Choose what fits your needs.

---

## Advanced: Using Other Formats

### WebP (Smaller Files)

**Convert to WebP:**
```bash
# Using ImageMagick
convert category-music.png category-music.webp

# Using cwebp (Google tool)
cwebp category-music.png -o category-music.webp -q 85
```

**Update assets.ts:**
```typescript
export const assets = {
  categoryMusic: "/assets/images/category-music.webp",
  // ...
};
```

### SVG (Vector Images)

For icons or simple graphics, you can use SVG:

```typescript
export const assets = {
  categoryMusic: "/assets/images/category-music.svg",
  // ...
};
```

### Mixed Formats

You can mix formats:
```typescript
export const assets = {
  categoryMusic: "/assets/images/category-music.webp",
  categoryNightParties: "/assets/images/category-night.png",
  categorySports: "/assets/images/sports.jpg",
  // ...
};
```

---

## Summary Checklist

- [ ] Created 6 images (PNG, 400x400px)
- [ ] Optimized each to < 100KB
- [ ] Saved to `/public/assets/images/`
- [ ] Updated `/src/utils/assets.ts`
- [ ] Commented out Unsplash section
- [ ] Uncommented local paths section
- [ ] Ran `npm run build`
- [ ] Ran `npm run preview`
- [ ] Tested all component pages
- [ ] No console errors
- [ ] Committed to git
- [ ] Deployed!

**Your custom images are live!** 🎨✨

---

## Need Help?

**Check these files:**
- `/src/utils/assets.ts` - Asset configuration
- `/public/assets/images/README.md` - Detailed folder guide
- `/IMAGES_MIGRATION_COMPLETE.md` - Full migration guide

**Still stuck?** Make sure:
1. File names match exactly (case-sensitive)
2. Files are in correct folder
3. Correct section uncommented in assets.ts
4. Built and previewed locally first

---

**Enjoy your custom images!** 🖼️
