import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Automation Opportunity Assessment & Roadmap | Contetra`,
  description: `A practical automation roadmap based on process evidence, assess, score and prioritise automation opportunities before committing to tools.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
  },
  openGraph: {
    title: `Prioritise Value Before You Choose Any Tool | Contetra`,
    description: `Prioritise value before choosing tools — a practical, evidence-based roadmap that scores and sequences automation opportunities across the business.`,
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
