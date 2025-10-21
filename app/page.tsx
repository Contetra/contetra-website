import MainImage from "@/public/assets/images/home/Home-page-1st-banner-image.png";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex flex-col px-[80px] pt-[80px]">
      <div className="flex">
        <div className=" w-[50%] flex flex-col gap-6 justify-end">
          <div className=" text-[50px]  flex flex-col">
            <h1 className="text-contetra-blue font-medium -mb-3 text-[50px]">
              Financial Advisory
            </h1>
            <h2 className="text-contetra-green font-medium text-[50px]">
              for the bottom line.
            </h2>
          </div>
          <p className="text-[18px] font-[400] leading-[1.2em]">
            When it comes to business finance,{" "}
            <b>there’s no one-size fits all.</b>
            <br /> Let us help you get the competitive advantage you need –
            whether it’s
            <br />
            creating financial statements that make more sense for a global
            <br />
            world, or finance strategy that drives your business to new heights.
          </p>
        </div>

        <div className="w-[50%] flex justify-center">
          <Image className="w-[50%]" src={MainImage} alt="MainImage" />
        </div>
      </div>
    </section>
  );
}
