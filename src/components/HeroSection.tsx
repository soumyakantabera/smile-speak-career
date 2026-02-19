import { useEffect, useRef } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-fade-in-up");
    els?.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professionista italiana che impara l'inglese"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <div className="animate-fade-in-up animate-delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-body font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Accademia di Inglese & Carriera — Italia
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up animate-delay-200 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Parla Inglese con{" "}
            <span className="text-gradient-gold">Sicurezza.</span>
            <br />
            Trasforma la tua Carriera.
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animate-delay-300 font-body text-lg sm:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl">
            Corsi di Business English e coaching di carriera personalizzati. Supera la paura dei colloqui e comunica con efficacia nel mondo del lavoro globale.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animate-delay-400 flex flex-wrap gap-4">
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg gradient-gold text-accent-foreground font-body font-bold text-base shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <CalendarCheck className="w-5 h-5" />
              Inizia Ora (Gratis)
            </a>
            <a
              href="#programmi"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/15 transition-all duration-200"
            >
              Esplora i Programmi
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animate-delay-500 flex flex-wrap gap-8 mt-14 pt-10 border-t border-primary-foreground/15">
            {[
              { value: "500+", label: "Professionisti formati" },
              { value: "4–8", label: "Settimane per risultati visibili" },
              { value: "98%", label: "Tasso di soddisfazione" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{stat.value}</div>
                <div className="font-body text-sm text-primary-foreground/60 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
