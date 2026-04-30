"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import animationSeven from "@/components/lottie/animation-7.json";
import animationEight from "@/components/lottie/animation-8.json";

const CT_ANIM_URL = "https://contetra.b-cdn.net/pages/services/ct/ct-anim.png";

const rows = [
  {
    id: "practical-training",
    title: "Practical Training Excellence",
    body:
      "With a seasoned team of ex-Big 4 consultants, Chartered Accountants, and MBAs, our trainers bring real-world expertise from diverse roles in the finance industry. This unique background allows us to craft trainings that go beyond theory, immersing learners in practical implications and fostering deep understanding. Prepare to bridge the gap between knowledge and application with our exceptional practical training approach.",
    media: "lottie7" as const,
    mediaFirst: false,
  },
  {
    id: "company-synergy",
    title: "Aligning with Company Synergy and Culture",
    body:
      "We understand the importance of aligning with your company's unique synergy and culture. Through our tailored training programs, we not only equip your employees with the necessary technical knowledge but also focus on fostering a mindset that resonates with your organization's values, ensuring they can effectively contribute and thrive within your company's dynamic environment.",
    media: "lottie8" as const,
    mediaFirst: true,
  },
  {
    id: "roi-driven",
    title: "ROI-Driven Trainings",
    body:
      "By training your employees with the necessary knowledge and tools, we empower them to make informed decisions, drive efficiency, and contribute effectively to your business's success. With our training, you can witness improved ROI, streamlined processes, enhanced productivity, and a workforce that is aligned with your company's growth objectives, ensuring measurable and tangible outcomes for your organization.",
    media: "image" as const,
    mediaFirst: false,
  },
] as const;

function LottieVisual({
  animationData,
  ariaLabel,
}: {
  animationData: object;
  ariaLabel: string;
}) {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[320px] shrink-0 items-center justify-center sm:max-w-[360px] md:max-w-[400px]"
      role="img"
      aria-label={ariaLabel}
    >
      <Lottie
        className="h-full w-full max-h-[240px] max-w-[240px] sm:max-h-[260px] sm:max-w-[260px] md:max-h-[280px] md:max-w-[280px]"
        animationData={animationData}
        loop
      />
    </div>
  );
}

function MediaImage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[320px] shrink-0 items-center justify-center sm:max-w-[360px] md:max-w-[400px]">
      <Image
        src={CT_ANIM_URL}
        alt="Corporate training illustration"
        width={400}
        height={400}
        className="h-auto w-full object-contain object-center"
        sizes="(max-width: 768px) 320px, 400px"
        priority={false}
      />
    </div>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center">
      <h3 className="border-l-4 border-[#111827] pl-4 text-[20px] font-bold leading-tight text-[#111827] sm:text-[22px] md:text-[24px] dark:border-[#344155] dark:text-white">
        {title}
      </h3>
      <p className="mt-4 text-[14px] leading-[1.65] text-[#4B5563] sm:text-[15px] dark:text-[#E5E7EB]">
        {body}
      </p>
    </div>
  );
}

export const CtMiddleSectionTwo = () => {
  return (
    <section className="w-full  px-[10px] py-6 sm:px-4 sm:py-8 md:px-8 xl:px-14 2xl:px-[80px] ">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[26px] font-semibold text-[#111827] sm:text-[30px] md:text-[32px] dark:text-white">
              Why Contetra?
            </h2>
            <div
              className="mt-4 flex items-center justify-center gap-2"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB] dark:bg-[#4B5563]" />
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB] dark:bg-[#4B5563]" />
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB] dark:bg-[#4B5563]" />
              <span className="ml-1 h-1 w-12 rounded-full bg-[#9CA3AF] sm:w-16 dark:bg-[#6B7280]" />
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-14 sm:mt-14 sm:gap-16 md:mt-16 md:gap-20">
            {rows.map((row) => {
              const media =
                row.media === "lottie7" ? (
                  <LottieVisual
                    animationData={animationSeven}
                    ariaLabel="Team training session animation"
                  />
                ) : row.media === "lottie8" ? (
                  <LottieVisual
                    animationData={animationEight}
                    ariaLabel="Presentation and alignment animation"
                  />
                ) : (
                  <MediaImage />
                );

              const text = (
                <TextBlock title={row.title} body={row.body} />
              );

              return (
                <div
                  key={row.id}
                  className={
                    row.mediaFirst
                      ? "flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16"
                      : "flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16"
                  }
                >
                  {row.mediaFirst ? (
                    <>
                      <div className="flex w-full shrink-0 justify-center md:w-[42%] md:max-w-none lg:w-[40%]">
                        {media}
                      </div>
                      <div className="w-full md:min-w-0 md:flex-1">{text}</div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:min-w-0 md:flex-1">{text}</div>
                      <div className="flex w-full shrink-0 justify-center md:w-[42%] md:max-w-none lg:w-[40%]">
                        {media}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
