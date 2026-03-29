interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, className = "", light = false }: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 lg:mb-20 ${className}`}>
      {/* Gold line accent */}
      <div className="flex justify-center mb-6">
        <span className="block w-10 h-[1px] bg-gold" />
      </div>
      <h2 className={`text-sm uppercase tracking-[0.15em] font-light ${light ? "text-cream/60" : "text-warmgray"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 font-serif text-section max-w-2xl mx-auto leading-relaxed ${light ? "text-cream" : "text-dark"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
