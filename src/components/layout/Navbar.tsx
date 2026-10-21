import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Instagram, Youtube } from "../ui/Icons";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

export const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);


  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Videos", href: "/videos" },
    { title: "Gallery", href: "/gallery" },
    { title: "Connect", href: "/connect" },
    { title: "Events", href: "/events" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 liquid-glass-header transition-all duration-300 ${
          isScrolled ? "scrolled py-3 sm:py-3.5" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg"
            aria-label="JI ABHISHEK JI Home"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center liquid-logo-tile group-hover:scale-105 transition-all duration-300 ${
                theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
              }`}
            >
              <span className="font-['Cinzel',serif] text-lg font-bold tracking-wider">JA</span>
            </div>
            <div className="text-left">
              <span
                className={`font-['Cinzel',serif] text-base sm:text-lg font-extrabold tracking-widest block leading-none transition-colors ${
                  theme === "light"
                    ? "text-[#111114] group-hover:text-[#855806]"
                    : "text-white group-hover:text-[#f5e6ab]"
                }`}
              >
                JI ABHISHEK JI
              </span>
              <span
                className={`text-[10px] uppercase font-semibold tracking-widest block mt-1 ${
                  theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                }`}
              >
                From Bihar, With Love
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 liquid-glass-capsule px-2.5 py-1.5 rounded-full"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "liquid-active-tab shadow-sm"
                      : theme === "light"
                      ? "text-zinc-700 hover:text-black hover:bg-black/5"
                      : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Highlight Button */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 pr-2 border-r ${
                theme === "light" ? "border-[#d4af37]/25" : "border-white/10"
              }`}
            >
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Abhishek Singh on Instagram"
                className={`p-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-zinc-700 hover:text-[#855806] hover:bg-black/5"
                    : "text-zinc-300 hover:text-[#d4af37] hover:bg-white/10"
                }`}
                title="Instagram @ji_abhishek_ji_"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to JI ABHISHEK JI on YouTube"
                className={`p-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-zinc-700 hover:text-[#855806] hover:bg-black/5"
                    : "text-zinc-300 hover:text-[#d4af37] hover:bg-white/10"
                }`}
                title="YouTube @ji_abhishek_ji_"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <ThemeToggle />

            <Link to="/collaborations">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Sparkles className="w-3.5 h-3.5" />}
              >
                Work With Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <Link to="/collaborations" className="mr-0.5">
              <Button variant="primary" size="sm" className="text-xs px-2.5 py-1.5">
                Collabs
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className={`p-2 rounded-xl border transition-all cursor-pointer liquid-logo-tile ${
                theme === "light"
                  ? "text-zinc-900 hover:border-[#855806]"
                  : "text-white hover:border-[#d4af37]"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-50 lg:hidden flex flex-col liquid-glass-drawer"
        >
          {/* Mobile Drawer Header */}
          <div
            className={`p-5 flex items-center justify-between border-b ${
              theme === "light" ? "border-[#d4af37]/20" : "border-white/10"
            }`}
          >
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center liquid-logo-tile ${
                  theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                }`}
              >
                <span className="font-['Cinzel',serif] text-base font-bold">JA</span>
              </div>
              <span
                className={`font-['Cinzel',serif] text-base font-bold tracking-wider ${
                  theme === "light" ? "text-zinc-900" : "text-white"
                }`}
              >
                JI ABHISHEK JI
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className={`p-2 rounded-xl border liquid-logo-tile cursor-pointer ${
                theme === "light" ? "text-zinc-900" : "text-white"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "liquid-active-tab shadow-md"
                      : theme === "light"
                      ? "text-zinc-700 hover:bg-black/5 hover:text-zinc-900"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.title}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-black/80" />}
                </Link>
              );
            })}

            <div className="pt-4 pb-2 space-y-3">
              <ThemeToggle showLabel className="w-full justify-center py-2.5" />
              
              <Link
                to="/collaborations"
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                <Button variant="primary" size="lg" className="w-full">
                  Work With Me (Brand Briefs)
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Drawer Footer Socials */}
          <div
            className={`p-5 border-t flex items-center justify-around ${
              theme === "light"
                ? "border-[#d4af37]/20 bg-black/5 text-zinc-800"
                : "border-white/10 bg-black/40 text-zinc-300"
            }`}
          >
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs font-semibold ${
                theme === "light"
                  ? "text-zinc-800 hover:text-[#855806]"
                  : "text-zinc-300 hover:text-[#d4af37]"
              }`}
              title="Official Instagram @ji_abhishek_ji_"
            >
              <Instagram className={`w-4 h-4 ${theme === "light" ? "text-[#855806]" : "text-[#d4af37]"}`} />
              Instagram
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs font-semibold ${
                theme === "light"
                  ? "text-zinc-800 hover:text-[#855806]"
                  : "text-zinc-300 hover:text-[#d4af37]"
              }`}
              title="Official YouTube @ji_abhishek_ji_"
            >
              <Youtube className={`w-4 h-4 ${theme === "light" ? "text-[#855806]" : "text-[#d4af37]"}`} />
              YouTube
            </a>
          </div>
        </div>
      )}
    </>
  );
};
