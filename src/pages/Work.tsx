import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";

import flowersPaid from "@/assets/projects/flowers-paid.jpg";
import aryaLanding from "@/assets/projects/arya-landing.jpg";
import sturioInfographic from "@/assets/projects/sturio-infographic.jpg";
import salsaPackaging from "@/assets/projects/salsa-packaging.jpg";
import amigurumiCollateral from "@/assets/projects/amigurumi-collateral.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";
import { projectImage } from "@/data/projectImages";

const featuredWork = [
  {
    slug: "arya-cosmetics",
    title: "AR•YA",
    category: "Brand Identity · Packaging · Digital",
    description: "Identity and packaging system for a premium skincare brand.",
    image: aryaHero,
  },
  {
    slug: "sturio",
    title: "Sturio",
    category: "Brand Identity · B2B · Digital",
    description: "Modular visual system for a B2B technology consultancy.",
    image: sturioHero,
  },
  {
    slug: "ex-hacienda-de-cedros",
    title: "Ex Hacienda de Cedros",
    category: "Brand Identity · Art Direction · Hospitality",
    description: "Identity for a historic hacienda positioned as a premium event destination.",
    image: haciendaHero,
  },
  {
    slug: "girasolia",
    title: "Girasolía",
    category: "Brand Identity · Social · Campaign",
    description: "A sunflower-led identity extended into social, campaigns and print.",
    image: projectImage("girasolia-identity") ?? flowersPaid,
  },
];

const selectedWork = [
  {
    slug: "flowers-campaign",
    title: "Girasolía — Campaign",
    category: "Campaign · Paid Social · Display",
    description: "Campaign exploration across paid social, email and print.",
    image: flowersPaid,
  },
  {
    slug: "arya-digital",
    title: "AR•YA — Digital",
    category: "Landing Page · E-commerce",
    description: "Conversion-focused landing page built on the brand system.",
    image: aryaLanding,
  },
  {
    slug: "sturio-marketing",
    title: "Sturio — Marketing",
    category: "Social · Collateral · Infographics",
    description: "Marketing assets translating technical data into clear visuals.",
    image: sturioInfographic,
  },
  {
    slug: "consumer-product",
    title: "Consumer Product",
    category: "Packaging · Retail · Production",
    description: "Label system and shelf presence for a small-batch range.",
    image: salsaPackaging,
  },
  {
    slug: "craft-studio",
    title: "Amigurumi",
    category: "Branding · Collateral · Social",
    description: "Product sheets, cards and care guides for a handmade-goods brand.",
    image: amigurumiCollateral,
  },
  {
    slug: "selected-marks",
    title: "Selected Marks",
    category: "Logofolio · Mark Design · Vector",
    description: "Logo redraws and mark refinements across industries.",
    image: marksHero,
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

      {/* Featured Work */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-10 md:mb-14">Featured Work</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 lg:gap-x-12">
            {featuredWork.map((project, index) => (
              <ScrollReveal key={project.slug} delay={(index % 3) * 80}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  aspectRatio="landscape"
                  showCaseStudyLink
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-10 md:mb-14">Selected Work</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 lg:gap-x-12">
            {selectedWork.map((item, index) => (
              <ScrollReveal key={item.slug} delay={(index % 3) * 80}>
                <ProjectCard
                  slug={item.slug}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  aspectRatio="landscape"
                  showCaseStudyLink
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
