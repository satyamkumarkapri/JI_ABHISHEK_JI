import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import { ScrollToTopOnNavigate, BackToTopButton } from "./components/ui/ScrollToTop";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Videos } from "./pages/Videos";
import { Gallery } from "./pages/Gallery";
import { Connect } from "./pages/Connect";
import { Collaborations } from "./pages/Collaborations";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Cookies } from "./pages/Cookies";
import { NotFound } from "./pages/NotFound";

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#d4af37] selection:text-black">
          <Navbar />
          <main className="flex-1 w-full flex flex-col" id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/collaborations" element={<Collaborations />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
