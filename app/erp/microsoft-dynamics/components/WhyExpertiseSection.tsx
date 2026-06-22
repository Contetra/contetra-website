import { CheckCircle2 } from "lucide-react";

type WhyItem = { title: string; desc: string };

export default function WhyExpertiseSection({ whyItems }: { whyItems: WhyItem[] }) {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="mb-6 text-3xl font-semibold leading-tight md:text-[2.6rem]">Why Choose Contetra for Microsoft Dynamics 365 Implementation?</h3>
          <div className="space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
            <p>Contetra&apos;s positioning is simple:</p>
            <p className="text-lg font-semibold text-white">We speak the language of your balance sheet, not just your tech stack.</p>
            <p>Businesses choose Contetra because we bring a finance-first and process-led view to ERP implementation. This helps reduce expensive customisation, unclear requirements, reporting failures and post-go-live confusion.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-white/10 bg-white/5 dark:border-[#1F2937] dark:bg-[#111827]">
          <div className="grid bg-[#50a085]/25 px-6 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
            <div>Why Contetra</div>
            <div className="hidden sm:block">Business Benefit</div>
          </div>
          {whyItems.map((item, index) => (
            <div key={item.title} className={`group relative grid gap-3 px-6 py-5 transition hover:bg-[#50a085]/10 sm:grid-cols-2 ${index < whyItems.length - 1 ? "border-b border-white/10 dark:border-[#1F2937]" : ""}`}>
              <span className="absolute inset-y-0 left-0 w-1 bg-transparent transition group-hover:bg-[#50a085] dark:group-hover:bg-[#86efac]" />
              <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-white"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#77bcab] dark:text-[#86efac]" />{item.title}</div>
              <div className="text-sm leading-6 text-white/70 dark:text-[#D1D5DB]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
