import { AlertCircle } from "lucide-react";

export default function BusinessOutcomesSection({ challenges }: { challenges: string[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Why Businesses Need the Right ERP Implementation Strategy</h2>
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>Many businesses invest in ERP systems such as Microsoft Dynamics 365, SAP, Odoo, Oracle, ERPNext or other platforms to improve control, automation and visibility. But ERP implementation often fails to deliver value when it is treated only as a technology project.</p>
            <p>The real challenge is not just selecting software. It is designing the right business processes, approval workflows, data structures, reporting formats and user responsibilities before implementation begins.</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <p className="mb-5 text-center text-base font-semibold leading-7 dark:text-white">Without this foundation, businesses may continue facing:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div key={challenge} className="group flex min-h-[104px] items-start gap-4 rounded-[8px] border border-[#e2e8e6] bg-white p-5 shadow-[0_4px_16px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/50 hover:shadow-[0_12px_28px_rgba(26,22,64,0.1)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#eaf6f2] text-[#347d68] transition group-hover:bg-[#50a085] group-hover:text-white dark:bg-[#172036] dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><AlertCircle aria-hidden="true" className="h-4 w-4" /></span>
                <p className="text-sm font-semibold leading-6 text-[#1a1640] dark:text-[#E5E7EB]">{challenge}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">A successful Microsoft Dynamics 365 implementation should help the business gain stronger financial control, cleaner workflows, faster reporting and better decision-making.</p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl border-l-4 border-[#50a085] bg-white p-7 shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:border-[#86efac] dark:bg-[#111827]">
          <h3 className="mb-4 text-2xl font-bold leading-tight dark:text-white">ERP Should Solve Business Problems, Not Just Digitise Them</h3>
          <div className="space-y-4 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>Whether your business is moving from Excel, Tally, legacy ERP, Odoo, SAP, Oracle or another system, the goal should be clear: improve how the business runs.</p>
            <p>Contetra helps businesses define ERP requirements based on operational needs, finance controls, management reporting and ROI expectations. This ensures Microsoft Dynamics 365 is implemented around real business outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
