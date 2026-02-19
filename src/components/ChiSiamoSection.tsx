import { Globe, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "La Nostra Visione",
    desc: "Democratizzare le carriere globali per il talento italiano. Crediamo che ogni professionista italiano meriti la possibilità di competere e brillare sul mercato internazionale.",
  },
  {
    icon: Heart,
    title: "Il Nostro Approccio",
    desc: "Non insegniamo solo l'inglese: insegniamo come pensare, comunicare e posizionarsi in un contesto lavorativo globale, con empatia e attenzione alle sfide reali.",
  },
  {
    icon: Award,
    title: "I Nostri Risultati",
    desc: "500+ professionisti formati, 98% di soddisfazione, e centinaia di storie di successo: promozioni, nuovi lavori, e carriere internazionali costruite insieme.",
  },
];

export default function ChiSiamoSection() {
  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
              alt="Team Prep with Smile — coaching professionisti italiani"
              className="w-full h-80 lg:h-[480px] object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 text-accent-foreground font-body font-bold text-sm shadow-gold">
                🇮🇹 Democratizing global careers for Italian talent
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Chi Siamo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6">
              Nati per far{" "}
              <span className="text-gradient-gold">brillare</span>{" "}
              il talento italiano
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Prep with Smile nasce dalla convinzione che la barriera linguistica non debba frenare nessun talento italiano. Il nostro team di coach e docenti madrelingua lavora ogni giorno per abbattere questa barriera, un professionista alla volta.
            </p>

            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                    <v.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary mb-1">{v.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
