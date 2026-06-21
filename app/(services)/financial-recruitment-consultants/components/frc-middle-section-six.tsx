import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const FINANCE_LD_DYNAMICS_POST_HREF =
  "/2022/10/10/the-ld-dynamics-within-the-finance-function/";

export function FrcMiddleSectionSix() {
  return (
    <section
      className="w-full bg-[#eaf6f2] px-4 py-12 dark:bg-[#111827] sm:px-6 sm:py-14 md:px-8 md:py-16 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-section-six-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center text-center">
        <div className="mx-auto w-full max-w-[min(640px,94%)] space-y-6">
          <header>
            <h2
              id="frc-section-six-heading"
              className="text-balance font-bold leading-tight"
            >
              <span className="block text-[clamp(1.25rem,2.2vw,1.85rem)] text-[#1a1640] dark:text-white">
                Maybe your team is fully staffed.
              </span>
              <span className="mt-2 block text-[clamp(1.25rem,2.2vw,1.85rem)] text-[#c41e3a]">
                But are they fully skilled?
              </span>
            </h2>
            <p className="text-[clamp(1rem,1.35vw,2rem)] font-bold leading-snug text-[#1a1640] mt-5 dark:text-white">Challenges in Hiring Finance Talent</p>
            <div
              className="mx-auto mt-4 h-[3px] w-[clamp(120px,16vw,200px)] bg-[#50a085]"
              aria-hidden
            />
          </header>

          <div className="space-y-4 pt-2 text-center">
            <p className="text-pretty text-[clamp(0.95rem,1.2vw,1.1rem)] font-medium leading-relaxed text-[#25243a] dark:text-[#E5E7EB]">
              When it comes to Finance roles, it&apos;s{" "}
              <span className="font-semibold text-[#50a085]">Quality&gt;Quantity</span>
              {" "}
              &amp; we&apos;ve got the talent pool to enhance your team&apos;s
              capabilities!
            </p>
            <p className="text-pretty text-[clamp(0.95rem,1.15vw,1.05rem)] font-medium leading-relaxed text-[#25243a] dark:text-[#D1D5DB]">
              Read more about the importance of L&amp;D for the finance function
              below.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              asChild
              variant="outline"
              className="h-auto min-h-12 rounded-full border-2 border-[#50a085] bg-white px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-[#50a085] shadow-[0_4px_16px_rgba(80,160,133,0.28)] hover:bg-[#f4faf8] hover:text-[#50a085] dark:border-[#80D7AA] dark:bg-[#172036] dark:text-[#86efac] dark:hover:bg-[#0A0A0A] sm:min-h-14 sm:px-8 sm:text-sm"
            >
              <Link href={FINANCE_LD_DYNAMICS_POST_HREF}>
                <span>How L&amp;D is a game changer</span>
                <ArrowRight className="size-4 sm:size-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
