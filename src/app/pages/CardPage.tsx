import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Card, { CardSize, CardType } from "../components/Card";

type VariantType = 'big-default' | 'big-trending' | 'medium-default' | 'small-default' | 'small-trending';

export default function CardPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('big-default');

  const variants: Array<{ 
    id: VariantType; 
    label: string; 
    component: React.ReactNode;
    size: CardSize;
    type: CardType;
    dimensions: string;
  }> = [
    { 
      id: 'big-default', 
      label: 'Big - Default', 
      component: <Card size="Big" type="Default" />, 
      size: 'Big', 
      type: 'Default',
      dimensions: '360×494px'
    },
    { 
      id: 'big-trending', 
      label: 'Big - Trending', 
      component: <Card size="Big" type="Trending" />, 
      size: 'Big', 
      type: 'Trending',
      dimensions: '360×494px'
    },
    { 
      id: 'medium-default', 
      label: 'Medium - Default', 
      component: <Card size="Medium" type="Default" />, 
      size: 'Medium', 
      type: 'Default',
      dimensions: '292×401px'
    },
    { 
      id: 'small-default', 
      label: 'Small - Default', 
      component: <Card size="Small" type="Default" />, 
      size: 'Small', 
      type: 'Default',
      dimensions: '156×215px'
    },
    { 
      id: 'small-trending', 
      label: 'Small - Trending', 
      component: <Card size="Small" type="Trending" />, 
      size: 'Small', 
      type: 'Trending',
      dimensions: '156×215px'
    },
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
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Card</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Event card component · 3 sizes · 2 types · 5 variants
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
                  minHeight: '580px',
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
                      Size: {currentVariant.size} · Type: {currentVariant.type} · {currentVariant.dimensions}
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
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              All Variants
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Big Cards */}
              <div>
                <h3 
                  className="mb-4"
                  style={{ 
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                >
                  Big Size
                </h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p 
                      className="mb-3"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        fontSize: '13px',
                      }}
                    >
                      Default - 360×494px
                    </p>
                    <Card size="Big" type="Default" />
                  </div>
                  <div>
                    <p 
                      className="mb-3"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        fontSize: '13px',
                      }}
                    >
                      Trending - 360×494px
                    </p>
                    <Card size="Big" type="Trending" />
                  </div>
                </div>
              </div>

              {/* Medium Cards */}
              <div>
                <h3 
                  className="mb-4"
                  style={{ 
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                >
                  Medium Size
                </h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p 
                      className="mb-3"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        fontSize: '13px',
                      }}
                    >
                      Default - 292×401px
                    </p>
                    <Card size="Medium" type="Default" />
                  </div>
                </div>
              </div>

              {/* Small Cards */}
              <div>
                <h3 
                  className="mb-4"
                  style={{ 
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                >
                  Small Size
                </h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p 
                      className="mb-3"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        fontSize: '13px',
                      }}
                    >
                      Default - 156×215px
                    </p>
                    <Card size="Small" type="Default" />
                  </div>
                  <div>
                    <p 
                      className="mb-3"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        fontSize: '13px',
                      }}
                    >
                      Trending - 156×215px
                    </p>
                    <Card size="Small" type="Trending" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Documentation */}
          <div className="mb-16">
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Usage
            </h2>
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="mb-4">
                <h3 
                  style={{ 
                    color: 'var(--foreground)', 
                    fontSize: '16px', 
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '8px',
                  }}
                >
                  Import
                </h3>
                <div
                  className="p-4 rounded-lg overflow-x-auto"
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.5)',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                  }}
                >
                  <pre style={{ color: 'var(--foreground)', margin: 0 }}>
{`import Card from './components/Card';`}
                  </pre>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Basic Example */}
                <div>
                  <h4 
                    style={{ 
                      color: 'var(--foreground)', 
                      fontSize: '14px', 
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px',
                    }}
                  >
                    Basic Card
                  </h4>
                  <div
                    className="p-4 rounded-lg overflow-x-auto"
                    style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.5)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                    }}
                  >
                    <pre style={{ color: 'var(--foreground)', margin: 0 }}>
{`<Card
  size="Big"
  type="Default"
  title="Jazz Under the Stars"
  subtitle="City Park • Dec 1"
  image={imageUrl}
/>`}
                    </pre>
                  </div>
                </div>

                {/* Trending Example */}
                <div>
                  <h4 
                    style={{ 
                      color: 'var(--foreground)', 
                      fontSize: '14px', 
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px',
                    }}
                  >
                    Trending Card
                  </h4>
                  <div
                    className="p-4 rounded-lg overflow-x-auto"
                    style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.5)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                    }}
                  >
                    <pre style={{ color: 'var(--foreground)', margin: 0 }}>
{`<Card
  size="Small"
  type="Trending"
  title="Event Name"
  subtitle="Location • Date"
/>`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Props Documentation */}
          <div>
            <h2 className="mb-6" style={{ color: 'var(--foreground)' }}>
              Props
            </h2>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--card)',
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
                        fontSize: '14px',
                      }}
                    >
                      Prop
                    </th>
                    <th 
                      className="text-left p-4"
                      style={{ 
                        color: 'var(--foreground)', 
                        fontWeight: 'var(--font-weight-bold)',
                        fontSize: '14px',
                      }}
                    >
                      Type
                    </th>
                    <th 
                      className="text-left p-4"
                      style={{ 
                        color: 'var(--foreground)', 
                        fontWeight: 'var(--font-weight-bold)',
                        fontSize: '14px',
                      }}
                    >
                      Default
                    </th>
                    <th 
                      className="text-left p-4"
                      style={{ 
                        color: 'var(--foreground)', 
                        fontWeight: 'var(--font-weight-bold)',
                        fontSize: '14px',
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prop: 'size', type: "'Big' | 'Medium' | 'Small'", default: "'Big'", desc: 'Card size variant' },
                    { prop: 'type', type: "'Default' | 'Trending'", default: "'Default'", desc: 'Card type with or without number badge' },
                    { prop: 'title', type: 'string', default: "'Jazz Under the Stars'", desc: 'Event title text' },
                    { prop: 'subtitle', type: 'string', default: "'City Park • Dec 1'", desc: 'Event location and date' },
                    { prop: 'image', type: 'string', default: '(default image)', desc: 'Event image URL' },
                  ].map((row, i) => (
                    <tr 
                      key={i}
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <td 
                        className="p-4"
                        style={{ 
                          color: 'var(--primary)', 
                          fontFamily: 'monospace',
                          fontSize: '13px',
                        }}
                      >
                        {row.prop}
                      </td>
                      <td 
                        className="p-4"
                        style={{ 
                          color: 'var(--muted-foreground)', 
                          fontFamily: 'monospace',
                          fontSize: '13px',
                        }}
                      >
                        {row.type}
                      </td>
                      <td 
                        className="p-4"
                        style={{ 
                          color: 'var(--muted-foreground)', 
                          fontFamily: 'monospace',
                          fontSize: '13px',
                        }}
                      >
                        {row.default}
                      </td>
                      <td 
                        className="p-4"
                        style={{ 
                          color: 'var(--muted-foreground)', 
                          fontSize: '13px',
                        }}
                      >
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
