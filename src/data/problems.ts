import {
  TrendingDown, Globe, Languages, Users, GraduationCap, FileSearch,
  BriefcaseBusiness, Brain, ShieldAlert, MessageCircleWarning, Presentation, Mail
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
    slug: "barriera-linguistica-carriera",
    title: "La Barriera Linguistica che Frena la Tua Carriera",
    shortTitle: "Barriera Linguistica",
    subtitle: "Il 72% dei professionisti italiani ammette che il proprio inglese limita le opportunità di carriera",
    description: "In Italia, la competenza linguistica in inglese è tra le più basse d'Europa. Questo gap si traduce in promozioni mancate, offerte di lavoro inaccessibili e una crescita professionale stagnante. Non è una questione di intelligenza — è una questione di preparazione strategica.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    icon: TrendingDown,
    color: "teal",
    stats: [
      { value: "72%", label: "Professionisti frenati dall'inglese" },
      { value: "€12K", label: "Gap salariale medio annuo" },
      { value: "35°", label: "Posizione Italia EF EPI" },
      { value: "3x", label: "Più opportunità con B2+" },
    ],
    painPoints: [
      { title: "Promozioni Bloccate", description: "I ruoli manageriali e internazionali richiedono un inglese fluente. Senza, resti fermo nella stessa posizione." },
      { title: "Stipendi Inferiori", description: "I professionisti con inglese avanzato guadagnano in media €12.000 in più all'anno rispetto ai colleghi." },
      { title: "Opportunità Invisibili", description: "Il 60% delle offerte di lavoro premium in Europa richiede inglese B2 o superiore come requisito." },
      { title: "Isolamento Professionale", description: "Nelle aziende multinazionali, chi non parla inglese viene escluso dai progetti strategici e dalle decisioni chiave." },
    ],
    solutions: [
      "Percorso personalizzato basato sul tuo settore e ruolo",
      "Focus sulla comunicazione professionale reale, non sulla grammatica teorica",
      "Risultati misurabili in 3-6 mesi con feedback continuo",
      "Supporto per situazioni lavorative quotidiane: email, call, meeting",
    ],
    ctaText: "Supera la Barriera Linguistica",
  },
  {
    slug: "ansia-colloqui-inglese",
    title: "Ansia da Colloquio in Inglese: Come Superarla",
    shortTitle: "Ansia Colloqui",
    subtitle: "L'85% dei candidati italiani si sente insicuro durante i colloqui in lingua inglese",
    description: "Hai le competenze tecniche, l'esperienza e la motivazione. Ma quando arriva il colloquio in inglese, l'ansia prende il sopravvento. Le parole non escono, le risposte suonano poco convincenti e perdi un'opportunità che meritavi. Questo problema è più comune di quanto pensi — e ha una soluzione.",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
    icon: ShieldAlert,
    color: "orange",
    stats: [
      { value: "85%", label: "Candidati insicuri nei colloqui" },
      { value: "60%", label: "Rifiutano offerte per paura" },
      { value: "3x", label: "Più successo con preparazione" },
      { value: "92%", label: "Successo dopo il nostro coaching" },
    ],
    painPoints: [
      { title: "Blocco Mentale", description: "La paura di sbagliare paralizza: conosci la risposta in italiano, ma in inglese le parole non escono." },
      { title: "Risposte Poco Strutturate", description: "Senza un metodo come STAR, le risposte risultano confuse e poco convincenti per i recruiter." },
      { title: "Pronuncia e Fluency", description: "L'accento italiano forte e le pause frequenti riducono la percezione di competenza professionale." },
      { title: "Domande Inaspettate", description: "Le behavioral questions e i case study in inglese richiedono pensiero rapido e vocabolario specifico." },
    ],
    solutions: [
      "Mock interview realistiche con feedback dettagliato",
      "Metodo STAR per strutturare risposte vincenti",
      "Tecniche di gestione dell'ansia e confidence building",
      "Preparazione specifica per ogni azienda e ruolo target",
    ],
    ctaText: "Prepara il Tuo Colloquio",
  },
  {
    slug: "meeting-internazionali",
    title: "Sopravvivere ai Meeting Internazionali",
    shortTitle: "Meeting Internazionali",
    subtitle: "Il 67% dei professionisti italiani evita di parlare durante i meeting in inglese",
    description: "Sei seduto in un meeting internazionale. I colleghi stranieri discutono, propongono idee, prendono decisioni. Tu ascolti, capisci quasi tutto, ma non intervieni. Non perché non hai niente da dire — ma perché non sai come dirlo in inglese con la giusta sicurezza. Ogni meeting silenzioso è un'opportunità persa.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: Users,
    color: "teal",
    stats: [
      { value: "67%", label: "Evitano di parlare nei meeting" },
      { value: "4h", label: "Ore settimanali in meeting EN" },
      { value: "78%", label: "Si sentono esclusi" },
      { value: "2x", label: "Più visibilità chi interviene" },
    ],
    painPoints: [
      { title: "Invisibilità Professionale", description: "Chi non parla nei meeting non viene considerato per progetti importanti e promozioni." },
      { title: "Incomprensioni", description: "Accenti diversi, gergo tecnico e velocità del parlato rendono difficile seguire le discussioni." },
      { title: "Mancanza di Assertività", description: "Interrompere, dissentire e proporre in inglese richiede competenze linguistiche specifiche." },
      { title: "Follow-up Inefficaci", description: "Dopo il meeting, scrivere minute e action items in inglese professionale è un'ulteriore sfida." },
    ],
    solutions: [
      "Simulazioni di meeting con scenario e ruoli realistici",
      "Vocabolario e frasi chiave per ogni situazione di meeting",
      "Tecniche di ascolto attivo per accenti diversi",
      "Template per minute, follow-up e presentazioni",
    ],
    ctaText: "Domina i Tuoi Meeting",
  },
  {
    slug: "email-professionali-inglese",
    title: "Email Professionali in Inglese: Errori che Ti Costano Caro",
    shortTitle: "Email Professionali",
    subtitle: "Un'email mal scritta può compromettere un affare da milioni di euro",
    description: "Ogni giorno scrivi email ai colleghi e clienti internazionali. Ma il tono è giusto? La grammatica è corretta? Stai usando le formule appropriate? Le email professionali in inglese hanno regole precise che molti professionisti italiani ignorano — e gli errori possono costare caro in termini di credibilità e opportunità.",
    heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    icon: Mail,
    color: "orange",
    stats: [
      { value: "40+", label: "Email in inglese al giorno" },
      { value: "73%", label: "Commettono errori di tono" },
      { value: "15min", label: "Per scrivere una email semplice" },
      { value: "90%", label: "Migliora dopo il training" },
    ],
    painPoints: [
      { title: "Tono Inappropriato", description: "Troppo formale, troppo informale, troppo diretto — il tono sbagliato compromette relazioni professionali." },
      { title: "Errori Grammaticali Visibili", description: "Errori ricorrenti come tense, prepositions e articles danno un'immagine poco professionale." },
      { title: "Lentezza", description: "Impiegare 15 minuti per una email che dovrebbe richiederne 3 riduce drasticamente la produttività." },
      { title: "Mancanza di Template", description: "Senza modelli per situazioni ricorrenti, ogni email diventa una sfida da zero." },
    ],
    solutions: [
      "Template pronti per ogni situazione professionale",
      "Correzione degli errori più comuni degli italiani",
      "Tecniche per trovare il tono giusto con ogni interlocutore",
      "Esercitazioni su email reali del tuo lavoro quotidiano",
    ],
    ctaText: "Migliora le Tue Email",
  },
  {
    slug: "gap-competenze-mercato-europeo",
    title: "Il Gap di Competenze nel Mercato del Lavoro Europeo",
    shortTitle: "Gap Competenze EU",
    subtitle: "L'Italia è al 35° posto per competenze in inglese in Europa — sotto la media continentale",
    description: "Il mercato del lavoro europeo è sempre più integrato e competitivo. Le aziende cercano talenti che possano lavorare in team internazionali, gestire clienti globali e comunicare in inglese fluente. I professionisti italiani, nonostante eccellenti competenze tecniche, perdono terreno rispetto ai colleghi del Nord Europa per il gap linguistico.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80",
    icon: Globe,
    color: "teal",
    stats: [
      { value: "35°", label: "Posizione Italia EF EPI" },
      { value: "€8K+", label: "Gap salariale con Nord EU" },
      { value: "2M", label: "Posti non coperti in EU" },
      { value: "89%", label: "Aziende EU richiedono EN" },
    ],
    painPoints: [
      { title: "Competizione Sleale", description: "I candidati olandesi, scandinavi e tedeschi partono con un vantaggio linguistico significativo." },
      { title: "Brain Drain", description: "I migliori talenti italiani emigrano, mentre chi resta fatica a competere per ruoli internazionali." },
      { title: "Digital Skills + Language", description: "Le competenze digitali senza inglese hanno un valore dimezzato nel mercato europeo." },
      { title: "Remote Work Barrier", description: "Il lavoro remoto per aziende estere richiede inglese fluente — un'opportunità persa per molti italiani." },
    ],
    solutions: [
      "Analisi del mercato target e requisiti linguistici specifici",
      "Percorso accelerato per raggiungere il livello B2/C1",
      "Focus sulle competenze linguistiche più richieste nel tuo settore",
      "Supporto nella candidatura per posizioni internazionali",
    ],
    ctaText: "Colma il Gap Oggi",
  },
  {
    slug: "presentazioni-inglese",
    title: "Presentazioni in Inglese che Non Convincono",
    shortTitle: "Presentazioni",
    subtitle: "Il 74% dei professionisti italiani teme di presentare in inglese davanti a un pubblico",
    description: "Devi presentare il tuo progetto al board internazionale, fare un pitch a un investitore straniero o tenere un webinar in inglese. Il contenuto è eccellente, ma la delivery in inglese non rende giustizia alle tue idee. Le pause, le esitazioni e la mancanza di vocabolario specifico indeboliscono il tuo messaggio.",
    heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80",
    icon: Presentation,
    color: "orange",
    stats: [
      { value: "74%", label: "Temono di presentare in EN" },
      { value: "3x", label: "Più impatto con buona delivery" },
      { value: "45%", label: "Evitano public speaking EN" },
      { value: "96%", label: "Migliorano con il coaching" },
    ],
    painPoints: [
      { title: "Contenuto vs Delivery", description: "Il tuo progetto è brillante, ma la presentazione in inglese non ne trasmette il valore reale." },
      { title: "Gestione delle Domande", description: "Le Q&A improvvisate in inglese sono il momento più temuto — e il più importante per convincere." },
      { title: "Visual Storytelling", description: "Tradurre le slide dall'italiano non basta: il storytelling in inglese ha regole e ritmi diversi." },
      { title: "Nervosismo Visibile", description: "Mani che tremano, voce monotona, occhi sulle slide: il nervosismo linguistico si vede e si sente." },
    ],
    solutions: [
      "Coaching personalizzato su presentazioni reali del tuo lavoro",
      "Tecniche di storytelling e struttura per audience internazionali",
      "Simulazioni con Q&A e feedback su delivery e body language",
      "Vocabolario specifico per il tuo settore e tipo di presentazione",
    ],
    ctaText: "Migliora le Tue Presentazioni",
  },
  {
    slug: "cv-linkedin-inglese",
    title: "CV e LinkedIn in Inglese: Perché Non Ricevi Risposte",
    shortTitle: "CV & LinkedIn",
    subtitle: "Il 68% dei CV in inglese di professionisti italiani viene scartato dai sistemi ATS",
    description: "Hai tradotto il tuo CV dall'italiano all'inglese, aggiornato il profilo LinkedIn e inviato decine di candidature. Nessuna risposta. Il problema non è la tua esperienza — è come la presenti. I CV e i profili LinkedIn degli italiani hanno pattern riconoscibili che i recruiter internazionali associano a candidati poco competitivi.",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    icon: FileSearch,
    color: "teal",
    stats: [
      { value: "68%", label: "CV italiani scartati da ATS" },
      { value: "6sec", label: "Tempo medio review recruiter" },
      { value: "5x", label: "Più risposte con profilo ottimizzato" },
      { value: "40%", label: "Recruiter usa LinkedIn" },
    ],
    painPoints: [
      { title: "Traduzione Letterale", description: "Un CV tradotto parola per parola dall'italiano ha un impatto molto diverso da uno scritto nativamente in inglese." },
      { title: "Formato Non ATS-Friendly", description: "Tabelle, foto, colonne: il formato europeo non funziona con i software di screening internazionali." },
      { title: "LinkedIn Sottoutilizzato", description: "Un profilo LinkedIn in inglese generico non attira recruiter — servono keyword e contenuti strategici." },
      { title: "Mancanza di Action Verbs", description: "I CV italiani usano descrizioni passive; quelli anglosassoni richiedono risultati quantificati con action verbs." },
    ],
    solutions: [
      "Riscrittura completa del CV in formato internazionale ATS-friendly",
      "Ottimizzazione del profilo LinkedIn con keyword strategiche",
      "Coaching su personal branding e digital presence",
      "Template e best practice per ogni settore professionale",
    ],
    ctaText: "Ottimizza il Tuo Profilo",
  },
  {
    slug: "negoziazione-stipendio-inglese",
    title: "Negoziare lo Stipendio in Inglese: La Sfida Nascosta",
    shortTitle: "Negoziazione Stipendio",
    subtitle: "I professionisti italiani lasciano in media €5.000-€15.000 all'anno sul tavolo per mancanza di competenze negoziali in inglese",
    description: "Hai ricevuto l'offerta di lavoro che desideravi da un'azienda internazionale. Ma quando arriva il momento di parlare di stipendio, benefits e condizioni, l'inglese diventa un ostacolo. Non conosci le formule giuste, non sai come contrattare senza sembrare aggressivo o insicuro, e finisci per accettare la prima offerta.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    icon: BriefcaseBusiness,
    color: "orange",
    stats: [
      { value: "€15K", label: "Lasciati sul tavolo in media" },
      { value: "82%", label: "Non negoziano la prima offerta" },
      { value: "3x", label: "Più successo con preparazione" },
      { value: "€50K+", label: "Impatto in 5 anni di carriera" },
    ],
    painPoints: [
      { title: "Accettare la Prima Offerta", description: "La paura di perdere l'opportunità spinge ad accettare subito, senza negoziare condizioni migliori." },
      { title: "Mancanza di Vocabolario", description: "Non conoscere i termini per package, equity, vesting, sign-on bonus rende impossibile una negoziazione efficace." },
      { title: "Differenze Culturali", description: "La negoziazione in contesto anglosassone ha regole diverse da quella italiana — essere troppo diretti o troppo indiretti può costare caro." },
      { title: "Benefits Ignorati", description: "Oltre allo stipendio base, ci sono remote work, stock options, bonus, PTO che molti italiani non sanno negoziare." },
    ],
    solutions: [
      "Simulazioni di negoziazione con scenari realistici",
      "Vocabolario e frasi chiave per ogni fase della trattativa",
      "Strategie per counter-offer e package negotiation",
      "Analisi di mercato per benchmark salariali internazionali",
    ],
    ctaText: "Impara a Negoziare",
  },
];

export function getProblemBySlug(slug: string): ProblemData | undefined {
  return problems.find((p) => p.slug === slug);
}
