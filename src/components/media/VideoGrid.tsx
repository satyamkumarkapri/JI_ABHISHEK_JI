import React, { useState, useMemo } from "react";
import { Search, ExternalLink, Film, X } from "lucide-react";
import { videos, type Video, type VideoCategory } from "../../data/videos";
import { VideoCard } from "./VideoCard";
import { VideoPlayerModal } from "./VideoPlayerModal";
import { Button } from "../ui/Button";

export interface VideoGridProps {
  initialCategory?: string;
  limit?: number;
  showControls?: boolean;
}

export const VideoGrid: React.FC<VideoGridProps> = ({
  initialCategory = "All",
  limit,
  showControls = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(limit || 9);

  const categories = [
    "All",
    "Relatable Comedy",
    "Family Moments",
    "Vlogs",
    "Behind the Scenes",
    "YouTube Shorts",
  ];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === "All" || video.category === (selectedCategory as VideoCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        video.title.toLowerCase().includes(q) ||
        video.description.toLowerCase().includes(q) ||
        (video.tags && video.tags.some((tag) => tag.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <div className="w-full space-y-8">
      {/* Search and Category Filter Controls */}
      {showControls && (
        <div className="space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sketches, family stories, vlogs..."
              className="w-full pl-10 pr-10 py-3 rounded-full bg-[#14141c] border border-[#272733] text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#71717a] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(limit || 9);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20"
                    : "bg-[#14141c] text-[#a1a1aa] border border-[#272733] hover:text-white hover:border-[#3f3f50]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid or Empty State */}
      {displayedVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={(v) => setSelectedVideo(v)}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-[#121218] border border-[#272733] space-y-4 max-w-lg mx-auto">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#1e1e28] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
            <Film className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
            No Videos Found
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
            No videos matched your filter or search query. You can discover Abhishek's entire library of comedy sketches and daily vlogs directly on YouTube!
          </p>
          <div className="pt-2">
            <a
              href="https://www.youtube.com/@ji_abhishek_ji_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Visit Official YouTube Channel
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-6 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Load More Videos ({filteredVideos.length - visibleCount} remaining)
          </Button>
        </div>
      )}

      {/* Dedicated Accessible Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
