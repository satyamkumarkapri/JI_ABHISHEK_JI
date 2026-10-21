import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  hindiTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  hindiTitle,
  description,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af37]/25 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Cinzel',serif] leading-tight">
        {title}
      </h2>

      {hindiTitle && (
        <p className="mt-2 text-lg sm:text-xl font-medium text-[#d4af37] font-['Noto_Sans_Devanagari',sans-serif]">
          {hindiTitle}
        </p>
      )}

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-[#a1a1aa] leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
