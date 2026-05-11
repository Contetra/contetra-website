import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IPO_READINESS_BG =
  "https://contetra.b-cdn.net/pages/services/ir/IPO-Readiness-landing-page-background.png";

const gold = "text-[#FFC000]";

export function IrTopSection() {
  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden bg-[#180130]",
        "max-md:min-h-[min(72svh,560px)]",
        "md:bg-transparent md:min-h-[85vh] xl:min-h-[108vh]",
      )}
      aria-labelledby="ipo-readiness-hero-heading"
    >
      <Image
        src={IPO_READINESS_BG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-contain object-center md:block"
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex w-full flex-col justify-center",
          "px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:px-10 md:pb-14 lg:px-14 lg:pb-16 xl:px-20",
        )}
      >
        <div className="mx-auto flex w-full max-w-[52rem] flex-col items-center text-center">
          <h1
            id="ipo-readiness-hero-heading"
            className={cn(
              "text-center font-extrabold leading-[1.12] tracking-tight text-white",
              "text-[1.65rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[2.85rem] xl:text-[4.15rem]",
            )}
          >
            <span className={gold}>IPO-Ready</span> on Paper.
            <br />
            OR <span className={gold}>IPO-Ready</span> in Reality?
          </h1>

          <p
            className={cn(
              "mt-4 max-w-[40rem] text-center text-pretty font-medium text-white/95",
              "text-[0.9375rem] leading-relaxed sm:mt-5 sm:text-base md:text-lg",
            )}
          >
            Most companies fail IPO readiness not on valuation but on controls,
            cash flow discipline, and credibility.
          </p>

          <p
            className={cn(
              "mt-4 max-w-[36rem] text-center text-pretty font-medium italic",
              gold,
              "text-sm sm:mt-5 sm:text-[0.9375rem] md:text-base",
            )}
          >
            We prepare businesses for scrutiny not just listing.
          </p>

          <Button
            asChild
            size="lg"
            className={cn(
              "mt-8 h-auto rounded-full px-8 py-3.5 text-[0.9375rem] font-bold text-white shadow-none sm:mt-9 sm:px-10 sm:py-4 sm:text-base",
              "bg-[#D14124] hover:bg-[#b8361e] focus-visible:ring-[#D14124]/40",
            )}
          >
            <a href="#ipo-readiness-assessment">Assess Your IPO Readiness</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
