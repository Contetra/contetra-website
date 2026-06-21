import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Implementation Services | Contetra",
  description:
    "Plan your Microsoft Dynamics 365 implementation with Contetra’s finance-led ERP consulting for better reporting, controls, operations and ROI.",
  alternates: {
    canonical: "https://contetra.com/erpnext-implementation-services",
  },
  openGraph: {
    title: "Microsoft Dynamics 365 Implementation Services | Contetra",
    description:
      "Plan your Microsoft Dynamics 365 implementation with Contetra’s finance-led ERP consulting for better reporting, controls, operations and ROI.",
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
