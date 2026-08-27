import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
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

const skillTags = ["Logofolio", "Branding", "Packaging", "Art Direction"];

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
        <div className="container-editorial w-full border-t border-divider pt-10 md:pt-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
            {/* Name + Statement */}
            <div className="space-y-8">
              <ScrollReveal>
                <header className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Senior Brand &amp; Visual Designer
                  </p>
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-ink leading-[0.9]">
                    Bernardo
                    <br />
                    Orozco
                  </h1>
                </header>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <p className="max-w-xl text-xl md:text-2xl text-ink-light leading-snug">
                  Strategic design leader with 8+ years of experience building
                  visual systems that scale. Based in Guadalajara, Mexico —
                  available for remote senior roles worldwide.
                </p>
              </ScrollReveal>
            </div>

            {/* Meta Column */}
            <ScrollReveal delay={250}>
              <dl className="flex flex-col gap-5 text-sm font-medium border-l border-divider pl-8 shrink-0">
                <div className="flex flex-col">
                  <dt className="text-ink-muted uppercase text-[10px] tracking-widest mb-1">Experience</dt>
                  <dd className="text-ink">8+ Years Professional</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-ink-muted uppercase text-[10px] tracking-widest mb-1">Location</dt>
                  <dd className="text-ink">Guadalajara / Remote</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-ink-muted uppercase text-[10px] tracking-widest mb-1">Availability</dt>
                  <dd className="text-ink">Full-time / Senior Roles</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>

          {/* CTAs */}
          <ScrollReveal delay={350}>
            <div className="mt-14 md:mt-16 flex flex-wrap gap-4">
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
