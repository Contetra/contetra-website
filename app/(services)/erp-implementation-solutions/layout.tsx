import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Consulting Services & Implementation Solutions for Businesses`,
  description: `End-to-end ERP consulting and implementation services to streamline operations, improve visibility, and drive data-driven decision-making.`,
  keywords: `ERP implementation services India, ERP consulting services India, ERP implementation for manufacturing companies, ERP system implementation partner India, ERP functional consulting services, Manufacturing ERP consultants India, ERP for service companies India, ERP implementation for SMEs India, ERP digital transformation consulting, ERP process optimization services, Odoo service providers, ERPNext consultant in India, SAP consultants in India, ERP consulting services & solutions, ERP implementation solution in India, ERP consulting services in India, ERP implementation partner in India`,
  alternates: {
    canonical: "https://contetra.com/erp-implementation-solutions",
  },
  openGraph: {
    title: `ERP Implementation Services That Actually Deliver Results`,
    description: `From selection to go-live, implement ERP systems that improve efficiency, reporting, and business performance.`,
  },
};

export default function LayoutServices({
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
