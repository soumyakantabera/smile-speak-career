import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { problems } from "@/data/problems";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Corsi",
    href: "#",
    children: services.map((s) => ({
      label: s.title,
      href: `/${s.slug}`,
      description: s.subtitle,
    })),
  },
  {
    label: "Problemi",
    href: "#",
    children: problems.slice(0, 6).map((p) => ({
      label: p.shortTitle,
      href: `/problemi/${p.slug}`,
    })),
  },
  {
    label: "Dove Siamo",
    href: "#",
    children: cities.map((c) => ({
      label: c.name,
      href: `/citta/${c.slug}`,
    })),
  },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Prezzi", href: "/prezzi" },
];

function DropdownMenu({
  label,
  children,
  isActive,
  onNavigate,
}: {
  label: string;
  children: { label: string; href: string; description?: string }[];
  isActive?: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasDescriptions = children.some((c) => c.description);

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
        className={`flex items-center gap-1 font-body text-sm transition-all duration-200 relative py-1 ${
          isActive
            ? "text-primary font-semibold"
            : "text-foreground/70 hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        {isActive && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full gradient-teal" />
        )}
      </button>
      {open && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-lg border border-border/50 py-3 z-50 animate-fade-in-up ${
            hasDescriptions ? "w-72" : "w-52"
          }`}
          style={{ animationDuration: "0.2s" }}
        >
          {/* Dropdown arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-border/50 rotate-45 rounded-tl" />
          <div className="relative z-10">
            {children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className="flex flex-col px-5 py-2.5 text-sm hover:bg-accent/40 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <span className="font-medium text-foreground/90 group-hover:text-primary">
                  {child.label}
                </span>
                {child.description && (
                  <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2.5"
          : "bg-white/60 backdrop-blur-md py-4"
      }`}
    >
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-teal opacity-80" />

      <div className="container mx-auto flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu
                key={link.label}
                label={link.label}
                children={link.children}
                isActive={link.children.some(
                  (c) => location.pathname === c.href
                )}
              />
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm transition-all duration-200 relative py-1 ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full gradient-teal" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          to="/contatti"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-orange text-white font-body font-semibold text-sm shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-300 group"
        >
          <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
          Sessione GRATIS
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 mt-2 py-5 shadow-lg">
          <nav className="container mx-auto flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 px-2 font-body text-foreground/80 hover:text-primary rounded-lg hover:bg-accent/30 transition-colors"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === link.label && (
                    <div className="pl-4 space-y-0.5 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block py-2.5 px-3 text-sm text-foreground/60 hover:text-primary hover:bg-accent/20 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-3 px-2 font-body rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "text-primary font-semibold bg-accent/30"
                      : "text-foreground/80 hover:text-primary hover:bg-accent/30"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contatti"
              className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl gradient-orange text-white font-body font-semibold text-sm shadow-orange"
            >
              <Sparkles className="w-4 h-4" />
              Prenota Sessione GRATIS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
