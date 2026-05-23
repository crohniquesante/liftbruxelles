import { FAQ } from "@/lib/content";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            FAQ — Location lift Bruxelles
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tout savoir sur le lift déménagement, le monte-meuble et nos tarifs à Bruxelles.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="shrink-0 text-brand-600 transition group-open:rotate-180">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-6 pb-5 pt-2">
                <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
