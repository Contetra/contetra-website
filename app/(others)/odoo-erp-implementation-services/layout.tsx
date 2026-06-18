import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Odoo Implementation Partner & ERP Consulting Services | Contetra`,
  description: `Plan your Odoo ERP implementation with Contetra’s finance-led consulting for better inventory, manufacturing, reporting, controls and ROI.`,
  alternates: {
    canonical: "https://contetra.com/odoo-erp-implementation-services",
  },
  openGraph: {
    title: `Odoo Implementation Partner & ERP Consulting Services | Contetra`,
    description: `Plan your Odoo ERP implementation with Contetra’s finance-led consulting for better inventory, manufacturing, reporting, controls and ROI.`,
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
