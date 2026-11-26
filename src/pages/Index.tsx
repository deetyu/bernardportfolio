import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import flowersPaid from "@/assets/projects/flowers-paid.jpg";

const projects = [
  {
    number: "01",
    title: "AR•YA Cosmetics",
    category: "Identity · Packaging · Digital",
    image: aryaHero,
    slug: "arya-cosmetics",
  },
  {
    number: "02",
    title: "Sturio",
    category: "Visual System · B2B",
    image: sturioHero,
    slug: "sturio",
  },
  {
    number: "03",
    title: "Ex Hacienda de Cedros",
    category: "Identity · Hospitality",
    image: haciendaHero,
    slug: "ex-hacienda-de-cedros",
  },
  {
    number: "04",
    title: "Girasolía",
    category: "Identity · Social · Campaign",
    image: flowersPaid,
    slug: "girasolia",
  },
];

const services = [
  {
    title: "Visual Identity",
    text: "Logos, typography, color and graphic languages that give brands a clear, scalable foundation.",
  },
  {
    title: "Brand Applications",
    text: "Extending identity across packaging, signage, stationery and physical touchpoints with consistency.",
  },
  {
    title: "Art Direction",
    text: "Campaigns, social content and visual pieces built on the same brand system.",
  },
];

const tools = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "Figma",
  "After Effects",
  "Lightroom",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero — minimal, text-driven, no buttons */}
      <section className="min-h-dvh flex flex-col justify-end pt-32 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          <ScrollReveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted mb-auto">
              Portfolio
            </p>
          </ScrollReveal>

          <div className="mt-20 md:mt-32 lg:mt-40">
            <MaskReveal delay={120}>
              <span className="block font-serif text-[8vw] md:text-[5vw] lg:text-[4vw] leading-[1.05] tracking-[-0.02em] text-ink">
                Bernardo Orozco
              </span>
            </MaskReveal>

            <div className="mt-1 md:mt-2">
              <MaskReveal delay={260}>
                <span className="block font-serif italic text-[14vw] md:text-[9vw] lg:text-[7vw] leading-[0.92] tracking-[-0.04em] text-ink">
                  Graphic Design
                </span>
              </MaskReveal>
            </div>

            <ScrollReveal delay={400}>
              <p className="mt-10 md:mt-14 font-serif text-xl md:text-2xl lg:text-3xl leading-[1.3] text-ink max-w-2xl">
                Visual identity, editorial and packaging with order, intention and detail.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects — large vertical list, not a grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-24">Projects</p>
          </ScrollReveal>

          <div className="space-y-20 md:space-y-32">
            {projects.map((item, index) => (
              <ScrollReveal key={item.slug} delay={0}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                    {/* Image — large, takes most of the width */}
                    <div className={`md:col-span-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="bg-cream-darker aspect-[16/10] overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.title} — project`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>

                    {/* Text — minimal, offset */}
                    <div className={`md:col-span-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="font-serif text-4xl md:text-5xl text-ink-muted/40">
                        {item.number}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl md:text-3xl text-ink group-hover:opacity-60 transition-opacity duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <Link to="/work" className="arrow-link mt-20 md:mt-32 inline-flex text-ink">
              View all projects
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services / Process — "From a scattered idea..." */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-8">Services</p>
            <h2 className="text-ink font-serif italic text-[8vw] md:text-[5vw] lg:text-[4vw] leading-[0.95] tracking-[-0.03em] max-w-4xl">
              From a scattered idea to something clear, coherent and impactful.
            </h2>
          </ScrollReveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div>
                  <span className="font-serif text-sm text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl md:text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-ink-light leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — narrative text, no image */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-8">About</p>
            <h2 className="font-serif text-ink text-[8vw] md:text-[5vw] lg:text-[4vw] leading-[0.95] tracking-[-0.03em] max-w-3xl">
              Meet Bernardo.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              <div className="md:col-span-7 md:col-start-6">
                <p className="text-lg md:text-xl text-ink-light leading-relaxed">
                  I see my work as a way of bringing light and order. I'm passionate about taking an idea that seems scattered and transforming it into something clear, coherent and visually impactful.
                </p>
                <p className="mt-6 text-lg md:text-xl text-ink-light leading-relaxed">
                  For me, design isn't just about making something "look good" — it's about making sure every typeface, every color and every space has a purpose and helps communicate better.
                </p>
                <p className="mt-8 text-sm text-ink-muted">
                  Brand identity · Visual systems · Packaging · Digital · Marketing
                </p>
                <Link to="/about" className="arrow-link mt-8 inline-flex text-ink">
                  More about me
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-8">Tools</p>
            <h2 className="font-serif italic text-ink text-[8vw] md:text-[5vw] lg:text-[4vw] leading-[0.95] tracking-[-0.03em]">
              What I use day to day.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ul className="mt-12 md:mt-16 flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3">
              {tools.map((tool) => (
                <li key={tool} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-light">
                  {tool}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact — minimal */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-8">Let's talk</p>
            <h2 className="font-serif italic text-ink text-[10vw] md:text-[7vw] lg:text-[5vw] leading-[0.92] tracking-[-0.04em]">
              Have a project in mind?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-10 md:mt-14 text-lg md:text-xl text-ink-light max-w-xl leading-relaxed">
              Tell me about your project. I respond by email or LinkedIn.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <Link to="/contact" className="arrow-link mt-10 inline-flex text-ink text-lg">
              Get in touch
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
