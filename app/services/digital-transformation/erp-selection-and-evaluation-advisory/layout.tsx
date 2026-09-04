import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
  description: `Choose the right ERP with Contetra's ERP selection and evaluation services. Compare vendors, define requirements and reduce implementation risk.`,
  alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
  },
  openGraph: {
    title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
    description: `Choose the right ERP with independent selection and evaluation advisory. Compare vendors, define requirements, and reduce implementation risk with a structured evaluation process.`,
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
