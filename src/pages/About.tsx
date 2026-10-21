import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Compass,
  ArrowRight,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Instagram, Youtube } from "../components/ui/Icons";
import { siteConfig } from "../config/site";
import { milestones } from "../data/milestones";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { GalleryGrid } from "../components/media/GalleryGrid";
import { updatePageSEO } from "../lib/seo";

export const About: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "About JI ABHISHEK JI — Abhishek Singh Story & Philosophy",
      description:
        "Learn about Abhishek Singh (JI ABHISHEK JI) — comedian, entertainer, and digital storyteller from Bihar crafting relatable desi humor in Hindi and Bhojpuri.",
      canonicalPath: "/about",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Page Header & Editorial Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              THE CREATOR'S STORY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white leading-tight">
              Rooted in Bihar, <br />
              <span className="text-gold-gradient">Heard Across The Nation.</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#f5e6ab] font-['Cinzel',serif]">
              "{siteConfig.supportingHeadline}"
            </p>

            <div className="space-y-4 text-base text-[#a1a1aa] leading-relaxed">
              {siteConfig.extendedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/collaborations">
                <Button variant="primary" size="md">
                  Work With Abhishek
                </Button>
              </Link>
              <Link to="/connect">
                <Button variant="outline" size="md">
                  Send a Fan Message
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-[#d4af37]/40 via-[#262633] to-[#09090b] shadow-2xl">
              <img
                src="/images/abhishek-portrait.jpg"
                alt="Abhishek Singh official portrait"
                className="w-full h-auto rounded-[22px] object-cover"
              />
              <div className="p-4 bg-[#14141c] rounded-b-[22px] border-t border-[#262633] text-left">
                <span className="text-xs uppercase font-mono text-[#d4af37] font-semibold tracking-wider block">
                  Creator Identity
                </span>
                <h3 className="text-base font-bold font-['Cinzel',serif] text-white">
                  Abhishek Singh (JI ABHISHEK JI)
                </h3>
                <p className="text-xs text-[#8e8ea0] mt-1">
                  Origin: Bihar, India • Comedian, Storyteller &amp; Entertainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creator Philosophy Callout */}
      <section className="bg-[#0e0e14] border-y border-[#1e1e28] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Quote className="w-12 h-12 text-[#d4af37]/40 mx-auto" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Cinzel',serif] text-white leading-relaxed">
            "{siteConfig.philosophy}"
          </h2>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <span>— ABHISHEK SINGH</span>
            <span>•</span>
            <span>JI ABHISHEK JI</span>
          </div>
        </div>
      </section>

      {/* 3. Creative Style & Identity Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CREATIVE DNA"
          title="What Defines His Voice"
          hindiTitle="कला और अभिव्यक्ति"
          description="Three defining hallmarks of Abhishek's digital content that turn casual viewers into dedicated lifelong fans."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
              Relatable Desi Humor
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              No artificial setups — just real, observational comedy drawn from household nuances, neighborhood conversations, and relatable middle-class realities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
              Family-First Entertainment
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              Comedy that can be watched in the living room with parents, siblings, and elders alike. Wholesome, clean, and deeply rooted in desi family culture.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
              Hindi &amp; Bhojpuri Roots
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              Celebrating the authentic linguistic charm and warmth of northern India, bringing regional dialects with dignity and pride to modern digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Selected Creator Milestones */}
      <section className="bg-[#0b0b10] border-y border-[#1e1e28] py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CREATIVE HIGHLIGHTS"
            title="The Journey So Far"
            hindiTitle="सफर की कुछ खास यादें"
            description="Verified creative chapters marking the progression from local storyteller to recognized digital comedy creator."
          />

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#121218] border border-[#272733] text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-lg"
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-wider block">
                    {m.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#71717a] mt-1 block">
                    {m.tag}
                  </span>
                </div>

                <div className="md:col-span-9 space-y-1.5">
                  <h3 className="text-lg font-bold font-['Cinzel',serif] text-white">
                    {m.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#f5e6ab]">
                    {m.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Photography Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Moments Caught On Lens"
          hindiTitle="तस्वीरों में कुछ पल"
          description="A glimpse of studio portraits, behind-the-scenes shoots, and live stage appearances."
        />

        <GalleryGrid limit={3} />

        <div className="mt-10 text-center">
          <Link to="/gallery">
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Open Complete Photo Gallery
            </Button>
          </Link>
        </div>
      </section>

      {/* 6. Social Channels Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14141c] border border-[#272733] text-center space-y-6 shadow-xl">
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Verified Digital Profiles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Cinzel',serif] text-white">
            Connect With Abhishek Across Platforms
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto">
            Stay updated with daily reels, upcoming sketches, and live appearance announcements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="md"
                leftIcon={<Instagram className="w-4 h-4" />}
              >
                Instagram @ji_abhishek_ji_
              </Button>
            </a>

            <a
              href={siteConfig.socials.patnaInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="md"
                leftIcon={<Instagram className="w-4 h-4" />}
              >
                Patna @patna_wale_abhishek_ji
              </Button>
            </a>

            <a
              href={siteConfig.socials.mummyInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="md"
                leftIcon={<Instagram className="w-4 h-4" />}
              >
                Mummy Ji @ji_abhishek_ji_ki_mummy
              </Button>
            </a>

            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Youtube className="w-4 h-4" />}
              >
                YouTube Channel
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
