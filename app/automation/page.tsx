import type { Metadata } from "next";
import { LandingPage } from "./components/LandingPage";

const description =
  "Claim a free 14-day AI automation POC. Contetra builds and runs AI automations for CRM updates, reconciliations, reports, follow-ups, onboarding, and support workflows.";

export const metadata: Metadata = {
  title: "Automations by Contetra | AI Automations Built and Run for You",
  description,
  openGraph: {
    title: "Automations by Contetra | AI Automations Built and Run for You",
    description,
    type: "website",
  },
};

export default function AutomationLandingPageDemo02() {
  return <LandingPage />;
}
