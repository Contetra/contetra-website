import { fractionalCfoServicesPage } from "@/app/services/management-reporting/fractional-cfo-services/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function FractionalCfoServicesPage() {
  return (
    <>
      <Hero
        title={fractionalCfoServicesPage.hero.title}
        paragraphs={fractionalCfoServicesPage.hero.paragraphs}
        positioningLine={fractionalCfoServicesPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={fractionalCfoServicesPage.whatWeHelp} />
      <HowWeWork steps={fractionalCfoServicesPage.howWeWork} />
      <ClosingCta
        heading={fractionalCfoServicesPage.closingCta.heading}
        body={fractionalCfoServicesPage.closingCta.body}
        primaryCta={{ label: fractionalCfoServicesPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: fractionalCfoServicesPage.closingCta.secondaryCta, href: "/proof/case-studies" }}
        form={fractionalCfoServicesPage.closingCta.form}
      />
    </>
  );
}
