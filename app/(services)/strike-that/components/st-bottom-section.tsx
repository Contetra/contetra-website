"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { LogoCarousel } from "@/components/common/logo-carousel";

export function StBottomSection() {
  return (
    <section className="w-full  px-4 pt-4 pb-12 sm:px-6 md:px-8 md:pb-16">
      <div className="mx-auto w-full max-w-[1240px] pb-16">
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/10"
            aria-label="Previous case study"
          >
            <ArrowLeft className="h-9 w-9 stroke-[2.5]" />
          </button>

          <div className="w-full max-w-[760px] rounded-[4px] bg-[#0F0D67] px-4 py-3 text-center text-[13px] font-semibold leading-[1.3] text-white shadow-[0_8px_18px_rgba(15,13,103,0.25)] sm:text-[16px]">
            How We Managed to Save 100s of Man-hours for a Cold Pressed Juice
            Company Resulting in Timely Audit Closure?
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/10"
            aria-label="Next case study"
          >
            <ArrowRight className="h-9 w-9 stroke-[2.5]" />
          </button>
        </div>
      </div>
      <LogoCarousel />
    </section>
  );
}
