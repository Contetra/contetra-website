

import { CuTopSection } from "./components/cu-top-section";
import { CuBottomSection } from "./components/cu-bottom-section";

export default function StrikeThat() {
  return (
    <section className="mt-[60px] flex min-h-screen w-full flex-col gap-10 md:mt-[60px]">
      <CuTopSection />
      <CuBottomSection />
    </section>
  );
}
