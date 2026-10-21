import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ScrollToTopOnNavigate, BackToTopButton } from "./components/ui/ScrollToTop";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Critical Pages (Immediate Load)
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Videos } from "./pages/Videos";
import { Gallery } from "./pages/Gallery";
import { Connect } from "./pages/Connect";

// Secondary Pages (Code Split via React.lazy)
const Collaborations = lazy(() => import("./pages/Collaborations").then((m) => ({ default: m.Collaborations })));
const Events = lazy(() => import("./pages/Events").then((m) => ({ default: m.Events })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));
const Cookies = lazy(() => import("./pages/Cookies").then((m) => ({ default: m.Cookies })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

const PageLoadingFallback: React.FC = () => (
  <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center p-8 select-none">
    <div className="w-10 h-10 rounded-full border-2 border-[#d4af37]/20 border-t-[#d4af37] animate-spin mb-3" />
    <span className="font-['Cinzel',serif] text-[11px] font-bold tracking-widest text-[#d4af37] uppercase animate-pulse">
      JI ABHISHEK JI
    </span>
  </div>
);

const AppLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 antialiased selection:bg-[#d4af37] selection:text-black ${
        theme === "light"
          ? "bg-[#f7f5ef] text-[#111114]"
          : "bg-[#09090b] text-[#f4f4f5]"
      }`}
    >
      <Navbar />
      <main className="flex-1 w-full flex flex-col" id="main-content">
        <Suspense fallback={<PageLoadingFallback />}>
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
        </Suspense>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <AppLayout />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
