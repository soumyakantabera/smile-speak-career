import {
  TrendingDown, Globe, Users, GraduationCap, FileSearch,
  BriefcaseBusiness, Brain, ShieldAlert, Presentation, Mail,
  Target, Lightbulb, Award, Network
} from "lucide-react";

export interface ProblemData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  icon: any;
  color: "teal" | "orange";
  stats: { value: string; label: string }[];
  painPoints: { title: string; description: string }[];
  solutions: string[];
  ctaText: string;
}

export const problems: ProblemData[] = [
  {
    slug: "carriera-in-stallo",
    title: "Carriera in Stallo: Come Sbloccarla e Avanzare",
    shortTitle: "Carriera in Stallo",
    subtitle: "Hai le competenze, l'esperienza e la motivazione — ma non riesci ad avanzare professionalmente",
    description: "Molti professionisti in Italia raggiungono un punto in cui la crescita si ferma. Non mancano le capacità, ma la strategia, la visibilità e il posizionamento giusto nel mercato. Con il supporto giusto, puoi sbloccare il prossimo livello della tua carriera in modo concreto e misurabile.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    icon: TrendingDown,
    color: "teal",
    stats: [
      { value: "65%", label: "Professionisti in stallo da +2 anni" },
      { value: "€18K", label: "Gap salariale medio non recuperato" },
      { value: "3x", label: "Avanzamento più rapido con coaching" },
      { value: "91%", label: "Ottiene promozioni dopo il percorso" },
    ],
    painPoints: [
      { title: "Promozioni Mancate", description: "Sei il candidato ideale, ma il ruolo va sempre a qualcun altro. Senza una strategia di visibilità, le opportunità passano oltre." },
      { title: "Nessun Feedback Utile", description: "I tuoi superiori non ti danno indicazioni chiare su cosa manca. Senza un punto di vista esterno, è difficile capire dove migliorare." },
      { title: "Competenze Non Riconosciute", description: "Sai di valere di più, ma il mercato non lo riconosce. Il personal branding e il posizionamento sono la chiave." },
      { title: "Mancanza di Direzione", description: "Non hai un piano chiaro per i prossimi 2–5 anni. Senza una roadmap, la carriera avanza a caso, non per scelta." },
    ],
    solutions: [
      "Assessment completo delle tue competenze, punti di forza e gap da colmare",
      "Piano di carriera strategico con obiettivi concreti e misurabili",
      "Coaching su leadership, comunicazione e visibilità professionale",
      "Supporto continuo per decisioni di carriera critiche",
    ],
    ctaText: "Sblocca la Tua Carriera",
  },
  {
    slug: "trovare-lavoro-italia",
    title: "Trovare Lavoro in Italia: Le Sfide del Mercato Moderno",
    shortTitle: "Trovare Lavoro",
    subtitle: "Il mercato del lavoro italiano è competitivo e richiede una strategia di ricerca mirata e professionale",
    description: "Trovare il lavoro giusto in Italia non significa solo inviare il CV ovunque. Richiede una strategia precisa: sapere dove cercare, come posizionarsi, come superare i filtri dei recruiter e come distinguersi in fase di selezione. Noi ti guidiamo in ogni fase del processo, dalla ricerca all'offerta accettata.",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
    icon: Target,
    color: "orange",
    stats: [
      { value: "6 mesi", label: "Durata media ricerca lavoro in Italia" },
      { value: "80%", label: "Posizioni coperte tramite networking" },
      { value: "3x", label: "Più offerte con strategia mirata" },
      { value: "92%", label: "Trova lavoro entro 90 giorni con noi" },
    ],
    painPoints: [
      { title: "CV che non Vengono Letti", description: "Decine di candidature, zero risposte. Il tuo profilo non è ottimizzato per i sistemi di screening automatici (ATS)." },
      { title: "Canali di Ricerca Sbagliati", description: "Affidarsi solo ai portali online significa perdere l'80% delle opportunità che circolano nel mercato nascosto." },
      { title: "Nessuna Risposta dai Recruiter", description: "Non sai come attirare l'attenzione dei selezionatori o come fare follow-up in modo professionale ed efficace." },
      { title: "Colloqui che Non Portano a Nulla", description: "Arrivi al colloquio ma non riesci a convertirlo in un'offerta. Manca preparazione strategica e storytelling efficace." },
    ],
    solutions: [
      "Strategia di job search personalizzata per il tuo settore e obiettivi",
      "Ottimizzazione CV e profilo LinkedIn per massimizzare la visibilità",
      "Coaching per colloqui: metodo STAR, gestione delle domande difficili, confidence",
      "Accesso alla rete professionale e supporto nel networking attivo",
    ],
    ctaText: "Inizia la Tua Ricerca Lavoro",
  },
  {
    slug: "cambio-di-carriera",
    title: "Cambio di Carriera: Come Fare il Salto Senza Rischi",
    shortTitle: "Cambio di Carriera",
    subtitle: "Vuoi cambiare settore o ruolo ma non sai da dove cominciare? Non sei solo",
    description: "Un cambio di carriera è una delle decisioni più importanti e coraggiose che un professionista possa prendere. Richiede pianificazione, analisi del mercato, re-branding professionale e una strategia di transizione chiara. Il nostro team ti accompagna in ogni fase, riducendo i rischi e massimizzando le possibilità di successo.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: Lightbulb,
    color: "teal",
    stats: [
      { value: "40%", label: "Professionisti vogliono cambiare settore" },
      { value: "18 mesi", label: "Tempo medio per una transizione riuscita" },
      { value: "2x", label: "Maggiore soddisfazione dopo il cambio" },
      { value: "88%", label: "Riesce nella transizione con supporto" },
    ],
    painPoints: [
      { title: "Non Sai da Dove Iniziare", description: "Il cambiamento sembra enorme e non hai una mappa. Senza una guida strutturata, rischi di girare in cerchio per anni." },
      { title: "Paura di Perdere Tutto", description: "Anni di esperienza nel settore attuale sembrano non trasferibili. In realtà, le tue competenze hanno valore anche altrove." },
      { title: "Come Comunicare il Cambio", description: "Come spiegare a un recruiter perché cambi settore? Il tuo storytelling deve essere costruito strategicamente." },
      { title: "Gap di Competenze", description: "Il nuovo settore richiede skill specifiche. Quale formazione è veramente necessaria e quale è inutile?" },
    ],
    solutions: [
      "Assessment approfondito delle competenze trasferibili e dei nuovi obiettivi",
      "Analisi del mercato target e identificazione delle opportunità concrete",
      "Re-branding del profilo professionale per il nuovo settore",
      "Piano di sviluppo competenze mirato e coaching per la transizione",
    ],
    ctaText: "Pianifica il Tuo Cambio",
  },
  {
    slug: "professionisti-stranieri-italia",
    title: "Professionisti Internazionali in Italia: Come Avanzare",
    shortTitle: "Stranieri in Italia",
    subtitle: "Sei in Italia e vuoi costruire la tua carriera qui? Ti aiutiamo a navigare il mercato del lavoro italiano",
    description: "Lavorare e fare carriera in Italia da professionista straniero presenta sfide uniche: il sistema lavorativo italiano, le dinamiche culturali, il riconoscimento delle qualifiche estere e il networking locale. Il nostro team multiculturale conosce queste sfide da dentro e ti supporta con un approccio personalizzato e concreto.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80",
    icon: Globe,
    color: "orange",
    stats: [
      { value: "600K+", label: "Professionisti stranieri in Italia" },
      { value: "2x", label: "Tempo per trovare lavoro vs italiani" },
      { value: "70%", label: "Non sfrutta le proprie qualifiche" },
      { value: "85%", label: "Avanza più velocemente con coaching" },
    ],
    painPoints: [
      { title: "Qualifiche Non Riconosciute", description: "I tuoi titoli di studio e le tue esperienze internazionali non vengono valutati al giusto livello dai recruiter italiani." },
      { title: "Network Locale Assente", description: "In Italia, il networking è fondamentale per accedere alle opportunità. Costruire una rete professionale locale richiede tempo e strategia." },
      { title: "Dinamiche Culturali Diverse", description: "Le regole non scritte del mercato del lavoro italiano — dalla comunicazione alle relazioni — sono diverse da quelle del tuo Paese." },
      { title: "Burocrazia e Aspetti Legali", description: "Permessi di lavoro, contratti e aspetti fiscali per professionisti stranieri in Italia sono complessi e spesso poco chiari." },
    ],
    solutions: [
      "Orientamento completo sul mercato del lavoro italiano e le sue dinamiche",
      "Adattamento del profilo professionale ai canoni del recruitment italiano",
      "Coaching interculturale per integrarsi efficacemente nell'ambiente lavorativo",
      "Supporto nella costruzione di un network professionale locale solido",
    ],
    ctaText: "Costruisci la Tua Carriera in Italia",
  },
  {
    slug: "colloqui-lavoro",
    title: "Colloqui di Lavoro: Come Conquistare il Selezionatore",
    shortTitle: "Colloqui di Lavoro",
    subtitle: "Il 70% delle persone non si prepara strategicamente al colloquio — e si vede",
    description: "Un colloquio di lavoro non è una conversazione spontanea: è una performance strategica che si prepara. Che sia il tuo primo colloquio o il tuo centesimo, c'è sempre un modo per farlo meglio. Il nostro coaching ti dà gli strumenti concreti per presentarti al meglio e trasformare ogni colloquio in un'offerta.",
    heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    icon: ShieldAlert,
    color: "teal",
    stats: [
      { value: "70%", label: "Non si prepara strategicamente" },
      { value: "1su5", label: "Colloqui convertiti in offerta (media)" },
      { value: "3x", label: "Più offerte con preparazione strutturata" },
      { value: "94%", label: "Soddisfazione dopo il nostro coaching" },
    ],
    painPoints: [
      { title: "Ansia e Blocco", description: "L'ansia pre-colloquio è normale, ma senza strumenti per gestirla ti fa perdere lucidità nel momento chiave." },
      { title: "Risposte Non Strutturate", description: "Sai cosa vuoi dire, ma le parole non escono nel modo giusto. Il metodo STAR risolve questo problema definitivamente." },
      { title: "Non Conosci l'Azienda", description: "Entrare in un colloquio senza aver fatto ricerca sull'azienda è il modo più rapido per essere eliminati." },
      { title: "Domande Difficili", description: "'Qual è il tuo più grande difetto?' — senza preparazione, queste domande ti colgono impreparato nel momento peggiore." },
    ],
    solutions: [
      "Mock interview realistici con feedback immediato e dettagliato",
      "Metodo STAR per strutturare risposte convincenti a qualsiasi domanda",
      "Ricerca e preparazione specifica per ogni azienda e ruolo",
      "Tecniche di gestione dell'ansia e comunicazione con impatto",
    ],
    ctaText: "Preparati al Prossimo Colloquio",
  },
  {
    slug: "cv-linkedin-italia",
    title: "CV e LinkedIn: Perché Non Ricevi Risposte",
    shortTitle: "CV & LinkedIn",
    subtitle: "Un profilo non ottimizzato significa invisibilità nel mercato del lavoro",
    description: "Il tuo CV e il tuo profilo LinkedIn sono il tuo biglietto da visita professionale. Se non attirano l'attenzione dei recruiter nei primi 6 secondi, non esisti. Non è una questione di esperienza — è una questione di come la presenti. Ottimizziamo il tuo profilo per il mercato italiano e internazionale, rendendoti visibile alle opportunità giuste.",
    heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80",
    icon: FileSearch,
    color: "orange",
    stats: [
      { value: "6sec", label: "Tempo medio review recruiter" },
      { value: "75%", label: "CV non superano il primo filtro" },
      { value: "5x", label: "Più risposte con profilo ottimizzato" },
      { value: "40%", label: "Opportunità arrivano via LinkedIn" },
    ],
    painPoints: [
      { title: "Formato Non Efficace", description: "Struttura, lunghezza, sezioni: un CV mal formattato viene scartato prima ancora di essere letto." },
      { title: "LinkedIn Sottoutilizzato", description: "Un profilo LinkedIn generico non attira recruiter. Servono keyword strategiche, contenuti e una headline efficace." },
      { title: "Competenze Non in Evidenza", description: "Le tue migliori esperienze si perdono nel testo. I punti di forza devono essere immediatamente visibili e quantificati." },
      { title: "Mancanza di Personal Branding", description: "Non si tratta solo di elencare esperienze: devi comunicare chi sei, cosa porti e perché sei la scelta giusta." },
    ],
    solutions: [
      "Riscrittura completa del CV ottimizzato per ATS e recruiter umani",
      "Ottimizzazione del profilo LinkedIn con keyword e contenuti strategici",
      "Personal branding coaching per differenziarti nel mercato",
      "Template e best practice aggiornate per il mercato italiano e internazionale",
    ],
    ctaText: "Ottimizza il Tuo Profilo",
  },
  {
    slug: "negoziazione-stipendio",
    title: "Negoziare lo Stipendio: Non Lasciare Soldi sul Tavolo",
    shortTitle: "Negoziazione Stipendio",
    subtitle: "La maggior parte dei professionisti accetta la prima offerta senza negoziare — perdendo migliaia di euro ogni anno",
    description: "La negoziazione salariale è una competenza che si impara, non un talento innato. Che tu stia cambiando lavoro, chiedendo un aumento o valutando un'offerta, sapere come negoziare con efficacia può valere decine di migliaia di euro nel corso della carriera. Ti insegniamo le strategie concrete per ottenere quello che meriti.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    icon: BriefcaseBusiness,
    color: "teal",
    stats: [
      { value: "€15K", label: "Lasciati sul tavolo in media" },
      { value: "82%", label: "Non negozia la prima offerta" },
      { value: "3x", label: "Più successo con preparazione" },
      { value: "€50K+", label: "Impatto in 5 anni di carriera" },
    ],
    painPoints: [
      { title: "Paura del Rifiuto", description: "La paura di perdere l'offerta spinge ad accettare subito, senza esplorare se ci sono margini di miglioramento." },
      { title: "Non Conosci il Tuo Valore", description: "Senza dati di mercato aggiornati, non sai se la tua offerta è giusta, bassa o alta rispetto al mercato." },
      { title: "Non Sai Come Chiederlo", description: "Come iniziare la conversazione sullo stipendio? Cosa dire, quando dirlo e come mantenersi professionali e assertivi." },
      { title: "Benefits Ignorati", description: "Oltre allo stipendio base, ci sono smart working, bonus, formazione, ferie e benefit che molti non sanno negoziare." },
    ],
    solutions: [
      "Analisi del mercato salariale per il tuo ruolo, settore e livello",
      "Simulazioni di negoziazione con scenari realistici e feedback diretto",
      "Script e frasi chiave per ogni fase della trattativa",
      "Strategie per counter-offer, aumenti e negoziazione del pacchetto completo",
    ],
    ctaText: "Impara a Negoziare",
  },
  {
    slug: "networking-professionale",
    title: "Networking Professionale: Costruire Relazioni che Contano",
    shortTitle: "Networking",
    subtitle: "In Italia, l'80% delle opportunità di lavoro non viene pubblicato — circola nel network",
    description: "Il networking non è scambiarsi biglietti da visita: è costruire relazioni genuine e strategiche che aprono porte nel lungo periodo. In Italia, le relazioni professionali sono ancora più determinanti che altrove. Il nostro coaching ti insegna come costruire una rete di valore, mantenerla nel tempo e sfruttarla per la tua crescita professionale.",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    icon: Network,
    color: "orange",
    stats: [
      { value: "80%", label: "Lavori trovati tramite network" },
      { value: "70%", label: "Si sente a disagio nel networking" },
      { value: "4x", label: "Più opportunità con network attivo" },
      { value: "89%", label: "Migliora relazioni con il coaching" },
    ],
    painPoints: [
      { title: "Non Sai Come Iniziare", description: "Avvicinarsi a sconosciuti o scrivere su LinkedIn senza motivo sembra imbarazzante. Servono un metodo e un approccio autentico." },
      { title: "Network Superficiale", description: "Hai molti contatti ma poche relazioni vere. Un grande network senza profondità non porta opportunità reali." },
      { title: "Non Mantieni i Contatti", description: "Conosci persone interessanti ma poi il contatto si perde. Mantenere un network richiede sistema e costanza." },
      { title: "Non Sai Come Chiedere Aiuto", description: "Sai che il tuo network potrebbe aprirti porte, ma non sai come attivarlo senza sembrare opportunista." },
    ],
    solutions: [
      "Strategia di networking personalizzata per i tuoi obiettivi di carriera",
      "Coaching su comunicazione, elevator pitch e first impression",
      "Tecniche per costruire e mantenere relazioni professionali genuine",
      "Uso strategico di LinkedIn e eventi per espandere il network",
    ],
    ctaText: "Costruisci il Tuo Network",
  },
];

export function getProblemBySlug(slug: string): ProblemData | undefined {
  return problems.find((p) => p.slug === slug);
}
