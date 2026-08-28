import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { projectImage } from "@/data/projectImages";
import type { ProjectSection } from "@/data/projects";

const ratioClass: Record<string, string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
  square: "aspect-square",
  poster: "aspect-[3/4]",
};

function Figure({
  image,
  label,
  caption,
  ratio = "landscape",
  alt,
}: {
  image: string;
  label?: string;
  caption?: string;
  ratio?: string;
  alt: string;
}) {
  const src = projectImage(image);
  if (!src) return null;

  return (
    <figure className="space-y-3">
      <div className={`overflow-hidden bg-cream-darker ${ratioClass[ratio] ?? ratioClass.landscape}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
      {(label || caption) && (
        <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-divider pt-2">
          {label && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink">{label}</span>
          )}
          {caption && <span className="text-sm text-ink-muted">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function ProjectSections({
  sections,
  projectTitle,
}: {
  sections: ProjectSection[];
  projectTitle: string;
}) {
  return (
    <>
      {sections.map((section, i) => {
        const cols =
          section.layout === "single"
            ? "grid-cols-1"
            : section.layout === "three"
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2";

        return (
          <section
            key={section.title}
            className={`section-padding ${i % 2 === 1 ? "bg-cream-dark" : ""}`}
          >
            <div className="container-editorial">
              {/* Editorial section header */}
              <ScrollReveal>
                <div className="border-t border-ink pt-4 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-1">
                    <span className="font-serif text-2xl text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                      {section.title}
                    </h2>
                    {section.kicker && (
                      <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
                        {section.kicker}
                      </p>
                    )}
                  </div>
                  {section.description && (
                    <div className="md:col-span-5 md:col-start-8">
                      <p className="text-base text-ink-light">{section.description}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              <div className={`grid ${cols} gap-8 md:gap-12`}>
                {section.items.map((item, j) => (
                  <ScrollReveal key={`${item.image}-${j}`} delay={j * 100}>
                    <Figure
                      image={item.image}
                      label={item.label}
                      caption={item.caption}
                      ratio={item.ratio}
                      alt={`${projectTitle} — ${item.label ?? section.title}`}
                    />
                  </ScrollReveal>
                ))}
              </div>

              {section.footnote && (
                <ScrollReveal>
                  <p className="mt-10 md:mt-14 max-w-2xl font-serif italic text-xl md:text-2xl text-ink">
                    {section.footnote}
                  </p>
                </ScrollReveal>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
