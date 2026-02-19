import { Linkedin, Instagram, Mail, Phone, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contatti" className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <span className="font-display text-primary-foreground font-bold text-lg block">
                  Learn with <span className="text-gradient-gold">Smile</span>
                </span>
                <span className="text-primary-foreground/50 text-[10px] uppercase tracking-widest">
                  Inglese & Carriera
                </span>
              </div>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Corsi di Business English e coaching di carriera personalizzati per professionisti italiani.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Programmi</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              {["Business English (1:1)", "Business English (Gruppo)", "Career Accelerator", "Conversazione & Fluency"].map((item) => (
                <li key={item}>
                  <a href="#programmi" className="hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@learnwithsmile.it" className="hover:text-accent transition-colors">
                  info@learnwithsmile.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+39000000000" className="hover:text-accent transition-colors">
                  +39 000 000 0000
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-xs text-primary-foreground/40">
          <span>© 2025 Learn with Smile Italy. Tutti i diritti riservati.</span>
          <span>Corsi di inglese business · Coaching carriera · Online</span>
        </div>
      </div>
    </footer>
  );
}
