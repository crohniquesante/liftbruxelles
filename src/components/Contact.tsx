import { SITE } from "@/lib/site";
import { IconPhone } from "./icons";
import { PhoneCTA } from "./PhoneCTA";

export function Contact() {
  return (
    <section id="contact" className="bg-brand-600 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Devis gratuit sous 2 heures
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Besoin d&apos;un lift Bruxelles en urgence ou d&apos;un devis pour votre
              déménagement ? Contactez-nous — réponse rapide garantie.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={SITE.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600">
                  <IconPhone />
                </span>
                <div>
                  <p className="text-sm text-brand-200">WhatsApp — réponse rapide</p>
                  <p className="text-2xl font-bold">{SITE.phoneDisplay}</p>
                </div>
              </a>

              <div className="text-sm text-brand-100">
                <p>
                  <strong className="text-white">Adresse :</strong> {SITE.address.street},{" "}
                  {SITE.address.postalCode} {SITE.address.city}
                </p>
                <p className="mt-2">
                  <strong className="text-white">E-mail :</strong>{" "}
                  <a href={`mailto:${SITE.email}`} className="underline hover:text-white">
                    {SITE.email}
                  </a>
                </p>
                <p className="mt-2">
                  <strong className="text-white">Horaires :</strong> {SITE.hours}
                </p>
              </div>
            </div>

            <div className="mt-10 hidden sm:block">
              <PhoneCTA
                size="large"
                className="!bg-white !text-brand-700 !shadow-none hover:!bg-brand-50"
              />
            </div>
          </div>

          <form
            className="rounded-2xl bg-white p-8 shadow-premium"
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
          >
            <h3 className="text-lg font-bold text-slate-900">Demande de devis en ligne</h3>
            <p className="mt-1 text-sm text-slate-500">
              Remplissez le formulaire — nous vous rappelons rapidement.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-slate-700">
                  Adresse d&apos;intervention
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Rue, commune, étage..."
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Détails (date, objets lourds...)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-600 py-4 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
