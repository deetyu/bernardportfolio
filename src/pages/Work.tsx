import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";

import additional1 from "@/assets/projects/flowers-paid.jpg";
import additional2 from "@/assets/projects/flowers-email.jpg";
import additional3 from "@/assets/projects/salsa-packaging.jpg";
import additional4 from "@/assets/projects/amigurumi-collateral.jpg";
import additional5 from "@/assets/projects/sturio-infographic.jpg";
import additional6 from "@/assets/projects/arya-landing.jpg";

const projectImages: Record<string, string> = {
  "arya-cosmetics": aryaHero,
  "sturio": sturioHero,
  "ex-hacienda-de-cedros": haciendaHero,
  "selected-marks": marksHero,
};

const shortDescriptions: Record<string, string> = {
  "arya-cosmetics": "Brand identity and packaging system for a premium skincare brand.",
  "sturio": "Modular visual system for a B2B technology consultancy.",
  "ex-hacienda-de-cedros":
    "Visual identity for a historic hacienda positioned as a premium event destination.",
  "selected-marks": "A collection of logo redraws and mark refinements across industries.",
};

const additionalWork = [
  {
    title: "Floral Retail Campaign",
    category: "Marketing Design",
    description: "Paid social and display campaign built on a single seasonal art direction.",
    image: additional1,
  },
  {
    title: "Email Design System",
    category: "Digital Design",
    description: "Modular email templates for promotional and lifecycle sends.",
    image: additional2,
  },
  {
    title: "Artisan Salsa Line",
    category: "Packaging",
    description: "Label system and shelf presence for a small-batch salsa range.",
    image: additional3,
  },
  {
    title: "Craft Studio Collateral",
    category: "Branding",
    description: "Print collateral and social assets for an independent craft studio.",
    image: additional4,
  },
  {
    title: "Data Infographics",
    category: "Illustration",
    description: "Infographic set translating technical data into clear visual stories.",
    image: additional5,
  },
  {
    title: "Skincare Landing Page",
    category: "Digital Design",
    description: "Conversion-focused landing page extending an existing brand system.",
    image: additional6,
  },
];

export default function Work() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl">Selected Work</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-10 md:mb-14">Case Studies</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 lg:gap-x-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={(index % 3) * 80}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  description={shortDescriptions[project.slug] ?? project.overview}
                  image={projectImages[project.slug]}
                  aspectRatio="landscape"
                  showCaseStudyLink
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Work */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-10 md:mb-14">Additional Work</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 lg:gap-x-12">
            {additionalWork.map((item, index) => (
              <ScrollReveal key={item.title} delay={(index % 3) * 80}>
                <article>
                  <div className="relative overflow-hidden bg-cream-darker mb-6 aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
                    {item.category}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-ink-light leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
