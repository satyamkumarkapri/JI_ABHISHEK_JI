import React, { useState, useMemo } from "react";
import { ZoomIn, Camera } from "lucide-react";
import { galleryItems, type GalleryItem, type GalleryCategory } from "../../data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

export interface GalleryGridProps {
  initialCategory?: string;
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialCategory = "All",
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    "All",
    "Portraits",
    "Behind the Scenes",
    "Live & Events",
    "Brand Shoots",
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = filteredItems.findIndex((i) => i.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Category Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
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

      {/* Grid — Perfectly Equal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => handleOpenLightbox(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenLightbox(item);
              }
            }}
            aria-label={`View ${item.title}`}
            className="group relative rounded-2xl overflow-hidden bg-[#121218] border border-[#272733] hover:border-[#d4af37]/60 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] aspect-[4/3] w-full"
          >
            <img
              src={item.imageUrl}
              alt={item.altText}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Vignette Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              aria-hidden="true"
            />

            {/* Hover Zoom Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase">
                {item.category}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 text-left pointer-events-none">
              <h3 className="text-sm sm:text-base font-bold font-['Cinzel',serif] text-white drop-shadow-sm">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-[#d4d4d8] line-clamp-1">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {displayedItems.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-[#121218] border border-[#272733] space-y-3 max-w-md mx-auto">
          <Camera className="w-8 h-8 text-[#d4af37] mx-auto" />
          <h4 className="text-lg font-bold font-['Cinzel',serif] text-white">
            No Images in Category
          </h4>
          <p className="text-xs text-[#a1a1aa]">
            Please select another photography category above.
          </p>
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
};
