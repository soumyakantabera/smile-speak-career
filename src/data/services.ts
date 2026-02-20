import { Briefcase, Target, MessageSquare, GraduationCap, Mail, Users, Presentation, Globe, FileText, Linkedin, DollarSign, Award, Brain, Search, UserCheck, BookOpen, Headphones, PenTool, Mic, BarChart } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  icon: any;
  color: "teal" | "orange";
  topics: { icon: any; title: string; description: string }[];
  processSteps: { step: number; title: string; description: string }[];
  curriculum: { category: string; items: string[] }[];
}

export const services: ServiceData[] = [
  {
    slug: "business-english",
    title: "Business English",
    subtitle: "Comunica con sicurezza nel mondo professionale internazionale",
    description: "Padroneggia l'inglese per presentazioni, negoziazioni, email e meeting. Ogni lezione è costruita sui tuoi task lavorativi reali.",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    icon: Briefcase,
    color: "teal",
    topics: [
      { icon: Presentation, title: "Presentazioni", description: "Struttura, delivery e Q&A in inglese professionale" },
      { icon: Target, title: "Negoziazioni", description: "Tecniche persuasive e linguaggio diplomatico" },
      { icon: Mail, title: "Email & Writing", description: "Comunicazione scritta formale e informale" },
      { icon: Users, title: "Meeting", description: "Condurre e partecipare a riunioni internazionali" },
      { icon: Globe, title: "Cross-Cultural", description: "Comunicazione interculturale e business etiquette" },
      { icon: FileText, title: "Report & Documenti", description: "Redazione di report, proposal e brief" },
    ],
    processSteps: [
      { step: 1, title: "Analisi Diagnostica", description: "Valutiamo il tuo livello e le esigenze professionali specifiche" },
      { step: 2, title: "Curriculum su Misura", description: "Progettiamo un percorso basato sui tuoi task lavorativi reali" },
      { step: 3, title: "Sessioni Live", description: "Lezioni 1:1 con simulazioni e role-play professionali" },
      { step: 4, title: "Risultati Misurabili", description: "Tracking dei progressi con feedback dettagliato" },
    ],
    curriculum: [
      { category: "Comunicazione Orale", items: ["Presentazioni aziendali", "Conference call", "Pitch & elevator speech", "Public speaking"] },
      { category: "Comunicazione Scritta", items: ["Email professionali", "Report e brief", "Proposal commerciali", "Minute dei meeting"] },
      { category: "Negoziazione", items: ["Strategie persuasive", "Gestione obiezioni", "Closing techniques", "Linguaggio diplomatico"] },
    ],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    subtitle: "Costruisci la tua carriera internazionale con strategia",
    description: "Ottimizza il tuo CV, potenzia il profilo LinkedIn, padroneggia le tecniche di salary negotiation e personal branding.",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    icon: Target,
    color: "orange",
    topics: [
      { icon: FileText, title: "CV Optimization", description: "CV in formato internazionale ATS-friendly" },
      { icon: Linkedin, title: "LinkedIn Branding", description: "Profilo ottimizzato per recruiter globali" },
      { icon: DollarSign, title: "Salary Negotiation", description: "Strategie per negoziare compensi competitivi" },
      { icon: Award, title: "Personal Branding", description: "Costruisci la tua identità professionale unica" },
      { icon: Target, title: "Career Strategy", description: "Pianificazione strategica del percorso di carriera" },
      { icon: Users, title: "Networking", description: "Tecniche di networking professionale efficace" },
    ],
    processSteps: [
      { step: 1, title: "Assessment Carriera", description: "Analizziamo i tuoi obiettivi e il mercato di riferimento" },
      { step: 2, title: "Strategia Personalizzata", description: "Definiamo il piano d'azione su misura per te" },
      { step: 3, title: "Implementazione", description: "Lavoriamo insieme su CV, LinkedIn e portfolio" },
      { step: 4, title: "Launch & Follow-up", description: "Supporto continuo nella ricerca e nelle trattative" },
    ],
    curriculum: [
      { category: "CV & Cover Letter", items: ["Formato internazionale", "Keyword optimization ATS", "Cover letter personalizzate", "Portfolio digitale"] },
      { category: "Personal Branding", items: ["LinkedIn optimization", "Elevator pitch", "Online presence", "Thought leadership"] },
      { category: "Negotiation", items: ["Ricerca di mercato stipendi", "Tecniche di negoziazione", "Benefits package", "Counter-offer strategy"] },
    ],
  },
  {
    slug: "interview-prep",
    title: "Interview Prep",
    subtitle: "Affronta ogni colloquio con sicurezza e preparazione",
    description: "Mock interview, metodo STAR, domande comportamentali e tecniche di confidence building per conquistare il lavoro dei tuoi sogni.",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
    icon: MessageSquare,
    color: "teal",
    topics: [
      { icon: MessageSquare, title: "Mock Interviews", description: "Simulazioni realistiche con feedback dettagliato" },
      { icon: Brain, title: "Metodo STAR", description: "Struttura le risposte con Situation, Task, Action, Result" },
      { icon: Search, title: "Company Research", description: "Preparazione specifica per ogni azienda target" },
      { icon: UserCheck, title: "Behavioral Questions", description: "Gestisci le domande comportamentali con sicurezza" },
      { icon: Award, title: "Confidence Building", description: "Tecniche per gestire ansia e comunicare con impatto" },
      { icon: Mail, title: "Follow-up Strategy", description: "Email di ringraziamento e strategie post-colloquio" },
    ],
    processSteps: [
      { step: 1, title: "Analisi del Ruolo", description: "Studiamo l'offerta e l'azienda per cui ti candidi" },
      { step: 2, title: "Preparazione Risposte", description: "Costruiamo le tue risposte con il metodo STAR" },
      { step: 3, title: "Mock Interviews", description: "Simulazioni realistiche con feedback immediato" },
      { step: 4, title: "Fine-Tuning", description: "Rifinitura di linguaggio, body language e confidence" },
    ],
    curriculum: [
      { category: "Preparazione Tecnica", items: ["Analisi job description", "Ricerca aziendale", "Domande frequenti", "Case study practice"] },
      { category: "Comunicazione", items: ["Metodo STAR", "Storytelling professionale", "Body language", "Tone of voice"] },
      { category: "Post-Colloquio", items: ["Thank-you email", "Follow-up timeline", "Salary discussion", "Offer evaluation"] },
    ],
  },
  {
    slug: "ielts-prep",
    title: "IELTS Prep",
    subtitle: "Raggiungi il punteggio IELTS che desideri",
    description: "Preparazione completa per tutti i moduli IELTS: Listening, Reading, Writing e Speaking. Strategie di scoring e pratica cronometrata.",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    icon: GraduationCap,
    color: "orange",
    topics: [
      { icon: Headphones, title: "Listening", description: "Strategie di ascolto attivo e note-taking" },
      { icon: BookOpen, title: "Reading", description: "Tecniche di skimming, scanning e comprensione" },
      { icon: PenTool, title: "Writing", description: "Task 1 & Task 2: struttura, coesione e lessico" },
      { icon: Mic, title: "Speaking", description: "Fluency, pronuncia e strategie per ogni parte" },
      { icon: BarChart, title: "Scoring Strategies", description: "Massimizza il tuo band score in ogni sezione" },
      { icon: Target, title: "Timed Practice", description: "Simulazioni d'esame in condizioni reali" },
    ],
    processSteps: [
      { step: 1, title: "Test Diagnostico", description: "Identifichiamo punti di forza e aree di miglioramento" },
      { step: 2, title: "Piano di Studio", description: "Programma personalizzato in base al tuo target score" },
      { step: 3, title: "Practice Intensiva", description: "Esercitazioni mirate su ogni modulo dell'esame" },
      { step: 4, title: "Mock Exam", description: "Simulazioni complete con correzione e feedback" },
    ],
    curriculum: [
      { category: "Listening & Reading", items: ["Note-taking strategies", "Skimming & scanning", "Multiple choice techniques", "Matching & labeling"] },
      { category: "Writing", items: ["Task 1 graphs & charts", "Task 2 essay structure", "Cohesion & coherence", "Academic vocabulary"] },
      { category: "Speaking", items: ["Part 1 introduction", "Part 2 long turn (cue card)", "Part 3 discussion", "Pronunciation & fluency"] },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
