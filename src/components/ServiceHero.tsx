import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  color: "teal" | "orange";
}

export default function ServiceHero({ title, subtitle, description, heroImage, color }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-heading/80 via-heading/60 to-transparent" />
      <div className="container mx-auto relative z-10 py-32">
        <div className="max-w-2xl">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
            color === "teal"
              ? "bg-primary/20 text-teal-light"
              : "bg-secondary/20 text-orange-light"
          }`}>
            {title}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {subtitle}
          </h1>
          <p className="font-body text-lg text-white/80 mb-8 max-w-lg">
            {description}
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Prenota Sessione GRATIS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
