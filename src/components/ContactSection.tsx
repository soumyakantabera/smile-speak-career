import { Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6 shadow-gold">
            <Mail className="w-8 h-8 text-accent-foreground" />
          </div>

          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Inizia Oggi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            Prenota la tua{" "}
            <span className="text-gradient-gold">sessione gratuita</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Compila il modulo o scrivici direttamente. Ti risponderemo entro 24 ore per fissare la tua prima sessione gratuita.
          </p>

          <form className="bg-surface rounded-2xl border border-border p-8 shadow-card text-left space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Nome</label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Cognome</label>
                <input
                  type="text"
                  placeholder="Il tuo cognome"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                placeholder="tua@email.it"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">Interesse</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all">
                <option value="">Seleziona un programma</option>
                <option>Business English (1:1)</option>
                <option>Business English (Gruppo)</option>
                <option>Career Accelerator</option>
                <option>Conversazione & Fluency</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">Messaggio (opzionale)</label>
              <textarea
                rows={3}
                placeholder="Descrivi brevemente i tuoi obiettivi..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg gradient-gold text-accent-foreground font-body font-bold text-base shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Prenota Sessione GRATIS
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
