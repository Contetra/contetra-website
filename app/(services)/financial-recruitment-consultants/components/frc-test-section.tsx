import Image from "next/image";
import React from "react";

const FRC_IMG_TEAM =
  "https://contetra.b-cdn.net/pages/services/frc/frc-img-1.png";
  const FRC_BG =
  "https://contetra.b-cdn.net/pages/services/frc/frc-Background-1.png";

export const FrcTestSection = () => {
  const NAVY = "#1a1640";
  const TEAL = "#50a085";
  return (
    <div className=" min-h-screen flex flex-col mt-[80px] ">
      <div className="flex max-w-6xl flex-row flex-wrap items-center justify-start gap-10 md:flex-nowrap px-[80px] ml-[80px]">
        <h1
          id="frc-hero-heading"
          className="max-w-xl shrink-0 text-balance font-bold uppercase leading-[1.02] tracking-[0.02em]"
          style={{ color: NAVY }}
        >
          <span className="mt-0 block text-[clamp(1.875rem,5vw,3.25rem)] font-semibold tracking-tight">
            Creating your
          </span>
          <span
            className="mt-1 block text-[clamp(1.875rem,5vw,3.25rem)] font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            Finance
          </span>
          <span className="mt-1 block text-[clamp(1.875rem,5vw,3.25rem)] font-bold tracking-tight">
            Dream team !
          </span>
        </h1>

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
        className="w-full h-[70vh]"
        style={{
          backgroundImage: `url(${FRC_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >

   
      </div>
    </div>
  );
};
