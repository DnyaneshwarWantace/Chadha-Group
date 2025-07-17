
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaxmiMetalWorks from "./pages/LaxmiMetalWorks";
import ShriBalajiIndustries from "./pages/ShriBalajiIndustries";
import MrkImpex from "./pages/MrkImpex";
import AftAutomotive from "./pages/AftAutomotive";
import EssEssIndustries from "./pages/EssEssIndustries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollIndicator />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laxmi-metal-works" element={<LaxmiMetalWorks />} />
          <Route path="/shri-balaji-industries" element={<ShriBalajiIndustries />} />
          <Route path="/mrk-impex" element={<MrkImpex />} />
          <Route path="/aft-automotive" element={<AftAutomotive />} />
          <Route path="/ess-ess-industries" element={<EssEssIndustries />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
