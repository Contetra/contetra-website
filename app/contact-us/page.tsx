

import { CuTopSection } from "./components/cu-top-section";
import { CuBottomSection } from "./components/cu-bottom-section";

export default function StrikeThat() {
  return (
    <section className=" flex min-h-screen w-full flex-col gap-10 dark:bg-[#0A0A0A] ">
      <CuTopSection />
      <CuBottomSection />
    </section>
  );
}
