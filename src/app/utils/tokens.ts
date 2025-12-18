// Typography System - Satoshi Typeface
// These values align with CSS variables defined in /src/styles/theme.css
export const typography = {
  fontFamily: {
    primary: 'var(--font-satoshi)',
    mono: 'monospace'
  },
  fontSize: {
    // CSS variable based sizes
    h1: 'var(--text-h1)',      // 60px
    h2: 'var(--text-h2)',      // 36px
    h3: 'var(--text-h3)',      // 24px
    h4: 'var(--text-h4)',      // 20px
    base: 'var(--text-base)',  // 16px
    label: 'var(--text-label)', // 12px
    
    // Additional sizes for granular control
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem'       // 128px
  },
  fontWeight: {
    normal: 'var(--font-weight-normal)',   // 400
    medium: 'var(--font-weight-medium)',   // 500
    bold: 'var(--font-weight-bold)',       // 700
    
    // Additional weights
    light: '300',
    semibold: '600',
    black: '900'
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};

// Typography Presets for common use cases
export const typographyPresets = {
  // Display
  display1: {
    fontSize: typography.fontSize['9xl'],
    fontWeight: typography.fontWeight.black,
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.tighter
  },
  display2: {
    fontSize: typography.fontSize['8xl'],
    fontWeight: typography.fontWeight.black,
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.tighter
  },
  // Headings - Use CSS variables
  h1: {
    fontSize: typography.fontSize.h1,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight
  },
  h2: {
    fontSize: typography.fontSize.h2,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight
  },
  h3: {
    fontSize: typography.fontSize.h3,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.tight
  },
  h4: {
    fontSize: typography.fontSize.h4,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal
  },
  h5: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal
  },
  h6: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal
  },
  // Body
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    letterSpacing: typography.letterSpacing.normal
  },
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal
  },
  // Labels
  label: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.wide
  },
  labelSmall: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.wider
  },
  // Special
  button: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.wide
  },
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal
  },
  overline: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.widest,
    textTransform: 'uppercase' as const
  }
};

// Spacing System - 4px Grid
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  11: '2.75rem',  // 44px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
  36: '9rem',     // 144px
  40: '10rem',    // 160px
  44: '11rem',    // 176px
  48: '12rem',    // 192px
  52: '13rem',    // 208px
  56: '14rem',    // 224px
  60: '15rem',    // 240px
  64: '16rem',    // 256px
  72: '18rem',    // 288px
  80: '20rem',    // 320px
  96: '24rem'     // 384px
};

// Corner Radius System
// These values align with CSS variables defined in /src/styles/theme.css
export const radius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',  // --radius-sm (8px)
  base: 'var(--radius)',              // 12px
  md: 'calc(var(--radius) - 2px)',  // --radius-md (10px)
  lg: 'var(--radius)',                // --radius-lg (12px)
  xl: 'calc(var(--radius) + 4px)',  // --radius-xl (16px)
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  card: 'var(--radius-card)',         // 16px
  button: 'var(--radius-button)',     // 12px
  full: '9999px'
};

// Shadow System
export const shadows = {
  // Elevation shadows
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: 'var(--elevation-sm)',  // Use CSS variable
  base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.5)',
  
  // Glow shadows (colored)
  glowPurple: '0 0 20px rgba(163, 230, 53, 0.3), 0 0 40px rgba(163, 230, 53, 0.15)',
  glowBlue: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)',
  glowPink: '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.15)',
  glowGreen: '0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.15)',
  
  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  innerLg: 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)',
  
  // No shadow
  none: '0 0 #0000'
};

// Component-specific shadow combinations
export const componentShadows = {
  card: shadows.sm,
  cardHover: shadows.md,
  button: shadows.sm,
  buttonHover: shadows.base,
  dropdown: shadows.lg,
  modal: shadows.xl,
  tooltip: shadows.base,
  floatingAction: shadows['2xl']
};

// Breakpoints (for reference in responsive design)
export const breakpoints = {
  mobile: '320px',
  mobileLg: '428px',
  tablet: '768px',
  desktop: '1024px',
  desktopLg: '1280px',
  desktopXl: '1536px'
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70
};