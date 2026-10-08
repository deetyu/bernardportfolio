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
  showCaseStudyLink?: boolean;
  imageFit?: "cover" | "contain";
}

export function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
  className,
  aspectRatio = "landscape",
  showCaseStudyLink = false,
  imageFit = "cover",
}: ProjectCardProps) {
  return (
    <Link
      to={`/work/${slug}`}
      className={cn("project-card flex h-full flex-col group focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ink", className)}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-cream-darker mb-8",
          aspectRatio === "landscape" ? "aspect-[3/2]" : "aspect-[4/5]"
        )}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={cn("project-card-image w-full h-full", imageFit === "contain" ? "object-contain" : "object-cover")}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium tracking-wide text-primary-foreground flex items-center gap-2">
            View Project <ArrowRight size={16} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="project-card-title mb-2 font-serif text-2xl leading-7 text-ink group-hover:opacity-70 transition-opacity duration-300">
          {title}
        </h3>
        <p className="project-card-category mb-4 text-[10px] leading-[18px] uppercase tracking-[0.15em] text-ink-light">
          {category}
        </p>
        {description && (
          <p className="project-card-description mb-6 text-base leading-6 text-ink-light">
            {description}
          </p>
        )}
        {showCaseStudyLink && (
          <span className="mt-auto inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-[11px] leading-4 uppercase tracking-[0.2em] text-ink group-hover:border-ink transition-colors duration-300">
            Read case study →
          </span>
        )}
      </div>


    </Link>
  );
}
