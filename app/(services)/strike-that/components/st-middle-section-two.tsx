"use client";

import Image from "next/image";

const ST_PRICING_SECTION_ID = "st-pricing";

const STRIKE_THAT_CTA_IMAGE =
  "https://contetra.b-cdn.net/pages/services/st/strike-that-cta-img.png";
const STRIKE_THAT_DONE_IMAGE =
  "https://contetra.b-cdn.net/pages/services/st/strike-that-you-are-done.png";

export function StMiddleSectionTwo() {
  function scrollToPricing() {
    document
      .getElementById(ST_PRICING_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="w-full bg-[#0c2558] pb-10 pt-16 sm:pb-12 sm:pt-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 text-center sm:px-6 md:px-8">
        <h2 className="max-w-[1200px] text-[1.8rem] font-extrabold leading-[1.2] sm:text-[2rem] md:text-[2.2rem]">
          <span className="whitespace-nowrap text-[#E8C75F]">
            We understand how valuable your time and resources
          </span>
          <br />
          <span className="whitespace-nowrap text-white">
            are, and therefore we have you covered.
          </span>
        </h2>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[1100px] sm:mt-10">
        <Image
          src={STRIKE_THAT_CTA_IMAGE}
          alt="Strike That process benefits overview"
          width={1600}
          height={900}
          sizes="100vw"
          className="h-auto w-full object-cover object-center"
          unoptimized
        />
      </div>

      <div className="mx-auto mt-8 w-full max-w-[300px] sm:mt-10">
        <Image
          src={STRIKE_THAT_DONE_IMAGE}
          alt="Strike That completion message"
          width={300}
          height={300}
          sizes="300px"
          className="h-auto w-full object-contain object-center"
          unoptimized
        />
      </div>

      <div className="mt-8 w-full px-4 py-12 text-center sm:mt-10 sm:py-14">
        <p className="mx-auto max-w-[980px] text-balance text-base font-semibold leading-[1.5] text-white sm:text-xl md:text-2xl">
          You&apos;re free to allocate your resources to more productive
          activities.
          <br />
          We&apos;ll give you a detailed &amp; accurate report of struck-off
          status within just 5 working days!
        </p>

        <button
          type="button"
          onClick={scrollToPricing}
          className="cursor-pointer mt-8 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#E2533D] px-8 text-lg font-bold text-white shadow-[0_4px_0_#BC3B2A] transition-colors hover:bg-[#D24A36]"
        >
          Explore Pricing
        </button>
      </div>
    </section>
  );
}
