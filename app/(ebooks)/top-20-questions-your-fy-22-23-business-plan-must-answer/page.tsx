import { EbookForm } from "./components/ebook-form";
import { EbookImage } from "./components/ebook-image";


export default function Blog() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row mt-[90px] md:mt-[70px]  gap-10 px-[20px] lg:px-0">

      <EbookImage />
      <EbookForm />
   
    </section>
  );
}
