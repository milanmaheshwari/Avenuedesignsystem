import svgPaths from "./svg-kt1wz0ls0q";
import imgImage93 from "figma:asset/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png";

function Image() {
  return (
    <div className="absolute h-[240px] left-1/2 overflow-clip rounded-[8px] top-0 translate-x-[-50%] w-[156px]" data-name="image">
      <div className="absolute bottom-[16px] left-1/2 shadow-[0px_20px_40px_0px_rgba(10,10,10,0.5)] size-[124px] translate-x-[-50%]" data-name="image 93">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage93} />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="max-w-[246.40000915527344px] relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(250, 250, 250, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon">
            <rect fill="url(#paint0_linear_3_13430)" height="24" rx="8" width="24" />
            <rect height="23" rx="7.5" stroke="var(--stroke-0, #FAFAFA)" strokeOpacity="0.1" width="23" x="0.5" y="0.5" />
            <path d={svgPaths.p3d1e9700} id="Vector" stroke="var(--stroke-0, #FAF5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_13430" x1="3.9" x2="14.1" y1="-1.8" y2="27.9">
              <stop stopColor="#FAFAFA" stopOpacity="0.1" />
              <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf5ff] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[20px]">Night Parties</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
      <Icon />
      <Text />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Subtitle">
      <div className="basis-0 flex flex-col font-['Satoshi:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf5ff] text-[13px]">
        <p className="leading-[18px]">Concerts, live shows and festivals near you</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 p-[12px] right-0 top-0" data-name="Content">
      <Title />
      <Subtitle />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[240px] overflow-clip relative rounded-[12px] shadow-[0px_0px_20px_5px_rgba(147,51,234,0.05)] shrink-0 w-[156px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 156 240\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.6000000238418579\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-7.8 3.2587e-13 4.6388e-7 -22.239 78 120)\\\'><stop stop-color=\\\'rgba(126,34,206,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(93,21,153,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(59,7,100,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Image />
      <Content />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(147,51,234,0.05),inset_0px_0px_0px_1px_rgba(250,250,250,0.05)]" />
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Category">
      <Container />
    </div>
  );
}

export default function CategoryCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Category Card">
      <Category />
    </div>
  );
}