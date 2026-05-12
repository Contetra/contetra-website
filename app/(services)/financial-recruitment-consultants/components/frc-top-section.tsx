import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FrcTopForm } from "./frc-top-form";

const FRC_IMG_TEAM =
  "https://contetra.b-cdn.net/pages/services/frc/frc-img-1.png";
const FRC_BG =
  "https://contetra.b-cdn.net/pages/services/frc/frc-Background-1.png";

const NAVY = "#1a1640";
const TEAL = "#50a085";

function TalentBulletList({ bulletFill }: { bulletFill: string }) {
  return (
    <ul className="mt-4 flex flex-col gap-2">
      <li className="flex gap-3">
        <span
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
          aria-hidden
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: bulletFill }}
          />
        </span>
        <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[14px] 2xl:text-[15px]">
          <p className="font-bold">Expertise of CA&apos;s :</p>
          <p>
            We&apos;re a finance-only recruitment firm run by a bunch of
            Chartered Accountants which gives us a real edge. We know the ins
            and outs of finance and accounting roles like nobody else, which
            means we&apos;ve got the skills to find you the perfect candidate.
          </p>
        </div>
      </li>

      <li className="flex gap-3">
        <span
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
          aria-hidden
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: bulletFill }}
          />
        </span>
        <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[14px] 2xl:text-[15px]">
          <p className="font-bold">
            The correct culture and functional fitment within budget? :
          </p>
          <p>
            Our way of doing things not only gets you top-notch hires but also
            slashes your hiring costs by a whopping 37%. We&apos;ve got the
            connections and know-how to find candidates in a flash, so you can
            kiss goodbye to the endless and expensive recruitment grind. We also
            go the extra mile to ensure culture fitment for your organisation.
          </p>
        </div>
      </li>

      <li className="flex gap-3">
        <span
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
          aria-hidden
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: bulletFill }}
          />
        </span>
        <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[14px] 2xl:text-[15px]">
          <p className="font-bold">
            Ready-to-deploy dynamic finance resources:
          </p>
          <p>
            We offer comprehensive training programs designed to bridge skill
            gaps and equip your team with required core competencies
          </p>
        </div>
      </li>
    </ul>
  );
}

function HeroHeading() {
  return (
    <div className="max-w-xl">
      <h1
        id="frc-hero-heading"
        className="text-balance font-bold uppercase leading-[1.02] tracking-[0.02em]"
        style={{ color: NAVY }}
      >
        <span className="mt-0 block max-xl:text-[clamp(2.35rem,7vw,3.5rem)] xl:text-[clamp(1.875rem,5vw,3.25rem)] font-semibold tracking-tight">
          Creating your
        </span>
        <span
          className="mt-1 block max-xl:text-[clamp(2.35rem,7vw,3.5rem)] xl:text-[clamp(1.875rem,5vw,3.25rem)] font-extrabold tracking-tight"
          style={{ color: NAVY }}
        >
          Finance
        </span>
        <span className="mt-1 block max-xl:text-[clamp(2.35rem,7vw,3.5rem)] xl:text-[clamp(1.875rem,5vw,3.25rem)] font-bold tracking-tight">
          Dream team !
        </span>
      </h1>
      <h1
        className="text-teal mt-2 text-balance text-[1rem] font-semibold normal-case leading-snug tracking-wide sm:text-xs md:text-[1.5rem]"
      
      >
        Finance Recruitment Consultants<br />
         in India
      </h1>
    </div>
  );
}

function IntroParagraph({ className }: { className?: string }) {
  return (
    <p
      className={`flex gap-2 text-pretty text-[15px] font-semibold leading-relaxed sm:text-[16px] md:text-[17px] ${className ?? ""}`}
    >
      <Play
        className="mt-1 h-4 w-4 shrink-0 fill-current text-current"
        aria-hidden
      />
      <span className="text-[15px] font-semibold leading-[1.4em] sm:text-[16px] md:text-[17px] 2xl:text-[20px]">
        From talent acquisition, to talent development (Yes! We help in
        nurturing the talent too!) we&apos;re your one-stop-solution in building
        the team that aligns with your goals!
      </span>
    </p>
  );
}

export const FrcTopSection = () => {
  return (
    <div className=" mt-[0px] xl:mt-[80px] flex min-h-screen flex-col">
      {/* &lt; 1280px: no images, stacked copy → solid teal → form */}
      <div className="flex flex-col xl:hidden">
        <div className="px-4 pb-6 pt-4 sm:px-6 md:px-10">
          <HeroHeading />
        </div>

        <div className="px-4 sm:px-6 md:px-10">
          <IntroParagraph className="text-[#1a1640]" />
        </div>

        <div
          className="mt-6 px-4 py-8 text-white sm:px-6 md:px-10"
          style={{ backgroundColor: TEAL }}
        >
          <TalentBulletList bulletFill={NAVY} />
        </div>

        <div className="px-4 pb-12 pt-8 sm:px-6 md:px-10">
          <FrcTopForm />
        </div>
      </div>

      {/* ≥ 1280px: original hero image + background image + overlay form */}
      <div className="hidden flex-col xl:flex">
        <div className="flex max-w-6xl flex-row flex-wrap items-center justify-start gap-10 px-4 md:flex-nowrap md:px-10 xl:ml-[10px] xl:px-[80px] 2xl:ml-[80px]">
          <HeroHeading />

          <div className="relative h-[200px] w-[220px] shrink-0 sm:h-[220px] sm:w-[260px] md:h-[240px] md:w-[300px] lg:h-[260px] lg:w-[340px]">
            <Image
              src={FRC_IMG_TEAM}
              alt="Diverse finance professionals illustrated as a team"
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 280px, 380px"
              className="object-contain object-left"
            />
          </div>
        </div>

        <div
          className="flex w-full min-h-[70vh]"
          style={{
            backgroundImage: `url(${FRC_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-[1] ml-0 max-w-2xl px-4 pt-8 text-white md:ml-[60px] md:px-6 xl:ml-[120px] xl:pt-[30px]">
            <IntroParagraph className="text-white" />

            <TalentBulletList bulletFill={TEAL} />
          </div>

          <FrcTopForm />
        </div>
      </div>
    </div>
  );
};
