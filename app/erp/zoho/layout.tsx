import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export const metadata: Metadata = {
  title: "Zoho ERP Implementation Services | Contetra",
  description:
    "Plan your Zoho ERP implementation with Contetra's finance-led consulting for better finance, inventory, sales, reporting, controls and business visibility.",
  alternates: {
    canonical: "https://contetra.com/zoho-erp-implementation-services",
  },
  openGraph: {
    title: "Zoho ERP Implementation Services | Contetra",
    description:
      "Plan your Zoho ERP implementation with Contetra's finance-led consulting for better finance, inventory, sales, reporting, controls and business visibility.",
  },
};

export default function ZohoImplementationServicesLayout({
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
