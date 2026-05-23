import { ZONES } from "@/lib/content";

export function Zones() {
  return (
    <section id="zones" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Zones desservies
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lift Bruxelles & communes avoisinantes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Intervention rapide dans toute la Région de Bruxelles-Capitale et la périphérie
            proche. Pas de supplément zone standard.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {ZONES.map((zone) => (
            <li
              key={zone}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
            >
              {zone}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          Que vous habitiez Ixelles, Uccle, Schaerbeek ou Anderlecht, notre équipe de{" "}
          <strong>location lift Bruxelles</strong> intervient avec le même niveau de service.
          Nous connaissons les particularités de chaque commune : stationnement, autorisations
          et types d&apos;immeubles.
        </p>
      </div>
    </section>
  );
}
