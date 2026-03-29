interface TestimonialCardProps {
  clientName: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ clientName, quote }: TestimonialCardProps) {
  return (
    <div className="relative bg-white p-10 lg:p-12">
      {/* Decorative large quote — gold, absolute */}
      <span
        className="absolute top-0 left-6 font-serif text-[120px] text-gold/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &laquo;
      </span>

      {/* Quote */}
      <p className="font-serif text-dark/80 text-xl lg:text-2xl italic leading-relaxed mb-8 relative">
        {quote}
      </p>

      {/* Client name — gold dash prefix */}
      <p className="text-xs uppercase tracking-[0.2em] text-warmgray">
        <span className="text-gold mr-2">—</span>
        {clientName}
      </p>
    </div>
  );
}
