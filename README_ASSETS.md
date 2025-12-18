# Assets Documentation

## Understanding Figma Make Asset System

This document explains how assets work in Figma Make and how to prepare your project for GitHub deployment.

---

## Two Types of Asset Imports

### 1. Raster Images (figma:asset)

**What it is:**
- Virtual module scheme that only works in Figma Make
- Used for PNG, JPG, and other raster images
- Automatically optimized and served by Figma Make's build system

**Example:**
```tsx
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
```

**Where it's used:**
- CategoryCard component (3 images)
- ArtistCard component (2 images)
- AddItem component (1 image)

**Status:**
- ✅ Works in Figma Make
- ❌ Breaks in GitHub/production

---

### 2. SVG Paths (Regular Imports)

**What it is:**
- Normal TypeScript files containing SVG path strings
- Stored in `/src/imports/` directory
- Work everywhere (Figma Make, GitHub, production)

**Example:**
```tsx
import svgPaths from "../../imports/svg-yv13g2mk64";

// Usage:
<path d={svgPaths.p22a26c00} stroke="#FFF7ED" />
```

**Where it's used:**
- All icon components in CategoryCard
- Other vector graphics across components

**Status:**
- ✅ Works everywhere
- ✅ No changes needed for GitHub

---

## Current Project Assets

### Images Using figma:asset (NEEDS MIGRATION)

| Component | File | Variable | Image Description |
|-----------|------|----------|------------------|
| CategoryCard | CategoryCard.tsx | `imgMusic` | Music category 3D illustration (microphone, guitar, drums) |
| CategoryCard | CategoryCard.tsx | `imgNightParties` | Night parties 3D illustration (disco ball, lights) |
| CategoryCard | CategoryCard.tsx | `imgSports` | Sports 3D illustration (basketball, soccer, trophy) |
| ArtistCard | ArtistCard.tsx | `imgImg1` | Music artist photo |
| ArtistCard | ArtistCard.tsx | `imgImg2` | Comedy artist photo |
| AddItem | AddItem.tsx | `imgImage` | Placeholder image for add item |

**Total: 6 images** need to be downloaded and migrated.

### SVG Paths (NO CHANGES NEEDED)

| ID | Used In | Description |
|----|---------|-------------|
| svg-30bgdzpzro | CategoryCard (Music Large) | Music note icon paths |
| svg-21ulgngdfx | CategoryCard (Music Small) | Music note icon paths |
| svg-544wcgiqcd | CategoryCard (Night Large) | Disco ball icon paths |
| svg-5eiavb9sio | CategoryCard (Night Small) | Disco ball icon paths |
| svg-yv13g2mk64 | CategoryCard (Sports Large) | Trophy icon paths |
| svg-crglv5kpn7 | CategoryCard (Sports Small) | Trophy icon paths |

**Total: 60+ SVG files** in `/src/imports/` - all work as-is.

---

## Migration Path for GitHub Deployment

### Quick Version (30 minutes)

1. **Download 6 images** from running Figma Make app
2. **Create folder:** `/public/assets/images/`
3. **Update 3 components:** CategoryCard, ArtistCard, AddItem
4. **Test:** `npm run build && npm run preview`
5. **Deploy:** Push to GitHub

### Detailed Version

See these comprehensive guides:

- 📖 **MIGRATION_GUIDE.md** - Complete step-by-step instructions
- 📋 **ASSET_INVENTORY.md** - All images to download with descriptions
- 💻 **EXAMPLE_MIGRATION.md** - Code examples and comparisons
- ⚡ **QUICK_REFERENCE.md** - Quick lookup and troubleshooting

---

## Recommended Approach

### For Development (Figma Make)
✅ **Keep using `figma:asset`**
- It works perfectly in this environment
- No changes needed while developing in Figma Make

### For Production (GitHub/Vercel/Netlify)
✅ **Use Public Folder Method**

**Structure:**
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

**Code:**
```tsx
// Simple, works everywhere
const imgMusic = "/assets/images/category-music.png";
```

**Why this approach:**
- ✅ Simple to implement
- ✅ Works on all deployment platforms
- ✅ Easy to maintain
- ✅ No build config changes needed

---

## Alternative: Dual Environment Setup

Keep both imports and switch based on environment:

```tsx
// Use environment variable to switch
const IS_FIGMA_MAKE = import.meta.env.MODE === 'figma-make';

const images = IS_FIGMA_MAKE ? {
  music: require("figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png"),
  // ... figma:asset imports
} : {
  music: "/assets/images/category-music.png",
  // ... public paths
};
```

**Not recommended** - adds complexity. Better to just migrate once.

---

## Image Optimization Tips

### Export Quality
- Export at **2x resolution** from Figma (for retina displays)
- Example: For 220x220px display, export at 440x440px

### File Size
Optimize before committing:
- Use **TinyPNG** (https://tinypng.com/) - reduces PNG size by 50-70%
- Use **Squoosh** (https://squoosh.app/) - advanced optimization
- Consider **WebP format** - better compression than PNG

### Optimization Targets
- CategoryCard images: Target < 100KB each
- ArtistCard images: Target < 50KB each
- Total asset size: Target < 500KB

### Commands
```bash
# Check file sizes
du -h public/assets/images/

# Total size
du -sh public/assets/images/

# If using imagemagick (optional):
convert category-music.png -quality 85 category-music-optimized.png
```

---

## Deployment Platforms

### Vercel
✅ Works perfectly with `/public` folder
```bash
vercel --prod
```

### Netlify
✅ Works perfectly with `/public` folder
```toml
# netlify.toml
[build]
  publish = "dist"
```

### GitHub Pages
✅ Works with proper base path
```ts
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/',
})
```

### Other Platforms
Most platforms serve `/public` folder automatically - no config needed.

---

## Troubleshooting

### Issue: Images don't load after deployment

**Check 1:** Verify folder structure
```bash
ls -la public/assets/images/
# Should show all 6 images
```

**Check 2:** Verify paths in code
```tsx
// ✅ Correct
"/assets/images/category-music.png"

// ❌ Wrong (missing /)
"assets/images/category-music.png"
```

**Check 3:** Verify files are committed
```bash
git ls-files public/assets/images/
# Should list all images
```

**Check 4:** Clear cache
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open in incognito mode

### Issue: Images work locally but not in production

**Cause:** Paths are case-sensitive in production

```bash
# ✅ Correct - matches exactly
File: category-music.png
Code: "/assets/images/category-music.png"

# ❌ Wrong - case mismatch
File: Category-Music.png
Code: "/assets/images/category-music.png"
```

### Issue: Large file sizes in git

**Solution 1:** Optimize images
```bash
# Install optimization tools
npm install -g imagemin-cli

# Optimize
imagemin public/assets/images/*.png --out-dir=public/assets/images/
```

**Solution 2:** Use Git LFS for large files
```bash
# Install Git LFS
git lfs install

# Track large images
git lfs track "*.png"

# Commit
git add .gitattributes
git commit -m "Configure Git LFS"
```

**Solution 3:** Use external CDN (advanced)
- Upload to Cloudinary, AWS S3, etc.
- Update paths to CDN URLs

---

## Future Improvements

### Phase 1 (Immediate - Required for GitHub)
- [ ] Download 6 images from Figma Make
- [ ] Create `/public/assets/images/` folder
- [ ] Migrate CategoryCard component
- [ ] Migrate ArtistCard component
- [ ] Migrate AddItem component
- [ ] Test and deploy

### Phase 2 (Optional - Performance)
- [ ] Convert images to WebP format
- [ ] Implement responsive images (srcset)
- [ ] Add lazy loading
- [ ] Optimize with Vite's asset pipeline

### Phase 3 (Optional - Scalability)
- [ ] Set up CDN (Cloudinary, imgix)
- [ ] Implement image caching strategy
- [ ] Add image placeholder/blur-up effect
- [ ] Automate image optimization in CI/CD

---

## Summary

**What you need to know:**
1. **figma:asset only works in Figma Make** ⚠️
2. **SVG imports work everywhere** ✅
3. **For GitHub: Use /public folder** 📁
4. **Migration takes ~30 minutes** ⏱️
5. **6 images need to be downloaded** 🖼️

**Next steps:**
1. Read **QUICK_REFERENCE.md** for fast migration
2. Or read **MIGRATION_GUIDE.md** for detailed steps
3. Check **ASSET_INVENTORY.md** for image list
4. Follow **EXAMPLE_MIGRATION.md** for code examples

**Questions?**
- Check the troubleshooting sections in each guide
- All SVG imports are fine - no changes needed
- Test locally before deploying

---

## File Structure Reference

### Current (Figma Make)
```
/src
  /app/components
    CategoryCard.tsx (uses figma:asset)
    ArtistCard.tsx (uses figma:asset)
    AddItem.tsx (uses figma:asset)
  /imports
    svg-*.ts (60+ files - all fine)
```

### After Migration
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

/src
  /app/components
    CategoryCard.tsx (uses public paths)
    ArtistCard.tsx (uses public paths)
    AddItem.tsx (uses public paths)
  /imports
    svg-*.ts (unchanged)
```

---

**Ready to migrate?** Start with **QUICK_REFERENCE.md** → **MIGRATION_GUIDE.md** → Deploy! 🚀
