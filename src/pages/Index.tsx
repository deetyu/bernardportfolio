import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";
import { projects } from "@/data/projects";
import { projectImage } from "@/data/projectImages";

const marqueeItems = [
  "Brand Identity",
  "Visual Systems",
  "Art Direction",
  "Packaging Design",
];




const featured = [
  { slug: "arya-cosmetics", image: "arya-hero", ratio: "aspect-[4/5]", tags: ["Brand", "Packaging"] },
  { slug: "sturio", image: "sturio-hero", ratio: "aspect-[4/3]", tags: ["Brand", "Visual System"] },
  { slug: "ex-hacienda-de-cedros", image: "hacienda-hero", ratio: "aspect-[4/3]", tags: ["Brand", "Art Direction"] },
  { slug: "selected-marks", image: "marks-hero", ratio: "aspect-[4/5]", tags: ["Logofolio"] },
];


export default function Index() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

  return (
    <Layout>
      {/* Cover */}
      <section className="min-h-dvh flex items-center pt-28 md:pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          <ScrollReveal>
            <div className="flex items-baseline justify-between">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Portfolio
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Vol. 01 — 2026
              </p>
            </div>
          </ScrollReveal>

          <MaskReveal delay={120} className="mt-8 md:mt-12">
            <span className="block font-serif text-[7vw] md:text-[4.6vw] lg:text-[3.8vw] leading-[1.05] tracking-[-0.02em] text-ink">
              Bernardo Orozco
            </span>
          </MaskReveal>

          <h1 className="mt-2 md:mt-3">
            <MaskReveal delay={260}>
              <span className="block font-serif text-[13vw] md:text-[8vw] lg:text-[6.6vw] leading-[0.95] tracking-[-0.04em] text-ink md:whitespace-nowrap">
                Senior Brand &amp; Visual Designer
              </span>
            </MaskReveal>
          </h1>



          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <ScrollReveal delay={180} className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-ink">
                Turning complex concepts into memorable identities through
                eight years of branding and art direction.
              </p>
            </ScrollReveal>
          </div>


          <ScrollReveal delay={400}>
            <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                Explore Work
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="/Bernardo_Orozco_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
              >
                Download CV (PDF)
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Running band */}
      <section className="bg-cream-dark py-6">
        <div className="marquee">
          <div className="marquee-inner">
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee-track" aria-hidden={copy === 1}>
                {marqueeItems.map((item) => (
                  <span key={item} className="flex items-center gap-12">
                    <span className="font-serif italic text-2xl md:text-3xl text-ink">{item}</span>
                    <span className="text-ink-muted text-xs">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Work index — editorial rows */}
      <section id="work" className="section-padding scroll-mt-24">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="eyebrow mb-4">Contents</p>
                <h2 className="text-ink font-serif">Selected Work</h2>
              </div>
              <Link to="/work" className="arrow-link text-ink-muted hover:text-ink">
                Full index
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 md:gap-y-20">
            {featured.map((item, index) => {
              const project = bySlug[item.slug];
              if (!project) return null;

              return (
                <ScrollReveal key={item.slug} delay={index * 60}>
                  <Link to={`/work/${project.slug}`} className="group block">
                    <div className="wipe-media bg-cream-darker aspect-[4/3]">
                      <img
                        src={projectImage(item.image)}
                        alt={`${project.title} — ${project.category}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                      />
                    </div>

                    <div className="draw-rule mt-6 flex items-baseline gap-4">
                      <span className="font-serif text-2xl text-ink drift-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-ink-light leading-relaxed">
                      {project.overview}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="arrow-link mt-6 text-ink">
                      Read case study
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-serif italic text-ink leading-[1.1]">
                Let's build a visual system that lasts.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-ink-light">
                Available for selected freelance and remote opportunities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <Link to="/contact" className="arrow-link mt-8 text-ink">
                Get in touch
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>


    </Layout>
  );
}
