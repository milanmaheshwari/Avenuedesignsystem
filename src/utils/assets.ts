/**
 * Asset Utility - Production Ready with Unsplash Placeholders
 * 
 * This utility provides centralized asset management that works for:
 * - Vercel deployments
 * - GitHub Pages
 * - Any static hosting
 * 
 * CURRENT MODE: Using Unsplash placeholder images
 * These images will work immediately when deployed to Vercel or GitHub Pages.
 * 
 * TO USE YOUR OWN IMAGES:
 * 1. Save your PNG files to /public/assets/images/ with these exact names:
 *    - category-music.png
 *    - category-night-parties.png
 *    - category-sports.png
 *    - artist-music.png
 *    - artist-comedy.png
 *    - add-item-placeholder.png
 * 2. The paths below will automatically use them
 * 
 * Usage:
 *   import { assets } from '../utils/assets';
 *   <img src={assets.categoryMusic} alt="Music" />
 */

// ==========================================
// PRODUCTION MODE (Active)
// ==========================================
// Using Unsplash images as placeholders - replace with your own images in /public/assets/images/

/*export const assets = {
  categoryMusic: "https://images.unsplash.com/photo-1567779013473-6cbdff716235?w=400&h=400&fit=crop",
  categoryNightParties: "https://images.unsplash.com/photo-1657054711964-a0eb014c2df1?w=400&h=400&fit=crop",
  categorySports: "https://images.unsplash.com/photo-1565483276060-e6730c0cc6a1?w=400&h=400&fit=crop",
  artistMusic: "https://images.unsplash.com/photo-1693835742490-c0dc6e4889ce?w=400&h=400&fit=crop",
  artistComedy: "https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?w=400&h=400&fit=crop",
  addItemPlaceholder: "https://images.unsplash.com/photo-1646038572815-43fe759e459b?w=400&h=400&fit=crop",
};*/

// ==========================================
// TO USE LOCAL IMAGES FROM /public/assets/images/
// ==========================================
// Uncomment this section after placing your PNG files in /public/assets/images/
// (And comment out the Unsplash URLs above)


export const assets = {
  categoryMusic: "/assets/images/category-music.png",
  categoryNightParties: "/assets/images/category-night-parties.png",
  categorySports: "/assets/images/category-sports.png",
  artistMusic: "/assets/images/artist-music.png",
  artistComedy: "/assets/images/artist-comedy.png",
  addItemPlaceholder: "/assets/images/add-item-placeholder.png",
};



// ==========================================
// FIGMA MAKE MODE (Disabled)
// ==========================================
// This was the original Figma Make import mode - no longer needed

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