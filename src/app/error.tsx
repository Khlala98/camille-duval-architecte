"use client";

import { ErrorFallback } from "@/components/ui/ErrorFallback";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <ErrorFallback onRetry={reset} />
    </main>
  );
}
