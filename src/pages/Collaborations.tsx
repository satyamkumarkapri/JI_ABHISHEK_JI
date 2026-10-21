import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Sparkles,
  FileText,
  Target,
  Users,
  Video,
  Award,
  Layers,
} from "lucide-react";
import { BrandInquiryForm } from "../components/forms/BrandInquiryForm";
import { MediaKitModal } from "../components/forms/MediaKitModal";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { updatePageSEO } from "../lib/seo";

export const Collaborations: React.FC = () => {
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Brand Collaborations — Work With JI ABHISHEK JI",
      description:
        "Partner with Abhishek Singh (JI ABHISHEK JI) for authentic brand campaigns, Instagram Reels, YouTube integrations, and influencer marketing.",
      canonicalPath: "/collaborations",
    });
  }, []);

  const collaborationFormats = [
    {
      icon: <Video className="w-5 h-5 text-[#d4af37]" />,
      title: "Sponsored Instagram Reels",
      description: "High-engagement, narrative-driven short video sketches seamlessly integrating your brand's core message with relatable desi humor.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#d4af37]" />,
      title: "YouTube Shorts & Integrations",
      description: "Native in-video mentions, product reviews, or dedicated episodes across Abhishek's growing family audience on YouTube.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#d4af37]" />,
      title: "Product Launches & D2C Campaigns",
      description: "Creative unboxings, quirky challenge formats, and awareness pushes tailored for Indian festive and shopping seasons.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#d4af37]" />,
      title: "Event Promotions & Offline Appearances",
      description: "On-ground attendance, stage hosting, festival keynotes, and live meet-and-greets for brand inaugurations.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#d4af37]" />,
      title: "Long-term Brand Partnerships",
      description: "Sustained brand ambassadorships providing repeated organic touchpoints with engaged tier-1 and tier-2 audiences.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
      title: "Custom Creative Campaigns",
      description: "Bespoke concepts co-created between your marketing team and Abhishek to ensure cultural authenticity and high recall.",
    },
  ];

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-20 sm:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            FOR BRANDS, AGENCIES &amp; ENTERPRISES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white leading-tight">
            Let's Build a Powerful <br />
            <span className="text-gold-gradient">Collaboration.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            Have a campaign, product launch, or creative brief? Share your vision and let's explore culturally authentic storytelling that converts.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const el = document.getElementById("brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Submit Brand Brief
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsMediaKitOpen(true)}
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Request Media Kit
            </Button>
          </div>
        </div>

        {/* Potential Formats Grid */}
        <section aria-label="Collaboration Formats">
          <SectionHeading
            eyebrow="CREATIVE OPPORTUNITIES"
            title="Potential Collaboration Formats"
            hindiTitle="ब्रांड प्रचार के प्रारूप"
            description="Available campaign executions designed to deliver high reach and memorable audience retention. All executions are tailored to individual briefs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationFormats.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-3 shadow-lg hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#181824] border border-[#d4af37]/25 flex items-center justify-center mb-1">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-['Cinzel',serif] text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#71717a] mt-6">
            *Formats represent potential creative options. Final deliverables, timelines, and commercial arrangements are subject to mutual discussion and agreement.
          </p>
        </section>

        {/* Media Kit CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#14141c] border border-[#272733] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
                Official Media Kit &amp; Rate Card
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl leading-relaxed">
              In accordance with creator policies, commercial decks and accurate demographic insights are shared exclusively with verified corporate and agency representatives upon request.
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            onClick={() => setIsMediaKitOpen(true)}
            className="shrink-0"
          >
            Request Deck
          </Button>
        </div>

        {/* Brand Brief Form Section */}
        <section id="brief-form" aria-label="Brand Inquiry Form" className="pt-6">
          <SectionHeading
            eyebrow="COMMENCE CONVERSATION"
            title="Submit Your Campaign Brief"
            hindiTitle="अपने कैंपेन की जानकारी साझा करें"
            description="Fill out the details below. Our brand partnerships team will review your objectives and respond with availability and tailored ideas."
          />

          <BrandInquiryForm />
        </section>
      </div>

      {/* Accessible Media Kit Request Modal */}
      <MediaKitModal
        isOpen={isMediaKitOpen}
        onClose={() => setIsMediaKitOpen(false)}
      />
    </div>
  );
};
