import { ScrollReveal } from "./ScrollReveal";


interface EditorialStatementProps {
  heading: string;
  paragraphs: string[];
}

export function EditorialStatement({ heading, paragraphs }: EditorialStatementProps) {
  return (
    <ScrollReveal>
      <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
        {heading}
      </h2>
      <div className="mx-auto mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </ScrollReveal>
  );
}
