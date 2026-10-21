import React, { useEffect } from "react";
import { ShieldCheck, Lock, Eye, Mail, Server } from "lucide-react";
import { updatePageSEO } from "../lib/seo";

export const Privacy: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Privacy Policy — JI ABHISHEK JI Official Website",
      description:
        "Privacy Policy explaining how inquiries, contact messages, and technical data are processed via Formspree on the official website of Abhishek Singh.",
      canonicalPath: "/privacy",
    });
  }, []);

  return (
    <div className="w-full text-white pt-28 sm:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#22222e]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            DATA PRIVACY &amp; PROTECTION
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel',serif] text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#71717a]">
            Last Updated: January 2025 • Subject to review by site owner
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#d4af37]" />
              1. Overview &amp; Scope
            </h2>
            <p>
              Welcome to the official website of <strong>JI ABHISHEK JI</strong> (Abhishek Singh). We respect your personal privacy and are committed to protecting any information you choose to share with us through our public inquiry forms.
            </p>
            <p>
              This website is a static digital portfolio and does not operate a private user account database, tracking cookies, or behavioral advertising scripts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-[#d4af37]" />
              2. Information We Collect
            </h2>
            <p>
              We only collect information that you explicitly and voluntarily submit through our web inquiry forms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Fan Connect Inquiries:</strong> Full name, optional email address or Instagram/social handle, message category, subject, and message content.
              </li>
              <li>
                <strong>Brand Collaboration Inquiries:</strong> Contact person name, official work email, company name, industry, website URL, campaign brief, requested deliverables, target dates, and estimated budget range.
              </li>
              <li>
                <strong>Event Booking Inquiries:</strong> Organizer name, institution or festival name, contact email, telephone number, event dates, city, venue, expected audience size, and appearance requirements.
              </li>
              <li>
                <strong>Media Kit Requests:</strong> Contact name, corporate email address, and agency or brand intention.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#d4af37]" />
              3. Third-Party Form Processing (Formspree)
            </h2>
            <p>
              To process your communications securely without maintaining a custom database server, website forms submit data directly via HTTPS to <strong>Formspree</strong> (Formspree, Inc., official website: <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">formspree.io</a>).
            </p>
            <p>
              Formspree routes the inquiry to the authorized email address of Abhishek Singh's management team. Formspree's data privacy policy, retention rules, and security controls govern the transmission and transient storage of these form submissions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              4. How We Use Submitted Information
            </h2>
            <p>
              Information received via website forms is strictly utilized for the following legitimate purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Evaluating and responding to fan messages, questions, and video concept suggestions.</li>
              <li>Evaluating commercial feasibility, scheduling, and pricing for brand collaborations.</li>
              <li>Reviewing logistics and availability for collegiate and public live event invitations.</li>
              <li>Dispatching authorized creator media kits to verified corporate contacts.</li>
            </ul>
            <p>
              We do not sell, rent, lease, or trade your contact details to third-party data brokers or marketing lists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white">
              5. Embedded Video Content (YouTube)
            </h2>
            <p>
              Our video gallery embeds public content from YouTube. Where embedded players are activated, we utilize YouTube's privacy-enhanced mode (<code className="text-[#d4af37]">youtube-nocookie.com</code>), which avoids placing tracking cookies until you actively press play on a video. Interacting with YouTube embeds is subject to Google's Privacy Policy and YouTube's Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-['Cinzel',serif] text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#d4af37]" />
              6. Your Rights &amp; Deletion Requests
            </h2>
            <p>
              You have the right to request access to any personal communication you have submitted, or request the deletion of your inquiry records from our inbox. To make a privacy-related inquiry or request record deletion, please submit a request through the <a href="/contact" className="text-[#d4af37] underline">Contact Hub</a> selecting the "General Feedback / Question" category.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#22222e]">
            <p className="text-xs text-[#71717a]">
              Notice: This privacy policy is designed for static portfolio deployments utilizing third-party form routing. It is subject to continuous review and customization by the creator and their authorized legal representatives.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
