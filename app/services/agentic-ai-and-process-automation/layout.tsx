import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Agentic AI & Process Automation Consulting | Contetra`,
  description: `Agentic AI and workflow automation designed around real business processes, governed, human-in-the-loop automation across finance, sales, ops and reporting.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
  },
  openGraph: {
    title: `Automation Built Around Your Process, Not a Bot Bolted On | Contetra`,
    description: `Agentic AI and workflow automation designed around real business processes human-in-the-loop by design, with approvals, access controls and audit trails built in.`,
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
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
