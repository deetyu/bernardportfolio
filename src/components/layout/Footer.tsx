const links = [
  { name: "boboteme@gmail.com", href: "mailto:boboteme@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/boboteme/" },
  { name: "Behance", href: "https://www.behance.net/btm20" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container-editorial px-6 md:px-12 lg:px-20">
        <div className="h-px w-full bg-divider" />
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-xs font-light tracking-wide text-ink-muted hover:text-ink transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs font-light tracking-wide text-ink-muted">
            © {currentYear} Bernardo Orozco — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
