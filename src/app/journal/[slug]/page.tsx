import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { siteConfig } from "@/config/site";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      images: [{ url: post.coverImage }],
      url: `${siteConfig.url}/journal/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${siteConfig.url}/journal` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/journal/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="pt-20">
        {/* Cover image */}
        <div className="relative w-full max-h-[50vh] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1920}
            height={1080}
            className="w-full h-auto max-h-[50vh] object-cover"
            priority
          />
        </div>

        <article className="mx-auto max-w-prose px-6 lg:px-8 py-16 lg:py-24">
          <ScrollReveal>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
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
              <span className="text-xs text-warmgray">
                {post.readingTime} min de lecture
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-hero text-dark mb-8">
              {post.title}
            </h1>
          </ScrollReveal>

          {/* MDX Content */}
          <ScrollReveal>
            <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-dark prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-blockquote:border-gold prose-blockquote:text-warmgray">
              <MDXRemote source={post.content} />
            </div>
          </ScrollReveal>

          {/* Prev / Next */}
          <div className="flex items-center justify-between py-8 border-t border-border mt-16 mb-12">
            {prev ? (
              <Link
                href={`/journal/${prev.slug}`}
                className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline line-clamp-1 max-w-[200px]">{prev.title}</span>
                <span className="sm:hidden">Précédent</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/journal/${next.slug}`}
                className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors"
              >
                <span className="hidden sm:inline line-clamp-1 max-w-[200px]">{next.title}</span>
                <span className="sm:hidden">Suivant</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center bg-white border border-border rounded-lg p-10">
              <h2 className="font-serif text-2xl text-dark mb-3">
                Envie d&apos;aller plus loin ?
              </h2>
              <p className="text-warmgray text-sm mb-6 max-w-md mx-auto">
                Discutons de votre projet. Je vous accompagne de l&apos;idée à la réalisation.
              </p>
              <Button href="/contact">Me contacter</Button>
            </div>
          </ScrollReveal>
        </article>
      </main>
    </>
  );
}
