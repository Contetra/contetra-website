"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { LightRaysWrapper } from "@/components/reusable/LightRaysWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export const SectionOne = () => {
  const headlineContainerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const [isHeadlineReady, setIsHeadlineReady] = useState(false);

  // Headline lines to animate
  const lineOne = useMemo(() => "Finance Transformation Consulting for", []);
  const lineTwo = useMemo(() => "CFOs and Growing Businesses.", []);

  // Reset refs array length before render
  wordRefs.current = [];

  useEffect(() => {
    if (!headlineContainerRef.current || wordRefs.current.length === 0) return;

    const timeline = gsap.timeline({
      defaults: { ease: "power4.out" },
      onStart: () => setIsHeadlineReady(true),
    });

    // Prepare words first, then reveal container to avoid initial flash
    gsap.set(wordRefs.current, {
      yPercent: 120,
      opacity: 0,
      rotateX: 15,
      filter: "blur(8px)",
      transformPerspective: 600,
    });
    gsap.set(headlineContainerRef.current, { autoAlpha: 1 });

    timeline.to(wordRefs.current, {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.05,
    });

    const fallback = window.setTimeout(() => {
      setIsHeadlineReady(true);
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      timeline.kill();
    };
  }, []);

  const renderAnimatedLine = (
    text: string,
    colorClass: string,
    tag: "h1" | "h2",
  ) => {
    const words = text.split(" ");
    const HeadingTag = tag;
    return (
      <HeadingTag className={`${colorClass} font-medium text-[35px] lg:text-[38px] xl:text-[38px] 2xl:text-[45px] leading-[1em]`}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className=" inline-block mr-2 align-top"
          >
            <span
              className="inline-block will-change-transform enlarge-cursor"
              ref={(el) => {
                if (el) wordRefs.current.push(el);
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </HeadingTag>
    );
  };

  const renderAnimatedWords = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={`p-${word}-${index}`}
            className="overflow-hidden inline-block mr-2 align-top"
          >
            <span
              className="inline-block will-change-transform"
              ref={(el) => {
                if (el) wordRefs.current.push(el);
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="flex w-full gap-10 lg:gap-0 flex-col lg:flex-row mb-[100px] px-4 sm:px-8 md:px-12 lg:px-[80px]">
      <LightRaysWrapper count={20} speed={20} />
      <div className=" w-full lg:w-[60%] flex flex-col gap-6 justify-end">
        <div className="relative">
          {!isHeadlineReady ? (
            <div className="absolute inset-0 z-20 space-y-4">
              <Skeleton className="h-10 w-[90%] rounded-md bg-[#E7EEF8]" />
              <Skeleton className="h-10 w-[75%] rounded-md bg-[#E7EEF8]" />
              <Skeleton className="mt-6 h-4 w-full rounded-md bg-[#E7EEF8]" />
              <Skeleton className="h-4 w-[95%] rounded-md bg-[#E7EEF8]" />
              <Skeleton className="h-4 w-[82%] rounded-md bg-[#E7EEF8]" />
            </div>
          ) : null}

          <div ref={headlineContainerRef} className="flex flex-col opacity-0">
          <div className=" text-[20px] flex flex-col">
            <div className=" inline-block mb-2">
              {renderAnimatedLine(lineOne, "text-contetra-blue dark:!text-zinc-100", "h1")}
            </div>
            {renderAnimatedLine(lineTwo, "text-contetra-green", "h2")}
          </div>

          <p className="text-[16px] lg:text-[18px] font-[400] leading-[1.2em] mt-6">
            {renderAnimatedWords("When it comes to business finance,")}{" "}
            <b>{renderAnimatedWords("there’s no one-size fits all.")}</b>
            <br className="hidden lg:block" />
            {renderAnimatedWords(
              "Let us help you get the competitive advantage you need – whether it’s",
            )}
            <br className="hidden lg:block" />
            {renderAnimatedWords(
              "creating financial statements that make more sense for a global",
            )}
            <br className="hidden lg:block" />
            {renderAnimatedWords(
              "world, or finance strategy that drives your business to new heights.",
            )}
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
