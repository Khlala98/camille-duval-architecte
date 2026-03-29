export const siteConfig = {
  // --- Identité ---
  name: "Camille Duval",
  title: "Camille Duval — Architecte d'intérieur à Lyon",
  tagline: "Votre intérieur raconte une histoire. Je la mets en scène.",
  description:
    "Camille Duval, architecte d'intérieur à Lyon. Conception, rénovation et décoration d'espaces résidentiels, commerciaux et hôteliers. Un design sur mesure, élégant et intemporel.",
  url: "https://camille-duval-architecte.fr",

  // --- Coordonnées ---
  contact: {
    email: "camille@duval-architecte.fr",
    phone: "04 78 12 34 56",
    phoneHref: "tel:+33478123456",
    address: "12 rue de la République",
    postalCode: "69002",
    city: "Lyon",
    fullAddress: "12 rue de la République, 69002 Lyon",
  },

  // --- Réseaux sociaux ---
  social: {
    instagram: "https://instagram.com/camilleduval.archi",
    pinterest: "https://pinterest.fr/camilleduvalarchi",
    houzz: "https://houzz.fr/pro/camille-duval-architecte",
  },

  // --- Zones d'intervention ---
  zones: [
    "Lyon",
    "Villeurbanne",
    "Monts d'Or",
    "Croix-Rousse",
    "Presqu'île",
    "Confluence",
    "Tête d'Or",
    "Brotteaux",
    "Part-Dieu",
    "Bellecour",
  ],

  // --- Calendly ---
  calendlyUrl: "https://calendly.com/camille-duval-architecte/consultation",

  // --- Infos légales ---
  legal: {
    siret: "123 456 789 00012",
    companyName: "Camille Duval — Architecte d'intérieur",
    legalForm: "Entreprise individuelle",
  },

  // --- Couleurs du thème ---
  colors: {
    cream: "#FAFAF8",
    dark: "#1A1A1A",
    warmgray: "#6B6B6B",
    gold: "#C4A265",
    goldDark: "#A8893F",
    goldLight: "#D4B87A",
    border: "#E8E6E1",
  },

  // --- Polices ---
  fonts: {
    serif: "Playfair Display",
    sans: "Inter",
  },

  // --- SEO par défaut ---
  seo: {
    defaultTitle: "Camille Duval — Architecte d'intérieur à Lyon",
    titleTemplate: "%s | Camille Duval Architecte",
    defaultDescription:
      "Architecte d'intérieur à Lyon, Camille Duval conçoit des espaces résidentiels et commerciaux élégants et sur mesure. Consultation, rénovation, décoration.",
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Camille Duval — Architecte d'intérieur",
    },
  },

  // --- Navigation ---
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projets" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
