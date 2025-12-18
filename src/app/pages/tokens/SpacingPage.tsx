import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { spacing } from "../../utils/tokens";

export default function SpacingPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

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
              Spacing System
            </h1>
            <p style={{ color: 'var(--card-foreground)', maxWidth: '800px' }}>
              A consistent 4px-based spacing system with values from 0 to 384px. Use these values for padding, margins, gaps, and positioning
              to maintain visual rhythm and consistency across your application.
            </p>
          </div>

          {/* Spacing Scale */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Spacing Scale
            </h2>
            <div className="grid gap-4">
              {Object.entries(spacing).map(([name, value]) => (
                <div
                  key={name}
                  className="p-6 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Visual representation */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div
                        style={{
                          width: value,
                          height: '40px',
                          backgroundColor: 'var(--primary)',
                          borderRadius: 'var(--radius)',
                          minWidth: value === '0' ? '2px' : '4px',
                        }}
                      />
                      <div
                        style={{
                          color: 'var(--muted-foreground)',
                          fontSize: '14px',
                          fontFamily: 'monospace',
                          minWidth: '80px',
                        }}
                      >
                        {value === '0' ? '0' : value.replace('rem', 'rem')}
                      </div>
                    </div>

                    {/* Token Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-3 items-center">
                        <button
                          onClick={() => copyToClipboard(`spacing.${name}`)}
                          className="inline-flex items-center gap-2 px-3 py-2 transition-colors"
                          style={{
                            backgroundColor: 'var(--muted)',
                            color: 'var(--muted-foreground)',
                            borderRadius: 'var(--radius)',
                            fontSize: '14px',
                            fontFamily: 'monospace',
                          }}
                        >
                          {copiedToken === `spacing.${name}` ? (
                            <>
                              <Check size={14} />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>spacing.{name}</span>
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
                            fontFamily: 'monospace',
                          }}
                        >
                          {value}
                        </span>
                        <span
                          className="inline-flex items-center px-3 py-2"
                          style={{
                            backgroundColor: 'var(--muted)',
                            color: 'var(--muted-foreground)',
                            borderRadius: 'var(--radius)',
                            fontSize: '14px',
                          }}
                        >
                          {value === '0' ? '0px' : `${parseFloat(value) * 16}px`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Patterns */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Common Spacing Patterns
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
                  Component Padding
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Compact: {spacing[2]} - {spacing[4]} (8-16px)</div>
                  <div>• Comfortable: {spacing[4]} - {spacing[6]} (16-24px)</div>
                  <div>• Spacious: {spacing[6]} - {spacing[8]} (24-32px)</div>
                  <div>• Large cards: {spacing[8]} - {spacing[12]} (32-48px)</div>
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
                  Element Gaps
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Tight: {spacing[1]} - {spacing[2]} (4-8px)</div>
                  <div>• Comfortable: {spacing[3]} - {spacing[4]} (12-16px)</div>
                  <div>• Loose: {spacing[4]} - {spacing[6]} (16-24px)</div>
                  <div>• Section gaps: {spacing[8]} - {spacing[12]} (32-48px)</div>
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
                  Section Spacing
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Between elements: {spacing[4]} - {spacing[6]} (16-24px)</div>
                  <div>• Between groups: {spacing[8]} - {spacing[12]} (32-48px)</div>
                  <div>• Between sections: {spacing[12]} - {spacing[16]} (48-64px)</div>
                  <div>• Page sections: {spacing[16]} - {spacing[24]} (64-96px)</div>
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
                  Container Spacing
                </h4>
                <div className="space-y-2" style={{ color: 'var(--card-foreground)' }}>
                  <div>• Mobile horizontal: {spacing[4]} - {spacing[6]} (16-24px)</div>
                  <div>• Desktop horizontal: {spacing[8]} - {spacing[20]} (32-80px)</div>
                  <div>• Vertical padding: {spacing[8]} - {spacing[12]} (32-48px)</div>
                  <div>• Hero sections: {spacing[16]} - {spacing[32]} (64-128px)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Example */}
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
              <div className="space-y-8">
                <div>
                  <div
                    className="mb-2"
                    style={{
                      color: 'var(--muted-foreground)',
                      fontSize: '14px',
                    }}
                  >
                    Compact spacing (spacing.2 = 8px)
                  </div>
                  <div
                    className="flex flex-wrap"
                    style={{ gap: spacing[2] }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: 'var(--primary)',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="mb-2"
                    style={{
                      color: 'var(--muted-foreground)',
                      fontSize: '14px',
                    }}
                  >
                    Comfortable spacing (spacing.4 = 16px)
                  </div>
                  <div
                    className="flex flex-wrap"
                    style={{ gap: spacing[4] }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: 'var(--accent)',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="mb-2"
                    style={{
                      color: 'var(--muted-foreground)',
                      fontSize: '14px',
                    }}
                  >
                    Spacious spacing (spacing.8 = 32px)
                  </div>
                  <div
                    className="flex flex-wrap"
                    style={{ gap: spacing[8] }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: 'var(--chart-5)',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                    ))}
                  </div>
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
                Import spacing values from the tokens utility to use throughout your application:
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
                  {"import { spacing } from '@/utils/tokens';"}<br />
                  <br />
                  {"// Use in inline styles"}<br />
                  {"<div style={{ padding: spacing[6], marginBottom: spacing[4] }}>"}<br />
                  <br />
                  {"// Use in flexbox/grid gaps"}<br />
                  {"<div style={{ display: 'flex', gap: spacing[4] }}>"}
                </div>
              </div>
              <p>
                All spacing values are based on a 4px grid and defined in <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/app/utils/tokens.ts</code>.
                Values range from 0 to 384px (spacing.0 to spacing.96).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
