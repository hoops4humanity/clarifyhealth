import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FloatingAskButton from "@/components/FloatingAskButton";
import Index from "./pages/Index";
import TopicsIndex from "./pages/TopicsIndex";
import TopicPage from "./pages/TopicPage";
import AskPage from "./pages/AskPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        <ScrollToTop />
        <Header />
        <div className="animate-page-enter">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/topics" element={<TopicsIndex />} />
            <Route path="/topics/:id" element={<TopicPage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <FloatingAskButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
