import GlassCard from "./GlassCard";
import { ClipboardCheck, Pencil, Video, TrendingUp } from "lucide-react";

interface Step {
  step: number;
  title: string;
  description: string;
}

const stepIcons = [ClipboardCheck, Pencil, Video, TrendingUp];

export default function PersonalizedProcess({ steps }: { steps: Step[] }) {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            100% Personalizzato
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
            Il Tuo Percorso, <span className="text-gradient-teal">Su Misura</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Nessun corso pre-confezionato. Ogni sessione è costruita intorno ai tuoi obiettivi reali.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = stepIcons[i] || ClipboardCheck;
            return (
              <GlassCard key={s.step} className="text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-teal flex items-center justify-center text-white text-sm font-bold shadow-teal">
                  {s.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 mt-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg text-heading mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{s.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
