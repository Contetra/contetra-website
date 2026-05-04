import Image from "next/image";

const FRC_SECTION_BG =
  "https://contetra.b-cdn.net/pages/services/frc/frc-background-3.png";
const FRC_CTA_IMAGE =
  "https://contetra.b-cdn.net/pages/services/frc/frc-cta-2.png";

export function FrcMiddleSectionFour() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-12 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-middle-section-four-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={FRC_SECTION_BG}
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-12 xl:gap-16">
        <div className="relative min-h-[280px] lg:min-h-[380px]">
          <div className="relative z-10 max-w-xl space-y-5 px-1 py-6 sm:py-8 lg:max-w-2xl lg:px-4 lg:py-10">
            <h2
              id="frc-middle-section-four-heading"
              className="text-balance text-[clamp(1.45rem,2.2vw,2rem)] font-bold leading-tight text-[#1a1640]"
            >
              Looking for a game changing approach?
            </h2>

            <p className="text-pretty text-[clamp(0.95rem,1.25vw,1.15rem)] leading-[1.55]">
              <span className="font-bold text-[#1a1640]">Let me introduce you</span>
              <span className="font-medium text-[#50a085]">
                {" "}
                to contractual staffing. It&apos;s all about{" "}
                <span className="font-bold">
                  flexibility, cost-effectiveness, and efficiency
                </span>{" "}
                when it comes to finding top-notch talent.
              </span>
            </p>

            <p className="text-pretty text-[clamp(0.95rem,1.2vw,1.1rem)] font-medium leading-[1.55] text-[#1a1640]">
              This is the secret sauce to meet your hiring needs while staying
              within timelines and budgets. (Plus, it&apos;s a great way to boost
              your retention rates)
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <Image
            src={FRC_CTA_IMAGE}
            alt="Contractual staffing: professionals agreeing on a contract with supporting documentation"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
