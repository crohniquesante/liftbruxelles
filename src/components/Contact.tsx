import { SITE } from "@/lib/site";
import { IconPhone } from "./icons";
import { PhoneCTA } from "./PhoneCTA";

export function Contact() {
  return (
    <section id="contact" className="bg-brand-600 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Réponse instantannée
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Besoin d&apos;un lift Bruxelles en urgence ou d&apos;un devis pour votre
            déménagement ? Contactez-nous — réponse rapide garantie.
          </p>

          <div className="mt-10 space-y-6 text-left">
            <a
              href={SITE.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                <IconPhone />
              </span>
              <div>
                <p className="text-sm text-brand-200">WhatsApp — réponse rapide</p>
                <p className="text-2xl font-bold">{SITE.phoneDisplay}</p>
              </div>
            </a>

            <div className="rounded-2xl bg-white/10 p-5 text-sm text-brand-100">
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

          <div className="mt-10 flex justify-center">
            <PhoneCTA
              size="large"
              className="!bg-white !text-brand-700 !shadow-none hover:!bg-brand-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
