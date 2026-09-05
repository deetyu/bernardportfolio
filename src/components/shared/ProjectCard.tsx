import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  className?: string;
  aspectRatio?: "landscape" | "portrait";
}

export function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
  className,
  aspectRatio = "landscape",
}: ProjectCardProps) {
  return (
    <Link
      to={`/work/${slug}`}
      className={cn("project-card block group", className)}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-cream-darker mb-6",
          aspectRatio === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"
        )}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="project-card-image w-full h-full object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium tracking-wide text-primary-foreground flex items-center gap-2">
            View Project <ArrowRight size={16} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div>
        <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:opacity-70 transition-opacity duration-300">
          {title}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
          {category}
        </p>
        {description && (
          <p className="mt-4 text-sm md:text-base text-ink-light leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>

    </Link>
  );
}
