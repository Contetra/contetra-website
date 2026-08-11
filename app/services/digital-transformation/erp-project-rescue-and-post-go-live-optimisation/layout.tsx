import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
  description: `Recover delayed or underperforming ERP projects with Contetra’s ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes.`,
  openGraph: {
    title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
    description: `Recover delayed or underperforming ERP projects with Contetra’s ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes.`,
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
