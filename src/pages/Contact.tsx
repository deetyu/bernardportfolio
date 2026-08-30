import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const links = [
  { name: "Email", handle: "boboteme@gmail.com", href: "mailto:boboteme@gmail.com" },
  { name: "LinkedIn", handle: "linkedin.com/in/boboteme", href: "https://www.linkedin.com/in/boboteme/" },
  { name: "Behance", handle: "behance.net/btm20", href: "https://www.behance.net/btm20" },
  { name: "Portfolio PDF", handle: "Download (PDF)", href: "/Bernardo_Orozco_Portfolio.pdf" },
];

export default function Contact() {
  return (
    <Layout>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex items-baseline justify-between border-b border-ink pb-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink">Contact</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink-muted">
                Guadalajara / Remote
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif italic text-ink mt-10 md:mt-14 max-w-4xl">
              Let's talk.
            </h1>
          </ScrollReveal>

          <div className="mt-10 md:mt-14 border-t border-divider pt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
            <ScrollReveal delay={180} className="md:col-span-5">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-ink">
                Open to senior brand &amp; visual design roles — remote or on-site.
              </p>
              <p className="mt-6 text-base text-ink-light">
                The fastest way to reach me is by email. I usually reply within
                two business days.
              </p>
            </ScrollReveal>

            <div className="md:col-span-6 md:col-start-7">
              {links.map((link, i) => (
                <ScrollReveal key={link.name} delay={220 + i * 80}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-6 border-t border-divider py-5 last:border-b"
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-ink-muted">
                      {link.name}
                    </span>
                    <span className="flex items-baseline gap-2 font-serif text-xl md:text-2xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                      {link.handle}
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
