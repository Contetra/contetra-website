import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OAS_ILLUSTRATION_2 =
  "https://contetra.b-cdn.net/pages/services/oas/oas_Illustration_2.png";

export function OasMiddleSectionFour() {
  return (
    <section
      className={cn(
        "w-full bg-white",
        "box-border py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20",
        "px-[10px] sm:px-4 md:px-8 xl:px-14 2xl:px-[80px]"
      )}
    >
      <div className="w-full">
        <div
          className={cn(
            "w-full overflow-hidden bg-[#f0f2f7]",
            "rounded-[22px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[36px] xl:rounded-[40px]",
            "p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12",
            "dark:bg-slate-800/60"
          )}
        >
          <div className="grid w-full items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10 2xl:gap-12">
            <div className="order-2 flex min-w-0 flex-col items-center justify-center text-center lg:order-1 lg:items-center">
              <p className="w-full max-w-[520px] text-pretty text-[13px] font-normal leading-[1.65] text-slate-800 sm:text-[14px] md:text-[15px] lg:max-w-none xl:text-[16px] dark:text-slate-200">
                Get our exclusive big-4 approved accounting memo on{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  &apos;Revenue Recognition ASC 606 Implications on
                  Acquisition&apos;
                </strong>{" "}
                and an exhaustive{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  &apos;Period Closure Checklist&apos;
                </strong>{" "}
                to ensure a smooth year-end
              </p>
              <Button
                asChild
                className={cn(
                  "mt-5 h-auto min-h-9 w-full max-w-[340px] whitespace-normal rounded-md px-3 py-2.5 text-center text-[11.5px] font-semibold leading-snug text-white shadow-[0_6px_20px_rgba(0,50,35,0.14)] sm:mt-6 sm:min-h-10 sm:max-w-[380px] sm:px-4 sm:py-3 sm:text-xs md:max-w-[420px] md:text-[13px]",
                  "bg-[#95d5b2] hover:bg-[#82c9a0] focus-visible:ring-[#95d5b2]/45",
                  "dark:bg-[#95d5b2] dark:hover:bg-[#82c9a0]"
                )}
              >
                <Link href="/ebooks">
                  Download our detailed Reporting Bundle
                </Link>
              </Button>
            </div>

            <div className="relative order-1 mx-auto flex w-full justify-center lg:order-2 lg:mx-0">
              <div className="relative aspect-[16/10] w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <Image
                  src={OAS_ILLUSTRATION_2}
                  alt="Professional at a desk reviewing accounting documents — line illustration"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 340px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
