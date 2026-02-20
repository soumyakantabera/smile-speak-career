import { Link } from "react-router-dom";
import { ArrowRight, Globe, Heart, Target, Users, Award, Lightbulb } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const values = [
  { icon: Heart, title: "Passione", description: "Crediamo che imparare l'inglese debba essere un'esperienza positiva e motivante." },
  { icon: Target, title: "Personalizzazione", description: "Ogni percorso è costruito al 100% sulle esigenze uniche di ogni professionista." },
  { icon: Globe, title: "Visione Globale", description: "Prepariamo i professionisti italiani a competere e crescere nel mercato internazionale." },
  { icon: Lightbulb, title: "Innovazione", description: "Metodi didattici moderni, basati su ricerca e risultati misurabili." },
];

const team = [
  { name: "Sara M.", role: "Head Coach & Founder", description: "10+ anni di esperienza in Business English e career coaching internazionale." },
  { name: "James R.", role: "IELTS Specialist", description: "Esaminatore certificato IELTS con track record di studenti band 7.5+." },
  { name: "Valentina K.", role: "Career Counsellor", description: "Ex recruiter internazionale con esperienza in multinazionali Fortune 500." },
];

export default function ChiSiamo() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Il nostro team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heading/80 via-heading/60 to-transparent" />
        <div className="container mx-auto relative z-10 py-32">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Chi <span className="text-gradient-orange">Siamo</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl">
            Democratizziamo le carriere globali per il talento italiano. Crediamo che ogni professionista meriti gli strumenti per competere a livello internazionale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">La Nostra Missione</span>
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-6">
                Rendere Accessibile il <span className="text-gradient-teal">Successo Internazionale</span>
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                Prep with Smile nasce dalla convinzione che i professionisti italiani abbiano un talento straordinario, ma spesso mancano degli strumenti linguistici e strategici per esprimerlo nel contesto internazionale.
              </p>
              <p className="font-body text-muted-foreground">
                Il nostro approccio combina coaching linguistico, career counselling e preparazione strategica in percorsi 100% personalizzati, per garantire risultati concreti e misurabili.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Mission" className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-heading text-center mb-12">I Nostri <span className="text-gradient-orange">Valori</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <GlassCard key={v.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-heading mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-heading text-center mb-12">Il Nostro <span className="text-gradient-teal">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((t) => (
              <GlassCard key={t.name} className="text-center">
                <div className="w-20 h-20 rounded-full gradient-teal flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display text-2xl">{t.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-display text-lg text-heading">{t.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl text-white mb-6">Unisciti a Noi</h2>
          <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200">
            Prenota Sessione GRATIS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
