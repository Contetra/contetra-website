
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("professional-services");

export default function Page() {
  return <IndustryPage slug="professional-services" />;
}
