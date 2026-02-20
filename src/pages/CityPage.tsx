import { useParams, Link } from "react-router-dom";
import { getCityBySlug, cities } from "@/data/cities";
import { services } from "@/data/services";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import NotFound from "./NotFound";

export default function CityPage() {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");

  if (!city) return <NotFound />;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={city.heroImage} alt={city.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-heading/80 via-heading/50 to-transparent" />
        <div className="container mx-auto relative z-10 py-32">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-white/80 font-body">{city.name}, Italia</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Corsi di Inglese a <span className="text-gradient-orange">{city.name}</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl">{city.description}</p>
        </div>
      </section>

      {/* Context */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">{city.localContext}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl text-heading text-center mb-12">
            Servizi Disponibili a <span className="text-gradient-teal">{city.name}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="group">
                  <GlassCard className="text-center h-full">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      s.color === "teal" ? "gradient-teal" : "gradient-orange"
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-lg text-heading mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.subtitle}</p>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto max-w-2xl">
          <GlassCard hover={false} className="text-center py-10">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
            <p className="font-body text-lg text-foreground italic mb-6">"{city.testimonial.quote}"</p>
            <div className="font-display text-heading">{city.testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{city.testimonial.role}</div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl text-white mb-6">
            Inizia il Tuo Percorso a {city.name}
          </h2>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Prenota Sessione GRATIS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
