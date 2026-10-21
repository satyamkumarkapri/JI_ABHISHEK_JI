import React, { useEffect } from "react";
import { Camera, Sparkles, Info } from "lucide-react";
import { Instagram } from "../components/ui/Icons";
import { siteConfig } from "../config/site";
import { GalleryGrid } from "../components/media/GalleryGrid";
import { Button } from "../components/ui/Button";
import { updatePageSEO } from "../lib/seo";

export const Gallery: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Photo Gallery — JI ABHISHEK JI Official Visual Portfolio",
      description:
        "High-definition editorial portraits, live stage moments, and behind-the-scenes photography of comedian Abhishek Singh (JI ABHISHEK JI).",
      canonicalPath: "/gallery",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            EDITORIAL VISUAL ARCHIVE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white">
            Photo Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Portraits, live performance memories, behind-the-scenes production stills, and creative brand shoot moments.
          </p>
        </div>

        {/* Note on Approved Photography */}
        <div className="p-4 rounded-xl bg-[#14141c] border border-[#272733] max-w-2xl mx-auto text-xs text-[#8e8ea0] flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>
            Photographs are curated and verified. Update or add new approved captures anytime in <code className="text-[#d4af37]">src/data/gallery.ts</code>.
          </span>
        </div>

        {/* Gallery Grid with Lightbox */}
        <GalleryGrid />

        {/* Instagram Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14141c] via-[#1a1924] to-[#14141c] border border-[#d4af37]/30 text-center space-y-5 max-w-4xl mx-auto shadow-2xl">
          <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto" />
          <h3 className="text-2xl font-bold font-['Cinzel',serif] text-white">
            Looking For Daily Visual Stories?
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
            Follow Abhishek on Instagram for daily candid stories, behind-the-scenes reel filming, and spontaneous moments.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md" leftIcon={<Instagram className="w-4 h-4" />}>
                Follow @ji_abhishek_ji_ on Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
