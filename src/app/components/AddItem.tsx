import { assets } from "../../utils/assets";

export type AddItemSize = 'large' | 'small';

interface AddItemProps {
  size?: AddItemSize;
  title?: string;
  price?: string;
}

export default function AddItem({ 
  size = 'large',
  title = 'Official Cosmic Collision Cap- Dark Blue',
  price = '$100.00'
}: AddItemProps) {
  const isLarge = size === 'large';

  return (
    <div 
      className="flex flex-col items-start relative"
      style={{
        gap: isLarge ? '16px' : '12px',
        width: isLarge ? '240px' : '160px',
      }}
    >
      {/* Card */}
      <div 
        className="flex flex-col items-start overflow-clip relative w-full"
        style={{
          borderRadius: isLarge ? '20px' : '16px',
          boxShadow: '0px 20px 40px 20px rgba(10,10,10,0.5)',
          backgroundImage: 'linear-gradient(154.501deg, rgba(220, 38, 38, 0.05) 2.5137%, rgba(220, 38, 38, 0.1) 52.694%, rgba(220, 38, 38, 0.05) 102.86%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)',
        }}
      >
        {/* Image */}
        <div 
          className="relative shrink-0"
          style={{
            width: isLarge ? '240px' : '160px',
            height: isLarge ? '240px' : '160px',
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <img 
              alt="" 
              className="absolute max-w-none object-cover size-full" 
              src={assets.addItemPlaceholder}
              style={{ objectPosition: '50% 50%' }}
            />
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(79,70,229,0.05)',
              }}
            />
          </div>
        </div>
        
        {/* Border overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0px 0px 0px 1px rgba(250,250,250,0.1)',
          }}
        />
      </div>

      {/* Details */}
      <div 
        className="flex flex-col items-start relative w-full"
        style={{
          gap: isLarge ? '24px' : '16px',
          height: isLarge ? '140px' : '116px',
        }}
      >
        {/* Text */}
        <div 
          className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative w-full"
          style={{
            gap: isLarge ? '16px' : '8px',
          }}
        >
          {/* Title */}
          <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative w-full"
            style={{
              gap: isLarge ? '8px' : '4px',
            }}
          >
            {/* Product Name */}
            <div className="min-w-full relative w-[min-content]">
              <p 
                style={{ 
                  color: 'rgba(250,250,250,0.9)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontSize: isLarge ? '16px' : '14px',
                  lineHeight: isLarge ? '20px' : '18px',
                  letterSpacing: isLarge ? '-0.32px' : '-0.28px',
                }}
              >
                {title}
              </p>
            </div>
            
            {/* Price */}
            <div className="relative shrink-0">
              <p 
                style={{ 
                  color: 'rgba(250,250,250,0.75)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: isLarge ? '14px' : '13px',
                  lineHeight: '18px',
                  whiteSpace: 'nowrap',
                }}
              >
                {price}
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div 
          className="flex items-start justify-center relative w-full"
          style={{
            borderRadius: 'var(--radius-button)',
          }}
        >
          <div 
            className="basis-0 grow min-h-px min-w-px relative self-stretch"
            style={{
              borderRadius: 'var(--radius-button)',
              backgroundImage: 'linear-gradient(90.0057deg, rgba(250, 250, 250, 0.05) 0%, rgba(250, 250, 250, 0.1) 50.01%, rgba(250, 250, 250, 0.05) 100%), linear-gradient(rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.05) 100%)',
            }}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div 
                className="flex items-center justify-center relative size-full"
                style={{
                  padding: isLarge ? '16px' : '13px 12px',
                }}
              >
                <div className="relative shrink-0 text-center">
                  <p 
                    style={{ 
                      color: 'var(--primary-foreground)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontSize: isLarge ? '16px' : '14px',
                      lineHeight: 1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ADD
                  </p>
                </div>
              </div>
            </div>
            
            {/* Button shadow overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: 'inset 0px 0px 12px 0px rgba(250,250,250,0.05), inset 0px -8px 32px 0px rgba(250,250,250,0.05)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}