import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center animate-[fadeUp_0.6s_ease-out]">
        <h1 className="font-serif text-[8rem] leading-none text-gold/20 mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl text-dark mb-3">
          Page introuvable
        </h2>
        <p className="text-warmgray text-sm max-w-sm mx-auto mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 bg-gold text-dark hover:bg-gold-dark"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
