import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.testimonial.deleteMany();
  await prisma.serviceFAQ.deleteMany();
  await prisma.service.deleteMany();
  await prisma.project.deleteMany();
  await prisma.processStep.deleteMany();
  await prisma.contactRequest.deleteMany();
  await prisma.payment.deleteMany();

  // --- PROJECTS ---
  const project1 = await prisma.project.create({
    data: {
      title: "Appartement Haussmannien Presqu'île",
      slug: "appartement-haussmannien-presquile",
      category: "Résidentiel",
      description:
        "Rénovation complète d'un appartement haussmannien de 120m² en plein coeur de la Presqu'île lyonnaise. Moulures restaurées, parquet en point de Hongrie et mobilier contemporain pour un dialogue subtil entre patrimoine et modernité.",
      brief:
        "Le client souhaitait retrouver le charme originel de cet appartement tout en y intégrant un mode de vie contemporain. L'enjeu principal : ouvrir les espaces sans dénaturer le caractère haussmannien.",
      constraints:
        "Bâtiment classé, contraintes structurelles sur les murs porteurs, hauteur sous plafond variable.",
      designChoices:
        "Palette neutre rehaussée de touches dorées, matériaux nobles (marbre, laiton, chêne massif), éclairage architectural sur mesure.",
      surfaceArea: "120m²",
      budgetRange: "45 000 € - 60 000 €",
      duration: "6 mois",
      city: "Lyon",
      mainImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      ]),
      isFeatured: true,
      order: 1,
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: "Loft Confluence",
      slug: "loft-confluence",
      category: "Résidentiel",
      description:
        "Transformation d'un ancien atelier industriel en loft lumineux de 85m² dans le quartier de la Confluence. Volumes généreux, verrière d'atelier et béton ciré pour une atmosphère résolument urbaine.",
      brief:
        "Un jeune couple souhaitait un espace ouvert, brut mais chaleureux, qui conserve l'âme industrielle du lieu tout en offrant le confort d'un intérieur moderne.",
      constraints:
        "Structure métallique existante à conserver, isolation phonique à renforcer, budget maîtrisé.",
      designChoices:
        "Béton ciré au sol, verrière acier noir, bois brut et textiles naturels pour adoucir l'ensemble.",
      surfaceArea: "85m²",
      budgetRange: "30 000 € - 45 000 €",
      duration: "4 mois",
      city: "Lyon",
      mainImage:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      ]),
      isFeatured: false,
      order: 2,
    },
  });

  const project3 = await prisma.project.create({
    data: {
      title: "Maison de Maître Monts d'Or",
      slug: "maison-de-maitre-monts-dor",
      category: "Résidentiel",
      description:
        "Réhabilitation d'une maison de maître de 200m² dans les Monts d'Or. Espaces de réception majestueux, suite parentale sous les combles et jardin d'hiver baigné de lumière.",
      brief:
        "Une famille souhaitait redonner vie à cette demeure de caractère tout en créant des espaces adaptés à leur quotidien avec trois enfants.",
      constraints:
        "Toiture à rénover, mise aux normes électriques complète, respect du style architectural local.",
      designChoices:
        "Tons pierre et lin, boiseries repeintes en teintes sourdes, mobilier chiné mêlé à des pièces design contemporaines.",
      surfaceArea: "200m²",
      budgetRange: "80 000 € - 120 000 €",
      duration: "10 mois",
      city: "Monts d'Or",
      mainImage:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
      ]),
      isFeatured: true,
      order: 3,
    },
  });

  await prisma.project.create({
    data: {
      title: "Boutique-Hôtel Part-Dieu",
      slug: "boutique-hotel-part-dieu",
      category: "Hôtellerie",
      description:
        "Conception de 12 chambres et des espaces communs d'un boutique-hôtel de 450m² près de la gare Part-Dieu. Ambiance feutrée, matériaux premium et identité visuelle forte.",
      brief:
        "L'hôtelier souhaitait créer une expérience immersive dès le hall d'entrée, avec une identité lyonnaise contemporaine qui se distingue des chaînes classiques.",
      constraints:
        "Normes ERP, acoustique renforcée entre chambres, budget serré par chambre.",
      designChoices:
        "Palette sombre et chaleureuse, velours, laiton brossé, éclairage tamisé, oeuvres d'artistes locaux.",
      surfaceArea: "450m²",
      budgetRange: "150 000 € - 200 000 €",
      duration: "8 mois",
      city: "Lyon",
      mainImage:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80",
      ]),
      isFeatured: true,
      order: 4,
    },
  });

  await prisma.project.create({
    data: {
      title: "Cabinet d'Avocats Bellecour",
      slug: "cabinet-avocats-bellecour",
      category: "Commercial",
      description:
        "Aménagement d'un cabinet d'avocats de 180m² place Bellecour. Espaces de travail ouverts, salles de réunion confidentielles et accueil client soigné pour une image professionnelle et chaleureuse.",
      brief:
        "Les associés voulaient rompre avec l'image austère du cabinet traditionnel tout en conservant une atmosphère de sérieux et de confiance.",
      constraints:
        "Confidentialité acoustique impérative, câblage réseau dense, accessibilité PMR.",
      designChoices:
        "Noyer fumé, cuir cognac, verre fumé pour les cloisons, éclairage indirect chaleureux.",
      surfaceArea: "180m²",
      budgetRange: "40 000 € - 55 000 €",
      duration: "3 mois",
      city: "Lyon",
      mainImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
      ]),
      isFeatured: false,
      order: 5,
    },
  });

  const project6 = await prisma.project.create({
    data: {
      title: "Penthouse Tête d'Or",
      slug: "penthouse-tete-dor",
      category: "Résidentiel",
      description:
        "Aménagement d'un penthouse de 160m² avec terrasse panoramique face au parc de la Tête d'Or. Luxe discret, matériaux d'exception et vue à couper le souffle mise en scène par le design.",
      brief:
        "Le propriétaire souhaitait un intérieur digne d'un palace, épuré et intemporel, qui mette en valeur la vue exceptionnelle sur le parc.",
      constraints:
        "Dernier étage avec contraintes de poids, grandes baies vitrées imposant un contrôle thermique précis.",
      designChoices:
        "Marbre Calacatta, chêne blanchi, lin naturel, palette crème et or, mobilier italien sur mesure.",
      surfaceArea: "160m²",
      budgetRange: "90 000 € - 130 000 €",
      duration: "7 mois",
      city: "Lyon",
      mainImage:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      galleryImages: JSON.stringify([
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      ]),
      isFeatured: true,
      order: 6,
    },
  });

  // --- SERVICES ---
  const service1 = await prisma.service.create({
    data: {
      title: "Conseil & Décoration",
      description:
        "Une consultation personnalisée pour repenser votre intérieur. Je vous guide dans le choix des couleurs, matériaux, mobilier et accessoires pour créer un espace qui vous ressemble.",
      includes: JSON.stringify([
        "Visite à domicile (2h)",
        "Planche d'ambiance personnalisée",
        "Liste de shopping commentée",
        "Plan d'implantation du mobilier",
        "Conseils couleurs et matériaux",
      ]),
      targetAudience:
        "Particuliers souhaitant un regard expert pour rafraîchir leur intérieur sans gros travaux.",
      startingPrice: "500 €",
      icon: "Palette",
      order: 1,
    },
  });

  const service2 = await prisma.service.create({
    data: {
      title: "Architecture Intérieure Complète",
      description:
        "De la conception à la réalisation, je prends en charge l'intégralité de votre projet de rénovation ou d'aménagement. Plans, 3D, sélection des artisans et suivi jusqu'à la livraison.",
      includes: JSON.stringify([
        "Relevé de mesures et état des lieux",
        "Plans 2D et visualisations 3D",
        "Dossier technique complet",
        "Sélection et coordination des artisans",
        "Suivi de chantier hebdomadaire",
        "Décoration et mise en scène finale",
      ]),
      targetAudience:
        "Particuliers et professionnels engagés dans une rénovation ou un aménagement complet.",
      startingPrice: "5 000 €",
      icon: "PenTool",
      order: 2,
    },
  });

  const service3 = await prisma.service.create({
    data: {
      title: "Suivi de Chantier",
      description:
        "Vous avez déjà vos plans mais besoin d'un chef d'orchestre ? Je coordonne vos artisans, vérifie la qualité d'exécution et m'assure du respect des délais et du budget.",
      includes: JSON.stringify([
        "Réunions de chantier hebdomadaires",
        "Coordination des corps de métier",
        "Contrôle qualité à chaque étape",
        "Reporting photo et compte-rendu",
        "Gestion des imprévus",
      ]),
      targetAudience:
        "Propriétaires ayant des plans validés mais souhaitant déléguer le suivi opérationnel.",
      startingPrice: "2 000 €",
      icon: "HardHat",
      order: 3,
    },
  });

  const service4 = await prisma.service.create({
    data: {
      title: "Home Staging",
      description:
        "Valorisez votre bien pour une vente rapide et au meilleur prix. Je réorganise, désencombre et met en scène votre intérieur pour séduire les acheteurs dès la première visite.",
      includes: JSON.stringify([
        "Diagnostic et recommandations",
        "Réaménagement du mobilier existant",
        "Ajout d'accessoires et textiles",
        "Séance photo professionnelle",
      ]),
      targetAudience:
        "Propriétaires et agents immobiliers souhaitant accélérer la vente d'un bien.",
      startingPrice: "1 500 €",
      icon: "Home",
      order: 4,
    },
  });

  // --- SERVICE FAQs ---
  await prisma.serviceFAQ.createMany({
    data: [
      {
        question: "Combien de temps dure une consultation ?",
        answer:
          "La visite à domicile dure environ 2 heures. Vous recevez ensuite votre dossier complet sous 10 jours ouvrés.",
        order: 1,
        serviceId: service1.id,
      },
      {
        question: "Puis-je réaliser les achats moi-même ?",
        answer:
          "Absolument ! La liste de shopping est conçue pour être autonome, avec des liens directs et des alternatives à différents budgets.",
        order: 2,
        serviceId: service1.id,
      },
      {
        question: "Quelle est la durée moyenne d'un projet complet ?",
        answer:
          "Comptez entre 3 et 10 mois selon l'ampleur des travaux. Je vous communique un planning détaillé dès la phase de conception.",
        order: 1,
        serviceId: service2.id,
      },
      {
        question: "Travaillez-vous avec vos propres artisans ?",
        answer:
          "Je dispose d'un réseau de confiance d'artisans qualifiés, mais je peux aussi collaborer avec des prestataires de votre choix.",
        order: 2,
        serviceId: service2.id,
      },
      {
        question: "Le mobilier est-il inclus dans le budget annoncé ?",
        answer:
          "Le prix de départ couvre mes honoraires de conception et de suivi. Le budget mobilier et travaux est défini ensemble selon vos moyens.",
        order: 3,
        serviceId: service2.id,
      },
      {
        question: "À quelle fréquence visitez-vous le chantier ?",
        answer:
          "Je me rends sur le chantier au minimum une fois par semaine, davantage lors des phases critiques (gros oeuvre, second oeuvre).",
        order: 1,
        serviceId: service3.id,
      },
      {
        question:
          "Que se passe-t-il en cas de retard ou de malfaçon ?",
        answer:
          "Je gère directement avec les artisans. Mon rôle est de protéger vos intérêts : chaque étape est validée avant de passer à la suivante.",
        order: 2,
        serviceId: service3.id,
      },
      {
        question: "Faut-il vider le logement pour le home staging ?",
        answer:
          "Non, je travaille principalement avec votre mobilier existant. J'apporte quelques accessoires et textiles pour finaliser la mise en scène.",
        order: 1,
        serviceId: service4.id,
      },
      {
        question: "Quel est le retour sur investissement ?",
        answer:
          "En moyenne, un home staging bien réalisé permet de vendre 2 à 3 fois plus vite et peut augmenter le prix de vente de 5 à 15%.",
        order: 2,
        serviceId: service4.id,
      },
      {
        question: "Proposez-vous la location de mobilier ?",
        answer:
          "Oui, je peux organiser la location de meubles et d'objets déco pour les biens vides, incluse dans un forfait sur mesure.",
        order: 3,
        serviceId: service4.id,
      },
    ],
  });

  // --- PROCESS STEPS ---
  await prisma.processStep.createMany({
    data: [
      {
        title: "Premier contact & visite",
        description:
          "Nous échangeons sur votre projet par téléphone, puis je me déplace chez vous pour découvrir les lieux, comprendre vos besoins et prendre les premières mesures.",
        icon: "MessageCircle",
        durationText: "1 à 2 semaines",
        order: 1,
      },
      {
        title: "Étude & proposition",
        description:
          "Je vous présente une proposition détaillée incluant le concept créatif, une estimation budgétaire et un planning prévisionnel.",
        icon: "FileText",
        durationText: "2 à 3 semaines",
        order: 2,
      },
      {
        title: "Conception détaillée",
        description:
          "Plans techniques, visualisations 3D, sélection des matériaux et du mobilier. Chaque détail est pensé et validé avec vous.",
        icon: "Layers",
        durationText: "3 à 6 semaines",
        order: 3,
      },
      {
        title: "Suivi de chantier",
        description:
          "Je coordonne les artisans, contrôle la qualité d'exécution et vous tiens informé à chaque étape grâce à des comptes-rendus réguliers.",
        icon: "HardHat",
        durationText: "Variable selon projet",
        order: 4,
      },
      {
        title: "Livraison & révélation",
        description:
          "Le grand jour ! Installation du mobilier, mise en scène finale et remise des clés de votre nouvel intérieur. Un moment que je prends plaisir à partager avec vous.",
        icon: "Sparkles",
        durationText: "1 semaine",
        order: 5,
      },
    ],
  });

  // --- TESTIMONIALS ---
  await prisma.testimonial.createMany({
    data: [
      {
        clientName: "Marie & Thomas L.",
        quote:
          "Camille a su transformer notre appartement haussmannien en un lieu de vie qui nous ressemble parfaitement. Son sens du détail et sa capacité d'écoute sont exceptionnels. On ne se lasse pas de rentrer chez nous !",
        rating: 5,
        projectId: project1.id,
      },
      {
        clientName: "Famille Durand",
        quote:
          "La rénovation de notre maison dans les Monts d'Or était un projet qui nous faisait peur. Camille a tout orchestré avec une sérénité communicative. Le résultat dépasse nos espérances.",
        rating: 5,
        projectId: project3.id,
      },
      {
        clientName: "Alexandre P.",
        quote:
          "Mon penthouse face à la Tête d'Or est devenu un véritable havre de paix grâce au talent de Camille. Chaque matériau, chaque lumière a été pensé avec une précision remarquable. Un travail d'orfèvre.",
        rating: 5,
        projectId: project6.id,
      },
    ],
  });

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
