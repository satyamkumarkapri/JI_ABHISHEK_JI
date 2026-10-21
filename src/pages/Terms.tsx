import React, { useEffect } from "react";
import { FileText, Shield, AlertTriangle } from "lucide-react";
import { updatePageSEO } from "../lib/seo";

export const Terms: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Terms of Use — JI ABHISHEK JI Official Website",
      description:
        "Terms of Use governing the official digital home of comedian Abhishek Singh (JI ABHISHEK JI). Covers content usage, inquiry submissions, and trademarks.",
      canonicalPath: "/terms",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#22222e]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            TERMS &amp; CONDITIONS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel',serif] text-white">
            Terms of Use
          </h1>
          <p className="text-xs text-[#71717a]">
            Effective Date: January 2025 • Subject to review by site owner
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#d4af37]" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (<span className="text-white">JI ABHISHEK JI Official Website</span>), you agree to comply with and be bound by these Terms of Use. If you disagree with any portion of these terms, please discontinue your access to the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              2. Intellectual Property Rights
            </h2>
            <p>
              All comedy sketches, video clips, portraits, logos, graphics, audio, brand taglines, and website copy published on this domain are the intellectual property of <strong>Abhishek Singh</strong> or used under appropriate license and fair presentation.
            </p>
            <p>
              You may view and share links to our public pages for personal, non-commercial purposes. You may not re-upload full videos, scrape visual assets, reproduce brand elements, or claim creator affiliation without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              3. Nature of Inquiry Submissions
            </h2>
            <p>
              This website provides web forms for fan messages, brand collaboration proposals, event invitations, and media kit requests. Please note:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>No Booking Guarantee:</strong> Submitting an event booking or brand collaboration inquiry constitutes an exploratory request, not an automatic confirmation of appearance or contractual partnership.
              </li>
              <li>
                <strong>No Response Guarantee:</strong> While all inquiries are received and evaluated by the management team, we cannot guarantee a response to every submission due to schedule constraints.
              </li>
              <li>
                <strong>Unsolicited Script Ideas:</strong> When submitting video or comedy suggestions via the fan form, you acknowledge that similar themes or jokes may be independently developed by the creator. Submissions do not create a confidential or paid writing relationship unless formalized under a separate agreement.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              4. External Links &amp; Third-Party Services
            </h2>
            <p>
              Our website links to official third-party platforms, including Instagram, YouTube, and Formspree. We do not control and are not responsible for the availability, content, or privacy practices of these third-party services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              5. Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              The website and its materials are provided on an "as-is" and "as-available" basis without warranties of any kind. We strive to maintain accurate creator information, but make no representations regarding 100% uptime or uninterrupted service.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#22222e]">
            <p className="text-xs text-[#71717a]">
              Notice: These terms of use are designed for this official static creator site. For questions or commercial licensing discussions, please submit a note via our <a href="/contact" className="text-[#d4af37] underline">Contact Hub</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
