import { assets } from "../../utils/assets";
import svgPathsMusicLarge from "../../imports/svg-30bgdzpzro";
import svgPathsMusicSmall from "../../imports/svg-21ulgngdfx";
import svgPathsNightLarge from "../../imports/svg-544wcgiqcd";
import svgPathsNightSmall from "../../imports/svg-5eiavb9sio";
import svgPathsSportsLarge from "../../imports/svg-yv13g2mk64";
import svgPathsSportsSmall from "../../imports/svg-crglv5kpn7";

export type CategoryCardTheme = 'music' | 'night-parties' | 'sports';
export type CategoryCardSize = 'large' | 'small';

interface CategoryCardProps {
  theme?: CategoryCardTheme;
  size?: CategoryCardSize;
}

// Theme configuration with gradients, colors, and content
const themeConfig = {
  music: {
    title: 'Music',
    descriptionLarge: 'Explore concerts, live shows and festivals near you',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: assets.categoryMusic,
    gradient: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 292 360\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-14.6 4.888e-13 8.6829e-7 -33.358 146 180)\\'><stop stop-color=\\'rgba(162,28,175,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(118,16,127,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(96,10,102,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(74,4,78,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    gradientSmall: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 156 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.8 3.2587e-13 4.6388e-7 -22.239 78 120)\\'><stop stop-color=\\'rgba(162,28,175,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(118,16,127,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(96,10,102,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(74,4,78,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    textColor: '#fdf4ff',
    shadowColor: 'rgba(192,38,211,0.05)',
  },
  'night-parties': {
    title: 'Night Parties',
    descriptionLarge: 'Groove and dance the night away with top DJs and parties nearby',
    descriptionSmall: 'Concerts, live shows and festivals near you',
    image: assets.categoryNightParties,
    gradient: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 292 360\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.5\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-14.6 4.888e-13 8.6829e-7 -33.358 146 180)\\'><stop stop-color=\\'rgba(126,34,206,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(93,21,153,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(59,7,100,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    gradientSmall: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 156 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.8 3.2587e-13 4.6388e-7 -22.239 78 120)\\'><stop stop-color=\\'rgba(126,34,206,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(93,21,153,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(59,7,100,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    textColor: '#faf5ff',
    shadowColor: 'rgba(147,51,234,0.05)',
  },
  sports: {
    title: 'Sports',
    descriptionLarge: 'Find matches and tournaments near you',
    descriptionSmall: 'Find matches and tournaments near you',
    image: assets.categorySports,
    gradient: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 292 360\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.5\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-14.6 4.888e-13 8.6829e-7 -33.358 146 180)\\'><stop stop-color=\\'rgba(194,65,12,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(131,43,10,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(99,31,8,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(67,20,7,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    gradientSmall: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 156 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.8 3.2587e-13 4.6388e-7 -22.239 78 120)\\'><stop stop-color=\\'rgba(194,65,12,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(131,43,10,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(99,31,8,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(67,20,7,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
    textColor: '#fff7ed',
    shadowColor: 'rgba(234,88,12,0.05)',
  },
};

// Icon Components
function IconMusicLarge() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <rect fill="url(#paint0_linear_music_large)" height="40" rx="12" width="40" />
          <rect height="39" rx="11.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="39" x="0.5" y="0.5" />
          <path d="M16 27V12.2667L29 10V24.7333" stroke="#FDF4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPathsMusicLarge.pcbc1d00} stroke="#FDF4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPathsMusicLarge.pebfb6c0} stroke="#FDF4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_music_large" x1="6.5" x2="23.5" y1="-3" y2="46.5">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconMusicSmall() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect fill="url(#paint0_linear_music_small)" height="24" rx="8" width="24" />
          <rect height="23" rx="7.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="23" x="0.5" y="0.5" />
          <path d={svgPathsMusicSmall.p344f44f0} stroke="#FDF4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_music_small" x1="3.9" x2="14.1" y1="-1.8" y2="27.9">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconNightLarge() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <rect fill="url(#paint0_linear_night_large)" height="40" rx="12" width="40" />
          <rect height="39" rx="11.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="39" x="0.5" y="0.5" />
          <path d={svgPathsNightLarge.p2b0ef370} stroke="#FAF5FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_night_large" x1="6.5" x2="23.5" y1="-3" y2="46.5">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconNightSmall() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect fill="url(#paint0_linear_night_small)" height="24" rx="8" width="24" />
          <rect height="23" rx="7.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="23" x="0.5" y="0.5" />
          <path d={svgPathsNightSmall.p3d1e9700} stroke="#FAF5FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_night_small" x1="3.9" x2="14.1" y1="-1.8" y2="27.9">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconSportsLarge() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <rect fill="url(#paint0_linear_sports_large)" height="40" rx="12" width="40" />
          <rect height="39" rx="11.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="39" x="0.5" y="0.5" />
          <path d={svgPathsSportsLarge.p22a26c00} stroke="#FFF7ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_sports_large" x1="6.5" x2="23.5" y1="-3" y2="46.5">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconSportsSmall() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect fill="url(#paint0_linear_sports_small)" height="24" rx="8" width="24" />
          <rect height="23" rx="7.5" stroke="rgba(250, 250, 250, 1)" strokeOpacity="0.1" width="23" x="0.5" y="0.5" />
          <path d={svgPathsSportsSmall.p26a3b780} stroke="#FFF7ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_sports_small" x1="3.9" x2="14.1" y1="-1.8" y2="27.9">
            <stop stopColor="#FAFAFA" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function CategoryCard({ theme = 'music', size = 'large' }: CategoryCardProps) {
  const isLarge = size === 'large';
  const config = themeConfig[theme];

  // Select the appropriate icon component
  let IconComponent;
  if (theme === 'music') {
    IconComponent = isLarge ? IconMusicLarge : IconMusicSmall;
  } else if (theme === 'night-parties') {
    IconComponent = isLarge ? IconNightLarge : IconNightSmall;
  } else {
    IconComponent = isLarge ? IconSportsLarge : IconSportsSmall;
  }

  return (
    <div 
      className="overflow-clip relative" 
      style={{
        width: isLarge ? '292px' : '156px',
        height: isLarge ? '360px' : '240px',
        backgroundImage: isLarge ? config.gradient : config.gradientSmall,
        borderRadius: isLarge ? '20px' : '12px',
        boxShadow: isLarge && theme === 'music' ? 'none' : `0px 0px 20px 5px ${config.shadowColor}`,
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute overflow-clip rounded-[20px]" 
        style={{
          width: isLarge ? '292px' : '156px',
          height: isLarge ? '360px' : '240px',
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
      <div 
        className="absolute" 
        style={{
          width: isLarge ? '240px' : '124px',
          height: isLarge ? '240px' : '124px',
          left: isLarge && theme === 'music' ? '50%' : isLarge ? 'calc(50% + 4px)' : '50%',
          top: isLarge ? 'calc(50% + 54px)' : 'auto',
          bottom: isLarge ? 'auto' : '16px',
          transform: isLarge ? 'translate(-50%, -50%)' : 'translateX(-50%)',
          boxShadow: 'none',
        }}
      >
          <img 
            alt={config.title} 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={config.image} 
            style={{ 
              objectPosition: '50% 50%',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className="absolute flex flex-col items-start" 
        style={{
          gap: isLarge ? '12px' : '8px',
          padding: isLarge ? '20px' : '12px',
          left: '0',
          right: '0',
          top: isLarge && theme === 'night-parties' ? '0' : isLarge && theme === 'sports' ? 'calc(50% - 112px)' : isLarge ? 'calc(50% - 112px)' : '0',
          transform: isLarge && theme === 'music' ? 'translateY(-50%)' : isLarge && theme === 'sports' ? 'translateY(-50%)' : 'none',
          zIndex: 2,
          width: theme === 'music' ? '100%' : undefined,
        }}
      >
        {/* Title */}
        <div className="flex items-center w-full" style={{ gap: isLarge ? '16px' : '8px' }}>
          <IconComponent />
          <div className="flex-1">
            <p 
              style={{ 
                color: config.textColor,
                fontFamily: 'var(--font-satoshi)',
                fontWeight: 'var(--font-weight-bold)',
                fontSize: isLarge ? '24px' : '16px',
                lineHeight: isLarge ? '28px' : '20px',
                letterSpacing: isLarge ? '-0.48px' : '-0.32px',
              }}
            >
              {config.title}
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="w-full overflow-clip" style={{ width: isLarge && theme === 'music' ? '100%' : undefined }}>
          <p 
            style={{ 
              color: config.textColor,
              fontFamily: 'var(--font-satoshi)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: isLarge ? '16px' : '13px',
              lineHeight: isLarge ? '22px' : '18px',
              width: isLarge && theme === 'music' ? '100%' : undefined,
            }}
          >
            {isLarge ? config.descriptionLarge : config.descriptionSmall}
          </p>
        </div>
      </div>

      {/* Border overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `inset 0px 1px 0px 0px ${config.shadowColor},inset 0px 0px 0px ${isLarge ? '2px' : '1px'} rgba(250,250,250,0.05)`,
          zIndex: 3,
        }}
      />
    </div>
  );
}