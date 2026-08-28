import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HorizontalScrollGallery } from "@/components/shared/HorizontalScrollGallery";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";

const projectImages: Record<string, string> = {
  "arya-cosmetics": aryaHero,
  "sturio": sturioHero,
  "ex-hacienda-de-cedros": haciendaHero,
  "selected-marks": marksHero,
};


const services = [
  {
    title: "Brand Strategy",
    description: "Positioning and narrative frameworks that create lasting differentiation for growing brands.",
  },
  {
    title: "Visual Identity",
    description: "Distinctive design systems built on strategic foundations and made to scale.",
  },
  {
    title: "Art Direction",
    description: "Creative guidance that brings brand visions to life with precision across every touchpoint.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-dvh flex items-center pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          {/* Masthead rule */}
          <ScrollReveal>
            <div className="flex items-baseline justify-between border-b border-ink pb-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink">
                Senior Brand &amp; Visual Designer
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Vol. 01 — 2026
              </p>
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={100}>
            <h1 className="font-serif italic text-[22vw] md:text-[16vw] lg:text-[14vw] leading-[0.82] tracking-[-0.03em] text-ink mt-8 md:mt-12">
              Portfolio
            </h1>
          </ScrollReveal>

          {/* Editorial columns */}
          <div className="mt-10 md:mt-14 border-t border-divider pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <ScrollReveal delay={200} className="md:col-span-5">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-ink">
                Strategic design leader with 8+ years building visual systems that scale.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={280} className="md:col-span-4">
              <p className="text-base text-ink-light leading-relaxed">
                Brand identity, packaging and art direction for startups and
                growing companies. Based in Guadalajara, Mexico — available for
                remote senior roles worldwide.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={340} className="md:col-span-3">
              <dl className="divide-y divide-divider border-t border-divider text-sm">
                {[
                  ["Experience", "8+ Years"],
                  ["Location", "Guadalajara / Remote"],
                  ["Availability", "Senior Roles"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[10px] uppercase tracking-widest text-ink-muted">{label}</dt>
                    <dd className="text-ink text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          {/* CTAs */}
          <ScrollReveal delay={420}>
            <div className="mt-10 md:mt-14 flex flex-wrap gap-4 border-t border-ink pt-8">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                View Selected Work
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="/Bernardo_Orozco_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
              >
                Download Portfolio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* Selected Work Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects.slice(0, 4).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={projectImages[project.slug]}
                  aspectRatio={index % 3 === 0 ? "portrait" : "landscape"}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/work" className="arrow-link text-ink">
              View All Projects
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="eyebrow mb-6">About</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug mb-8">
                  "I specialize in building visual systems that stay consistent long after the project ends."
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light mb-8">
                  I'm a Senior Brand & Visual Designer with 8+ years of experience helping startups and growing businesses build distinctive, scalable brands. Since 2022 I've run my own independent studio, working directly with founders across technology, esports, hospitality, e-commerce, and consumer brands.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/about" className="arrow-link text-ink">
                  Learn more about my approach
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={marksHero}
                    alt="Selected brand marks designed by Bernardo Orozco"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Services"
              title="What I Do"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="border-t border-divider pt-8">
                  <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
                  <p className="text-ink-light">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/services" className="arrow-link text-ink">
              View All Services
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Let's create something{" "}
                <em className="font-serif italic">meaningful.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Open to senior brand & visual design roles and long-term identity system projects. I'd love to hear what you're building.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get an Estimate
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
