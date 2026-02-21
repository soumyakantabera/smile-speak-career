import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { problems } from "@/data/problems";

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-4 py-1.5 rounded-full mb-3">
            Ti riconosci?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-heading leading-tight">
            Le sfide reali di chi vuole{" "}
            <span className="text-gradient-orange">crescere professionalmente in Italia</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Che tu sia italiano o internazionale, vivere e lavorare in Italia richiede una strategia. Non sei solo — e ci sono soluzioni concrete per ogni sfida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.slice(0, 8).map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/problemi/${p.slug}`}
                className="group glass-card rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-teal group-hover:scale-110 transition-transform duration-300 ${
                  p.color === "teal" ? "gradient-teal" : "gradient-orange"
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg text-heading mb-2">{p.shortTitle}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:text-secondary transition-colors">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
