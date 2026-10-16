import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";
import { projects } from "@/data/projects";
import { projectImage } from "@/data/projectImages";

import aryaHero from "@/assets/projects/arya-hero.jpg";
import sturioHero from "@/assets/projects/sturio-hero.jpg";
import haciendaHero from "@/assets/projects/hacienda-hero.jpg";
import flowersMaster from "@/assets/projects/flowers-master.jpg";
import flowersPaid from "@/assets/projects/flowers-paid.jpg";
import flowersEmail from "@/assets/projects/flowers-email.jpg";
import flowersPrint from "@/assets/projects/flowers-print.jpg";
import aryaLanding from "@/assets/projects/arya-landing.jpg";
import sturioInfographic from "@/assets/projects/sturio-infographic.jpg";
import sturioDisplay from "@/assets/projects/sturio-display.jpg";
import salsaPackaging from "@/assets/projects/salsa-packaging.jpg";
import amigurumiCollateral from "@/assets/projects/amigurumi-collateral.jpg";
import marksHero from "@/assets/projects/marks-hero.jpg";

const featured = [
  {
    slug: "arya-cosmetics",
    title: "AR\u00b7YA Cosmetics",
    category: "Brand Identity \u00b7 Packaging \u00b7 Digital",
    description: "Identity and packaging system for a professional skincare brand, extended into e-commerce and marketing.",
    image: aryaHero,
  },
  {
    slug: "sturio",
    title: "STURIO",
    category: "Brand Identity \u00b7 Visual Systems",
    description: "A modular visual identity connecting corporate communication, digital platforms and marketing assets.",
    image: sturioHero,
  },
  {
    slug: "ex-hacienda-de-cedros",
    title: "Ex Hacienda de Cedros",
    category: "Brand Identity \u00b7 Art Direction \u00b7 Hospitality",
    description: "Identity and art direction for a historic hacienda positioned as a premium event destination.",
    image: haciendaHero,
  },
  {
    slug: "girasolia",
    title: "Girasol\u00eda",
    category: "Brand Identity \u00b7 Campaign \u00b7 Social",
    description: "A sunflower-led identity extended into social templates, campaign concepts, email, print and merchandise.",
    image: flowersMaster,
  },
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
    category: "Packaging \u00b7 Retail \u00b7 Production",
    description: "Label system and shelf presence for a small-batch range.",
    image: salsaPackaging,
  },
  {
    slug: "craft-studio",
    title: "Amigurumi",
    category: "Branding \u00b7 Collateral \u00b7 Social",
    description: "Product sheets, cards and care guides for a handmade-goods brand.",
    image: amigurumiCollateral,
  },
  {
    slug: "selected-marks",
    title: "Selected Marks",
    category: "Logofolio \u00b7 Mark Design \u00b7 Vector",
    description: "Logo redraws and mark refinements across industries.",
    image: marksHero,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Section A — Hero */}
      <section className="min-h-dvh flex items-center pt-28 md:pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-editorial w-full">
          <ScrollReveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted mb-8">
              Senior Brand &amp; Visual Designer
            </p>
          </ScrollReveal>

          <MaskReveal delay={120}>
            <h1 className="font-serif text-[10vw] md:text-[6vw] lg:text-[4.8vw] leading-[1.02] tracking-[-0.03em] text-ink max-w-5xl">
              Identity systems for brands ready to grow into themselves.
            </h1>
          </MaskReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-sm md:text-base text-ink-muted tracking-wide">
              Brand Identity <span className="text-ink-muted/40 mx-1">\u00b7</span>
              Visual Systems <span className="text-ink-muted/40 mx-1">\u00b7</span>
              Packaging <span className="text-ink-muted/40 mx-1">\u00b7</span>
              Marketing Design
            </p>
          </ScrollReveal>

          <ScrollReveal delay={360}>
            <div className="mt-10 md:mt-14 flex flex-wrap gap-4">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                Explore selected work
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
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

      {/* Section B — Selected Work */}
      <section id="selected-work" className="section-padding scroll-mt-24">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="eyebrow mb-4">Selected Work</p>
                <h2 className="text-ink font-serif">Four primary case studies</h2>
              </div>
              <Link to="/work" className="arrow-link text-ink-muted hover:text-ink">
                Full index
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">
            {featured.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 80} className={index === 3 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} \u2014 ${item.category}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="draw-rule mt-5 pt-5">
                    <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight transition-opacity duration-300 group-hover:opacity-70">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                      {item.category}
                    </p>
                    <p className="mt-3 text-sm text-ink-light leading-relaxed">
                      {item.description}
                    </p>
                    <span className="arrow-link mt-4 text-ink">
                      Read case study
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section C — Brand Systems */}
      <section className="section-padding bg-cream-dark">
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
                      alt={`${item.title} \u2014 brand system example`}
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

      {/* Section D — Marketing & Digital */}
      <section className="section-padding">
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
                      alt={`${item.title} \u2014 marketing and digital work`}
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

      {/* Section E — Additional Work */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Additional Work</p>
            <h2 className="text-ink font-serif">Additional identities &amp; explorations</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-base md:text-lg text-ink-light max-w-2xl">
              A selection of additional identities and visual explorations.
            </p>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
            {additionalWork.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 80}>
                <Link to={`/work/${item.slug}`} className="group block">
                  <div className="wipe-media bg-cream-darker aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} \u2014 ${item.category}`}
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

      {/* Section F — About Teaser */}
      <section className="section-padding">
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
                Brand strategy <span className="mx-1">\u00b7</span>
                Visual identity <span className="mx-1">\u00b7</span>
                Packaging <span className="mx-1">\u00b7</span>
                Digital <span className="mx-1">\u00b7</span>
                Marketing
              </p>
              <Link to="/about" className="arrow-link mt-8 text-ink">
                More about me
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section G — Contact */}
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
