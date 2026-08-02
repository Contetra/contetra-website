
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("multi-entity-groups");

export default function Page() {
  return <IndustryPage slug="multi-entity-groups" />;
}
