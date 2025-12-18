import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import { 
  TopbarDesktop, 
  TopbarMobileDefault, 
  TopbarMobileExpanded, 
  TopbarDesktopSignup, 
  TopbarDesktopAuthenticated,
  TopbarMobileLocation,
  TopbarMobileIcons,
  TopbarMobileIconsExtended,
  TopbarMinimal 
} from "../components/TopbarVariants";

type VariantType = 'desktop-purple' | 'desktop-white' | 'desktop-auth' | 'mobile-default' | 'mobile-expanded' | 'mobile-location' | 'mobile-icons' | 'mobile-icons-extended' | 'mobile-minimal';

export default function TopbarPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('desktop-purple');

  const variants = [
    { id: 'desktop-purple' as VariantType, label: 'Desktop - Purple', component: <TopbarDesktop />, width: 'full' },
    { id: 'desktop-white' as VariantType, label: 'Desktop - White', component: <TopbarDesktopSignup />, width: 'full' },
    { id: 'desktop-auth' as VariantType, label: 'Desktop - Auth', component: <TopbarDesktopAuthenticated />, width: 'full' },
    { id: 'mobile-default' as VariantType, label: 'Mobile - Menu', component: <TopbarMobileDefault />, width: '375px' },
    { id: 'mobile-expanded' as VariantType, label: 'Mobile - Expanded', component: <TopbarMobileExpanded />, width: '375px' },
    { id: 'mobile-location' as VariantType, label: 'Mobile - Location', component: <TopbarMobileLocation />, width: '375px' },
    { id: 'mobile-icons' as VariantType, label: 'Mobile - Icons', component: <TopbarMobileIcons />, width: '375px' },
    { id: 'mobile-icons-extended' as VariantType, label: 'Mobile - Extended', component: <TopbarMobileIconsExtended />, width: '375px' },
    { id: 'mobile-minimal' as VariantType, label: 'Mobile - Minimal', component: <TopbarMinimal />, width: '375px' },
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
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Topbar</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Responsive navigation · 9 variants · Multiple icon configurations
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
                      className="px-4 py-2 rounded-lg transition-all"
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
                  minHeight: currentVariant.id.includes('expanded') ? '400px' : '120px',
                }}
              >
                <div 
                  className="w-full overflow-x-auto"
                  style={{ 
                    maxWidth: currentVariant.width === 'full' ? '100%' : currentVariant.width 
                  }}
                >
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {currentVariant.component}
                  </div>
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
                      {currentVariant.id.includes('mobile') 
                        ? `Mobile (${currentVariant.width} width)` 
                        : 'Desktop (responsive width)'}
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

          {/* Component Preview */}
          <div className="mb-16">
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="p-8" style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)' }}>
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Topbar</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Responsive navigation · 5 variants · 3 button styles
                </p>
              </div>
              <div className="relative bg-gradient-to-b from-[rgba(10,10,10,0.3)] to-transparent">
                <Topbar />
              </div>
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
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Desktop Anatomy */}
                <div className="lg:col-span-2">
                  <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Desktop (size=big)
                  </h4>
                  <div className="relative">
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div className="overflow-x-auto">
                        <TopbarDesktop />
                      </div>
                    </div>
                    
                    {/* Annotations */}
                    <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3">
                      <AnnotationItem label="Logo (120×36px)" description="Brand identity with gradient" />
                      <AnnotationItem label="Divider" description="Vertical separator (1px, 10% opacity)" />
                      <AnnotationItem label="Location Dropdown" description="New York selector with chevron" />
                      <AnnotationItem label="Navigation Links" description="Find Events, Create Event, My Events" />
                      <AnnotationItem label="Sign Up Button" description="CTA with gradient background and glow" />
                      <AnnotationItem label="Backdrop Blur" description="rgba(10,10,10,0.1) with blur effect" />
                    </div>
                  </div>
                </div>

                {/* Mobile Anatomy */}
                <div className="lg:col-span-2">
                  <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Mobile (size=small)
                  </h4>
                  <div className="relative">
                    <div
                      className="rounded-xl overflow-hidden w-full max-w-[375px]"
                      style={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <TopbarMobileDefault />
                    </div>
                    
                    {/* Annotations */}
                    <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3">
                      <AnnotationItem label="Logo (80×24px)" description="Scaled down for mobile" />
                      <AnnotationItem label="Menu Toggle" description="Hamburger/Close icon" />
                      <AnnotationItem label="Expanded Menu" description="Full-height navigation (state=expanded)" />
                      <AnnotationItem label="Navigation Items" description="4 links with hover states" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tokens Used */}
              <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="mb-4" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                  Design Tokens
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TokenItem name="--foreground" value="Primary text" />
                  <TokenItem name="--card-foreground" value="Secondary text" />
                  <TokenItem name="--primary" value="Accent gradient" />
                  <TokenItem name="--border" value="Dividers (5% opacity)" />
                  <TokenItem name="--radius-button" value="12px" />
                  <TokenItem name="--font-satoshi" value="Typography" />
                </div>
              </div>
            </div>
          </section>

          {/* Configurations */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Configurations</h2>
            
            <div className="space-y-8">
              {/* Size Variants */}
              <ConfigSection title="Size">
                <div className="space-y-6">
                  <ConfigCard
                    title="Large"
                    description="Desktop navigation with full features"
                    specs={[
                      "Size: big",
                      "Height: 72px (with padding)",
                      "Logo: 120×36px",
                      "Breakpoint: ≥1080px",
                    ]}
                  >
                    <div className="w-full overflow-x-auto">
                      <TopbarDesktop />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Small"
                    description="Mobile-optimized compact header"
                    specs={[
                      "Size: small",
                      "Height: 56px (with padding)",
                      "Logo: 80×24px",
                      "Breakpoint: <1080px",
                    ]}
                  >
                    <div className="w-[375px]">
                      <TopbarMobileDefault />
                    </div>
                  </ConfigCard>
                </div>
              </ConfigSection>

              {/* State Variants */}
              <ConfigSection title="State">
                <div className="grid md:grid-cols-2 gap-6">
                  <ConfigCard
                    title="Default"
                    description="Standard collapsed navigation"
                    specs={[
                      "State: default",
                      "Menu: Collapsed",
                      "Background: rgba(10,10,10,0.1)",
                      "Blur: Enabled",
                    ]}
                  >
                    <div className="w-[375px] mx-auto">
                      <TopbarMobileDefault />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Expanded"
                    description="Mobile menu open state"
                    specs={[
                      "State: expanded",
                      "Menu: Open",
                      "Background: rgba(10,10,10,0.75)",
                      "Border radius: 0 0 24px 24px",
                    ]}
                  >
                    <div className="w-[375px] mx-auto">
                      <TopbarMobileExpanded />
                    </div>
                  </ConfigCard>
                </div>
              </ConfigSection>

              {/* Button Variants */}
              <ConfigSection title="Button Style">
                <div className="space-y-6">
                  <ConfigCard
                    title="Sign Up (Purple Gradient)"
                    description="Call-to-action with purple accent gradient"
                    specs={[
                      "Variant: signup",
                      "Color: Purple gradient (rgba 79,70,229)",
                      "Border radius: 10px",
                      "Links: Find Events, Create Event, My Events",
                    ]}
                  >
                    <div className="w-full overflow-x-auto">
                      <TopbarDesktop />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Sign Up (White Gradient)"
                    description="Subtle white gradient for lighter backgrounds"
                    specs={[
                      "Variant: signup-light",
                      "Color: White gradient (rgba 250,250,250)",
                      "Border radius: 12px",
                      "Links: Find Events, Create Event, My Events",
                    ]}
                  >
                    <div className="w-full overflow-x-auto">
                      <TopbarDesktopSignup />
                    </div>
                  </ConfigCard>

                  <ConfigCard
                    title="Authenticated"
                    description="Logged-in state with Profile link, no button"
                    specs={[
                      "Variant: authenticated",
                      "No CTA button",
                      "Links: Find Events, Create Event, My Events, Profile",
                      "Additional link: Profile",
                    ]}
                  >
                    <div className="w-full overflow-x-auto">
                      <TopbarDesktopAuthenticated />
                    </div>
                  </ConfigCard>
                </div>
              </ConfigSection>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-20">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>Specifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpecCard
                title="Desktop Height"
                value="72px"
                description="Includes 24px top + 24px bottom padding"
              />
              <SpecCard
                title="Mobile Height"
                value="56px"
                description="Includes 16px top + 16px bottom padding"
              />
              <SpecCard
                title="Logo Large"
                value="120 × 36px"
                description="Desktop variant with gradient"
              />
              <SpecCard
                title="Logo Small"
                value="80 × 24px"
                description="Mobile optimized size"
              />
              <SpecCard
                title="Breakpoint"
                value="1080px"
                description="Switches from desktop to mobile layout"
              />
              <SpecCard
                title="Max Width"
                value="1920px"
                description="Container max-width on large screens"
              />
              <SpecCard
                title="Padding X (Desktop)"
                value="80px"
                description="px-20 horizontal spacing"
              />
              <SpecCard
                title="Padding X (Mobile)"
                value="16px"
                description="px-4 horizontal spacing"
              />
              <SpecCard
                title="Border Radius"
                value="12px"
                description="Button border radius (--radius-button)"
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
                {/* Responsive Behavior */}
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Responsive Adaptation
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    The component automatically switches between desktop and mobile layouts at the 1080px breakpoint.
                    This ensures optimal user experience across all device sizes.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Viewport ≥1080px: Desktop layout (size=big, state=default)</li>
                    <li>• Viewport &lt;1080px: Mobile layout (size=small, state=default)</li>
                    <li>• Smooth transition with no visual glitches</li>
                  </ul>
                </div>

                {/* Interactive States */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Mobile Menu Toggle
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    On mobile devices, users can tap the menu icon to reveal navigation links. The component
                    transitions smoothly between collapsed and expanded states.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Hamburger icon (≡) indicates collapsed menu</li>
                    <li>• Close icon (×) indicates expanded menu</li>
                    <li>• Background darkens to 75% opacity when expanded</li>
                    <li>• Border radius applied to bottom corners when expanded</li>
                    <li>• Clicking outside menu area does not close it (click icon to toggle)</li>
                  </ul>
                </div>

                {/* Hover States */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Hover & Active States
                  </h4>
                  <p style={{ color: 'var(--card-foreground)', marginBottom: '12px' }}>
                    Interactive elements provide visual feedback on hover to improve usability.
                  </p>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• All clickable elements reduce opacity to 80% on hover</li>
                    <li>• Mobile menu items show background highlight (5% white overlay)</li>
                    <li>• Smooth opacity transitions (transition-opacity)</li>
                  </ul>
                </div>

                {/* Visual Effects */}
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)' }}>
                    Visual Effects
                  </h4>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                    <li>• Backdrop blur creates depth and modern aesthetic</li>
                    <li>• Gradient bottom border with radial fade effect</li>
                    <li>• Sign Up button features multi-layer gradient and glow</li>
                    <li>• Mobile expanded state includes drop shadow for elevation</li>
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
                This component uses CSS custom properties from your theme.css file. All colors, typography,
                spacing, and border radius values can be customized by updating the design tokens. The component
                is built with accessibility in mind, including proper ARIA labels and keyboard navigation support.
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