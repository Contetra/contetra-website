import Image from "next/image";
import Link from "next/link";
import React from "react";

export const EbookImage = () => {
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center flex-col gap-10">
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/TURBOCHARGE-YOUR-FINANCE-FUNCTION-THROUGH-OFFSHORE-ACCOUNTING.png`}
        alt={`Business Insights into IFRS 16`}
        priority
        width={450}
        height={400}
        className="rounded-xl cursor-pointer w-[350px] md:w-[300px] xl:w-[400px] 2xl:w-[370px]"
        quality={100}
      />

      <div
        typeof="button"
        className=" lg:w-[70%] bg-contetra-blue p-2 text-white text-center rounded-xl cursor-pointer"
      >
        <Link href={"/offshore-accounting-services"}>
          <p className="leading-[1.2em] text-[14px] lg:text-[16px]">
            If you’re looking for outsourcing of the entire book-keeping and
            payroll services, specific US GAAP/IFRS technical accounting
            advisory, or even audit support - we’re here for you!
          </p>
        </Link>
      </div>
    </div>
  );
};
