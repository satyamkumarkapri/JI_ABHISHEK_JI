import React from "react";
import { AlertCircle, ExternalLink, HelpCircle } from "lucide-react";
import type { InquiryType } from "../../lib/forms";
import { getFormspreeEndpoint } from "../../lib/forms";

export interface ConfigNoticeBannerProps {
  inquiryType: InquiryType;
  className?: string;
}

export const ConfigNoticeBanner: React.FC<ConfigNoticeBannerProps> = ({
  inquiryType,
  className = "",
}) => {
  const endpoint = getFormspreeEndpoint(inquiryType);

  if (endpoint.isConfigured) {
    return null;
  }

  const varNameMap: Record<InquiryType, string> = {
    fan: "VITE_FORMSPREE_FAN_ID",
    brand: "VITE_FORMSPREE_BRAND_ID",
    event: "VITE_FORMSPREE_EVENT_ID",
    media_kit: "VITE_FORMSPREE_MEDIA_KIT_ID",
    contact: "VITE_FORMSPREE_SHARED_ID",
  };

  const targetVar = varNameMap[inquiryType] || "VITE_FORMSPREE_SHARED_ID";

  return (
    <div
      role="status"
      className={`p-4 rounded-xl bg-[#1d1710] border border-amber-500/40 text-amber-200/90 text-sm flex items-start gap-3 shadow-lg ${className}`}
    >
      <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      <div className="flex-1 space-y-1">
        <p className="font-semibold text-amber-300">
          Form Service Setup Needed: <code className="text-white bg-black/40 px-1.5 py-0.5 rounded text-xs font-mono">{targetVar}</code>
        </p>
        <p className="text-xs text-amber-200/80 leading-relaxed">
          Submissions are safely paused until you connect your free Formspree Form ID in <span className="font-mono text-white">.env</span>.
          No inquiries will be lost or pretended to be sent.
        </p>
        <div className="pt-1 flex items-center gap-4 text-xs font-medium">
          <a
            href="https://formspree.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#d4af37] hover:underline"
          >
            Open Formspree Dashboard
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-amber-500/60">•</span>
          <span className="text-zinc-400 inline-flex items-center gap-1">
            <HelpCircle className="w-3 h-3" />
            See docs/FORMSPREE_SETUP.md
          </span>
        </div>
      </div>
    </div>
  );
};
