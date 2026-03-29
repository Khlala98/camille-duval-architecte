interface TestimonialCardProps {
  clientName: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ clientName, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 lg:p-10 border border-border">
      {/* Decorative quote */}
      <span className="block font-serif text-5xl text-gold/30 leading-none select-none mb-4">
        &ldquo;
      </span>

      {/* Quote */}
      <p className="font-serif text-dark/80 text-base lg:text-lg italic leading-relaxed mb-6">
        {quote}
      </p>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "#C4A265" : "#E8E6E1"}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Client name */}
      <p className="text-sm font-medium text-dark">{clientName}</p>
    </div>
  );
}
