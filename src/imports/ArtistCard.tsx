import imgImg from "figma:asset/fae9216881de499113dd7791f82ff50e3aaa7af1.png";

function Img() {
  return (
    <div className="relative rounded-[40px] shadow-[0px_13.714px_27.429px_0px_rgba(0,0,0,0.32)] shrink-0 size-[200px]" data-name="IMG">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgImg} />
        <div className="absolute bg-[rgba(192,38,211,0.05)] inset-0 rounded-[40px]" />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="image">
      <Img />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[#fae8ff] text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[-0.4px] w-full">
        <p className="leading-[24px]">The Acoustic Duo</p>
      </div>
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[22px]">Electronic</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <Text />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative rounded-[24px] shrink-0 w-[200px]" data-name="Container">
      <Image />
      <Content />
    </div>
  );
}

export default function ArtistCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Artist Card">
      <Container />
    </div>
  );
}