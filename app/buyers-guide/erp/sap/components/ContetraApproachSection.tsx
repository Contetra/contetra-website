import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import SectionIntro from "./SectionIntro";

const ownership = [
  ["Requirements gathering & BRD", "System configuration"],
  ["Vendor selection & cost negotiation", "Technical build"],
  ["Change management & training design", "Data migration execution"],
  ["Entity structure & chart of accounts", "Infrastructure and hosting"],
  ["Post-go-live process optimisation", "Break-fix support"],
];

const proof = [
  {
    company: "Gupshup",
    result:
      "Lower ERP implementation costs and stronger process discipline.",
  },
  {
    company: "IRIS Business Services",
    result:
      "Clearer communication between finance and the technical SAP vendor.",
  },
  {
    company: "Stellar Value Chain",
    result:
      "Faster understanding of business requirements and streamlined accounting processes.",
  },
];

export default function ContetraApproachSection() {
  return (
    <section className="bg-[#edf8f4] py-24 text-[#17143a] dark:bg-[#0f1b18] md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionIntro
          index="05"
          eyebrow="Contetra's ERP practice"
          title="How Contetra Approaches SAP ERP Implementation"
          description="Contetra is a team of ex-Big 4 consultants and finance-transformation veterans who sit on the client's side of the table during an SAP implementation, functioning as something close to a fractional CFO office for the ERP project itself."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div data-reveal className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_55px_rgba(49,93,80,.12)] dark:bg-[#121b1a]">
            <div className="grid grid-cols-2 bg-[#17143a] px-6 py-5 text-xs font-bold uppercase tracking-[0.13em] text-white">
              <p>Contetra owns</p>
              <p className="pl-5 text-white/60">Technical vendor owns</p>
            </div>
            {ownership.map(([contetra, vendor], index) => (
              <div
                key={contetra}
                className={`grid grid-cols-2 px-6 py-5 text-sm leading-6 ${
                  index !== ownership.length - 1
                    ? "border-b border-[#e5ece9] dark:border-white/10"
                    : ""
                }`}
              >
                <p className="flex gap-2 pr-5 font-semibold dark:text-white">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#347d68] dark:text-[#86d7b8]" />
                  {contetra}
                </p>
                <p className="border-l border-[#e5ece9] pl-5 text-[#656a76] dark:border-white/10 dark:text-[#b9c0cd]">
                  {vendor}
                </p>
              </div>
            ))}
          </div>

          <div data-stagger className="grid gap-4">
            {proof.map((item) => (
              <article
                key={item.company}
                className="rounded-2xl border border-[#cfe3db] bg-white/70 p-6 dark:border-white/10 dark:bg-[#141f1d]"
              >
                <h3 className="text-xl font-bold dark:text-white">{item.company}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5e656c] dark:text-[#b9c0cd]">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-14 grid items-center gap-8 rounded-[24px] bg-[#17143a] px-8 py-10 text-white dark:bg-[#080b10] md:grid-cols-[1fr_auto] md:px-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8ed7bc]">
              Choosing the Right SAP ERP Company Comes Down to Fit, Not Rankings
            </p>
            <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
              Ready to find out where your project fits?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
              Book a free ERP review call with Contetra.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#66b99a] px-6 py-3.5 text-sm font-bold text-[#10172a] transition hover:bg-[#83d2b4]"
          >
            Book a free ERP review call
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
