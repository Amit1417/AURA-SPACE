import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import BrowseCars from "./pages/BrowseCars";
import ListCar from "./pages/ListCar";
import HowItWorks from "./pages/HowItWorks";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Car Browsing & Booking */}
              <Route path="/cars" element={<BrowseCars />} />
              <Route path="/car/:id" element={<PlaceholderPage title="Neural Vehicle Details" description="Experience detailed quantum vehicle interface and booking protocols." />} />

              {/* Car Listing */}
              <Route path="/list-car" element={<ListCar />} />

              {/* Authentication */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Info Pages */}
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<PlaceholderPage title="Pricing" description="Transparent pricing with no hidden fees." />} />

              {/* Support */}
              <Route path="/support" element={<Support />} />
              <Route path="/help" element={<PlaceholderPage title="Help Center" description="Find answers to frequently asked questions." />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our support team." />} />
              <Route path="/report" element={<PlaceholderPage title="Report a Car" description="Report any issues with a car or rental experience." />} />
              <Route path="/safety" element={<PlaceholderPage title="Safety Guidelines" description="Important safety information for renters and car owners." />} />

              {/* Legal */}
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="How we protect and use your personal information." />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Terms and conditions for using RentMyRide." />} />
              <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" description="Information about how we use cookies." />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
