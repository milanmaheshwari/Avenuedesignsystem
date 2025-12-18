# ⚡ Quick Start Guide

**60 seconds to understand the dual-environment setup.**

---

## What Is This?

Your images now work in **BOTH** Figma Make AND production.

---

## How Does It Work?

**One file controls everything:**
```
/src/utils/assets.ts
```

**Two modes to toggle:**
- ✅ Figma Make mode (active now)
- 🚀 Production mode (when deploying)

---

## Current State

✅ **Figma Make Mode Active**

```typescript
// In /src/utils/assets.ts
import imgCategoryMusic from "figma:asset/...";
export const assets = { categoryMusic: imgCategoryMusic };
```

**What this means:**
- Images work in Figma Make ✅
- No action needed ✅
- Keep working normally ✅

---

## When Deploying

🚀 **Switch to Production Mode**

```typescript
// In /src/utils/assets.ts
export const assets = {
  categoryMusic: "/assets/images/category-music.png"
};
```

**What you need:**
1. Download 6 images to `/public/assets/images/`
2. Toggle mode in `/src/utils/assets.ts`
3. Test, commit, push!

---

## Quick Commands

### Keep Working (Now)
```bash
npm run dev
# Everything works! ✅
```

### Deploy (Later)
```bash
# 1. Download images
# 2. Toggle /src/utils/assets.ts to Production mode
npm run build
npm run preview
git push
```

---

## Files to Read

**Must read:**
1. **ANSWER.md** - Complete answer to your question (5 min)
2. **TODO.md** - What to do when deploying (2 min)

**For details:**
3. **DUAL_ENVIRONMENT_GUIDE.md** - Complete guide (10 min)

**Index:**
4. **README_DOCS.md** - All 16 documentation files

---

## One-Minute Summary

| Item | Status |
|------|--------|
| **Current mode** | Figma Make ✅ |
| **Works in Figma Make?** | Yes ✅ |
| **Works in Production?** | Not yet (need images) |
| **Action needed now?** | No ✅ |
| **When deploying?** | Download images + toggle mode |

---

## The Magic

**All components use the same code:**
```typescript
import { assets } from "../../utils/assets";
<img src={assets.categoryMusic} />
```

**Automatically works in:**
- Figma Make (via `figma:asset`)
- Production (via `/public` paths)

**Toggle once, works everywhere!** ✨

---

## Next Steps

### Right Now
**Nothing!** Keep working in Figma Make. ✅

### When Ready to Deploy
1. Read **TODO.md** (2 min)
2. Follow steps to download images
3. Toggle mode in `/src/utils/assets.ts`
4. Deploy! 🚀

---

## Documentation

| File | Time | Purpose |
|------|------|---------|
| **QUICK_START.md** | 1 min | This file |
| **ANSWER.md** | 5 min | Complete answer |
| **TODO.md** | 2 min | Deployment checklist |
| **README_DOCS.md** | 2 min | All docs index |

---

**Start with ANSWER.md for the complete story!** 📖
