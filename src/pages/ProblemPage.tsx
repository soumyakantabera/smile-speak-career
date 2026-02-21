import { useParams, Link } from "react-router-dom";
import { getProblemBySlug } from "@/data/problems";
import { ArrowRight, CheckCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";

export default function ProblemPage() {
  const { slug } = useParams<{ slug: string }>();
  const problem = getProblemBySlug(slug || "");

  if (!problem) return <NotFound />;

  const Icon = problem.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: problem.title,
    description: problem.description,
    image: problem.heroImage,
    author: { "@type": "Organization", name: "Prep with Smile" },
    publisher: { "@type": "Organization", name: "Prep with Smile", url: "https://www.prepwithsmile.it" },
  };

  return (
    <>
      <SEOHead
        title={problem.title}
        description={problem.subtitle}
        path={`/problemi/${problem.slug}`}
        image={problem.heroImage}
        type="article"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <img src={problem.heroImage} alt={problem.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-heading/85 via-heading/60 to-transparent" />
        <div className="container mx-auto relative z-10 py-32">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${problem.color === "teal" ? "gradient-teal" : "gradient-orange"}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-3xl leading-tight">
            {problem.title}
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl">{problem.subtitle}</p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            {problem.ctaText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {problem.stats.map((stat) => (
              <GlassCard key={stat.label} className="text-center py-8">
                <div className={`font-display text-4xl mb-2 ${problem.color === "teal" ? "text-gradient-teal" : "text-gradient-orange"}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-gradient-to-b from-background to-surface-alt">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                problem.color === "teal" ? "bg-accent text-accent-foreground" : "bg-orange-light text-orange-dark"
              }`}>
                Il Problema
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-6">
                Perché Succede e{" "}
                <span className={problem.color === "teal" ? "text-gradient-teal" : "text-gradient-orange"}>Come Risolverlo</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">{problem.description}</p>
            </div>
            <div className="relative">
              <img
                src={problem.secondaryImage}
                alt={problem.shortTitle}
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl opacity-20 blur-xl ${problem.color === "teal" ? "gradient-teal" : "gradient-orange"}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-heading">
              Le Sfide che <span className="text-gradient-orange">Devi Affrontare</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problem.painPoints.map((pp, i) => (
              <GlassCard key={pp.title}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${problem.color === "teal" ? "gradient-teal" : "gradient-orange"}`}>
                  <span className="text-white font-display text-lg">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg text-heading mb-2">{pp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pp.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-to-b from-surface-alt to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                problem.color === "teal" ? "bg-accent text-accent-foreground" : "bg-orange-light text-orange-dark"
              }`}>
                La Soluzione
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-6">
                Come <span className="text-gradient-teal">Prep with Smile</span> Ti Aiuta
              </h2>
              <ul className="space-y-4">
                {problem.solutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{sol}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contatti"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-body font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 mt-8 ${
                  problem.color === "teal" ? "gradient-teal shadow-teal" : "gradient-orange shadow-orange"
                }`}
              >
                {problem.ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src={problem.heroImage}
                alt="Soluzione"
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Non Lasciare che l'Inglese Ti Freni
          </h2>
          <p className="font-body text-white/80 max-w-xl mx-auto mb-8">
            Prenota una sessione gratuita di 30 minuti. Analizzeremo il tuo caso specifico e ti proporremo un percorso su misura.
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
