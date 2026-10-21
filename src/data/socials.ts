export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  category: string;
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
 * Official social channels for JI ABHISHEK JI (Abhishek Singh).
 * Metrics verified directly from his live official Instagram (@ji_abhishek_ji_)
 * and YouTube (@ji_abhishek_ji_) profiles.
 */
export const socialChannels: SocialChannel[] = [
  {
    name: "Instagram",
    handle: "@ji_abhishek_ji_",
    url: "https://www.instagram.com/ji_abhishek_ji_/",
    category: "Reels & Daily Stories",
    description: "Viral Maa-Beta comedy sketches, relatable family banter with brother Vishal, desi reels, and daily stories.",
    primaryAction: "Follow on Instagram",
    verifiedMetric: {
      value: "1.9M+",
      label: "Followers Family",
      source: "Instagram Official",
      lastUpdated: "2025",
    },
  },
  {
    name: "YouTube",
    handle: "@ji_abhishek_ji_",
    url: "https://www.youtube.com/@ji_abhishek_ji_",
    category: "Sketches & Shorts",
    description: "Full comedy sketches, viral YouTube Shorts, Patna & Mumbai travel vlogs, and family stories.",
    primaryAction: "Subscribe on YouTube",
    verifiedMetric: {
      value: "1.3M+",
      label: "Subscribers",
      source: "YouTube Official",
      lastUpdated: "2025",
    },
  },
];
