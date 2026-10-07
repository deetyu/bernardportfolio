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
      { title: "Geometric structure, clarity and balance", kicker: "Identity", description: "A double ‘A’ monogram built around a central axis of symmetry, supported by structured typography and a restrained palette.", layout: "two", items: [{ image: "arya-detail-1", label: "Visual identity" }, { image: "arya-detail-2", label: "Brand applications" }] },
      { title: "Print-ready label system", kicker: "Packaging", description: "A shared visual architecture keeps the product range recognizable across packaging and label applications.", layout: "single", items: [{ image: "arya-hero", label: "Product applications" }] },
      { title: "A consistent digital storefront", kicker: "E-commerce · Landing page", description: "Product presentation and landing-page visuals carry the identity into a digital shopping experience: hero, benefits, range, product education and a closing call to action.", layout: "single", items: [{ image: "arya-landing", label: "Landing page", caption: "Digital direction — provisional artwork" }] },
      { title: "From product education to campaigns", kicker: "Social · Paid social · Email", description: "The system supports educational content, product announcements, usage stories, testimonials, courses and community posts, alongside product-focused campaign communication.", layout: "single", items: [{ image: "arya-social", label: "Social and campaign applications", caption: "Provisional artwork from the portfolio" }] },
    ],
    delivered: ["Brand strategy & positioning", "Visual identity system", "Packaging & label system", "E-commerce visual strategy", "Landing page visuals", "Paid social", "Email campaign", "Modular brand assets"],
    builtTo: "Create a consistent visual system that could move from packaging to a digital storefront and ongoing marketing communication.",
  },
  sturio: {
    role: "Brand Design & Visual Systems",
    strategy: { title: "Clarity through systems", description: "A modular approach gives the brand a clearer and more flexible visual language across business contexts." },
    sections: [
      { title: "Grid system, logo construction and visual language", kicker: "Identity", description: "A geometric ‘S’ constructed on a strict grid abstracts flow, data and transformation.", layout: "two", items: [{ image: "sturio-detail-1", label: "Logo construction" }, { image: "sturio-detail-2", label: "Visual system" }] },
      { title: "A system for consistent communication", kicker: "Corporate branding", description: "The identity extends into corporate collateral and digital platforms without losing its structured character.", layout: "single", items: [{ image: "sturio-hero", label: "Corporate applications" }] },
      { title: "Digital transformation campaign", kicker: "Display", description: "A self-initiated campaign exploration adapts one communication system across horizontal, square and vertical display formats.", layout: "single", items: [{ image: "sturio-display", label: "Display campaign exploration", caption: "Concept work — not a live campaign" }] },
      { title: "A clearer digital presence", kicker: "Web · LinkedIn · Infographic", description: "Landing-hero and LinkedIn applications carry the identity into business communication. Information design translates strategy, technology, experience and performance into a scannable editorial structure.", layout: "two", items: [{ image: "sturio-web", label: "Web and LinkedIn", caption: "Provisional artwork from the portfolio" }, { image: "sturio-infographic", label: "Infographic", caption: "Alternate visual direction" }] },
    ],
    delivered: ["Brand direction", "Visual identity system", "Corporate branding", "Display campaign exploration", "Landing hero", "LinkedIn banner", "Infographic", "Marketing & communication assets"],
    builtTo: "Maintain clarity across corporate communication, digital platforms and marketing applications through one structured visual system.",
  },
  "ex-hacienda-de-cedros": {
    role: "Art Direction & Brand Systems",
    strategy: { title: "Heritage as a visual foundation", description: "The identity takes its direction from the physical character and heritage of the hacienda rather than imposing an unrelated aesthetic." },
    sections: [
      { title: "Cedar tree, heritage and hospitality", kicker: "Identity", description: "The cedar tree becomes the central visual element. Circular branches suggest unity and heritage, while calligraphic typography introduces elegance and hospitality.", layout: "single", items: [{ image: "hacienda-detail-1", label: "Visual identity" }] },
      { title: "A brand designed for the physical environment", kicker: "Stationery · Signage", description: "The identity moves into the experience of the property through stationery, hospitality collateral and on-site signage.", layout: "two", items: [{ image: "hacienda-hero", label: "Hospitality applications" }, { image: "hacienda-detail-2", label: "Stationery and signage" }] },
      { title: "Extending the identity across experiences", kicker: "Events · Marketing", description: "Marketing content and event collateral extend the same visual language across the destination’s communication.", layout: "single", items: [{ image: "hacienda-marketing", label: "Marketing applications", caption: "Provisional artwork from the portfolio" }] },
    ],
    delivered: ["Brand direction", "Visual identity system", "Marketing assets", "Stationery", "Signage", "Event collateral", "Art direction"],
    builtTo: "Create a refined and consistent visual presence across marketing, digital and on-site applications while remaining connected to the character of the hacienda.",
  },
  girasolia: {
    role: "Brand Design & Visual Identity",
    strategy: { title: "One flower, many expressions", description: "A visual system built around the sunflower as a recognizable element, allowing the identity to adapt across everyday content and campaign communication." },
    sections: [
      { title: "Sunflower, expressive type and a warm palette", kicker: "Identity", description: "A stylized sunflower and expressive typography give the floral brand a distinctive foundation, built around ‘Flores que iluminan tus momentos.’", layout: "two", items: [{ image: "girasolia-identity", label: "Logo system" }, { image: "girasolia-guidelines", label: "Brand guidelines" }] },
      { title: "One visual language, six content needs", kicker: "Social media", description: "Modular formats support product, seasonal, lifestyle, event, pattern and quote content while keeping the brand recognizable.", layout: "single", items: [{ image: "girasolia-social", label: "Social template system", caption: "Provisional artwork from the portfolio" }] },
      { title: "A brighter way to say it", kicker: "Paid social · Campaign system", description: "Product-, message- and benefit-focused directions explore how the same campaign can adapt across paid social, CRM and print.", layout: "two", items: [{ image: "flowers-paid", label: "Paid social exploration", caption: "Concept work" }, { image: "girasolia-campaign", label: "Campaign system", caption: "Provisional artwork from the portfolio" }] },
      { title: "From inbox to physical touchpoints", kicker: "Email · Print · Merchandise", description: "Campaign and product email directions extend into print applications and branded objects, maintaining the same message and recognizable identity.", layout: "two", items: [{ image: "flowers-email", label: "Campaign and product email", caption: "Provisional artwork" }, { image: "flowers-print", label: "Print applications", caption: "Provisional artwork" }] },
    ],
    delivered: ["Brand direction", "Visual identity & logo system", "Brand guidelines", "Social media templates", "Paid social campaign exploration", "Campaign system", "Email", "Print applications", "Merchandise"],
    builtTo: "Support everyday social content alongside campaign, CRM and physical applications through a flexible communication system.",
    note: "Campaign extensions are explorations; provisional artwork is identified alongside each application.",
  },
  "flowers-campaign": {
    role: "Campaign Design & Art Direction",
    strategy: { title: "One campaign, multiple expressions", description: "Extend Girasolía’s sunflower-led identity into product-, message- and benefit-focused communication without creating a different brand for each channel." },
    sections: [
      { title: "A brighter way to say it", kicker: "Paid social", description: "Three campaign directions explore a consistent message through product, emotional and benefit-led compositions.", layout: "single", items: [{ image: "flowers-paid", label: "Paid social", caption: "Self-initiated campaign exploration" }] },
      { title: "Two directions from the same system", kicker: "Email · CRM", description: "Campaign and product email layouts share the identity’s visual language while serving different communication needs.", layout: "single", items: [{ image: "flowers-email", label: "Email directions", caption: "Provisional artwork" }] },
      { title: "The campaign beyond the screen", kicker: "Print · Display", description: "Print applications and display concepts adapt the key visual and call to action to different formats.", layout: "single", items: [{ image: "flowers-print", label: "Print applications", caption: "Provisional artwork" }] },
    ],
    delivered: ["Campaign directions", "Paid social concepts", "Email layouts", "Display concepts", "Print adaptations"],
    builtTo: "Keep the campaign recognizable across digital, paid, CRM and physical communication.",
    note: "Campaign exploration based on the Girasolía identity; not a report of live campaign performance.",
  },
  "arya-digital": {
    role: "Digital Design & Art Direction",
    strategy: { title: "From identity to product education", description: "Carry AR·YA’s professional skincare positioning into a storefront that presents the range clearly and consistently." },
    sections: [
      { title: "A new ritual for everyday skin", kicker: "Landing page", description: "A full-page sequence moves from the collection hero through benefits, product range and education to a closing call to action, with desktop and mobile adaptations.", layout: "single", items: [{ image: "arya-landing", label: "Landing page direction", caption: "Provisional artwork" }] },
      { title: "One identity across the shopping journey", kicker: "E-commerce", description: "Structured typography and consistent product presentation connect the storefront to the packaging system.", layout: "two", items: [{ image: "arya-detail-1", label: "Brand foundation" }, { image: "arya-hero", label: "Product range" }] },
    ],
    delivered: ["Landing page structure", "Desktop and mobile direction", "E-commerce visual strategy", "Product presentation"],
    builtTo: "Connect packaging, product education and the digital storefront through one recognizable visual system.",
    note: "Digital direction shown with provisional artwork; no conversion results are claimed.",
  },
  "sturio-marketing": {
    role: "Marketing Design & Information Design",
    strategy: { title: "Making technical content clearer", description: "Use the modular Sturio identity to organize complex information for business audiences." },
    sections: [
      { title: "The anatomy of a digital ecosystem", kicker: "Infographic", description: "An editorial information-design exploration organizes strategy, technology, experience and performance through modular layouts and clear hierarchy.", layout: "single", items: [{ image: "sturio-infographic", label: "Infographic", caption: "Alternate visual direction" }] },
      { title: "One message across business touchpoints", kicker: "Display · LinkedIn · Web", description: "Display formats, a landing hero and a LinkedIn company banner demonstrate how the identity adapts to everyday marketing communication.", layout: "two", items: [{ image: "sturio-display", label: "Display exploration", caption: "Self-initiated concept" }, { image: "sturio-web", label: "Web and LinkedIn", caption: "Provisional artwork from the portfolio" }] },
    ],
    delivered: ["Infographic direction", "Display campaign exploration", "Landing hero", "LinkedIn company banner", "Marketing layouts"],
    builtTo: "Maintain visual consistency while making technical communication easier to scan and understand.",
  },
  "craft-studio": {
    role: "Brand Direction & Collateral Design",
    sections: [
      { title: "A recognizable handmade-goods range", kicker: "Amigurumi", description: "Product presentation gives each handmade character its own space within a consistent brand direction.", layout: "single", items: [{ image: "amigurumi-hero", label: "Product sheet — Lucy the Bunny" }] },
      { title: "Small details, consistent identity", kicker: "Print · Packaging inserts", description: "Cards, a thank-you note, sticker labels and a care guide bring the same visual language into the customer’s physical experience.", layout: "single", items: [{ image: "amigurumi-collateral", label: "Cards, labels and care guide" }] },
    ],
    delivered: ["Brand direction", "Product sheet", "Cards & thank-you note", "Sticker label", "Care guide"],
    builtTo: "Give handmade products a consistent presentation from product sheet to packaging and aftercare.",
  },
  "selected-marks": {
    role: "Logo Refinement & Vector Precision",
    sections: [
      { title: "Recognition, redrawn with precision", kicker: "Selected marks", description: "A selection of logo redraws, vector recreations and refinements across jewelry, architecture, ecology, pet care, food and home services.", layout: "single", items: [{ image: "marks-hero", label: "Selected marks" }] },
      { title: "Built to scale", kicker: "Refinement · Adaptation", description: "Each refinement preserves recognition while improving clarity and scalability for digital and print applications.", layout: "two", items: [{ image: "marks-detail-1", label: "Logotype refinement" }, { image: "marks-detail-2", label: "Vector precision" }] },
    ],
    delivered: ["Logo redraws", "Vector recreations", "Logotype refinement", "Identity adaptations"],
    builtTo: "Modernize existing identities and adapt legacy marks for contemporary applications without losing recognition.",
  },
  "consumer-product": {
    role: "Packaging Design & Print Production",
    sections: [{ title: "One label architecture, multiple variants", kicker: "Packaging · Retail", description: "A shared typographic structure and variant color bands explore a consistent shelf presence for a small-batch food range.", layout: "single", items: [{ image: "salsa-packaging", label: "Packaging direction", caption: "Placeholder project — awaiting original artwork and project details" }] }],
    delivered: ["Label architecture concept", "Variant system concept", "Packaging direction"],
    builtTo: "Balance range consistency and variant recognition in a production-minded packaging concept.",
    note: "This project remains a placeholder: the supplied PDF does not include its case-study details.",
  },
};