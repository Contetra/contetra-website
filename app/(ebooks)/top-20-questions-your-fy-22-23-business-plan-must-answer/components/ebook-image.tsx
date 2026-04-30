import Image from "next/image";
import React from "react";

export const EbookImage = () => {
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center">
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Top-20-Questions-your-FY-22-23-Business-Plan-must-answer-3.png`}
        alt={`Business Insights into IFRS 16`}
        priority
        width={450}
        height={400}
        className="rounded-xl cursor-pointer w-[350px] md:w-[300px] xl:w-[400px] 2xl:w-[450px]"
        quality={100}
      />
    </div>
  );
};
