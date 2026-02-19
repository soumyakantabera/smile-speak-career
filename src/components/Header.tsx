import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Corsi", href: "#programmi" },
  { label: "Specializzazioni", href: "#specializzazioni" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Prezzi", href: "#prezzi" },
  { label: "Contatti", href: "#contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
            <BookOpen className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-display text-primary-foreground font-bold text-lg block">
              Prep with <span className="text-gradient-gold">Smile</span>
            </span>
            <span className="font-body text-primary-foreground/60 text-[10px] uppercase tracking-widest">
              Inglese & Carriera
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contatti"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg gradient-gold text-accent-foreground font-body font-semibold text-sm shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Prenota Sessione GRATIS
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 mt-3 py-4">
          <nav className="container mx-auto flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-primary-foreground/80 hover:text-accent py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg gradient-gold text-accent-foreground font-body font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Prenota Sessione GRATIS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
