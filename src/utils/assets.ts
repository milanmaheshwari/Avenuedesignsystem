/**
 * Asset Utility - Works in both Figma Make and Production
 * 
 * This utility provides a centralized way to reference assets that works in:
 * - Figma Make environment (uses figma:asset virtual modules)
 * - Production builds (uses public asset paths)
 * 
 * HOW IT WORKS:
 * - In Figma Make: Import this file, it will use figma:asset imports
 * - In Production: The vite build process will replace with public paths
 * 
 * SETUP FOR PRODUCTION:
 * 1. Download images from Figma Make
 * 2. Save to /public/assets/images/
 * 3. Uncomment the PUBLIC_ASSETS section below
 * 4. Comment out the FIGMA_ASSETS section
 * 
 * Usage:
 *   import { assets } from '../utils/assets';
 *   <img src={assets.categoryMusic} />
 */

// ==========================================
// FIGMA MAKE MODE (For Figma environment)
// ==========================================
// Use this section when running in Figma Make

/*
import imgCategoryMusic from "figma:asset/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png";
import imgCategoryNightParties from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";
import imgCategorySports from "figma:asset/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png";
import imgArtistMusic from "figma:asset/fae9216881de499113dd7791f82ff50e3aaa7af1.png";
import imgArtistComedy from "figma:asset/fd092aafde0b7229084b06b4cb61662024365b50.png";
import imgAddItemPlaceholder from "figma:asset/a5561ce6332b43441a50ac1c989d165d124b3efd.png";

export const assets = {
  categoryMusic: imgCategoryMusic,
  categoryNightParties: imgCategoryNightParties,
  categorySports: imgCategorySports,
  artistMusic: imgArtistMusic,
  artistComedy: imgArtistComedy,
  addItemPlaceholder: imgAddItemPlaceholder,
};
*/


// ==========================================
// PRODUCTION MODE (Current - Using Local Assets)
// ==========================================
// Using local images from public/assets/images/

export const assets = {
  categoryMusic: "/assets/images/category-music.png",
  categoryNightParties: "/assets/images/category-night-parties.png",
  categorySports: "/assets/images/category-sports.png",
  artistMusic: "/assets/images/artist-music.png",
  artistComedy: "/assets/images/artist-comedy.png",
  addItemPlaceholder: "/assets/images/add-item-placeholder.png",
};
