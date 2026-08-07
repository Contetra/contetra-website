import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OAS_ILLUSTRATION =
  "https://contetra.b-cdn.net/pages/services/oas/oas_Illustration.png";

const TURBOCHARGE_EBOOK_HREF =
  "/turbocharge-your-finance-function-through-offshore-accounting/";

export function OasMiddleSectionTwo() {
  return (
    <section
      className={cn(
        "w-full bg-white dark:bg-[#0A0A0A]",
        "box-border py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20",
        /* Horizontal gutters: padding only (no margin-based layout) */
        "px-[10px] sm:px-4 md:px-8 xl:px-14 2xl:px-[80px]"
      )}
    >
      {/* Full width inside section padding — edge-to-edge with the grey panel */}
      <div className="w-full">
        <div
          className={cn(
            "w-full overflow-hidden bg-[#E8EDF3] dark:bg-[#111827]",
            "rounded-[22px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[36px] xl:rounded-[40px]",
            /* Inner padding scales down; 80px is on the section, not doubled here */
            "p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12"
          )}
        >
          <div className="grid w-full items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10 2xl:gap-12">
            <div className="relative mx-auto flex w-full justify-center lg:mx-0">
              <div className="relative aspect-[16/10] w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <Image
                  src={OAS_ILLUSTRATION}
                  alt="Two professionals collaborating with devices — outsourcing accounting illustration"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 340px"
                  priority={false}
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center text-center lg:items-center">
              <p className="leading-[1.4em] w-full max-w-[480px] text-pretty text-[14px] font-normal text-slate-800 dark:text-[#E5E7EB] sm:text-[15px] md:text-[16px] lg:max-w-[440px] xl:max-w-[480px] xl:text-[17px]">
                Instead of trying to manage everything yourself, why not call in
                the experts? Read our short guide for why companies should
                outsource their accounting function!
              </p>
              <p className="mt-3 max-w-[480px] text-pretty text-[14px] font-bold leading-[1.5] text-slate-900 dark:text-white sm:mt-4 sm:text-[15px] md:text-[16px] lg:max-w-[440px] xl:max-w-[480px] xl:text-[17px]">
                Tldr; Complete control. Measurable KPIs. Zero time lost in
                training staff. Full Accountability.
              </p>
              <Button
                asChild
                className={cn(
                  "mt-4 h-auto min-h-10 w-full max-w-[340px] whitespace-normal rounded-lg px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-white shadow-[0_6px_18px_rgba(0,40,30,0.1)] sm:mt-5 sm:min-h-11 sm:max-w-[400px] sm:px-4 sm:py-3 sm:text-sm md:max-w-[440px] md:text-[15px] lg:text-base",
                  "bg-[#99D1B3] hover:bg-[#85c4a2] focus-visible:ring-[#99D1B3]/40",
                  "dark:bg-[#99D1B3] dark:hover:bg-[#85c4a2]"
                )}
              >
                <Link href={TURBOCHARGE_EBOOK_HREF}>
                  Find out how you can transform your accounting challenges into
                  opportunities.
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
