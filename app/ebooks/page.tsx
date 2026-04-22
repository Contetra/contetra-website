import { EbooksSectionOne } from "./components/ebooks-section-one";
import { EbooksSectionTwo } from "./components/ebooks-section-two";


export default function Blog() {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[70px]  ">
     <EbooksSectionOne />
     <EbooksSectionTwo />
    </section>
  );
}
