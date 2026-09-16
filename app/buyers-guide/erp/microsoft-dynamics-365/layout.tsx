import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export const metadata: Metadata = {
  title:
    "Microsoft Dynamics 365 ERP Partners: How to Choose the Right Implementation Partner in 2026",
  description:
    "Evaluate Microsoft Dynamics 365 ERP partners, compare Business Central and Finance & Supply Chain Management, understand costs, timelines and how to choose the right implementation team.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365",
  },
  openGraph: {
    title: "Microsoft Dynamics 365 ERP Partners: A Buyer's Guide",
    description:
      "Evaluate Microsoft Dynamics 365 ERP partners, compare Business Central and Finance & Supply Chain Management, understand costs, timelines and how to choose the right implementation team.",
  },
};

export default function MicrosoftDynamics365ErpPartnersLayout({
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
