import { Culture } from "./components/Culture";
import { Principles } from "./components/Principles";
import { Team } from "./components/Team";
import { aboutPage } from "./content";
import { ClosingCta } from "@/components/sections/ClosingCta";


export default function AboutPage() {
  return (
    <>
      <Culture />
      <Principles />
      <Team />
      <ClosingCta
        heading={aboutPage.joinCta.heading}
        body={aboutPage.joinCta.body}
        primaryCta={{ label: aboutPage.joinCta.primaryCta, href: aboutPage.hero.careersHref }}
        secondaryCta={null}
      />
    </>
  );
}
