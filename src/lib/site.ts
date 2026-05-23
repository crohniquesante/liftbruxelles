export const SITE = {
  name: "Lift & Go Bruxelles",
  legalName: "Lift & Go Bruxelles SPRL",
  tagline: "Location de lift à Bruxelles — rapide, sécurisé, professionnel",
  url: "https://www.liftgobruxelles.be",
  phone: "+32 2 808 45 60",
  phoneDisplay: "02 808 45 60",
  phoneHref: "tel:+3228084560",
  email: "contact@liftgobruxelles.be",
  address: {
    street: "Avenue Louise 149",
    city: "Bruxelles",
    postalCode: "1050",
    country: "BE",
    region: "Bruxelles-Capitale",
  },
  geo: {
    latitude: 50.8263,
    longitude: 4.3594,
  },
  hours: "Lun–Sam 7h00–20h00",
  priceRange: "€€",
  foundingYear: 2012,
  social: {
    facebook: "https://www.facebook.com/liftgobruxelles",
    linkedin: "https://www.linkedin.com/company/liftgobruxelles",
  },
} as const;

export const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#pourquoi-nous", label: "Pourquoi nous" },
  { href: "#zones", label: "Zones" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
