import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  slug: string;
  category: string;
  mainImage: string;
}

export function ProjectCard({ title, slug, category, mainImage }: ProjectCardProps) {
  return (
    <Link href={`/projets/${slug}`} className="group block relative overflow-hidden rounded-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
            {category}
          </span>
          <h3 className="font-serif text-white text-xl lg:text-2xl text-center px-6 leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
