import imgImg from "figma:asset/fd092aafde0b7229084b06b4cb61662024365b50.png";

function Img() {
  return (
    <div className="relative rounded-[24px] shadow-[0px_13.714px_27.429px_0px_rgba(0,0,0,0.32)] shrink-0 size-[120px]" data-name="IMG">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[24px] size-full" src={imgImg} />
        <div className="absolute bg-[rgba(202,138,4,0.05)] inset-0 rounded-[24px]" />
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
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#fef9c3] w-full" data-name="Text">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[18px]">Marty O’Neill</p>
      </div>
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[13px] w-full">
        <p className="leading-[18px]">Indie</p>
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
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Container">
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