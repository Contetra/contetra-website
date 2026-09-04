import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Enterprise AI Agent Development Services | Contetra`,
  description: `Enterprise AI agent development for governed business workflows, agents designed as controlled digital roles, not general-purpose chat interfaces.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
  },
  openGraph: {
    title: `AI Agents Built as Controlled Digital Roles | Contetra`,
    description: `Enterprise AI agent development for governed business workflows, controlled digital roles with access limits, audit trails and human oversight.`,
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
