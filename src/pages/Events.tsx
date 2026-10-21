import React, { useEffect } from "react";
import {
  Calendar,
  MapPin,
  Mic,
  GraduationCap,
  Sparkles,
  Building,
  CheckCircle,
} from "lucide-react";
import { EventInquiryForm } from "../components/forms/EventInquiryForm";
import { SectionHeading } from "../components/ui/SectionHeading";
import { updatePageSEO } from "../lib/seo";

export const Events: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Event Booking & Live Appearances — JI ABHISHEK JI",
      description:
        "Invite Abhishek Singh (JI ABHISHEK JI) to your college festival, cultural show, corporate gala, or live comedy appearance.",
      canonicalPath: "/events",
    });
  }, []);

  const eventTypes = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#d4af37]" />,
      title: "College & University Fests",
      description: "Electrifying cultural nights, comedy performances, and student Q&A interactions for collegiate festivals across India.",
    },
    {
      icon: <Mic className="w-5 h-5 text-[#d4af37]" />,
      title: "Public Shows & Standup Sets",
      description: "Live comedy sets featuring sharp Hindi & Bhojpuri observational humor, family jokes, and crowd banter.",
    },
    {
      icon: <Building className="w-5 h-5 text-[#d4af37]" />,
      title: "Corporate Galas & Brand Launches",
      description: "Clean, high-energy entertainment for annual company banquets, product unveilings, and executive summits.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
      title: "Chief Guest & Judging Panels",
      description: "Inspirational appearances, lighting ceremonies, and panel judging for youth and cultural competitions.",
    },
  ];

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24 space-y-20 sm:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            LIVE APPEARANCES &amp; BOOKINGS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cinzel',serif] text-white leading-tight">
            Have an Event in Mind?
          </h1>

          <p className="text-base sm:text-lg text-[#d4af37] font-['Noto_Sans_Devanagari',sans-serif]">
            कॉलेज फेस्ट, लाइव शोज और सांस्कृतिक कार्यक्रम
          </p>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            Bring laughter, infectious energy, and authentic desi humor to your stage. Abhishek Singh is available for curated public and private events.
          </p>
        </div>

        {/* Event Categories Grid */}
        <section aria-label="Available Event Types">
          <SectionHeading
            eyebrow="STAGE FORMATS"
            title="Appearance Formats"
            hindiTitle="कार्यक्रम के प्रकार"
            description="Explore the types of live gatherings where Abhishek Singh performs, judges, and interacts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121218] border border-[#272733] text-left space-y-3 shadow-lg hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#181824] border border-[#d4af37]/25 flex items-center justify-center mb-1">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold font-['Cinzel',serif] text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Guidelines Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14141c] border border-[#272733] max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs text-[#a1a1aa]">
          <div className="space-y-1">
            <span className="font-bold text-white flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Advance Booking
            </span>
            <p>We recommend submitting invitations at least 3-6 weeks ahead of your proposed dates.</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              Pan-India Travel
            </span>
            <p>Available for events across Bihar, Delhi NCR, Mumbai, Bengaluru, and nationwide venues.</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Formal Rider &amp; Logistics
            </span>
            <p>Sound, technical requirements, and travel riders are provided upon preliminary date lock.</p>
          </div>
        </div>

        {/* Structured Event Inquiry Form */}
        <section aria-label="Event Inquiry Form">
          <SectionHeading
            eyebrow="INVITATION DETAILS"
            title="Submit Event Booking Request"
            hindiTitle="अपने कार्यक्रम की जानकारी भेजें"
            description="Please provide your institution, event theme, expected audience, and date preferences."
          />

          <EventInquiryForm />
        </section>
      </div>
    </div>
  );
};
