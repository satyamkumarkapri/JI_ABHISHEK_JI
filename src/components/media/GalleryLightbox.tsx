import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none"
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
          <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#d4af37] font-semibold tracking-wider">
            {currentIndex! + 1} / {items.length} • {currentItem.category}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="pointer-events-auto p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-[#d4d4d8] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-transform active:scale-90 cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-transform active:scale-90 cursor-pointer hidden sm:flex items-center justify-center"
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
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10 p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#272735] shadow-2xl bg-[#09090b] flex items-center justify-center max-h-[72vh]">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.altText}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Caption & Metadata Bar */}
          <div className="mt-4 p-4 rounded-xl bg-[#121218]/90 backdrop-blur-md border border-[#262633] max-w-2xl w-full text-center space-y-1">
            <h4 className="text-base font-bold font-['Cinzel',serif] text-white">
              {currentItem.title}
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              {currentItem.caption}
            </p>
            {currentItem.isPlaceholder && (
              <p className="text-[11px] text-[#d4af37] flex items-center justify-center gap-1 pt-1">
                <Info className="w-3 h-3" />
                Verified placeholder • Update with official photographs in src/data/gallery.ts
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
