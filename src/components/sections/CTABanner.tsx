import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function CTABanner() {
  return (
    <section className="bg-dark py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-section text-cream">
          Vous avez un projet ?
        </h2>
        <p className="mt-6 text-cream/50 text-lg leading-relaxed max-w-xl mx-auto">
          Parlons de votre intérieur. Chaque espace mérite une attention particulière et un design qui vous ressemble.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
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
