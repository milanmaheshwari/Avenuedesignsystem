import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import ArtistCard, { ArtistCardType, ArtistCardSize } from "../components/ArtistCard";

type VariantType = 'music-large' | 'music-small' | 'comedy-large' | 'comedy-small';

export default function ArtistCardPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('music-large');

  const variants: Array<{ 
    id: VariantType; 
    label: string; 
    component: React.ReactNode;
    type: ArtistCardType;
    size: ArtistCardSize;
  }> = [
    { id: 'music-large', label: 'Music - Large', component: <ArtistCard type="music" size="large" />, type: 'music', size: 'large' },
    { id: 'music-small', label: 'Music - Small', component: <ArtistCard type="music" size="small" />, type: 'music', size: 'small' },
    { id: 'comedy-large', label: 'Comedy - Large', component: <ArtistCard type="comedy" size="large" />, type: 'comedy', size: 'large' },
    { id: 'comedy-small', label: 'Comedy - Small', component: <ArtistCard type="comedy" size="small" />, type: 'comedy', size: 'small' },
  ];

  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-50"
        style={{
          backgroundColor: 'var(--background)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container mx-auto px-4 py-4 lg:px-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <ArrowLeft size={20} />
            <span style={{ fontWeight: 'var(--font-weight-medium)' }}>Back to Components</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:px-20 lg:py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Variant Preview with Tabs */}
          <div className="mb-16">
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Header */}
              <div className="p-8" style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)' }}>
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Artist Card</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Artist profile card with image and details · 2 types · 2 sizes · 4 variants
                </p>
              </div>

              {/* Tabs */}
              <div 
                className="px-8 py-4 overflow-x-auto"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 10, 0.3)',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                <div className="flex gap-2 min-w-max">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className="px-4 py-2 rounded-lg transition-all whitespace-nowrap"
                      style={{
                        backgroundColor: selectedVariant === variant.id 
                          ? 'var(--primary)' 
                          : 'transparent',
                        color: selectedVariant === variant.id 
                          ? 'var(--background)' 
                          : 'var(--muted-foreground)',
                        fontWeight: selectedVariant === variant.id 
                          ? 'var(--font-weight-bold)' 
                          : 'var(--font-weight-medium)',
                        border: selectedVariant === variant.id 
                          ? 'none' 
                          : '1px solid var(--border)',
                      }}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Area */}
              <div 
                className="p-8 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 10, 0.2)',
                  minHeight: '480px',
                }}
              >
                <div className="rounded-xl overflow-visible">
                  {currentVariant.component}
                </div>
              </div>

              {/* Variant Info */}
              <div 
                className="px-8 py-4"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  borderTop: '1px solid var(--border)'
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-bold)', marginBottom: '4px' }}>
                      {currentVariant.label}
                    </div>
                    <div style={{ color: 'var(--muted-foreground)', fontSize: '12px' }}>
                      Type: {currentVariant.type} · Size: {currentVariant.size} · {currentVariant.size === 'large' ? '200×200px image' : '120×120px image'}
                    </div>
                  </div>
                  <div 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(79, 70, 229, 0.1)',
                      color: 'var(--primary)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {currentVariant.id}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Preview Grid */}
          <div className="mb-16">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>All Variants</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {variants.map((variant) => (
                <div
                  key={variant.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedVariant(variant.id)}
                >
                  <div className="mb-3 transition-transform group-hover:scale-105">
                    {variant.component}
                  </div>
                  <div 
                    className="text-center"
                    style={{ 
                      color: selectedVariant === variant.id ? 'var(--primary)' : 'var(--muted-foreground)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {variant.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Construct */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Basic Construct</h2>
            
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Large Card Anatomy */}
                <div>
                  <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Large Card (200px width)
                  </h4>
                  <div className="relative flex justify-center mb-6">
                    <ArtistCard type="music" size="large" />
                  </div>
                  
                  {/* Annotations */}
                  <div className="space-y-3">
                    <AnnotationItem label="Image (200×200px)" description="Rounded profile photo with 40px radius" />
                    <AnnotationItem label="Shadow" description="0px 13.714px 27.429px rgba(0,0,0,0.32)" />
                    <AnnotationItem label="Overlay" description="Type-specific color overlay at 5% opacity" />
                    <AnnotationItem label="Artist Name" description="20px Satoshi Bold, -0.4px tracking" />
                    <AnnotationItem label="Genre" description="16px Satoshi Regular, 22px line height" />
                    <AnnotationItem label="Text Alignment" description="Center-aligned with 8px gap" />
                  </div>
                </div>

                {/* Small Card Anatomy */}
                <div>
                  <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Small Card (120px width)
                  </h4>
                  <div className="relative flex justify-center mb-6">
                    <ArtistCard type="comedy" size="small" />
                  </div>
                  
                  {/* Annotations */}
                  <div className="space-y-3">
                    <AnnotationItem label="Image (120×120px)" description="Scaled down with 24px radius" />
                    <AnnotationItem label="Artist Name" description="14px Satoshi Bold, -0.28px tracking" />
                    <AnnotationItem label="Genre" description="13px Satoshi Regular, 18px line height" />
                    <AnnotationItem label="Gap" description="12px between image and text (vs 20px)" />
                    <AnnotationItem label="Text Alignment" description="Left-aligned with no gap between lines" />
                    <AnnotationItem label="Container" description="Center-aligned image with left-aligned text" />
                  </div>
                </div>
              </div>

              {/* Tokens Used */}
              <div className="pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                  Design Tokens
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TokenItem name="--font-weight-bold" value="Artist name text" />
                  <TokenItem name="--font-weight-regular" value="Genre text" />
                  <TokenItem name="Text Colors" value="Type-specific (#fae8ff / #fef9c3)" />
                  <TokenItem name="Overlay" value="Type-specific at 5% opacity" />
                  <TokenItem name="Shadow" value="0px 13.714px 27.429px rgba(0,0,0,0.32)" />
                  <TokenItem name="Border Radius" value="40px large / 24px small" />
                </div>
              </div>
            </div>
          </section>

          {/* Configurations */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Configurations</h2>
            
            <div className="space-y-12">
              {/* Type Variants */}
              <ConfigSection title="Types">
                <div className="grid md:grid-cols-2 gap-6">
                  <ConfigCard
                    title="Music"
                    description="Purple-tinted card for music artists"
                    specs={[
                      "Artist: The Acoustic Duo",
                      "Genre: Electronic",
                      "Overlay: rgba(192,38,211,0.05)",
                      "Text Color: #fae8ff (light purple)",
                      "Image: Purple-tinted artist photo",
                    ]}
                  >
                    <div className="flex justify-center">
                      <ArtistCard type="music" size="large" />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Comedy"
                    description="Yellow-tinted card for comedy artists"
                    specs={[
                      "Artist: Marty O'Neill",
                      "Genre: Indie",
                      "Overlay: rgba(202,138,4,0.05)",
                      "Text Color: #fef9c3 (light yellow)",
                      "Image: Yellow-tinted artist photo",
                    ]}
                  >
                    <div className="flex justify-center">
                      <ArtistCard type="comedy" size="large" />
                    </div>
                  </ConfigCard>
                </div>
              </ConfigSection>

              {/* Size Variants */}
              <ConfigSection title="Sizes">
                <div className="grid md:grid-cols-2 gap-6">
                  <ConfigCard
                    title="Large"
                    description="Full-featured card for prominent artist display"
                    specs={[
                      "Size: large",
                      "Container width: 200px",
                      "Image: 200×200px (40px radius)",
                      "Title: 20px / 24px line height",
                      "Genre: 16px / 22px line height",
                      "Gap: 20px between image and text",
                      "Text alignment: Center",
                      "Text gap: 8px between name and genre",
                    ]}
                  >
                    <div className="flex justify-center">
                      <ArtistCard type="music" size="large" />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Small"
                    description="Compact card for artist grids"
                    specs={[
                      "Size: small",
                      "Container width: 120px",
                      "Image: 120×120px (24px radius)",
                      "Title: 14px / 18px line height",
                      "Genre: 13px / 18px line height",
                      "Gap: 12px between image and text",
                      "Text alignment: Left",
                      "Text gap: 0px between name and genre",
                    ]}
                  >
                    <div className="flex justify-center">
                      <ArtistCard type="comedy" size="small" />
                    </div>
                  </ConfigCard>
                </div>
              </ConfigSection>
            </div>
          </section>

          {/* Type Details */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Type Details</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Music Type */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="p-6" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h3 className="mb-2" style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-bold)' }}>
                    Music
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    Purple-tinted styling for music and electronic artists
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-center mb-4">
                    <ArtistCard type="music" size="large" />
                  </div>
                  <div className="space-y-2" style={{ fontSize: '13px' }}>
                    <ColorSwatch color="rgba(192,38,211,0.05)" label="Overlay Color" />
                    <ColorSwatch color="#fae8ff" label="Text Color" />
                    <div style={{ color: 'var(--muted-foreground)' }}>
                      <div style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)', marginBottom: '4px' }}>
                        Artist Details
                      </div>
                      <div style={{ fontSize: '12px' }}>Name: The Acoustic Duo</div>
                      <div style={{ fontSize: '12px' }}>Genre: Electronic</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comedy Type */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="p-6" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h3 className="mb-2" style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-bold)' }}>
                    Comedy
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    Yellow-tinted styling for comedy and indie artists
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-center mb-4">
                    <ArtistCard type="comedy" size="large" />
                  </div>
                  <div className="space-y-2" style={{ fontSize: '13px' }}>
                    <ColorSwatch color="rgba(202,138,4,0.05)" label="Overlay Color" />
                    <ColorSwatch color="#fef9c3" label="Text Color" />
                    <div style={{ color: 'var(--muted-foreground)' }}>
                      <div style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)', marginBottom: '4px' }}>
                        Artist Details
                      </div>
                      <div style={{ fontSize: '12px' }}>Name: Marty O'Neill</div>
                      <div style={{ fontSize: '12px' }}>Genre: Indie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Specifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpecCard
                title="Large Image"
                value="200 × 200px"
                description="Profile photo with 40px border radius"
              />
              <SpecCard
                title="Small Image"
                value="120 × 120px"
                description="Profile photo with 24px border radius"
              />
              <SpecCard
                title="Large Title"
                value="20px / -0.4px"
                description="Font size with letter spacing"
              />
              <SpecCard
                title="Small Title"
                value="14px / -0.28px"
                description="Font size with letter spacing"
              />
              <SpecCard
                title="Large Gap"
                value="20px"
                description="Space between image and text"
              />
              <SpecCard
                title="Small Gap"
                value="12px"
                description="Space between image and text"
              />
              <SpecCard
                title="Shadow"
                value="0-27px blur"
                description="Drop shadow at 32% opacity"
              />
              <SpecCard
                title="Types"
                value="2"
                description="Music and Comedy variants"
              />
              <SpecCard
                title="Sizes"
                value="2"
                description="Large and Small variants"
              />
            </div>
          </section>

          {/* Behaviour */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Behaviour</h2>
            
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="space-y-8">
                {/* Visual Hierarchy */}
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Visual Hierarchy
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    The artist card uses a prominent rounded profile image with a subtle color overlay
                    to create visual interest while maintaining focus on the artist's photo. Text is positioned
                    below the image with type-specific color treatments.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Large circular image draws immediate attention</li>
                    <li>• Drop shadow creates depth and elevation</li>
                    <li>• Artist name uses bold weight for prominence</li>
                    <li>• Genre text uses lighter weight for hierarchy</li>
                    <li>• Color overlay adds subtle category distinction</li>
                  </ul>
                </div>

                {/* Type System */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Type System
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    Each artist type uses a unique color palette to create visual distinction while
                    maintaining consistent structure and readability.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Music: Purple tint with #fae8ff text (The Acoustic Duo - Electronic)</li>
                    <li>• Comedy: Yellow tint with #fef9c3 text (Marty O'Neill - Indie)</li>
                    <li>• Each type has a subtle 5% opacity overlay on the image</li>
                    <li>• Text colors are optimized for contrast against dark backgrounds</li>
                    <li>• Shadow intensity is consistent across all types</li>
                  </ul>
                </div>

                {/* Size Adaptation */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Size Adaptation
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    The small size adjusts both dimensions and text alignment to optimize for
                    compact layouts while maintaining visual quality.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Large size (200px) uses center-aligned text with 8px line gap</li>
                    <li>• Small size (120px) uses left-aligned text with no line gap</li>
                    <li>• Typography scales proportionally for readability</li>
                    <li>• Border radius adjusts to maintain proportional roundness</li>
                    <li>• Large cards work well for featured artist sections</li>
                    <li>• Small cards are ideal for artist grids (3-4 columns)</li>
                  </ul>
                </div>

                {/* Visual Effects */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Visual Effects
                  </h4>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Rounded image creates approachable, friendly appearance</li>
                    <li>• Drop shadow (0px 13.714px 27.429px) provides depth</li>
                    <li>• Color overlay at 5% opacity adds subtle tint without obscuring photo</li>
                    <li>• Image respects object-fit: cover for proper aspect ratio</li>
                    <li>• Type-specific text colors ensure readability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Notes */}
          <section>
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--accent)',
                border: '1px solid var(--border)',
              }}
            >
              <h4 className="mb-2" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                Implementation Notes
              </h4>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                These artist cards are designed for profile display and work best in grids or carousels. 
                The large size is ideal for featured artist sections or 2-3 column layouts, while the small 
                size can be used for 3-4 column artist grids. Typography uses Satoshi font with weights 
                defined in your theme.css file (--font-weight-bold and --font-weight-regular). Each type 
                features a unique color overlay and text color to distinguish different artist categories. 
                The small size uses left-aligned text for better readability in compact layouts, while the 
                large size uses center alignment for a more balanced, featured appearance.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function AnnotationItem({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-start gap-2">
      <div
        className="mt-1 w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: 'var(--primary)' }}
      />
      <div>
        <div style={{ color: 'var(--foreground)', fontSize: '13px', fontWeight: 'var(--font-weight-medium)' }}>
          {label}
        </div>
        <div style={{ color: 'var(--muted-foreground)', fontSize: '12px' }}>
          {description}
        </div>
      </div>
    </div>
  );
}

function TokenItem({ name, value }: { name: string; value: string }) {
  return (
    <div
      className="p-3 rounded-lg"
      style={{
        backgroundColor: 'var(--background)',
        border: '1px solid var(--border)',
      }}
    >
      <code
        className="block mb-1"
        style={{
          color: 'var(--primary)',
          fontSize: '12px',
          fontFamily: 'monospace',
        }}
      >
        {name}
      </code>
      <div style={{ color: 'var(--muted-foreground)', fontSize: '11px' }}>
        {value}
      </div>
    </div>
  );
}

function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-lg shrink-0"
        style={{
          backgroundColor: color,
          border: '1px solid var(--border)',
        }}
      />
      <div>
        <div style={{ color: 'var(--foreground)', fontSize: '12px', fontWeight: 'var(--font-weight-medium)' }}>
          {label}
        </div>
        <code style={{ color: 'var(--muted-foreground)', fontSize: '11px', fontFamily: 'monospace' }}>
          {color}
        </code>
      </div>
    </div>
  );
}

function ConfigSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '16px', fontWeight: 'var(--font-weight-bold)' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function ConfigCard({
  title,
  description,
  specs,
  children,
}: {
  title: string;
  description: string;
  specs: string[];
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      <div className="p-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <h4 className="mb-1" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
          {title}
        </h4>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '12px' }}>
          {description}
        </p>
      </div>
      <div className="p-4" style={{ backgroundColor: 'rgba(10, 10, 10, 0.2)' }}>
        {children}
      </div>
      <div className="p-4 space-y-1">
        {specs.map((spec, index) => (
          <div key={index} style={{ color: 'var(--muted-foreground)', fontSize: '11px' }}>
            {spec}
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div
      className="p-5 rounded-xl"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      <div style={{ color: 'var(--muted-foreground)', fontSize: '11px', marginBottom: '8px' }}>
        {title}
      </div>
      <div className="mb-2" style={{ color: 'var(--foreground)', fontSize: '24px', fontWeight: 'var(--font-weight-bold)' }}>
        {value}
      </div>
      <div style={{ color: 'var(--card-foreground)', fontSize: '12px' }}>
        {description}
      </div>
    </div>
  );
}
