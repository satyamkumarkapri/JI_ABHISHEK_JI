import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export interface CreatorPortraitProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const CreatorPortrait: React.FC<CreatorPortraitProps> = ({
  src = "/images/abhishek-portrait.jpg",
  alt = "Abhishek Singh (JI ABHISHEK JI) — Official Creator Portrait",
  className = "",
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative group rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-[#d4af37]/40 via-[#272733]/60 to-[#09090b] shadow-2xl shadow-black/80 transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Outer ambient glow behind portrait */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#d4af37]/20 to-transparent blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10"
        aria-hidden="true"
      />

      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0e0e14] border border-white/10 flex items-center justify-center">
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181824] to-[#09090b]">
            <div className="w-24 h-24 rounded-full bg-[#121218] border border-[#d4af37]/50 flex items-center justify-center shadow-inner mb-4">
              <span className="font-['Cinzel',serif] text-3xl font-bold text-[#d4af37]">JA</span>
            </div>
            <h4 className="text-xl font-bold font-['Cinzel',serif] text-white">
              JI ABHISHEK JI
            </h4>
            <p className="text-xs text-[#a1a1aa] mt-2 max-w-xs">
              Official Creator Portrait • Abhishek Singh
            </p>
          </div>
        )}

        {/* Cinematic Vignette Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Small Discreet Floating Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-semibold text-white tracking-wide">
              Abhishek Singh
            </span>
          </div>
          <span className="text-[#d4af37] text-[11px] font-mono tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            @ji_abhishek_ji_
          </span>
        </div>
      </div>
    </div>
  );
};
