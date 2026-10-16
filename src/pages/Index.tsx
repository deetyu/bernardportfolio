import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import flowersMaster from "@/assets/projects/flowers-master.jpg";
import flowersPaid from "@/assets/projects/flowers-paid.jpg";
import flowersEmail from "@/assets/projects/flowers-email.jpg";
import aryaLanding from "@/assets/projects/arya-landing.jpg";
import sturioInfographic from "@/assets/projects/sturio-infographic.jpg";
import salsaPackaging from "@/assets/projects/salsa-packaging.jpg";
import amigurumiCollateral from "@/assets/projects/amigurumi-collateral.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";

const marqueeItems = [
  "Brand Identity",
  "Visual Systems",
  "Art Direction",
  "Packaging Design",
];

const brandSystems = [
  {
    title: "Identity Systems",
    description: "Logos, typography, color and graphic languages that give a brand its foundation.",
    image: aryaHero,
    slug: "arya-cosmetics",
  },
  {
    title: "Brand Applications",
    description: "Identity extended across packaging, signage, stationery and physical touchpoints.",
    image: haciendaHero,
    slug: "ex-hacienda-de-cedros",
  },
  {
    title: "Digital Touchpoints",
    description: "Landing pages, e-commerce and digital storefronts built on the brand system.",
    image: aryaLanding,
    slug: "arya-digital",
  },
];

const marketingDigital = [
  {
    title: "Campaigns & Display",
    description: "Campaign art direction adapted across paid social and display formats.",
    image: flowersPaid,
    slug: "flowers-campaign",
  },
  {
    title: "Web & E-commerce",
    description: "Landing page design and e-commerce visual strategy built on brand identity.",
    image: aryaLanding,
    slug: "arya-digital",
  },
  {
    title: "Email & Social",
    description: "Social templates and email directions that keep the identity consistent.",
    image: flowersEmail,
    slug: "girasolia",
  },
  {
    title: "Marketing Collateral",
    description: "Infographics, presentation templates and collateral that make technical content clear.",
    image: sturioInfographic,
    slug: "sturio-marketing",
  },
];

const additionalWork = [
  {
    slug: "consumer-product",
    title: "Consumer Product",
    category: "Packaging · Retail · Production",
    description: "Label system and shelf presence for a small-batch range.",
    image: salsaPackaging,
  },
  {
    slug: "craft-studio",
    title: "Amigurumi",
    category: "Branding · Collateral · Social",
    description: "Product sheets, cards and care guides for a handmade-goods brand.",
    image: amigurumiCollateral,
  },
  {
    slug: "selected-marks",
    title: "Selected Marks",
    category: "Logofolio · Mark Design · Vector",
    description: "Logo redraws and mark refinements across industries.",
    image: marksHero,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Cover */}
      <section className="min-h-dvh flex items-center pt-28 md:pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          <ScrollReveal>
            <div className="flex items-baseline justify-between">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Portfolio
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Senior Brand &amp; Visual Designer
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
              <span className="block font-serif text-[13vw] md:text-[8vw] lg:text-[6.6vw] leading-[0.95] tracking-[-0.04em] text-ink md:whitespace-nowrap">
                Senior Brand &amp; Visual Designer
              </span>
            </MaskReveal>
          </h1>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <ScrollReveal delay={180} className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-ink">
                Turning complex concepts into memorable identities through
                eight years of branding and art direction.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                Explore Work
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
              >
                About me
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

      {/* Brand Systems */}
      <section className="section-padding">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Brand Systems</p>
            <h2 className="text-ink font-serif max-w-3xl">More than a logo. A system built to work.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-base md:text-lg text-ink-light max-w-2xl">
              I build visual identities that extend across the touchpoints where brands meet their audiences.
            </p>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {brandSystems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} — brand system example`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-ink group-hover:opacity-70 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-light leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing & Digital */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Marketing &amp; Digital</p>
            <h2 className="text-ink font-serif max-w-3xl">From identity to everyday communication.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-base md:text-lg text-ink-light max-w-2xl">
              Visual systems adapted across campaigns, digital platforms, and marketing touchpoints.
            </p>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {marketingDigital.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[5/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} — marketing and digital work`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-base text-ink group-hover:opacity-70 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink-light leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Work */}
      <section className="section-padding">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="eyebrow mb-4">Additional Work</p>
                <h2 className="text-ink font-serif">Additional identities &amp; explorations</h2>
              </div>
              <Link to="/work" className="arrow-link text-ink-muted hover:text-ink">
                Full index
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
            {additionalWork.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 80}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.category}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-base text-ink group-hover:opacity-70 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    {item.category}
                  </p>
                  <p className="mt-2 text-xs text-ink-light leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <ScrollReveal className="lg:col-span-7">
              <p className="eyebrow mb-4">About</p>
              <h2 className="font-serif text-ink max-w-2xl">
                Designing identities that grow with you.
              </h2>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                I'm a Senior Brand &amp; Visual Designer with 8+ years of experience building brand identities and visual systems across digital and physical touchpoints.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                Brand strategy · Visual identity · Packaging · Digital · Marketing
              </p>
              <Link to="/about" className="arrow-link mt-8 text-ink">
                More about me
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="font-serif text-ink">
                Have a project or role in mind?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                I'm open to opportunities where brand identity, visual systems, and thoughtful design come together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <Link to="/contact" className="arrow-link mt-8 text-ink">
                Get in touch
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
