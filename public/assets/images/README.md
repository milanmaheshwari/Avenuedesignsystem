# Assets Folder

This folder contains production-ready images for the design system documentation site.

## Images to Place Here

Before deploying to GitHub, download these 6 images from your running Figma Make app and save them in this folder:

### CategoryCard Component (3 images)
- `category-music.png` - Music category 3D illustration
- `category-night-parties.png` - Night parties 3D illustration  
- `category-sports.png` - Sports category 3D illustration

### ArtistCard Component (2 images)
- `artist-music.png` - Music artist photo
- `artist-comedy.png` - Comedy artist photo

### AddItem Component (1 image)
- `add-item-placeholder.png` - Add item placeholder image

## How to Download

1. Run your Figma Make app: `npm run dev`
2. Navigate to each component page
3. Right-click on images → "Save image as..."
4. Save with the filenames above

## File Size Guidelines

- Target: Each image < 100KB
- Total: All images < 500KB
- Use TinyPNG or Squoosh to optimize if needed

## After Adding Images

Once you've added all 6 images to this folder:

1. Update the component files (see migration guides)
2. Test: `npm run build && npm run preview`
3. Commit: `git add public/assets/images/`
4. Push to GitHub

See the migration documentation in the root folder for complete instructions.
