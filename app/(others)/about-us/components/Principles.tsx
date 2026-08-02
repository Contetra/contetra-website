
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutPage } from "../content";

export function Principles() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
            {aboutPage.principlesHeading}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPage.principles.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 3) * 0.08}>
              <Card className="h-full rounded-2xl border border-border/70 shadow-sm">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-green-tint text-brand-green">
                    <item.icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
