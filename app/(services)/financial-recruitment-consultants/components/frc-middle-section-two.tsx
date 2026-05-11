import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const FRC_CTA_IMAGE =
  "https://contetra.b-cdn.net/pages/services/frc/frc-cta-two.png";

const FINANCE_DREAM_TEAM_GUIDE_HREF =
  "#";

export function FrcMiddleSectionTwo() {
  return (
    <section className="w-full py-4">
      <div className="grid w-full grid-cols-1 items-stretch gap-8 overflow-hidden bg-[#f2f2f2] px-4 pt-8 sm:px-6 md:px-8 md:pt-10 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.3fr)] lg:gap-10 xl:px-14 2xl:px-[80px]">
        <div className="relative flex min-h-[220px] items-end justify-center lg:min-h-[300px]">
          <div className="relative h-full min-h-[220px] w-full max-w-[460px]">
            <Image
              src={FRC_CTA_IMAGE}
              alt="Illustration of a finance professional reviewing candidates"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-contain object-bottom scale-x-[-1]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center py-2 pb-8 lg:pb-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-[clamp(1rem,1.35vw,1.35rem)] font-bold leading-snug text-[#1a1640]">
              Using the same hiring process as everyone else won&apos;t help in
              building THE TEAM! To attract dynamic talent within timelines and
              budgets, while improving retention rates, you need to change your
              approach.
            </p>

            <p className="text-[clamp(1.1rem,1.6vw,1.75rem)] font-bold uppercase leading-snug text-[#50a085]">
              Find out what happens
              <br />
              when chartered accountants hire for your team!
            </p>

            <Button
              asChild
              variant="outline"
              className="h-auto min-h-14 w-full max-w-[560px] rounded-full border-2 border-[#50a085] bg-transparent px-6 py-4 text-center text-[clamp(0.95rem,1.15vw,1.1rem)] font-semibold text-[#50a085] shadow-[0_3px_10px_rgba(80,160,133,0.22)] hover:bg-[#edf7f3] hover:text-[#50a085]"
            >
              <Link
                href={FINANCE_DREAM_TEAM_GUIDE_HREF}
                className="inline-flex items-center justify-center gap-2"
              >
                <span>The Ultimate Guide to Building Your Finance Dream-Team</span>
                <ArrowRight className="size-5 shrink-0" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
