import { cn } from "@/lib/utils";

export function ProjectPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} — image placeholder`}
      className={cn("flex w-full items-center justify-center bg-cream-darker px-6 py-6 text-center", className)}
      data-project-placeholder
    >
      <div className="flex max-w-sm flex-col gap-3">
        <span className="cs-label text-ink-muted">Image slot</span>
        <span className="text-base font-medium leading-snug text-ink md:text-lg">{label}</span>
      </div>
    </div>
  );
}