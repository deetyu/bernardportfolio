import type { ProjectSection } from "@/components/project/ProjectSections";

export interface CaseStudyContent {
  role: string;
  strategy?: { title: string; description: string };
  sections: ProjectSection[];
  delivered: string[];
  builtTo: string;
  note?: string;
}

export const caseStudies: Record<string, CaseStudyContent> = {
  "arya-cosmetics": {
    role: "Diseño de marca y dirección de arte",
    strategy: { title: "Ciencia, formación y belleza ética", description: "Un posicionamiento profesional que combina experiencia científica, estética y formación continua para profesionales de la belleza." },
    sections: [
      { group: "identidad", title: "Estructura geométrica, claridad y equilibrio", kicker: "Logo · Tipografía · Paleta", description: "Un monograma de doble 'A' construido alrededor de un eje central de simetría, con tipografía estructurada y una paleta contenida.", layout: "three", items: [{ image: "arya-identity", label: "Logo y monograma" }, { label: "Tipografía y paleta de color", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Variaciones del logo", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Sistema de etiquetas listo para imprimir", kicker: "Embalaje", description: "Una arquitectura visual compartida mantiene la gama de producto reconocible a través del embalaje y las etiquetas.", layout: "three", items: [{ image: "arya-packaging", label: "Gama de producto — visión general del embalaje" }, { label: "Diseño de etiqueta — anverso y reverso", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Detalles y acabados del embalaje", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Una tienda digital coherente", kicker: "E-commerce · Landing page", description: "La identidad llega a una experiencia de compra digital: hero, beneficios, gama, educación del producto y llamada a la action final.", layout: "three", items: [{ image: "arya-landing-pdf", label: "Landing page — desktop", caption: "Dirección digital — arte provisional" }, { label: "Landing page — móvil", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Página de detalle de producto", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "De la educación del producto a las campañas", kicker: "Social · Paid social · Email", description: "Contenido educativo, anuncios, testimonios y comunicación de campaña comparten un mismo sistema.", layout: "three", items: [{ image: "arya-social", label: "Social", caption: "Arte provisional" }, { image: "arya-paid", label: "Paid social", caption: "Arte provisional" }, { image: "arya-email", label: "Email", caption: "Arte provisional" }, { image: "cW04A", label: "Cartel de campaña — rutina de mañana" }] },
    ],
    delivered: ["Estrategia y posicionamiento de marca", "Sistema de identidad visual", "Sistema de embalaje y etiquetas", "Estrategia visual e-commerce", "Visuales de landing page", "Paid social", "Campaña de email", "Activos modulares de marca"],
    builtTo: "Crear un sistema visual coherente que pudiera moverse del embalaje a la tienda digital y la comunicación de marketing continua.",
  },
  sturio: {
    role: "Diseño de marca y sistemas visuales",
    strategy: { title: "Claridad a través de sistemas", description: "Un enfoque modular da a la marca un lenguaje visual más claro y flexible en contextos de negocio." },
    sections: [
      { group: "identidad", title: "Sistema de rejilla, construcción del logo y lenguaje visual", kicker: "Logo · Rejilla · Lenguaje visual", description: "Una 'S' geométrica construida sobre una rejilla estricta abstrae flujo, datos y transformación.", layout: "three", items: [{ image: "sturio-grid", label: "Construcción del logo y rejilla" }, { label: "Variaciones del logo", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Tipografía, paleta y sistema gráfico", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Un sistema para comunicación coherente", kicker: "Branding corporativo", description: "La identidad se extiende al colateral corporativo y las plataformas digitales sin perder su carácter estructurado.", layout: "three", items: [{ image: "sturio-corporate", label: "Visión general de identidad corporativa" }, { label: "Tarjeta de visita y papelería", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Plantilla de presentación", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Campaña de transformación digital", kicker: "Display", description: "Una exploración autogestionada adapta un sistema de comunicación a formatos horizontal, cuadrado y vertical.", layout: "three", items: [{ image: "sturio-display", label: "Campaña display — visual clave", caption: "Trabajo conceptual — no es una campaña en activo" }, { label: "Display — banner horizontal", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner vertical", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Una presencia digital más clara", kicker: "Web · LinkedIn · Infografía", description: "Las aplicaciones de landing hero y LinkedIn llevan la identidad a la comunicación de negocio, mientras el diseño de información hace el contenido técnico escaneable.", layout: "two", items: [{ image: "sturio-web", label: "Web — landing hero", caption: "Arte provisional" }, { image: "sturio-infographic-pdf", label: "Infografía — composición completa", caption: "Dirección visual alternativa" }, { label: "Banner de empresa en LinkedIn", ratio: "wide", caption: "Imagen propuesta — arte pendiente" }, { label: "Infografía — detalle", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Dirección de marca", "Sistema de identidad visual", "Branding corporativo", "Exploración de campaña display", "Landing hero", "Banner LinkedIn", "Infografía", "Activos de marketing y comunicación"],
    builtTo: "Mantener la claridad en comunicación corporativa, plataformas digitales y aplicaciones de marketing a través de un sistema visual estructurado.",
  },
  "ex-hacienda-de-cedros": {
    role: "Dirección de arte y sistemas de marca",
    strategy: { title: "El patrimonio como fundamento visual", description: "La identidad toma su dirección del carácter físico y el patrimonio de la hacienda en lugar de imponer una estética ajena." },
    sections: [
      { group: "identidad", title: "Cedro, patrimonio y hospitalidad", kicker: "Logo · Tipografía", description: "El cedro es el elemento central. Las ramas circulares sugieren unidad y patrimonio, mientras la tipografía caligráfica aporta elegancia y hospitalidad.", layout: "three", items: [{ image: "hacienda-identity", label: "Logo y símbolo del cedro" }, { label: "Tipografía y paleta de color", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Variaciones del logo", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Una marca diseñada para el entorno físico", kicker: "Papelería · Señalética · Hospitalidad", description: "La identidad entra en la experiencia del lugar a través de papelería, colateral de hospitalidad y señalética in situ.", layout: "three", items: [{ image: "hacienda-signage", label: "Señalética — aplicación en la propiedad" }, { label: "Set de papelería", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Colateral de hospitalidad", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Extendiendo la identidad a las experiencias", kicker: "Eventos · Marketing", description: "El contenido de marketing y el colateral de eventos extienden el mismo lenguaje visual a toda la comunicación del destino.", layout: "three", items: [{ image: "hacienda-marketing", label: "Marketing — visual clave", caption: "Arte provisional" }, { label: "Invitación de evento", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Folleto de evento", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Dirección de marca", "Sistema de identidad visual", "Activos de marketing", "Papelería", "Señalética", "Colateral de eventos", "Dirección de arte"],
    builtTo: "Crear una presencia visual refinada y coherente en marketing, digital y aplicaciones in situ manteniendo la conexión con el carácter de la hacienda.",
  },
  girasolia: {
    role: "Diseño de marca e identidad visual",
    strategy: { title: "Una flor, muchas expresiones", description: "Un sistema visual construido alrededor del girasol como elemento reconocible, permitiendo a la identidad adaptarse entre contenido cotidiano y comunicación de campaña." },
    sections: [
      { group: "identidad", title: "Girasol, tipografía expresiva y paleta cálida", kicker: "Logo · Guías", description: "Un girasol estilizado y tipografía expresiva dan a la marca floral una base distintiva, construida alrededor de 'Flores que iluminan tus momentos.'", layout: "three", items: [{ image: "girasolia-identity", label: "Logo y símbolo del girasol" }, { image: "girasolia-guidelines", label: "Guías de marca" }, { label: "Tipografía y paleta de color", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Un lenguaje visual, seis necesidades de contenido", kicker: "Plantillas social", description: "Formatos modulares para producto, estacional, lifestyle, eventos, patrones y citas.", layout: "three", items: [{ image: "girasolia-social", label: "Plantillas social — visión general", caption: "Arte provisional" }, { label: "Posts de producto y estacionales", ratio: "square", caption: "Imagen propuesta — arte pendiente" }, { label: "Stories — eventos y lifestyle", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Una forma más luminosa de decirlo", kicker: "Paid social · Sistema de campaña", description: "Direcciones centradas en producto, mensaje y beneficio exploran cómo una campaña se adapta a paid social, CRM e impresos.", layout: "three", items: [{ image: "girasolia-campaign", label: "Campaña — visual clave", caption: "Trabajo conceptual — arte provisional" }, { label: "Paid social — feed", ratio: "square", caption: "Imagen propuesta — arte pendiente" }, { label: "Paid social — stories", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Adaptaciones digitales de campaña", kicker: "Display · Web", layout: "three", items: [{ label: "Display — banner horizontal", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner vertical", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Web — landing page de campaña", caption: "Imagen propuesta — arte pendiente" }] },
      { group: "aplicaciones", title: "Del buzón a los puntos de contacto físicos", kicker: "Email · Impresos · Mercancía", description: "Las direcciones de email se extienden a impresos y objetos de marca, manteniendo el mismo mensaje e identidad.", layout: "three", items: [{ image: "girasolia-email", label: "Email — dirección de campaña", caption: "Arte provisional" }, { image: "girasolia-print", label: "Impresos — aplicación de campaña", caption: "Arte provisional" }, { image: "girasolia-merchandise", label: "Mercancía", caption: "Arte provisional" }, { label: "Email — dirección de producto", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner horizontal", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner vertical", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Dirección de marca", "Identidad visual y sistema de logo", "Guías de marca", "Plantillas social", "Exploración de campaña paid social", "Sistema de campaña", "Email", "Aplicaciones impresas", "Mercancía"],
    builtTo: "Apoyar contenido social cotidiano junto con campaña, CRM y aplicaciones físicas a través de un sistema de comunicación flexible.",
    note: "Las extensiones de campaña son exploraciones; el arte provisional se identifica junto a cada aplicación.",
  },
  "flowers-campaign": {
    role: "Diseño de campaña y dirección de arte",
    strategy: { title: "Una campaña, múltiples expresiones", description: "Extender la identidad del girasol de Girasolía a comunicación centrada en producto, mensaje y beneficio sin crear una marca distinta para cada canal." },
    sections: [
      { title: "Una forma más luminosa de decirlo", kicker: "Paid social", description: "Tres direcciones de campaña exploran un mensaje coherente a través de composiciones de producto, emocionales y de beneficio.", layout: "two", items: [{ image: "girasolia-paid", label: "Paid social — visión general de campaña", caption: "Exploración de campaña autogestionada" }, { label: "Anuncio centrado en producto", ratio: "square", caption: "Imagen propuesta — arte pendiente" }, { label: "Anuncio centrado en mensaje", ratio: "square", caption: "Imagen propuesta — arte pendiente" }, { label: "Anuncio centrado en beneficio", ratio: "square", caption: "Imagen propuesta — arte pendiente" }] },
      { title: "Dos direcciones del mismo sistema", kicker: "Email · CRM", description: "Los layouts de email de campaña y de producto comparten el lenguaje visual de la identidad mientras sirven necesidades de comunicación distintas.", layout: "two", items: [{ image: "girasolia-email", label: "Email — dirección de campaña", caption: "Arte provisional" }, { label: "Email — dirección de producto", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { title: "La campaña más allá de la pantalla", kicker: "Impresos · Display", description: "Las aplicaciones impresas y los conceptos display adaptan el visual clave y la llamada a la acción a diferentes formatos.", layout: "three", items: [{ image: "girasolia-print", label: "Impresos — aplicación de campaña", caption: "Arte provisional" }, { label: "Display — banner horizontal", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner vertical", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Direcciones de campaña", "Conceptos paid social", "Layouts de email", "Conceptos display", "Adaptaciones impresas"],
    builtTo: "Mantener la campaña reconocible en comunicación digital, paid, CRM y física.",
    note: "Exploración de campaña basada en la identidad de Girasolía; no reporta rendimiento de campaña en activo.",
  },
  "arya-digital": {
    role: "Diseño digital y dirección de arte",
    strategy: { title: "De la identidad a la educación del producto", description: "Llevar el posicionamiento profesional de skincare de AR·YA a una tienda que presente la gama con claridad y coherencia." },
    sections: [
      { title: "Un nuevo ritual para la piel cotidiana", kicker: "Landing page", description: "Una secuencia de página completa va del hero de la colección a beneficios, gama de producto y educación hasta una llamada a la acción final, con adaptaciones desktop y móvil.", layout: "three", items: [{ image: "arya-landing-pdf", label: "Landing page — desktop", caption: "Arte provisional" }, { label: "Landing page — móvil", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Página de detalle de producto", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }] },
      { title: "Una identidad en todo el recorrido de compra", kicker: "E-commerce", description: "La tipografía estructurada y la presentación coherente del producto conectan la tienda con el sistema de embalaje.", layout: "three", items: [{ image: "arya-identity", label: "Logo y monograma" }, { image: "arya-packaging", label: "Gama de producto — visión general del embalaje" }, { label: "Tipografía y paleta de color", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Variaciones del logo", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Diseño de etiqueta — anverso y reverso", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Detalles y acabados del embalaje", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Estructura de landing page", "Dirección desktop y móvil", "Estrategia visual e-commerce", "Presentación de producto"],
    builtTo: "Conectar embalaje, educación del producto y tienda digital a través de un sistema visual reconocible.",
    note: "Dirección digital mostrada con arte provisional; no se claiman resultados de conversión.",
  },
  "sturio-marketing": {
    role: "Diseño de marketing y diseño de información",
    strategy: { title: "Hacer el contenido técnico más claro", description: "Usar la identidad modular de Sturio para organizar información compleja para audiencias de negocio." },
    sections: [
      { title: "La anatomía de un ecosistema digital", kicker: "Infografía", description: "Una exploración de diseño de información editorial organiza estrategia, tecnología, experiencia y rendimiento a través de layouts modulares y jerarquía clara.", layout: "two", items: [{ image: "sturio-infographic-pdf", label: "Infografía — composición completa", caption: "Dirección visual alternativa" }, { label: "Infografía — detalle", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
      { title: "Un mensaje en todos los puntos de contacto", kicker: "Display · LinkedIn · Web", description: "Formatos display, un landing hero y un banner de empresa en LinkedIn demuestran cómo la identidad se adapta a la comunicación de marketing cotidiana.", layout: "three", items: [{ image: "sturio-display", label: "Campaña display — visual clave", caption: "Concepto autogestionado" }, { image: "sturio-web", label: "Web — landing hero", caption: "Arte provisional del portfolio" }, { label: "Display — banner horizontal", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Display — banner vertical", ratio: "portrait", caption: "Imagen propuesta — arte pendiente" }, { label: "Banner de empresa en LinkedIn", ratio: "wide", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Dirección de infografía", "Exploración de campaña display", "Landing hero", "Banner LinkedIn", "Layouts de marketing"],
    builtTo: "Mantener consistencia visual mientras se hace la comunicación técnica más fácil de escanear y entender.",
  },
  "craft-studio": {
    role: "Dirección de marca y diseño de colateral",
    sections: [
      { title: "Una gama de productos hechos a mano reconocible", kicker: "Amigurumi", description: "La presentación de producto da a cada personaje hecho a mano su propio espacio dentro de una dirección de marca coherente.", layout: "three", items: [{ image: "amigurumi-hero", label: "Ficha de producto — visión general de la colección" }, { image: "hew1a", label: "Ficha de producto — Lucy la Coneja" }, { image: "JjGEa", label: "Cartel de marca — hecho a mano en México" }] },
      { title: "Pequeños detalles, identidad coherente", kicker: "Impresos · Insertos de embalaje", description: "Tarjetas, nota de agradecimiento y guía de cuidados llevan el mismo lenguaje visual a la experiencia física del cliente.", layout: "three", items: [{ image: "amigurumi-collateral", label: "Colateral — visión general de la colección" }, { image: "fLm6o", label: "Guía de cuidados" }, { image: "PUsiK", label: "Tarjeta de agradecimiento" }] },
    ],
    delivered: ["Dirección de marca", "Ficha de producto", "Tarjetas y nota de agradecimiento", "Etiqueta adhesiva", "Guía de cuidados"],
    builtTo: "Dar a los productos hechos a mano una presentación coherente de la ficha de producto al embalaje y posventa.",
  },
  "selected-marks": {
    role: "Refinamiento de logo y precisión vectorial",
    sections: [
      { title: "Reconocimiento, redibujado con precisión", kicker: "Marcas seleccionadas", description: "Una selección de redibujos de logos, recreaciones vectoriales y refinamientos en joyería, arquitectura, ecología, mascotas, alimentación y servicios del hogar.", layout: "three", items: [{ image: "marks-hero", label: "Marcas seleccionadas — visión general" }, { label: "Marca individual — joyería", ratio: "square", caption: "Imagen propuesta — arte pendiente" }, { label: "Marca individual — hospitalidad", ratio: "square", caption: "Imagen propuesta — arte pendiente" }] },
      { title: "Construido para escalar", kicker: "Refinamiento · Adaptación", description: "Cada refinamiento preserva el reconocimiento mientras mejora la claridad y escalabilidad para aplicaciones digitales e impresas.", layout: "three", items: [{ image: "marks-detail-1", label: "Logotipo — versión refinada" }, { image: "marks-detail-2", label: "Precisión vectorial" }, { label: "Comparación de marca original y refinada", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] },
    ],
    delivered: ["Redibujos de logo", "Recreaciones vectoriales", "Refinamiento de logotipo", "Adaptaciones de identidad"],
    builtTo: "Modernizar identidades existentes y adaptar marcas heredadas a aplicaciones contemporáneas sin perder reconocimiento.",
  },
  "consumer-product": {
    role: "Diseño de embalaje y producción de impresión",
    sections: [{ title: "Una arquitectura de etiqueta, múltiples variantes", kicker: "Embalaje · Retail", description: "Una estructura tipográfica compartida y bandas de color por variante exploran una presencia coherente en estante para una gama artesanal.", layout: "two", items: [{ image: "salsa-packaging", label: "Embalaje — visión general de la gama", caption: "Proyecto placeholder — pendiente de arte original y detalles del proyecto" }, { label: "Etiqueta — anverso y reverso", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Sistema de variantes de sabor", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }, { label: "Troquel y especificaciones de impresión", ratio: "landscape", caption: "Imagen propuesta — arte pendiente" }] }],
    delivered: ["Concepto de arquitectura de etiquetas", "Concepto de sistema de variantes", "Dirección de embalaje"],
    builtTo: "Equilibrar consistencia de gama y reconocimiento de variantes en un concepto de embalaje orientado a producción.",
    note: "Este proyecto sigue siendo placeholder: el PDF suministrado no incluye sus detalles de caso de estudio.",
  },
};
