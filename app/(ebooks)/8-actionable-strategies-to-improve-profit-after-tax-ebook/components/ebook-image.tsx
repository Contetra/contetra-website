import Image from "next/image";
import React from "react";

export const EbookImage = () => {
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center">
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/8-Actionable-Strategies-to-Improve-Profit-After-Tax.png`}
        alt={`8 Actionable Strategies to Improve Profit After Tax`}
        priority
        width={450}
        height={400}
        className="rounded-xl cursor-pointer w-[350px] md:w-[300px] xl:w-[400px] 2xl:w-[450px]"
        quality={100}
      />
    </div>
  );
};
