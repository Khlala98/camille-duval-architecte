import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Rencontre",
    text: "Je me déplace chez vous pour comprendre votre univers, vos envies et vos contraintes. Chaque projet commence par une écoute attentive.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Conception",
    text: "Plans, 3D, moodboards : je donne forme à votre projet avec précision. Chaque détail est pensé pour créer un espace cohérent et harmonieux.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Réalisation",
    text: "Je coordonne les artisans et veille à la qualité d'exécution. Vous n'avez qu'à vous laisser porter jusqu'à la révélation finale.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Mon approche"
          subtitle="Un accompagnement sur mesure, de la première rencontre à la livraison de votre intérieur."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl text-dark mb-3">{step.title}</h3>
              <p className="text-warmgray text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
