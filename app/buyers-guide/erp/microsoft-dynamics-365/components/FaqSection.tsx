import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "How do I choose the right Microsoft Dynamics 365 ERP partner?",
    a: "Start by defining your business requirements, product fit, entities, modules, data migration scope, integrations, reporting needs, internal capacity and expected support model. Then evaluate partners based on relevant experience, delivery team, methodology, data approach, testing discipline and post-go-live support.",
  },
  {
    q: "What is the difference between Business Central and Dynamics 365 Finance?",
    a: "Business Central is generally suited to small and mid-sized organizations that need connected finance and operations. Dynamics 365 Finance is designed for more complex financial management, multi-entity structures, higher transaction volumes and enterprise-grade governance.",
  },
  {
    q: "How long does a Microsoft Dynamics 365 implementation take?",
    a: "A focused Business Central project may take 3–6 months. A mid-sized, multi-function implementation may take 6–12 months. Complex multi-entity transformations can take 12–24 months or longer.",
  },
  {
    q: "What should we check in a Microsoft Dynamics 365 implementation proposal?",
    a: "Check whether the proposal clearly covers scope, modules, data migration, integrations, reporting, customization, testing, training, hypercare, exclusions and change-request process.",
  },
  {
    q: "Does Contetra replace the technical Microsoft Dynamics implementation partner?",
    a: "Not necessarily. Contetra can work alongside a technical implementation partner by supporting business requirements, process design, finance-led governance, reporting logic, UAT, stakeholder coordination and post-go-live optimization.",
  },
  {
    q: "How much does a Microsoft Dynamics 365 implementation cost?",
    a: "Cost depends on product (Business Central vs. Dynamics 365 Finance & Supply Chain Management), number of entities, data migration complexity, number of integrations and degree of customization. Licensing is typically priced per user, while implementation services, data migration, integrations and hypercare are quoted separately. Buyers should compare proposals based on what's included, not just the headline number, see the Implementation Cost section above for a full breakdown.",
  },
  {
    q: "Is Dynamics 365 Business Central the same as Dynamics 365 Finance and Supply Chain Management?",
    a: "No. They are two separate ERP products under the same Dynamics 365 brand. Business Central is a single integrated application built for small and mid-sized organizations. Finance and Supply Chain Management is actually two connected applications — Finance, and Supply Chain Management, built for larger, more complex organizations with advanced manufacturing, multi-entity or multi-country requirements. They differ in architecture, licensing and the implementation partners who specialize in each.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion type="multiple" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={String(index)}>
                <AccordionTrigger className="text-left text-base font-semibold text-[#1a1640] dark:text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#25243a] dark:text-[#D1D5DB]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
