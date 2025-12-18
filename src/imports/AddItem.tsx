import imgImage from "figma:asset/a5561ce6332b43441a50ac1c989d165d124b3efd.png";

function Image() {
  return (
    <div className="relative shrink-0 size-[240px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage} />
        <div className="absolute bg-[rgba(79,70,229,0.05)] inset-0" />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_20px_40px_20px_rgba(10,10,10,0.5)] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(154.501deg, rgba(220, 38, 38, 0.05) 2.5137%, rgba(220, 38, 38, 0.1) 52.694%, rgba(220, 38, 38, 0.05) 102.86%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }}>
      <Image />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(250,250,250,0.1)]" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(250,250,250,0.9)] tracking-[-0.32px] w-[min-content]">
        <p className="leading-[20px]">Official Cosmic Collision Cap- Dark Blue</p>
      </div>
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center relative shrink-0 text-[14px] text-[rgba(250,250,250,0.75)] text-nowrap">
        <p className="leading-[18px]">$100.00</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <Title />
    </div>
  );
}

function BackgroundOverlayShadow() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] self-stretch shrink-0" data-name="Background+Overlay+Shadow" style={{ backgroundImage: "linear-gradient(90.0057deg, rgba(250, 250, 250, 0.05) 0%, rgba(250, 250, 250, 0.1) 50.01%, rgba(250, 250, 250, 0.05) 100%), linear-gradient(rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.05) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[16px] text-center text-nowrap">
            <p className="leading-none">ADD</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(250,250,250,0.05),inset_0px_-8px_32px_0px_rgba(250,250,250,0.05)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <BackgroundOverlayShadow />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[140px] items-start relative shrink-0 w-full" data-name="Details">
      <Text />
      <Button />
    </div>
  );
}

export default function AddItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Add Item">
      <Card />
      <Details />
    </div>
  );
}