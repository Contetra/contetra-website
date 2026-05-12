import React from "react";

export const EbooksSectionOne = () => {
  return (
    <div className="flex min-h-[min(52vh,320px)] w-full flex-col items-center justify-center gap-3 bg-[#0c2558] px-4 py-10 text-center sm:min-h-[min(48vh,360px)] sm:gap-4 sm:px-6 sm:py-12 md:gap-5 md:px-8 md:py-14 lg:min-h-[400px] lg:px-12 lg:py-16 xl:px-16 2xl:px-[80px]">
      <h1 className="max-w-[min(100%,40rem)] text-balance text-[1.625rem] font-bold leading-[1.2] text-white sm:text-[1.875rem] md:text-[2.125rem] lg:text-[2.25rem] xl:text-[2.375rem] 2xl:text-[2.5rem]">
        Resources that keep you
        <br /> ahead of the game
      </h1>
      <p className="max-w-[min(100%,38rem)] text-balance text-lg font-normal leading-snug text-white/95 sm:text-xl md:text-2xl lg:text-[1.875rem]">
        Build a better strategy with our tips, insights, and best practices.
      </p>
    </div>
  );
};
