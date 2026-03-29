import { SkeletonTitle, SkeletonText, SkeletonCard } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <SkeletonTitle />
          <div className="mt-4 max-w-xl mx-auto">
            <SkeletonText lines={2} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </main>
  );
}
