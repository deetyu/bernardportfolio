import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";

import portraitMain from "@/assets/portrait-main.jpg";
import workspace from "@/assets/workspace.jpg";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import flowersPaid from "@/assets/projects/flowers-paid.jpg";
import aryaLanding from "@/assets/projects/arya-landing.jpg";
import sturioInfographic from "@/assets/projects/sturio-infographic.jpg";
import salsaPackaging from "@/assets/projects/salsa-packaging.jpg";
import amigurumiCollateral from "@/assets/projects/amigurumi-collateral.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";

const marqueeItems = [
  "Identidad visual",
  "Sistemas de marca",
  "Dirección de arte",
  "Diseño de embalaje",
];

const projects = [
  {
    title: "AR•YA Cosmetics",
    category: "Identidad · Embalaje · Digital",
    image: aryaHero,
    slug: "arya-cosmetics",
  },
  {
    title: "Sturio",
    category: "Sistema visual · B2B",
    image: sturioHero,
    slug: "sturio",
  },
  {
    title: "Ex Hacienda de Cedros",
    category: "Identidad · Hospitalidad",
    image: haciendaHero,
    slug: "ex-hacienda-de-cedros",
  },
  {
    title: "Girasolía",
    category: "Identidad · Social · Campaña",
    image: flowersPaid,
    slug: "girasolia",
  },
];

const services = [
  {
    title: "Identidad visual",
    text: "Logos, tipografía, color y lenguajes gráficos que dan a las marcas una base clara y escalable.",
  },
  {
    title: "Aplicaciones de marca",
    text: "Extender la identidad a embalaje, señalética, papelería y puntos de contacto físicos con coherencia.",
  },
  {
    title: "Dirección de arte",
    text: "Campañas, contenido social y piezas visuales construidas sobre el mismo sistema de marca.",
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
      {/* Hero */}
      <section className="min-h-dvh flex items-center pt-28 md:pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          <ScrollReveal>
            <div className="flex items-baseline justify-between">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Portfolio
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Diseñador gráfico
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
              <span className="block font-serif italic text-[13vw] md:text-[8vw] lg:text-[6.6vw] leading-[0.95] tracking-[-0.04em] text-ink md:whitespace-nowrap">
                Diseño gráfico
              </span>
            </MaskReveal>
          </h1>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <ScrollReveal delay={180} className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-ink">
                Identidad visual, editorial y embalaje con orden, intención y detalle.
              </p>
              <p className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-xl">
                8+ años ayudando a startups y marcas en crecimiento a convertir su estrategia en sistemas visuales coherentes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260} className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-cream-darker">
                <img
                  src={portraitMain}
                  alt="Bernardo Orozco — retrato"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                Ver proyectos
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
              >
                Sobre mí
              </Link>
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

      {/* Projects */}
      <section className="section-padding">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Proyectos</p>
            <h2 className="text-ink font-serif italic max-w-3xl">De una idea desordenada a algo claro, coherente y con impacto.</h2>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {projects.map((item, index) => (
              <ScrollReveal key={item.slug} delay={(index % 2) * 100}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} — proyecto`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted text-right">
                      {item.category}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <Link to="/work" className="arrow-link mt-12 md:mt-16 inline-flex text-ink">
              Ver todos los proyectos
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services — "De una idea desordenada…" */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Servicios</p>
            <h2 className="text-ink font-serif italic max-w-3xl">
              De una idea desordenada a algo claro, coherente y con impacto.
            </h2>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {services.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="draw-rule pt-6">
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-light leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — "Conoce a Bernardo." */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-cream-darker">
                <img
                  src={workspace}
                  alt="Espacio de trabajo de Bernardo Orozco"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={100}>
              <p className="eyebrow mb-4">Sobre mí</p>
              <h2 className="font-serif text-ink max-w-2xl">
                Conoce a Bernardo.
              </h2>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                Entiendo mi trabajo como una forma de aportar luz y orden. Me apasiona coger una idea que parece desordenada y transformarla en algo claro, coherente y con impacto visual.
              </p>
              <p className="mt-4 text-base md:text-lg text-ink-light max-w-xl">
                Para mí el diseño no es solo que algo "se vea bien", sino que cada tipografía, cada color y cada espacio tengan un sentido y ayuden a comunicar mejor.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                Identidad de marca · Sistemas visuales · Embalaje · Digital · Marketing
              </p>
              <Link to="/about" className="arrow-link mt-8 text-ink">
                Más sobre mí
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Herramientas</p>
            <h2 className="font-serif text-ink italic">Lo que uso día a día.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {tools.map((tool) => (
                <li key={tool} className="font-serif text-2xl md:text-3xl text-ink-light">
                  {tool}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Hablemos</p>
              <h2 className="font-serif italic text-ink">
                ¿Tienes un proyecto en mente?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                Cuéntame tu proyecto. Respondo por correo o por LinkedIn. Abierto a oportunidades donde la identidad de marca, los sistemas visuales y el diseño bien hecho se encuentran.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <Link to="/contact" className="arrow-link mt-8 text-ink">
                Hablemos
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
