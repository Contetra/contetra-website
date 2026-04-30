import Image from "next/image";

import { NumberTicker } from "@/components/ui/number-ticker";

const FRC_MIDDLE_IMAGE =
  "https://contetra.b-cdn.net/pages/services/frc/frc.png";

const stats = [
  {
    value: 75,
    suffix: "%",
    label: "Decrease in closure time of positions",
  },
  {
    value: 98,
    suffix: "%",
    label: "Functional & Cultural Fitment",
  },
  {
    value: 88,
    suffix: "%",
    label: "Increase in employee stickiness due to a smooth hiring process",
  },
  {
    value: 95,
    suffix: "%",
    label: "Company satisfaction rating",
  },
] as const;

export function FrcMiddleSectionOne() {
  return (
    <section className="w-full px-[10px] py-4 sm:px-4 md:px-8 xl:px-14 2xl:px-[80px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 bg-white px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] lg:gap-8">
        <div className="min-w-0">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.45rem,2.2vw,2rem)] font-bold leading-tight text-[#1a1640]">
              Who we are?
            </h2>
            <div className="mt-3 h-[3px] w-14 bg-[#50a085]" />
            <p className="mt-5 max-w-2xl text-pretty text-[clamp(0.95rem,1.25vw,1.15rem)] font-medium leading-[1.4em] text-[#25243a]">
              A bunch of ex-Big 4 consultants and former industry veterans who
              are obsessed with getting you the best finance team!
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-0">
            {stats.map((stat, index) => (
              <article key={stat.label} className="max-w-[170px]">
                <div className="flex items-end gap-0.5 text-[clamp(2.1rem,4vw,3.3rem)] font-semibold leading-none tracking-tight text-[#50a085]">
                  <NumberTicker
                    value={stat.value}
                    delay={index * 0.12}
                    className="text-[#50a085] dark:text-[#50a085]"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-tight text-[#25243a]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-[420px]">
          <Image
            src={FRC_MIDDLE_IMAGE}
            alt="Illustration representing strategic finance recruitment and problem solving"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
