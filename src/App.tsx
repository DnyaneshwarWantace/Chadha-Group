
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LaxmiMetalWorks from "./pages/LaxmiMetalWorks";
import LaxmiMetalWorksProducts from "./pages/LaxmiMetalWorksProducts";
import LaxmiMetalWorksEquipment from "./pages/LaxmiMetalWorksEquipment";
import ShriBalajiIndustries from "./pages/ShriBalajiIndustries";
import ShriBalajiIndustriesProducts from "./pages/ShriBalajiIndustriesProducts";
import ShriBalajiIndustriesEquipment from "./pages/ShriBalajiIndustriesEquipment";
import MrkImpex from "./pages/MrkImpex";
import MrkImpexProducts from "./pages/MrkImpexProducts";
import MrkImpexEquipment from "./pages/MrkImpexEquipment";
import AftAutomotive from "./pages/AftAutomotive";
import AftAutomotiveProducts from "./pages/AftAutomotiveProducts";
import AftAutomotiveEquipment from "./pages/AftAutomotiveEquipment";
import EssEssIndustries from "./pages/EssEssIndustries";
import EssEssIndustriesProducts from "./pages/EssEssIndustriesProducts";
import EssEssIndustriesEquipment from "./pages/EssEssIndustriesEquipment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollIndicator />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/laxmi-metal-works" element={<LaxmiMetalWorks />} />
          <Route path="/laxmi-metal-works/products" element={<LaxmiMetalWorksProducts />} />
          <Route path="/laxmi-metal-works/equipment" element={<LaxmiMetalWorksEquipment />} />
          <Route path="/shri-balaji-industries" element={<ShriBalajiIndustries />} />
          <Route path="/shri-balaji-industries/products" element={<ShriBalajiIndustriesProducts />} />
          <Route path="/shri-balaji-industries/equipment" element={<ShriBalajiIndustriesEquipment />} />
          <Route path="/mrk-impex" element={<MrkImpex />} />
          <Route path="/mrk-impex/products" element={<MrkImpexProducts />} />
          <Route path="/mrk-impex/equipment" element={<MrkImpexEquipment />} />
          <Route path="/aft-automotive" element={<AftAutomotive />} />
          <Route path="/aft-automotive/products" element={<AftAutomotiveProducts />} />
          <Route path="/aft-automotive/equipment" element={<AftAutomotiveEquipment />} />
          <Route path="/ess-ess-industries" element={<EssEssIndustries />} />
          <Route path="/ess-ess-industries/products" element={<EssEssIndustriesProducts />} />
          <Route path="/ess-ess-industries/equipment" element={<EssEssIndustriesEquipment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
