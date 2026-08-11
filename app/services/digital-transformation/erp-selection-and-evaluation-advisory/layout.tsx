import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
  description: `Choose the right ERP with Contetra's ERP selection and evaluation services. Compare vendors, define requirements and reduce implementation risk.`,
  openGraph: {
    title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
    description: `Choose the right ERP with Contetra's ERP selection and evaluation services. Compare vendors, define requirements and reduce implementation risk.`,
  },
};


export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen overflow-x-hidden">
 
      {children}

    </section>
  );
}
