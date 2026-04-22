"use client";

import Image from "next/image";

import { TaigasTopForm } from "./taigas-top-form";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const bulletPoints = [
  {
    text: "Do you find it difficult to keep up with complex technical accounting standards and the ever-changing regulatory requirements?",
    icon: `${cdnUrl}/pages/services/taigas/complicated.png`,
  },
  {
    text: "Worried about audit delays and those dreaded PBC emails from your auditors?",
    icon: `${cdnUrl}/pages/services/taigas/late-payment.png`,
  },
  {
    text: "And at the end of the day, preparation of financial statements, getting it cleared by auditors & resolving queries doesn't free you from the rest of your fun ops duties!",
    icon: `${cdnUrl}/pages/services/taigas/auditor.png`,
  },
] as const;

export const TaigasTopSection = () => {
  return (
    <section className="w-full px-[10px] pb-6 pt-2 sm:px-4 md:px-8 lg:pb-8 xl:px-14 2xl:px-[80px]">
      <div className="grid w-full items-start gap-8 overflow-hidden lg:grid-cols-[55fr_45fr] lg:gap-10 xl:gap-12">
        <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
          <h1 className="w-full text-[28px] font-semibold leading-[1.15] text-[#111111] dark:text-white sm:text-[34px] lg:text-[38px]">
            Because Financial Reporting
            <br />
            needs <span className="text-[#17A8E3]">“CHAMPIONS”</span>
            <span className="relative ml-2 inline-flex h-9 w-9 align-middle sm:h-10 sm:w-10">
              <Image
                src={`${cdnUrl}/pages/services/taigas/trophy.png`}
                alt="Trophy icon"
                fill
                className="object-contain"
                sizes="40px"
              />
            </span>
          </h1>

          <p className="mt-6 w-full text-[15px] leading-[1.5] text-[#000] dark:text-[#E5E7EB] sm:mt-8 sm:text-[16px] sm:leading-[1.4em]">
            Is the upcoming financial year-end closure seeming like an impending
            nightmare? With internal management <b>reporting deadlines</b> and the <b>audit season</b> looming large - you probably have a million things on
            your plate.
          </p>

          <p className="mt-6 w-full text-[15px] font-semibold italic leading-[1.5] text-[#17A8E3] dark:text-[#17A8E3] sm:mt-8 sm:text-[16px] sm:leading-[1.4em]">
            Let us help you sleep better. We&apos;re a bunch of ex-Big 4
            consultants &amp; industry veterans who want to take the stress out
            of financial statements preparation and audit closure for you!
          </p>

          <div className="mt-8 flex w-full flex-col gap-5 sm:mt-9">
            {bulletPoints.map((point) => (
              <div key={point.text} className="flex items-start gap-4">
                <div className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold text-[#5C6B7B] dark:border-[#31425A] dark:bg-[#0F172A] dark:text-[#CBD5E1] sm:mt-1">
                  <Image
                    src={point.icon}
                    alt="Bullet point icon"
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </div>
                <p className="text-[15px] leading-[1.5] text-[#000] dark:text-[#E5E7EB] sm:text-[16px] sm:leading-[1.4]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 w-full text-[15px] font-semibold italic leading-[1.5] text-[#ec914d] dark:text-[#ec914d] sm:mt-8 sm:text-[16px] sm:leading-[1.4]">
            Say goodbye to frequent (and sometimes unwarranted) audit
            adjustments to financial statements. Say hello to peaceful audit
            closures.
          </p>
        </div>

        <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
          <TaigasTopForm />
        </div>
      </div>
    </section>
  );
};
