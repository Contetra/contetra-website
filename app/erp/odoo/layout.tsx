import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Odoo Implementation Partner & ERP Consulting Services | Contetra`,
  description: `Plan your Odoo ERP implementation with Contetra’s finance-led consulting for better inventory, manufacturing, reporting, controls and ROI.`,
  alternates: {
    canonical: "https://contetra.com/erp/odoo",
  },
  openGraph: {
    title: `Odoo Consulting Services for Growing Businesses | Contetra`,
    description: `Contetra is an Odoo service provider supporting ERP requirements, data migration, implementation, reporting and post-go-live optimization.`,
  },
};

export default function LayoutKyc({
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
