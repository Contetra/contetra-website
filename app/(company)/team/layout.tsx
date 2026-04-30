export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-[var(--main-padding)] pt-[var(--page-padding)]">

      {children}

    </section>
  );
}
