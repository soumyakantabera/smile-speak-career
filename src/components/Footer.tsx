import { Link } from "react-router-dom";
import Logo from "./Logo";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-heading text-white/80 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm text-white/60 mt-4">
              Percorsi 100% personalizzati di Business English, Career Counselling, Interview Prep e IELTS per professionisti italiani.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-sm uppercase tracking-wider mb-4">Servizi</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm text-white/60 hover:text-secondary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-display text-white text-sm uppercase tracking-wider mb-4">Città</h4>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link to={`/citta/${c.slug}`} className="text-sm text-white/60 hover:text-secondary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-sm uppercase tracking-wider mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4" /> info@prepwithsmile.it
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4" /> +39 02 1234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" /> Online — Tutta Italia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Prep with Smile. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link to="/chi-siamo" className="text-xs text-white/40 hover:text-white/60 transition-colors">Chi Siamo</Link>
            <Link to="/prezzi" className="text-xs text-white/40 hover:text-white/60 transition-colors">Prezzi</Link>
            <Link to="/contatti" className="text-xs text-white/40 hover:text-white/60 transition-colors">Contatti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
