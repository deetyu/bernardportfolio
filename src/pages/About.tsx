import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MaskReveal } from "@/components/shared/MaskReveal";

import portraitMain from "@/assets/portrait-main.jpg";

const expertise = [
  {
    title: "Identidad y estrategia de marca",
    description: "Clarificar el posicionamiento, la audiencia y la idea central de una marca para guiar su dirección visual.",
  },
  {
    title: "Embalaje y dirección de arte",
    description: "Traducir la identidad a embalaje, presentación de producto y dirección visual coherente.",
  },
  {
    title: "Campaña y diseño de marketing",
    description: "Adaptar sistemas de marca a campañas, contenido social, display, email y colateral de marketing.",
  },
  {
    title: "Impresos y aplicaciones de marca",
    description: "Extender la identidad a papelería, señalética, gráfica de eventos y materiales de marca con coherencia.",
  },
];

const contactLinks = [
  { name: "Email", href: "mailto:boboteme@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bernardo-orozco/" },
  { name: "Behance", href: "https://www.behance.net/btm20/" },
];

const tools = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "Figma",
  "After Effects",
  "Lightroom",
];

export default function About() {
  return (
    <Layout>
      {/* Introduction */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">Sobre mí</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink">
                <span className="block">Diseñando identidades</span>
                <MaskReveal delay={200}>
                  <span className="block font-serif italic">que crecen contigo.</span>
                </MaskReveal>
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portrait + narrative */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-cream-darker">
                <img
                  src={portraitMain}
                  alt="Bernardo Orozco — retrato"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={100}>
              <div className="max-w-2xl">
                <p className="text-lg md:text-xl text-ink-light leading-relaxed mb-6">
                  Soy Bernardo Orozco, diseñador gráfico con 8+ años de experiencia construyendo identidades de marca, sistemas visuales y embalaje para startups y empresas en crecimiento.
                </p>
                <p className="text-lg md:text-xl text-ink-light leading-relaxed mb-6">
                  Entiendo mi trabajo como una forma de aportar luz y orden. Me apasiona coger una idea que parece desordenada y transformarla en algo claro, coherente y con impacto visual. Para mí el diseño no es solo que algo "se vea bien", sino que cada tipografía, cada color y cada espacio tengan un sentido y ayuden a comunicar mejor.
                </p>
                <p className="text-lg md:text-xl text-ink-light leading-relaxed">
                  Trabajo entre estrategia, identidad, embalaje, digital y diseño de marketing — ayudando a las marcas a pasar de una dirección clara a una ejecución coherente en todos los puntos de contacto.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Experiencia</p>
            <h2 className="text-ink font-serif italic max-w-3xl">Experiencia construida entre disciplinas.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-base md:text-lg text-ink-light max-w-2xl">
              Desde 2022 llevo proyectos de branding y dirección visual de forma independiente a través de Orion Studio, colaborando directamente con fundadores en sistemas de identidad, embalaje y activos de comunicación.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-ink-light max-w-2xl">
              Antes trabajé en la industria de los esports creando gráfica para retransmisiones, contenido promocional y activos digitales para entornos competitivos en directo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="eyebrow mb-4">Experiencia</p>
            <h2 className="text-ink font-serif">Lo que hago</h2>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="draw-rule pt-6">
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-base text-ink-light leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={expertise.length * 80}>
              <div className="md:col-span-2">
                <p className="text-sm text-ink-muted">
                  8+ años en identidad de marca, sistemas visuales, embalaje, dirección de arte y diseño de marketing.
                </p>
              </div>
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

      {/* Contact and CV */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Contacto</p>
              <h2 className="font-serif italic text-ink">
                Construyamos algo con sentido.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-ink-light max-w-xl">
                Abierto a roles senior de marca y diseño visual donde pueda contribuir a construir sistemas de marca fuertes y escalables.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
                >
                  Contáctame
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <a
                  href="/Bernardo_Orozco_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-divider text-ink text-sm font-semibold hover:border-ink transition-colors duration-200"
                >
                  Descargar CV
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
