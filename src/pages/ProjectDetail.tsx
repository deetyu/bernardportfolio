import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";
import { ProjectSections } from "@/components/project/ProjectSections";
import { projectImage } from "@/data/projectImages";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import aryaDetail1 from "@/assets/projects/arya-detail-1.jpg";
import aryaDetail2 from "@/assets/projects/arya-detail-2.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import sturioDetail1 from "@/assets/projects/sturio-detail-1.jpg";
import sturioDetail2 from "@/assets/projects/sturio-detail-2.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import haciendaDetail1 from "@/assets/projects/hacienda-detail-1.jpg";
import haciendaDetail2 from "@/assets/projects/hacienda-detail-2.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";
import marksDetail1 from "@/assets/projects/marks-detail-1.jpg";
import marksDetail2 from "@/assets/projects/marks-detail-2.jpg";
import flowersPaid from "@/assets/projects/flowers-paid.jpg";
import flowersEmail from "@/assets/projects/flowers-email.jpg";
import flowersPrint from "@/assets/projects/flowers-print.jpg";
import aryaLanding from "@/assets/projects/arya-landing.jpg";
import sturioInfographic from "@/assets/projects/sturio-infographic.jpg";
import sturioDisplay from "@/assets/projects/sturio-display.jpg";
import salsaPackaging from "@/assets/projects/salsa-packaging.jpg";
import amigurumiHero from "@/assets/projects/amigurumi-hero.jpg";
import amigurumiCollateral from "@/assets/projects/amigurumi-collateral.jpg";

const projectImages: Record<string, string[]> = {
  "arya-cosmetics": [aryaHero, aryaDetail1, aryaDetail2],
  "sturio": [sturioHero, sturioDetail1, sturioDetail2],
  "ex-hacienda-de-cedros": [haciendaHero, haciendaDetail1, haciendaDetail2],
  "selected-marks": [marksHero, marksDetail1, marksDetail2],
  "flowers-campaign": [flowersPaid, flowersEmail, flowersPrint],
  "arya-digital": [aryaLanding, aryaDetail1, aryaDetail2],
  "sturio-marketing": [sturioInfographic, sturioDisplay, sturioDetail1],
  "consumer-product": [salsaPackaging, salsaPackaging, salsaPackaging],
  "craft-studio": [amigurumiHero, amigurumiCollateral, amigurumiHero],
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const heroNames: Record<string, string> = {
    "arya-cosmetics": "arya-product",
    sturio: "sturio-corporate",
    "ex-hacienda-de-cedros": "hacienda-signage",
    girasolia: "girasolia-identity",
    "flowers-campaign": "girasolia-paid",
    "arya-digital": "arya-landing-pdf",
    "sturio-marketing": "sturio-infographic-pdf",
  };
  const images = projectImages[project.slug] || [flowersPaid];
  const hero = projectImage(heroNames[project.slug] ?? "") ?? images[0];
  const caseStudy = caseStudies[project.slug];

  return (
    <Layout>
      {/* 1. Hero */}
      <section className="cs-section pt-24 md:pt-28">
        <div className="cs-container">
          <ScrollReveal>
            <div className="aspect-[21/9] max-h-[38vh] w-full overflow-hidden bg-cream-dark">
              <img src={hero} alt={project.title} className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-7 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h1 className="font-serif text-2xl text-ink md:text-3xl">{project.title}</h1>
              <p className="cs-label text-ink-muted">{project.category}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="cs-section pt-0 md:pt-0">
        <div className="cs-container grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <ScrollReveal className="md:col-span-7">
            <p className="cs-label mb-3 text-ink-muted">Overview</p>
            <p className="font-serif text-lg leading-relaxed text-ink md:text-xl">{project.overview}</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="cs-label mb-2">The Challenge</p>
                <p className="text-sm leading-relaxed text-ink-light">{project.challenge}</p>
              </div>
              <div>
                <p className="cs-label mb-2">The Solution</p>
                <p className="text-sm leading-relaxed text-ink-light">{project.solution}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-4 md:col-start-9" delay={100}>
            <dl className="grid grid-cols-2 gap-5 md:grid-cols-1">
              {[
                ["Client", project.client],
                ["Industry", project.industry],
                ...(caseStudy ? [["Role", caseStudy.role]] : []),
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="cs-label mb-1 text-ink-muted">{k}</dt>
                  <dd className="text-sm text-ink">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="cs-label mb-1 text-ink-muted">Services</dt>
                <dd className="text-sm text-ink">{project.services.join(" · ")}</dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {caseStudy ? (
        <>
          {/* 3–4. Identity, Applications & Deliverables */}
          <ProjectSections sections={caseStudy.sections} projectTitle={project.title} />

          {/* 6–7. Delivered, Built to */}
          <section className="cs-section">
            <div className="cs-container grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              <ScrollReveal className="md:col-span-5">
                <p className="cs-label mb-4 text-ink-muted">Delivered</p>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-ink-light sm:grid-cols-2">
                  {caseStudy.delivered.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </ScrollReveal>
              <ScrollReveal className="md:col-span-6 md:col-start-7" delay={100}>
                <p className="cs-label mb-4 text-ink-muted">Built to</p>
                <p className="font-serif text-lg leading-relaxed text-ink md:text-xl">{caseStudy.builtTo}</p>
                {caseStudy.note && <p className="mt-4 text-sm leading-relaxed text-ink-muted">{caseStudy.note}</p>}
              </ScrollReveal>
            </div>
          </section>
        </>
      ) : (
      <>
      {/* Image Gallery */}
       <section className="pb-8 md:pb-12">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
           <div className="space-y-6 md:space-y-8">
            {/* Full Width Image */}
            <ScrollReveal>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={images[0]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Two Column */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={images[1]}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={images[2]}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Full Width Image */}
            <ScrollReveal>
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={images[0]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </>
      )}

      {/* Next Project */}
      <section>
        <Link 
          to={`/work/${nextProject.slug}`}
          className="group block"
        >
           <div className="container-editorial px-6 md:px-12 lg:px-20 py-8 md:py-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Next Project</p>
                <h2 className="font-serif text-2xl md:text-3xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextProject.title}
                </h2>
              </div>
              <ArrowRight 
                size={32} 
                strokeWidth={1} 
                className="text-ink transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Back Link */}
      <section className="bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to all projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
