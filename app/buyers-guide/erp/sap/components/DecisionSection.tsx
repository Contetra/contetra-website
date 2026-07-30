"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import SectionIntro from "./SectionIntro";

const costItems = [
  ["Licensing", "Software licences or subscriptions, scaled by users and modules."],
  ["Implementation", "Requirements, configuration, migration, testing and go-live."],
  ["Ongoing support", "Hypercare, application management and upgrades."],
  ["Hidden costs", "Customisation, data cleansing and change management."],
];

const products = [
  {
    name: "SAP Business One",
    fit: "Small businesses, single entity, straightforward processes",
    deploy: "On-premise or cloud",
    complexity: "Lowest",
  },
  {
    name: "SAP Business ByDesign",
    fit: "Mid-market, multi-entity and cloud-native from day one",
    deploy: "Cloud only",
    complexity: "Moderate",
  },
  {
    name: "SAP S/4HANA",
    fit: "Mid-market to large enterprise with complex operations",
    deploy: "On-premise, private cloud or public cloud",
    complexity: "Highest",
  },
];

const myths = [
  {
    myth: "ERP systems are always expensive.",
    reality:
      "Cost is largely driven by modules and users. Poorly defined scope and weak vendor negotiation are major reasons businesses overpay.",
  },
  {
    myth: "Implementation always takes forever.",
    reality:
      "Long timelines often come from unclear ownership and an open-ended scope—not from the software alone.",
  },
  {
    myth: "ERP is only for large enterprises.",
    reality:
      "SAP offers products for small and mid-sized businesses, where visibility and faster close can be equally valuable.",
  },
];

export default function DecisionSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section className="py-24 text-[#17143a] dark:bg-[#080b10] md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionIntro
          index="04"
          eyebrow="Cost & Pricing"
          title="SAP ERP Cost & Pricing: What to Budget For"
          description="Industry benchmarks in the guide place lean mid-market implementations around $150,000 and complex multi-entity programmes above $750,000, before licensing."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-reveal>
            <h3 className="mb-5 text-xl font-bold dark:text-white">Cost components</h3>
            <div className="overflow-hidden rounded-2xl border border-[#e0e4e9] dark:border-white/10">
              {costItems.map(([title, text], index) => (
                <div
                  key={title}
                  className={`grid gap-2 bg-white px-6 py-5 dark:bg-[#121720] sm:grid-cols-[150px_1fr] ${
                    index !== costItems.length - 1
                      ? "border-b border-[#e8ebee] dark:border-white/10"
                      : ""
                  }`}
                >
                  <p className="font-bold dark:text-white">{title}</p>
                  <p className="text-sm leading-6 text-[#666a78] dark:text-[#b9c0cd]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl bg-[#edf8f4] p-5 text-sm leading-6 text-[#315d50] dark:bg-[#10221d] dark:text-[#a8d8c7]">
              The biggest lever is precise requirements and an advisor with no
              stake in the licence sale negotiating scope before the contract
              is signed.
            </p>
          </div>

          <div data-reveal>
            <h3 className="mb-5 text-xl font-bold dark:text-white">SAP Business One vs. S/4HANA vs. ByDesign</h3>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="SAP products">
              {products.map((product, index) => (
                <button
                  key={product.name}
                  type="button"
                  role="tab"
                  aria-selected={activeProduct === index}
                  onClick={() => setActiveProduct(index)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    activeProduct === index
                      ? "bg-[#17143a] text-white dark:bg-[#66b99a] dark:text-[#11152d]"
                      : "bg-[#eef0f3] text-[#55596b] hover:bg-[#e2e7e5] dark:bg-[#171c25] dark:text-[#c2c7d0]"
                  }`}
                >
                  {product.name.replace("SAP ", "")}
                </button>
              ))}
            </div>
            <div className="mt-5 min-h-[275px] rounded-2xl bg-[#17143a] p-8 text-white dark:bg-[#121720]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8ed7bc]">
                Product
              </p>
              <h4 className="mt-3 text-3xl font-semibold">{products[activeProduct].name}</h4>
              <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/40">Best for</dt>
                  <dd className="mt-2 leading-7 text-white/80">{products[activeProduct].fit}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/40">Deployment</dt>
                  <dd className="mt-2 text-sm text-white/80">{products[activeProduct].deploy}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/40">Complexity</dt>
                  <dd className="mt-2 text-sm font-bold text-[#8ed7bc]">{products[activeProduct].complexity}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 data-reveal className="text-center text-3xl font-semibold dark:text-white">
            Common SAP ERP Myths, Debunked
          </h3>
          <div data-stagger className="mt-8 grid gap-5 lg:grid-cols-3">
            {myths.map((item) => (
              <article
                key={item.myth}
                className="rounded-2xl border border-[#e0e4e9] bg-white p-7 dark:border-white/10 dark:bg-[#121720]"
              >
                <div className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#b56758]" />
                  <p className="font-bold dark:text-white">{item.myth}</p>
                </div>
                <div className="mt-5 flex gap-3 border-t border-[#eceef1] pt-5 dark:border-white/10">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#347d68] dark:text-[#86d7b8]" />
                  <p className="text-sm leading-6 text-[#606473] dark:text-[#b9c0cd]">
                    {item.reality}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
