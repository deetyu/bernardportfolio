import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bernardo-orozco/" },
  { name: "Behance", href: "https://www.behance.net/btm20/" },
  { name: "Email", href: "mailto:boboteme@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark py-10 md:py-12">
      <div className="container-editorial px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-ink leading-tight">Bernardo Orozco</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
              Senior Brand &amp; Visual Designer
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-light hover:text-ink transition-colors duration-300"
                >
                  {link.name}
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs text-ink-muted">© {currentYear} — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
