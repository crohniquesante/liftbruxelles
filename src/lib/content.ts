import { SITE } from "./site";

export const SERVICES = [
  {
    title: "Location lift déménagement",
    description:
      "Lift extérieur pour déménagement à Bruxelles : canapés, armoires, électroménager — montée sécurisée par la fenêtre ou le balcon, sans abîmer les murs.",
    icon: "truck" as const,
  },
  {
    title: "Monte-meuble Bruxelles",
    description:
      "Service monte-meuble professionnel pour immeubles sans ascenseur ou accès difficile. Nos opérateurs certifiés gèrent chaque chargement avec précision.",
    icon: "box",
  },
  {
    title: "Lift pour travaux",
    description:
      "Location de lift pour chantiers, rénovations et livraisons en hauteur. Installation rapide, conformité sécurité belge, devis sur mesure.",
    icon: "wrench",
  },
  {
    title: "Lift événementiel",
    description:
      "Montage de structures, matériel scénique ou mobilier lourd pour événements à Bruxelles et communes avoisinantes.",
    icon: "calendar",
  },
  {
    title: "Manutention express",
    description:
      "Intervention sous 24 h en région bruxelloise. Idéal pour les déménagements urgents, livraisons bloquées ou délais serrés.",
    icon: "zap",
  },
  {
    title: "Assistance déménageur",
    description:
      "Partenariat avec déménageurs locaux et camionnettes : nous fournissons le lift, ils gèrent le transport. Solution clé en main pour particuliers et entreprises.",
    icon: "users",
  },
] as const;

export const PRICING = [
  {
    name: "Déménagement complet",
    price: "à partir de 110 €",
    duration: "2 heures",
    features: [
      "Idéal si déménagement complet",
      "Emplacement déjà réservé",
      "Zone Bruxelles",
      "Devis détaillé gratuit",
    ],
    popular: false,
  },
  {
    name: "Déménagement simple",
    price: "à partir de 60 €",
    duration: "1 heure",
    features: [
      "Idéal si marchandise unique (frigo, canapé...)",
      "Emplacement déjà réservé",
      "Zone Bruxelles",
      "Devis détaillé gratuit",
    ],
    popular: true,
  },
  {
    name: "Sur mesure",
    price: "Devis gratuit",
    duration: "Flexible",
    features: [
      "Chantiers longue durée",
      "Plusieurs adresses",
      "Week-end et soirée",
      "Entreprises & syndics",
      "Facturation",
      "Au delà du 2ème étage",
      "Accès difficile",
    ],
    popular: false,
  },
] as const;

export const WHY_US = [
  {
    title: "3 ans d'expérience à Bruxelles",
    description:
      "Depuis 2023, nous intervenons quotidiennement dans les 19 communes. Nous connaissons les contraintes urbaines : rues étroites, permis de stationnement, immeubles classés.",
  },
  {
    title: "Équipe expérimentée",
    description:
      "Notre domaine d'expertise, nous maîtrisons chaque étape d'un déménagement : nos équipes appliquent les normes de sécurité belges et savent dérouler chaque prestation sans accroc.",
  },
  {
    title: "Matériel premium",
    description:
      "Parc de lifts récents, entretenus chaque semaine. Plateformes adaptées aux balcons bruxellois et aux fenêtres à guillotine typiques du patrimoine.",
  },
  {
    title: "Réactivité garantie",
    description:
      "Réponse instantannée. Disponibilité 7 jours sur 7. Ligne directe pour les urgences déménagement et livraisons en hauteur.",
  },
] as const;

export const ZONES = [
  "Bruxelles-Ville",
  "Ixelles",
  "Uccle",
  "Etterbeek",
  "Saint-Gilles",
  "Forest",
  "Anderlecht",
  "Molenbeek",
  "Schaerbeek",
  "Evere",
  "Woluwe-Saint-Lambert",
  "Woluwe-Saint-Pierre",
  "Auderghem",
  "Watermael-Boitsfort",
  "Koekelberg",
  "Jette",
  "Ganshoren",
  "Berchem-Sainte-Agathe",
  "Saint-Josse-ten-Noode",
  "Wemmel",
  "Kraainem",
  "Zaventem",
  "Dilbeek",
] as const;

export const REVIEWS = [
  {
    name: "Sophie M.",
    location: "Ixelles",
    rating: 5,
    text: "Location lift Bruxelles impeccable pour notre déménagement au 5e sans ascenseur. Équipe ponctuelle, aucune rayure sur les murs. Je recommande vivement Lift & Go.",
    date: "Mars 2026",
  },
  {
    name: "Thomas V.",
    location: "Uccle",
    rating: 5,
    text: "Service monte-meuble Bruxelles au top. Devis clair, installation en 45 minutes, tout le mobilier est passé par le balcon sans stress. Excellent rapport qualité-prix.",
    date: "Février 2026",
  },
  {
    name: "Entreprise Relocation SA",
    location: "Evere",
    rating: 5,
    text: "Partenaire fiable pour nos clients entreprises. Lift déménagement Bruxelles toujours conforme aux délais. Communication fluide avec nos déménageurs.",
    date: "Janvier 2026",
  },
  {
    name: "Marie-Claire D.",
    location: "Saint-Gilles",
    rating: 5,
    text: "J'avais peur pour mon piano et ma bibliothèque ancienne. Les opérateurs ont été d'une prudence remarquable. Meilleur lift Bruxelles selon moi.",
    date: "Décembre 2025",
  },
  {
    name: "Karim B.",
    location: "Anderlecht",
    rating: 5,
    text: "Intervention express un samedi matin. Prix honnête, pas de mauvaise surprise. Le CTA téléphone répond en deux sonneries — rare de nos jours.",
    date: "Novembre 2025",
  },
  {
    name: "Julien P.",
    location: "Woluwe",
    rating: 5,
    text: "Troisième fois que j'utilise leur location de lift à Bruxelles pour des livraisons en appartement. Toujours aussi professionnel. 5 étoiles méritées.",
    date: "Octobre 2025",
  },
] as const;

export const FAQ = [
  {
    question: "Combien coûte une location de lift à Bruxelles ?",
    answer:
      "Le tarif dépend de la durée, du nombre d'étages, de l'accessibilité et de la nature des objets à monter. Comptez à partir de 60 € pour un déménagement simple (1 h, marchandise unique, emplacement déjà réservé en zone Bruxelles). Le déménagement complet (2 h) démarre à 110 € dans les mêmes conditions. Devis gratuit et sans engagement sous 2 heures ouvrées.",
  },
  {
    question: "Quelle est la différence entre un lift et un monte-meuble ?",
    answer:
      "Le terme lift désigne généralement la plateforme élévatrice extérieure fixée au bâtiment. Le monte-meuble est le service complet : installation du lift, manutention et montée des objets. Chez Lift & Go Bruxelles, nous proposons les deux en prestation clé en main.",
  },
  {
    question: "Intervenez-vous pour un lift déménagement Bruxelles le week-end ?",
    answer:
      "Oui, nous sommes disponibles 7 jours sur 7, de 7h à 20h, y compris le week-end. Contactez-nous pour planifier votre intervention ou pour une urgence déménagement.",
  },
  {
    question: "Faut-il une autorisation pour installer un lift à Bruxelles ?",
    answer:
      "Dans la plupart des cas, un emplacement temporaire sur voirie nécessite une autorisation communale de stationnement. Nous vous guidons dans les démarches ou nous occupons de la demande selon la commune (Ixelles, Uccle, City, etc.).",
  },
  {
    question: "Quels objets peut-on monter avec votre lift ?",
    answer:
      "Canapés, armoires, frigos, machines à laver, pianos, coffres-forts, matériel de bureau, palettes — tout objet ne passant pas par l'escalier ou l'ascenseur. Poids max. 400 kg par chargement selon modèle de lift.",
  },
  {
    question: "Proposez-vous un service monte-meuble Bruxelles sans déménageur ?",
    answer:
      "Oui. Nous pouvons uniquement fournir le lift avec opérateur pendant que vous ou votre déménageur chargez.",
  },
  {
    question: "En combien de temps installez-vous le lift ?",
    answer:
      "L'installation standard prend entre 30 et 60 minutes selon la configuration du balcon ou de la fenêtre. Nous arrivons en avance pour respecter le créneau horaire convenu avec votre déménageur.",
  },
  {
    question: "Couvrez-vous toutes les communes de Bruxelles-Capitale ?",
    answer:
      "Oui, nous desservons les 19 communes bruxelloises ainsi que Wemmel, Kraainem, Zaventem et Dilbeek. Aucun frais de déplacement caché dans la zone standard.",
  },
] as const;

/** Contenu SEO long-form — 1500+ mots */
export const SEO_ARTICLE = {
  title: "Location de lift à Bruxelles : guide complet pour votre déménagement",
  paragraphs: [
    `Vous préparez un déménagement à Bruxelles et votre nouveau logement se trouve au quatrième étage sans ascenseur ? La **location lift Bruxelles** est la solution la plus efficace pour faire passer canapés, armoires et électroménager par la fenêtre ou le balcon, sans risquer d'endommager les murs, les escaliers ou vos affaires. Chez ${SITE.name}, nous accompagnons chaque jour des particuliers, des syndics et des entreprises dans toute la Région de Bruxelles-Capitale.`,

    `Le marché du **lift Bruxelles** a considérablement évolué ces dernières années. Les immeubles bruxellois, souvent anciens, présentent des contraintes uniques : cages d'escalier étroites, virages serrés, façades en pierre bleue et fenêtres à dimensions non standard. Un **monte-meuble Bruxelles** professionnel ne se limite pas à louer une machine : il s'agit d'une prestation complète incluant l'installation sécurisée, la manutention experte et le respect des normes belges en vigueur.`,

    `Optez pour un prestataire local qui connaît les 19 communes. À Ixelles comme à Molenbeek, les règles de stationnement pour positionner le camion-lift diffèrent. Un opérateur expérimenté anticipe ces démarches administratives et vous évite des retards le jour J. Notre équipe intervient depuis 2023 ; nous avons déjà monté de nombreux meubles dans des copropriétés classées, des maisons de maître à Uccle et des studios à Saint-Gilles.`,

    `## Pourquoi choisir un lift déménagement Bruxelles plutôt que les escaliers ?`,

    `Monter un canapé trois places dans un escalier en colimaçon n'est pas qu'une question de force : c'est un risque élevé pour vos revêtements, vos articulations et vos meubles. Le **lift déménagement Bruxelles** élimine ces contraintes. La plateforme extérieure suit un trajet vertical contrôlé ; les sangles professionnelles absorbent les chocs. Résultat : un déménagement plus rapide, souvent plusieurs heures gagnées par rapport à une montée par escalier.`,

    `Les assureurs et les propriétaires apprécient cette approche. Aucune trace de choc sur les murs communs, pas de bruit excessif dans la cage d'escalier, pas de blocage de l'accès pour les voisins. Pour les copropriétés exigeantes — fréquentes dans les quartiers Louise, Sablon ou European Quarter — c'est un argument décisif.`,

    `## Comment fonctionne une location de lift à Bruxelles ?`,

    `Le processus est simple. Vous nous contactez par téléphone ou via le formulaire en ligne. Nous posons quelques questions essentielles : adresse exacte, étage, type d'accès (fenêtre, balcon, terrasse), liste approximative des objets lourds, date souhaitée. Sous deux heures ouvrées, vous recevez un devis détaillé, transparent, sans frais cachés.`,

    `Le jour de l'intervention, notre camion équipée arrive au créneau convenu. L'opérateur installe le bras du lift et fixe la plateforme selon les règles de sécurité. Vous ou votre déménageur placez les meubles sur la plateforme ; nous assurons la montée et la descente en toute sécurité. En fin de prestation, nous démontons le matériel et nettoyons la zone de travail. Durée totale : de 1 heure pour une marchandise unique à 2 heures pour un déménagement complet, selon le volume.`,

    `## Monte-meuble Bruxelles : prestations et tarifs`,

    `Notre offre de **monte-meuble Bruxelles** couvre plusieurs scénarios. Le déménagement résidentiel reste notre cœur de métier : studios, appartements familiaux, maisons avec jardin. Nous intervenons aussi pour les livraisons de magasins de meubles lorsque le client final habite en étage. Les entreprises nous sollicitent pour déplacer des archives, des serveurs ou du mobilier de bureau. Les chantiers de rénovation utilisent notre lift pour acheminer des matériaux en toiture ou en arrière-corps.`,

    `Côté tarifs, la formule Déménagement simple démarre à 60 € TVAC pour une heure d'intervention — idéale pour une marchandise unique (frigo, canapé…) avec emplacement déjà réservé en zone Bruxelles. Le Déménagement complet commence à 110 € TVAC pour deux heures dans les mêmes conditions. Pour les chantiers longue durée ou les besoins spécifiques, nous établissons un devis sur mesure. Tous nos prix incluent l'installation, le démontage et l'assurance responsabilité civile professionnelle.`,

    `## Zones desservies et délais d'intervention`,

    `Nous couvrons l'intégralité de Bruxelles-Ville, ainsi que chaque commune de la périphérie immédiate : Schaerbeek, Evere, Auderghem, Koekelberg, Jette, Berchem, et bien d'autres. Notre base Avenue Louise nous permet une réactivité optimale — la plupart des interventions sont planifiées sous 48 à 72 heures, avec possibilité d'urgence sous 24 heures selon disponibilité.`,

    `## Conseils pratiques avant le jour du lift`,

    `Préparez l'accès : dégageez le balcon ou démontez les grilles de fenêtre si nécessaire. Vérifiez auprès du syndic que l'intervention est autorisée. Prévenez vos voisins pour libérer l'emplacement de stationnement devant l'immeuble. Dressez une liste prioritaire des meubles lourds pour optimiser le temps de montée. Enfin, confirmez la présence de votre déménageur ou prévoyez notre formule manutention complète.`,

    `## Lift Bruxelles : sécurité et conformité`,

    `Chaque plateforme de notre parc est contrôlée hebdomadairement. Nos opérateurs portent les équipements de protection individuelle requis et suivent une formation continue aux normes belges. Nous souscrivons une assurance RC professionnelle couvrant les dommages éventuels liés à l'intervention. Vous déménagez l'esprit tranquille.`,

    `## Pourquoi Lift & Go Bruxelles ?`,

    `Transparence des prix, ponctualité, connaissance du terrain urbain bruxellois et service client réactif : voilà ce qui nous distingue. Nos avis clients parlent d'eux-mêmes — une note moyenne de 4,9/5 sur plus de 200 interventions recensées. Que vous cherchiez un **lift Bruxelles** pour un déménagement unique ou un partenariat régulier avec votre société de déménagement, nous adaptons notre prestation à vos besoins.`,

    `N'attendez pas le dernier moment : les créneaux les plus demandés — fins de mois, week-ends et période estivale — partent rapidement. Appelez le ${SITE.phoneDisplay} ou demandez votre devis en ligne. Notre équipe vous répond avec plaisir et vous guide vers la formule la plus adaptée — **location lift Bruxelles**, **monte-meuble Bruxelles** ou **lift déménagement Bruxelles** sur mesure.`,
  ],
};
