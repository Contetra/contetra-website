export default function BusinessIntroSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <span className="mb-6 block h-1 w-16 bg-[#50a085] dark:bg-[#86efac]" />
          <p className="text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">Turn SAP S/4HANA into a Business Transformation Engine, Not Just Another ERP Project</p>
        </div>
        <div className="border-l-2 border-[#b9ddd0] dark:border-[#2c5d4c]">
          <p className="group relative border-b border-[#e2e8e6] px-7 py-6 text-base leading-8 text-[#3f4352] transition hover:bg-white hover:pl-9 hover:shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:text-[#D1D5DB] dark:hover:bg-[#111827]">
            <span className="absolute -left-[5px] top-8 h-2 w-2 rounded-full bg-[#50a085] transition group-hover:scale-150 dark:bg-[#86efac]" />
            Many SAP implementations fail not because of technology, but because the ERP is configured around software capabilities rather than business realities.
          </p>
          <p className="group relative border-b border-[#e2e8e6] px-7 py-6 text-base leading-8 text-[#3f4352] transition hover:bg-white hover:pl-9 hover:shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:text-[#D1D5DB] dark:hover:bg-[#111827]">
            <span className="absolute -left-[5px] top-8 h-2 w-2 rounded-full bg-[#50a085] transition group-hover:scale-150 dark:bg-[#86efac]" />
            Organizations invest heavily in SAP S/4HANA expecting better visibility, faster reporting, stronger controls, and scalable processes. Yet many continue struggling with manual workarounds, disconnected systems, poor adoption, delayed reporting, and inadequate business alignment.
          </p>
          <p className="group relative px-7 py-6 text-base leading-8 text-[#3f4352] transition hover:bg-white hover:pl-9 hover:shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:text-[#D1D5DB] dark:hover:bg-[#111827]">
            <span className="absolute -left-[5px] top-8 h-2 w-2 rounded-full bg-[#50a085] transition group-hover:scale-150 dark:bg-[#86efac]" />
            At Contetra, we help organizations bridge the gap between SAP technology and business outcomes. Our role goes beyond implementation&mdash;we ensure SAP S/4HANA aligns with your finance, operations, governance, reporting, and growth objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
