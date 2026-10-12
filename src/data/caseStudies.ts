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
    role: "Brand Design & Art Direction",
    strategy: { title: "Science, education and ethical beauty", description: "A professional positioning combining scientific expertise, aesthetics and continuous education for beauty professionals." },
    sections: [
      { group: "identity", title: "Geometric structure, clarity and balance", kicker: "Logo · Typography · Palette", description: "A double ‘A’ monogram built around a central axis of symmetry, supported by structured typography and a restrained palette.", layout: "three", items: [{ image: "arya-identity", label: "Logo & monogram" }, { label: "Typography & color palette", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Logo variations", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "Print-ready label system", kicker: "Packaging", description: "A shared visual architecture keeps the product range recognizable across packaging and label applications.", layout: "three", items: [{ image: "arya-packaging", label: "Product range — packaging overview" }, { label: "Label design — front & back", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Packaging details & finishes", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "A consistent digital storefront", kicker: "E-commerce · Landing page", description: "The identity carries into a digital shopping experience: hero, benefits, range, product education and a closing call to action.", layout: "three", items: [{ image: "arya-landing-pdf", label: "Landing page — desktop", caption: "Digital direction — provisional artwork" }, { label: "Landing page — mobile", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "Product detail page", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "From product education to campaigns", kicker: "Social · Paid social · Email", description: "Educational content, announcements, testimonials and product-focused campaign communication share one system.", layout: "three", items: [{ image: "arya-social", label: "Social", caption: "Provisional artwork" }, { image: "arya-paid", label: "Paid social", caption: "Provisional artwork" }, { image: "arya-email", label: "Email", caption: "Provisional artwork" }] },
    ],
    delivered: ["Brand strategy & positioning", "Visual identity system", "Packaging & label system", "E-commerce visual strategy", "Landing page visuals", "Paid social", "Email campaign", "Modular brand assets"],
    builtTo: "Create a consistent visual system that could move from packaging to a digital storefront and ongoing marketing communication.",
  },
  sturio: {
    role: "Brand Design & Visual Systems",
    strategy: { title: "Clarity through systems", description: "A modular approach gives the brand a clearer and more flexible visual language across business contexts." },
    sections: [
      { group: "identity", title: "Grid system, logo construction and visual language", kicker: "Logo · Grid · Visual language", description: "A geometric ‘S’ constructed on a strict grid abstracts flow, data and transformation.", layout: "three", items: [{ image: "sturio-grid", label: "Logo construction & grid" }, { label: "Logo variations", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Typography, palette & graphic system", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "A system for consistent communication", kicker: "Corporate branding", description: "The identity extends into corporate collateral and digital platforms without losing its structured character.", layout: "three", items: [{ image: "sturio-corporate", label: "Corporate identity overview" }, { label: "Business card & stationery", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Presentation template", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "Digital transformation campaign", kicker: "Display", description: "A self-initiated exploration adapts one communication system across horizontal, square and vertical display formats.", layout: "three", items: [{ image: "sturio-display", label: "Display campaign — key visual", caption: "Concept work — not a live campaign" }, { label: "Display — horizontal banner", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Display — vertical banner", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "A clearer digital presence", kicker: "Web · LinkedIn · Infographic", description: "Landing-hero and LinkedIn applications carry the identity into business communication, while information design makes technical content scannable.", layout: "two", items: [{ image: "sturio-web", label: "Website — landing hero", caption: "Provisional artwork" }, { image: "sturio-infographic-pdf", label: "Infographic — full composition", caption: "Alternate visual direction" }, { label: "LinkedIn company banner", ratio: "wide", caption: "Proposed image — artwork pending" }, { label: "Infographic — detail", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Brand direction", "Visual identity system", "Corporate branding", "Display campaign exploration", "Landing hero", "LinkedIn banner", "Infographic", "Marketing & communication assets"],
    builtTo: "Maintain clarity across corporate communication, digital platforms and marketing applications through one structured visual system.",
  },
  "ex-hacienda-de-cedros": {
    role: "Art Direction & Brand Systems",
    strategy: { title: "Heritage as a visual foundation", description: "The identity takes its direction from the physical character and heritage of the hacienda rather than imposing an unrelated aesthetic." },
    sections: [
      { group: "identity", title: "Cedar tree, heritage and hospitality", kicker: "Logo · Typography", description: "The cedar tree is the central element. Circular branches suggest unity and heritage, while calligraphic typography introduces elegance and hospitality.", layout: "three", items: [{ image: "hacienda-identity", label: "Logo & cedar-tree symbol" }, { label: "Typography & color palette", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Logo variations", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "A brand designed for the physical environment", kicker: "Stationery · Signage · Hospitality", description: "The identity moves into the experience of the property through stationery, hospitality collateral and on-site signage.", layout: "three", items: [{ image: "hacienda-signage", label: "Signage — property application" }, { label: "Stationery suite", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Hospitality collateral", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "Extending the identity across experiences", kicker: "Events · Marketing", description: "Marketing content and event collateral extend the same visual language across the destination’s communication.", layout: "three", items: [{ image: "hacienda-marketing", label: "Marketing — key visual", caption: "Provisional artwork" }, { label: "Event invitation", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "Event brochure", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Brand direction", "Visual identity system", "Marketing assets", "Stationery", "Signage", "Event collateral", "Art direction"],
    builtTo: "Create a refined and consistent visual presence across marketing, digital and on-site applications while remaining connected to the character of the hacienda.",
  },
  girasolia: {
    role: "Brand Design & Visual Identity",
    strategy: { title: "One flower, many expressions", description: "A visual system built around the sunflower as a recognizable element, allowing the identity to adapt across everyday content and campaign communication." },
    sections: [
      { group: "identity", title: "Sunflower, expressive type and a warm palette", kicker: "Logo · Guidelines", description: "A stylized sunflower and expressive typography give the floral brand a distinctive foundation, built around ‘Flores que iluminan tus momentos.’", layout: "three", items: [{ image: "girasolia-identity", label: "Logo & sunflower symbol" }, { image: "girasolia-guidelines", label: "Brand guidelines" }, { label: "Typography & color palette", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "One visual language, six content needs", kicker: "Social templates", description: "Modular formats support product, seasonal, lifestyle, event, pattern and quote content.", layout: "three", items: [{ image: "girasolia-social", label: "Social templates — overview", caption: "Provisional artwork" }, { label: "Product & seasonal posts", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Stories — event & lifestyle", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "A brighter way to say it", kicker: "Paid social · Campaign system", description: "Product-, message- and benefit-focused directions explore how one campaign adapts across paid social, CRM and print.", layout: "three", items: [{ image: "girasolia-campaign", label: "Campaign — key visual", caption: "Concept work — provisional artwork" }, { label: "Paid social — feed", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Paid social — stories", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "Digital campaign adaptations", kicker: "Display · Web", layout: "three", items: [{ label: "Display — horizontal banner", caption: "Proposed image — artwork pending" }, { label: "Display — vertical banner", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "Website — campaign landing page", caption: "Proposed image — artwork pending" }] },
      { group: "applications", title: "From inbox to physical touchpoints", kicker: "Email · Print · Merchandise", description: "Email directions extend into print and branded objects, keeping the same message and identity.", layout: "three", items: [{ image: "girasolia-email", label: "Email — campaign direction", caption: "Provisional artwork" }, { image: "girasolia-print", label: "Print — campaign application", caption: "Provisional artwork" }, { image: "girasolia-merchandise", label: "Merchandise", caption: "Provisional artwork" }, { label: "Email — product direction", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "Display — horizontal banner", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Display — vertical banner", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Brand direction", "Visual identity & logo system", "Brand guidelines", "Social media templates", "Paid social campaign exploration", "Campaign system", "Email", "Print applications", "Merchandise"],
    builtTo: "Support everyday social content alongside campaign, CRM and physical applications through a flexible communication system.",
    note: "Campaign extensions are explorations; provisional artwork is identified alongside each application.",
  },
  "flowers-campaign": {
    role: "Campaign Design & Art Direction",
    strategy: { title: "One campaign, multiple expressions", description: "Extend Girasolía’s sunflower-led identity into product-, message- and benefit-focused communication without creating a different brand for each channel." },
    sections: [
      { title: "A brighter way to say it", kicker: "Paid social", description: "Three campaign directions explore a consistent message through product, emotional and benefit-led compositions.", layout: "two", items: [{ image: "girasolia-paid", label: "Paid social — campaign overview", caption: "Self-initiated campaign exploration" }, { label: "Product-led ad", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Message-led ad", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Benefit-led ad", ratio: "square", caption: "Proposed image — artwork pending" }] },
      { title: "Two directions from the same system", kicker: "Email · CRM", description: "Campaign and product email layouts share the identity’s visual language while serving different communication needs.", layout: "two", items: [{ image: "girasolia-email", label: "Email — campaign direction", caption: "Provisional artwork" }, { label: "Email — product direction", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { title: "The campaign beyond the screen", kicker: "Print · Display", description: "Print applications and display concepts adapt the key visual and call to action to different formats.", layout: "three", items: [{ image: "girasolia-print", label: "Print — campaign application", caption: "Provisional artwork" }, { label: "Display — horizontal banner", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Display — vertical banner", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Campaign directions", "Paid social concepts", "Email layouts", "Display concepts", "Print adaptations"],
    builtTo: "Keep the campaign recognizable across digital, paid, CRM and physical communication.",
    note: "Campaign exploration based on the Girasolía identity; not a report of live campaign performance.",
  },
  "arya-digital": {
    role: "Digital Design & Art Direction",
    strategy: { title: "From identity to product education", description: "Carry AR·YA’s professional skincare positioning into a storefront that presents the range clearly and consistently." },
    sections: [
      { title: "A new ritual for everyday skin", kicker: "Landing page", description: "A full-page sequence moves from the collection hero through benefits, product range and education to a closing call to action, with desktop and mobile adaptations.", layout: "three", items: [{ image: "arya-landing-pdf", label: "Landing page — desktop", caption: "Provisional artwork" }, { label: "Landing page — mobile", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "Product detail page", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
      { title: "One identity across the shopping journey", kicker: "E-commerce", description: "Structured typography and consistent product presentation connect the storefront to the packaging system.", layout: "three", items: [{ image: "arya-identity", label: "Logo & monogram" }, { image: "arya-packaging", label: "Product range — packaging overview" }, { label: "Typography & color palette", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Logo variations", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Label design — front & back", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Packaging details & finishes", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Landing page structure", "Desktop and mobile direction", "E-commerce visual strategy", "Product presentation"],
    builtTo: "Connect packaging, product education and the digital storefront through one recognizable visual system.",
    note: "Digital direction shown with provisional artwork; no conversion results are claimed.",
  },
  "sturio-marketing": {
    role: "Marketing Design & Information Design",
    strategy: { title: "Making technical content clearer", description: "Use the modular Sturio identity to organize complex information for business audiences." },
    sections: [
      { title: "The anatomy of a digital ecosystem", kicker: "Infographic", description: "An editorial information-design exploration organizes strategy, technology, experience and performance through modular layouts and clear hierarchy.", layout: "two", items: [{ image: "sturio-infographic-pdf", label: "Infographic — full composition", caption: "Alternate visual direction" }, { label: "Infographic — detail", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { title: "One message across business touchpoints", kicker: "Display · LinkedIn · Web", description: "Display formats, a landing hero and a LinkedIn company banner demonstrate how the identity adapts to everyday marketing communication.", layout: "three", items: [{ image: "sturio-display", label: "Display campaign — key visual", caption: "Self-initiated concept" }, { image: "sturio-web", label: "Website — landing hero", caption: "Provisional artwork from the portfolio" }, { label: "Display — horizontal banner", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Display — vertical banner", ratio: "portrait", caption: "Proposed image — artwork pending" }, { label: "LinkedIn company banner", ratio: "wide", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Infographic direction", "Display campaign exploration", "Landing hero", "LinkedIn company banner", "Marketing layouts"],
    builtTo: "Maintain visual consistency while making technical communication easier to scan and understand.",
  },
  "craft-studio": {
    role: "Brand Direction & Collateral Design",
    sections: [
      { title: "A recognizable handmade-goods range", kicker: "Amigurumi", description: "Product presentation gives each handmade character its own space within a consistent brand direction.", layout: "two", items: [{ image: "amigurumi-hero", label: "Product sheet — Lucy the Bunny" }, { label: "Product photography — character detail", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
      { title: "Small details, consistent identity", kicker: "Print · Packaging inserts", description: "Cards, a thank-you note, sticker labels and a care guide bring the same visual language into the customer’s physical experience.", layout: "two", items: [{ image: "amigurumi-collateral", label: "Collateral — collection overview" }, { label: "Business card & thank-you note", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Sticker label", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Care guide", ratio: "portrait", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Brand direction", "Product sheet", "Cards & thank-you note", "Sticker label", "Care guide"],
    builtTo: "Give handmade products a consistent presentation from product sheet to packaging and aftercare.",
  },
  "selected-marks": {
    role: "Logo Refinement & Vector Precision",
    sections: [
      { title: "Recognition, redrawn with precision", kicker: "Selected marks", description: "A selection of logo redraws, vector recreations and refinements across jewelry, architecture, ecology, pet care, food and home services.", layout: "three", items: [{ image: "marks-hero", label: "Selected marks — overview" }, { label: "Individual mark — jewelry", ratio: "square", caption: "Proposed image — artwork pending" }, { label: "Individual mark — hospitality", ratio: "square", caption: "Proposed image — artwork pending" }] },
      { title: "Built to scale", kicker: "Refinement · Adaptation", description: "Each refinement preserves recognition while improving clarity and scalability for digital and print applications.", layout: "three", items: [{ image: "marks-detail-1", label: "Logotype — refined version" }, { image: "marks-detail-2", label: "Vector precision" }, { label: "Original & refined mark comparison", ratio: "landscape", caption: "Proposed image — artwork pending" }] },
    ],
    delivered: ["Logo redraws", "Vector recreations", "Logotype refinement", "Identity adaptations"],
    builtTo: "Modernize existing identities and adapt legacy marks for contemporary applications without losing recognition.",
  },
  "consumer-product": {
    role: "Packaging Design & Print Production",
    sections: [{ title: "One label architecture, multiple variants", kicker: "Packaging · Retail", description: "A shared typographic structure and variant color bands explore a consistent shelf presence for a small-batch food range.", layout: "two", items: [{ image: "salsa-packaging", label: "Packaging — range overview", caption: "Placeholder project — awaiting original artwork and project details" }, { label: "Label — front & back", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Flavor variant system", ratio: "landscape", caption: "Proposed image — artwork pending" }, { label: "Dieline & print specifications", ratio: "landscape", caption: "Proposed image — artwork pending" }] }],
    delivered: ["Label architecture concept", "Variant system concept", "Packaging direction"],
    builtTo: "Balance range consistency and variant recognition in a production-minded packaging concept.",
    note: "This project remains a placeholder: the supplied PDF does not include its case-study details.",
  },
};
