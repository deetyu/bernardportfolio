import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Estrategia de marca",
    description: "Posicionamiento, definición de audiencia y marcos de mensaje que dan a tu marca una dirección clara antes de empezar a diseñar.",
    deliverables: ["Posicionamiento de marca", "Auditoría competitiva", "Mapeo de audiencia", "Narrativa de marca"],
  },
  {
    number: "02",
    title: "Identidad visual",
    description: "Sistemas de logo distintivos, tipografía, color y reglas de aplicación construidos para escalar en cada canal.",
    deliverables: ["Suite de logo", "Sistema tipográfico", "Paleta de color", "Guías de marca"],
  },
  {
    number: "03",
    title: "Diseño de embalaje",
    description: "Sistemas de embalaje que comunican calidad y presencia en estante manteniéndose fieles al posicionamiento de marca.",
    deliverables: ["Conceptos de embalaje", "Sistemas de etiquetas", "Archivos listos para producción", "Mockups"],
  },
  {
    number: "04",
    title: "Dirección de arte",
    description: "Dirección creativa para fotografía, campañas y contenido digital que mantiene tu marca visualmente coherente.",
    deliverables: ["Dirección de campaña", "Briefs de fotografía", "Plantillas social", "Activos de lanzamiento"],
  },
  {
    number: "05",
    title: "Activos de marketing",
    description: "Plantillas y colateral que tu equipo puede usar con confianza, desde presentaciones hasta sistemas de contenido social.",
    deliverables: ["Plantillas social", "Presentaciones", "Colateral impreso", "Anuncios digitales"],
  },
  {
    number: "06",
    title: "Refinamiento de marca",
    description: "Modernizar una identidad existente sin perder reconocimiento — desde redibujos vectoriales hasta actualizaciones completas del sistema.",
    deliverables: ["Refinamiento de logo", "Recreación vectorial", "Actualizaciones de sistema", "Reglas de uso"],
  },
];

const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description: "Definimos el problema, la audiencia y los objetivos. Reviso referencias, competidores y materiales existentes para entender a dónde necesita llegar la marca.",
  },
  {
    step: "02",
    title: "Estrategia",
    description: "Posicionamiento, narrativa y dirección creativa se alinean en un brief claro que guía cada decisión de diseño.",
  },
  {
    step: "03",
    title: "Diseño",
    description: "Los conceptos se desarrollan y refinan en un sistema de identidad coherente, con espacio para feedback e iteración.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Los activos finales, guías y plantillas se empaquetan para que tu equipo implemente la marca con confianza.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Servicios</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl mb-8">
              <span className="block">Sistemas de marca</span>
              <span className="block font-serif italic">construidos para durar.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-ink-light max-w-2xl">
              Ayudo a startups y negocios en crecimiento a pasar de la estrategia a la implementación con identidades que se mantienen coherentes en embalaje, digital y marketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">Lo que ofrezco</p>
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
            <p className="eyebrow mb-16 md:mb-20">Proceso</p>
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
                <span className="block">¿List@ para construir</span>
                <span className="block font-serif italic">tu marca?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Cuéntame tu proyecto y encontraremos la forma adecuada de trabajar juntos.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Empezar un proyecto
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
