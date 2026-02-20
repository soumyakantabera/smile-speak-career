import GlassCard from "./GlassCard";
import { BookOpen } from "lucide-react";

interface CurriculumCategory {
  category: string;
  items: string[];
}

interface Props {
  curriculum: CurriculumCategory[];
  secondaryImage: string;
  title?: string;
}

export default function CustomCurriculum({ curriculum, secondaryImage, title = "Curriculum Personalizzato" }: Props) {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-light text-orange-dark text-sm font-semibold mb-4">
            Curriculum
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">
            {title}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ogni argomento è calibrato sul tuo livello, il tuo settore e i tuoi obiettivi professionali.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {curriculum.map((cat) => (
              <GlassCard key={cat.category} hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-heading">{cat.category}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <div className="relative">
            <img
              src={secondaryImage}
              alt="Curriculum"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-orange opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
