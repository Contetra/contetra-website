import { LogoCarousel } from "@/components/common/logo-carousel";
import { SectionOne } from "./components/section-one";
import { SectionTwo } from "./components/section-two";

export default function Home() {
  return (
    <section className="my-[10rem] flex w-full flex-col px-4 sm:px-8 md:px-12 lg:px-[80px]">
      <SectionOne />
      <LogoCarousel />
      <SectionTwo />
    </section>
  );
}
