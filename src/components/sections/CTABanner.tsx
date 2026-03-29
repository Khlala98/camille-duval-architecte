import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTABanner() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
          Vous avez un projet ?
        </h2>
        <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
          Parlons de votre intérieur. Chaque espace mérite une attention particulière et un design qui vous ressemble.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gold text-dark rounded-full px-8 py-3 text-sm font-medium tracking-wide hover:bg-gold-dark transition-colors duration-500"
          >
            Me contacter
          </Link>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white text-white rounded-full px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-dark transition-all duration-500"
          >
            Réserver un créneau
          </a>
        </div>
      </div>
    </section>
  );
}
