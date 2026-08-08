import { fpaServicesPage } from "@/app/services/management-reporting/fpa-services/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function FpaServicesPage() {
  return (
    <>
      <Hero
        title={fpaServicesPage.hero.title}
        paragraphs={fpaServicesPage.hero.paragraphs}
        positioningLine={fpaServicesPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={fpaServicesPage.whatWeHelp} />
      <HowWeWork steps={fpaServicesPage.howWeWork} />
      <ClosingCta
        heading={fpaServicesPage.closingCta.heading}
        body={fpaServicesPage.closingCta.body}
        primaryCta={{ label: fpaServicesPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: fpaServicesPage.closingCta.secondaryCta, href: bookingCta.href }}
        form={fpaServicesPage.closingCta.form}
      />
    </>
  );
}
