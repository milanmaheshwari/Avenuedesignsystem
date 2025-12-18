import { ArrowRight } from "lucide-react";

export default function TokenMappingPage() {
  const colorMappings = [
    { cssVar: '--background', description: 'Main background color', usage: 'backgroundColor: "var(--background)"' },
    { cssVar: '--foreground', description: 'Main text color', usage: 'color: "var(--foreground)"' },
    { cssVar: '--card', description: 'Card background', usage: 'backgroundColor: "var(--card)"' },
    { cssVar: '--card-foreground', description: 'Text on cards', usage: 'color: "var(--card-foreground)"' },
    { cssVar: '--primary', description: 'Primary brand color', usage: 'backgroundColor: "var(--primary)"' },
    { cssVar: '--primary-foreground', description: 'Text on primary', usage: 'color: "var(--primary-foreground)"' },
    { cssVar: '--secondary', description: 'Secondary color', usage: 'backgroundColor: "var(--secondary)"' },
    { cssVar: '--secondary-foreground', description: 'Text on secondary', usage: 'color: "var(--secondary-foreground)"' },
    { cssVar: '--muted', description: 'Muted background', usage: 'backgroundColor: "var(--muted)"' },
    { cssVar: '--muted-foreground', description: 'Muted text', usage: 'color: "var(--muted-foreground)"' },
    { cssVar: '--accent', description: 'Accent color', usage: 'backgroundColor: "var(--accent)"' },
    { cssVar: '--accent-foreground', description: 'Text on accent', usage: 'color: "var(--accent-foreground)"' },
    { cssVar: '--destructive', description: 'Destructive/error color', usage: 'backgroundColor: "var(--destructive)"' },
    { cssVar: '--destructive-foreground', description: 'Text on destructive', usage: 'color: "var(--destructive-foreground)"' },
    { cssVar: '--border', description: 'Border color', usage: 'border: "1px solid var(--border)"' },
    { cssVar: '--input', description: 'Input filled background', usage: 'backgroundColor: "var(--input)"' },
    { cssVar: '--input-background', description: 'Input background', usage: 'backgroundColor: "var(--input-background)"' },
    { cssVar: '--ring', description: 'Focus ring color', usage: 'outline: "2px solid var(--ring)"' },
  ];

  const typographyMappings = [
    { cssVar: '--text-h1', value: '60px', token: 'typography.fontSize.h1', usage: 'fontSize: "var(--text-h1)"' },
    { cssVar: '--text-h2', value: '36px', token: 'typography.fontSize.h2', usage: 'fontSize: "var(--text-h2)"' },
    { cssVar: '--text-h3', value: '24px', token: 'typography.fontSize.h3', usage: 'fontSize: "var(--text-h3)"' },
    { cssVar: '--text-h4', value: '20px', token: 'typography.fontSize.h4', usage: 'fontSize: "var(--text-h4)"' },
    { cssVar: '--text-base', value: '16px', token: 'typography.fontSize.base', usage: 'fontSize: "var(--text-base)"' },
    { cssVar: '--text-label', value: '12px', token: 'typography.fontSize.label', usage: 'fontSize: "var(--text-label)"' },
    { cssVar: '--font-satoshi', value: 'Satoshi', token: 'typography.fontFamily.primary', usage: 'fontFamily: "var(--font-satoshi)"' },
    { cssVar: '--font-weight-normal', value: '400', token: 'typography.fontWeight.normal', usage: 'fontWeight: "var(--font-weight-normal)"' },
    { cssVar: '--font-weight-medium', value: '500', token: 'typography.fontWeight.medium', usage: 'fontWeight: "var(--font-weight-medium)"' },
    { cssVar: '--font-weight-bold', value: '700', token: 'typography.fontWeight.bold', usage: 'fontWeight: "var(--font-weight-bold)"' },
  ];

  const radiusMappings = [
    { cssVar: '--radius', value: '12px', token: 'radius.base', usage: 'borderRadius: "var(--radius)"' },
    { cssVar: '--radius-card', value: '16px', token: 'radius.card', usage: 'borderRadius: "var(--radius-card)"' },
    { cssVar: '--radius-button', value: '12px', token: 'radius.button', usage: 'borderRadius: "var(--radius-button)"' },
  ];

  const shadowMappings = [
    { cssVar: '--elevation-sm', value: 'Small shadow', token: 'shadows.sm', usage: 'boxShadow: "var(--elevation-sm)"' },
  ];

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
              Design Token Mapping
            </h1>
            <p style={{ color: 'var(--card-foreground)', maxWidth: '900px' }}>
              Complete reference of CSS variables defined in <code style={{ padding: '2px 6px', backgroundColor: 'var(--muted)', borderRadius: '4px' }}>/src/styles/theme.css</code> and 
              their corresponding JavaScript tokens in <code style={{ padding: '2px 6px', backgroundColor: 'var(--muted)', borderRadius: '4px' }}>/src/app/utils/tokens.ts</code> and 
              <code style={{ padding: '2px 6px', backgroundColor: 'var(--muted)', borderRadius: '4px', marginLeft: '4px' }}>/src/app/utils/colors.ts</code>.
            </p>
          </div>

          {/* Colors */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Color Tokens
            </h2>
            <div
              className="overflow-x-auto"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>CSS Variable</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Description</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Usage Example</th>
                  </tr>
                </thead>
                <tbody>
                  {colorMappings.map((mapping, index) => (
                    <tr key={mapping.cssVar} style={{ borderBottom: index < colorMappings.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--muted-foreground)' }}>
                        {mapping.cssVar}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--card-foreground)' }}>
                        {mapping.description}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                        {mapping.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4" style={{ backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                <strong>Note:</strong> For category-specific colors (music, nightlife, sports, etc.), import from{' '}
                <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>
                  @/utils/colors
                </code>{' '}
                and use the <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>categoryColors</code> object.
              </p>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Typography Tokens
            </h2>
            <div
              className="overflow-x-auto"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>CSS Variable</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Value</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>JS Token</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Usage Example</th>
                  </tr>
                </thead>
                <tbody>
                  {typographyMappings.map((mapping, index) => (
                    <tr key={mapping.cssVar} style={{ borderBottom: index < typographyMappings.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--muted-foreground)' }}>
                        {mapping.cssVar}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--card-foreground)' }}>
                        {mapping.value}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent-foreground)', backgroundColor: 'var(--accent)', borderRadius: '4px' }}>
                        {mapping.token}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                        {mapping.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4" style={{ backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                <strong>Recommended:</strong> Use CSS variables directly for sizes and weights that map to theme variables. 
                Use JS tokens for additional sizes (xs, sm, lg, xl, etc.) not defined in CSS.
              </p>
            </div>
          </div>

          {/* Radius */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Radius Tokens
            </h2>
            <div
              className="overflow-x-auto"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>CSS Variable</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Value</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>JS Token</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Usage Example</th>
                  </tr>
                </thead>
                <tbody>
                  {radiusMappings.map((mapping, index) => (
                    <tr key={mapping.cssVar} style={{ borderBottom: index < radiusMappings.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--muted-foreground)' }}>
                        {mapping.cssVar}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--card-foreground)' }}>
                        {mapping.value}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent-foreground)', backgroundColor: 'var(--accent)', borderRadius: '4px' }}>
                        {mapping.token}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                        {mapping.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4" style={{ backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                <strong>Note:</strong> The JS tokens reference CSS variables when available (e.g., <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>radius.base = "var(--radius)"</code>).
              </p>
            </div>
          </div>

          {/* Shadows */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Shadow Tokens
            </h2>
            <div
              className="overflow-x-auto"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>CSS Variable</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Description</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>JS Token</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: 'var(--foreground)' }}>Usage Example</th>
                  </tr>
                </thead>
                <tbody>
                  {shadowMappings.map((mapping, index) => (
                    <tr key={mapping.cssVar} style={{ borderBottom: index < shadowMappings.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--muted-foreground)' }}>
                        {mapping.cssVar}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--card-foreground)' }}>
                        {mapping.value}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent-foreground)', backgroundColor: 'var(--accent)', borderRadius: '4px' }}>
                        {mapping.token}
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                        {mapping.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4" style={{ backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                <strong>Note:</strong> Additional shadow values (xs, base, md, lg, xl, 2xl, glow variants) are defined in JS tokens only.
              </p>
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
              Best Practices
            </h3>
            <div style={{ color: 'var(--muted-foreground)' }}>
              <div className="mb-6">
                <h4 className="mb-2" style={{ color: 'var(--foreground)' }}>1. Use CSS Variables Directly</h4>
                <p className="mb-2">For values defined in theme.css, use CSS variables directly:</p>
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderRadius: 'var(--radius)',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                  }}
                >
                  <div style={{ color: 'var(--card-foreground)' }}>
                    {'<div style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>'}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-2" style={{ color: 'var(--foreground)' }}>2. Import JS Tokens for Complex Values</h4>
                <p className="mb-2">For spacing, additional typography, and category colors:</p>
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderRadius: 'var(--radius)',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                  }}
                >
                  <div style={{ color: 'var(--card-foreground)' }}>
                    {"import { spacing, typography, radius } from '@/utils/tokens';"}<br />
                    {"import { categoryColors } from '@/utils/colors';"}<br />
                    <br />
                    {"<div style={{ padding: spacing[6], borderRadius: radius.md }}>"}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2" style={{ color: 'var(--foreground)' }}>3. Updating the Design System</h4>
                <p>
                  To change design system values, update <code style={{ padding: '2px 6px', backgroundColor: 'var(--background)', borderRadius: '4px' }}>/src/styles/theme.css</code>. 
                  All components using CSS variables will automatically update. JS tokens that reference CSS variables will also inherit these changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
