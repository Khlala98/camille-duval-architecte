import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    num: "01",
    title: "Rencontre",
    text: "Je me déplace chez vous pour comprendre votre univers, vos envies et vos contraintes. Chaque projet commence par une écoute attentive.",
  },
  {
    num: "02",
    title: "Conception",
    text: "Plans, 3D, moodboards : je donne forme à votre projet avec précision. Chaque détail est pensé pour créer un espace cohérent et harmonieux.",
  },
  {
    num: "03",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center px-8 lg:px-12 ${
                i < steps.length - 1 ? "md:border-r md:border-warmgray/10" : ""
              }`}
            >
              <span className="font-serif text-4xl text-gold/30 block mb-6">
                {step.num}
              </span>
              <h3 className="font-serif text-xl text-dark mb-3">{step.title}</h3>
              <p className="text-warmgray text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
