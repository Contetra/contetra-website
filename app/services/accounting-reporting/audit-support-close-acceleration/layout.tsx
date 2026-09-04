import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Audit Support & Close Acceleration Services | Contetra`,
  description: `Audit support and close acceleration services that reduce last-minute reporting risk, close governance, PBC coordination and recurring remediation.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
  },
  openGraph: {
    title: `Turn a Chaotic Close Into a Predictable One | Contetra`,
    description: ` Move from reactive audit response to a controlled close and evidence process — close governance, PBC coordination, reconciliation support and recurring remediation.`,
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
