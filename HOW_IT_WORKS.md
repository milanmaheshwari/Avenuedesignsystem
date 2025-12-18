# 🎯 How the Dual Environment Solution Works

A visual guide to understanding how your images work in both Figma Make and production.

---

## The Problem We Solved

### Before (Didn't Work Everywhere)

```
Figma Make ✅               GitHub/Production ❌
    ↓                              ↓
figma:asset imports         figma:asset imports
    ↓                              ↓
Images work!                Build fails! 💥
                           (virtual modules don't exist)
```

### After (Works Everywhere!)

```
Figma Make ✅               GitHub/Production ✅
    ↓                              ↓
assets.ts                    assets.ts
    ↓                              ↓
figma:asset mode             public path mode
    ↓                              ↓
Images work!                Images work! 🎉
```

---

## Architecture

```
┌─────────────────────────────────────────┐
│     /src/utils/assets.ts                │
│     (Single Source of Truth)            │
│                                         │
│  ┌─────────────┐  ┌─────────────┐     │
│  │ Figma Make  │  │ Production  │     │
│  │    Mode     │  │    Mode     │     │
│  │             │  │             │     │
│  │ figma:asset │  │ /assets/... │     │
│  │  imports    │  │   paths     │     │
│  └─────────────┘  └─────────────┘     │
│         ↓                ↓              │
│      Toggle one or the other           │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│  Components (No Changes Needed!)       │
│                                         │
│  CategoryCard.tsx  ──┐                 │
│  ArtistCard.tsx    ──┼→ import { assets }│
│  AddItem.tsx       ──┘   from utils    │
│                                         │
│  All use: <img src={assets.xyz} />     │
└─────────────────────────────────────────┘
```

---

## Flow Diagram

### Figma Make Mode (Current)

```
Developer writes:
  <img src={assets.categoryMusic} />

        ↓

assets.ts exports:
  categoryMusic: imgCategoryMusic

        ↓

imgCategoryMusic imported from:
  "figma:asset/8b69...png"

        ↓

Figma Make resolves virtual module:
  → Returns blob URL
  → Image displays ✅
```

### Production Mode (When Ready)

```
Developer writes:
  <img src={assets.categoryMusic} />

        ↓

assets.ts exports:
  categoryMusic: "/assets/images/category-music.png"

        ↓

Browser requests:
  /assets/images/category-music.png

        ↓

Vite serves from /public folder:
  → Returns static file
  → Image displays ✅
```

---

## File Structure

```
your-project/
│
├── src/
│   ├── app/
│   │   └── components/
│   │       ├── CategoryCard.tsx     ← Uses assets
│   │       ├── ArtistCard.tsx       ← Uses assets
│   │       └── AddItem.tsx          ← Uses assets
│   │
│   └── utils/
│       └── assets.ts                ← Toggle here!
│
├── public/
│   └── assets/
│       └── images/
│           ├── category-music.png          (for production)
│           ├── category-night-parties.png  (for production)
│           ├── category-sports.png         (for production)
│           ├── artist-music.png            (for production)
│           ├── artist-comedy.png           (for production)
│           └── add-item-placeholder.png    (for production)
│
└── Documentation/
    ├── DUAL_ENVIRONMENT_GUIDE.md   ← Complete guide
    ├── TODO.md                     ← Quick checklist
    └── HOW_IT_WORKS.md            ← This file
```

---

## Mode Switching Visual

### Current State: Figma Make Mode Active ✅

```typescript
// /src/utils/assets.ts

// ✅ ACTIVE
import imgCategoryMusic from "figma:asset/...";
export const assets = {
  categoryMusic: imgCategoryMusic,
};

// ❌ COMMENTED OUT
/*
export const assets = {
  categoryMusic: "/assets/images/category-music.png",
};
*/
```

**Result:**
- Works in Figma Make ✅
- Won't work in production ❌ (no images downloaded)

---

### When Deployed: Production Mode Active 🚀

```typescript
// /src/utils/assets.ts

// ❌ COMMENTED OUT
/*
import imgCategoryMusic from "figma:asset/...";
export const assets = {
  categoryMusic: imgCategoryMusic,
};
*/

// ✅ ACTIVE
export const assets = {
  categoryMusic: "/assets/images/category-music.png",
};
```

**Result:**
- Won't work in Figma Make ❌
- Works in production ✅ (images in /public)

---

## Component Usage Example

### CategoryCard.tsx

```typescript
// Import once at top
import { assets } from "../../utils/assets";

// Use anywhere in component
const themeConfig = {
  music: {
    title: 'Music',
    image: assets.categoryMusic,  // ← Automatic!
  },
  'night-parties': {
    title: 'Night Parties',
    image: assets.categoryNightParties,  // ← Automatic!
  },
  // ...
};
```

**How it works:**
1. Component imports `assets` object
2. `assets.categoryMusic` resolves to correct source
3. In Figma Make: Returns `figma:asset/...` blob
4. In Production: Returns `/assets/images/...` path
5. **Component doesn't know or care!** ✅

---

## Why This Solution is Better

### ❌ Alternative 1: Duplicate Code
```typescript
// Bad: Need to edit every component
const imageSrc = process.env.NODE_ENV === 'production'
  ? '/assets/images/music.png'
  : 'figma:asset/...';
```

### ❌ Alternative 2: Manual Switching
```typescript
// Bad: Easy to forget which mode you're in
import img from '/assets/images/music.png'; // breaks in Figma Make
```

### ✅ Our Solution: Centralized Toggle
```typescript
// Good: Change once, works everywhere
import { assets } from '../../utils/assets';
// Toggle mode in ONE file when needed
```

---

## Decision Tree

```
Are you working in Figma Make right now?
│
├── YES → Keep Figma Make mode active
│         → No action needed
│         → Keep building!
│
└── NO → Are you deploying to production?
    │
    ├── YES → Did you download images to /public?
    │   │
    │   ├── YES → Toggle to Production mode
    │   │         → Test locally
    │   │         → Deploy!
    │   │
    │   └── NO → Download images first
    │             → Then toggle mode
    │             → Then deploy
    │
    └── NO → Keep Figma Make mode active
              → Deploy later
```

---

## Environment Detection Logic

```typescript
// Figma Make Mode
import imgCategoryMusic from "figma:asset/8b69...png";
//                        ↑
//              Virtual module - only exists in Figma Make

export const assets = {
  categoryMusic: imgCategoryMusic,
  //             ↑
  //      Resolves to blob URL at runtime
};
```

```typescript
// Production Mode
export const assets = {
  categoryMusic: "/assets/images/category-music.png",
  //             ↑
  //      Relative URL - served from /public folder
};
```

**No environment detection code needed!** The toggle is manual and explicit.

---

## What Happens at Build Time

### Figma Make Mode (Dev Server)
```
1. Vite starts
2. Encounters: import ... from "figma:asset/..."
3. Figma Make plugin resolves virtual module
4. Returns blob URL
5. Image loads ✅
```

### Production Mode (Build)
```
1. Vite builds
2. Encounters: "/assets/images/category-music.png"
3. Copies files from /public to /dist
4. Image path stays the same
5. Image loads ✅
```

---

## Real-World Workflow

### Scenario 1: Working on New Feature
```
Day 1-10: Build feature in Figma Make
  ↓
Figma Make mode: ACTIVE ✅
Images: figma:asset imports
Action: None - keep coding!
```

### Scenario 2: Ready to Deploy
```
Day 11: Feature complete, want to deploy
  ↓
Step 1: Download 6 images (10 min)
Step 2: Toggle to Production mode (1 min)
Step 3: Test locally (5 min)
Step 4: Push to GitHub (2 min)
  ↓
Production mode: ACTIVE ✅
Images: /public/assets/images/
Deployed: Live on Vercel! 🚀
```

### Scenario 3: Back to Development
```
Day 12: Need to add another variant
  ↓
Step 1: Toggle back to Figma Make mode (1 min)
  ↓
Figma Make mode: ACTIVE ✅
Images: figma:asset imports
Continue building!
```

---

## Troubleshooting Flow

```
Images not showing?
│
├── In Figma Make?
│   │
│   ├── Check: Is Figma Make mode ACTIVE?
│   │   ├── YES → Check imports are correct
│   │   └── NO → Toggle to Figma Make mode
│   │
│   └── Still broken?
│       → Check browser console for errors
│       → Verify figma:asset IDs are correct
│
└── In Production?
    │
    ├── Check: Is Production mode ACTIVE?
    │   ├── YES → Check files exist in /public
    │   └── NO → Toggle to Production mode
    │
    ├── Check: Do 6 images exist?
    │   ├── YES → Check filenames match exactly
    │   └── NO → Download images
    │
    └── Still broken?
        → Clear build: rm -rf dist/
        → Rebuild: npm run build
        → Check browser network tab
```

---

## Summary

**The Magic:**
- ✅ One file controls everything (`/src/utils/assets.ts`)
- ✅ Components never change
- ✅ Toggle once, works everywhere
- ✅ Type-safe and maintainable

**The Trade-off:**
- Manual toggle when switching environments
- But it's explicit and foolproof!

**The Result:**
- Work seamlessly in Figma Make ✅
- Deploy anywhere ✅
- Switch anytime ✅

---

**See DUAL_ENVIRONMENT_GUIDE.md for step-by-step instructions!**
