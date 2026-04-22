import { BlogSectionOne } from "./components/blog-section-one/blog-section-one";
import { BlogSectionTwo } from "./components/blog-section-two/blog-section-two";


export default function Blog() {
  return (
    <section className="w-full flex flex-col gap-20 mt-[100px] md:mt-0 ">
      <BlogSectionOne />
      <BlogSectionTwo />
    </section>
  );
}
