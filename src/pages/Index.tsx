import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Globe, Award, Star, MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import PersonalizedProcess from "@/components/PersonalizedProcess";
import CityCard from "@/components/CityCard";
import ProblemsSection from "@/components/ProblemsSection";
import CorsiSection from "@/components/CorsiSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

const stats = [
  { value: "500+", label: "Professionisti supportati" },
  { value: "98%", label: "Soddisfazione clienti" },
  { value: "15+", label: "Settori coperti" },
  { value: "100%", label: "Percorsi personalizzati" },
];

const homeProcessSteps = [
  { step: 1, title: "Analisi Diagnostica", description: "Valutiamo il tuo livello e i tuoi obiettivi specifici" },
  { step: 2, title: "Curriculum su Misura", description: "Progettiamo un percorso unico basato sulle tue esigenze" },
  { step: 3, title: "Sessioni Live", description: "Lezioni interattive 1:1 o di gruppo con esperti" },
  { step: 4, title: "Risultati Misurabili", description: "Tracking costante dei progressi e feedback dettagliato" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    period: "/sessione",
    features: ["Sessioni 1:1 da 60 min", "Materiale personalizzato", "Feedback scritto post-sessione", "Flessibilità oraria"],
    popular: false,
  },
  {
    name: "Professional",
    price: "189",
    period: "/mese",
    features: ["4 sessioni 1:1 da 60 min", "Curriculum personalizzato", "Supporto via chat illimitato", "Materiale esclusivo", "Report mensile progressi"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Sessioni illimitate", "Team coaching", "Programma aziendale su misura", "Manager dedicato", "Dashboard analytics"],
    popular: false,
  },
];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Prep with Smile",
    description: "Consulenza di carriera personalizzata per professionisti italiani e internazionali in Italia. Trova lavoro, cambia carriera, negozia lo stipendio e cresci professionalmente.",
    url: "https://www.prepwithsmile.it",
    sameAs: [],
    offer: {
      "@type": "Offer",
      name: "Sessione Gratuita",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  return (
    <>
      <SEOHead
        title="Consulenza Carriera & Coaching Professionale in Italia"
        description="Consulenza di carriera personalizzata per professionisti italiani e internazionali in Italia. Trova lavoro, cambia carriera, preparati ai colloqui e accelera la tua crescita professionale."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-background to-orange-light opacity-60" />
        {/* Decorative elements */}
        <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-orange/10 blur-3xl" />
        <div className="container mx-auto relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <Star className="w-4 h-4" /> #1 Career Consulting in Italia
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-heading mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Costruisci la <span className="text-gradient-teal">Carriera</span> che{" "}
                <span className="text-gradient-orange">Meriti</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Consulenza di carriera, ricerca lavoro, cambio di carriera e sviluppo professionale. Percorsi 100% personalizzati per professionisti italiani e internazionali in Italia.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Prenota Sessione GRATIS <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/prezzi"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  Vedi Prezzi
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="font-display text-2xl text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Professional coaching"
                className="rounded-3xl shadow-lg w-full object-cover aspect-[3/4] max-h-[600px]"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl gradient-teal opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full gradient-orange opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Corsi Section */}
      <CorsiSection />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              I Nostri Servizi
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Scegli il Percorso <span className="text-gradient-teal">Giusto per Te</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Quattro specializzazioni per coprire ogni aspetto della tua crescita professionale in Italia e nel mondo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} to={`/${service.slug}`} className="group">
                  <GlassCard className="h-full hover:border-primary/20">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                      service.color === "teal" ? "gradient-teal" : "gradient-orange"
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg text-heading mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                      Scopri di più <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalized Process */}
      <PersonalizedProcess steps={homeProcessSteps} />

      {/* Curriculum Highlight */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Personalized curriculum"
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-orange opacity-20 blur-xl" />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
                Curriculum
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-6">
                Nessun Corso <span className="text-gradient-orange">Pre-Confezionato</span>
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Ogni percorso è costruito al 100% sui tuoi obiettivi reali. Analizziamo il tuo settore, il tuo ruolo e le tue sfide quotidiane per creare una strategia di sviluppo professionale unica.
              </p>
              <ul className="space-y-4">
                {["Basato sui tuoi obiettivi di carriera reali", "Materiale personalizzato per il tuo settore", "Progressione adattiva al tuo ritmo", "Feedback continuo e misurabile"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-teal text-white font-body font-semibold shadow-teal hover:shadow-lg hover:scale-105 transition-all duration-200 mt-8"
              >
                Inizia il Tuo Percorso <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Dove Siamo
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Corsi in Tutta <span className="text-gradient-teal">Italia</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Online e personalizzati, con un focus sulle esigenze professionali di ogni città.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city.slug} {...city} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
              Prezzi
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
              Investi nella Tua <span className="text-gradient-orange">Crescita</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <GlassCard
                key={plan.name}
                className={`text-center relative ${plan.popular ? "ring-2 ring-secondary scale-105" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-orange text-white text-xs font-semibold">
                    Più Popolare
                  </span>
                )}
                <h3 className="font-display text-xl text-heading mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="font-display text-4xl text-heading">
                    {plan.price === "Custom" ? "" : "€"}{plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contatti"
                  className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-body font-semibold transition-all duration-200 ${
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

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Pronto a Fare il Prossimo Passo?
          </h2>
          <p className="font-body text-white/80 max-w-xl mx-auto mb-8">
            Prenota una sessione gratuita di 30 minuti. Nessun impegno, solo una conversazione per capire come possiamo aiutarti.
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
};

export default Index;
