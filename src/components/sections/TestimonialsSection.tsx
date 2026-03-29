import { testimonials } from "@/lib/data";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TestimonialsSection() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Ce qu'ils en disent"
          subtitle="La satisfaction de mes clients est ma plus belle récompense."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((t) => (
            <TestimonialCard
              key={t.id}
              clientName={t.clientName}
              quote={t.quote}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
