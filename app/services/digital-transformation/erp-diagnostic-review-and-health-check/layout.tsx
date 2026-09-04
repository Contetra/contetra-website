import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Diagnostic Review & System Health Check | Contetra`,
  description: `Identify ERP gaps, improve system performance and align business processes with Contetra's ERP diagnostic review and system health check services.`,
  alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-diagnostic-review-and-health-check",
  },
  openGraph: {
    title: `ERP Diagnostic Review & Health Check | Contetra`,
    description: `Independent ERP diagnostic review and root-cause analysis, understand why your ERP is underperforming and get a stabilisation roadmap before you upgrade or replace.`,
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
