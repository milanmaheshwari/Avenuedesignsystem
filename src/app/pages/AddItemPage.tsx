import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import AddItem, { AddItemSize } from "../components/AddItem";

type VariantType = 'large' | 'small';

export default function AddItemPage() {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('large');

  const variants: Array<{ 
    id: VariantType; 
    label: string; 
    component: React.ReactNode;
    size: AddItemSize;
  }> = [
    { id: 'large', label: 'Large', component: <AddItem size="large" />, size: 'large' },
    { id: 'small', label: 'Small', component: <AddItem size="small" />, size: 'small' },
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
                <h1 className="mb-2" style={{ color: 'var(--foreground)' }}>Add Item</h1>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
                  Product display card · 2 sizes · 2 variants
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
                  minHeight: '500px',
                }}
              >
                {currentVariant.component}
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="mb-4" style={{ color: 'var(--foreground)' }}>Overview</h2>
              <p style={{ color: 'var(--card-foreground)' }}>
                The Add Item component displays a product card with an image, title, price, and an action button. 
                It's designed for e-commerce interfaces where users can browse and add items to their cart.
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
                          size
                        </code>
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        'large' | 'small'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        'large'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        Controls the overall size of the card
                      </td>
                    </tr>
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
                          title
                        </code>
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        string
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        'Official Cosmic...'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        Product name or title
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
                          price
                        </code>
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        string
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        '$100.00'
                      </td>
                      <td className="p-4" style={{ color: 'var(--card-foreground)' }}>
                        Product price
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
                        minHeight: '400px',
                      }}
                    >
                      {variant.component}
                    </div>
                    <div className="mt-4 space-y-2">
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Card Width:</strong>{' '}
                        {variant.size === 'large' ? '240px' : '160px'}
                      </p>
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Image Size:</strong>{' '}
                        {variant.size === 'large' ? '240×240px' : '160×160px'}
                      </p>
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Gap:</strong>{' '}
                        {variant.size === 'large' ? '16px card / 24px details' : '12px card / 16px details'}
                      </p>
                      <p style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Border Radius:</strong>{' '}
                        {variant.size === 'large' ? '20px card / 12px button' : '16px card / 12px button'}
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
                  <code>{`import AddItem from './components/AddItem';

// Large variant (default)
<AddItem 
  size="large"
  title="Official Cosmic Collision Cap- Dark Blue"
  price="$100.00"
/>

// Small variant
<AddItem 
  size="small"
  title="Premium Hoodie"
  price="$75.00"
/>`}</code>
                </pre>
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
                    <code style={{ color: 'var(--primary)' }}>--font-weight-bold</code> - Product title weight
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--font-weight-medium</code> - Price weight
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--primary-foreground</code> - Button text color
                  </li>
                  <li style={{ color: 'var(--card-foreground)' }}>
                    <code style={{ color: 'var(--primary)' }}>--radius-button</code> - Button border radius
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