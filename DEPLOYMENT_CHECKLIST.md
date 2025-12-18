# GitHub Deployment Checklist

Use this checklist to ensure your Figma Make project is ready for GitHub and production deployment.

---

## Pre-Migration Checklist

- [ ] **Understand the issue**: `figma:asset` imports only work in Figma Make
- [ ] **Identified all assets**: 6 images need migration (see ASSET_INVENTORY.md)
- [ ] **Read quick reference**: Reviewed QUICK_REFERENCE.md
- [ ] **Backed up current code**: Committed current working state to git

---

## Step 1: Download Images

- [ ] **Run Figma Make app locally** (`npm run dev`)
- [ ] **Navigate to CategoryCard page**
- [ ] **Download Music category image**
  - Right-click → Save as → `category-music.png`
  - Hash: `8b69c147bc89f3d328bd03bc1feec1e058214bd9.png`
- [ ] **Download Night Parties category image**
  - Right-click → Save as → `category-night-parties.png`
  - Hash: `f8a07e6bf6825d62c02876d0fe17f37281ebff79.png`
- [ ] **Download Sports category image**
  - Right-click → Save as → `category-sports.png`
  - Hash: `e11cd373cec97f96673d91e50e2ae9765b8ab20d.png`
- [ ] **Navigate to ArtistCard page**
- [ ] **Download Music artist image**
  - Right-click → Save as → `artist-music.png`
  - Hash: `fae9216881de499113dd7791f82ff50e3aaa7af1.png`
- [ ] **Download Comedy artist image**
  - Right-click → Save as → `artist-comedy.png`
  - Hash: `fd092aafde0b7229084b06b4cb61662024365b50.png`
- [ ] **Navigate to AddItem page**
- [ ] **Download placeholder image**
  - Right-click → Save as → `add-item-placeholder.png`
  - Hash: `a5561ce6332b43441a50ac1c989d165d124b3efd.png`

**Total: 6 images downloaded** ✓

---

## Step 2: Optimize Images (Recommended)

- [ ] **Check file sizes**
  - Target: Each image < 100KB
  - Total: All images < 500KB
- [ ] **Optimize if needed**
  - Option 1: Use TinyPNG (https://tinypng.com/)
  - Option 2: Use Squoosh (https://squoosh.app/)
  - Option 3: Use ImageOptim (Mac) or similar
- [ ] **Verify images still look good**
  - Open each optimized image
  - Check quality is acceptable

---

## Step 3: Create Folder Structure

- [ ] **Navigate to project root in terminal**
- [ ] **Create public folder** (if doesn't exist)
  ```bash
  mkdir -p public
  ```
- [ ] **Create assets folder**
  ```bash
  mkdir -p public/assets
  ```
- [ ] **Create images folder**
  ```bash
  mkdir -p public/assets/images
  ```
- [ ] **Verify structure**
  ```bash
  ls -la public/assets/images/
  ```

---

## Step 4: Copy Images

- [ ] **Copy category-music.png** to `/public/assets/images/`
- [ ] **Copy category-night-parties.png** to `/public/assets/images/`
- [ ] **Copy category-sports.png** to `/public/assets/images/`
- [ ] **Copy artist-music.png** to `/public/assets/images/`
- [ ] **Copy artist-comedy.png** to `/public/assets/images/`
- [ ] **Copy add-item-placeholder.png** to `/public/assets/images/`
- [ ] **Verify all files copied**
  ```bash
  ls -la public/assets/images/
  # Should show 6 images
  ```

---

## Step 5: Update CategoryCard Component

- [ ] **Open** `/src/app/components/CategoryCard.tsx`
- [ ] **Locate import statements** (lines 1-3)
  ```tsx
  import imgMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
  import imgNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
  import imgSports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";
  ```
- [ ] **Remove or comment out** these three lines
- [ ] **Update themeConfig** (around line 23-50)
  - Change `image: imgMusic,` to `image: "/assets/images/category-music.png",`
  - Change `image: imgNightParties,` to `image: "/assets/images/category-night-parties.png",`
  - Change `image: imgSports,` to `image: "/assets/images/category-sports.png",`
- [ ] **Save file**
- [ ] **Verify syntax** (no red underlines in editor)

---

## Step 6: Update ArtistCard Component

- [ ] **Open** `/src/app/components/ArtistCard.tsx`
- [ ] **Locate import statements**
  ```tsx
  import imgImg1 from "figma:asset/fae9216881de499113dd7791f82ff50e3aaa7af1.png";
  import imgImg2 from "figma:asset/fd092aafde0b7229084b06b4cb61662024365b50.png";
  ```
- [ ] **Replace with**
  ```tsx
  const imgImg1 = "/assets/images/artist-music.png";
  const imgImg2 = "/assets/images/artist-comedy.png";
  ```
- [ ] **Save file**

---

## Step 7: Update AddItem Component

- [ ] **Open** `/src/app/components/AddItem.tsx`
- [ ] **Locate import statement**
  ```tsx
  import imgImage from "figma:asset/a5561ce6332b43441a50ac1c989d165d124b3efd.png";
  ```
- [ ] **Replace with**
  ```tsx
  const imgImage = "/assets/images/add-item-placeholder.png";
  ```
- [ ] **Save file**

---

## Step 8: Local Testing

- [ ] **Stop development server** (if running)
- [ ] **Clear previous build**
  ```bash
  rm -rf dist/
  ```
- [ ] **Build for production**
  ```bash
  npm run build
  ```
- [ ] **Verify build succeeded** (no errors)
- [ ] **Preview production build**
  ```bash
  npm run preview
  ```
- [ ] **Test CategoryCard page**
  - Navigate to CategoryCard documentation
  - Verify Music card shows image ✓
  - Verify Night Parties card shows image ✓
  - Verify Sports card shows image ✓
  - Check both Large and Small sizes ✓
- [ ] **Test ArtistCard page**
  - Navigate to ArtistCard documentation
  - Verify Music artist shows image ✓
  - Verify Comedy artist shows image ✓
- [ ] **Test AddItem page**
  - Navigate to AddItem documentation
  - Verify placeholder image shows ✓
- [ ] **Check browser console** (no errors)
- [ ] **Check Network tab** (all images load with 200 status)

---

## Step 9: Git Workflow

- [ ] **Check git status**
  ```bash
  git status
  ```
- [ ] **Review changes**
  ```bash
  git diff src/app/components/CategoryCard.tsx
  git diff src/app/components/ArtistCard.tsx
  git diff src/app/components/AddItem.tsx
  ```
- [ ] **Add images to git**
  ```bash
  git add public/assets/images/
  ```
- [ ] **Add component changes**
  ```bash
  git add src/app/components/CategoryCard.tsx
  git add src/app/components/ArtistCard.tsx
  git add src/app/components/AddItem.tsx
  ```
- [ ] **Verify .gitignore** (images should NOT be ignored)
  ```bash
  cat .gitignore
  # Make sure public/assets/images/ is NOT in .gitignore
  ```
- [ ] **Commit changes**
  ```bash
  git commit -m "Migrate from figma:asset to public assets for GitHub deployment"
  ```
- [ ] **Verify commit**
  ```bash
  git log -1 --stat
  # Should show 3 modified files + 6 new images
  ```

---

## Step 10: Push to GitHub

- [ ] **Push to remote**
  ```bash
  git push origin main
  ```
  (or your branch name)
- [ ] **Verify on GitHub**
  - Open GitHub repository in browser
  - Check `/public/assets/images/` folder exists
  - Verify 6 images are visible
  - Check component files updated correctly

---

## Step 11: Deploy to Production

### For Vercel:
- [ ] **Connect repository** (if not already)
- [ ] **Configure build settings**
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] **Deploy**
  ```bash
  vercel --prod
  ```
- [ ] **Wait for deployment** (usually 1-2 minutes)
- [ ] **Get deployment URL**

### For Netlify:
- [ ] **Connect repository** (if not already)
- [ ] **Configure build settings**
  - Build Command: `npm run build`
  - Publish Directory: `dist`
- [ ] **Deploy**
- [ ] **Wait for deployment**
- [ ] **Get deployment URL**

### For GitHub Pages:
- [ ] **Update vite.config.ts** with base path
  ```ts
  export default defineConfig({
    base: '/your-repo-name/',
    // ...
  })
  ```
- [ ] **Build and deploy**
  ```bash
  npm run build
  gh-pages -d dist
  ```

---

## Step 12: Production Verification

- [ ] **Open production URL** in browser
- [ ] **Test CategoryCard**
  - Navigate to `/category-card` page
  - Music card image loads ✓
  - Night Parties card image loads ✓
  - Sports card image loads ✓
- [ ] **Test ArtistCard**
  - Navigate to `/artist-card` page
  - Music artist image loads ✓
  - Comedy artist image loads ✓
- [ ] **Test AddItem**
  - Navigate to `/add-item` page
  - Placeholder image loads ✓
- [ ] **Open browser DevTools**
  - Check Console (no errors) ✓
  - Check Network tab (all images 200 OK) ✓
- [ ] **Test on mobile device**
  - Images load on mobile ✓
  - Images look sharp on retina display ✓

---

## Step 13: Performance Check

- [ ] **Run Lighthouse audit**
  - Open DevTools → Lighthouse
  - Run audit for Performance
  - Check image optimization suggestions
- [ ] **Check image file sizes**
  - Each image < 100KB ✓
  - Total < 500KB ✓
- [ ] **Verify caching headers** (if applicable)
- [ ] **Check load times**
  - All pages load < 3 seconds ✓

---

## Troubleshooting

### Images don't load in production
- [ ] Checked paths start with `/` 
- [ ] Verified files exist in `/public/assets/images/`
- [ ] Confirmed files are committed to git
- [ ] Tried hard refresh (Ctrl+Shift+R)
- [ ] Checked Network tab for 404 errors
- [ ] Verified case-sensitive filenames match

### Build fails
- [ ] Checked for syntax errors
- [ ] Ran `npm install` 
- [ ] Cleared `node_modules` and reinstalled
- [ ] Checked Vite config is correct

### Images blurry
- [ ] Re-exported from Figma at 2x resolution
- [ ] Used higher quality export settings
- [ ] Considered using srcset for responsive images

---

## Post-Deployment

- [ ] **Update documentation** (if needed)
- [ ] **Share production URL** with team
- [ ] **Monitor analytics** (if applicable)
- [ ] **Create GitHub release** (optional)
  ```bash
  git tag -a v1.0.0 -m "Production release with migrated assets"
  git push origin v1.0.0
  ```
- [ ] **Update README** with deployment URL

---

## Optional Enhancements

- [ ] Convert images to WebP format
- [ ] Implement lazy loading
- [ ] Add image placeholders/blur-up
- [ ] Set up CDN (Cloudinary, imgix)
- [ ] Add srcset for responsive images
- [ ] Implement image caching strategy
- [ ] Add image compression in CI/CD

---

## Success Criteria

✅ All 6 images downloaded  
✅ Images in `/public/assets/images/` folder  
✅ 3 components updated (CategoryCard, ArtistCard, AddItem)  
✅ Local build successful  
✅ Local preview shows all images  
✅ Changes committed to git  
✅ Pushed to GitHub  
✅ Production deployment successful  
✅ All images load on production  
✅ No console errors  
✅ Mobile testing passed  

---

## Completion Time

**Estimated:** 30-40 minutes  
**Actual:** ________

---

## Notes

Use this space for any issues encountered or improvements made:

```
[Your notes here]
```

---

## Next Steps After Deployment

1. **Monitor production** for any image loading issues
2. **Optimize images** if file sizes are too large
3. **Consider CDN** for better global performance
4. **Update documentation** with new deployment process
5. **Share with team** - document the migration process

---

**Congratulations!** 🎉 Your Figma Make project is now GitHub-ready and deployed!

For future projects, remember to use `/public/assets/images/` from the start instead of `figma:asset` if you plan to deploy outside Figma Make.
