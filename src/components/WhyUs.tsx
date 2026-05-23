import Image from "next/image";
import { WHY_US } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="pourquoi-nous" className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Pourquoi nous choisir
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Le partenaire lift Bruxelles de confiance
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Plus de 3 000 déménagements réalisés en Région bruxelloise. Nous combinons
              réactivité, expertise locale et matériel haut de gamme pour un service
              monte-meuble Bruxelles sans compromis.
            </p>

            <div className="mt-12 space-y-8">
              {WHY_US.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop"
              alt="Équipe professionnelle monte-meuble Bruxelles — Lift & Go"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
