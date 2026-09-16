export default function ProductFamilySection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl">
        <h2 className="mb-5 text-2xl font-bold leading-tight dark:text-white">
          Understanding the Microsoft Dynamics 365 Product Family
        </h2>
        <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Before going further, it&apos;s worth being precise about what &quot;Microsoft Dynamics 365&quot; actually is, because the name is often used as if it describes a single product. It doesn&apos;t.
          </p>
          <p>
            Microsoft Dynamics 365 is an umbrella brand covering multiple business applications. For ERP specifically, there are two distinct products under that brand, and they are built for different businesses:
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          <li className="rounded-[8px] border-l-2 border-[#50a085] bg-white px-5 py-4 text-sm leading-6 text-[#25243a] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
            <span className="font-semibold text-[#1a1640] dark:text-white">Dynamics 365 Business Central</span>, a cloud-based ERP for small and mid-sized organizations, covering finance, purchasing, sales, inventory and light manufacturing in a single, relatively fast-to-deploy application.
          </li>
          <li className="rounded-[8px] border-l-2 border-[#50a085] bg-white px-5 py-4 text-sm leading-6 text-[#25243a] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
            <span className="font-semibold text-[#1a1640] dark:text-white">Dynamics 365 Finance and Supply Chain Management (F&amp;O)</span>, a separate, more powerful enterprise application, actually made up of two connected modules (Finance, and Supply Chain Management), built for larger, more operationally complex organizations with multi-entity, multi-country, or advanced manufacturing and supply chain requirements.
          </li>
        </ul>

        <div className="mt-8 space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            These are not two editions of the same software. They are built on different architectures, sold on different licensing models, and implemented by partners who often specialize in one or the other rather than both equally.
          </p>
          <p>
            Every recommendation, cost figure and case study in this guide will specify which of the two products it refers to, because &quot;Dynamics 365 ERP&quot; alone is not specific enough to make a sourcing decision on.
          </p>
        </div>

        <h2 className="mt-14 mb-5 text-2xl font-bold leading-tight dark:text-white">
          How This Guide Was Put Together
        </h2>
        <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Contetra publishes and maintains this guide, and we&apos;re saying so plainly instead of burying it in a footer. We don&apos;t rank competitors by name here, instead we&apos;ve built a category framework and an evaluation checklist you can run against any Dynamics 365 partner you&apos;re considering, Contetra included.
          </p>
          <p>This guide is reviewed on a quarterly cycle. It was last substantively refreshed in Aug 2026.</p>
        </div>
       </div>
      </div>
    </section>
  );
}
