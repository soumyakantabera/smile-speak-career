import { Briefcase, TrendingUp, MessageCircle, ArrowRight, Users, Target, Brain, Layers, Network, BookOpen, Star, CheckCircle } from "lucide-react";

const eliteSteps = [
  { icon: Target, title: "Analisi Diagnostica", desc: "Valutazione linguistica e delle soft skills per identificare le aree prioritarie." },
  { icon: Brain, title: "Micro-Targeting", desc: "Lezioni basate sui tuoi task lavorativi reali: email, presentazioni, call." },
  { icon: Star, title: "Feedback Deep-Dive", desc: "Correzione di tono, registro e cultura aziendale con analisi approfondita." },
  { icon: CheckCircle, title: "Simulazioni", desc: "Role-play su scenari complessi: negoziazioni, conflitti, pitch aziendali." },
];

const socialSteps = [
  { icon: Network, title: "Networking", desc: "Interazione tra professionisti di diversi settori per costruire connessioni." },
  { icon: BookOpen, title: "Metodo Socratico", desc: "Discussioni su casi studio aziendali reali per stimolare il pensiero critico." },
  { icon: Users, title: "Peer Review", desc: "Scambio di feedback moderato dal docente in un ambiente sicuro e stimolante." },
  { icon: Layers, title: "Project-Based", desc: "Lavoro di squadra su progetti simulati con output concreti e misurabili." },
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
            Scegli tra il percorso d'élite personalizzato o la potenza del social learning.
          </p>
        </div>

        {/* Two main tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Elite 1:1 */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Sessione 1:1 di coaching Business English"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-body font-bold mb-2 shadow-gold">
                  ✦ Percorso Élite
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">Sessioni 1:1</h3>
                <p className="font-body text-sm text-primary-foreground/70">Personalizzazione massima, risultati garantiti</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 bg-surface">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eliteSteps.map((s) => (
                  <div key={s.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold mt-0.5">
                      <s.icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-primary mb-0.5">{s.title}</h4>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contatti"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg gradient-hero text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-all duration-200"
              >
                Inizia il Percorso Élite
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Group */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Workshop di gruppo Business English"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-body font-bold mb-2">
                  ♦ Percorso Social
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">Sessioni di Gruppo</h3>
                <p className="font-body text-sm text-primary-foreground/70">Networking, collaborazione e crescita collettiva</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 bg-surface">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialSteps.map((s) => (
                  <div key={s.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-primary mb-0.5">{s.title}</h4>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contatti"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Unisciti al Gruppo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Career Accelerator */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Career coaching con CV e LinkedIn"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/50" />
            </div>
            <div className="p-8 bg-surface flex flex-col justify-center">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Programma Intensivo
              </span>
              <h3 className="font-display text-3xl font-bold text-primary mb-3">Career Accelerator</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                Il pacchetto completo per chi vuole cambiare lavoro o fare carriera nel mercato globale. CV ottimizzato, LinkedIn professionale, simulazioni di colloqui con feedback dettagliato.
              </p>
              <ul className="space-y-2 mb-6">
                {["CV in inglese ottimizzato", "Profilo LinkedIn professionale", "5 simulazioni di colloquio", "Coaching strategico di carriera", "Personal Branding Internazionale", "Salary Negotiation Strategies"].map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contatti"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-gold text-accent-foreground font-body font-bold text-sm shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Accelera la tua Carriera
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
