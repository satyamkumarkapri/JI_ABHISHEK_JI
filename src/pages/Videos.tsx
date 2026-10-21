import React, { useEffect, useState } from "react";
import { Play, Sparkles, ExternalLink } from "lucide-react";
import { Youtube } from "../components/ui/Icons";
import { videos, type Video } from "../data/videos";
import { siteConfig } from "../config/site";
import { SectionHeading } from "../components/ui/SectionHeading";
import { VideoGrid } from "../components/media/VideoGrid";
import { VideoPlayerModal } from "../components/media/VideoPlayerModal";
import { Button } from "../components/ui/Button";
import { updatePageSEO } from "../lib/seo";

export const Videos: React.FC = () => {
  const featuredVideo = videos.find((v) => v.featured) || videos[0] || null;
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);

  useEffect(() => {
    updatePageSEO({
      title: "Videos & Sketches — JI ABHISHEK JI Comedy Library",
      description:
        "Watch official comedy sketches, desi family moments, travel vlogs, and YouTube Shorts by Abhishek Singh (JI ABHISHEK JI).",
      canonicalPath: "/videos",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-16 sm:space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Youtube className="w-3.5 h-3.5" />
            OFFICIAL VIDEO LIBRARY
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white">
            Comedy &amp; Stories
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Explore curated comedy sketches, relatable desi household moments, travel vlogs, and viral shorts from Abhishek Singh's official channel.
          </p>
        </div>

        {/* Featured Video Showcase Hero Card */}
        {featuredVideo && (
          <div className="p-1 rounded-3xl bg-gradient-to-r from-[#d4af37]/40 via-[#272733] to-[#d4af37]/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[22px] bg-[#121218] overflow-hidden items-center">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setPlayingVideo(featuredVideo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPlayingVideo(featuredVideo);
                  }
                }}
                className="lg:col-span-7 relative aspect-video bg-[#181822] cursor-pointer group flex items-center justify-center overflow-hidden focus-visible:outline-none"
              >
                {featuredVideo.thumbnailUrl ? (
                  <img
                    src={featuredVideo.thumbnailUrl}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#1c1a26] via-[#121218] to-[#09090b]">
                    <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl transform scale-95 group-hover:scale-110 transition-transform duration-300 mb-3">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="text-sm font-semibold text-white/90">
                      Click to Play Featured Sketch
                    </span>
                  </div>
                )}

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl transform scale-95 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#d4af37] text-black text-xs font-bold flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    Spotlight Video
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 text-left space-y-4">
                <span className="text-xs font-mono font-bold text-[#d4af37] tracking-wider uppercase block">
                  {featuredVideo.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Cinzel',serif] text-white leading-snug">
                  {featuredVideo.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {featuredVideo.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setPlayingVideo(featuredVideo)}
                    leftIcon={<Play className="w-4 h-4 fill-current" />}
                  >
                    Play Video
                  </Button>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
                      Subscribe
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid with Search and Category Filtering */}
        <div className="pt-6">
          <SectionHeading
            eyebrow="SEARCH & FILTER"
            title="All Sketches & Episodes"
            hindiTitle="सभी वीडियो और शॉर्ट्स"
            description="Use categories or the search bar below to find specific comedy sketches, vlogs, or shorts."
          />

          <VideoGrid showControls={true} />
        </div>

        {/* Official Channel Direct Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14141c] border border-[#272733] text-center space-y-4 max-w-3xl mx-auto shadow-xl">
          <Youtube className="w-10 h-10 text-rose-500 mx-auto" />
          <h3 className="text-2xl font-bold font-['Cinzel',serif] text-white">
            Watch Over 100+ Videos On Official YouTube
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-lg mx-auto">
            Never miss a new sketch, travel vlog, or shorts drop. Subscribe to Abhishek Singh on YouTube and hit the bell icon for instant updates.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Open @ji_abhishek_ji_ on YouTube
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Player Modal for featured video */}
      <VideoPlayerModal
        video={playingVideo}
        onClose={() => setPlayingVideo(null)}
      />
    </div>
  );
};
