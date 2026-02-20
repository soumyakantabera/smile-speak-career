import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/sessione",
    description: "Perfetto per iniziare il tuo percorso",
    features: ["Sessione 1:1 da 60 minuti", "Materiale personalizzato", "Feedback scritto post-sessione", "Flessibilità oraria completa", "Annullamento gratuito 24h prima"],
    popular: false,
  },
  {
    name: "Professional",
    price: "189",
    period: "/mese",
    description: "Il piano più scelto dai professionisti",
    features: ["4 sessioni 1:1 da 60 min", "Curriculum 100% personalizzato", "Supporto via chat illimitato", "Materiale esclusivo e aggiornato", "Report mensile dei progressi", "Accesso area riservata"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Per team e aziende",
    features: ["Sessioni illimitate", "Team coaching e workshop", "Programma aziendale su misura", "Account manager dedicato", "Dashboard analytics avanzata", "Fatturazione aziendale", "SLA garantito"],
    popular: false,
  },
];

export default function Prezzi() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">Prezzi Trasparenti</span>
          <h1 className="font-display text-4xl md:text-5xl text-heading mb-6">
            Investi nella Tua <span className="text-gradient-orange">Crescita</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Piani flessibili per ogni esigenza. Nessun vincolo, nessun costo nascosto. La prima sessione è sempre gratuita.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <GlassCard
                key={plan.name}
                className={`relative flex flex-col ${plan.popular ? "ring-2 ring-secondary md:scale-105" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-orange text-white text-xs font-semibold">
                    Più Popolare
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl text-heading mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-5xl text-heading">
                      {plan.price === "Custom" ? "" : "€"}{plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contatti"
                  className={`inline-flex items-center justify-center w-full py-3.5 rounded-xl font-body font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "gradient-orange text-white shadow-orange hover:shadow-lg"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {plan.price === "Custom" ? "Contattaci" : "Inizia Ora"}
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="py-16 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl text-heading text-center mb-12">Domande <span className="text-gradient-teal">Frequenti</span></h2>
          <div className="space-y-4">
            {[
              { q: "La prima sessione è davvero gratuita?", a: "Sì! La sessione iniziale di 30 minuti è completamente gratuita e senza impegno." },
              { q: "Posso cambiare piano in qualsiasi momento?", a: "Certamente. Puoi upgradare, downgradare o mettere in pausa il tuo piano quando vuoi." },
              { q: "Come funzionano le lezioni online?", a: "Le sessioni si svolgono via Zoom o Google Meet, con materiale condiviso in tempo reale." },
              { q: "Posso annullare una lezione?", a: "Sì, con 24 ore di preavviso puoi annullare o riprogrammare senza costi aggiuntivi." },
            ].map((faq) => (
              <GlassCard key={faq.q} hover={false} className="p-5">
                <h3 className="font-display text-base text-heading mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
