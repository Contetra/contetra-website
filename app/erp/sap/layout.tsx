import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP S/4HANA Implementation Services",
  description:
    "Turn SAP S/4HANA into a Business Transformation Engine, Not Just Another ERP Project",
  alternates: {
    canonical: "https://contetra.com/erp/sap",
  },
  openGraph: {
    title: `SAP ERP Consultant for Business Transformation | Contetra`,
    description: `Plan your SAP ERP implementation with Contetra’s finance-led consulting for better finance processes, reporting visibility and measurable ERP ROI.`,
  },
};

export default function SapLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
