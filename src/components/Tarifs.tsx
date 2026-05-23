import { PRICING } from "@/lib/content";
import { IconCheck } from "./icons";
import { PhoneCTA } from "./PhoneCTA";

export function Tarifs() {
  return (
    <section id="tarifs" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Tarifs transparents
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Prix location lift Bruxelles
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tarifs clairs, tout compris. Aucun frais caché. Devis personnalisé gratuit pour
            chaque projet.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-brand-600 bg-brand-600 text-white shadow-premium"
                  : "border-slate-200 bg-white shadow-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-950">
                  Le plus demandé
                </span>
              )}
              <h3
                className={`text-lg font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-3xl font-extrabold ${plan.popular ? "text-white" : "text-brand-600"}`}
              >
                {plan.price}
              </p>
              <p
                className={`mt-1 text-sm ${plan.popular ? "text-brand-100" : "text-slate-500"}`}
              >
                {plan.duration}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <IconCheck className={plan.popular ? "text-white" : "text-brand-600"} />
                    <span className={plan.popular ? "text-brand-50" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          * Prix indicatifs TVAC. Le tarif final dépend du nombre d&apos;étages, de
          l&apos;accessibilité et de la durée réelle.
        </p>

        <div className="mt-12 flex justify-center">
          <PhoneCTA size="large" />
        </div>
      </div>
    </section>
  );
}
