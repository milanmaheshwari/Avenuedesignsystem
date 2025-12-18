import { useState } from "react";
import svgPathsBig from "../../imports/svg-kblll8k7vd";
import svgPathsSmall from "../../imports/svg-zo2synpzn2";

interface TopbarProps {
  className?: string;
}

// Logo component - Big variant (120x36)
function LogoBig() {
  return (
    <div className="h-[36px] w-[120px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 36">
        <g>
          <g>
            <path d={svgPathsBig.p1041faa0} fill="url(#paint0_linear_big)" />
            <path d={svgPathsBig.p8eea380} fill="url(#paint1_linear_big)" />
            <path d={svgPathsBig.p1f7ba700} fill="url(#paint2_linear_big)" />
            <path d={svgPathsBig.p1e5ec980} fill="url(#paint3_linear_big)" />
            <path d={svgPathsBig.p5839b80} fill="url(#paint4_linear_big)" />
            <path d={svgPathsBig.p157d9a00} fill="url(#paint5_linear_big)" />
            <path d={svgPathsBig.p3c25e00} fill="url(#paint6_linear_big)" />
            <path d={svgPathsBig.p36b9bc80} fill="url(#paint7_linear_big)" />
            <path d={svgPathsBig.p16581000} fill="url(#paint8_linear_big)" />
            <path d={svgPathsBig.p34e81f00} fill="url(#paint9_linear_big)" />
            <path d={svgPathsBig.pc070900} fill="url(#paint10_linear_big)" />
            <path d={svgPathsBig.p205eab80} fill="url(#paint11_linear_big)" />
          </g>
          <g>
            <path d={svgPathsBig.p10f50400} fill="url(#paint12_linear_big)" />
          </g>
        </g>
        <defs>
          {[...Array(12)].map((_, i) => (
            <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_big`} x1="81.8403" x2="81.8403" y1="-0.313239" y2="37.2847">
              <stop stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#E5E5E5" />
            </linearGradient>
          ))}
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_big" x1="18.3785" x2="18.3785" y1="0" y2="36">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#4338CA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Logo component - Small variant (80x24)
function LogoSmall() {
  return (
    <div className="h-[24px] w-[80px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 24">
        <g>
          <g>
            <path d={svgPathsSmall.p32682800} fill="url(#paint0_linear_small)" />
            <path d={svgPathsSmall.p30fc7500} fill="url(#paint1_linear_small)" />
            <path d={svgPathsSmall.p13a00100} fill="url(#paint2_linear_small)" />
            <path d={svgPathsSmall.p11044400} fill="url(#paint3_linear_small)" />
            <path d={svgPathsSmall.p6e12e00} fill="url(#paint4_linear_small)" />
            <path d={svgPathsSmall.p2bd18080} fill="url(#paint5_linear_small)" />
            <path d={svgPathsSmall.p294d5680} fill="url(#paint6_linear_small)" />
            <path d={svgPathsSmall.p2f931770} fill="url(#paint7_linear_small)" />
            <path d={svgPathsSmall.pb264700} fill="url(#paint8_linear_small)" />
            <path d={svgPathsSmall.p22eceb00} fill="url(#paint9_linear_small)" />
            <path d={svgPathsSmall.p1144f180} fill="url(#paint10_linear_small)" />
            <path d={svgPathsSmall.pdcfe900} fill="url(#paint11_linear_small)" />
          </g>
          <g>
            <path d={svgPathsSmall.p2c380b00} fill="url(#paint12_linear_small)" />
          </g>
        </g>
        <defs>
          {[...Array(12)].map((_, i) => (
            <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_small`} x1="54.5619" x2="54.5619" y1="-0.208826" y2="24.8564">
              <stop stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#E5E5E5" />
            </linearGradient>
          ))}
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_small" x1="12.2524" x2="12.2524" y1="0" y2="24">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#4338CA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Chevron icon for location dropdown
function ChevronIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M5 9.375L10 14.375L15 9.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" strokeOpacity="0.9" />
    </svg>
  );
}

// Hamburger menu icon
function MenuIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="M4 5H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M4 12H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M4 19H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
    </svg>
  );
}

// Close icon
function CloseIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="M19.9961 4L3.99609 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M3.99609 4L19.9961 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
    </svg>
  );
}

// Arrow icon for button
function ArrowIcon() {
  return (
    <span>→</span>
  );
}

export default function Topbar({ className = "" }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop variant - size=big, state=default */}
      <div className={`hidden lg:block w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)] ${className}`}>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center px-20 py-0 w-full max-w-[1920px]">
            <div className="flex items-center justify-between py-6 w-full relative">
              {/* Bottom border gradient */}
              <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.474 0 0 0.1 640 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
              
              {/* Left side: Logo and Location */}
              <div className="flex gap-6 items-center">
                <LogoBig />
                
                {/* Divider */}
                <div className="h-9 w-px bg-foreground opacity-10" />
                
                {/* Location dropdown */}
                <button className="flex gap-1 items-center px-0 py-1 rounded-[999px] text-card-foreground hover:opacity-80 transition-opacity">
                  <span style={{ fontWeight: 'var(--font-weight-medium)' }}>New York</span>
                  <ChevronIcon />
                </button>
              </div>

              {/* Right side: Links and Sign Up */}
              <div className="flex gap-1 items-center">
                {/* Navigation links */}
                <nav className="flex items-center px-2 py-[9px] rounded-[999px]">
                  <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Find Events</a>
                  <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Create Event</a>
                  <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>My Events</a>
                </nav>

                {/* Sign Up button */}
                <button 
                  className="flex gap-1 items-center justify-center px-4 py-3 rounded-[10px] shadow-[0px_2px_5px_0px_rgba(79,70,229,0.05)] relative"
                  style={{ 
                    backgroundImage: "linear-gradient(90.0032deg, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0.1) 50.01%, rgba(79, 70, 229, 0.05) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 111 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.745 0 0 9.2776 55.5 40)\\'><stop stop-color=\\'rgba(79,70,229,0.5)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(79,70,229,0)\\' offset=\\'0.2524\\'/></radialGradient></defs></svg>'), linear-gradient(rgba(79, 70, 229, 0) 0%, rgba(79, 70, 229, 0.05) 100%)"
                  }}
                >
                  <span className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)' }}>Sign Up</span>
                  <ArrowIcon />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(79,70,229,0.05),inset_0px_-8px_32px_0px_rgba(79,70,229,0.1)] rounded-[10px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile variants - size=small */}
      <div className={`lg:hidden w-full backdrop-blur backdrop-filter ${isMenuOpen ? 'bg-[rgba(10,10,10,0.75)] rounded-bl-3xl rounded-br-3xl' : 'bg-[rgba(10,10,10,0.1)]'} ${className}`}>
        <div className="flex flex-col items-center w-full">
          <div className={`flex flex-col items-center px-4 py-0 w-full ${isMenuOpen ? 'gap-1 overflow-clip' : ''} relative`}>
            {/* Bottom border gradient - position changes based on state */}
            {!isMenuOpen && (
              <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            )}

            {/* Header with logo and toggle button */}
            <div className="flex items-center justify-between py-4 w-full relative">
              <LogoSmall />
              
              <button 
                onClick={toggleMenu}
                className="flex items-center justify-center text-foreground hover:opacity-80 transition-opacity"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            {/* Expanded navigation menu - state=expanded */}
            {isMenuOpen && (
              <>
                {/* Divider between header and nav */}
                <div className="absolute h-px left-0 right-0" style={{ top: '56px', backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
                
                <nav className="flex flex-col items-start pb-3 pt-2 w-full">
                  <a href="#" className="w-full rounded-[20px] hover:bg-[rgba(250,250,250,0.05)] transition-colors">
                    <div className="flex items-center px-3 py-[13px]">
                      <span className="text-foreground">Find Events</span>
                    </div>
                  </a>
                  <a href="#" className="w-full rounded-[20px] hover:bg-[rgba(250,250,250,0.05)] transition-colors">
                    <div className="flex items-center px-3 py-[13px]">
                      <span className="text-foreground">Create Event</span>
                    </div>
                  </a>
                  <a href="#" className="w-full rounded-[20px] hover:bg-[rgba(250,250,250,0.05)] transition-colors">
                    <div className="flex items-center px-3 py-[13px]">
                      <span className="text-foreground">My Events</span>
                    </div>
                  </a>
                  <a href="#" className="w-full rounded-[20px] hover:bg-[rgba(250,250,250,0.05)] transition-colors">
                    <div className="flex items-center px-3 py-[13px]">
                      <span className="text-foreground">Profile</span>
                    </div>
                  </a>
                </nav>
              </>
            )}
          </div>
        </div>

        {/* Border and shadow for expanded state */}
        {isMenuOpen && (
          <div className="absolute border-[0px_1px_1px] border-[rgba(250,250,250,0.05)] border-solid inset-0 pointer-events-none rounded-bl-3xl rounded-br-3xl shadow-[0px_0px_40px_20px_rgba(7,13,79,0.05)]" />
        )}
      </div>
    </>
  );
}
