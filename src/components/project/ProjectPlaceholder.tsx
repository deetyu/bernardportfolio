import { cn } from "@/lib/utils";

export function ProjectPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} — image placeholder`}
      className={cn("flex w-full items-center justify-center bg-cream-darker px-6 text-center", className)}
      data-project-placeholder
    >
      <div className="flex flex-col gap-2">
        <span className="cs-label text-ink-muted">Image placeholder</span>
        <span className="text-sm text-ink-light">{label}</span>
      </div>
    </div>
  );
}