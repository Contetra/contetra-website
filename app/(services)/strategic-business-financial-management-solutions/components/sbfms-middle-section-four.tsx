import Image from "next/image";

const JOURNEY_STAGES = [
  {
    title: "Not Breaking-even",
    note: "Negative cash from operations",
  },
  {
    title: "Recovering Cost",
    note: "Profits in books but no cash in bank",
  },
  {
    title: "Making Cash",
    note: "Positive cash from operations",
  },
  {
    title: "Finding Scale",
    note: "Launch new products, enter new markets, and multiply profits",
  },
  {
    title: "Unlocking Value",
    note: "Become investment ready and acquire first round of funding",
  },
  {
    title: "Creating a Legacy",
    note: "Create and enhance perpetual brand value",
  },
] as const;

export function SbfmsMiddleSectionFour() {
  return (
    <section
      className="w-full bg-white py-8 sm:py-10 md:py-12 dark:bg-[#0f1218]"
      aria-label="Strategic business journey"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-10 w-full max-w-[760px] rounded-[26px] bg-[#343a77] px-6 py-8 text-center sm:px-10 sm:py-9">
          <p className="mx-auto max-w-[560px] text-[1.35rem] font-semibold leading-[1.28] text-white sm:text-[1.55rem]">
            Want to know how you can manage your credit risk and check whether
            your customers will pay you on time?
          </p>
          <button
            type="button"
            className="mt-5 rounded-full bg-[#55b48a] px-9 py-2 text-[1.2rem] font-semibold text-white"
          >
            Curious? Read On!
          </button>
        </div>

        <div className="xl:hidden">
          <h2 className="max-w-[560px] text-[1.9rem] font-bold leading-[1.2] text-[#1a2751] sm:text-[2.2rem] dark:text-white">
            Which is the <span className="text-[#55b48a]">6-STAGE JOURNEY</span>{" "}
            That Every Business Goes Through?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY_STAGES.map((stage) => (
              <article
                key={stage.title}
                className="rounded-2xl border border-[#d6dbea] bg-[#f7f9fc] p-5 dark:border-[#2b3348] dark:bg-[#141b2b]"
              >
                <h3 className="text-[1.1rem] font-semibold text-[#2a285d] dark:text-[#d9ddff]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.45] text-[#1f2937] dark:text-neutral-300">
                  {stage.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 hidden w-full xl:block">
        <Image
          src="https://contetra.b-cdn.net/pages/services/sbfms/sbfms-cta-4.png"
          alt="Six-stage business journey"
          width={1920}
          height={780}
          className="h-auto w-full object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
