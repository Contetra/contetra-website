import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export const metadata: Metadata = {
  title: "ERPNext Implementation Services | Contetra",
  description:
    "Plan your ERPNext implementation with Contetra's finance-led ERP consulting for better processes, reporting, controls and business visibility.",
  alternates: {
    canonical: "https://contetra.com/erpnext-implementation-services",
  },
  openGraph: {
    title: "ERPNext Implementation Services | Contetra",
    description:
      "Plan your ERPNext implementation with Contetra's finance-led ERP consulting for better processes, reporting, controls and business visibility.",
  },
};

export default function ErpNextImplementationServicesLayout({
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
