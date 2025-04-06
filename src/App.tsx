
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Lineage from "./pages/Lineage";
import Videos from "./pages/Videos";
import Schedule from "./pages/Schedule";
import Values from "./pages/Values";
import Wisdom from "./pages/Wisdom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lineage" element={<Lineage />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/values" element={<Values />} />
              <Route path="/wisdom" element={<Wisdom />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
