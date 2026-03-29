import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {icon && (
        <div className="text-warmgray mb-4">{icon}</div>
      )}
      <h2 className="font-serif text-xl text-dark mb-2">{title}</h2>
      {description && (
        <p className="text-warmgray text-sm max-w-sm mb-6">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Button href={actionHref} variant="outline">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
