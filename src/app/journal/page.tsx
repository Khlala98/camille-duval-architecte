import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: `Journal | ${siteConfig.name}`,
  description: `Conseils déco, tendances et guides pratiques par ${siteConfig.name}, architecte d'intérieur à ${siteConfig.contact.city}.`,
  openGraph: {
    title: `Journal | ${siteConfig.name}`,
    description: `Conseils déco, tendances et guides pratiques par ${siteConfig.name}.`,
    url: `${siteConfig.url}/journal`,
  },
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-serif text-hero text-dark">Journal</h1>
            <p className="mt-4 text-warmgray max-w-xl mx-auto">
              Conseils, tendances et coulisses de mes projets d&apos;architecture
              intérieure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/journal/${post.slug}`}
                className="group block bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.15em] text-gold font-medium bg-gold/10 rounded-full px-3 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-warmgray">
                      {new Date(post.publishedDate).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-dark mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-warmgray leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-warmgray">
            Aucun article pour le moment.
          </p>
        )}
      </div>
    </main>
  );
}
