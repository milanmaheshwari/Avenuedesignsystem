import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Palette, Type, Ruler, Radius, Link as LinkIcon } from "lucide-react";
import Topbar from "../components/Topbar";
import CategoryCard from "../components/CategoryCard";
import AddItem from "../components/AddItem";
import AppNavBar from "../components/AppNavBar";
import ArtistCard from "../components/ArtistCard";
import Card from "../components/Card";
import { typography, radius as radiusTokens, semanticColors } from "../utils/theme";

export default function HomePage() {
  const navigate = useNavigate();

  const components = [
    {
      name: "Topbar",
      description: "Responsive navigation component with desktop and mobile variants",
      path: "/components/topbar",
      preview: <Topbar platform="desktop" size="big" state="default" />,
      previewScale: 0.5,
    },
    {
      title: "Category Cards",
      description: "Visual category navigation cards with multiple themes and sizes",
      path: "/components/category-cards",
      preview: <CategoryCard size="small" />,
      previewScale: 1.2,
    },
    {
      name: "Add Item",
      description: "Product display card with image, title, price, and action button",
      path: "/components/add-item",
      preview: <AddItem size="small" />,
      previewScale: 1.2,
    },
    {
      name: "App Nav Bar",
      description: "Bottom navigation component with interactive tab switching and animations",
      path: "/components/app-nav-bar",
      preview: <AppNavBar />,
      previewScale: 0.8,
    },
    {
      name: "Artist Card",
      description: "Artist profile card with image and details in multiple sizes",
      path: "/components/artist-card",
      preview: <ArtistCard type="music" size="small" />,
      previewScale: 1.2,
    },
    {
      name: "Card",
      description: "Event card component with Default and Trending variants in multiple sizes",
      path: "/components/card",
      preview: <Card size="Small" type="Default" />,
      previewScale: 1.0,
    },
    // Add more components here as they are created
  ];

  const tokens = [
    {
      name: "Colors",
      description: "Color palette including primary, secondary, accent, and semantic colors",
      path: "/tokens/colors",
      icon: Palette,
    },
    {
      name: "Typography",
      description: "Font sizes, weights, and the Satoshi font family system",
      path: "/tokens/typography",
      icon: Type,
    },
    {
      name: "Spacing",
      description: "Consistent spacing scale for padding, margins, and gaps",
      path: "/tokens/spacing",
      icon: Ruler,
    },
    {
      name: "Corner Radius",
      description: "Border radius values for buttons, cards, and containers",
      path: "/tokens/corner-radius",
      icon: Radius,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4" style={{ color: semanticColors.foreground }}>Design System</h1>
            <p style={{ color: semanticColors.cardForeground }}>
              A collection of reusable components built with your team's design tokens.
              Each component includes interactive demos, specifications, and documentation.
            </p>
          </div>

          {/* Components Section */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: semanticColors.foreground }}>
              Components
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <div
                  key={component.path}
                  onClick={() => navigate(component.path)}
                  className="group block cursor-pointer"
                >
                  <div
                    className="relative flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: semanticColors.card,
                      border: `1px solid ${semanticColors.border}`,
                      borderRadius: radiusTokens.card,
                    }}
                  >
                    {/* Component Preview */}
                    <div 
                      className="flex items-center justify-center overflow-hidden pointer-events-none"
                      style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.3)',
                        borderBottom: `1px solid ${semanticColors.border}`,
                        height: '200px',
                        padding: '24px',
                      }}
                    >
                      <div 
                        style={{
                          transform: `scale(${component.previewScale})`,
                          transformOrigin: 'center',
                        }}
                      >
                        {component.preview}
                      </div>
                    </div>

                    {/* Component info */}
                    <div style={{ padding: '24px' }}>
                      <div className="mb-4 flex items-center justify-between">
                        <h3
                          style={{
                            color: 'var(--foreground)',
                            fontWeight: typography.fontWeight.bold,
                          }}
                        >
                          {component.name}
                        </h3>
                        <ArrowRight
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: semanticColors.mutedForeground }}
                          size={20}
                        />
                      </div>
                      <p style={{ color: semanticColors.cardForeground, fontSize: typography.fontSize.base }}>
                        {component.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
                        borderRadius: radiusTokens.card,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Tokens Section */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ color: semanticColors.foreground }}>
              Design Tokens
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tokens.map((token) => (
                <div
                  key={token.path}
                  onClick={() => navigate(token.path)}
                  className="group block cursor-pointer"
                >
                  <div
                    className="relative flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: semanticColors.card,
                      border: `1px solid ${semanticColors.border}`,
                      borderRadius: radiusTokens.card,
                    }}
                  >
                    {/* Token Icon */}
                    <div 
                      className="flex items-center justify-center overflow-hidden pointer-events-none"
                      style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.3)',
                        borderBottom: `1px solid ${semanticColors.border}`,
                        height: '200px',
                        padding: '24px',
                      }}
                    >
                      <div 
                        style={{
                          transform: `scale(${1.2})`,
                          transformOrigin: 'center',
                        }}
                      >
                        <token.icon size={40} style={{ color: semanticColors.foreground }} />
                      </div>
                    </div>

                    {/* Token info */}
                    <div style={{ padding: '24px' }}>
                      <div className="mb-4 flex items-center justify-between">
                        <h3
                          style={{
                            color: 'var(--foreground)',
                            fontWeight: typography.fontWeight.bold,
                          }}
                        >
                          {token.name}
                        </h3>
                        <ArrowRight
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: semanticColors.mutedForeground }}
                          size={20}
                        />
                      </div>
                      <p style={{ color: semanticColors.cardForeground, fontSize: typography.fontSize.base }}>
                        {token.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
                        borderRadius: radiusTokens.card,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer info */}
          <div
            className="mt-12 p-6 rounded-lg"
            style={{
              backgroundColor: semanticColors.muted,
              border: `1px solid ${semanticColors.border}`,
              borderRadius: radiusTokens.card,
            }}
          >
            <h4 className="mb-2" style={{ color: semanticColors.foreground }}>
              About This Design System
            </h4>
            <p className="mb-4" style={{ color: semanticColors.mutedForeground }}>
              All components use design tokens defined in your theme.css file. Update the CSS variables
              to change colors, typography, spacing, and more across all components.
            </p>
            <button
              onClick={() => navigate('/tokens/mapping')}
              className="inline-flex items-center gap-2 transition-colors hover:underline"
              style={{ 
                color: semanticColors.primary,
                fontSize: typography.fontSize.base,
              }}
            >
              <LinkIcon size={16} />
              <span>View Token Mapping Reference</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}