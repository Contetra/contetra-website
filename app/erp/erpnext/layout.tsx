import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export const metadata: Metadata = {
  title: "ERPNext Implementation Services | Contetra",
  description:
    "Plan your ERPNext implementation with Contetra\u2019s finance-led ERP consulting for better processes, reporting, controls and business visibility.",
  alternates: {
    canonical: "https://contetra.com/erp/erpnext",
  },
   openGraph: {
    title: `ERPNext Implementation Services for Growing Businesses | Contetra`,
    description: `Work with an ERPNext consultant in India to improve finance, inventory, manufacturing, reporting and business process visibility.`,
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
