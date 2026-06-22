import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oracle ERP Implementation Services | Contetra",
  description:
    "Plan Oracle ERP implementation with Contetra\u2019s finance-led consulting for better financial control, procurement, reporting, operations and ROI.",
  alternates: {
    canonical: "https://contetra.com/erp/oracle",
  },
  openGraph: {
    title: `Oracle ERP Consultant for Business Transformation`,
    description: `Looking for an Oracle ERP implementation partner? Contetra helps businesses improve finance processes, procurement, reporting, controls and ERP adoption.`,
  },
};

export default function OracleErpImplementationServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
