
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("technology-saas");

export default function Page() {
  return <IndustryPage slug="technology-saas" />;
}
