import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "../ui/Icons";
import type { GalleryItem } from "../../data/gallery";

export interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex!] : null;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const prev = (currentIndex! - 1 + items.length) % items.length;
        onNavigate(prev);
      } else if (e.key === "ArrowRight") {
        const next = (currentIndex! + 1) % items.length;
        onNavigate(next);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (currentIndex! - 1 + items.length) % items.length;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (currentIndex! + 1) % items.length;
    onNavigate(next);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={currentItem.title}
        className="cinematic-lightbox fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl"
          aria-hidden="true"
        />

        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs text-[#d4af37] font-semibold tracking-wider shadow-lg">
            {currentIndex! + 1} / {items.length} • {currentItem.category}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="pointer-events-auto p-2.5 rounded-full bg-black/75 hover:bg-black/95 text-[#d4d4d8] hover:text-white border border-white/15 transition-colors cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-transform active:scale-90 cursor-pointer hidden sm:flex items-center justify-center shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-transform active:scale-90 cursor-pointer hidden sm:flex items-center justify-center shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center justify-center z-10 p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#272735] shadow-2xl bg-[#09090b] flex items-center justify-center min-h-[300px] sm:min-h-[440px] md:min-h-[500px] w-full max-w-4xl">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#121218] animate-pulse text-xs text-[#71717a]">
                Loading capture...
              </div>
            )}
            <img
              src={currentItem.imageUrl}
              alt={currentItem.altText}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                // Fallback to official portrait if specific path has issue
                (e.currentTarget as HTMLImageElement).src = "/images/abhishek-portrait.jpg";
                setImageLoaded(true);
              }}
              className={`max-h-[66vh] w-auto max-w-full object-contain mx-auto transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Caption & Metadata Bar */}
          <div className="mt-3.5 p-4 rounded-xl bg-[#121218]/95 backdrop-blur-md border border-[#262633] max-w-2xl w-full text-center space-y-2.5 shadow-2xl">
            <h4 className="text-base sm:text-lg font-bold font-['Cinzel',serif] text-white">
              {currentItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              {currentItem.caption}
            </p>
            <div className="pt-1 flex items-center justify-center gap-3">
              <a
                href={currentItem.instagramUrl || "https://www.instagram.com/ji_abhishek_ji_/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4]/50 hover:via-[#fd1d1d]/50 hover:to-[#fcb045]/50 border border-[#fd1d1d]/40 text-white text-xs font-medium transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#f67280]" />
                <span>View on Instagram (@ji_abhishek_ji_)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
