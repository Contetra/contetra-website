
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustryMetadata } from "@/lib/industries";

export const metadata = getIndustryMetadata("logistics");

export default function Page() {
  return <IndustryPage slug="logistics" />;
}
