import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Challenges } from "./components/Challenges";
import { Solutions } from "./components/Solutions";
import { CaseStudies } from "./components/CaseStudies";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { erpProcessTransformation } from "./content";

export default function ErpAndProcessTransformationPage() {
  const { trustedByLabel } = erpProcessTransformation;

  return (
    <>
      <Hero />
      <TrustedBy label={trustedByLabel} />
      <Challenges />
      <Solutions />
      <CaseStudies />
      <FaqSection />
      <ContactSection />
    </>
  );
}
