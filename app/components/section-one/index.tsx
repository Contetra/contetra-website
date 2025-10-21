"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import MainImage from "@/public/assets/images/home/Home-page-1st-banner-image.png";


export const SectionOne = () => {
  const headlineContainerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  // Headline lines to animate
  const lineOne = useMemo(() => "Financial Advisory", []);
  const lineTwo = useMemo(() => "for the bottom line.", []);

  // Reset refs array length before render
  wordRefs.current = [];

  useEffect(() => {
    if (!headlineContainerRef.current || wordRefs.current.length === 0) return;

    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Avoid initial flash
    gsap.set(headlineContainerRef.current, { autoAlpha: 1 });
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

  const renderAnimatedLine = (text: string, colorClass: string, tag: "h1" | "h2") => {
    const words = text.split(" ");
    const HeadingTag = tag;
    return (
      <HeadingTag className={`${colorClass} font-medium text-[50px]`}>
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="overflow-hidden inline-block mr-2 align-top">
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
          <span key={`p-${word}-${index}`} className="overflow-hidden inline-block mr-2 align-top">
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
    <div className="flex w-full ">
      <div className=" w-[50%] flex flex-col gap-6 justify-end">
        <div ref={headlineContainerRef} className="flex flex-col opacity-0">
          <div className=" text-[50px] flex flex-col">
            <div className=" inline-block -mb-3">
              {renderAnimatedLine(lineOne, "text-contetra-blue", "h1")}
            </div>
            {renderAnimatedLine(lineTwo, "text-contetra-green", "h2")}
          </div>

          <p className="text-[18px] font-[400] leading-[1.2em] mt-4">
            {renderAnimatedWords("When it comes to business finance,")}
            {" "}
            <b>{renderAnimatedWords("there’s no one-size fits all.")}</b>
            <br />
            {renderAnimatedWords("Let us help you get the competitive advantage you need – whether it’s")}
            <br />
            {renderAnimatedWords("creating financial statements that make more sense for a global")}
            <br />
            {renderAnimatedWords("world, or finance strategy that drives your business to new heights.")}
          </p>
        </div>
      </div>

      <div className="w-[50%] flex justify-center">
        <div className="w-[45%]">
          <Image className="w-full" src={MainImage} alt="MainImage" />
        </div>
      </div>
    </div>
  );
};
