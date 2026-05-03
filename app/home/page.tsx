import { LogoCarousel } from "@/components/common/logo-carousel";
import { SectionOne } from "./components/section-one";
import { SectionThree } from "./components/section-three";
import { SectionTwo } from "./components/section-two";

export default function Home() {
  return (
    <section className=" mt-[6rem] lg:mt-[10rem] flex w-full flex-col ">
      <SectionOne />
      <LogoCarousel />
      <SectionTwo />
      <SectionThree />
    </section>
  );
}
