import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Briefcase,
  Globe,
  Users,
  Star,
  BarChart2,
  Award,
  Languages,
  Zap,
  Building2,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";

const sectors = [
  {
    name: "Tech & Startup",
    level: "C1–C2",
    color: "teal",
    note: "Inglese come lingua principale di lavoro — documentazione, meeting, codice.",
  },
  {
    name: "Finance & Consulting",
    level: "B2–C1",
    color: "orange",
    note: "Report, pitch deck, call con clienti internazionali ogni settimana.",
  },
  {
    name: "Fashion & Luxury",
    level: "B2–C1",
    color: "teal",
    note: "Trattative con buyer internazionali, PR e comunicazione globale.",
  },
  {
    name: "Farmaceutico & Biotech",
    level: "C1",
    color: "orange",
    note: "Pubblicazioni scientifiche, trial clinici e congressi internazionali.",
  },
  {
    name: "Engineering & Automotive",
    level: "B2",
    color: "teal",
    note: "Documentazione tecnica, collaborazioni con team globali (Germania, USA, Asia).",
  },
  {
    name: "Marketing & Digital",
    level: "B2–C1",
    color: "orange",
    note: "Content in inglese, tool e piattaforme globali, campagne internazionali.",
  },
];

const stats = [
  { value: "68%", label: "delle offerte MNC richiede inglese B2+" },
  { value: "+32%", label: "stipendio medio con inglese fluente vs senza" },
  { value: "3×", label: "più chance di ottenere promozioni internazionali" },
  { value: "85%", label: "dei C-level italiani usa l'inglese quotidianamente" },
];

const tips = [
  {
    icon: GraduationCap,
    title: "Punta al B2 come minimo assoluto",
    desc: "Il livello B2 (Upper Intermediate) è il minimo richiesto per la maggior parte delle posizioni. Sotto questo livello, molte candidature vengono automaticamente scartate dagli ATS.",
  },
  {
    icon: Briefcase,
    title: "Business English > inglese generico",
    desc: "Saper parlare di weekend e vacanze non ti porta lontano. I recruiter vogliono chi sa gestire email professionali, presentazioni e negoziazioni. Investi nel Business English specifico per il tuo settore.",
  },
  {
    icon: Globe,
    title: "LinkedIn in inglese è obbligatorio",
    desc: "Il tuo profilo LinkedIn in italiano è invisibile ai recruiter internazionali. Un profilo bilingue (o solo in inglese) moltiplica la tua visibilità globale in modo esponenziale.",
  },
  {
    icon: Users,
    title: "Pratica il colloquio in inglese",
    desc: "Anche chi conosce l'inglese spesso si blocca sotto pressione. Simulare colloqui realistici in inglese elimina l'ansia e ti permette di arrivare alla selezione con la giusta sicurezza.",
  },
];

const companies = [
  "Amazon Italia", "Google Italy", "Stellantis", "Luxottica", "Ferrero",
  "Pirelli", "Enel", "ENI", "Telecom Italia", "Generali",
  "Campari Group", "Moncler", "Ferrari", "Leonardo", "Banca Intesa",
];

const faqs = [
  {
    q: "Che livello di inglese serve davvero per trovare lavoro in Italia?",
    a: "Dipende dal settore, ma come regola generale: B2 è il minimo per la maggior parte delle posizioni in aziende strutturate. C1 è richiesto per ruoli manageriali, tech e finance. Nelle startup e nelle MNC, l'inglese è spesso la lingua di lavoro principale.",
  },
  {
    q: "È vero che molte aziende italiane ora assumono solo in inglese?",
    a: "Sì, specialmente le multinazionali presenti in Italia (Amazon, Google, McKinsey, ecc.) e le startup in crescita. Le interviste si svolgono in inglese e la cultura aziendale è spesso completamente in lingua inglese, anche se l'ufficio è a Milano o Roma.",
  },
  {
    q: "Come faccio a migliorare il mio inglese professionale rapidamente?",
    a: "La chiave è la pratica contestualizzata: non corsi generici, ma sessioni 1:1 focalizzate sul tuo settore e sui tuoi task lavorativi reali. Con il giusto metodo, risultati concreti arrivano in 4–8 settimane.",
  },
  {
    q: "Vale la pena fare la certificazione IELTS per trovare lavoro in Italia?",
    a: "Non è sempre obbligatoria, ma una certificazione B2/C1 riconosciuta (IELTS, Cambridge, TOEIC) è una prova oggettiva del tuo livello e rafforza notevolmente il CV. Alcune aziende la richiedono esplicitamente.",
  },
];

export default function MercatoDelLavoro() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
            alt="Skyline Milano — mercato del lavoro italiano"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-heading/85 via-heading/60 to-heading/30" />
        </div>
        <div className="container mx-auto relative z-10 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6">
              <BarChart2 className="w-4 h-4" /> Guida al Mercato del Lavoro Italiano
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              L'Inglese nel Mercato del Lavoro{" "}
              <span className="text-gradient-orange">Italiano</span>: Tutto Quello che Devi Sapere
            </h1>
            <p className="font-body text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Dati reali, settori, livelli richiesti e strategie per posizionarti al meglio in un mercato sempre più globale.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Prenota Sessione GRATIS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-heading">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-secondary mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
                Il Contesto
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-6">
                Il Mercato del Lavoro Italiano <span className="text-gradient-teal">Sta Cambiando</span>
              </h2>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                Negli ultimi 10 anni, la domanda di professionisti con inglese avanzato in Italia è cresciuta del 47%. Non è più un vantaggio competitivo: è diventato il biglietto d'ingresso per le aziende che pagano davvero bene.
              </p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                L'Italia ospita oltre 14.000 multinazionali straniere, tutte con culture aziendali anglofone. Aggiungi le aziende italiane che esportano (e sono tante: moda, food, lusso, automotive, farmaceutica) e capirai perché l'inglese non è più opzionale.
              </p>
              <ul className="space-y-3">
                {[
                  "14.000+ multinazionali straniere operano in Italia",
                  "Il 72% delle aziende quotate in Borsa usa l'inglese nei report ufficiali",
                  "Le startup italiane raccolgono fondi in inglese — e assumono in inglese",
                  "Lo smart working ha aperto i confini: i tuoi colleghi sono spesso all'estero",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Professionisti italiani in ufficio"
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-orange opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              Per Settore
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Che Livello di Inglese Richiede{" "}
              <span className="text-gradient-teal">il Tuo Settore?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Non tutti i settori chiedono la stessa cosa. Ecco una guida pratica per capire dove sei e dove devi arrivare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <GlassCard key={sector.name}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg text-heading">{sector.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    sector.color === "teal" ? "gradient-teal" : "gradient-orange"
                  }`}>
                    {sector.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{sector.note}</p>
              </GlassCard>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Livelli secondo il Quadro Comune Europeo di Riferimento (CEFR): B2 = Upper Intermediate, C1 = Advanced, C2 = Mastery
          </p>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" /> Aziende che Assumono in Inglese
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Le Aziende Migliori in Italia{" "}
              <span className="text-gradient-orange">Selezionano in Inglese</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Queste sono alcune delle realtà italiane e multinazionali che conducono i colloqui — anche per ruoli locali — interamente in inglese.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {companies.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full border border-border bg-surface text-sm text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Lista indicativa. Include sia aziende italiane internazionalizzate che multinazionali con sede in Italia.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-gradient-to-b from-surface-alt to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" /> Strategie Pratiche
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Come Posizionarti al Meglio{" "}
              <span className="text-gradient-teal">nel Mercato Italiano</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip) => {
              const Icon = tip.icon;
              return (
                <GlassCard key={tip.title} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-heading mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Le Domande Più{" "}
              <span className="text-gradient-orange">Frequenti</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <GlassCard key={faq.q} hover={false}>
                <div className="flex gap-3 items-start">
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base text-heading mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" /> Il Tuo Piano d'Azione
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Pronto a Sbloccare il Tuo{" "}
              <span className="text-gradient-teal">Potenziale</span>?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Abbiamo costruito ogni percorso per rispondere esattamente alle esigenze del mercato del lavoro italiano.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Business English",
                desc: "Meeting, email, presentazioni e negoziazioni nel tuo settore.",
                href: "/business-english",
                color: "teal",
              },
              {
                icon: Users,
                title: "Interview Prep",
                desc: "Mock interview in inglese, metodo STAR, gestione dell'ansia.",
                href: "/interview-prep",
                color: "orange",
              },
              {
                icon: Award,
                title: "Career Counselling",
                desc: "CV internazionale, LinkedIn, salary negotiation e personal branding.",
                href: "/career-counselling",
                color: "teal",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.href} className="group">
                  <GlassCard className="text-center h-full">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      item.color === "teal" ? "gradient-teal" : "gradient-orange"
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-lg text-heading mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      Scopri di più <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto text-center">
          <Star className="w-10 h-10 text-secondary mx-auto mb-4 opacity-80" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            30 Minuti Possono Cambiare la Direzione della Tua Carriera
          </h2>
          <p className="font-body text-white/80 max-w-xl mx-auto mb-8">
            Una sessione diagnostica gratuita con uno dei nostri esperti. Nessun impegno, nessun costo. Solo chiarezza su dove sei e dove puoi arrivare.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold text-lg shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Prenota Sessione GRATIS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
