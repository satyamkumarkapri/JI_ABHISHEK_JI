import React, { useEffect } from "react";
import { X, ExternalLink, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Video } from "../../data/videos";
import { Button } from "../ui/Button";

export interface VideoPlayerModalProps {
  video: Video | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && video) {
        onClose();
      }
    };

    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const isShort = video.platform === "youtube_shorts";
  const hasEmbeddableId = Boolean(video.videoId && video.videoId.length === 11);

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`cinematic-modal relative w-full ${
            isShort ? "max-w-md" : "max-w-4xl"
          } bg-[#121218] border border-[#2e2e3d] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col`}
        >
          {/* Top Bar */}
          <div className="p-4 px-6 border-b border-[#262633] flex items-center justify-between gap-4 bg-[#0d0d12]">
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider block">
                {video.category} • Official Video
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white truncate">
                {video.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video player"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#d4d4d8] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player or Fallback View */}
          <div className="relative bg-black flex items-center justify-center">
            {hasEmbeddableId ? (
              <div
                className={`w-full ${
                  isShort ? "aspect-[9/16] max-h-[65vh]" : "aspect-video"
                }`}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center space-y-5 aspect-video w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#181822] to-[#09090b]">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h4 className="text-xl font-bold font-['Cinzel',serif] text-white">
                    Watch On YouTube Channel
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {video.description}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
                      Open on Official YouTube
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer Info & Actions */}
          <div className="p-5 sm:p-6 bg-[#0f0f15] border-t border-[#262633] flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#a1a1aa] flex-1 min-w-[200px]">
              {video.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
              >
                Official YouTube Link
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
