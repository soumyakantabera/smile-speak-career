import { Check } from "lucide-react";

const plans = [
  {
    name: "Piano di Gruppo",
    price: "Su richiesta",
    period: "",
    desc: "Apprendimento collaborativo in piccoli gruppi. Ideale per chi cerca networking e costi contenuti.",
    features: [
      "Sessioni in piccoli gruppi (max 6)",
      "Business English & Conversazione",
      "Materiali didattici inclusi",
      "Accesso alla community",
      "Certificato di completamento",
    ],
    cta: "Scopri di più",
    featured: false,
  },
  {
    name: "Piano Individuale",
    price: "Su richiesta",
    period: "",
    desc: "Massima personalizzazione. Ogni lezione è progettata intorno ai tuoi obiettivi e al tuo settore.",
    features: [
      "Lezioni 1:1 con docente dedicato",
      "Programma 100% personalizzato",
      "Orari flessibili",
      "Feedback immediato e dettagliato",
      "Simulazioni colloqui incluse",
      "Supporto WhatsApp tra le sessioni",
    ],
    cta: "Inizia ora",
    featured: true,
  },
  {
    name: "Career Accelerator",
    price: "Su richiesta",
    period: "",
    desc: "Il pacchetto completo per chi vuole cambiare lavoro o fare carriera nel mercato globale.",
    features: [
      "Tutto del Piano Individuale",
      "CV in inglese professionale",
      "Profilo LinkedIn ottimizzato",
      "5 simulazioni di colloquio",
      "Coaching strategico di carriera",
      "Garanzia di risultato",
    ],
    cta: "Accelera la carriera",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="prezzi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Prezzi Trasparenti
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Scegli il piano{" "}
            <span className="text-gradient-gold">giusto per te</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Prenota una consulenza gratuita per ricevere un'offerta personalizzata.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                plan.featured
                  ? "gradient-hero text-primary-foreground shadow-lg ring-2 ring-accent/50"
                  : "bg-surface border border-border hover:border-accent/30 hover:shadow-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-gold text-accent-foreground text-xs font-body font-bold shadow-gold whitespace-nowrap">
                  ✦ Più Scelto
                </div>
              )}

              <h3 className={`font-display text-2xl font-bold mb-1 ${plan.featured ? "text-primary-foreground" : "text-primary"}`}>
                {plan.name}
              </h3>
              <p className={`font-body text-sm mb-6 ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-body text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? "text-accent" : "text-accent"}`} />
                    <span className={plan.featured ? "text-primary-foreground/85" : "text-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contatti"
                className={`inline-flex items-center justify-center px-5 py-3 rounded-lg font-body font-bold text-sm transition-all duration-200 ${
                  plan.featured
                    ? "gradient-gold text-accent-foreground shadow-gold hover:shadow-lg hover:scale-105"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12 font-body text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Check className="w-4 h-4 text-accent" />
            Prima sessione gratuita — nessun impegno, nessuna carta di credito
          </span>
        </div>
      </div>
    </section>
  );
}
