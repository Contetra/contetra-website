"use client";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "item-1",
    question: "What do you mean by Struck off company?",
    answer:
      "A Struck off company means the company is no longer operational and it is removed from the list of registered companies.",
  },
  {
    id: "item-2",
    question: "What documents do we need to check out the struck off status of a company?",
    answer:
      "We simply require the company name and PAN/GST number to figure out the struck off status of a company.",
  },
  {
    id: "item-3",
    question: "What are the rules for strike off of a company?",
    answer:
      "Obtain board approval for the strike-off. Submit the necessary forms and fees to the appropriate authority. Notify stakeholders and allow a period for objections. Ensure all debts and liabilities are settled. If no objections are received, the company will not be considered as struck off anymore.",
  },
  {
    id: "item-4",
    question: "What happens after a company strikes off?",
    answer:
      "When the company strikes off, the business gets removed from the registry. This means that the company can no longer operate. Hence, the struck-off company’s assets get transferred to the government. Later, the government uses these assets to pay the debts. ",
  },
  {
    id: "item-5",
    question: "How many days it will take to strike off company?",
    answer:
      "The complete procedure takes 3-4 months or more, as the ROC verifies all the documents. This is done as soon as an application is made to the registrar of companies through files, eforms, MGT-14 and STK-2 with penalty charges.",
  },
  {
    id: "item-6",
    question: "What is the penalty for strike off company?",
    answer:
      "It is mandatory to file INC-20A and AOC-4, as well as MGT-7/7A, before applying to ROC for strike-off. As mentioned earlier, the struck-off company’s assets get transferred to the government, and it may be fined one lakh rupees.",
  },
  {
    id: "item-7",
    question: "Can we activate strike off company?",
    answer:
      "Yes, we can activate the strike off company.",
  },
  {
    id: "item-8",
    question: "What is a company's recovery plan after being struck off?",
    answer:
      "A struck off company can be recovered by administrative restoration. If a firm that has been struck off for a period of time that does not exceed a year may apply under this method by completing the Administrative Restoration form and sending it to Companies House. Court Order Restoration may be used to complete the restoration if the 12-month time has already passed.",
  },
  {
    id: "item-9",
    question: "What is the notice period for strike off?",
    answer:
      "According to the Company Act 2013, the board of directors must pass a resolution striking off the company. The company files STK-2 with the registrar of companies. The registrar publishes a notice in the official gazette and gives a 30-day notice for objections from stakeholders.",
  },
  {
    id: "item-10",
    question: "How is Strike That by Contetra different from other bulk search tools for struck-off companies in India?",
    answer:
      "We can provide you the output report with struck off status for your list of customers and vendors, by accepting only GST or PAN in the input file. We don’t require CIN number details and instead we provide CIN in the output file. We can run struck off companies checks in bulk and provide the most accurate status report in the shortest turnaround time.",
  },
  {
    id: "item-11",
    question: "How can you identify the list of struck off companies for your organization?",
    answer:
      "Only two possible ways to find MCA struck off companies: Do it manually; check every company manually on MCA website for it’s struck-off status. Get it done by a tool like “Strike that” to get the most accurate results in the shortest possible time.",
  },
  {
    id: "item-12",
    question:
      "Does Contetra provide access to the entire list of struck off companies that have been found by the Strike That tool?",
    answer:
      "No. We respect client data confidentiality and do not store shared data or provide direct tool access.",
  },
  {
    id: "item-13",
    question: "Can we check out sample output report for the bulk struck off companies search carried out by Contetra?",
    answer:
      "Yes, you can check the output report sample to understand how you will receive the final file. This sample struck off output report can be seen here – Download Now!",
  },
  {
    id: "item-14",
    question: "Are you also able to find the MSME registration status of companies?",
    answer:
      "No, our tool is currently not able to check / verify the MSME status of companies. We are building the code behind helping to check the MSME status of companies (vendors or customers) and will soon come up with a positive update on this front!",
  },
];

export function StMiddleSectionFive() {
  return (
    <section className="w-full bg-[#F2F3F5] px-4 pt-10 pb-12 sm:px-6 md:px-8 md:pt-12 md:pb-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-6 text-center text-[28px] font-semibold leading-tight text-[#3B7AB6] sm:text-[34px]">
          FAQ
        </h2>

        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="group rounded-[10px] bg-[#0F0D67] px-4 py-5 text-base font-semibold text-white no-underline hover:no-underline [&>svg:last-child]:hidden sm:px-6">
                <span className="flex items-center gap-3">
                  <Plus className="size-5 group-data-[state=open]:hidden" />
                  <Minus className="hidden size-5 group-data-[state=open]:block" />
                  <span>{item.question}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="mt-0 border border-[#D9DDE4] bg-white px-4 py-4 text-[16px] text-[#454F62] sm:px-6">
                {item.id === "item-3" ? (
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Obtain board approval for the strike-off.</li>
                    <li>
                      Submit the necessary forms and fees to the appropriate
                      authority.
                    </li>
                    <li>
                      Notify stakeholders and allow a period for objections.
                    </li>
                    <li>Ensure all debts and liabilities are settled.</li>
                    <li>
                      If no objections are received, the company will not be
                      considered as struck off anymore.
                    </li>
                  </ol>
                ) : item.id === "item-12" ? (
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>
                      We respect the confidentiality of client data shared for
                      struck-off status checks.
                    </li>
                    <li>
                      We do not store client data and we do not provide direct
                      access to the tool.
                    </li>
                    <li>
                      You share an input Excel file with business name and PAN
                      and/or GST details.
                    </li>
                    <li>
                      We process the file, handle exceptions manually, and rerun
                      checks for verification.
                    </li>
                    <li>
                      We deliver a detailed output with registered business
                      names, CIN details, and status (amalgamated, active,
                      struck off, etc.).
                    </li>
                  </ol>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
