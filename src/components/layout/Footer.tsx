import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Mail } from "lucide-react";
import { Instagram, Youtube } from "../ui/Icons";
import { siteConfig } from "../../config/site";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t text-sm mt-auto relative overflow-hidden transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#ede8dc] border-[#ded7c8] text-zinc-700"
          : "bg-[#070709] border-[#1f1f2a] text-[#a1a1aa]"
      }`}
    >
      {/* Subtle gold line accent at top */}
      <div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="inline-flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  theme === "light"
                    ? "bg-white border border-[#ded7c8] text-[#855806] shadow-sm"
                    : "bg-[#14141c] border border-[#d4af37]/40 text-[#d4af37]"
                }`}
              >
                <span className="font-['Cinzel',serif] text-lg font-bold">JA</span>
              </div>
              <div>
                <span
                  className={`font-['Cinzel',serif] text-lg font-extrabold tracking-widest block ${
                    theme === "light" ? "text-zinc-900" : "text-white"
                  }`}
                >
                  {siteConfig.brandName}
                </span>
                <span
                  className={`text-[10px] uppercase font-semibold tracking-widest block ${
                    theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                  }`}
                >
                  {siteConfig.creatorName}
                </span>
              </div>
            </Link>

            <p
              className={`text-xs sm:text-sm max-w-sm leading-relaxed ${
                theme === "light" ? "text-zinc-600" : "text-[#8e8ea0]"
              }`}
            >
              Official digital home of Abhishek Singh. Relatable desi comedy sketches, family-oriented stories, and cultural moments from Bihar, shared with love for audiences worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  theme === "light"
                    ? "bg-white border border-[#ded7c8] text-zinc-700 hover:text-[#855806] hover:border-[#855806]"
                    : "bg-[#121218] border border-[#272733] text-[#d4d4d8] hover:text-[#d4af37] hover:border-[#d4af37]/60"
                }`}
                title="Instagram @ji_abhishek_ji_"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  theme === "light"
                    ? "bg-white border border-[#ded7c8] text-zinc-700 hover:text-[#855806] hover:border-[#855806]"
                    : "bg-[#121218] border border-[#272733] text-[#d4d4d8] hover:text-[#d4af37] hover:border-[#d4af37]/60"
                }`}
                title="YouTube @ji_abhishek_ji_"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                aria-label="Contact Hub"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  theme === "light"
                    ? "bg-white border border-[#ded7c8] text-zinc-700 hover:text-[#855806] hover:border-[#855806]"
                    : "bg-[#121218] border border-[#272733] text-[#d4d4d8] hover:text-[#d4af37] hover:border-[#d4af37]/60"
                }`}
                title="Contact Forms"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="text-left space-y-3">
            <h4
              className={`text-xs font-bold uppercase tracking-widest ${
                theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
              }`}
            >
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.footerNavigation.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`transition-colors duration-150 ${
                      theme === "light"
                        ? "text-zinc-600 hover:text-black"
                        : "text-[#a1a1aa] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collaborate */}
          <div className="text-left space-y-3">
            <h4
              className={`text-xs font-bold uppercase tracking-widest ${
                theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
              }`}
            >
              Work With Me
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.footerNavigation.collaborate.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`transition-colors duration-150 ${
                      theme === "light"
                        ? "text-zinc-600 hover:text-black"
                        : "text-[#a1a1aa] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="text-left space-y-3">
            <h4
              className={`text-xs font-bold uppercase tracking-widest ${
                theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
              }`}
            >
              Compliance &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`transition-colors duration-150 ${
                      theme === "light"
                        ? "text-zinc-600 hover:text-black"
                        : "text-[#a1a1aa] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] ${
                  theme === "light" ? "text-zinc-500" : "text-[#71717a]"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Formspree Verified Inquiries
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            theme === "light"
              ? "border-[#ded7c8] text-zinc-600"
              : "border-[#181824] text-[#71717a]"
          }`}
        >
          <p>© {CURRENT_YEAR} JI ABHISHEK JI (Abhishek Singh). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <ThemeToggle showLabel className="text-[11px] px-2.5 py-1" />
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> From Bihar, For The World.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
