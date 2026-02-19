import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ProgramsSection from "@/components/ProgramsSection";
import SpecializzazioniSection from "@/components/SpecializzazioniSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ProgramsSection />
      <SpecializzazioniSection />
      <HowItWorksSection />
      <ChiSiamoSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
