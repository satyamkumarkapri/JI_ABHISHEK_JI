import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Calendar,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Instagram, Youtube } from "../components/ui/Icons";
import { siteConfig } from "../config/site";
import { GeneralContactForm } from "../components/forms/GeneralContactForm";
import { MediaKitModal } from "../components/forms/MediaKitModal";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { updatePageSEO } from "../lib/seo";
import { useTheme } from "../context/ThemeContext";

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Contact Hub — JI ABHISHEK JI Official Contact Options",
      description:
        "Official contact center for Abhishek Singh (JI ABHISHEK JI). Submit fan messages, brand collaboration proposals, college fest bookings, and press inquiries.",
      canonicalPath: "/contact",
    });
  }, []);

  const contactChannels = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#d4af37]" />,
      title: "Fan Messages & Ideas",
      subtitle: "For viewers, followers & supporters",
      description: "Share feedback, ask questions, or suggest comedy sketch topics and character ideas.",
      actionText: "Open Fan Connect",
      href: "/connect",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#d4af37]" />,
      title: "Brand Collaborations",
      subtitle: "For businesses, agencies & marketers",
      description: "Submit briefs for sponsored Reels, YouTube Shorts, integrations, and influencer campaigns.",
      actionText: "Submit Brand Brief",
      href: "/collaborations",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#d4af37]" />,
      title: "Event Invitations",
      subtitle: "For colleges, festivals & corporates",
      description: "Invite Abhishek to perform, host, or attend college fests, corporate galas, and live shows.",
      actionText: "Book An Appearance",
      href: "/events",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#d4af37]" />,
      title: "Official Media Kit",
      subtitle: "For creative agencies & PR teams",
      description: "Request the official creator deck containing demographic overview and commercial formats.",
      actionText: "Request Deck",
      onClick: () => setIsMediaKitOpen(true),
    },
  ];

  return (
    <div
      className={`w-full pt-28 sm:pt-32 pb-24 space-y-20 transition-colors ${
        theme === "light" ? "text-zinc-900" : "text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider ${
              theme === "light"
                ? "bg-[#ede8db] border border-[#d4af37]/40 text-[#855806]"
                : "bg-[#181824] border border-[#d4af37]/30 text-[#d4af37]"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            DIRECT COMMUNICATION HUB
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] ${
              theme === "light" ? "text-zinc-900" : "text-white"
            }`}
          >
            Get In Touch
          </h1>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === "light" ? "text-zinc-600" : "text-[#a1a1aa]"
            }`}
          >
            Please choose the dedicated channel below that best matches your inquiry for the fastest routing and response.
          </p>
        </div>

        {/* 4 Dedicated Communication Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 text-left space-y-4 flex flex-col justify-between shadow-xl ${
                theme === "light"
                  ? "bg-white border-[#ded7c8] hover:border-[#855806]/60 shadow-md"
                  : "bg-[#121218] border-[#272733] hover:border-[#d4af37]/60"
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    theme === "light"
                      ? "bg-[#ede8db] border border-[#d4af37]/40"
                      : "bg-[#181824] border border-[#d4af37]/25"
                  }`}
                >
                  {channel.icon}
                </div>
                <div>
                  <h3
                    className={`text-base font-bold font-['Cinzel',serif] ${
                      theme === "light" ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    {channel.title}
                  </h3>
                  <span
                    className={`text-[11px] font-semibold block mt-0.5 ${
                      theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                    }`}
                  >
                    {channel.subtitle}
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    theme === "light" ? "text-zinc-600" : "text-[#a1a1aa]"
                  }`}
                >
                  {channel.description}
                </p>
              </div>

              <div
                className={`pt-3 border-t ${
                  theme === "light" ? "border-[#ded7c8]" : "border-[#22222e]"
                }`}
              >
                {channel.href ? (
                  <Link to={channel.href} className="block">
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      {channel.actionText} →
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                    onClick={channel.onClick}
                  >
                    {channel.actionText} →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* General Inquiry Form & Direct Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          <div className="lg:col-span-5 text-left space-y-6">
            <SectionHeading
              eyebrow="PRESS & GENERAL"
              title="General Contact"
              hindiTitle="सामान्य संपर्क"
              description="For press inquiries, media interviews, website feedback, or other questions that don't fit into brand or event categories."
              align="left"
            />

            <div
              className={`p-6 rounded-2xl border space-y-4 text-xs ${
                theme === "light"
                  ? "bg-white border-[#ded7c8] text-zinc-700 shadow-md"
                  : "bg-[#121218] border-[#272733] text-[#a1a1aa]"
              }`}
            >
              <span
                className={`font-bold flex items-center gap-1.5 text-sm ${
                  theme === "light" ? "text-zinc-900" : "text-white"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Verified Inquiry Protection
              </span>
              <p className="leading-relaxed">
                All messages sent through this website are processed via Formspree and transmitted to the creator's authorized management inbox. We never publish private personal phone numbers or unverified email addresses.
              </p>
              {siteConfig.socials.publicEmail && (
                <div
                  className={`pt-3 border-t ${
                    theme === "light" ? "border-[#ded7c8]" : "border-[#22222e]"
                  }`}
                >
                  <span
                    className={`block uppercase text-[10px] tracking-wider font-semibold ${
                      theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                    }`}
                  >
                    Official Business Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.socials.publicEmail}`}
                    className={`font-mono text-sm font-semibold transition-colors flex items-center gap-2 mt-1 ${
                      theme === "light"
                        ? "text-zinc-900 hover:text-[#855806]"
                        : "text-white hover:text-[#d4af37]"
                    }`}
                  >
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                    {siteConfig.socials.publicEmail}
                  </a>
                </div>
              )}
            </div>

            {/* Social Links Box */}
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                theme === "light"
                  ? "bg-white border-[#ded7c8] shadow-md"
                  : "bg-[#121218] border-[#272733]"
              }`}
            >
              <h4
                className={`text-xs uppercase tracking-widest font-semibold ${
                  theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                }`}
              >
                Official Social Channels
              </h4>
              <div className="space-y-2">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors ${
                    theme === "light"
                      ? "bg-[#f4efe4] hover:bg-[#eae3d5] text-zinc-900"
                      : "bg-[#181822] hover:bg-[#20202e] text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Instagram
                      className={`w-4 h-4 ${
                        theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                      }`}
                    />
                    Main IG: @ji_abhishek_ji_
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      theme === "light" ? "text-zinc-500" : "text-[#71717a]"
                    }`}
                  />
                </a>

                <a
                  href={siteConfig.socials.patnaInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors ${
                    theme === "light"
                      ? "bg-[#f4efe4] hover:bg-[#eae3d5] text-zinc-900"
                      : "bg-[#181822] hover:bg-[#20202e] text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Instagram
                      className={`w-4 h-4 ${
                        theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                      }`}
                    />
                    Patna: @patna_wale_abhishek_ji
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      theme === "light" ? "text-zinc-500" : "text-[#71717a]"
                    }`}
                  />
                </a>

                <a
                  href={siteConfig.socials.mummyInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors ${
                    theme === "light"
                      ? "bg-[#f4efe4] hover:bg-[#eae3d5] text-zinc-900"
                      : "bg-[#181822] hover:bg-[#20202e] text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Instagram
                      className={`w-4 h-4 ${
                        theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                      }`}
                    />
                    Mummy Ji: @ji_abhishek_ji_ki_mummy
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      theme === "light" ? "text-zinc-500" : "text-[#71717a]"
                    }`}
                  />
                </a>

                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors ${
                    theme === "light"
                      ? "bg-[#f4efe4] hover:bg-[#eae3d5] text-zinc-900"
                      : "bg-[#181822] hover:bg-[#20202e] text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Youtube
                      className={`w-4 h-4 ${
                        theme === "light" ? "text-[#855806]" : "text-[#d4af37]"
                      }`}
                    />
                    YouTube: @ji_abhishek_ji_
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      theme === "light" ? "text-zinc-500" : "text-[#71717a]"
                    }`}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <GeneralContactForm />
          </div>
        </div>
      </div>

      <MediaKitModal
        isOpen={isMediaKitOpen}
        onClose={() => setIsMediaKitOpen(false)}
      />
    </div>
  );
};
