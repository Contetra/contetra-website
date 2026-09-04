import { Metadata } from "next";

export const metadata: Metadata = {
  title: `MIS Reporting & Financial Dashboards | Contetra`,
  description: `MIS reporting and financial dashboard services that turn board packs and management reports into decision-ready insight with KPI ownership and clear accountability.`,
   alternates: {
    canonical: "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai",
  },
  openGraph: {
    title: `MIS Reporting & Financial Dashboards | Contetra`,
    description: `MIS reporting and financial dashboards built for management decisions — board packs, profitability and working-capital dashboards with clear KPI ownership.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="min-h-screen overflow-x-hidden">
  
      {children}
 
    </section>
  );
}
