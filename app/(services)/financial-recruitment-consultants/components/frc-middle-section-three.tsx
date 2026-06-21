import Image from "next/image";

const FRC_CTA_THREE_IMAGE =
  "https://contetra.b-cdn.net/pages/services/frc/frc-cta-three.png";

export function FrcMiddleSectionThree() {
  return (
    <section className="w-full px-4 py-10 dark:bg-[#0A0A0A] sm:px-6 md:px-8 md:py-12 xl:px-14 2xl:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <header className="text-center">
          <h2 className="mx-auto max-w-4xl text-balance text-[clamp(1.45rem,2.2vw,2rem)] font-bold leading-tight text-[#1a1640] dark:text-white">
            How to stay ahead of the curve in an industry where
            <br />
            everyone is looking to grab &quot;The Best Talent&quot;
          </h2>
          <div className="mx-auto mt-4 h-[4px] w-[clamp(180px,23vw,300px)] bg-[#50a085]" />
        </header>

        <div className="relative mt-8 w-full max-w-[980px]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={FRC_CTA_THREE_IMAGE}
              alt="Visual roadmap for building a stronger finance hiring strategy"
              fill
              unoptimized
              sizes="(max-width: 980px) 100vw, 980px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
