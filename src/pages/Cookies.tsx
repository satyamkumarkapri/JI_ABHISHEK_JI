import React, { useEffect } from "react";
import { Cookie, ShieldCheck, CheckCircle2 } from "lucide-react";
import { updatePageSEO } from "../lib/seo";

export const Cookies: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Cookie Policy — JI ABHISHEK JI Official Website",
      description:
        "Learn how cookies and local browser storage are used for essential functionality and YouTube video embeds on JI ABHISHEK JI's website.",
      canonicalPath: "/cookies",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#22222e]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Cookie className="w-3.5 h-3.5" />
            COOKIE TRANSPARENCY
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel',serif] text-white">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#71717a]">
            Last Updated: January 2025
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, remember preferences, and provide basic technical insights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              2. Our Privacy-First Commitment
            </h2>
            <p>
              We believe in minimal data footprint. <strong>We do not run third-party advertising cookies, ad re-targeting pixels (such as Meta Pixel or TikTok Pixel), or commercial tracking networks on this website.</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              3. Categories of Cookies Used
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#14141c] border border-[#272733] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  A. Strictly Essential Technical Storage
                </span>
                <p className="text-xs sm:text-sm text-[#a1a1aa]">
                  Used for basic single-page application routing, browser performance, security tokens during form dispatch, and remembering if you have previously dismissed notices. These cannot be disabled as the site requires them to render properly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#14141c] border border-[#272733] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  B. Embedded Video Cookies (YouTube)
                </span>
                <p className="text-xs sm:text-sm text-[#a1a1aa]">
                  When you play a video inside our accessible video modal, YouTube may store cookies or local storage items to remember your playback volume, quality preferences, and stream stats. We implement <code className="text-[#d4af37]">youtube-nocookie.com</code> mode so YouTube cookies are restricted until you initiate playback.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              4. Managing &amp; Disabling Cookies
            </h2>
            <p>
              You can control and delete cookies through your web browser settings. Most browsers allow you to block cookies entirely, clear existing cookies, or notify you when a cookie is placed. Refer to your browser's Help menu (Chrome, Safari, Firefox, Edge) for specific instructions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
