import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Briefcase,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { Instagram, Youtube } from "../components/ui/Icons";
import { siteConfig } from "../config/site";
import { socialChannels } from "../data/socials";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CreatorPortrait } from "../components/media/CreatorPortrait";
import { VideoGrid } from "../components/media/VideoGrid";
import { updatePageSEO } from "../lib/seo";

export const Home: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "JI ABHISHEK JI — Official Creator Website | Abhishek Singh",
      description:
        "Welcome to the official world of JI ABHISHEK JI (Abhishek Singh) — Comedian & digital creator. Relatable desi comedy, family stories, Hindi & Bhojpuri entertainment.",
      canonicalPath: "/",
    });
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("intro-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden text-white">
      {/* 1. Cinematic Hero Section */}
      <section
        aria-label="Hero Section"
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
      >
        {/* Background Radial Glow & Lighting Effects */}
        <div
          className="absolute inset-0 bg-radial-hero pointer-events-none opacity-80"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 left-10 w-80 h-80 bg-white/[0.03] rounded-full blur-[100px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Editorial Copy */}
            <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-[#d4af37]/35 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#855806] dark:text-[#f5e6ab]">
                  COMEDY • STORIES • ENTERTAINMENT
                </span>
              </div>

              {/* Oversized Cinematic Heading - All on One Line */}
              <div className="space-y-3.5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] font-extrabold font-['Cinzel',serif] tracking-wide leading-tight text-white whitespace-nowrap">
                  JI ABHISHEK <span className="text-gold-gradient">JI</span>
                </h1>
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full" />
                    <p className="text-lg sm:text-xl font-bold font-['Cinzel',serif] tracking-wide text-[#855806] dark:text-[#f5e6ab]">
                      "{siteConfig.tagline}"
                    </p>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#b8860b] dark:text-[#d4af37] font-['Noto_Sans_Devanagari',sans-serif] pl-8">
                    {siteConfig.supportingHeadline}
                  </p>
                </div>
              </div>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-[#a1a1aa] max-w-xl leading-relaxed">
                {siteConfig.supportingDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link to="/videos">
                  <Button
                    variant="primary"
                    size="lg"
                    leftIcon={<Play className="w-4 h-4 fill-current" />}
                  >
                    {siteConfig.primaryCTA}
                  </Button>
                </Link>

                <Link to="/collaborations">
                  <Button
                    variant="secondary"
                    size="lg"
                    rightIcon={<Sparkles className="w-4 h-4 text-[#d4af37]" />}
                  >
                    {siteConfig.secondaryCTA}
                  </Button>
                </Link>

                <Link
                  to="/connect"
                  className="text-xs font-semibold text-zinc-600 dark:text-[#a1a1aa] hover:text-[#d4af37] transition-colors py-2 px-1 flex items-center gap-1 group"
                >
                  <span>Connect With Me</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Social Channels Trust Strip */}
              <div className="pt-6 border-t border-[#22222e] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8e8ea0]">
                <span className="font-semibold text-white tracking-wide">
                  OFFICIAL CHANNELS:
                </span>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
                  title="Main Official Profile (1.9M+)"
                >
                  <Instagram className="w-4 h-4 text-[#d4af37]" />
                  <span>@ji_abhishek_ji_</span>
                </a>
                <a
                  href={siteConfig.socials.patnaInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
                  title="Abhishek's Patna Storyteller Profile"
                >
                  <Instagram className="w-4 h-4 text-[#d4af37]" />
                  <span>@patna_wale_abhishek_ji</span>
                </a>
                <a
                  href={siteConfig.socials.mummyInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
                  title="Abhishek ji ki Mummy Official Profile"
                >
                  <Instagram className="w-4 h-4 text-[#d4af37]" />
                  <span>@ji_abhishek_ji_ki_mummy</span>
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
                  title="Official YouTube Channel (1.3M+)"
                >
                  <Youtube className="w-4 h-4 text-[#d4af37]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Right Creator Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
                <CreatorPortrait priority />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToContent}
          aria-label="Scroll down to introduction"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-[#71717a] hover:text-[#d4af37] transition-colors cursor-pointer select-none"
        >
          <span className="tracking-widest uppercase text-[10px]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* 2. Creator Introduction Section */}
      <section
        id="intro-section"
        aria-label="About Creator"
        className="py-20 sm:py-28 bg-[#0d0d12] border-y border-[#1e1e28] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#d4af37]/30 to-[#272733]/40 shadow-xl overflow-hidden">
                <img
                  src="/images/abhishek-portrait.jpg"
                  alt="Abhishek Singh creative portrait"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="p-4 bg-[#121218] rounded-b-xl border-t border-[#262633] text-left">
                  <span className="text-xs font-semibold text-[#d4af37] block">
                    Abhishek Singh
                  </span>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Comedian &amp; Digital Entertainer • Bihar, India
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#d4af37]/25 text-[#d4af37] text-xs font-semibold tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                THE CREATOR BEHIND THE SMILES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel',serif] text-white leading-tight">
                Crafting Laughter From Everyday Desi Realities
              </h2>

              <p className="text-base sm:text-lg text-[#d4d4d8] leading-relaxed">
                {siteConfig.bio}
              </p>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                From relatable breakfast conversations to the quirks of traveling in sleeper coaches, Abhishek turns the subtleties of Indian life into heartwarming comedy sketches that resonate with audiences across ages and regions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link to="/about">
                  <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Read Full Story &amp; Journey
                  </Button>
                </Link>

                <Link to="/gallery">
                  <Button variant="ghost" size="md">
                    View Photo Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Social Presence Showcase */}
      <section aria-label="Official Social Channels" className="py-20 sm:py-24 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CONNECTED COMMUNITY"
            title="Where The Stories Live"
            hindiTitle="हमारा सोशल परिवार"
            description="Official and verified digital channels where fresh sketches, behind-the-scenes moments, and daily comedy are published."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
            {socialChannels.map((channel) => (
              <div
                key={channel.handle}
                className="p-5 sm:p-6 rounded-2xl bg-[#121218] border border-[#272733] hover:border-[#d4af37]/50 transition-all duration-300 text-left space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                      {channel.platform === "youtube" ? (
                        <Youtube className="w-5 h-5" />
                      ) : (
                        <Instagram className="w-5 h-5" />
                      )}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold flex items-center gap-1 shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{channel.badge || "Verified Channel"}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-['Cinzel',serif] text-white line-clamp-1">
                      {channel.name}
                    </h3>
                    <p className="text-xs font-mono text-[#d4af37] font-semibold mt-0.5 truncate">
                      {channel.handle}
                    </p>
                  </div>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-3 min-h-[3.6rem]">
                    {channel.description}
                  </p>

                  {channel.verifiedMetric && (
                    <div className="p-3 rounded-xl bg-[#171722] border border-[#d4af37]/30 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xl font-bold font-['Cinzel',serif] text-gold-gradient block leading-tight">
                          {channel.verifiedMetric.value}
                        </span>
                        <span className="text-[10px] text-[#a1a1aa] font-medium block">
                          {channel.verifiedMetric.label}
                        </span>
                      </div>
                      <span className="text-[9px] uppercase font-mono text-[#d4af37] px-2 py-0.5 rounded-full bg-black/50 border border-[#d4af37]/30 shrink-0">
                        {channel.verifiedMetric.source}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#22222e]">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant={channel.platform === "youtube" ? "secondary" : "primary"}
                      size="sm"
                      className="w-full text-xs py-2.5"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {channel.primaryAction}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Content Section */}
      <section
        id="featured-videos"
        aria-label="Featured Videos"
        className="py-20 sm:py-28 bg-[#0c0c11] border-y border-[#1e1e28]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WATCH & LAUGH"
            title="Stories That Bring Us Together"
            hindiTitle="कहानियां जो दिल को छू लें"
            description="Explore popular sketches, relatable desi humor, family scenarios, and travel vlogs from the official YouTube library."
          />

          <VideoGrid limit={6} showControls={false} />

          <div className="mt-12 text-center">
            <Link to="/videos">
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore All Videos &amp; Filter By Category
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Editorial Content Categories */}
      <section aria-label="Content Categories" className="py-20 sm:py-24 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CREATIVE SPECTRUM"
            title="What Abhishek Creates"
            hindiTitle="मनोरंजन के विभिन्न रंग"
            description="A diverse repertoire ranging from observational stage humor to authentic regional vlogs and premium brand collaborations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.contentCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.id === "collaborations" ? "/collaborations" : `/videos`}
                className="group p-6 sm:p-7 rounded-2xl bg-[#121218] border border-[#272733] hover:border-[#d4af37]/60 transition-all duration-300 text-left space-y-4 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#191924] border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <span className="text-xs text-[#71717a] font-['Noto_Sans_Devanagari',sans-serif]">
                    {cat.hindiTitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-['Cinzel',serif] text-white group-hover:text-[#f5e6ab] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:underline pt-2">
                  Explore Content <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fan Connection Banner */}
      <section
        aria-label="Fan Connection"
        className="py-16 sm:py-20 bg-gradient-to-r from-[#14141c] via-[#1a1924] to-[#14141c] border-y border-[#272733]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Cinzel',serif] text-white">
              Your Message Matters.
            </h2>
            <p className="text-base sm:text-lg text-[#d4d4d8] max-w-xl mx-auto">
              Have a question, a comedy video idea, or something you'd love to share? Send a message directly.
            </p>
          </div>

          <div className="pt-2">
            <Link to="/connect">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Connect With Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Brand Collaboration Banner */}
      <section aria-label="Brand Partnerships" className="py-20 sm:py-24 bg-[#09090b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#161622] to-[#0f0f15] border border-[#d4af37]/30 shadow-2xl text-center space-y-6 relative overflow-hidden">
            {/* Ambient gold glow */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="w-12 h-12 mx-auto rounded-full bg-[#1e1e28] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="space-y-3 relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel',serif] text-white leading-tight">
                Let's Create Something Memorable.
              </h2>
              <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
                For brands, businesses, agencies, and creative teams looking to build meaningful, culturally authentic campaigns with high recall.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4 relative z-10">
              <Link to="/collaborations">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss a Collaboration
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="secondary" size="lg">
                  Event Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
