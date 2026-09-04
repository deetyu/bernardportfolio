import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bernardo-orozco/" },
  { name: "Behance", href: "https://www.behance.net/btm20/" },
  
  { name: "Email", href: "mailto:boboteme@gmail.com" },
];

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-divider py-16 md:py-20">
      <div className="container-editorial px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 md:pb-16 border-b border-divider">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-display text-2xl md:text-3xl font-medium tracking-[-0.04em] text-ink block mb-4"
            >
              Portfolio
            </Link>
            <p className="text-ink-muted max-w-sm text-base">
              Senior Brand &amp; Visual Designer. Brand identity, visual systems,
              packaging and digital design.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-ink-light hover:text-ink transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-6">Connect</p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-light hover:text-ink transition-colors duration-300"
                  >
                    {link.name}
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-ink-muted">© {currentYear} — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
