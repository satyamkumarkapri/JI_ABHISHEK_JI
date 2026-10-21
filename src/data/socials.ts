export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  category: string;
  badge?: string;
  platform?: "instagram" | "youtube";
  description: string;
  primaryAction: string;
  verifiedMetric?: {
    value: string;
    label: string;
    source: string;
    lastUpdated?: string;
  };
}

/**
 * Official social channels for JI ABHISHEK JI (Abhishek Singh) and family.
 * Sourced directly from verified live profiles:
 * - Main Official Instagram: @ji_abhishek_ji_ (1.9M+ followers)
 * - Official YouTube: @ji_abhishek_ji_ (1.3M+ subscribers)
 * - Patna Storyteller Instagram: @patna_wale_abhishek_ji (10.6K+ followers)
 * - Mother's Official Instagram: @ji_abhishek_ji_ki_mummy ("Abhishek ji ki Mummy😎")
 */
export const socialChannels: SocialChannel[] = [
  {
    name: "Instagram Main",
    handle: "@ji_abhishek_ji_",
    url: "https://www.instagram.com/ji_abhishek_ji_/",
    category: "Reels & Daily Stories",
    badge: "Main Creator Profile",
    platform: "instagram",
    description: "Viral Maa-Beta comedy sketches, relatable family banter with brother Vishal, desi reels, and daily stories.",
    primaryAction: "Follow Main Profile",
    verifiedMetric: {
      value: "1.9M+",
      label: "Followers Family",
      source: "Instagram",
      lastUpdated: "2025",
    },
  },
  {
    name: "YouTube Official",
    handle: "@ji_abhishek_ji_",
    url: "https://www.youtube.com/@ji_abhishek_ji_",
    category: "Sketches & Shorts",
    badge: "Official Channel",
    platform: "youtube",
    description: "Full comedy sketches, viral YouTube Shorts, Patna & Mumbai travel vlogs, and episodic family stories.",
    primaryAction: "Subscribe on YouTube",
    verifiedMetric: {
      value: "1.3M+",
      label: "Subscribers",
      source: "YouTube",
      lastUpdated: "2025",
    },
  },
  {
    name: "Patna Wale Abhishek Ji",
    handle: "@patna_wale_abhishek_ji",
    url: "https://www.instagram.com/patna_wale_abhishek_ji/",
    category: "Storytelling & Digital Narratives",
    badge: "Patna Storyteller",
    platform: "instagram",
    description: "Abhishek's dedicated Patna storytelling hub: Local to global narratives, digital presence, and city storytelling.",
    primaryAction: "Follow Patna Page",
    verifiedMetric: {
      value: "10.6K+",
      label: "Patna Community",
      source: "Instagram",
      lastUpdated: "2025",
    },
  },
  {
    name: "Abhishek ji ki Mummy",
    handle: "@ji_abhishek_ji_ki_mummy",
    url: "https://www.instagram.com/ji_abhishek_ji_ki_mummy/",
    category: "Family Star & Maa's Corner",
    badge: "Mummy Ji's Profile",
    platform: "instagram",
    description: "Official Instagram account of Abhishek's beloved mother ('Abhishek ji ki Mummy😎')—the viral Maa-Beta comedy star.",
    primaryAction: "Follow Mummy Ji",
    verifiedMetric: {
      value: "Viral Duo",
      label: "Family Comedy Star",
      source: "Instagram",
      lastUpdated: "2025",
    },
  },
];

