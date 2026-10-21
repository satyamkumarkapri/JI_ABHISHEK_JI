import React, { useEffect } from "react";
import { MessageSquare, Heart, Sparkles, Lightbulb } from "lucide-react";
import { Instagram, Youtube } from "../components/ui/Icons";
import { FanConnectForm } from "../components/forms/FanConnectForm";
import { siteConfig } from "../config/site";
import { updatePageSEO } from "../lib/seo";

export const Connect: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Connect With Abhishek — Send Messages & Video Ideas",
      description:
        "Send a message, suggest comedy sketch topics, or share video ideas with Abhishek Singh (JI ABHISHEK JI). Official fan connection hub.",
      canonicalPath: "/connect",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            COMMUNITY &amp; FAN HUB
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white">
            Let's Connect.
          </h1>
          <p className="text-base sm:text-lg text-[#d4af37] font-['Noto_Sans_Devanagari',sans-serif]">
            बातें, सुझाव और हंसी के नए विचार
          </p>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl mx-auto">
            Share your thoughts, ask a question, suggest what you'd love to see next, or drop a line of encouragement.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-2">
            <Lightbulb className="w-5 h-5 text-[#d4af37]" />
            <h4 className="text-sm font-bold font-['Cinzel',serif] text-white">
              Suggest Video Ideas
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Have a funny family incident or desi college memory? Suggest it as a comedy sketch topic!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-2">
            <MessageSquare className="w-5 h-5 text-[#d4af37]" />
            <h4 className="text-sm font-bold font-['Cinzel',serif] text-white">
              Ask Abhishek
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Got a question about filming, storytelling, or travel? Ask your questions directly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-2">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <h4 className="text-sm font-bold font-['Cinzel',serif] text-white">
              Share Appreciation
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Words of encouragement fuel new content. Your feedback is genuinely valued by the team.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <FanConnectForm />

        {/* Direct Social Links Strip */}
        <div className="p-8 rounded-2xl bg-[#121218] border border-[#272733] max-w-2xl mx-auto text-center space-y-4">
          <h4 className="text-sm font-bold font-['Cinzel',serif] text-white uppercase tracking-wider">
            Prefer Instant Social Direct Messages?
          </h4>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            You can also tag Abhishek or send comments directly on his verified social channels:
          </p>
          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-semibold">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#d4af37] hover:underline"
            >
              <Instagram className="w-4 h-4" />
              Instagram DMs &amp; Comments
            </a>
            <span className="text-[#3f3f50]">•</span>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#d4af37] hover:underline"
            >
              <Youtube className="w-4 h-4" />
              YouTube Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
