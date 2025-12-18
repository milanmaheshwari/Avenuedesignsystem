# Assets Folder

This folder is for production-ready images for the design system documentation site.

## Current Status

✅ **The site currently uses Unsplash placeholder images** - it will work immediately when deployed to Vercel or GitHub Pages.

## Optional: Use Your Own Images

If you want to replace the Unsplash placeholders with your own images, place these 6 PNG files in this folder:

### CategoryCard Component (3 images)
- `category-music.png` - Music category image (recommended: 400x400px)
- `category-night-parties.png` - Night parties image (recommended: 400x400px)
- `category-sports.png` - Sports category image (recommended: 400x400px)

### ArtistCard Component (2 images)
- `artist-music.png` - Music artist photo (recommended: 400x400px)
- `artist-comedy.png` - Comedy artist photo (recommended: 400x400px)

### AddItem Component (1 image)
- `add-item-placeholder.png` - Add item placeholder (recommended: 400x400px)

## How to Switch to Your Own Images

1. **Add your PNG files** to this folder (`/public/assets/images/`) with the exact filenames above
2. **Open** `/src/utils/assets.ts`
3. **Comment out** the Unsplash URLs section (lines ~33-40)
4. **Uncomment** the local images section (lines ~48-56)
5. **Test**: `npm run build && npm run preview`
6. **Deploy**: `git push`

## File Size Guidelines

- Target: Each image < 100KB
- Total: All images < 500KB
- Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to optimize if needed

## Image Specifications

- **Format**: PNG (preferred) or JPG
- **Size**: 400x400px (will be automatically cropped/scaled)
- **Color**: RGB color space
- **Quality**: High quality, suitable for display at 220x220px

## Current Configuration

The site is configured to use Unsplash placeholders by default, which means:
- ✅ No setup required
- ✅ Works immediately on Vercel/GitHub Pages
- ✅ No CORS issues
- ✅ Fast CDN delivery
- ✅ You can deploy right now!

To use your own images, follow the "How to Switch" steps above.