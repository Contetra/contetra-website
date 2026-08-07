import { Hero } from "@/app/services/agentic-ai-and-process-automation/components/Hero";
import { WhatCanChange } from "@/app/services/agentic-ai-and-process-automation/components/WhatCanChange";
import { FunctionsWeAutomate } from "@/app/services/agentic-ai-and-process-automation/components/FunctionsWeAutomate";
import { DesignPrinciples } from "@/app/services/agentic-ai-and-process-automation/components/DesignPrinciples";
import { ImplementationSteps } from "@/app/services/agentic-ai-and-process-automation/components/ImplementationSteps";
import { TechnologyEnvironment } from "@/app/services/agentic-ai-and-process-automation/components/TechnologyEnvironment";
import { GovernanceControls } from "@/app/services/agentic-ai-and-process-automation/components/GovernanceControls";
import { FaqSection } from "@/app/services/agentic-ai-and-process-automation/components/FaqSection";
import { ExploreSubPages } from "@/app/services/agentic-ai-and-process-automation/components/ExploreSubPages";
import { agenticAiService } from "@/app/services/agentic-ai-and-process-automation/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { LogoCarousel } from "@/components/common/logo-carousel";


export default function AgenticAiAutomationPage() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <WhatCanChange />
      <FunctionsWeAutomate />
      <DesignPrinciples />
      <ImplementationSteps />
      <TechnologyEnvironment />
      <GovernanceControls />
      <FaqSection />
      <ExploreSubPages />
      <ClosingCta
        heading={agenticAiService.closingCta.heading}
        body={agenticAiService.closingCta.body}
        primaryCta={{
          label: agenticAiService.closingCta.primaryCta,
          href: bookingCta.href,
        }}
        secondaryCta={{
          label: agenticAiService.closingCta.secondaryCta,
          href: "/proof/case-studies",
        }}
        form={agenticAiService.closingCta.form}
      />
    </>
  );
}
