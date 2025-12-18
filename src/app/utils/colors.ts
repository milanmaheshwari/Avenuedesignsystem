export type EventCategory = 'music' | 'nightlife' | 'sports' | 'wellness' | 'theme-parks' | 'coffee' | 'comedy' | 'movies';

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;  // Primary
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface GradientSet {
  subtle: string;
  medium: string;
  bold: string;
  radial: string;
  diagonal: string;
  mesh: string;
}

export interface CategoryColor {
  name: string;
  palette: ColorPalette;
  gradients: GradientSet;
  // Legacy support
  gradient: string;
  topColor: string;
  bottomColor: string;
  accentColor: string;
}

// Primary brand color - Purple-Blue for vibrant feel
export const primaryBrandGradient = {
  name: 'Brand Primary',
  gradient: 'linear-gradient(135deg, #6366f1 0%, #1e1b4b 100%)',
  topColor: '#6366f1',
  bottomColor: '#1e1b4b',
  accentColor: '#818cf8',
  palette: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'
  }
};

// Neutral palette for backgrounds and surfaces
export const neutralPalette: ColorPalette = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a'
};

// Base color system - Core colors for UI elements
export const baseColors = {
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },
  // Spectrum colors
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e'
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764'
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065'
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344'
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e'
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22'
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05'
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#d97706',
    800: '#b45309',
    900: '#92400e',
    950: '#78350f'
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407'
  },
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519'
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
    950: '#500724'
  },
  brown: {
    50: '#fdf8f6',
    100: '#f2e8e5',
    200: '#eaddd7',
    300: '#e0cec7',
    400: '#d2bab0',
    500: '#bfa094',
    600: '#a18072',
    700: '#85644f',
    800: '#6f4e3e',
    900: '#5c3d2e',
    950: '#3e1f10'
  }
};

// Category-specific color system with extended palettes
export const categoryColors: Record<EventCategory, CategoryColor> = {
  music: {
    name: 'Music',
    palette: baseColors.fuchsia,
    gradients: {
      subtle: 'linear-gradient(135deg, #e879f9 0%, #701a75 100%)',
      medium: 'linear-gradient(135deg, #d946ef 0%, #4a044e 100%)',
      bold: 'linear-gradient(135deg, #f0abfc 0%, #86198f 100%)',
      radial: 'radial-gradient(circle at top right, #d946ef 0%, #4a044e 100%)',
      diagonal: 'linear-gradient(45deg, #d946ef 0%, #701a75 50%, #4a044e 100%)',
      mesh: 'radial-gradient(at 40% 20%, #d946ef 0px, transparent 50%), radial-gradient(at 80% 0%, #e879f9 0px, transparent 50%), radial-gradient(at 0% 50%, #4a044e 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #d946ef 0%, #4a044e 100%)',
    topColor: '#d946ef',
    bottomColor: '#4a044e',
    accentColor: '#e879f9'
  },
  nightlife: {
    name: 'Night Parties',
    palette: baseColors.purple,
    gradients: {
      subtle: 'linear-gradient(135deg, #c084fc 0%, #581c87 100%)',
      medium: 'linear-gradient(135deg, #a855f7 0%, #3b0764 100%)',
      bold: 'linear-gradient(135deg, #d8b4fe 0%, #6b21a8 100%)',
      radial: 'radial-gradient(circle at top right, #a855f7 0%, #3b0764 100%)',
      diagonal: 'linear-gradient(45deg, #a855f7 0%, #581c87 50%, #3b0764 100%)',
      mesh: 'radial-gradient(at 40% 20%, #a855f7 0px, transparent 50%), radial-gradient(at 80% 0%, #c084fc 0px, transparent 50%), radial-gradient(at 0% 50%, #3b0764 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #a855f7 0%, #3b0764 100%)',
    topColor: '#a855f7',
    bottomColor: '#3b0764',
    accentColor: '#c084fc'
  },
  sports: {
    name: 'Sports',
    palette: baseColors.orange,
    gradients: {
      subtle: 'linear-gradient(135deg, #fb923c 0%, #7c2d12 100%)',
      medium: 'linear-gradient(135deg, #f97316 0%, #431407 100%)',
      bold: 'linear-gradient(135deg, #fdba74 0%, #9a3412 100%)',
      radial: 'radial-gradient(circle at top right, #f97316 0%, #431407 100%)',
      diagonal: 'linear-gradient(45deg, #f97316 0%, #7c2d12 50%, #431407 100%)',
      mesh: 'radial-gradient(at 40% 20%, #f97316 0px, transparent 50%), radial-gradient(at 80% 0%, #fb923c 0px, transparent 50%), radial-gradient(at 0% 50%, #431407 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #f97316 0%, #431407 100%)',
    topColor: '#f97316',
    bottomColor: '#431407',
    accentColor: '#fb923c'
  },
  wellness: {
    name: 'Wellness',
    palette: baseColors.success,
    gradients: {
      subtle: 'linear-gradient(135deg, #4ade80 0%, #14532d 100%)',
      medium: 'linear-gradient(135deg, #22c55e 0%, #052e16 100%)',
      bold: 'linear-gradient(135deg, #86efac 0%, #166534 100%)',
      radial: 'radial-gradient(circle at top right, #22c55e 0%, #052e16 100%)',
      diagonal: 'linear-gradient(45deg, #22c55e 0%, #14532d 50%, #052e16 100%)',
      mesh: 'radial-gradient(at 40% 20%, #22c55e 0px, transparent 50%), radial-gradient(at 80% 0%, #4ade80 0px, transparent 50%), radial-gradient(at 0% 50%, #052e16 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #22c55e 0%, #052e16 100%)',
    topColor: '#22c55e',
    bottomColor: '#052e16',
    accentColor: '#4ade80'
  },
  'theme-parks': {
    name: 'Theme Parks',
    palette: baseColors.info,
    gradients: {
      subtle: 'linear-gradient(135deg, #60a5fa 0%, #1e3a8a 100%)',
      medium: 'linear-gradient(135deg, #3b82f6 0%, #172554 100%)',
      bold: 'linear-gradient(135deg, #93c5fd 0%, #1e40af 100%)',
      radial: 'radial-gradient(circle at top right, #3b82f6 0%, #172554 100%)',
      diagonal: 'linear-gradient(45deg, #3b82f6 0%, #1e3a8a 50%, #172554 100%)',
      mesh: 'radial-gradient(at 40% 20%, #3b82f6 0px, transparent 50%), radial-gradient(at 80% 0%, #60a5fa 0px, transparent 50%), radial-gradient(at 0% 50%, #172554 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #172554 100%)',
    topColor: '#3b82f6',
    bottomColor: '#172554',
    accentColor: '#60a5fa'
  },
  coffee: {
    name: 'Coffee Parties',
    palette: baseColors.brown,
    gradients: {
      subtle: 'linear-gradient(135deg, #d2bab0 0%, #5c3d2e 100%)',
      medium: 'linear-gradient(135deg, #bfa094 0%, #3e1f10 100%)',
      bold: 'linear-gradient(135deg, #e0cec7 0%, #6f4e3e 100%)',
      radial: 'radial-gradient(circle at top right, #bfa094 0%, #3e1f10 100%)',
      diagonal: 'linear-gradient(45deg, #bfa094 0%, #5c3d2e 50%, #3e1f10 100%)',
      mesh: 'radial-gradient(at 40% 20%, #bfa094 0px, transparent 50%), radial-gradient(at 80% 0%, #d2bab0 0px, transparent 50%), radial-gradient(at 0% 50%, #3e1f10 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #bfa094 0%, #3e1f10 100%)',
    topColor: '#bfa094',
    bottomColor: '#3e1f10',
    accentColor: '#d2bab0'
  },
  comedy: {
    name: 'Comedy',
    palette: baseColors.yellow,
    gradients: {
      subtle: 'linear-gradient(135deg, #facc15 0%, #92400e 100%)',
      medium: 'linear-gradient(135deg, #eab308 0%, #78350f 100%)',
      bold: 'linear-gradient(135deg, #fde047 0%, #b45309 100%)',
      radial: 'radial-gradient(circle at top right, #eab308 0%, #78350f 100%)',
      diagonal: 'linear-gradient(45deg, #eab308 0%, #92400e 50%, #78350f 100%)',
      mesh: 'radial-gradient(at 40% 20%, #eab308 0px, transparent 50%), radial-gradient(at 80% 0%, #fde047 0px, transparent 50%), radial-gradient(at 0% 50%, #78350f 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #eab308 0%, #78350f 100%)',
    topColor: '#eab308',
    bottomColor: '#78350f',
    accentColor: '#fde047'
  },
  movies: {
    name: 'Movies',
    palette: baseColors.error,
    gradients: {
      subtle: 'linear-gradient(135deg, #f87171 0%, #7f1d1d 100%)',
      medium: 'linear-gradient(135deg, #ef4444 0%, #450a0a 100%)',
      bold: 'linear-gradient(135deg, #fca5a5 0%, #991b1b 100%)',
      radial: 'radial-gradient(circle at top right, #ef4444 0%, #450a0a 100%)',
      diagonal: 'linear-gradient(45deg, #ef4444 0%, #7f1d1d 50%, #450a0a 100%)',
      mesh: 'radial-gradient(at 40% 20%, #ef4444 0px, transparent 50%), radial-gradient(at 80% 0%, #f87171 0px, transparent 50%), radial-gradient(at 0% 50%, #450a0a 0px, transparent 50%)'
    },
    gradient: 'linear-gradient(135deg, #ef4444 0%, #450a0a 100%)',
    topColor: '#ef4444',
    bottomColor: '#450a0a',
    accentColor: '#f87171'
  }
};

export function getCategoryColor(category: EventCategory): CategoryColor {
  return categoryColors[category];
}
