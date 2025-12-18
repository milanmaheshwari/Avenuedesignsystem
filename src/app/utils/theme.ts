import { neutralPalette, baseColors } from './colors';
import { typography, spacing, radius, shadows } from './tokens';

// Semantic color mappings (replacing CSS variables from theme.css)
export const semanticColors = {
  // Base colors
  background: neutralPalette[950],  // #0a0a0a (was var(--background))
  foreground: neutralPalette[50],  // #fafafa (was var(--foreground))
  
  // Card colors
  card: 'transparent',  // (was var(--card))
  cardForeground: 'rgba(250, 250, 250, 0.9)',  // (was var(--card-foreground))
  
  // Popover colors
  popover: 'transparent',  // (was var(--popover))
  popoverForeground: neutralPalette[50],  // (was var(--popover-foreground))
  
  // Primary colors
  primary: baseColors.indigo[600],  // #4f46e5 (was var(--primary))
  primaryForeground: baseColors.indigo[50],  // #eef2ff (was var(--primary-foreground))
  
  // Secondary colors
  secondary: 'transparent',  // (was var(--secondary))
  secondaryForeground: 'rgba(250, 250, 250, 0.75)',  // (was var(--secondary-foreground))
  
  // Muted colors
  muted: 'transparent',  // (was var(--muted))
  mutedForeground: neutralPalette[400],  // #a3a3a3 (was var(--muted-foreground))
  
  // Accent colors
  accent: baseColors.amber[600],  // #d97706 (was var(--accent))
  accentForeground: baseColors.amber[50],  // #fffbeb (was var(--accent-foreground))
  
  // Destructive colors
  destructive: baseColors.error[600],  // #dc2626 (was var(--destructive))
  destructiveForeground: baseColors.error[50],  // #fef2f2 (was var(--destructive-foreground))
  
  // Border and input colors
  border: 'rgba(250, 250, 250, 0.05)',  // (was var(--border))
  input: 'transparent',  // (was var(--input))
  inputBackground: neutralPalette[800],  // #262626 (was var(--input-background))
  ring: baseColors.indigo[600],  // #4f46e5 (was var(--ring))
  
  // Sidebar colors
  sidebar: neutralPalette[900],  // #171717 (was var(--sidebar))
  sidebarForeground: 'rgba(250, 250, 250, 0.9)',  // (was var(--sidebar-foreground))
  sidebarPrimary: baseColors.indigo[600],  // (was var(--sidebar-primary))
  sidebarPrimaryForeground: baseColors.indigo[50],  // (was var(--sidebar-primary-foreground))
  sidebarAccent: neutralPalette[600],  // #525252 (was var(--sidebar-accent))
  sidebarAccentForeground: neutralPalette[50],  // (was var(--sidebar-accent-foreground))
  sidebarBorder: 'rgba(250, 250, 250, 0.1)',  // (was var(--sidebar-border))
  sidebarRing: baseColors.indigo[600],  // (was var(--sidebar-ring))
  
  // Chart colors
  chart1: baseColors.indigo[600],  // #4f46e5
  chart2: baseColors.fuchsia[600],  // #c026d3
  chart3: baseColors.amber[600],  // #ca8a04
  chart4: baseColors.error[600],  // #dc2626
  chart5: baseColors.success[600],  // #16a34a
};

// Re-export everything for convenience
export { typography, spacing, radius, shadows };
export { neutralPalette, baseColors, categoryColors, getCategoryColor } from './colors';

