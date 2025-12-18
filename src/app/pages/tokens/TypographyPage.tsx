import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { typography, typographyPresets } from "../../utils/tokens";

export default function TypographyPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
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
              Typography System
            </h1>
            <p style={{ color: 'var(--card-foreground)', maxWidth: '900px' }}>
              A comprehensive typography system using the Satoshi typeface with carefully crafted presets for every use case.
              Includes font sizes from 12px to 128px, weight variations, and preset combinations for headings, body text, and labels.
            </p>
          </div>

          {/* Typography Presets */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Typography Presets
            </h2>
            <p className="mb-6" style={{ color: 'var(--card-foreground)' }}>
              Pre-configured combinations of font size, weight, line height, and letter spacing for common use cases.
            </p>
            <div className="grid gap-4">
              {/* Display */}
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h3 className="mb-6" style={{ color: 'var(--foreground)' }}>
                  Display
                </h3>
                {(['display1', 'display2'] as const).map((preset) => (
                  <div key={preset} className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div
                      className="mb-4"
                      style={{
                        fontFamily: typography.fontFamily.primary,
                        ...typographyPresets[preset],
                      }}
                    >
                      The quick brown fox
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => copyToClipboard(preset)}
                        className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {copiedToken === preset ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>{preset}</span>
                          </>
                        )}
                      </button>
                      <span
                        className="inline-flex items-center px-3 py-2"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                        }}
                      >
                        {typographyPresets[preset].fontSize} / {typographyPresets[preset].fontWeight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Headings */}
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h3 className="mb-6" style={{ color: 'var(--foreground)' }}>
                  Headings
                </h3>
                {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((preset) => (
                  <div key={preset} className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div
                      className="mb-4"
                      style={{
                        fontFamily: typography.fontFamily.primary,
                        color: 'var(--foreground)',
                        ...typographyPresets[preset],
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => copyToClipboard(preset)}
                        className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {copiedToken === preset ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>{preset}</span>
                          </>
                        )}
                      </button>
                      <span
                        className="inline-flex items-center px-3 py-2"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                        }}
                      >
                        {typographyPresets[preset].fontSize} / {typographyPresets[preset].fontWeight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h3 className="mb-6" style={{ color: 'var(--foreground)' }}>
                  Body Text
                </h3>
                {(['bodyLarge', 'body', 'bodySmall'] as const).map((preset) => (
                  <div key={preset} className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div
                      className="mb-4"
                      style={{
                        fontFamily: typography.fontFamily.primary,
                        color: 'var(--card-foreground)',
                        ...typographyPresets[preset],
                      }}
                    >
                      The quick brown fox jumps over the lazy dog. A comprehensive typography system using the Satoshi typeface with carefully crafted presets for every use case.
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => copyToClipboard(preset)}
                        className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {copiedToken === preset ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>{preset}</span>
                          </>
                        )}
                      </button>
                      <span
                        className="inline-flex items-center px-3 py-2"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                        }}
                      >
                        {typographyPresets[preset].fontSize} / {typographyPresets[preset].fontWeight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Labels & Special */}
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <h3 className="mb-6" style={{ color: 'var(--foreground)' }}>
                  Labels & Special
                </h3>
                {(['label', 'labelSmall', 'button', 'caption', 'overline'] as const).map((preset) => (
                  <div key={preset} className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div
                      className="mb-4"
                      style={{
                        fontFamily: typography.fontFamily.primary,
                        color: 'var(--card-foreground)',
                        ...typographyPresets[preset],
                      }}
                    >
                      {preset === 'overline' ? 'THE QUICK BROWN FOX' : 'The quick brown fox jumps over the lazy dog'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => copyToClipboard(preset)}
                        className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {copiedToken === preset ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>{preset}</span>
                          </>
                        )}
                      </button>
                      <span
                        className="inline-flex items-center px-3 py-2"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: '14px',
                        }}
                      >
                        {typographyPresets[preset].fontSize} / {typographyPresets[preset].fontWeight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Font Scale */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Font Size Scale
            </h2>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="mb-4">
                <h3 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  CSS Variables (Theme)
                </h3>
                <div className="grid gap-4">
                  {[
                    { name: '--text-h1', value: '60px', token: 'typography.fontSize.h1' },
                    { name: '--text-h2', value: '36px', token: 'typography.fontSize.h2' },
                    { name: '--text-h3', value: '24px', token: 'typography.fontSize.h3' },
                    { name: '--text-h4', value: '20px', token: 'typography.fontSize.h4' },
                    { name: '--text-base', value: '16px', token: 'typography.fontSize.base' },
                    { name: '--text-label', value: '12px', token: 'typography.fontSize.label' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius)',
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                            minWidth: '120px',
                          }}
                        >
                          {item.token}
                        </span>
                        <span
                          style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: `var(${item.name})`,
                            color: 'var(--foreground)',
                          }}
                        >
                          Aa
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '12px',
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Additional Sizes
                </h3>
                <div className="grid gap-4">
                  {Object.entries(typography.fontSize)
                    .filter(([name]) => !['h1', 'h2', 'h3', 'h4', 'base', 'label'].includes(name))
                    .map(([name, size]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between p-4"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderRadius: 'var(--radius)',
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            style={{
                              fontFamily: 'monospace',
                              color: 'var(--muted-foreground)',
                              fontSize: '14px',
                              minWidth: '80px',
                            }}
                          >
                            {name}
                          </span>
                          <span
                            style={{
                              fontFamily: typography.fontFamily.primary,
                              fontSize: size,
                              color: 'var(--foreground)',
                            }}
                          >
                            Aa
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                          }}
                        >
                          {size}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Font Weights
            </h2>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="mb-4">
                <h3 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  CSS Variables (Theme)
                </h3>
                <div className="grid gap-4">
                  {[
                    { name: '--font-weight-normal', value: '400', token: 'typography.fontWeight.normal' },
                    { name: '--font-weight-medium', value: '500', token: 'typography.fontWeight.medium' },
                    { name: '--font-weight-bold', value: '700', token: 'typography.fontWeight.bold' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius)',
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                            minWidth: '150px',
                          }}
                        >
                          {item.token}
                        </span>
                        <span
                          style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize['2xl'],
                            fontWeight: `var(${item.name})`,
                            color: 'var(--foreground)',
                          }}
                        >
                          The quick brown fox
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '12px',
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-3" style={{ color: 'var(--foreground)' }}>
                  Additional Weights
                </h3>
                <div className="grid gap-4">
                  {Object.entries(typography.fontWeight)
                    .filter(([name]) => !['normal', 'medium', 'bold'].includes(name))
                    .map(([name, weight]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between p-4"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderRadius: 'var(--radius)',
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            style={{
                              fontFamily: 'monospace',
                              color: 'var(--muted-foreground)',
                              fontSize: '14px',
                              minWidth: '120px',
                            }}
                          >
                            {name}
                          </span>
                          <span
                            style={{
                              fontFamily: typography.fontFamily.primary,
                              fontSize: typography.fontSize['2xl'],
                              fontWeight: weight,
                              color: 'var(--foreground)',
                            }}
                          >
                            The quick brown fox
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            color: 'var(--muted-foreground)',
                            fontSize: '14px',
                          }}
                        >
                          {weight}
                        </span>
                      </div>
                    ))}
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
                Import typography presets from the tokens utility to use throughout your application:
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
                  {"import { typographyPresets, typography } from '@/utils/tokens';"}<br />
                  <br />
                  {"// Use a preset"}<br />
                  {"<h1 style={{ ...typographyPresets.h1 }}>Heading</h1>"}<br />
                  <br />
                  {"// Use individual values"}<br />
                  {"<p style={{ fontSize: typography.fontSize.base }}>Text</p>"}
                </div>
              </div>
              <p>
                All typography values are defined in <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/app/utils/tokens.ts</code>.
                The Satoshi font is loaded from <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/styles/fonts.css</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}