# Quick Reference: Figma Assets in GitHub

## The Problem
```tsx
// ❌ This ONLY works in Figma Make:
import img from "figma:asset/abc123.png"
```

## The Solution
```tsx
// ✅ This works everywhere (GitHub, Vercel, Netlify):
const img = "/assets/images/my-image.png"

// ✅ Or with Vite optimization:
import img from "@/assets/images/my-image.png"
```

---

## 3-Step Migration

### 1. Download Images
- Run Figma Make app locally
- Right-click images → Save as...
- Or use Browser DevTools → Network tab

### 2. Create Folder
```bash
mkdir -p public/assets/images
```

### 3. Update Code
```tsx
// BEFORE:
import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";

// AFTER:
const imgMusic = "/assets/images/category-music.png";
```

---

## Images You Need

| Component | Count | Files Needed |
|-----------|-------|-------------|
| CategoryCard | 3 | `category-music.png`, `category-night-parties.png`, `category-sports.png` |
| ArtistCard | 2 | `artist-music.png`, `artist-comedy.png` |
| AddItem | 1 | `add-item-placeholder.png` |

**Total: 6 images**

---

## Two Approaches

### Option A: Public Folder (Simpler)
```
/public/assets/images/my-image.png
↓
const img = "/assets/images/my-image.png"
```

**Pros:** Simple, works everywhere  
**Cons:** No build optimization

### Option B: Src Assets (Better Performance)
```
/src/assets/images/my-image.png
↓
import img from "@/assets/images/my-image.png"
```

**Pros:** Vite optimization, cache busting  
**Cons:** Slightly more complex

---

## Important Rules

### ✅ DO:
- Use `/public/assets/images/` for simple projects
- Start paths with `/` → `"/assets/images/..."`
- Export at 2x resolution for retina displays
- Optimize with TinyPNG before committing
- Test with `npm run build && npm run preview`

### ❌ DON'T:
- Don't use `figma:asset` (breaks outside Figma Make)
- Don't forget the leading `/` in paths
- Don't use `./assets` or `../assets` for public files
- Don't commit huge unoptimized images

---

## SVG Files

**SVG imports are fine - don't change them!**

```tsx
// ✅ This works everywhere (regular file import):
import svgPaths from "../../imports/svg-yv13g2mk64";
```

SVG path files in `/src/imports/` are normal TypeScript files, not virtual modules.

---

## Testing Checklist

```bash
# 1. Build for production
npm run build

# 2. Preview locally
npm run preview

# 3. Check each component
# - CategoryCard: All 3 themes show images ✓
# - ArtistCard: Both types show images ✓
# - AddItem: Placeholder shows ✓

# 4. If all good, commit and push
git add .
git commit -m "Migrate to production-ready assets"
git push
```

---

## File Paths Cheat Sheet

| Location | Import Method | Example |
|----------|---------------|---------|
| `/public/assets/images/x.png` | Direct path | `"/assets/images/x.png"` |
| `/src/assets/images/x.png` | Import with @ | `import x from "@/assets/images/x.png"` |
| `/src/assets/images/x.png` | Relative import | `import x from "../../assets/images/x.png"` |

---

## Common Errors

### "Cannot find module 'figma:asset/...'"
**Fix:** You deployed without migrating assets. Follow migration guide.

### Images show in dev but not production
**Fix:** Images must be in `/public` folder and committed to git.

### "404 Not Found" for images
**Fix:** Check path starts with `/` → `"/assets/images/..."` not `"assets/images/..."`

### Images look blurry
**Fix:** Export at 2x or 3x resolution from Figma.

---

## Time Estimate

- ⏱️ **Total migration time:** 30-40 minutes
  - Download images: 10 min
  - Organize files: 5 min
  - Update code: 10 min
  - Test & deploy: 10 min

---

## Need Help?

📖 Read the full guides:
- `/MIGRATION_GUIDE.md` - Complete step-by-step
- `/ASSET_INVENTORY.md` - All images to download
- `/EXAMPLE_MIGRATION.md` - Detailed code examples

🔍 Find all figma:asset imports:
```bash
grep -r "figma:asset" src/app/components/
```
