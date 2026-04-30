import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const STRIKE_THAT_LOGO =
  "https://contetra.b-cdn.net/pages/services/st/Strike-that.png";
const STRIKE_THAT_CHECK_ICON =
  "https://contetra.b-cdn.net/pages/services/st/strike-that-check-icon.png";

const detailPoints = [
  "Name of the Struck-Off company.",
  "Nature of transactions with such company.",
  "Balance outstanding and relationship with the struck-off company.",
] as const;

export function StTopSection() {
  return (
    <section className="w-full">
      <div className="w-full bg-[#15285C] px-[12px] pb-10 pt-12 sm:px-5 sm:pb-12 sm:pt-14 md:px-8 md:pb-14 md:pt-16 xl:px-14 2xl:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <h1 className="max-w-[760px] text-balance text-[1.45rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem]">
            Free Up Hundreds Of Hours
            <br />
            Of The Finance Team.
          </h1>

          <div className="relative mt-4 h-[42px] w-[200px] sm:mt-5 sm:h-[54px] sm:w-[260px] md:h-[64px] md:w-[320px]">
            <Image
              src={STRIKE_THAT_LOGO}
              alt="Strike That logo"
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 320px"
              className="object-contain"
              unoptimized
            />
          </div>

          <p className="mt-4 max-w-[900px] text-balance text-[13px] font-semibold leading-[1.5] text-white sm:mt-5 sm:text-[15px] sm:leading-[1.5] md:text-[1.25rem] md:leading-[1.45]">
            is A Service That Helps You Get The Details Of &ldquo;STRUCK
            OFF&rdquo; Companies,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for{" "}
            <span className="text-[#5EC8FF]">
              Hassle-free Compliance With The New Mandatory
            </span>
            <br className="hidden md:block" />
            <span className="hidden sm:inline md:hidden"> </span>
            <span className="text-[#5EC8FF]">
              Disclosure Requirement
            </span>{" "}
            Of Schedule III.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-7 h-auto rounded-full bg-[#D85B47] px-6 py-3 text-sm font-bold text-white shadow-none transition hover:bg-[#BF4A38] sm:mt-8 sm:px-8 sm:text-[15px]"
          >
            <Link href="#strike-that-details">Download Sample Report</Link>
          </Button>
        </div>
      </div>

      <div
        id="strike-that-details"
        className="w-full bg-white px-[10px] py-12 sm:px-4 sm:py-14 md:px-8 md:py-16 xl:px-14 2xl:px-[80px]"
      >
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <h2 className="max-w-[760px] text-balance text-[1.85rem] font-bold leading-[1.2] tracking-tight text-[#244C90] sm:text-[2.2rem] md:text-[2.8rem]">
            Hold up, what&apos;s this about?
          </h2>

          <p className="mt-5 max-w-[900px] text-pretty text-[15px] font-semibold leading-[1.65] text-[#1D2B4F] sm:text-base md:text-[1.1rem]">
            In April 2021, The MCA introduced a brand-new regulation wherein
            companies must disclose details of transactions with the companies
            that are struck off by the MCA under the Companies Act.
          </p>

          <p className="mt-8 text-sm font-semibold text-[#7A91B8] sm:mt-10 sm:text-[15px]">
            The details to be disclosed are:
          </p>

          <div className="mt-8 grid w-full gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {detailPoints.map((point) => (
              <div
                key={point}
                className="flex items-start justify-center gap-3 rounded-2xl border border-[#D7E1F3] bg-[#F8FBFF] px-4 py-4 text-left shadow-sm sm:px-5"
              >
                <div className="relative mt-0.5 h-8 w-8 shrink-0 sm:h-9 sm:w-9">
                  <Image
                    src={STRIKE_THAT_CHECK_ICON}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <p className="text-sm font-medium leading-[1.55] text-[#1D2B4F] sm:text-[15px]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
