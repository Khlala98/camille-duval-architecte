interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, className = "", light = false }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 lg:mb-16 ${className}`}>
      <h2 className={`font-serif text-section ${light ? "text-cream" : "text-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base max-w-2xl mx-auto leading-relaxed ${light ? "text-cream/60" : "text-warmgray"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
