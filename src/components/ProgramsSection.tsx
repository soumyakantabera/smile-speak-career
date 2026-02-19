import { Briefcase, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Briefcase,
    tag: "Più Popolare",
    title: "Business English",
    subtitle: "1:1 o Gruppo",
    desc: "Perfeziona la tua comunicazione per presentazioni, negoziazioni e networking internazionale. Sessioni personalizzate sul tuo settore.",
    features: ["Presentazioni efficaci", "Negoziazioni in inglese", "Networking professionale", "Terminologia di settore"],
    cta: "Inizia ora",
    featured: true,
  },
  {
    icon: TrendingUp,
    tag: "Carriera",
    title: "Career Accelerator",
    subtitle: "Programma intensivo",
    desc: "Ottimizzazione CV in inglese, profilo LinkedIn professionale e simulazioni di colloqui con feedback dettagliato.",
    features: ["CV in inglese ottimizzato", "LinkedIn professionale", "Simulazione colloqui", "Interview coaching"],
    cta: "Accelera ora",
    featured: false,
  },
  {
    icon: MessageCircle,
    tag: "Fluency",
    title: "Conversazione & Fluency",
    subtitle: "Per chi vuole fluidità",
    desc: "Per chi ha una base ma vuole parlare senza esitazioni. Focus su confidenza, velocità e pronuncia naturale.",
    features: ["Conversazione libera", "Riduzione dell'accento", "Pensiero in inglese", "Situazioni reali"],
    cta: "Prova gratis",
    featured: false,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programmi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            I Nostri Programmi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Un percorso su misura{" "}
            <span className="text-gradient-gold">per te</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Scegli il programma più adatto ai tuoi obiettivi professionali.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                p.featured
                  ? "gradient-hero text-primary-foreground shadow-lg"
                  : "bg-surface border border-border hover:border-accent/30 hover:shadow-card"
              }`}
            >
              {/* Tag */}
              <span
                className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-body font-bold ${
                  p.featured
                    ? "gradient-gold text-accent-foreground shadow-gold"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {p.tag}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                p.featured ? "bg-primary-foreground/15" : "gradient-gold shadow-gold"
              }`}>
                <p.icon className={`w-6 h-6 ${p.featured ? "text-primary-foreground" : "text-accent-foreground"}`} />
              </div>

              <h3 className={`font-display text-2xl font-bold mb-0.5 ${p.featured ? "text-primary-foreground" : "text-primary"}`}>
                {p.title}
              </h3>
              <p className={`font-body text-sm mb-4 ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {p.subtitle}
              </p>
              <p className={`font-body text-sm leading-relaxed mb-6 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.featured ? "bg-accent" : "bg-accent"}`} />
                    <span className={p.featured ? "text-primary-foreground/80" : "text-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contatti"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-body font-semibold text-sm transition-all duration-200 ${
                  p.featured
                    ? "gradient-gold text-accent-foreground shadow-gold hover:shadow-lg hover:scale-105"
                    : "bg-primary text-primary-foreground hover:bg-secondary"
                }`}
              >
                {p.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
