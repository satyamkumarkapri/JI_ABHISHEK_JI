export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  category: string;
  description: string;
  primaryAction: string;
  // Metric is strictly optional. If not verified or provided, it is omitted.
  verifiedMetric?: {
    value: string;
    label: string;
    source: string;
    lastUpdated?: string;
  };
}

export const socialChannels: SocialChannel[] = [
  {
    name: "Instagram",
    handle: "@ji_abhishek_ji_",
    url: "https://www.instagram.com/ji_abhishek_ji_/",
    category: "Reels & Daily Stories",
    description: "Daily comedy reels, relatable characters, spontaneous humor, and behind-the-scenes moments.",
    primaryAction: "Follow on Instagram",
    // NOTE: In strict accordance with brand guidelines, statistics are only displayed when verified by the owner.
    // Uncomment or populate verified numbers when provided:
    /*
    verifiedMetric: {
      value: "Verified",
      label: "Community Members",
      source: "Instagram Official",
      lastUpdated: "2025"
    }
    */
  },
  {
    name: "YouTube",
    handle: "@ji_abhishek_ji_",
    url: "https://www.youtube.com/@ji_abhishek_ji_",
    category: "Sketches & Shorts",
    description: "Full-length comedy sketches, YouTube Shorts, travel vlogs, and storytelling episodes.",
    primaryAction: "Subscribe on YouTube",
    // Populated only with owner-confirmed data
  },
];
