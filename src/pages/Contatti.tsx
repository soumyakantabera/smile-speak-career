import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SEOHead from "@/components/SEOHead";

export default function Contatti() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead title="Contatti" description="Prenota la tua sessione gratuita di Business English o career coaching. Compila il modulo e ti ricontatteremo entro 24 ore." path="/contatti" />
      <section className="pt-32 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">Contattaci</span>
            <h1 className="font-display text-4xl md:text-5xl text-heading mb-6">
              Prenota la Tua Sessione <span className="text-gradient-orange">Gratuita</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Compila il modulo e ti ricontatteremo entro 24 ore per fissare la tua sessione gratuita di 30 minuti.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@prepwithsmile.it" },
                { icon: Phone, label: "Telefono", value: "+39 02 1234 5678" },
                { icon: MapPin, label: "Sede", value: "Online — Tutta Italia" },
                { icon: Clock, label: "Orari", value: "Lun-Ven 9:00-21:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={item.label} hover={false} className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      <div className="font-body text-heading font-medium">{item.value}</div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <GlassCard hover={false} className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full gradient-teal flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl text-heading mb-2">Messaggio Inviato!</h3>
                    <p className="text-muted-foreground">Ti ricontatteremo entro 24 ore.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-heading mb-1.5">Nome *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-body" placeholder="Il tuo nome" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-heading mb-1.5">Cognome *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-body" placeholder="Il tuo cognome" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-body" placeholder="la.tua@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">Servizio di Interesse</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-body">
                        <option value="">Seleziona un servizio</option>
                        <option value="business-english">Business English</option>
                        <option value="career-counselling">Career Counselling</option>
                        <option value="interview-prep">Interview Prep</option>
                        <option value="ielts-prep">IELTS Prep</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">Messaggio</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-body resize-none" placeholder="Raccontaci i tuoi obiettivi..." />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-orange text-white font-body font-semibold shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                    >
                      <Send className="w-5 h-5" /> Prenota Sessione GRATIS
                    </button>
                  </form>
                )}
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
