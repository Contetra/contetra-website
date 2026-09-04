import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Operations & Project Workflow Automation | Contetra`,
  description: `Operations and project workflow automation that converts fragmented follow-up into visible, governed workflows across procurement, PMO and tasks.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
  },
  openGraph: {
    title: `Make Fragmented Follow-Up Visible Again | Contetra`,
    description: `Operations and project workflow automation that converts fragmented follow-up into visible, governed workflows across procurement and PMO.`,
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
