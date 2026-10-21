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
    name: "Instagram (Main Official)",
    handle: "@ji_abhishek_ji_",
    url: "https://www.instagram.com/ji_abhishek_ji_/",
    category: "Reels & Daily Stories",
    badge: "Official Main Profile",
    platform: "instagram",
    description: "Viral Maa-Beta comedy sketches, relatable family banter with brother Vishal, desi reels, and daily stories.",
    primaryAction: "Follow @ji_abhishek_ji_",
    verifiedMetric: {
      value: "1.9M+",
      label: "Followers Family",
      source: "Instagram Official",
      lastUpdated: "2025",
    },
  },
  {
    name: "YouTube Official",
    handle: "@ji_abhishek_ji_",
    url: "https://www.youtube.com/@ji_abhishek_ji_",
    category: "Sketches & Shorts",
    badge: "Official YouTube Channel",
    platform: "youtube",
    description: "Full comedy sketches, viral YouTube Shorts, Patna & Mumbai travel vlogs, and episodic family stories.",
    primaryAction: "Subscribe on YouTube",
    verifiedMetric: {
      value: "1.3M+",
      label: "Subscribers",
      source: "YouTube Official",
      lastUpdated: "2025",
    },
  },
  {
    name: "Patna Wale Abhishek Ji",
    handle: "@patna_wale_abhishek_ji",
    url: "https://www.instagram.com/patna_wale_abhishek_ji/",
    category: "Storytelling & Digital Narratives",
    badge: "Abhishek's Patna Profile",
    platform: "instagram",
    description: "Abhishek's dedicated Patna storyteller account: Local to global narratives, elevating digital presence, and city storytelling.",
    primaryAction: "Follow @patna_wale_abhishek_ji",
    verifiedMetric: {
      value: "10.6K+",
      label: "Patna Community",
      source: "Instagram Official",
      lastUpdated: "2025",
    },
  },
  {
    name: "Abhishek ji ki Mummy",
    handle: "@ji_abhishek_ji_ki_mummy",
    url: "https://www.instagram.com/ji_abhishek_ji_ki_mummy/",
    category: "Family Star & Maa's Corner",
    badge: "Mummy Ji's Official Profile",
    platform: "instagram",
    description: "Official Instagram account of Abhishek's beloved mother ('Abhishek ji ki Mummy😎')—the superstar and soul of the viral Maa-Beta comedy sketches.",
    primaryAction: "Follow Mummy Ji",
    verifiedMetric: {
      value: "Viral Duo",
      label: "Family Comedy Star",
      source: "Instagram Official",
      lastUpdated: "2025",
    },
  },
];

