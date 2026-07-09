"use client";

import { useState } from "react";
import { AutomationControlRoom } from "./AutomationControlRoom";
import { CursorEffects } from "./CursorEffects";
import { DareSection } from "./DareSection";
import { FAQAccordion } from "./FAQAccordion";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { HowItWorks } from "./HowItWorks";
import { IntegrationMarquee } from "./IntegrationMarquee";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { MetricsSection } from "./MetricsSection";
import { Navbar } from "./Navbar";
import { UseCaseTabs } from "./UseCaseTabs";
import { WhyTeamsPickUs } from "./WhyTeamsPickUs";

export function LandingPage() {
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = () => setLeadOpen(true);

  return (
    <main data-cursor="hidden" className=" min-h-screen bg-slate-950 font-sans text-white selection:bg-cyan-300 selection:text-slate-950">
      <CursorEffects />
      <Navbar onOpenLead={openLead} />
      <HeroSection onOpenLead={openLead} />
      <DareSection onOpenLead={openLead} />
      <UseCaseTabs onOpenLead={openLead} />
      <HowItWorks />
      <AutomationControlRoom />
      <WhyTeamsPickUs />
      <IntegrationMarquee />
      <MetricsSection />
      <FAQAccordion />
      <FinalCTA onOpenLead={openLead} />
      <Footer />
      <LeadCaptureModal open={leadOpen} onClose={() => setLeadOpen(false)} />
    </main>
  );
}
