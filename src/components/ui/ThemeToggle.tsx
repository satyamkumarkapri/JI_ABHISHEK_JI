import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "", showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className={`relative inline-flex items-center gap-2 p-2 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-[#181822] hover:bg-[#20202c] border-[#2c2c3d] text-[#d4af37]"
          : "bg-[#e8e4d8] hover:bg-[#ded9cb] border-[#d4cebe] text-[#8c6d17]"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold pr-1">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
};
