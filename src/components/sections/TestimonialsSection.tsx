import { prisma } from "@/lib/prisma";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export async function TestimonialsSection() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { rating: "desc" },
    take: 3,
  });

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Ce qu'ils en disent"
          subtitle="La satisfaction de mes clients est ma plus belle récompense."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
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
