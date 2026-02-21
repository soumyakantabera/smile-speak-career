import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Target, MessageSquare, GraduationCap, Clock, Users, Star, Zap } from "lucide-react";

const corsi = [
  {
    slug: "business-english",
    title: "Business English",
    subtitle: "Padroneggia l'inglese professionale",
    description: "Presentazioni, negoziazioni, email e meeting internazionali. Ogni lezione è costruita sui tuoi task lavorativi reali.",
    icon: Briefcase,
    color: "teal" as const,
    duration: "8-12 settimane",
    format: "1:1 o Gruppo",
    level: "Intermedio – Avanzato",
    highlights: ["Presentazioni aziendali", "Email professionale", "Meeting internazionali", "Negoziazione"],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    subtitle: "Costruisci la tua carriera internazionale",
    description: "CV ottimizzato, LinkedIn professionale, salary negotiation e personal branding per il mercato globale.",
    icon: Target,
    color: "orange" as const,
    duration: "4-8 settimane",
    format: "1:1 Personalizzato",
    level: "Tutti i livelli",
    highlights: ["CV internazionale", "LinkedIn branding", "Salary negotiation", "Personal branding"],
  },
  {
    slug: "interview-prep",
    title: "Interview Prep",
    subtitle: "Conquista il colloquio dei tuoi sogni",
    description: "Mock interview, metodo STAR, domande comportamentali e tecniche di confidence building.",
    icon: MessageSquare,
    color: "teal" as const,
    duration: "2-4 settimane",
    format: "1:1 Intensivo",
    level: "Tutti i livelli",
    highlights: ["Mock interviews", "Metodo STAR", "Body language", "Follow-up strategy"],
  },
  {
    slug: "ielts-prep",
    title: "IELTS Prep",
    subtitle: "Raggiungi il tuo target IELTS score",
    description: "Preparazione completa per Listening, Reading, Writing e Speaking con strategie di scoring avanzate.",
    icon: GraduationCap,
    color: "orange" as const,
    duration: "6-10 settimane",
    format: "1:1 o Gruppo",
    level: "B1 – C1",
    highlights: ["Listening & Reading", "Writing Task 1 & 2", "Speaking fluency", "Mock exam"],
  },
];

export default function CorsiSection() {
  return (
    <section id="corsi" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal/5 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange/5 translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-5">
            <Zap className="w-4 h-4" /> I Nostri Corsi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-heading leading-tight mb-5">
            Corsi Specifici per la Tua{" "}
            <span className="text-gradient-teal">Crescita Professionale</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Quattro percorsi specializzati, progettati per portarti dal punto A al punto B nel minor tempo possibile. Scegli quello giusto per te.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {corsi.map((corso, index) => {
            const Icon = corso.icon;
            const isOrange = corso.color === "orange";
            return (
              <Link
                key={corso.slug}
                to={`/${corso.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-border hover:border-primary/30 shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Accent top bar */}
                <div className={`h-1.5 w-full ${isOrange ? "gradient-orange" : "gradient-teal"}`} />

                <div className="p-7">
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                      isOrange ? "gradient-orange" : "gradient-teal"
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-heading mb-1 group-hover:text-primary transition-colors">
                        {corso.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{corso.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                    {corso.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-alt text-xs font-medium text-foreground/70">
                      <Clock className="w-3.5 h-3.5" /> {corso.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-alt text-xs font-medium text-foreground/70">
                      <Users className="w-3.5 h-3.5" /> {corso.format}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-alt text-xs font-medium text-foreground/70">
                      <Star className="w-3.5 h-3.5" /> {corso.level}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {corso.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOrange ? "bg-orange" : "bg-teal"}`} />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`inline-flex items-center gap-2 font-body font-semibold text-sm transition-all duration-300 group-hover:gap-3 ${
                    isOrange ? "text-orange" : "text-primary"
                  }`}>
                    Scopri il Corso <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-muted-foreground mb-5">
            Non sai quale corso scegliere? Prenota una consulenza gratuita e ti guidiamo noi.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Consulenza Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
