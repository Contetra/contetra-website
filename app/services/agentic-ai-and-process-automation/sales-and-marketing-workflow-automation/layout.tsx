import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sales & Marketing Workflow Automation | CRM Automation | Contetra`,
  description: `Sales and marketing workflow automation that improves follow-through and CRM data quality — lead operations, sales execution and revenue reporting.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
  },
  openGraph: {
    title: `Stop Losing Leads in a Messy CRM | Contetra`,
    description: `Sales and marketing automation that improves follow-through and CRM data quality lead operations, sales execution and revenue reporting.`,
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
