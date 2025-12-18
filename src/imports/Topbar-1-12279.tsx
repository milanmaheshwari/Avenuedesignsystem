import svgPaths from "./svg-szcfn0jlsp";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p389f0200} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[3.333px] backdrop-filter content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}>
      <Icon />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left Content">
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p193c0000} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[3.333px] backdrop-filter content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p29a6d300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[3.333px] backdrop-filter content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(161.046deg, rgba(250, 250, 250, 0.1) 1.4286%, rgba(250, 250, 250, 0.05) 101.55%)" }}>
      <Icon2 />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Content">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[12px] relative shrink-0 w-full" data-name="Container">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default function Topbar() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[rgba(10,10,10,0.1)] relative size-full" data-name="Topbar">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-0 relative size-full">
          <div className="absolute bottom-0 h-px left-0 w-[360px]" data-name="Horizontal Divider" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 360 1\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(22.633 0 0 0.1 180 1)\\\'><stop stop-color=\\\'rgba(250,250,250,0.1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(250,250,250,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
          <Container />
        </div>
      </div>
    </div>
  );
}