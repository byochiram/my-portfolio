import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const aboutSection = document.getElementById("about");

      // Saat masih di hero, tidak ada nav yang aktif
      if (aboutSection && scrollY < aboutSection.offsetTop - 220) {
        setActiveSection("");
        return;
      }

      let currentSection = "";

      links.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 180;

          if (scrollY >= sectionTop) {
            currentSection = link.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-primary font-display text-lg text-white shadow-glow">
            R
          </span>

          <span className="hidden sm:inline">RosiSpace</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "hover:text-foreground"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}