import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export const metadata: Metadata = {
  title: "Oracle ERP Implementation Services | Contetra",
  description:
    "Plan Oracle ERP implementation with Contetra's finance-led consulting for better financial control, procurement, reporting, operations and ROI.",
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
