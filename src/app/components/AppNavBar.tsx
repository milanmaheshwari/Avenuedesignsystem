import { useState } from 'react';
import svgPaths from "../../imports/svg-i2vkb4dk2q";
import { typography, radius, semanticColors } from "../utils/theme";

export type TabId = 'home' | 'events' | 'tickets' | 'profile';

interface AppNavBarProps {
  active?: TabId;
  onTabChange?: (tabId: TabId) => void;
}

export default function AppNavBar({ 
  active: controlledActive, 
  onTabChange 
}: AppNavBarProps) {
  const [internalActive, setInternalActive] = useState<TabId>('home');
  
  // Use controlled value if provided, otherwise use internal state
  const activeTab = controlledActive !== undefined ? controlledActive : internalActive;

  const handleTabClick = (tabId: TabId) => {
    if (controlledActive === undefined) {
      setInternalActive(tabId);
    }
    onTabChange?.(tabId);
  };

  const tabs: Array<{ id: TabId; label: string; pathKey: keyof typeof svgPaths }> = [
    { id: 'home', label: 'HOME', pathKey: 'p19d64100' },
    { id: 'events', label: 'EVENTS', pathKey: 'p3e1ec900' },
    { id: 'tickets', label: 'TICKETS', pathKey: 'p233f4280' },
    { id: 'profile', label: 'PROFILE', pathKey: 'p37a3ca80' },
  ];

  // Calculate active indicator position
  const getActivePosition = () => {
    const positions: Record<TabId, string> = {
      'home': 'calc(50% - 126px)',
      'events': 'calc(50% - 41px)',
      'tickets': 'calc(50% + 44px)',
      'profile': 'calc(50% + 126px)',
    };
    return positions[activeTab];
  };

  return (
    <div 
      className="backdrop-blur backdrop-filter relative size-full" 
      style={{ 
        backgroundImage: "linear-gradient(76.2883deg, rgba(10, 10, 10, 0.75) 11.144%, rgba(10, 10, 10, 0.9) 89.969%)",
        borderRadius: radius.card,
        overflow: 'hidden',
      }}
    >
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          border: `1px solid ${semanticColors.border}`,
          borderRadius: radius.card,
        }}
      />
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between px-[12px] py-[8px] relative size-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="content-stretch flex flex-col gap-[6px] items-center px-0 py-[4px] relative shrink-0 w-[60px] cursor-pointer transition-all hover:opacity-80"
              >
                {/* Icon */}
                <div className="relative shrink-0 size-[32px]">
                  <div className="absolute inset-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g>
                        <rect 
                          fill={isActive ? "url(#paint0_linear_active)" : "url(#paint0_linear_inactive)"} 
                          height="32" 
                          rx="8" 
                          width="32" 
                        />
                        <rect 
                          height="31" 
                          rx="7.5" 
                          stroke={semanticColors.border} 
                          width="31" 
                          x="0.5" 
                          y="0.5" 
                        />
                        <path 
                          d={svgPaths[tab.pathKey]} 
                          stroke={isActive ? semanticColors.primary : semanticColors.foreground} 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeOpacity={isActive ? "1" : "0.5"} 
                          strokeWidth="1.5" 
                        />
                      </g>
                      <defs>
                        <linearGradient 
                          gradientUnits="userSpaceOnUse" 
                          id="paint0_linear_active" 
                          x1="5.2" 
                          x2="18.8" 
                          y1="-2.4" 
                          y2="37.2"
                        >
                          <stop stopColor={semanticColors.primary} stopOpacity="0.25" />
                          <stop offset="1" stopColor={semanticColors.primary} stopOpacity="0.05" />
                        </linearGradient>
                        <linearGradient 
                          gradientUnits="userSpaceOnUse" 
                          id="paint0_linear_inactive" 
                          x1="5.2" 
                          x2="18.8" 
                          y1="-2.4" 
                          y2="37.2"
                        >
                          <stop stopColor={semanticColors.foreground} stopOpacity="0.1" />
                          <stop offset="1" stopColor={semanticColors.foreground} stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div 
                    className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center w-full"
                    style={{
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.medium,
                      fontSize: '12px',
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      color: isActive ? semanticColors.primary : semanticColors.secondaryForeground,
                      lineHeight: '14px',
                    }}
                  >
                    {tab.label}
                  </div>
                </div>
              </button>
            );
          })}
          
          {/* Active Indicator */}
          <div 
            className="absolute bottom-0 h-px w-[60px] transition-all duration-300 ease-out"
            style={{ 
              left: getActivePosition(),
              transform: 'translateX(-50%)',
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 60 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(3.7722 0 0 0.1 30 1)\\'><stop stop-color=\\'rgba(79,70,229,0.5)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(79,70,229,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
            }} 
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0.5px_1px_0px_0.75px_rgba(250,250,250,0.05)]" />
    </div>
  );
}