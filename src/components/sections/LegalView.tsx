import type { LegalDoc } from "@/content/legal";

/** LegalView — renders a Privacy / Terms document in the restaurant's style. */
export function LegalView({ doc }: { doc: LegalDoc }) {
  return (
    <section className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="text-xs uppercase tracking-luxe text-primary">Legal</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">{doc.title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated {doc.updated}</p>
      <p className="mt-6 leading-relaxed text-muted">{doc.intro}</p>

      <div className="mt-12 flex flex-col gap-10">
        {doc.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-2xl">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
