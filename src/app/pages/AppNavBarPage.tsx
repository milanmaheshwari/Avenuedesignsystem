import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import AppNavBar, { TabId } from "../components/AppNavBar";

type VariantType = 'home' | 'events' | 'tickets' | 'profile';

export default function AppNavBarPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('home');
  const [interactiveTab, setInteractiveTab] = useState<TabId>('home');

  const variants: Array<{ 
    id: VariantType; 
    label: string; 
    activeTab: TabId;
  }> = [
    { id: 'home', label: 'Home Active', activeTab: 'home' },
    { id: 'events', label: 'Events Active', activeTab: 'events' },
    { id: 'tickets', label: 'Tickets Active', activeTab: 'tickets' },
    { id: 'profile', label: 'Profile Active', activeTab: 'profile' },
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
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>App Nav Bar</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Bottom navigation component · 4 tabs · Interactive states
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
                className="p-12 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  minHeight: '200px',
                }}
              >
                <div style={{ width: '320px', height: '72px' }}>
                  <AppNavBar active={currentVariant.activeTab} />
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Overview</h2>
              <p style={{ color: 'var(--card-foreground)' }}>
                The App Nav Bar is a bottom navigation component designed for mobile applications. 
                It features four navigation tabs (Home, Events, Tickets, Profile) with interactive states, 
                icon styling, and a smooth animated active indicator that slides between tabs.
              </p>
            </section>

            {/* Interactive Demo */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Interactive Demo</h2>
              <p className="mb-6" style={{ color: 'var(--card-foreground)' }}>
                Click on any tab to see the active state change with animation:
              </p>
              <div
                className="rounded-2xl p-8 flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ width: '320px', height: '72px' }}>
                  <AppNavBar 
                    active={interactiveTab} 
                    onTabChange={setInteractiveTab}
                  />
                </div>
              </div>
              <p className="mt-4" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                Currently active: <strong style={{ color: 'var(--primary)' }}>{interactiveTab.toUpperCase()}</strong>
              </p>
            </section>

            {/* Properties */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Properties</h2>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  border: '1px solid var(--border)',
                }}
              >
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)' }}>
                      <th 
                        className="text-left p-4"
                        style={{ 
                          color: 'var(--foreground)',
                          fontWeight: 'var(--font-weight-bold)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        Prop
                      </th>
                      <th 
                        className="text-left p-4"
                        style={{ 
                          color: 'var(--foreground)',
                          fontWeight: 'var(--font-weight-bold)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        Type
                      </th>
                      <th 
                        className="text-left p-4"
                        style={{ 
                          color: 'var(--foreground)',
                          fontWeight: 'var(--font-weight-bold)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        Default
                      </th>
                      <th 
                        className="text-left p-4"
                        style={{ 
                          color: 'var(--foreground)',
                          fontWeight: 'var(--font-weight-bold)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="p-4">
                        <code 
                          className="px-2 py-1 rounded"
                          style={{ 
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            color: 'var(--primary-foreground)',
                            fontSize: '13px',
                          }}
                        >
                          active
                        </code>
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        'home' | 'events' | 'tickets' | 'profile'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        'home'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        Controls which tab is currently active
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code 
                          className="px-2 py-1 rounded"
                          style={{ 
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            color: 'var(--primary-foreground)',
                            fontSize: '13px',
                          }}
                        >
                          onTabChange
                        </code>
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        (tabId: TabId) =&gt; void
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        undefined
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        Callback fired when a tab is clicked
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Variants */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Variants</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {variants.map((variant) => (
                  <div key={variant.id}>
                    <h3 className="mb-4" style={{ color: 'var(--foreground)' }}>
                      {variant.label}
                    </h3>
                    <div
                      className="rounded-2xl p-8 flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.5)',
                        border: '1px solid var(--border)',
                        minHeight: '160px',
                      }}
                    >
                      <div style={{ width: '320px', height: '72px' }}>
                        <AppNavBar active={variant.activeTab} />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Active Tab:</strong>{' '}
                        {variant.activeTab}
                      </p>
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Active Color:</strong>{' '}
                        var(--primary)
                      </p>
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Inactive Opacity:</strong>{' '}
                        0.5
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Usage Example */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Usage Example</h2>
              <div
                className="rounded-lg p-6 overflow-x-auto"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  border: '1px solid var(--border)',
                }}
              >
                <pre style={{ color: 'var(--foreground)', fontSize: '14px' }}>
                  <code>{`import AppNavBar from './components/AppNavBar';
import { useState } from 'react';

function MyApp() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ width: '320px', height: '72px' }}>
      <AppNavBar 
        active={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}

// Controlled component
<AppNavBar active="events" />

// Uncontrolled with callback
<AppNavBar onTabChange={(tab) => console.log(tab)} />`}</code>
                </pre>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Features</h2>
              <div
                className="rounded-lg p-6"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  border: '1px solid var(--border)',
                }}
              >
                <ul className="space-y-3">
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Interactive Tabs:</strong> Click any tab to change the active state
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Smooth Animations:</strong> Active indicator slides smoothly between tabs
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Visual Feedback:</strong> Active tab shows primary color with highlighted icon
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Hover States:</strong> Tabs respond to hover with opacity change
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Controlled/Uncontrolled:</strong> Works both as controlled and uncontrolled component
                  </li>
                </ul>
              </div>
            </section>

            {/* Design Tokens */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Design Tokens Used</h2>
              <div
                className="rounded-lg p-6"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  border: '1px solid var(--border)',
                }}
              >
                <ul className="space-y-2">
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--primary</code> - Active tab icon and text color
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--secondary-foreground</code> - Inactive tab text color
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--foreground</code> - Inactive tab icon color
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--border</code> - Component border
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--radius-card</code> - Border radius
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--font-satoshi</code> - Typography
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--font-weight-medium</code> - Tab label weight
                  </li>
                </ul>
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Specifications</h2>
              <div
                className="rounded-lg p-6"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.5)',
                  border: '1px solid var(--border)',
                }}
              >
                <ul className="space-y-2">
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Recommended Width:</strong> 320px
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Height:</strong> 72px
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Tab Width:</strong> 60px each
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Icon Size:</strong> 32×32px
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Label Font Size:</strong> 12px
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Letter Spacing:</strong> 1.2px
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
