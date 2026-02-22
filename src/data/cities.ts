export interface CityData {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  localContext: string;
  testimonial: { name: string; role: string; quote: string };
}

export const cities: CityData[] = [
  {
    slug: "milano",
    name: "Milano",
    heroImage: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=1200&q=80",
    description: "Corsi di inglese professionale a Milano per professionisti, manager e aziende. Online e personalizzati.",
    localContext: "Milano, capitale finanziaria e della moda d'Italia, richiede competenze linguistiche avanzate per competere nel mercato internazionale. I nostri corsi sono pensati per professionisti milanesi che lavorano in finanza, moda, design e tech.",
    testimonial: { name: "Alessandra R.", role: "Marketing Manager, Milano", quote: "Grazie a Prep with Smile ho ottenuto una promozione internazionale in soli 4 mesi." },
  },
  {
    slug: "roma",
    name: "Roma",
    heroImage: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80",
    description: "Corsi di inglese professionale a Roma per diplomatici, manager e professionisti. 100% online.",
    localContext: "Roma, centro della diplomazia e della pubblica amministrazione italiana, richiede competenze linguistiche per relazioni internazionali e organizzazioni globali. I nostri percorsi sono ideali per diplomatici, avvocati e professionisti romani.",
    testimonial: { name: "Marco T.", role: "Avvocato Internazionale, Roma", quote: "Il percorso di Business English mi ha permesso di gestire clienti internazionali con totale sicurezza." },
  },
  {
    slug: "torino",
    name: "Torino",
    heroImage: "https://images.unsplash.com/photo-1564594326930-fd1eab5ac726?w=1200&q=80",
    description: "Corsi di inglese professionale a Torino per ingegneri, manager automotive e professionisti tech.",
    localContext: "Torino, cuore dell'industria automotive e dell'innovazione tecnologica italiana, ha bisogno di professionisti che comunicano fluentemente in inglese tecnico. I nostri corsi sono calibrati su ingegneria, manufacturing e tech.",
    testimonial: { name: "Luca F.", role: "Ingegnere Automotive, Torino", quote: "Le simulazioni di presentazioni tecniche in inglese hanno trasformato la mia carriera." },
  },
  {
    slug: "firenze",
    name: "Firenze",
    heroImage: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80",
    description: "Corsi di inglese professionale a Firenze per il settore luxury, turismo e arte.",
    localContext: "Firenze, patrimonio mondiale dell'arte e del lusso, richiede un inglese raffinato per hospitality, fashion e mercato dell'arte internazionale. I nostri percorsi combinano eleganza comunicativa e competenza professionale.",
    testimonial: { name: "Giulia M.", role: "Gallery Director, Firenze", quote: "Ora gestisco acquisizioni internazionali e fiere d'arte con naturalezza." },
  },
  {
    slug: "bologna",
    name: "Bologna",
    heroImage: "https://images.unsplash.com/photo-1569596082827-c5e8990da028?w=1200&q=80",
    description: "Corsi di inglese professionale a Bologna per accademici, ricercatori e professionisti.",
    localContext: "Bologna, sede della più antica università del mondo e hub di innovazione, richiede competenze linguistiche accademiche e professionali. I nostri corsi supportano ricercatori, docenti e professionisti bolognesi.",
    testimonial: { name: "Stefano B.", role: "Ricercatore Universitario, Bologna", quote: "Ho pubblicato il mio primo paper in inglese e presentato a una conferenza internazionale." },
  },
  {
    slug: "napoli",
    name: "Napoli",
    heroImage: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1200&q=80",
    description: "Corsi di inglese professionale a Napoli per imprenditori, professionisti e startup.",
    localContext: "Napoli, città vibrante con un ecosistema startup in rapida crescita, ha bisogno di professionisti che parlano inglese per scalare a livello internazionale. I nostri corsi aiutano imprenditori e professionisti napoletani a conquistare mercati globali.",
    testimonial: { name: "Chiara V.", role: "Startup Founder, Napoli", quote: "Prep with Smile mi ha preparata per il pitch che ha portato il nostro primo investimento internazionale." },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
