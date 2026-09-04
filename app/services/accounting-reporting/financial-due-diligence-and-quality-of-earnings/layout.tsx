import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Financial Due Diligence & Quality of Earnings | Contetra`,
  description: `Financial due diligence and quality of earnings services for investors, acquirers and lenders, revenue quality, working capital and cash flow analysis.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
  },
  openGraph: {
    title: `Test Whether the Earnings Are Real | Contetra`,
    description: `Financial due diligence and quality of earnings services that test the sustainability of earnings and cash flow for investors, acquirers and lenders.`,
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
