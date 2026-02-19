import { PhoneCall, Map, Video, Trophy } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Consulenza Gratuita",
    desc: "Parliamo dei tuoi obiettivi, del tuo livello attuale e delle sfide che affronti. Senza impegno.",
  },
  {
    icon: Map,
    step: "02",
    title: "Piano Su Misura",
    desc: "Creiamo un percorso personalizzato basato sulle tue necessità, i tuoi orari e i tuoi obiettivi professionali.",
  },
  {
    icon: Video,
    step: "03",
    title: "Lezioni Live",
    desc: "Sessioni interattive online con feedback immediato e costante. Impari facendo, non solo ascoltando.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Risultati Garantiti",
    desc: "Miglioramento visibile in 4–8 settimane. Parlerai con sicurezza e sarai pronto per le tue sfide professionali.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="come-funziona" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Il Metodo
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Come <span className="text-gradient-gold">Funziona</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Un processo semplice, efficace e completamente centrato su di te.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full border-2 border-border bg-surface flex flex-col items-center justify-center group-hover:border-accent/50 group-hover:shadow-card transition-all duration-300">
                    <s.icon className="w-8 h-8 text-accent mb-1" />
                    <span className="font-display text-xs font-bold text-muted-foreground">{s.step}</span>
                  </div>
                  {/* Gold dot */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold shadow-gold flex items-center justify-center">
                    <span className="text-accent-foreground text-[9px] font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-gold text-accent-foreground font-body font-bold text-base shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Prenota la tua Consulenza Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
