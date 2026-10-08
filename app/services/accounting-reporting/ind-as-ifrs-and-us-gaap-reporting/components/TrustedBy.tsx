import { LogoCarousel } from "@/components/common/logo-carousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustedBy({ label }: { label: string }) {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold tracking-[0.12em] uppercase text-muted-foreground">
          {label}
        </p>
      </ScrollReveal>
      <div className="mt-6">
        <LogoCarousel />
      </div>
    </section>
  );
}
