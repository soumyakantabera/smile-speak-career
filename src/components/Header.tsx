import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { problems } from "@/data/problems";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Servizi",
    href: "#",
    children: services.map((s) => ({ label: s.title, href: `/${s.slug}` })),
  },
  {
    label: "Problemi",
    href: "#",
    children: problems.slice(0, 6).map((p) => ({ label: p.shortTitle, href: `/problemi/${p.slug}` })),
  },
  {
    label: "Dove Siamo",
    href: "#",
    children: cities.map((c) => ({ label: c.name, href: `/citta/${c.slug}` })),
  },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Prezzi", href: "/prezzi" },
];

function DropdownMenu({ label, children, onNavigate }: { label: string; children: { label: string; href: string }[]; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-body text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
      >
        {label} <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 glass-strong rounded-xl shadow-lg py-2 z-50">
          {children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
              onClick={() => { setOpen(false); onNavigate?.(); }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-md py-3"
          : "bg-white/60 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label} label={link.label} children={link.children} />
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          to="/contatti"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl gradient-orange text-white font-body font-semibold text-sm shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Prenota Sessione GRATIS
        </Link>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-border mt-3 py-4">
          <nav className="container mx-auto flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-2.5 font-body text-foreground/80"
                    onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdown === link.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link key={child.href} to={child.href} className="block py-2 text-sm text-foreground/70 hover:text-primary">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} to={link.href} className="py-2.5 font-body text-foreground/80 hover:text-primary">
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contatti"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl gradient-orange text-white font-body font-semibold text-sm"
            >
              Prenota Sessione GRATIS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
