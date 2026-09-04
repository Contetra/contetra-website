import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Implementation PMO & Functional Consulting | Contetra`,
  description: `Independent ERP PMO and functional consulting to govern requirements, testing, cutover and go-live, keeping the business in control of design decisions.`,
   alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
  },
  openGraph: {
    title: `ERP Implementation PMO & Functional Consulting | Contetra`,
    description: `Independent ERP PMO and functional consulting to govern requirements, testing, cutover and go-live, keeping the business in control of design decisions.`,
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
