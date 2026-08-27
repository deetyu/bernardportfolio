import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

import marksHero from "@/assets/projects/marks-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";

const values = [
  {
    number: "01",
    title: "Clarity over noise",
    description: "The best identities are immediately understood. I distill brands to their essence, removing everything that doesn't serve the idea.",
  },
  {
    number: "02",
    title: "Systems over one-offs",
    description: "A logo alone isn't a brand. I build visual systems — type, color, layout, and application rules — that teams can use with confidence.",
  },
  {
    number: "03",
    title: "Strategy before aesthetics",
    description: "Beautiful design without purpose is decoration. Every visual decision is grounded in positioning, audience, and business goals.",
  },
];

const recognition = [
  { name: "Independent Studio", type: "Since 2022", year: "Guadalajara, Mexico" },
  { name: "Client Industries", type: "Technology, Hospitality, E-commerce, Consumer Brands", year: "LATAM & Remote" },
  { name: "Core Disciplines", type: "Brand Identity, Visual Systems, Art Direction", year: "8+ years" },
  { name: "Behance", type: "Selected work", year: "behance.net/btm20" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">About</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink">
                Designing identities that grow with you.
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xl md:text-2xl text-ink leading-relaxed mb-8 first-letter:text-8xl md:first-letter:text-9xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-0 first-letter:leading-[0.75]">
                I'm a Senior Brand & Visual Designer with 8+ years of experience helping startups and growing businesses build distinctive, scalable brands.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-8">
                Since 2022 I've run my own independent studio in Guadalajara, Mexico, working directly with founders across technology, esports, hospitality, e-commerce, and consumer brands. My practice is built around one belief: the best identities are systems that teams can actually use long after the project ends.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light mb-8">
                I specialize in moving brands from positioning through to the templates teams run independently — whether that's packaging, social content, corporate collateral, or a full digital storefront. Every system is designed for clarity, consistency, and real-world production.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-ink-light">
                Outside the studio, I stay curious about architecture, typography, and the small details that make places and objects memorable. That curiosity feeds back into the work.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">Approach</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.number} delay={index * 100}>
                <div>
                  <span className="text-sm text-ink-muted tracking-wide">{value.number}</span>
                  <h3 className="font-serif text-2xl text-ink mt-4 mb-4">{value.title}</h3>
                  <p className="text-ink-light">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">At a Glance</p>
                <h2 className="text-ink">Experience & Reach</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {recognition.map((item, index) => (
                  <ScrollReveal key={item.name} delay={index * 50}>
                    <div className="py-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-lg text-ink">{item.name}</h4>
                        <p className="text-sm text-ink-muted">{item.type}</p>
                      </div>
                      <span className="text-sm text-ink-muted">{item.year}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={haciendaHero}
                    alt="Ex Hacienda de Cedros brand imagery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={100}>
                <p className="eyebrow mb-4">Beyond Work</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light">
                  Design is a lens through which I see the world. Outside the studio, I'm drawn to architecture, typography, and the quiet details that make spaces and objects memorable. I believe creativity is fueled by curiosity — and by taking time to simply observe.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Let's work together.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                I'm open to senior brand & visual design roles and long-term identity system projects.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get in Touch
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
