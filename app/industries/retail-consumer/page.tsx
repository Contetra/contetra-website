
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("retail-consumer");

export default function Page() {
  return <IndustryPage slug="retail-consumer" />;
}
