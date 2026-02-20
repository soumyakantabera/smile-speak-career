import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import { BusinessEnglish, CareerCounselling, InterviewPrep, IELTSPrep } from "./pages/ServicePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prezzi from "./pages/Prezzi";
import Contatti from "./pages/Contatti";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/business-english" element={<BusinessEnglish />} />
            <Route path="/career-counselling" element={<CareerCounselling />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/ielts-prep" element={<IELTSPrep />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prezzi" element={<Prezzi />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/citta/:slug" element={<CityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
