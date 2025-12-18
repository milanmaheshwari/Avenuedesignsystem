import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import CategoryCard, { CategoryCardTheme, CategoryCardSize } from "../components/CategoryCard";

type VariantType = 'music-large' | 'music-small' | 'night-large' | 'night-small' | 'sports-large' | 'sports-small';

export default function CategoryCardPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('music-large');

  const variants: Array<{ 
    id: VariantType; 
    label: string; 
    component: React.ReactNode;
    theme: CategoryCardTheme;
    size: CategoryCardSize;
  }> = [
    { id: 'music-large', label: 'Music - Large', component: <CategoryCard theme="music" size="large" />, theme: 'music', size: 'large' },
    { id: 'music-small', label: 'Music - Small', component: <CategoryCard theme="music" size="small" />, theme: 'music', size: 'small' },
    { id: 'night-large', label: 'Night Parties - Large', component: <CategoryCard theme="night-parties" size="large" />, theme: 'night-parties', size: 'large' },
    { id: 'night-small', label: 'Night Parties - Small', component: <CategoryCard theme="night-parties" size="small" />, theme: 'night-parties', size: 'small' },
    { id: 'sports-large', label: 'Sports - Large', component: <CategoryCard theme="sports" size="large" />, theme: 'sports', size: 'large' },
    { id: 'sports-small', label: 'Sports - Small', component: <CategoryCard theme="sports" size="small" />, theme: 'sports', size: 'small' },
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
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Category Cards</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Visual category navigation · 3 themes · 2 sizes · 6 variants
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
                      Theme: {currentVariant.theme} · Size: {currentVariant.size} · {currentVariant.size === 'large' ? '292×360px' : '156×240px'}
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
            <div className="grid grid-cols-2 gap-8 justify-items-center">
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
                    Large Card (292×360px)
                  </h4>
                  <div className="relative flex justify-center mb-6">
                    <CategoryCard size="large" />
                  </div>
                  
                  {/* Annotations */}
                  <div className="space-y-3">
                    <AnnotationItem label="Icon (40×40px)" description="Rounded square with gradient fill" />
                    <AnnotationItem label="Title" description="24px Satoshi Bold, -0.48px tracking" />
                    <AnnotationItem label="Description" description="16px Satoshi Regular, 22px line height" />
                    <AnnotationItem label="Image" description="220×220px with drop shadow" />
                    <AnnotationItem label="Gradient Background" description="Radial gradient, purple-pink" />
                    <AnnotationItem label="Border Radius" description="20px outer corners" />
                  </div>
                </div>

                {/* Small Card Anatomy */}
                <div>
                  <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Small Card (156×240px)
                  </h4>
                  <div className="relative flex justify-center mb-6">
                    <CategoryCard size="small" />
                  </div>
                  
                  {/* Annotations */}
                  <div className="space-y-3">
                    <AnnotationItem label="Icon (24×24px)" description="Scaled down with 8px radius" />
                    <AnnotationItem label="Title" description="16px Satoshi Bold, -0.32px tracking" />
                    <AnnotationItem label="Description" description="13px Satoshi Regular, 18px line height" />
                    <AnnotationItem label="Image" description="124×124px with drop shadow" />
                    <AnnotationItem label="Padding" description="12px all sides (vs 20px for large)" />
                    <AnnotationItem label="Border Radius" description="12px outer corners" />
                  </div>
                </div>
              </div>

              {/* Tokens Used */}
              <div className="pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                  Design Tokens
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TokenItem name="--font-satoshi" value="Font family" />
                  <TokenItem name="--font-weight-bold" value="Title text (700)" />
                  <TokenItem name="--font-weight-normal" value="Description text (400)" />
                  <TokenItem name="Text Color" value="#FDF4FF" />
                  <TokenItem name="Border" value="rgba(250,250,250,0.05)" />
                  <TokenItem name="Gradient Opacity" value="60% background blend" />
                  <TokenItem name="Drop Shadow" value="rgba(10,10,10,0.5)" />
                </div>
              </div>
            </div>
          </section>

          {/* Configurations */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Size Variants</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ConfigCard
                title="Large"
                description="Full-featured card for prominent display"
                specs={[
                  "Dimensions: 292×360px",
                  "Icon: 40×40px (12px radius)",
                  "Title: 24px / 28px line height",
                  "Description: 16px / 22px line height",
                  "Padding: 20px",
                  "Border radius: 20px",
                  "Image: 220×220px",
                ]}
              >
                <div className="flex justify-center">
                  <CategoryCard size="large" />
                </div>
              </ConfigCard>

              <ConfigCard
                title="Small"
                description="Compact card for grid layouts"
                specs={[
                  "Dimensions: 156×240px",
                  "Icon: 24×24px (8px radius)",
                  "Title: 16px / 20px line height",
                  "Description: 13px / 18px line height",
                  "Padding: 12px",
                  "Border radius: 12px",
                  "Image: 124×124px",
                ]}
              >
                <div className="flex justify-center">
                  <CategoryCard size="small" />
                </div>
              </ConfigCard>
            </div>
          </section>

          {/* Theme Variants */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Theme Variants</h2>
            
            <div className="grid gap-6">
              {/* Music Theme */}
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
                    Pink-purple gradient palette for music and concert categories
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-center mb-4">
                    <CategoryCard theme="music" size="large" />
                  </div>
                  <div className="space-y-2" style={{ fontSize: '13px' }}>
                    <ColorSwatch color="rgba(162,28,175,1)" label="Primary (0%)" />
                    <ColorSwatch color="rgba(118,16,127,1)" label="Stop 2 (50%)" />
                    <ColorSwatch color="rgba(96,10,102,1)" label="Stop 3 (75%)" />
                    <ColorSwatch color="rgba(74,4,78,1)" label="Stop 4 (100%)" />
                  </div>
                </div>
              </div>

              {/* Night Parties Theme */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="p-6" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h3 className="mb-2" style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-bold)' }}>
                    Night Parties
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    Violet gradient palette for nightlife and party categories
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-center mb-4">
                    <CategoryCard theme="night-parties" size="large" />
                  </div>
                  <div className="space-y-2" style={{ fontSize: '13px' }}>
                    <ColorSwatch color="rgba(126,34,206,1)" label="Primary (0%)" />
                    <ColorSwatch color="rgba(93,21,153,1)" label="Stop 2 (50%)" />
                    <ColorSwatch color="rgba(59,7,100,1)" label="Stop 3 (100%)" />
                  </div>
                </div>
              </div>

              {/* Sports Theme */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="p-6" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h3 className="mb-2" style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-bold)' }}>
                    Sports
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    Orange-brown gradient palette for sports and athletic categories
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-center mb-4">
                    <CategoryCard theme="sports" size="large" />
                  </div>
                  <div className="space-y-2" style={{ fontSize: '13px' }}>
                    <ColorSwatch color="rgba(194,65,12,1)" label="Primary (0%)" />
                    <ColorSwatch color="rgba(131,43,10,1)" label="Stop 2 (50%)" />
                    <ColorSwatch color="rgba(99,31,8,1)" label="Stop 3 (75%)" />
                    <ColorSwatch color="rgba(67,20,7,1)" label="Stop 4 (100%)" />
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
                title="Large Dimensions"
                value="292 × 360px"
                description="Standard card size for featured categories"
              />
              <SpecCard
                title="Small Dimensions"
                value="156 × 240px"
                description="Compact size for category grids"
              />
              <SpecCard
                title="Large Icon"
                value="40 × 40px"
                description="Icon size with 12px border radius"
              />
              <SpecCard
                title="Small Icon"
                value="24 × 24px"
                description="Icon size with 8px border radius"
              />
              <SpecCard
                title="Large Padding"
                value="20px"
                description="Content padding for large cards"
              />
              <SpecCard
                title="Small Padding"
                value="12px"
                description="Content padding for small cards"
              />
              <SpecCard
                title="Image (Large)"
                value="220 × 220px"
                description="3D illustration with drop shadow"
              />
              <SpecCard
                title="Image (Small)"
                value="124 × 124px"
                description="Scaled down illustration"
              />
              <SpecCard
                title="Theme"
                value="Music"
                description="Purple-pink gradient with music note icon"
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
                    The card uses a radial gradient background that creates depth and draws attention to the
                    content area. The 3D illustration is positioned to complement rather than compete with the text.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Icon and title are positioned at the top for immediate recognition</li>
                    <li>• Description text provides context without overwhelming the design</li>
                    <li>• 3D image is partially visible, creating visual interest</li>
                    <li>• Gradient background fades from center, creating a vignette effect</li>
                  </ul>
                </div>

                {/* Responsive Sizing */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Size Adaptation
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    The small size maintains the same proportional relationships as the large size,
                    ensuring visual consistency across different layouts.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• All elements scale proportionally between sizes</li>
                    <li>• Typography adjusts for readability at each size</li>
                    <li>• Large cards work well for hero sections or featured content</li>
                    <li>• Small cards are ideal for category grids (2-4 columns)</li>
                  </ul>
                </div>

                {/* Visual Effects */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Visual Effects
                  </h4>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Radial gradient creates depth and focal point</li>
                    <li>• Theme-specific shadow provides subtle glow effect (rgba(192,38,211,0.05))</li>
                    <li>• Inset border highlight (5% white) adds polish</li>
                    <li>• 3D image drop shadow creates elevation</li>
                    <li>• Icon gradient matches overall aesthetic</li>
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
                This card is designed for music event category navigation. The large size is ideal for 
                2-3 column layouts on desktop, while the small size can be used for 3-4 column grids. 
                Typography uses Satoshi font with weights defined in your theme.css file (--font-weight-bold 
                and --font-weight-normal). The component features a unique 3D illustration and music note 
                icon with a purple-pink gradient background.
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