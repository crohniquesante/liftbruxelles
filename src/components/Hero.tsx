import { SITE } from "@/lib/site";
import { HeroVideo } from "./HeroVideo";
import { PhoneCTA } from "./PhoneCTA";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="animate-fade-in">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-800">
            N°1 location lift Bruxelles
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Location de lift à{" "}
            <span className="text-brand-600">Bruxelles</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            <strong>Lift déménagement Bruxelles</strong>, monte-meuble professionnel et
            intervention rapide dans les 19 communes. Devis gratuit et réponse instantanée — opérateurs
            expérimentés, matériel premium, déménagement serein.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PhoneCTA size="large" />
            <a
              href={SITE.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              Devis gratuit en ligne
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Disponible 7j/7
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              4,9/5 — 214 avis
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Depuis {SITE.foundingYear}
            </li>
          </ul>
        </div>

        <div className="relative animate-fade-in lg:delay-150">
          <HeroVideo />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-card sm:-right-8">
            <p className="text-sm font-medium text-slate-600">jusqu&apos;au</p>
            <p className="text-3xl font-bold text-brand-600">9e étage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
