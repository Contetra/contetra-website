import Image from "next/image";
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const completeOwnershipImage = `${cdnUrl}/pages/services/taigas/taigas-complete-ownership.png`;
const completeOwnershipImageTwo = `${cdnUrl}/pages/services/taigas/technical-accounting-advisory-services-india.webp`;

export default function Test() {
  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto w-full max-w-[860px] lg:max-w-[920px] flex flex-col gap-10">
        <div className="relative aspect-[16/8.5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
          <Image
            src={completeOwnershipImage}
            alt="Complete ownership workflow for technical accounting support"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 920px"
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[860px] lg:max-w-[920px] flex flex-col gap-10">
        <div className="relative aspect-[16/8.5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
          <Image
            src={completeOwnershipImageTwo}
            alt="Complete ownership workflow for technical accounting support"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 920px"
          />
        </div>
      </div>
    
    </div>
  );
}
