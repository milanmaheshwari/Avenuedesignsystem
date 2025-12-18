# Assets Documentation Index

**Your complete guide to migrating Figma Make assets for GitHub deployment**

---

## 🚨 The Problem

When you push your Figma Make code to GitHub, images using `figma:asset` imports will break because this is a virtual module that only works in Figma Make's environment.

```tsx
// ❌ This breaks outside Figma Make:
import img from "figma:asset/abc123.png"
```

---

## ✅ The Solution

Migrate to standard asset imports that work everywhere:

```tsx
// ✅ This works on GitHub, Vercel, Netlify, etc.:
const img = "/assets/images/my-image.png"
```

---

## 📚 Documentation Guide

### 🎯 **Start Here**
Pick based on your situation:

| If you want... | Read this |
|----------------|-----------|
| **Quick overview and fix** | [QUICK_REFERENCE.md](QUICK_REFERENCE.md) ← Start here! |
| **Step-by-step deployment** | [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) |
| **Complete understanding** | Read all docs in order below |

---

## 📖 Complete Documentation

### 1. **QUICK_REFERENCE.md** ⚡
**Time: 5 minutes**  
**Best for:** Quick lookup, troubleshooting, fast migration

**What's inside:**
- The problem and solution in 3 steps
- All 6 images you need to download
- Two migration approaches (simple vs. optimized)
- Common errors and fixes
- Quick commands reference

👉 **Read this first** if you want to migrate quickly.

---

### 2. **README_ASSETS.md** 📘
**Time: 10 minutes**  
**Best for:** Understanding the asset system

**What's inside:**
- How Figma Make assets work
- Difference between `figma:asset` and SVG imports
- Current project asset inventory
- Recommended migration approach
- Deployment platform compatibility
- Image optimization tips
- Troubleshooting guide

👉 **Read this** to understand why migration is needed.

---

### 3. **ASSET_INVENTORY.md** 📋
**Time: 5 minutes**  
**Best for:** Knowing exactly which images to download

**What's inside:**
- Complete list of all `figma:asset` imports
- Suggested filenames for each image
- Download instructions (3 methods)
- Recommended folder structure
- Code changes summary

👉 **Use this** as your download checklist.

---

### 4. **MIGRATION_GUIDE.md** 🛠️
**Time: 15 minutes**  
**Best for:** Comprehensive step-by-step instructions

**What's inside:**
- Complete migration workflow
- Option A: Public folder method (recommended)
- Option B: Src assets method (optimized)
- Before/after code examples
- Testing instructions
- .gitignore recommendations
- Alternative CDN approach

👉 **Follow this** for detailed migration steps.

---

### 5. **EXAMPLE_MIGRATION.md** 💻
**Time: 10 minutes**  
**Best for:** Seeing real code examples

**What's inside:**
- Complete CategoryCard migration example
- Side-by-side before/after code
- Both public folder and Vite import approaches
- Git workflow commands
- Troubleshooting specific issues
- Success checklist

👉 **Reference this** while coding the migration.

---

### 6. **DEPLOYMENT_CHECKLIST.md** ✅
**Time: 30-40 minutes to complete**  
**Best for:** Systematic deployment process

**What's inside:**
- Step-by-step deployment checklist
- Download images (with exact hashes)
- Update each component
- Local testing procedures
- Git workflow
- Production deployment steps
- Verification tests
- Troubleshooting section

👉 **Use this** to migrate and deploy systematically.

---

## 🎯 Quick Start Paths

### Path 1: Fast Migration (30 min)
```
1. Read: QUICK_REFERENCE.md (5 min)
2. Check: ASSET_INVENTORY.md (5 min)
3. Follow: DEPLOYMENT_CHECKLIST.md (20 min)
4. Done! ✓
```

### Path 2: Complete Understanding (60 min)
```
1. Read: README_ASSETS.md (10 min)
2. Read: MIGRATION_GUIDE.md (15 min)
3. Read: EXAMPLE_MIGRATION.md (10 min)
4. Check: ASSET_INVENTORY.md (5 min)
5. Follow: DEPLOYMENT_CHECKLIST.md (20 min)
6. Done! ✓
```

### Path 3: Just Fix It (15 min)
```
1. Scan: QUICK_REFERENCE.md (2 min)
2. Download: 6 images from running app (5 min)
3. Update: 3 component files (5 min)
4. Test: npm run build && npm run preview (3 min)
5. Done! ✓
```

---

## 📊 Migration Summary

### What Needs Migration
- ✅ **6 images** using `figma:asset` imports
- ✅ **3 components** need code updates
- ❌ **60+ SVG files** - no changes needed!

### Time Investment
- **Fast path:** 15-30 minutes
- **Thorough path:** 60 minutes
- **One-time task:** Never repeat for this project

### Files to Update
```
/src/app/components/CategoryCard.tsx
/src/app/components/ArtistCard.tsx
/src/app/components/AddItem.tsx
```

### Files to Create
```
/public/assets/images/category-music.png
/public/assets/images/category-night-parties.png
/public/assets/images/category-sports.png
/public/assets/images/artist-music.png
/public/assets/images/artist-comedy.png
/public/assets/images/add-item-placeholder.png
```

---

## 🔧 Tools & Resources

### Image Download Methods
1. **Browser:** Right-click → Save image as...
2. **DevTools:** Network tab → Find image URLs
3. **Figma:** Export directly from Figma file

### Image Optimization
- [TinyPNG](https://tinypng.com/) - PNG compression
- [Squoosh](https://squoosh.app/) - Advanced optimization
- [ImageOptim](https://imageoptim.com/) - Mac app

### Testing Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Check file sizes
du -h public/assets/images/

# Find all figma:asset imports
grep -r "figma:asset" src/app/components/
```

---

## 🚀 Deployment Platforms

### Verified Compatible
- ✅ **Vercel** - Works perfectly
- ✅ **Netlify** - Works perfectly
- ✅ **GitHub Pages** - Works with base path config
- ✅ **AWS S3 + CloudFront** - Works perfectly
- ✅ **Any static host** - Should work

### Configuration Needed
- GitHub Pages: Set `base` in `vite.config.ts`
- Others: Usually no config needed

---

## ❓ FAQ

### Q: Do I need to migrate SVG files?
**A:** No! SVG imports in `/src/imports/` work everywhere. Only `figma:asset` needs migration.

### Q: Can I keep using figma:asset in development?
**A:** Yes, but you'll need to migrate before pushing to GitHub.

### Q: What if I have many images?
**A:** Same process, just more files. Consider using a CDN for 10+ images.

### Q: Will this affect my design system tokens?
**A:** No! CSS variables in `/src/styles/` are unaffected.

### Q: Can I use /src/assets instead of /public?
**A:** Yes! See MIGRATION_GUIDE.md Option B for Vite-optimized imports.

### Q: What about future Figma imports?
**A:** Use `/public/assets/images/` from the start instead of `figma:asset`.

---

## 🎓 Key Concepts

### figma:asset (Virtual Module)
- Only works in Figma Make
- Optimized and managed by Figma Make
- Breaks in production deployments

### Public Folder (/public)
- Served as-is by Vite
- No optimization or processing
- Simple and reliable
- Recommended for most cases

### Src Assets (/src/assets)
- Processed by Vite during build
- Automatic optimization
- Cache-busting hashes
- Better for production performance

### SVG Imports
- Regular TypeScript files
- Work everywhere
- No migration needed

---

## ✅ Success Checklist

Before pushing to GitHub:

- [ ] Read QUICK_REFERENCE.md or README_ASSETS.md
- [ ] Downloaded all 6 images
- [ ] Created /public/assets/images/ folder
- [ ] Updated CategoryCard.tsx
- [ ] Updated ArtistCard.tsx
- [ ] Updated AddItem.tsx
- [ ] Tested with `npm run build && npm run preview`
- [ ] Verified all images load locally
- [ ] Committed changes to git
- [ ] Ready to push to GitHub!

After deployment:

- [ ] Verified all images load on production
- [ ] Checked browser console (no errors)
- [ ] Tested on mobile device
- [ ] Ran Lighthouse audit
- [ ] Shared production URL

---

## 🆘 Getting Help

### Common Issues
1. **Images don't load** → Check QUICK_REFERENCE.md troubleshooting
2. **Build fails** → Check syntax in updated components
3. **404 errors** → Verify path starts with `/`
4. **Blurry images** → Export at 2x from Figma

### Debugging Steps
```bash
# 1. Check if files exist
ls -la public/assets/images/

# 2. Check git status
git ls-files public/assets/images/

# 3. Test locally
npm run build && npm run preview

# 4. Check browser console
# Open DevTools → Console tab

# 5. Check Network tab
# Open DevTools → Network → Filter: Img
```

---

## 📈 Next Steps

### After Successful Migration
1. **Delete this documentation** (or keep for reference)
2. **Update your workflow** - use /public for future assets
3. **Document the process** for your team
4. **Share lessons learned**

### Optional Improvements
- Convert to WebP format
- Implement responsive images (srcset)
- Set up CDN (Cloudinary, etc.)
- Add image lazy loading
- Implement blur-up placeholders

---

## 📝 Document Comparison

| Document | Length | Time | Best For |
|----------|--------|------|----------|
| QUICK_REFERENCE.md | Short | 5 min | Quick lookup |
| README_ASSETS.md | Medium | 10 min | Understanding |
| ASSET_INVENTORY.md | Short | 5 min | Download list |
| MIGRATION_GUIDE.md | Long | 15 min | Complete guide |
| EXAMPLE_MIGRATION.md | Medium | 10 min | Code examples |
| DEPLOYMENT_CHECKLIST.md | Long | 30-40 min | Step-by-step |

---

## 🎯 Recommended Reading Order

### For Beginners
1. README_ASSETS.md (understand the problem)
2. MIGRATION_GUIDE.md (learn the solution)
3. EXAMPLE_MIGRATION.md (see code examples)
4. DEPLOYMENT_CHECKLIST.md (deploy step-by-step)

### For Experienced Developers
1. QUICK_REFERENCE.md (get the gist)
2. ASSET_INVENTORY.md (download images)
3. Update code directly
4. Deploy

### For Visual Learners
1. EXAMPLE_MIGRATION.md (see before/after code)
2. DEPLOYMENT_CHECKLIST.md (follow checkboxes)

---

## 📞 Support

- 📖 **Documentation:** Read the guides in this folder
- 🐛 **Issues:** Check troubleshooting sections
- 💡 **Tips:** See QUICK_REFERENCE.md
- ✅ **Verification:** Use DEPLOYMENT_CHECKLIST.md

---

**Ready to migrate?** → Start with [QUICK_REFERENCE.md](QUICK_REFERENCE.md)  
**Need more details?** → Read [README_ASSETS.md](README_ASSETS.md)  
**Want step-by-step?** → Follow [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

Good luck with your deployment! 🚀
