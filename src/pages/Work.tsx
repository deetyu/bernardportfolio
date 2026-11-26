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
    category: "Identidad de marca · Embalaje · Digital",
    description: "Identidad y sistema de embalaje para una marca premium de skincare.",
    image: projectImage("arya-product") ?? aryaHero,
    imageFit: "contain" as const,
  },
  {
    slug: "sturio",
    title: "Sturio",
    category: "Identidad de marca · B2B · Digital",
    description: "Sistema visual modular para una consultora tecnológica B2B.",
    image: projectImage("sturio-corporate") ?? sturioHero,
    imageFit: "cover" as const,
  },
  {
    slug: "ex-hacienda-de-cedros",
    title: "Ex Hacienda de Cedros",
    category: "Identidad de marca · Dirección de arte · Hospitalidad",
    description: "Identidad para una hacienda histórica posicionada como destino premium de eventos.",
    image: projectImage("hacienda-signage") ?? haciendaHero,
    imageFit: "cover" as const,
  },
  {
    slug: "girasolia",
    title: "Girasolía",
    category: "Identidad de marca · Social · Campaña",
    description: "Una identidad del girasol extendida a social, campañas e impresos.",
    image: projectImage("girasolia-identity") ?? flowersPaid,
    imageFit: "contain" as const,
  },
  {
    slug: "flowers-campaign",
    title: "Girasolía — Campaña",
    category: "Campaña · Social · Display",
    description: "Exploración de campaña en social, email e impresos.",
    image: projectImage("girasolia-paid") ?? flowersPaid,
    imageFit: "contain" as const,
  },
  {
    slug: "arya-digital",
    title: "AR•YA — Digital",
    category: "Landing page · E-commerce",
    description: "Landing page enfocada en conversión construida sobre el sistema de marca.",
    image: projectImage("arya-landing-pdf") ?? aryaLanding,
    imageFit: "contain" as const,
  },
  {
    slug: "sturio-marketing",
    title: "Sturio — Marketing",
    category: "Social · Colateral · Infografías",
    description: "Activos de marketing que traducen datos técnicos en visuales claros.",
    image: projectImage("sturio-infographic-pdf") ?? sturioInfographic,
    imageFit: "contain" as const,
  },
  {
    slug: "consumer-product",
    title: "Producto de consumo",
    category: "Embalaje · Retail · Producción",
    description: "Sistema de etiquetas y presencia en estante para una gama artesanal.",
    image: salsaPackaging,
    imageFit: "contain" as const,
  },
  {
    slug: "craft-studio",
    title: "Amigurumi",
    category: "Branding · Colateral · Social",
    description: "Fichas de producto, tarjetas y guía de cuidados para una marca artesanal.",
    image: amigurumiCollateral,
    imageFit: "contain" as const,
  },
  {
    slug: "selected-marks",
    title: "Marcas seleccionadas",
    category: "Logofolio · Diseño de marca · Vector",
    description: "Redibujos de logos y refinamientos de marcas en varias industrias.",
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
              <h1 className="text-ink max-w-4xl">
                <span className="block">Proyectos</span>
                <span className="block font-serif italic">seleccionados</span>
              </h1>
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
