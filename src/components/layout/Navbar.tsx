import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Instagram, Youtube } from "../ui/Icons";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-[#272733] py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg"
            aria-label="JI ABHISHEK JI Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#14141c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors shadow-inner">
              <span className="font-['Cinzel',serif] text-lg font-bold tracking-wider">JA</span>
            </div>
            <div className="text-left">
              <span className="font-['Cinzel',serif] text-base sm:text-lg font-extrabold text-white tracking-widest block leading-none group-hover:text-[#f5e6ab] transition-colors">
                JI ABHISHEK JI
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-widest block mt-1">
                From Bihar, With Love
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#121218]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-sm"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-black bg-[#d4af37] shadow-sm font-bold"
                      : "text-[#d4d4d8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Highlight Button */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 pr-2 border-r border-[#272733]">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Abhishek Singh on Instagram"
                className="p-2 rounded-full text-[#a1a1aa] hover:text-[#d4af37] hover:bg-white/5 transition-colors"
                title="Instagram @ji_abhishek_ji_"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to JI ABHISHEK JI on YouTube"
                className="p-2 rounded-full text-[#a1a1aa] hover:text-[#d4af37] hover:bg-white/5 transition-colors"
                title="YouTube @ji_abhishek_ji_"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

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

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/collaborations" className="mr-1">
              <Button variant="primary" size="sm" className="text-xs px-3 py-1.5">
                Collabs
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl bg-[#14141c] border border-[#272733] text-white hover:border-[#d4af37] transition-colors cursor-pointer"
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
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#09090b]/98 backdrop-blur-2xl"
        >
          {/* Mobile Drawer Header */}
          <div className="p-5 flex items-center justify-between border-b border-[#22222e]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#14141c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <span className="font-['Cinzel',serif] text-base font-bold">JA</span>
              </div>
              <span className="font-['Cinzel',serif] text-base font-bold text-white tracking-wider">
                JI ABHISHEK JI
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-xl bg-[#14141c] border border-[#272733] text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#181822] text-[#d4af37] border border-[#d4af37]/30 font-bold"
                      : "text-[#d4d4d8] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.title}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </Link>
              );
            })}

            <div className="pt-4 pb-2">
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
          <div className="p-6 border-t border-[#22222e] bg-[#0c0c10] flex items-center justify-around">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#d4d4d8] hover:text-[#d4af37]"
            >
              <Instagram className="w-4 h-4 text-[#d4af37]" />
              Instagram
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#d4d4d8] hover:text-[#d4af37]"
            >
              <Youtube className="w-4 h-4 text-[#d4af37]" />
              YouTube
            </a>
          </div>
        </div>
      )}
    </>
  );
};
