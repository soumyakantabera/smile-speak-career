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
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  children: { label: string; href: string; description?: string }[];
  isActive?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasDescriptions = children.some((c) => c.description);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && isOpen) onToggle();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 font-body text-sm font-medium transition-all duration-200 relative py-2 group ${
          isActive
            ? "text-primary"
            : "text-foreground/80 hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
        <span className={`absolute bottom-0 left-0 h-0.5 rounded-full gradient-teal transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`} />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-strong rounded-2xl shadow-lg py-2 z-50 ${
            hasDescriptions ? "w-80" : "w-56"
          }`}
          style={{ animation: "fadeInUp 0.2s ease-out forwards" }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/85 border-l border-t border-white/40 rotate-45 rounded-tl" />
          <div className="relative z-10 max-h-[60vh] overflow-y-auto">
            {children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className="flex flex-col px-5 py-3 text-sm transition-all duration-150 hover:bg-primary/5 border-l-2 border-transparent hover:border-primary first:rounded-t-xl last:rounded-b-xl"
                onClick={() => {
                  onToggle();
                  onNavigate?.();
                }}
              >
                <span className="font-medium text-foreground/90">
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
          ? "bg-white/95 backdrop-blur-2xl shadow-xl py-2"
          : "bg-white/80 backdrop-blur-2xl py-3.5"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-teal" />
      {/* Bottom border for non-scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-border/30 transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`} />

      <div className="container mx-auto flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu
                key={link.label}
                label={link.label}
                children={link.children}
                isActive={link.children.some(
                  (c) => location.pathname === c.href
                )}
                isOpen={openDropdown === link.label}
                onToggle={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
              />
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm font-medium transition-all duration-200 relative py-2 group ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 rounded-full gradient-teal transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          to="/contatti"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-orange text-white font-body font-semibold text-sm shadow-orange hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300 group"
        >
          <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
          Sessione GRATIS
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white/95 backdrop-blur-2xl border-t border-border/30 py-5 shadow-lg">
          <nav className="container mx-auto flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3.5 px-3 font-body font-medium text-foreground/80 hover:text-primary rounded-xl hover:bg-accent/30 transition-colors"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === link.label ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pl-4 space-y-0.5 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex flex-col py-3 px-4 text-sm text-foreground/60 hover:text-primary hover:bg-accent/20 rounded-xl transition-colors border-l-2 border-transparent hover:border-primary"
                        >
                          <span className="font-medium">{child.label}</span>
                          {"description" in child && child.description && (
                            <span className="text-xs text-muted-foreground mt-0.5">{(child as any).description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-3.5 px-3 font-body font-medium rounded-xl transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-accent/30"
                      : "text-foreground/80 hover:text-primary hover:bg-accent/30"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contatti"
              className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl gradient-orange text-white font-body font-semibold text-sm shadow-orange"
            >
              <Sparkles className="w-4 h-4" />
              Prenota Sessione GRATIS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
