
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("manufacturing");

export default function Page() {
  return <IndustryPage slug="manufacturing" />;
}
