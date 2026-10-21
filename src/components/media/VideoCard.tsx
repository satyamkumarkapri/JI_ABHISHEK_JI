import React from "react";
import { Play, ExternalLink, Sparkles } from "lucide-react";
import type { Video } from "../../data/videos";

export interface VideoCardProps {
  video: Video;
  onSelect: (video: Video) => void;
  priority?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  const isShort = video.platform === "youtube_shorts";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(video)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(video);
        }
      }}
      aria-label={`Play ${video.title}`}
      className="group flex flex-col rounded-2xl bg-[#121218] border border-[#272733] hover:border-[#d4af37]/60 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
    >
      {/* Thumbnail Aspect Box */}
      <div
        className={`relative w-full ${
          isShort ? "aspect-[9/14]" : "aspect-video"
        } bg-[#181822] overflow-hidden flex items-center justify-center`}
      >
        {video.thumbnailUrl ? (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1a1924] via-[#121218] to-[#0a0a0c]">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <span className="text-xs font-semibold text-white/90 line-clamp-2 px-2">
              {video.title}
            </span>
          </div>
        )}

        {/* Ambient Dark Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity"
          aria-hidden="true"
        />

        {/* Play Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg shadow-black/80 transform scale-90 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase">
            {video.category}
          </span>
          {video.featured && (
            <span className="px-2 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-[#f5e6ab] transition-colors line-clamp-2 leading-snug">
            {video.title}
          </h3>
          <p className="mt-1.5 text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#22222e] flex items-center justify-between text-xs text-[#71717a]">
          <span className="flex items-center gap-1 font-medium text-[#d4af37]">
            Watch Video
            <ExternalLink className="w-3 h-3" />
          </span>
          <span>{video.platform === "youtube_shorts" ? "Short" : "YouTube"}</span>
        </div>
      </div>
    </div>
  );
};
