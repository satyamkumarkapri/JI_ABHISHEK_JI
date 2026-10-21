import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Film, Home, Play, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "../components/ui/Button";
import { updatePageSEO } from "../lib/seo";

export const NotFound: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "404 Page Not Found — JI ABHISHEK JI",
      description: "The page or sketch you requested could not be located.",
      canonicalPath: "/404",
    });
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 text-white px-4">
      <div className="max-w-xl w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#121218] border border-[#272733] shadow-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-20 h-20 mx-auto rounded-2xl bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
          <Film className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase block">
            ERROR 404 • RETAKE NEEDED
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Cinzel',serif] text-white">
            Scene Not Found
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#d4af37] font-['Noto_Sans_Devanagari',sans-serif]">
            लगता है गलत स्टेशन पर उतर गए!
          </p>
          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-sm mx-auto">
            The page, video, or link you're looking for seems to have changed or doesn't exist. Let's get you back to the laughs.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
          <Link to="/">
            <Button variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link to="/videos">
            <Button variant="secondary" size="md" leftIcon={<Play className="w-4 h-4" />}>
              Watch Videos
            </Button>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#22222e] grid grid-cols-2 gap-3 text-xs text-[#a1a1aa]">
          <Link
            to="/connect"
            className="p-2.5 rounded-xl bg-[#181822] hover:bg-[#20202e] hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
            Fan Connect
          </Link>
          <Link
            to="/collaborations"
            className="p-2.5 rounded-xl bg-[#181822] hover:bg-[#20202e] hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
            Brand Collabs
          </Link>
        </div>
      </div>
    </div>
  );
};
