import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#1a1640] py-24 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
          Planning a Microsoft Dynamics 365 Implementation?
        </h2>
        <div className="mb-8 space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
          <p>
            Before comparing commercial proposals, define your process requirements, data risks, integration landscape, internal responsibilities and expected business outcomes.
          </p>
          <p>
            A structured pre-implementation assessment can help you clarify whether Microsoft Dynamics 365 is the right fit, which product and modules are appropriate, what the implementation scope should include, where data or reporting risks exist, and whether the proposal you are reviewing is complete.
          </p>
          <p>Speak to Contetra for a Microsoft Dynamics 365 implementation review or ERP diagnostic consultation.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services/digital-transformation/erp-diagnostic-review-and-health-check"
            className="menularge-cursor inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
          >
            Request an ERP Diagnostic Review
          </Link>
          <Link
            href="/contact-us"
            className="menularge-cursor inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Discuss a Microsoft Dynamics 365 Programme
          </Link>
        </div>
      </div>
    </section>
  );
}
