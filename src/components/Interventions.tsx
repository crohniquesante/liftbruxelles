"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { INTERVENTIONS } from "@/lib/content";

export function Interventions() {
  const [current, setCurrent] = useState(0);
  const total = INTERVENTIONS.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  return (
    <section id="interventions" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nos interventions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Déménagements, montées en hauteur et livraisons réalisés dans toute la Région
            bruxelloise — jusqu&apos;au 9e étage.
          </p>
        </div>

        <div
          className="relative mx-auto mt-16 w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-[320px]"
          aria-roledescription="carousel"
          aria-label="Galerie nos interventions"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
            {INTERVENTIONS.map((item, index) => (
              <div
                key={item.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== current}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-contain p-1"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-card transition hover:border-brand-300 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:-translate-x-4"
            aria-label="Photo précédente"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-card transition hover:border-brand-300 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:translate-x-4"
            aria-label="Photo suivante"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="mt-6 text-center text-sm font-medium text-slate-500">
            {current + 1} / {total}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {INTERVENTIONS.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition ${
                  index === current ? "w-8 bg-brand-600" : "w-2.5 bg-slate-300 hover:bg-brand-300"
                }`}
                aria-label={`Afficher la photo ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
