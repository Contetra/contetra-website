import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Process Automation Services | 14-Day Working Automation | Contetra`,
  description: `AI-powered process automation for finance, sales, ops and marketing — working automation in 14 days, fully managed, no lock-in.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
  },
  openGraph: {
    title: `Working Automation in 14 Days, Not 14 Months | Contetra`,
    description: `AI-powered business process automation — working automation live in 14 days, fully managed, no lock-in, powered by Phinite.ai`,
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
