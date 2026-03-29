export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-border rounded ${className}`} />;
}

export function SkeletonCard() {
  return <Skeleton className="aspect-[4/3] w-full" />;
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function SkeletonTitle() {
  return <Skeleton className="h-8 w-1/2" />;
}
