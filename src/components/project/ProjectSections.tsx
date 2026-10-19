import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectPlaceholder } from "@/components/project/ProjectPlaceholder";
import { projectImage } from "@/data/projectImages";

export type ProjectSectionItem = {
  image?: string;
  label?: string;
  caption?: string;
  ratio?: string;
};

/**
 * Reusable case-study layout patterns:
 * - feature: full-width featured image (campaigns, websites)
 * - split: image beside a short text column
 * - two: two-image comparison / application layout
 * - three: compact grid for related assets
 * - single: alias of feature (legacy)
 */
export type ProjectSection = {
  title: string;
  kicker?: string;
  description?: string;
  footnote?: string;
  group?: "identity" | "applications";
  layout?: "single" | "feature" | "split" | "two" | "three";
  items: ProjectSectionItem[];
};

const ratioClass: Record<string, string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
  square: "aspect-square",
  poster: "aspect-[3/4]",
};

const groupLabel: Record<string, string> = {
  identity: "Identity",
  applications: "Applications & Deliverables",
};

function Figure({ image, label, caption, ratio = "landscape", alt }: ProjectSectionItem & { alt: string }) {
  const imageUrl = image ? projectImage(image) : undefined;
  const frameClassName = ratioClass[ratio] ?? ratioClass.landscape;

  return (
    <figure className="cs-figure">
      {imageUrl ? (
        <div className={frameClassName}>
          <img src={imageUrl} alt={alt} className="h-full w-full object-contain bg-cream-darker" loading="lazy" />
        </div>
      ) : (
        <ProjectPlaceholder label={label ?? alt} className={frameClassName} />
      )}
      {(label || caption) && (
        <figcaption className="cs-caption">
          {label && <span className="cs-label">{label}</span>}
          {caption && <span className="text-sm text-ink-muted">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

function SectionText({ section, index }: { section: ProjectSection; index: number }) {
  return (
    <div>
      <p className="cs-label mb-2">
        {String(index + 1).padStart(2, "0")}
        {section.kicker && <span className="text-ink-muted"> — {section.kicker}</span>}
      </p>
      <h3 className="cs-heading">{section.title}</h3>
      {section.description && <p className="cs-body mt-3">{section.description}</p>}
    </div>
  );
}

export function ProjectSections({ sections, projectTitle }: { sections: ProjectSection[]; projectTitle: string }) {
  return (
    <>
      {sections.map((section, i) => {
        const layout = section.layout === "single" ? "feature" : section.layout ?? "two";
        const showGroup = section.group && section.group !== sections[i - 1]?.group;
        const alt = (item: ProjectSectionItem) => `${projectTitle} — ${item.label ?? section.title}`;
        const reverse = i % 2 === 1;

        return (
          <section key={`${section.title}-${i}`} className="cs-section">
            <div className="cs-container">
              {showGroup && (
                <p className="cs-group">{section.group ? groupLabel[section.group] : ""}</p>
              )}

              {layout === "split" ? (
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10">
                  <ScrollReveal className={`md:col-span-4 ${reverse ? "md:order-2 md:col-start-9" : ""}`}>
                    <SectionText section={section} index={i} />
                  </ScrollReveal>
                  <ScrollReveal className={`md:col-span-8 ${reverse ? "md:order-1" : ""}`} delay={100}>
                    <div className="space-y-6">
                      {section.items.map((item, j) => (
                        <Figure key={`${item.image ?? item.label}-${j}`} {...item} alt={alt(item)} />
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              ) : (
                <>
                  <ScrollReveal>
                    <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-10">
                      <div className="md:col-span-5">
                        <SectionText section={{ ...section, description: undefined }} index={i} />
                      </div>
                      {section.description && (
                        <p className="cs-body md:col-span-6 md:col-start-7 md:pt-6">{section.description}</p>
                      )}
                    </div>
                  </ScrollReveal>
                  <div
                    className={`grid gap-6 md:gap-8 ${
                      layout === "three" ? "grid-cols-1 md:grid-cols-3" : layout === "two" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {section.items.map((item, j) => (
                      <ScrollReveal key={`${item.image ?? item.label}-${j}`} delay={(j % 3) * 100}>
                        <Figure {...item} alt={alt(item)} />
                      </ScrollReveal>
                    ))}
                  </div>
                </>
              )}

              {section.footnote && (
                <p className="mt-6 max-w-2xl font-serif text-lg italic text-ink md:text-xl">{section.footnote}</p>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
