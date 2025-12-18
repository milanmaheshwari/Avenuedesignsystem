import { assets } from "../../utils/assets";
import { typography } from "../utils/theme";

export type ArtistCardType = 'music' | 'comedy';
export type ArtistCardSize = 'large' | 'small';

interface ArtistCardProps {
  type?: ArtistCardType;
  size?: ArtistCardSize;
  className?: string;
}

// Artist data configuration
const artistData: Record<ArtistCardType, {
  name: string;
  genre: string;
  image: string;
  overlayColor: string;
  textColor: string;
}> = {
  music: {
    name: 'The Acoustic Duo',
    genre: 'Electronic',
    image: assets.artistMusic,
    overlayColor: 'rgba(192, 38, 211, 0.05)',
    textColor: '#fae8ff',
  },
  comedy: {
    name: "Marty O'Neill",
    genre: 'Indie',
    image: assets.artistComedy,
    overlayColor: 'rgba(202, 138, 4, 0.05)',
    textColor: '#fef9c3',
  },
};

export default function ArtistCard({ 
  type = 'music', 
  size = 'large',
  className = '' 
}: ArtistCardProps) {
  const artist = artistData[type];
  
  // Size-specific dimensions and styles
  const sizeConfig = {
    large: {
      imageSize: 200,
      imageRadius: 40,
      containerGap: 20,
      containerWidth: 200,
      titleSize: '20px',
      titleLineHeight: '24px',
      titleTracking: '-0.4px',
      genreSize: '16px',
      genreLineHeight: '22px',
      textGap: '8px',
      contentAlign: 'center' as const,
      textAlign: 'center' as const,
    },
    small: {
      imageSize: 120,
      imageRadius: 24,
      containerGap: 12,
      containerWidth: 120,
      titleSize: '14px',
      titleLineHeight: '18px',
      titleTracking: '-0.28px',
      genreSize: '13px',
      genreLineHeight: '18px',
      textGap: '0px',
      contentAlign: 'center' as const,
      textAlign: 'left' as const,
    },
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-start relative size-full ${className}`}>
      <div 
        className="flex flex-col items-center overflow-clip relative shrink-0"
        style={{
          gap: `${config.containerGap}px`,
          width: `${config.containerWidth}px`,
        }}
      >
        {/* Image */}
        <div className="flex items-center overflow-clip relative shrink-0">
          <div 
            className="relative shrink-0"
            style={{
              width: `${config.imageSize}px`,
              height: `${config.imageSize}px`,
              borderRadius: `${config.imageRadius}px`,
              boxShadow: '0px 13.714px 27.429px 0px rgba(0, 0, 0, 0.32)',
            }}
          >
            <div 
              aria-hidden="true" 
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: `${config.imageRadius}px` }}
            >
              <img 
                alt={artist.name}
                className="absolute max-w-none object-cover size-full"
                style={{ 
                  borderRadius: `${config.imageRadius}px`,
                  objectPosition: '50% 50%',
                }}
                src={artist.image}
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  backgroundColor: artist.overlayColor,
                  borderRadius: `${config.imageRadius}px`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col relative shrink-0 w-full"
          style={{ 
            alignItems: config.textAlign === 'center' ? 'center' : 'flex-start' 
          }}
        >
          <div 
            className="flex flex-col relative shrink-0 w-full"
            style={{
              gap: config.textGap,
              textAlign: config.textAlign,
              color: artist.textColor,
            }}
          >
            {/* Artist Name */}
            <div 
              className="flex flex-col justify-center relative shrink-0 w-full"
              style={{
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.bold,
                fontSize: config.titleSize,
                lineHeight: config.titleLineHeight,
                letterSpacing: config.titleTracking,
              }}
            >
              <p>{artist.name}</p>
            </div>

            {/* Genre */}
            <div 
              className="flex flex-col justify-center relative shrink-0 w-full"
              style={{
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.normal,
                fontSize: config.genreSize,
                lineHeight: config.genreLineHeight,
              }}
            >
              <p>{artist.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}