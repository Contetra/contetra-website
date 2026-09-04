import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finance & Reporting Automation Services | Contetra`,
  description: `Finance and reporting automation designed around accounting logic and control, close, reconciliation, AP/AR and MIS automation that stays audit-ready.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
  },
  openGraph: {
    title: `Automation Built by People Who Understand the Close | Contetra`,
    description: `Finance and reporting automation designed by people who understand the close — reconciliation, AP/AR and MIS automation that stays audit-ready.`,
  },
};


export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="min-h-screen overflow-x-hidden">
      {/* <JsonLd data={structuredData} /> */}
     
      {children}
 
    </section>
  );
}
