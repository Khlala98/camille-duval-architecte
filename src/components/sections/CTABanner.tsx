import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function CTABanner() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-section text-cream">
          Vous avez un projet ?
        </h2>
        <p className="mt-4 text-cream/60 text-base leading-relaxed max-w-xl mx-auto">
          Parlons de votre intérieur. Chaque espace mérite une attention particulière et un design qui vous ressemble.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact">
            Me contacter
          </Button>
          <Button href={siteConfig.calendlyUrl} variant="outline" external>
            Réserver un créneau
          </Button>
        </div>
      </div>
    </section>
  );
}
