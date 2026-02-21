import { getServiceBySlug } from "@/data/services";
import ServiceHero from "@/components/ServiceHero";
import PersonalizedProcess from "@/components/PersonalizedProcess";
import CustomCurriculum from "@/components/CustomCurriculum";
import GlassCard from "@/components/GlassCard";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

function ServicePage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "Prep with Smile", url: "https://www.prepwithsmile.it" },
  };

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.description}
        path={`/${service.slug}`}
        image={service.heroImage}
        jsonLd={jsonLd}
      />
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        heroImage={service.heroImage}
        color={service.color}
      />

      {/* Topics */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              service.color === "teal" ? "bg-accent text-accent-foreground" : "bg-orange-light text-orange-dark"
            }`}>
              Cosa Imparerai
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-heading">
              Argomenti del Percorso
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <GlassCard key={topic.title}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === "teal" ? "gradient-teal" : "gradient-orange"
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-heading mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <PersonalizedProcess steps={service.processSteps} />
      <CustomCurriculum curriculum={service.curriculum} secondaryImage={service.secondaryImage} />

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Pronto per il {service.title}?
          </h2>
          <p className="font-body text-white/80 max-w-xl mx-auto mb-8">
            Prenota la tua sessione gratuita e inizia il tuo percorso personalizzato.
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

export function BusinessEnglish() { return <ServicePage slug="business-english" />; }
export function CareerCounselling() { return <ServicePage slug="career-counselling" />; }
export function InterviewPrep() { return <ServicePage slug="interview-prep" />; }
export function IELTSPrep() { return <ServicePage slug="ielts-prep" />; }
