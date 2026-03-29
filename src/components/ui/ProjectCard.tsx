import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";

interface ProjectCardProps {
  title: string;
  slug: string;
  category: string;
  mainImage: string;
  featured?: boolean;
  aspectClass?: string;
}

export function ProjectCard({ title, slug, category, mainImage, featured, aspectClass }: ProjectCardProps) {
  const aspect = aspectClass ?? (featured ? "aspect-[16/9]" : "aspect-[4/3]");

  return (
    <Link href={`/projets/${slug}`} className="group block relative overflow-hidden cursor-pointer">
      <div className={`${aspect} relative`}>
        <SafeImage
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes={featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        {/* Hover overlay — progressive black fade */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-[600ms] ease-out" />
        {/* Hover content — fade in + slide up */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-[600ms] ease-out">
          <h3 className="font-serif text-white text-xl lg:text-2xl text-center px-6 leading-snug">
            {title}
          </h3>
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mt-3">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
}
