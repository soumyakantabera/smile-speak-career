import { AlertCircle, Users, Pencil, Mail } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Paura dei Colloqui",
    desc: "Ansia durante le interviste in inglese? Impara a presentarti con sicurezza e a rispondere alle domande difficili.",
  },
  {
    icon: Users,
    title: "Stress nei Meeting",
    desc: "Difficoltà a intervenire durante le riunioni? Acquisisci le competenze per partecipare attivamente e farti notare.",
  },
  {
    icon: Pencil,
    title: "Lacune Grammaticali",
    desc: "Dubbi che frenano la tua comunicazione? Consolida le basi e parla senza esitazioni.",
  },
  {
    icon: Mail,
    title: "Email e Scrittura",
    desc: "Fatica a scrivere documenti professionali chiari? Impara a comunicare per iscritto in modo efficace e autorevole.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Ti riconosci?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Ti senti bloccato nella tua{" "}
            <span className="text-gradient-gold">crescita professionale?</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Molti professionisti italiani vivono queste situazioni ogni giorno. Non sei solo — e ci sono soluzioni.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="group bg-surface-alt rounded-2xl p-7 border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <p.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
