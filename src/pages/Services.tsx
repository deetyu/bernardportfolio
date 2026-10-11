import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "Positioning, audience definition, and messaging frameworks that give your brand a clear direction before design begins.",
    deliverables: ["Brand positioning", "Competitive audit", "Audience mapping", "Brand narrative"],
  },
  {
    number: "02",
    title: "Visual Identity",
    description: "Distinctive logo systems, typography, color, and application rules built to scale across every channel.",
    deliverables: ["Logo suite", "Typography system", "Color palette", "Brand guidelines"],
  },
  {
    number: "03",
    title: "Packaging Design",
    description: "Packaging systems that communicate quality and shelf presence while staying true to the brand's positioning.",
    deliverables: ["Packaging concepts", "Label systems", "Production-ready files", "Mockups"],
  },
  {
    number: "04",
    title: "Art Direction",
    description: "Creative direction for photography, campaigns, and digital content that keeps your brand visually consistent.",
    deliverables: ["Campaign direction", "Photography briefs", "Social templates", "Launch assets"],
  },
  {
    number: "05",
    title: "Marketing Assets",
    description: "Templates and collateral your team can use confidently, from pitch decks to social content systems.",
    deliverables: ["Social media templates", "Presentation decks", "Print collateral", "Digital ads"],
  },
  {
    number: "06",
    title: "Brand Refinement",
    description: "Modernize an existing identity without losing recognition — from vector redraws to full system updates.",
    deliverables: ["Logo refinement", "Vector recreation", "System updates", "Usage rules"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We define the problem, audience, and goals. I review references, competitors, and existing materials to understand where the brand needs to go.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Positioning, narrative, and creative direction are aligned into a clear brief that guides every design decision.",
  },
  {
    step: "03",
    title: "Design",
    description: "Concepts are developed and refined into a cohesive identity system, with room for feedback and iteration.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final assets, guidelines, and templates are packaged so your team can implement the brand with confidence.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Services</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl mb-8">
              Brand systems built to last.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-ink-light max-w-2xl">
              I help startups and growing businesses move from strategy to implementation with identities that stay consistent across packaging, digital, and marketing touchpoints.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">What I Offer</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 50}>
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-ink">{service.title}</h3>
                    <span className="text-sm text-ink-muted">{service.number}</span>
                  </div>
                  <p className="text-ink-light mb-6">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink">
                        <Check size={14} strokeWidth={1.5} className="text-ink-muted" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">Process</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 100}>
                <div>
                  <span className="text-5xl md:text-6xl font-serif text-ink/10">{step.step}</span>
                  <h3 className="font-serif text-xl text-ink mt-4 mb-4">{step.title}</h3>
                  <p className="text-ink-light text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Ready to build your brand?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Tell me about your project and we'll find the right way to work together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Start a Project
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
