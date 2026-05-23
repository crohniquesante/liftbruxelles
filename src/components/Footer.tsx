import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Spécialiste en location de lift et monte-meuble à Bruxelles depuis{" "}
              {SITE.foundingYear}. Lift déménagement, livraisons et chantiers.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={SITE.phoneHref} className="transition hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs sm:flex-row">
          <p>
            © {year} {SITE.legalName}. Tous droits réservés.
          </p>
          <p>
            lift bruxelles · location lift bruxelles · monte meuble bruxelles · lift
            déménagement bruxelles
          </p>
        </div>
      </div>
    </footer>
  );
}
