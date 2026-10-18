import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const expertise = [
  {
    title: "Brand Identity & Strategy",
    description: "Clarifying a brand's positioning, audience, and core idea to guide its visual direction.",
  },
  {
    title: "Packaging & Art Direction",
    description: "Translating identity into packaging, product presentation, and cohesive visual direction.",
  },
  {
    title: "Campaign & Marketing Design",
    description: "Adapting brand systems across campaigns, social content, display, email, and marketing collateral.",
  },
  {
    title: "Print & Brand Applications",
    description: "Extending identity across stationery, signage, event graphics, and branded materials with consistency.",
  },
];

const contactLinks = [
  { name: "Email", href: "mailto:boboteme@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bernardo-orozco/" },
  { name: "Behance", href: "https://www.behance.net/btm20/" },
];

export default function About() {
  return (
    <Layout>
      {/* Section A — Introduction */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
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

      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-ink-light leading-relaxed mb-8">
                Senior Brand &amp; Visual Designer with 8+ years of experience building brand identities, visual systems and packaging for startups and growing companies.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl text-ink-light leading-relaxed">
                I work across strategy, identity, packaging, digital and marketing design — helping brands move from a clear direction to consistent execution across touchpoints.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section B — Experience */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Experience</p>
            <h2 className="text-ink font-serif max-w-3xl">Experience built across disciplines.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-base md:text-lg text-ink-light max-w-2xl">
              Since 2022 I've led branding and visual projects independently through Orion Studio, collaborating directly with founders on identity systems, packaging and communication assets.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-ink-light max-w-2xl">
              Previously, I worked in the esports industry creating broadcast graphics, promotional content and digital assets for live competitive environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section C — Expertise */}
      <section className="section-padding">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Expertise</p>
            <h2 className="text-ink font-serif">What I do</h2>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div>
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-base text-ink-light leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={expertise.length * 80}>
              <div className="md:col-span-2">
                <p className="text-sm text-ink-muted">
                  8+ years across brand identity, visual systems, packaging, art direction, and marketing design.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section D — Contact and CV */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="font-serif text-ink">
                Let's build something meaningful.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                Open to senior brand &amp; visual design roles where I can contribute to building strong, scalable brand systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
                >
                  Contact me
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <a
                  href="/Bernardo_Orozco_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-light hover:text-ink transition-colors duration-300"
                  >
                    {link.name}
                    <ArrowUpRight size={13} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
