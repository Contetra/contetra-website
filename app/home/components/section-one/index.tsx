"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { LightRaysWrapper } from "@/components/reusable/LightRaysWrapper";

const LINE_ONE = "Finance Transformation Consulting for";
const LINE_TWO = "CFOs and Growing Businesses.";

const headlineLineClass =
  "font-medium text-[35px] lg:text-[38px] xl:text-[38px] 2xl:text-[45px] leading-[1em]";

export const SectionOne = () => {
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  wordRefs.current = [];

  useEffect(() => {
    if (wordRefs.current.length === 0) return;

    const timeline = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    gsap.set(wordRefs.current, {
      yPercent: 120,
      opacity: 0,
      rotateX: 15,
      filter: "blur(8px)",
      transformPerspective: 600,
    });

    timeline.to(wordRefs.current, {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.05,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  // const renderAnimatedWords = (text: string) => {
  //   const words = text.split(" ");
  //   return (
  //     <>
  //       {words.map((word, index) => (
  //         <span
  //           key={`p-${word}-${index}`}
  //           className="overflow-hidden inline-block mr-2 align-top"
  //         >
  //           <span
  //             className="inline-block will-change-transform"
  //             ref={(el) => {
  //               if (el) wordRefs.current.push(el);
  //             }}
  //           >
  //             {word}
  //           </span>
  //         </span>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <div className="flex w-full gap-10 lg:gap-0 flex-col lg:flex-row mb-[100px] px-4 dark:bg-[#0A0A0A] sm:px-8 md:px-12 lg:px-[80px]">
      <LightRaysWrapper count={20} speed={20} />
      <div className=" w-full lg:w-[60%] flex flex-col gap-6 justify-end">
        <div className="relative">
          <div className="flex flex-col">
            <div className=" text-[20px] flex flex-col">
              <div className=" inline-block mb-2">
                <h1
                  className={`${headlineLineClass} text-contetra-blue dark:!text-zinc-100`}
                >
                  {LINE_ONE}
                  {" "}
                </h1>
              </div>
              <h2
                className={`${headlineLineClass} text-contetra-green`}
              >
                {LINE_TWO}
              </h2>
            </div>

            <p className="text-[16px] lg:text-[18px] font-[400] leading-[1.2em] mt-6 dark:text-[#E5E7EB]">
              When it comes to business finance,
              <b>there’s no one-size fits all.</b>
              <br className="hidden lg:block" />
              Let us help you get the competitive advantage you need – whether it’s
              <br className="hidden lg:block" />
              creating financial statements that make more sense for a global
              <br className="hidden lg:block" />
              world, or finance strategy that drives your business to new heights.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full lg:w-[40%] flex justify-center">
        <div className="w-[80%] sm:w-[50%] lg:w-[50%] flex justify-center">
          <Image
            className="h-auto w-full"
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/pages/home-page/Home-page-1st-banner-image.png`}
            alt="Finance transformation visual"
            width={520}
            height={620}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
