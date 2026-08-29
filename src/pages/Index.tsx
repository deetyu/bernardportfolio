import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { projects } from "@/data/projects";
import { projectImage } from "@/data/projectImages";

const bento = [
  {
    slug: "arya-cosmetics",
    image: "arya-hero",
    tags: ["Brand", "Packaging", "E-commerce"],
    span: "md:col-span-4 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    slug: "sturio",
    image: "sturio-hero",
    tags: ["Brand", "SaaS", "Digital"],
    span: "md:col-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    slug: "ex-hacienda-de-cedros",
    image: "hacienda-hero",
    tags: ["Brand", "Hospitality", "Art Direction"],
    span: "md:col-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    slug: "selected-marks",
    image: "marks-hero",
    tags: ["Logofolio", "Vector"],
    span: "md:col-span-2",
    ratio: "aspect-[4/3]",
  },
];

const services = [
  {
    index: "01",
    title: "Brand Strategy",
    description:
      "Positioning, narrative and naming frameworks that give a brand a defendable place in its category before a single pixel is drawn.",
    items: ["Positioning", "Naming", "Brand architecture", "Messaging"],
  },
  {
    index: "02",
    title: "Visual Identity",
    description:
      "Marks, type systems and colour logic built on a grid — designed to hold up from a favicon to a facade without losing tension.",
    items: ["Logo & marks", "Type systems", "Guidelines", "Packaging"],
  },
  {
    index: "03",
    title: "Digital Design",
    description:
      "Interfaces, landing pages and campaign systems that translate the identity into working, scalable digital surfaces.",
    items: ["Web & UI", "Design systems", "Campaign assets", "Motion direction"],
  },
];

const timeline = [
  {
    period: "2022 — Present",
    role: "Independent Senior Designer",
    detail: "Brand identity, packaging and art direction for founders across tech, hospitality, esports and consumer goods.",
  },
  {
    period: "2020 — 2022",
    role: "Brand & Visual Designer",
    detail: "In-house design across marketing, packaging and digital campaigns for consumer and retail clients.",
  },
  {
    period: "2018 — 2020",
    role: "Graphic Designer",
    detail: "Print, editorial and production design — the foundation of a build-it-properly approach to systems.",
  },
];

const clients = ["AR•YA", "Sturio", "Ex Hacienda de Cedros", "Flowers", "Amigurumi", "Elía Foods"];

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/boboteme/" },
  { name: "Behance", href: "https://www.behance.net/btm20" },
  { name: "Instagram", href: "https://www.instagram.com/" },
];

export default function Index() {
  const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-dvh flex items-end pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 grain opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="container-editorial w-full relative">
          <ScrollReveal>
            <div className="flex items-baseline justify-between border-b border-divider pb-4 mb-10 md:mb-16">
              <p className="eyebrow">Senior Brand &amp; Visual Designer</p>
              <p className="eyebrow">Guadalajara / Remote</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-ink max-w-[16ch] text-[13vw] md:text-[9vw] lg:text-[7.6vw]">
              Design that
              <br />
              holds up at
              <br />
              <span className="text-ink-muted">every scale.</span>
            </h1>
          </ScrollReveal>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
            <ScrollReveal delay={160} className="md:col-span-5">
              <p className="text-ink-light max-w-md">
                I build brand systems with structure — strategy first, then identity,
                then the digital surfaces that carry it. 8+ years turning ambitious
                briefs into visual languages teams can actually use.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240} className="md:col-span-4 md:col-start-7">
              <dl className="border-t border-divider divide-y divide-divider text-sm">
                {[
                  ["Experience", "8+ Years"],
                  ["Focus", "Brand · Packaging · Digital"],
                  ["Availability", "Senior Roles"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="eyebrow">{label}</dt>
                    <dd className="text-ink text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>

            <ScrollReveal delay={320} className="md:col-span-2 md:col-start-11">
              <a
                href="#projects"
                className="group relative inline-flex w-full items-center justify-between gap-3 border border-ink px-6 py-4 text-sm font-medium text-ink overflow-hidden"
              >
                <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-editorial" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                  Ver Proyectos
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="relative z-10 group-hover:text-background group-hover:translate-x-1 transition-all duration-500"
                />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section id="projects" className="section-padding scroll-mt-24">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-divider pb-6 mb-10 md:mb-14">
              <div>
                <p className="eyebrow mb-4">Selected Work</p>
                <h2 className="text-ink">Projects</h2>
              </div>
              <Link to="/work" className="arrow-link text-ink-muted hover:text-ink">
                All projects
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(0,15rem)] gap-4 md:gap-5">
            {bento.map((tile, index) => {
              const project = projectBySlug[tile.slug];
              if (!project) return null;
              return (
                <ScrollReveal
                  key={tile.slug}
                  delay={index * 90}
                  className={`${tile.span} md:h-full`}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className={`bento-tile group block h-full ${tile.ratio}`}
                  >
                    <img
                      src={projectImage(tile.image)}
                      alt={`${project.title} — ${project.category}`}
                      loading="lazy"
                      className="project-card-image absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    <div className="relative h-full flex flex-col justify-end p-5 md:p-7">
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-editorial">
                        {tile.tags.map((tag) => (
                          <span key={tag} className="eyebrow text-ink">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="text-ink">{project.title}</h3>
                        <span className="text-sm text-ink-muted shrink-0">{project.year}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="border-b border-divider pb-6 mb-12 md:mb-16">
              <p className="eyebrow mb-4">Approach</p>
              <h2 className="text-ink max-w-3xl">Three disciplines, one system.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="group h-full border-t border-ink pt-6">
                  <p className="eyebrow mb-6">{service.index}</p>
                  <h3 className="text-ink mb-4">{service.title}</h3>
                  <p className="text-ink-light text-base mb-6">{service.description}</p>
                  <ul className="space-y-2 border-t border-divider pt-4">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm text-ink-muted">
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

      {/* About & Experience */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: bio */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="eyebrow mb-4">About</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-ink mb-8">Bernardo Orozco</h2>
              </ScrollReveal>
              <ScrollReveal delay={140}>
                <div className="border border-divider bg-cream-dark p-8 md:p-10 mb-8">
                  <p className="font-display text-2xl md:text-3xl leading-tight text-ink tracking-[-0.03em]">
                    “I build visual systems that stay consistent long after the
                    project ends.”
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light mb-6">
                  Senior Brand &amp; Visual Designer with 8+ years helping startups
                  and growing companies build distinctive, scalable brands. I work
                  end to end: strategy, identity, packaging and the digital systems
                  that keep everything aligned.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={260}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/about" className="arrow-link text-ink">
                    More about my approach
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: timeline */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal>
                <p className="eyebrow mb-8">Experience</p>
              </ScrollReveal>
              <ol className="border-t border-divider">
                {timeline.map((item, index) => (
                  <ScrollReveal key={item.period} delay={index * 100}>
                    <li className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 border-b border-divider py-6 transition-colors duration-500 hover:bg-cream-dark">
                      <p className="sm:col-span-4 eyebrow pt-1">{item.period}</p>
                      <div className="sm:col-span-8">
                        <h3 className="text-ink text-lg md:text-xl mb-2">{item.role}</h3>
                        <p className="text-sm text-ink-muted">{item.detail}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>

              <ScrollReveal delay={200}>
                <p className="eyebrow mt-12 mb-6">Selected Clients</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-divider border border-divider">
                  {clients.map((client) => (
                    <li
                      key={client}
                      className="bg-background px-4 py-6 text-sm text-ink-light text-center"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-cream-dark scroll-mt-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-6">Contact</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-ink mb-8 max-w-2xl">
                  Open to senior brand &amp; design roles.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={140}>
                <a
                  href="mailto:boboteme@gmail.com"
                  className="editorial-link font-display text-2xl md:text-4xl text-ink tracking-[-0.03em] break-all"
                >
                  boboteme@gmail.com
                </a>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={200}>
                <p className="eyebrow mb-6">Elsewhere</p>
                <ul className="border-t border-divider">
                  {socials.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-b border-divider py-4 text-ink-light hover:text-ink transition-colors duration-300"
                      >
                        {social.name}
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/Bernardo_Orozco_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-divider px-6 py-4 text-sm font-medium text-ink hover:border-ink transition-colors duration-300"
                >
                  Download Portfolio
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
