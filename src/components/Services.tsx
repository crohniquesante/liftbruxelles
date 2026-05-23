import { SERVICES } from "@/lib/content";
import { ServiceIcon } from "./icons";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nos services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Location lift & monte-meuble à Bruxelles
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Du lift déménagement Bruxelles aux chantiers professionnels — une équipe, un
            interlocuteur, une prestation clé en main.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-card transition hover:border-brand-200 hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
