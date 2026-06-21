import Image from "next/image";

const STRIKE_THAT_CTA_IMAGE =
  "https://contetra.b-cdn.net/pages/services/st/strike-that-cta.png";
const STRIKE_THAT_LOGO =
  "https://contetra.b-cdn.net/pages/services/st/Strike-that.png";

export function StMiddleSectionOne() {
  return (
    <section className="w-full bg-white pt-10 dark:bg-[#0A0A0A] sm:pt-12 md:pt-14">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 text-center sm:px-6 md:px-8 xl:px-0">
        <h2 className="text-balance text-[1.8rem] font-extrabold leading-[1.15] tracking-tight text-[#17366D] dark:text-white sm:text-[2.1rem] md:text-[2.6rem]">
        Why Checking{" "}
          <span className="text-[#E2533D]">Struck Off Companies</span> Manually Is a Finance Team Nightmare
        </h2>

        <p className="mt-3 max-w-[860px] text-balance text-sm font-medium leading-[1.55] text-[#2E3C5A] dark:text-[#E5E7EB] sm:text-[15px] md:text-[1.05rem]">
          (By spending hours and hours of precious finance team bandwidth)
        </p>
      </div>

      <div className="mt-8 w-full sm:mt-10 md:mt-12">
        <div className="relative w-full overflow-hidden">
          <Image
            src={STRIKE_THAT_CTA_IMAGE}
            alt="Manual strike-off compliance process steps"
            width={1600}
            height={740}
            sizes="100vw"
            className="h-auto w-full object-cover object-center"
            unoptimized
          />
        </div>

        <div className="mx-auto mt-8 flex w-full justify-center px-4 sm:mt-10">
          <div className="relative h-[48px] w-[220px] sm:h-[60px] sm:w-[280px] md:h-[72px] md:w-[340px]">
            <Image
              src={STRIKE_THAT_LOGO}
              alt="Strike That logo"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 340px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
