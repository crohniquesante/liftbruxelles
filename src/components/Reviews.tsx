import { REVIEWS } from "@/lib/content";
import { IconStar } from "./icons";

export function Reviews() {
  return (
    <section id="avis" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Avis clients
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-900">4,9/5</span>
            <span className="text-slate-500">(214 avis)</span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">
                    {review.location} — {review.date}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
