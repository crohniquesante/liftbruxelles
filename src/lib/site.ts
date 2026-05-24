export const SITE = {
  name: "Lift & Go Bruxelles",
  legalName: "Lift & Go Bruxelles SPRL",
  tagline: "Location de lift à Bruxelles — rapide, sécurisé, professionnel",
  url: "https://www.liftgobruxelles.be",
  phone: "+32 465 20 86 94",
  phoneDisplay: "0465208694",
  phoneHref: "https://wa.me/32465208694",
  email: "contact@liftgobruxelles.be",
  address: {
    street: "Rue Charles Ramaekers 44",
    city: "Laeken",
    postalCode: "1020",
    country: "BE",
    region: "Bruxelles-Capitale",
  },
  geo: {
    latitude: 50.8778,
    longitude: 4.3541,
  },
  hours: "7j/7 · 7h00–20h00",
  priceRange: "€€",
  foundingYear: 2023,
  heroVideo: "/videos/hero-lift.mp4",
  heroVideoPoster: "/videos/hero-lift-poster.jpg",
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
  { href: "#interventions", label: "Interventions" },
  { href: "#zones", label: "Zones" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
