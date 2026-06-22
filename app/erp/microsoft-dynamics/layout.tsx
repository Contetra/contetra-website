import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Implementation Services | Contetra",
  description:
    "Plan your Microsoft Dynamics 365 implementation with Contetra\u2019s finance-led ERP consulting for better reporting, controls, operations and ROI.",
  alternates: {
    canonical: "https://contetra.com/erp/microsoft-dynamics",
  },
  openGraph: {
    title: `Microsoft Dynamics 365 ERP Consulting Services | Contetra`,
    description: `Work with a Microsoft Dynamics 365 consultant to improve finance, operations, supply chain, reporting visibility and ERP adoption.`,
  },
};

export default function MicrosoftDynamicsLayout({
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
