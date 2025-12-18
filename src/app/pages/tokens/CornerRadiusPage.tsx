import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { radius } from "../../utils/tokens";

export default function CornerRadiusPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const radiusEntries = Object.entries(radius).map(([name, value]) => ({
    name,
    value,
    description: getRadiusDescription(name),
    cssVar: getCSSVariable(name),
  }));

  function getCSSVariable(name: string): string | null {
    const cssVarMap: Record<string, string> = {
      base: '--radius',
      lg: '--radius-lg',
      sm: '--radius-sm',
      md: '--radius-md',
      xl: '--radius-xl',
      card: '--radius-card',
      button: '--radius-button',
    };
    return cssVarMap[name] || null;
  }

  function getRadiusDescription(name: string): string {
    const descriptions: Record<string, string> = {
      none: 'No border radius - sharp corners',
      sm: 'Small radius for subtle roundedness',
      base: 'Base radius for most UI elements',
      md: 'Medium radius for cards and containers',
      lg: 'Large radius for prominent surfaces',
      xl: 'Extra large radius for hero cards',
      '2xl': 'Double extra large radius for special surfaces',
      '3xl': 'Triple extra large radius for maximum impact',
      full: 'Fully rounded - creates circles or pills',
    };
    return descriptions[name] || 'Border radius value';
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
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
              Corner Radius System
            </h1>
            <p style={{ color: 'var(--card-foreground)', maxWidth: '800px' }}>
              A comprehensive border radius system from sharp corners to fully rounded elements. Use these values to create
              visual consistency and hierarchy across buttons, cards, and containers.
            </p>
          </div>

          {/* Radius Scale */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Radius Scale
            </h2>
            <div className="grid gap-4">
              {radiusEntries.map((item) => (
                <div
                  key={item.name}
                  className="p-6 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Visual representation */}
                    <div className="flex-shrink-0">
                      <div
                        style={{
                          width: '120px',
                          height: '120px',
                          backgroundColor: 'var(--primary)',
                          borderRadius: item.value,
                          border: '2px solid var(--primary-foreground)',
                        }}
                      />
                    </div>

                    {/* Token Info */}
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ color: 'var(--foreground)' }}>
                        Radius {item.name}
                      </h3>
                      <p className="mb-3" style={{ color: 'var(--card-foreground)', fontSize: 'var(--text-base)' }}>
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => copyToClipboard(`radius.${item.name}`)}
                          className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                          style={{
                            backgroundColor: 'var(--muted)',
                            color: 'var(--muted-foreground)',
                            borderRadius: 'var(--radius)',
                            fontSize: '14px',
                            fontFamily: 'monospace',
                          }}
                        >
                          {copiedToken === `radius.${item.name}` ? (
                            <>
                              <Check size={14} />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>radius.{item.name}</span>
                            </>
                          )}
                        </button>
                        <div
                          className="inline-flex items-center px-3 py-2"
                          style={{
                            backgroundColor: 'var(--muted)',
                            color: 'var(--muted-foreground)',
                            borderRadius: 'var(--radius)',
                            fontSize: '14px',
                            fontFamily: 'monospace',
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Visual Comparison
            </h2>
            <div
              className="p-8"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {radiusEntries.slice(0, -1).map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-3">
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: item.value,
                      }}
                    />
                    <div
                      style={{
                        color: 'var(--muted-foreground)',
                        fontSize: '14px',
                        textAlign: 'center',
                      }}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pill Example */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Pill Shape (radius.full)
            </h2>
            <div
              className="p-8"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: radius.full,
                    }}
                  />
                  <span style={{ color: 'var(--card-foreground)' }}>
                    Perfect circle (square with radius.full)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      borderRadius: radius.full,
                      fontWeight: '600',
                    }}
                  >
                    Button
                  </div>
                  <span style={{ color: 'var(--card-foreground)' }}>
                    Pill-shaped button (rectangle with radius.full)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Common Use Cases
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Buttons
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Standard: radius.base - radius.md</div>
                  <div>• Rounded: radius.lg - radius.xl</div>
                  <div>• Pill: radius.full</div>
                  <div>• Sharp: radius.none - radius.sm</div>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Cards & Containers
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Small cards: radius.md - radius.lg</div>
                  <div>• Large cards: radius.lg - radius.xl</div>
                  <div>• Hero sections: radius.xl - radius.2xl</div>
                  <div>• Modal dialogs: radius.lg - radius.xl</div>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Input Fields
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Text inputs: radius.base - radius.md</div>
                  <div>• Text areas: radius.md - radius.lg</div>
                  <div>• Search bars: radius.full</div>
                  <div>• Select dropdowns: radius.base - radius.md</div>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Images & Media
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Thumbnails: radius.sm - radius.base</div>
                  <div>• Product images: radius.md - radius.lg</div>
                  <div>• Profile avatars: radius.full</div>
                  <div>• Hero images: radius.xl - radius.2xl</div>
                </div>
              </div>
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
                Import radius values from the tokens utility to use throughout your application:
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
                  {"import { radius } from '@/utils/tokens';"}<br />
                  <br />
                  {"// Use in inline styles"}<br />
                  {"<div style={{ borderRadius: radius.md }}>Card</div>"}<br />
                  <br />
                  {"// Create a button with rounded corners"}<br />
                  {"<button style={{ borderRadius: radius.lg }}>Click</button>"}<br />
                  <br />
                  {"// Create a pill button"}<br />
                  {"<button style={{ borderRadius: radius.full }}>Pill</button>"}
                </div>
              </div>
              <p>
                All radius values are defined in <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/app/utils/tokens.ts</code>.
                Values range from sharp corners (0) to fully rounded (9999px).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}