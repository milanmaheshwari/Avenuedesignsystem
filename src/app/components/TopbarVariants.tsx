import svgPathsLocation from "../../imports/svg-mxtz2s1k29";
import svgPathsIcons from "../../imports/svg-szcfn0jlsp";
import svgPathsIconsExtended from "../../imports/svg-gfwe8a44r6";
import svgPathsMinimal from "../../imports/svg-v7lbe3aarf";
import svgPathsBig from "../../imports/svg-kblll8k7vd";
import svgPathsSmall from "../../imports/svg-zo2synpzn2";

// Shared Logo components
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

function ChevronIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M5 9.375L10 14.375L15 9.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" strokeOpacity="0.9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="M4 5H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M4 12H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M4 19H19.9978" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="M19.9961 4L3.99609 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
      <path d="M3.99609 4L19.9961 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99973" />
    </svg>
  );
}

function ArrowIcon() {
  return <span>→</span>;
}

// Desktop variant - size=big, state=default
export function TopbarDesktop() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-20 py-0 w-full max-w-[1920px]">
          <div className="flex items-center justify-between py-6 w-full relative">
            <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.474 0 0 0.1 640 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            
            <div className="flex gap-6 items-center">
              <div className="h-[36px] w-[120px] shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 36">
                  <g>
                    <g>
                      <path d={svgPathsBig.p1041faa0} fill="url(#paint0_linear_desktop)" />
                      <path d={svgPathsBig.p8eea380} fill="url(#paint1_linear_desktop)" />
                      <path d={svgPathsBig.p1f7ba700} fill="url(#paint2_linear_desktop)" />
                      <path d={svgPathsBig.p1e5ec980} fill="url(#paint3_linear_desktop)" />
                      <path d={svgPathsBig.p5839b80} fill="url(#paint4_linear_desktop)" />
                      <path d={svgPathsBig.p157d9a00} fill="url(#paint5_linear_desktop)" />
                      <path d={svgPathsBig.p3c25e00} fill="url(#paint6_linear_desktop)" />
                      <path d={svgPathsBig.p36b9bc80} fill="url(#paint7_linear_desktop)" />
                      <path d={svgPathsBig.p16581000} fill="url(#paint8_linear_desktop)" />
                      <path d={svgPathsBig.p34e81f00} fill="url(#paint9_linear_desktop)" />
                      <path d={svgPathsBig.pc070900} fill="url(#paint10_linear_desktop)" />
                      <path d={svgPathsBig.p205eab80} fill="url(#paint11_linear_desktop)" />
                    </g>
                    <g>
                      <path d={svgPathsBig.p10f50400} fill="url(#paint12_linear_desktop)" />
                    </g>
                  </g>
                  <defs>
                    {[...Array(12)].map((_, i) => (
                      <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_desktop`} x1="81.8403" x2="81.8403" y1="-0.313239" y2="37.2847">
                        <stop stopColor="#FAFAFA" />
                        <stop offset="1" stopColor="#E5E5E5" />
                      </linearGradient>
                    ))}
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_desktop" x1="18.3785" x2="18.3785" y1="0" y2="36">
                      <stop stopColor="#4F46E5" />
                      <stop offset="1" stopColor="#4338CA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="h-9 w-px bg-foreground opacity-10" />
              <button className="flex gap-1 items-center px-0 py-1 rounded-[999px] text-card-foreground hover:opacity-80 transition-opacity">
                <span style={{ fontWeight: 'var(--font-weight-medium)' }}>New York</span>
                <ChevronIcon />
              </button>
            </div>

            <div className="flex gap-1 items-center">
              <nav className="flex items-center px-2 py-[9px] rounded-[999px]">
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Find Events</a>
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Create Event</a>
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>My Events</a>
              </nav>

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
  );
}

// Mobile variant - size=small, state=default
export function TopbarMobileDefault() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full relative">
          <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />

          <div className="flex items-center justify-between py-4 w-full relative">
            <div className="h-[24px] w-[80px] shrink-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 24">
                <g>
                  <g>
                    <path d={svgPathsSmall.p32682800} fill="url(#paint0_linear_mobile_default)" />
                    <path d={svgPathsSmall.p30fc7500} fill="url(#paint1_linear_mobile_default)" />
                    <path d={svgPathsSmall.p13a00100} fill="url(#paint2_linear_mobile_default)" />
                    <path d={svgPathsSmall.p11044400} fill="url(#paint3_linear_mobile_default)" />
                    <path d={svgPathsSmall.p6e12e00} fill="url(#paint4_linear_mobile_default)" />
                    <path d={svgPathsSmall.p2bd18080} fill="url(#paint5_linear_mobile_default)" />
                    <path d={svgPathsSmall.p294d5680} fill="url(#paint6_linear_mobile_default)" />
                    <path d={svgPathsSmall.p2f931770} fill="url(#paint7_linear_mobile_default)" />
                    <path d={svgPathsSmall.pb264700} fill="url(#paint8_linear_mobile_default)" />
                    <path d={svgPathsSmall.p22eceb00} fill="url(#paint9_linear_mobile_default)" />
                    <path d={svgPathsSmall.p1144f180} fill="url(#paint10_linear_mobile_default)" />
                    <path d={svgPathsSmall.pdcfe900} fill="url(#paint11_linear_mobile_default)" />
                  </g>
                  <g>
                    <path d={svgPathsSmall.p2c380b00} fill="url(#paint12_linear_mobile_default)" />
                  </g>
                </g>
                <defs>
                  {[...Array(12)].map((_, i) => (
                    <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_mobile_default`} x1="54.5619" x2="54.5619" y1="-0.208826" y2="24.8564">
                      <stop stopColor="#FAFAFA" />
                      <stop offset="1" stopColor="#E5E5E5" />
                    </linearGradient>
                  ))}
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_mobile_default" x1="12.2524" x2="12.2524" y1="0" y2="24">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#4338CA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <button className="flex items-center justify-center text-foreground hover:opacity-80 transition-opacity" aria-label="Open menu">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile variant - size=small, state=expanded
export function TopbarMobileExpanded() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.75)] rounded-bl-3xl rounded-br-3xl relative">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full gap-1 overflow-clip relative">
          <div className="flex items-center justify-between py-4 w-full relative">
            <div className="h-[24px] w-[80px] shrink-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 24">
                <g>
                  <g>
                    <path d={svgPathsSmall.p32682800} fill="url(#paint0_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p30fc7500} fill="url(#paint1_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p13a00100} fill="url(#paint2_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p11044400} fill="url(#paint3_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p6e12e00} fill="url(#paint4_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p2bd18080} fill="url(#paint5_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p294d5680} fill="url(#paint6_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p2f931770} fill="url(#paint7_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.pb264700} fill="url(#paint8_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p22eceb00} fill="url(#paint9_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.p1144f180} fill="url(#paint10_linear_mobile_expanded)" />
                    <path d={svgPathsSmall.pdcfe900} fill="url(#paint11_linear_mobile_expanded)" />
                  </g>
                  <g>
                    <path d={svgPathsSmall.p2c380b00} fill="url(#paint12_linear_mobile_expanded)" />
                  </g>
                </g>
                <defs>
                  {[...Array(12)].map((_, i) => (
                    <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_mobile_expanded`} x1="54.5619" x2="54.5619" y1="-0.208826" y2="24.8564">
                      <stop stopColor="#FAFAFA" />
                      <stop offset="1" stopColor="#E5E5E5" />
                    </linearGradient>
                  ))}
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_mobile_expanded" x1="12.2524" x2="12.2524" y1="0" y2="24">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#4338CA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <button className="flex items-center justify-center text-foreground hover:opacity-80 transition-opacity" aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>

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
        </div>
      </div>

      <div className="absolute border-[0px_1px_1px] border-[rgba(250,250,250,0.05)] border-solid inset-0 pointer-events-none rounded-bl-3xl rounded-br-3xl shadow-[0px_0px_40px_20px_rgba(7,13,79,0.05)]" />
    </div>
  );
}

// Desktop variant with light Sign Up button - variant=signup
export function TopbarDesktopSignup() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-20 py-0 w-full max-w-[1920px]">
          <div className="flex items-center justify-between py-6 w-full relative">
            <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.474 0 0 0.1 640 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            
            <div className="flex gap-6 items-center">
              <div className="h-[36px] w-[120px] shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 36">
                  <g>
                    <g>
                      <path d={svgPathsBig.p1041faa0} fill="url(#paint0_linear_signup)" />
                      <path d={svgPathsBig.p8eea380} fill="url(#paint1_linear_signup)" />
                      <path d={svgPathsBig.p1f7ba700} fill="url(#paint2_linear_signup)" />
                      <path d={svgPathsBig.p1e5ec980} fill="url(#paint3_linear_signup)" />
                      <path d={svgPathsBig.p5839b80} fill="url(#paint4_linear_signup)" />
                      <path d={svgPathsBig.p157d9a00} fill="url(#paint5_linear_signup)" />
                      <path d={svgPathsBig.p3c25e00} fill="url(#paint6_linear_signup)" />
                      <path d={svgPathsBig.p36b9bc80} fill="url(#paint7_linear_signup)" />
                      <path d={svgPathsBig.p16581000} fill="url(#paint8_linear_signup)" />
                      <path d={svgPathsBig.p34e81f00} fill="url(#paint9_linear_signup)" />
                      <path d={svgPathsBig.pc070900} fill="url(#paint10_linear_signup)" />
                      <path d={svgPathsBig.p205eab80} fill="url(#paint11_linear_signup)" />
                    </g>
                    <g>
                      <path d={svgPathsBig.p10f50400} fill="url(#paint12_linear_signup)" />
                    </g>
                  </g>
                  <defs>
                    {[...Array(12)].map((_, i) => (
                      <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_signup`} x1="81.8403" x2="81.8403" y1="-0.313239" y2="37.2847">
                        <stop stopColor="#FAFAFA" />
                        <stop offset="1" stopColor="#E5E5E5" />
                      </linearGradient>
                    ))}
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_signup" x1="18.3785" x2="18.3785" y1="0" y2="36">
                      <stop stopColor="#4F46E5" />
                      <stop offset="1" stopColor="#4338CA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="h-9 w-px bg-foreground opacity-10" />
              <button className="flex gap-1 items-center px-0 py-1 rounded-[999px] text-card-foreground hover:opacity-80 transition-opacity">
                <span style={{ fontWeight: 'var(--font-weight-medium)' }}>New York</span>
                <ChevronIcon />
              </button>
            </div>

            <div className="flex gap-1 items-center">
              <nav className="flex items-center px-2 py-[9px] rounded-[999px]">
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Find Events</a>
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Create Event</a>
                <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>My Events</a>
              </nav>

              <button 
                className="flex gap-1 items-center justify-center px-4 py-3 rounded-[12px] shadow-[0px_2px_5px_0px_rgba(250,250,250,0.05)] hover:opacity-80 transition-opacity relative"
                style={{ 
                  backgroundImage: "linear-gradient(90.0032deg, rgba(250, 250, 250, 0.05) 0%, rgba(250, 250, 250, 0.1) 50.01%, rgba(250, 250, 250, 0.05) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 112 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.977 0 0 9.2776 56 40)\\'><stop stop-color=\\'rgba(250,250,250,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'0.2524\\'/></radialGradient></defs></svg>'), linear-gradient(rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.05) 100%)"
                }}
              >
                <span className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)' }}>Sign Up</span>
                <ArrowIcon />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(250,250,250,0.05),inset_0px_-8px_32px_0px_rgba(250,250,250,0.05)] rounded-[12px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop variant authenticated (with Profile link, no Sign Up button) - variant=authenticated
export function TopbarDesktopAuthenticated() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-20 py-0 w-full max-w-[1920px]">
          <div className="flex items-center justify-between py-6 w-full relative">
            <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.474 0 0 0.1 640 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            
            <div className="flex gap-6 items-center">
              <div className="h-[36px] w-[120px] shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 36">
                  <g>
                    <g>
                      <path d={svgPathsBig.p1041faa0} fill="url(#paint0_linear_auth)" />
                      <path d={svgPathsBig.p8eea380} fill="url(#paint1_linear_auth)" />
                      <path d={svgPathsBig.p1f7ba700} fill="url(#paint2_linear_auth)" />
                      <path d={svgPathsBig.p1e5ec980} fill="url(#paint3_linear_auth)" />
                      <path d={svgPathsBig.p5839b80} fill="url(#paint4_linear_auth)" />
                      <path d={svgPathsBig.p157d9a00} fill="url(#paint5_linear_auth)" />
                      <path d={svgPathsBig.p3c25e00} fill="url(#paint6_linear_auth)" />
                      <path d={svgPathsBig.p36b9bc80} fill="url(#paint7_linear_auth)" />
                      <path d={svgPathsBig.p16581000} fill="url(#paint8_linear_auth)" />
                      <path d={svgPathsBig.p34e81f00} fill="url(#paint9_linear_auth)" />
                      <path d={svgPathsBig.pc070900} fill="url(#paint10_linear_auth)" />
                      <path d={svgPathsBig.p205eab80} fill="url(#paint11_linear_auth)" />
                    </g>
                    <g>
                      <path d={svgPathsBig.p10f50400} fill="url(#paint12_linear_auth)" />
                    </g>
                  </g>
                  <defs>
                    {[...Array(12)].map((_, i) => (
                      <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_auth`} x1="81.8403" x2="81.8403" y1="-0.313239" y2="37.2847">
                        <stop stopColor="#FAFAFA" />
                        <stop offset="1" stopColor="#E5E5E5" />
                      </linearGradient>
                    ))}
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_auth" x1="18.3785" x2="18.3785" y1="0" y2="36">
                      <stop stopColor="#4F46E5" />
                      <stop offset="1" stopColor="#4338CA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="h-9 w-px bg-foreground opacity-10" />
              <button className="flex gap-1 items-center px-0 py-1 rounded-[999px] text-card-foreground hover:opacity-80 transition-opacity">
                <span style={{ fontWeight: 'var(--font-weight-medium)' }}>New York</span>
                <ChevronIcon />
              </button>
            </div>

            <nav className="flex items-center px-2 py-[9px] rounded-[999px]">
              <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Find Events</a>
              <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Create Event</a>
              <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>My Events</a>
              <a href="#" className="px-3 text-card-foreground hover:opacity-80 transition-opacity" style={{ fontWeight: 'var(--font-weight-medium)' }}>Profile</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile variant with location - size=small, icons=location
export function TopbarMobileLocation() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full relative">
          <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />

          <div className="flex items-center justify-between py-4 w-full relative">
            <div className="h-[24px] w-[80px] shrink-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 24">
                <g>
                  <g>
                    <path d={svgPathsLocation.p32682800} fill="url(#paint0_linear_mobile_location)" />
                    <path d={svgPathsLocation.p30fc7500} fill="url(#paint1_linear_mobile_location)" />
                    <path d={svgPathsLocation.p13a00100} fill="url(#paint2_linear_mobile_location)" />
                    <path d={svgPathsLocation.p11044400} fill="url(#paint3_linear_mobile_location)" />
                    <path d={svgPathsLocation.p6e12e00} fill="url(#paint4_linear_mobile_location)" />
                    <path d={svgPathsLocation.p2bd18080} fill="url(#paint5_linear_mobile_location)" />
                    <path d={svgPathsLocation.p294d5680} fill="url(#paint6_linear_mobile_location)" />
                    <path d={svgPathsLocation.p2f931770} fill="url(#paint7_linear_mobile_location)" />
                    <path d={svgPathsLocation.pb264700} fill="url(#paint8_linear_mobile_location)" />
                    <path d={svgPathsLocation.p22eceb00} fill="url(#paint9_linear_mobile_location)" />
                    <path d={svgPathsLocation.p1144f180} fill="url(#paint10_linear_mobile_location)" />
                    <path d={svgPathsLocation.pdcfe900} fill="url(#paint11_linear_mobile_location)" />
                  </g>
                  <g>
                    <path d={svgPathsLocation.p2c380b00} fill="url(#paint12_linear_mobile_location)" />
                  </g>
                </g>
                <defs>
                  {[...Array(12)].map((_, i) => (
                    <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_linear_mobile_location`} x1="54.5619" x2="54.5619" y1="-0.208826" y2="24.8564">
                      <stop stopColor="#FAFAFA" />
                      <stop offset="1" stopColor="#E5E5E5" />
                    </linearGradient>
                  ))}
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_mobile_location" x1="12.2524" x2="12.2524" y1="0" y2="24">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#4338CA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <button className="flex gap-1 items-center px-0 py-px rounded-[999px] text-card-foreground hover:opacity-80 transition-opacity">
              <span style={{ fontWeight: 'var(--font-weight-medium)' }}>New York</span>
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path d="M5 9.375L10 14.375L15 9.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" strokeOpacity="0.9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile variant with action icons - size=small, icons=search-heart
export function TopbarMobileIcons() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full relative">
          <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />

          <div className="flex items-center justify-between py-3 w-full relative">
            <button 
              className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
              style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
              aria-label="Back"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsIcons.p389f0200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              <button 
                className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
                style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
                aria-label="Search"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsIcons.p193c0000} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              </button>

              <button 
                className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
                style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
                aria-label="Favorites"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsIcons.p29a6d300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile variant with extended action icons - size=small, icons=all
export function TopbarMobileIconsExtended() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full relative">
          <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />

          <div className="flex items-center justify-between py-3 w-full relative">
            <button 
              className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
              style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
              aria-label="Back"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsIconsExtended.p389f0200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              <button 
                className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
                style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
                aria-label="Share"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsIconsExtended.pb39c80} fill="currentColor" fillOpacity="0.9" />
                </svg>
              </button>

              <button 
                className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
                style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
                aria-label="Bookmark"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsIconsExtended.p396c4400} fill="currentColor" fillOpacity="0.75" />
                </svg>
              </button>

              <button 
                className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
                style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
                aria-label="Twitter"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsIconsExtended.p2f570c00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.21757" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Minimal variant - size=small, state=default
export function TopbarMinimal() {
  return (
    <div className="w-full backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 py-0 w-full relative">
          <div className="absolute bottom-0 h-px left-0 right-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.633 0 0 0.1 180 1)\\'><stop stop-color=\\'rgba(250,250,250,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />

          <div className="flex items-center justify-between py-3 w-full relative">
            <button 
              className="flex items-center p-[6px] rounded-[20px] hover:opacity-80 transition-opacity backdrop-blur-[3.333px] backdrop-filter"
              style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}
              aria-label="Back"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsMinimal.p389f0200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="shrink-0 size-8" />
          </div>
        </div>
      </div>
    </div>
  );
}