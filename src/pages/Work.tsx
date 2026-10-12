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

const projects = [
  {
    slug: "arya-cosmetics",
    title: "AR•YA",
    category: "Brand Identity · Packaging · Digital",
    description: "Identity and packaging system for a premium skincare brand.",
    image: projectImage("arya-product") ?? aryaHero,
    imageFit: "contain" as const,
  },
  {
    slug: "sturio",
    title: "Sturio",
    category: "Brand Identity · B2B · Digital",
    description: "Modular visual system for a B2B technology consultancy.",
    image: projectImage("sturio-corporate") ?? sturioHero,
    imageFit: "cover" as const,
  },
  {
    slug: "ex-hacienda-de-cedros",
    title: "Ex Hacienda de Cedros",
    category: "Brand Identity · Art Direction · Hospitality",
    description: "Identity for a historic hacienda positioned as a premium event destination.",
    image: projectImage("hacienda-signage") ?? haciendaHero,
    imageFit: "cover" as const,
  },
  {
    slug: "girasolia",
    title: "Girasolía",
    category: "Brand Identity · Social · Campaign",
    description: "A sunflower-led identity extended into social, campaigns and print.",
    image: projectImage("girasolia-identity") ?? flowersPaid,
    imageFit: "contain" as const,
  },
  {
    slug: "flowers-campaign",
    title: "Girasolía — Campaign",
    category: "Campaign · Paid Social · Display",
    description: "Campaign exploration across paid social, email and print.",
    image: projectImage("girasolia-paid") ?? flowersPaid,
    imageFit: "contain" as const,
  },
  {
    slug: "arya-digital",
    title: "AR•YA — Digital",
    category: "Landing Page · E-commerce",
    description: "Conversion-focused landing page built on the brand system.",
    image: projectImage("arya-landing-pdf") ?? aryaLanding,
    imageFit: "contain" as const,
  },
  {
    slug: "sturio-marketing",
    title: "Sturio — Marketing",
    category: "Social · Collateral · Infographics",
    description: "Marketing assets translating technical data into clear visuals.",
    image: projectImage("sturio-infographic-pdf") ?? sturioInfographic,
    imageFit: "contain" as const,
  },
  {
    slug: "consumer-product",
    title: "Consumer Product",
    category: "Packaging · Retail · Production",
    description: "Label system and shelf presence for a small-batch range.",
    image: salsaPackaging,
    imageFit: "contain" as const,
  },
  {
    slug: "craft-studio",
    title: "Amigurumi",
    category: "Branding · Collateral · Social",
    description: "Product sheets, cards and care guides for a handmade-goods brand.",
    image: amigurumiCollateral,
    imageFit: "contain" as const,
  },
  {
    slug: "selected-marks",
    title: "Selected Marks",
    category: "Logofolio · Mark Design · Vector",
    description: "Logo redraws and mark refinements across industries.",
    image: marksHero,
    imageFit: "contain" as const,
  },
];

export default function Work() {
  return (
    <Layout>
      <div className="work-index">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
          <div className="container-editorial">
            <ScrollReveal>
              <p className="eyebrow mb-6">Portfolio</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink max-w-4xl">Selected Work</h1>
            </ScrollReveal>
          </div>
        </section>

        {/* All projects */}
        <section className="pb-20 md:pb-24 px-6 md:px-16 lg:px-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {projects.map((project, index) => (
                <ScrollReveal
                  key={project.slug}
                  delay={(index % 3) * 80}
                  className="h-full min-w-0"
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    aspectRatio="landscape"
                    imageFit={project.imageFit}
                    showCaseStudyLink
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
