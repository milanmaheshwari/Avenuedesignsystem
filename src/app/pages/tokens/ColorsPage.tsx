import { Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  primaryBrandGradient,
  neutralPalette,
  baseColors,
  categoryColors,
  type ColorPalette,
  type EventCategory,
} from "../../utils/colors";

export default function ColorsPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const renderPalette = (palette: ColorPalette, name: string) => {
    const shades = Object.entries(palette) as [string, string][];
    return (
      <div className="mb-6">
        <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
          {name}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-2">
          {shades.map(([shade, color]) => (
            <button
              key={shade}
              onClick={() => copyToClipboard(color)}
              className="group relative flex flex-col items-center transition-transform hover:scale-105"
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: color,
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                }}
              />
              <div className="mt-2 text-center">
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-satoshi)',
                  }}
                >
                  {shade}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'monospace',
                  }}
                >
                  {color}
                </div>
              </div>
              {copiedToken === color && (
                <div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 flex items-center gap-1"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                  }}
                >
                  <Check size={12} />
                  <span>Copied</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderGradient = (gradient: string, label: string) => {
    return (
      <button
        onClick={() => copyToClipboard(gradient)}
        className="group relative transition-transform hover:scale-105"
        style={{ cursor: 'pointer' }}
      >
        <div
          style={{
            width: '100%',
            height: '80px',
            background: gradient,
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}
        />
        <div
          className="mt-2 text-center"
          style={{
            fontSize: '12px',
            color: 'var(--muted-foreground)',
            fontFamily: 'var(--font-satoshi)',
          }}
        >
          {label}
        </div>
        {copiedToken === gradient && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 flex items-center gap-2"
            style={{
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
              borderRadius: 'var(--radius)',
              fontSize: '14px',
            }}
          >
            <Check size={14} />
            <span>Copied</span>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <a
                href="/"
                className="inline-flex items-center gap-2 transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <span>← Back to Home</span>
              </a>
            </div>
            <h1 className="mb-4" style={{ color: 'var(--foreground)' }}>
              Color System
            </h1>
            <p style={{ color: 'var(--card-foreground)', maxWidth: '900px' }}>
              A comprehensive color system with category-specific palettes, gradients, and semantic colors.
              Each category includes a full palette from shade 50 to 950, plus multiple gradient variations.
            </p>
          </div>

          {/* Brand Colors */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Brand Colors
            </h2>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              {renderPalette(primaryBrandGradient.palette, 'Primary Brand')}
              <div className="mt-6">
                <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Brand Gradient
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {renderGradient(primaryBrandGradient.gradient, 'Primary Gradient')}
                </div>
              </div>
            </div>
          </div>

          {/* Neutral Palette */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Neutral Palette
            </h2>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              {renderPalette(neutralPalette, 'Neutral')}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Semantic Colors
            </h2>
            <div className="grid gap-6">
              {(['success', 'warning', 'error', 'info'] as const).map((semantic) => (
                <div
                  key={semantic}
                  className="p-6"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  {renderPalette(
                    baseColors[semantic],
                    semantic.charAt(0).toUpperCase() + semantic.slice(1)
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Category Colors */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Category Colors
            </h2>
            <p className="mb-6" style={{ color: 'var(--card-foreground)' }}>
              Event category colors with full palettes and gradient variations. Each category includes subtle, medium, bold, radial, diagonal, and mesh gradient options.
            </p>
            <div className="grid gap-8">
              {(Object.keys(categoryColors) as EventCategory[]).map((category) => {
                const categoryColor = categoryColors[category];
                return (
                  <div
                    key={category}
                    className="p-6"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-card)',
                    }}
                  >
                    <h3 className="mb-4" style={{ color: 'var(--foreground)' }}>
                      {categoryColor.name}
                    </h3>
                    {renderPalette(categoryColor.palette, 'Palette')}
                    
                    <div className="mt-6">
                      <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                        Gradient Variations
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {renderGradient(categoryColor.gradients.subtle, 'Subtle')}
                        {renderGradient(categoryColor.gradients.medium, 'Medium')}
                        {renderGradient(categoryColor.gradients.bold, 'Bold')}
                        {renderGradient(categoryColor.gradients.radial, 'Radial')}
                        {renderGradient(categoryColor.gradients.diagonal, 'Diagonal')}
                        {renderGradient(categoryColor.gradients.mesh, 'Mesh')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Spectrum Colors */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Spectrum Colors
            </h2>
            <p className="mb-6" style={{ color: 'var(--card-foreground)' }}>
              Extended color palette for additional UI needs and creative flexibility.
            </p>
            <div className="grid gap-6">
              {([
                'fuchsia',
                'purple',
                'violet',
                'indigo',
                'cyan',
                'teal',
                'emerald',
                'lime',
                'yellow',
                'amber',
                'orange',
                'rose',
                'pink',
                'brown',
              ] as const).map((color) => (
                <div
                  key={color}
                  className="p-6"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  {renderPalette(
                    baseColors[color],
                    color.charAt(0).toUpperCase() + color.slice(1)
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guide */}
          <div
            className="mt-12 p-8"
            style={{
              backgroundColor: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <h3 className="mb-4" style={{ color: 'var(--foreground)' }}>
              Usage Guide
            </h3>
            <div style={{ color: 'var(--muted-foreground)' }}>
              <p className="mb-4">
                Import colors from the color utility to use throughout your application:
              </p>
              <div
                className="p-4 mb-4"
                style={{
                  backgroundColor: 'var(--background)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                }}
              >
                <div style={{ color: 'var(--card-foreground)' }}>
                  {"import { categoryColors, getCategoryColor } from '@/utils/colors';"}<br />
                  <br />
                  {"// Get category color"}<br />
                  {"const musicColor = getCategoryColor('music');"}<br />
                  <br />
                  {"// Use palette"}<br />
                  {"backgroundColor: musicColor.palette[500]"}<br />
                  <br />
                  {"// Use gradient"}<br />
                  {"background: musicColor.gradients.medium"}
                </div>
              </div>
              <p>
                All colors are defined in <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/app/utils/colors.ts</code>.
                Each category includes 11 shades (50-950) and 6 gradient variations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
