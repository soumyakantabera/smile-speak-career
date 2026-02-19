import { Scale, Stethoscope, LineChart, Code2, ArrowRight } from "lucide-react";

const specializations = [
  {
    icon: Scale,
    title: "Legal English",
    tag: "Diritto & Compliance",
    desc: "Contratti, arbitrati, corrispondenza legale internazionale e terminologia giuridica per avvocati, compliance officer e legal counsel.",
    topics: ["Contract drafting", "Legal correspondence", "Arbitration English", "Compliance reports"],
    color: "from-slate-700 to-slate-900",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    icon: Stethoscope,
    title: "Medical English",
    tag: "Medicina & Ricerca",
    desc: "Comunicazione con pazienti internazionali, paper scientifici, conferenze mediche e terminologia clinica per medici e ricercatori.",
    topics: ["Clinical communication", "Research papers", "Medical conferences", "Patient interaction"],
    color: "from-blue-800 to-blue-950",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  },
  {
    icon: LineChart,
    title: "Finance English",
    tag: "Finanza & Banking",
    desc: "Reporting finanziario, investor relations, pitch a fondi internazionali e comunicazione con stakeholder globali per CFO e analisti.",
    topics: ["Financial reporting", "Investor relations", "M&A communication", "Risk management"],
    color: "from-emerald-800 to-emerald-950",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    icon: Code2,
    title: "Tech English",
    tag: "Tecnologia & Startup",
    desc: "Sprint planning, code review, pitch a investitori, documentazione tecnica e comunicazione in team internazionali per developer e PM.",
    topics: ["Tech presentations", "Agile communication", "Startup pitching", "Remote team English"],
    color: "from-purple-800 to-purple-950",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
];

export default function SpecializzazioniSection() {
  return (
    <section id="specializzazioni" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Specializzazioni
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Inglese verticale per{" "}
            <span className="text-gradient-gold">il tuo settore</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Non un inglese generico: terminologia e scenari specifici per la tua professione.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specializations.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} - Prep with Smile`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${s.color} opacity-70`} />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="font-body text-[10px] text-white/70 uppercase tracking-widest">{s.tag}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <s.icon className="w-4 h-4 text-white" />
                    <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-surface flex flex-col flex-1">
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 flex-1 mb-4">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 font-body text-xs text-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contatti"
                  className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-accent hover:text-primary transition-colors"
                >
                  Scopri di più <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
