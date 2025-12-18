import React from 'react';
import { imgEllipse1, imgHeart, imgEllipse2, imgEllipse3, imgEllipse4, imgHeart1, imgEllipse5 } from "../../imports/svg-3sol7";
import { typography, semanticColors } from "../utils/theme";

const img = "/assets/images/fac1b8921d7451f21cc3076e1e09e76dedf851f1.png";

export type CardSize = 'Big' | 'Medium' | 'Small';
export type CardType = 'Default' | 'Trending';

interface CardProps {
  size?: CardSize;
  type?: CardType;
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function Card({ 
  size = 'Big', 
  type = 'Default',
  title = 'Jazz Under the Stars',
  subtitle = 'City Park • Dec 1',
  image = img
}: CardProps) {
  // Common image element with overlay
  const imageElement = (
    <div className="absolute inset-0 pointer-events-none">
      <img 
        alt="" 
        className="absolute max-w-none object-cover size-full" 
        src={image}
        style={{ objectPosition: '50% 50%' }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(79,70,229,0.05)',
        }}
      />
    </div>
  );

  // Medium + Default variant
  if (size === 'Medium' && type === 'Default') {
    return (
      <div 
        className="flex flex-col items-start overflow-clip relative"
        style={{
          width: '292px',
          borderRadius: '24px',
          backgroundImage: 'linear-gradient(113.75deg, rgba(79, 70, 229, 0.05) 30.16%, rgba(79, 70, 229, 0.1) 65.93%, rgba(79, 70, 229, 0.05) 101.69%), linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 100%)',
        }}
      >
        {/* Image Section */}
        <div 
          className="overflow-clip relative shrink-0"
          style={{
            width: '292px',
            height: '365px',
          }}
        >
          {imageElement}
          <div 
            className="absolute"
            style={{
              right: '-148px',
              top: '-160px',
              width: '320px',
              height: '320px',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
          </div>
          {/* Heart Button */}
          <div 
            className="absolute flex items-center"
            style={{
              right: '16px',
              top: '16px',
            }}
          >
            <div 
              className="relative shrink-0"
              style={{
                width: '40px',
                height: '40px',
              }}
            >
              <img alt="" className="block size-full" src={imgHeart} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div 
          className="flex flex-col items-start relative shrink-0 w-full"
          style={{
            paddingTop: '16px',
            paddingBottom: '20px',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <div 
            className="flex flex-col items-start relative shrink-0 w-full"
            style={{
              gap: '4px',
            }}
          >
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.32px',
                }}
              >
                {title}
              </p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.normal,
                  fontSize: '14px',
                  lineHeight: '18px',
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Border overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0px 0px 0px 2px rgba(250,250,250,0.05)',
          }}
        />
      </div>
    );
  }

  // Big + Trending variant
  if (size === 'Big' && type === 'Trending') {
    return (
      <div 
        className="flex flex-col items-start overflow-clip relative"
        style={{
          width: '360px',
          borderRadius: '24px',
          backgroundImage: 'linear-gradient(113.68deg, rgba(79, 70, 229, 0.05) 30.16%, rgba(79, 70, 229, 0.1) 65.93%, rgba(79, 70, 229, 0.05) 101.69%), linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 100%)',
        }}
      >
        {/* Image Section */}
        <div 
          className="overflow-clip relative shrink-0"
          style={{
            width: '360px',
            height: '450px',
          }}
        >
          {imageElement}
          <div 
            className="absolute"
            style={{
              bottom: '-280px',
              right: '80px',
              width: '560px',
              height: '560px',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
          </div>
          <div 
            className="absolute"
            style={{
              right: '-200px',
              top: '-200px',
              width: '400px',
              height: '400px',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
          </div>
          {/* Trending Number */}
          <div 
            className="absolute flex flex-col justify-center"
            style={{
              bottom: '80px',
              left: '20px',
              fontSize: '120px',
              fontFamily: typography.fontFamily.primary,
              fontWeight: '900',
              lineHeight: '120px',
              transform: 'translateY(50%)',
              backgroundImage: 'linear-gradient(189.45deg, rgba(79, 70, 229, 1) 1.82%, rgba(30, 27, 75, 1) 97.4%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <p style={{ fontSize: '120px', lineHeight: '120px', fontWeight: '900', borderColor: 'rgba(0, 0, 0, 0)', borderImage: 'none', borderStyle: 'none' }}>2</p>
          </div>
          {/* Heart Button */}
          <div 
            className="absolute flex items-center"
            style={{
              right: '16px',
              top: '16px',
            }}
          >
            <div 
              className="relative shrink-0"
              style={{
                width: '40px',
                height: '40px',
              }}
            >
              <img alt="" className="block size-full" src={imgHeart} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div 
          className="flex flex-col items-start relative shrink-0 w-full"
          style={{
            paddingTop: '20px',
            paddingBottom: '24px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <div 
            className="flex flex-col items-start relative shrink-0 w-full"
            style={{
              gap: '8px',
            }}
          >
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '-0.4px',
                }}
              >
                {title}
              </p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.normal,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Border overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0px 0px 0px 2px rgba(250,250,250,0.05)',
          }}
        />
      </div>
    );
  }

  // Small + Default variant
  if (size === 'Small' && type === 'Default') {
    return (
      <div 
        className="flex flex-col items-start overflow-clip relative"
        style={{
          width: '156px',
          borderRadius: '12px',
          backgroundImage: 'linear-gradient(112.7deg, rgba(79, 70, 229, 0.05) 30.16%, rgba(79, 70, 229, 0.1) 65.93%, rgba(79, 70, 229, 0.05) 101.69%), linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 100%)',
        }}
      >
        {/* Image Section */}
        <div 
          className="overflow-clip relative shrink-0"
          style={{
            width: '156px',
            height: '195px',
          }}
        >
          {imageElement}
          <div 
            className="absolute"
            style={{
              right: '-100px',
              top: '-100px',
              width: '200px',
              height: '200px',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
          </div>
          {/* Heart Button */}
          <div 
            className="absolute flex items-center"
            style={{
              right: '8px',
              top: '8px',
            }}
          >
            <div 
              className="relative shrink-0"
              style={{
                width: '24px',
                height: '24px',
              }}
            >
              <img alt="" className="block size-full" src={imgHeart1} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div 
          className="flex flex-col items-start relative shrink-0 w-full"
          style={{
            paddingTop: '8px',
            paddingBottom: '12px',
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
        >
          <div 
            className="flex flex-col items-start relative shrink-0 w-full"
            style={{
              gap: '2px',
            }}
          >
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: '13px',
                  lineHeight: '16px',
                  letterSpacing: '-0.26px',
                }}
              >
                {title}
              </p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.normal,
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Border overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0px 0px 0px 1px rgba(250,250,250,0.05)',
          }}
        />
      </div>
    );
  }

  // Small + Trending variant
  if (size === 'Small' && type === 'Trending') {
    return (
      <div 
        className="flex flex-col items-start overflow-clip relative"
        style={{
          width: '156px',
          borderRadius: '12px',
          backgroundImage: 'linear-gradient(112.7deg, rgba(79, 70, 229, 0.05) 30.16%, rgba(79, 70, 229, 0.1) 65.93%, rgba(79, 70, 229, 0.05) 101.69%), linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 100%)',
        }}
      >
        {/* Image Section */}
        <div 
          className="overflow-clip relative shrink-0"
          style={{
            width: '156px',
            height: '195px',
          }}
        >
          {imageElement}
          <div 
            className="absolute"
            style={{
              left: 'calc(50% - 88px)',
              top: 'calc(50% + 107.5px)',
              width: '280px',
              height: '280px',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
          </div>
          <div 
            className="absolute"
            style={{
              right: '-100px',
              top: '-100px',
              width: '200px',
              height: '200px',
            }}
          >
            <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
          </div>
          {/* Trending Number */}
          <div 
            className="absolute flex flex-col justify-center"
            style={{
              bottom: '42px',
              left: '12px',
              fontSize: '60px',
              fontFamily: typography.fontFamily.primary,
              fontWeight: '900',
              lineHeight: '60px',
              transform: 'translateY(50%)',
              backgroundImage: 'linear-gradient(189.32deg, rgba(79, 70, 229, 1) 1.82%, rgba(30, 27, 75, 1) 97.4%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <p style={{ fontSize: '60px', fontWeight: '900', lineHeight: '60px' }}>2</p>
          </div>
          {/* Heart Button */}
          <div 
            className="absolute flex items-center"
            style={{
              right: '8px',
              top: '8px',
            }}
          >
            <div 
              className="relative shrink-0"
              style={{
                width: '24px',
                height: '24px',
              }}
            >
              <img alt="" className="block size-full" src={imgHeart1} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div 
          className="flex flex-col items-start relative shrink-0 w-full"
          style={{
            paddingTop: '8px',
            paddingBottom: '12px',
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
        >
          <div 
            className="flex flex-col items-start relative shrink-0 w-full"
            style={{
              gap: '2px',
            }}
          >
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: '13px',
                  lineHeight: '16px',
                  letterSpacing: '-0.26px',
                }}
              >
                {title}
              </p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p 
                style={{ 
                  color: semanticColors.primaryForeground,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.normal,
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Border overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0px 0px 0px 1px rgba(250,250,250,0.05)',
          }}
        />
      </div>
    );
  }

  // Big + Default variant (default)
  return (
    <div 
      className="flex flex-col items-start overflow-clip relative"
      style={{
        width: '360px',
        borderRadius: '24px',
        backgroundImage: 'linear-gradient(113.68deg, rgba(79, 70, 229, 0.05) 30.16%, rgba(79, 70, 229, 0.1) 65.93%, rgba(79, 70, 229, 0.05) 101.69%), linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 100%)',
      }}
    >
      {/* Image Section */}
      <div 
        className="overflow-clip relative shrink-0"
        style={{
          width: '360px',
          height: '450px',
        }}
      >
        {imageElement}
        <div 
          className="absolute"
          style={{
            right: '-200px',
            top: '-200px',
            width: '400px',
            height: '400px',
          }}
        >
          <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
        </div>
        {/* Heart Button */}
        <div 
          className="absolute flex items-center"
          style={{
            right: '16px',
            top: '16px',
          }}
        >
          <div 
            className="relative shrink-0"
            style={{
              width: '40px',
              height: '40px',
            }}
          >
            <img alt="" className="block size-full" src={imgHeart} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div 
        className="flex flex-col items-start relative shrink-0 w-full"
        style={{
          paddingTop: '20px',
          paddingBottom: '24px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <div 
          className="flex flex-col items-start relative shrink-0 w-full"
          style={{
            gap: '8px',
          }}
        >
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p 
              style={{ 
                color: 'var(--primary-foreground)',
                fontFamily: typography.fontFamily.primary,
                fontWeight: 'var(--font-weight-bold)',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '-0.4px',
              }}
            >
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p 
              style={{ 
                color: 'var(--primary-foreground)',
                fontFamily: typography.fontFamily.primary,
                fontWeight: 'var(--font-weight-normal)',
                fontSize: '16px',
                lineHeight: '22px',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Border overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0px 0px 0px 2px rgba(250,250,250,0.05)',
        }}
      />
    </div>
  );
}
