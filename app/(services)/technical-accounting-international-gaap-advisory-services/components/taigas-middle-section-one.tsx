"use client";

import { Highlighter } from "@/components/ui/highlighter";
import React from "react";
import Lottie from "lottie-react";
import animationOne from "@/components/lottie/animation-1.json";
import animationTwo from "@/components/lottie/animation-2.json";
import animationThree from "@/components/lottie/animation-3.json";
import animationFour from "@/components/lottie/animation-4.json";


export const TaigasMiddleSectionOne = () => {
  return (
    <div className="my-[50px] w-full flex min-h-[100px]  flex-col gap-20 ">
      <div className="flex w-full flex-col gap-12 justify-center items-center min-h-[100px] py-[40px] bg-[#F8F9FE] dark:bg-[#111827] rounded-b-[50px] xl:rounded-b-[100px]">
        <Highlighter
          iterations={6}
          strokeWidth={2}
          padding={5}
          action="underline"
          color="#FF9800"
          animationDuration={1500}
        >
          <h2 className="text-[35px] xl:text-[40px] font-medium ">
            Who we are
          </h2>
        </Highlighter>

        <p className="hidden xl:block leading-[1.4em] text-[14px] xl:text-[17px] text-center">
          A bunch of
          {"\u00A0"}
          {"\u00A0"}
          <Highlighter
            iterations={6}
            strokeWidth={2}
            padding={5}
            action="highlight"
            color="#FF9800"
            animationDuration={1500}
          >
            <span className=" font-bold">ex-Big 4 consultants</span>
          </Highlighter>
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          and former
          {"\u00A0"}
          {"\u00A0"}
          <Highlighter
            iterations={6}
            strokeWidth={2}
            padding={5}
            action="highlight"
            color="#FF9800"
            animationDuration={1500}
          >
            <span className="px-2 font-bold">industry veterans</span>
          </Highlighter>
          {"\u00A0"}
          {"\u00A0"}
          who are aware of the latest updates to the accounting standards,
          <br />
           have hands-on audit experience and want to make sure you have a
          smooth financial statement closure process!
        </p>

        <p className="xl:hidden leading-[1.6em] text-[15px] xl:text-[17px] text-center px-[10px]">
          A bunch of
          {"\u00A0"}
          {"\u00A0"}
          <Highlighter
            iterations={6}
            strokeWidth={2}
            padding={5}
            action="highlight"
            color="#FF9800"
            animationDuration={1500}
          >
            <span className=" font-bold">ex-Big 4 consultants</span>
          </Highlighter>
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          and former
          {"\u00A0"}
          {"\u00A0"}
          <Highlighter
            iterations={6}
            strokeWidth={2}
            padding={5}
            action="highlight"
            color="#FF9800"
            animationDuration={1500}
          >
            <span className="px-2 font-bold">industry veterans</span>
          </Highlighter>
          {"\u00A0"}
          {"\u00A0"}
          who are aware of the latest updates to the accounting standards,  have
          hands-on audit experience and want to make sure you have a smooth
          financial statement closure process!
        </p>
      </div>

      <div className="flex w-full px-[10px] md:px-[30px] xl:px-[80px] flex-col gap-10 md:gap-6">
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 w-full">
          <div className="w-full md:w-[50%] flex items-center xl:pl-[120px] 2xl:pl-[180px]">
            <p className="font-normal">
              We ensure that your team’s bandwidth (yes, that favourite word of
              the finance team) isn’t choked on account of{" "}
              <b>continuous changes to financial statements</b> and frequent
              discussions with auditors. We’ll gladly take that on.
            </p>
          </div>

          <div className=" w-full md:w-[50%] flex justify-center md:justify-start">
            <Lottie
              className=" max-w-[350px] md:max-w-[400px] "
              animationData={animationOne}
              loop
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
            <Lottie
              className=" max-w-[250px] xl:max-w-[280px] 2xl:max-w-[320px]"
              animationData={animationTwo}
              loop
            />
          </div>

          <div className="w-full md:w-[50%] flex items-center ">
            <p className="font-normal xl:pr-[100px] 2xl:pr-[180px]">
              Because of bandwidth constraints (yes, that word again!), we’ve
              noticed that finance teams are generally{" "}
              <b>
                unable to challenge even the unmeritorious requests from
                auditors.
              </b>{" "}
              And more so, once the position is taken, it is expected to be
              followed in subsequent years. Well, not on our watch!
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 w-full">
          <div className="w-full md:w-[50%] flex items-center xl:pl-[120px] 2xl:pl-[180px]">
            <p className="font-normal">
              <b> Complex technical accounting issues</b>, end to end
              preparation of financial statements and creation of technical
              accounting memos is our area of expertise. So you can be assured
              of the collective wisdom of former Big-4 auditors and senior
              industry controllers!
            </p>
          </div>

          <div className=" w-full md:w-[50%] flex justify-center md:justify-center">
            <Lottie
              className=" max-w-[250px] md:max-w-[280px] "
              animationData={animationThree}
              loop
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
            <Lottie
              className=" max-w-[450px] xl:max-w-[480px] 2xl:max-w-[520px]"
              animationData={animationFour}
              loop
            />
          </div>

          <div className="w-full md:w-[50%] flex items-center ">
            <p className="font-normal xl:pr-[100px] 2xl:pr-[180px]">
              Most importantly – <b>how do we help you sleep better?</b> By handling
              the entire financial statement preparation, engaging with auditors
              for clearing queries, building documentation & memos around
              complex accounting positions, and dealing with any modifications
              and technical positions considered in the financials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
