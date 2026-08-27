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
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        {/* Ambient Color Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[16%] right-[24%] w-52 h-52 md:w-72 md:h-72 rounded-full bg-blob-green blur-[70px] opacity-70 animate-blob" />
          <div className="absolute top-[10%] right-[10%] w-60 h-60 md:w-80 md:h-80 rounded-full bg-blob-blue blur-[80px] opacity-60 animate-blob [animation-delay:-4s]" />
          <div className="absolute top-[38%] right-[18%] w-56 h-56 md:w-72 md:h-72 rounded-full bg-blob-orange blur-[75px] opacity-60 animate-blob [animation-delay:-8s]" />
        </div>

        <div className="relative z-10 container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col items-center text-center">
          {/* Headline with Circular Badge */}
          <div className="relative">
            <ScrollReveal>
              <h1 className="font-serif italic text-ink leading-[0.85] tracking-tight text-[clamp(3.5rem,13vw,10.5rem)] select-none">
                Bernardo
                <br />
                Orozco
              </h1>
            </ScrollReveal>

            {/* Rotating Circular Badge */}
            <ScrollReveal
              delay={200}
              className="absolute -top-10 -right-8 md:-top-14 md:-right-24 w-28 h-28 md:w-44 md:h-44 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <defs>
                  <path
                    id="heroBadgePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-ink font-sans font-medium uppercase text-[8px] tracking-[0.22em]">
                  <textPath href="#heroBadgePath">
                    Senior Brand Designer • Creative Direction •
                  </textPath>
                </text>
              </svg>
            </ScrollReveal>
          </div>

          {/* Skill Pill Tags */}
          <ScrollReveal delay={300}>
            <div className="mt-14 md:mt-20 flex flex-wrap justify-center gap-3 max-w-2xl">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-2 rounded-full border border-ink/15 text-sm font-medium text-ink/70 bg-cream/50 backdrop-blur-sm transition-all duration-300 hover:border-ink hover:text-ink cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="mt-10 md:mt-12">
            <Link to="/work" className="arrow-link text-ink">
              View Selected Work
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <ScrollReveal delay={500} className="hidden lg:block mt-16">
            <div className="flex flex-col items-center gap-3 text-ink-muted">
              <div className="w-px h-12 bg-divider origin-top animate-line-grow" />
              <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
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
