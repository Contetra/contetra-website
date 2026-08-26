import { ReadinessChecklistForm } from "./components/readiness-checklist-form";

export default function ErpReadinessChecklistPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          ERP Readiness Checklist: For Companies Ready to Scale Without Chaos
        </h1>

        <div className="mt-4 flex flex-col gap-4 text-left text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">
            Is your company really ready for an ERP? Let&apos;s find out.
          </h2>
          <p>
            Implementing an ERP is one of the most critical and costly
            decisions a scaling company can make. But timing is everything.
            Too early, and it creates complexity. Too late, and it costs you
            control.
          </p>
          <p>This quick readiness checklist will help you:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Identify signals that your current systems are limiting growth
            </li>
            <li>
              Understand if your team, processes, and tools are ERP-ready
            </li>
            <li>
              Prepare for what investors and internal teams expect as you
              scale
            </li>
          </ul>
          <p>
            Whether you&apos;re just exploring ERP options or stuck
            mid-implementation, this form will help you (and us) assess where
            you stand.
          </p>
          <p>
            It takes less than 3 minutes to complete and will give you a
            clear view of what to focus on next.
          </p>
          <p className="font-semibold text-foreground">
            Let&apos;s get started!
          </p>
        </div>

        <p className="mt-2 text-sm">
          Is your company ready for an ERP? Tick off what applies.
        </p>
      </div>

      <ReadinessChecklistForm />
    </main>
  );
}
