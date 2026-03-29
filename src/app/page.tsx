import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LocalBusinessJsonLd } from "@/components/layout/JsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <main>
        <HeroSection />

        <ScrollReveal>
          <FeaturedProjects />
        </ScrollReveal>

        <ScrollReveal>
          <ApproachSection />
        </ScrollReveal>

        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>

        <CTABanner />
      </main>
    </>
  );
}
