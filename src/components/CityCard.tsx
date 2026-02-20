import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

interface CityCardProps {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
}

export default function CityCard({ slug, name, heroImage, description }: CityCardProps) {
  return (
    <Link
      to={`/citta/${slug}`}
      className="group block glass-card rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-primary" />
          <h3 className="font-display text-lg text-heading">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
          Scopri i corsi <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
