export interface NavItem {
  title: string;
  href: string;
  highlight?: boolean;
}

export interface SiteConfig {
  creatorName: string;
  brandName: string;
  instagramHandle: string;
  category: string;
  tagline: string;
  supportingHeadline: string;
  supportingDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
  connectCTA: string;
  bio: string;
  extendedBio: string[];
  philosophy: string;
  origin: string;
  languages: string[];
  socials: {
    instagram: string;
    youtube: string;
    patnaInstagram: string;
    mummyInstagram: string;
    publicEmail?: string;
  };
  formspree: {
    fanId: string;
    brandId: string;
    eventId: string;
    mediaKitId: string;
    sharedId: string;
  };
  navigation: NavItem[];
  footerNavigation: {
    explore: NavItem[];
    collaborate: NavItem[];
    legal: NavItem[];
  };
  contentCategories: {
    id: string;
    title: string;
    hindiTitle: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  creatorName: "Abhishek Singh",
  brandName: "JI ABHISHEK JI",
  instagramHandle: "@ji_abhishek_ji_",
  category: "Comedian & Digital Content Creator",
  tagline: "From Bihar, With Love.",
  supportingHeadline: "Comedy, kahaniyan aur zindagi ke asli pal.",
  supportingDescription:
    "Welcome to the world of JI ABHISHEK JI — entertainment, relatable stories, and moments worth sharing.",
  primaryCTA: "Watch My Videos",
  secondaryCTA: "Work With Me",
  connectCTA: "Connect With Me",
  bio: "Abhishek Singh, known to his digital family as JI ABHISHEK JI, is an Indian comedian, entertainer, and digital storyteller from Bihar. He brings authentic desi humor, vibrant family observations, and heartwarming relatable stories to millions in Hindi and Bhojpuri.",
  extendedBio: [
    "From early struggles working in a cloth-rolling factory and delivery services in Mumbai to building a digital family of over 1.9 Million followers, Abhishek Singh’s journey is rooted in resilience, family love, and authenticity.",
    "Returning to his native roots in Bihar, he began recording relatable comedy sketches with his mother and brother Vishal. His viral 'Maa-Beta' sketches and sharp Hindi-Bhojpuri humor captured the hearts of families across India.",
    "Today, whether performing at live college comedy nights, crafting episodic sketches, or sharing daily stories on Instagram (@ji_abhishek_ji_), Abhishek stays true to simplicity, cultural pride, and clean family entertainment.",
  ],
  philosophy:
    "To turn everyday desi experiences into laughter that families can enjoy together, keeping roots firmly grounded while welcoming new creative horizons.",
  origin: "Bihar, India",
  languages: ["Hindi", "Bhojpuri", "English"],
  socials: {
    instagram: "https://www.instagram.com/ji_abhishek_ji_/",
    youtube: "https://www.youtube.com/@ji_abhishek_ji_",
    patnaInstagram: "https://www.instagram.com/patna_wale_abhishek_ji/",
    mummyInstagram: "https://www.instagram.com/ji_abhishek_ji_ki_mummy/",
    publicEmail: import.meta.env.VITE_PUBLIC_CONTACT_EMAIL || undefined,
  },
  formspree: {
    fanId: import.meta.env.VITE_FORMSPREE_FAN_ID || "",
    brandId: import.meta.env.VITE_FORMSPREE_BRAND_ID || "",
    eventId: import.meta.env.VITE_FORMSPREE_EVENT_ID || "",
    mediaKitId: import.meta.env.VITE_FORMSPREE_MEDIA_KIT_ID || "",
    sharedId: import.meta.env.VITE_FORMSPREE_SHARED_ID || "",
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Videos", href: "/videos" },
    { title: "Gallery", href: "/gallery" },
    { title: "Connect", href: "/connect" },
    { title: "Events", href: "/events" },
    { title: "Contact", href: "/contact" },
    { title: "Work With Me", href: "/collaborations", highlight: true },
  ],
  footerNavigation: {
    explore: [
      { title: "Home", href: "/" },
      { title: "About Abhishek", href: "/about" },
      { title: "Videos & Sketches", href: "/videos" },
      { title: "Photo Gallery", href: "/gallery" },
    ],
    collaborate: [
      { title: "Brand Collaborations", href: "/collaborations" },
      { title: "Event Invitations", href: "/events" },
      { title: "Fan Connect", href: "/connect" },
      { title: "Contact Hub", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Use", href: "/terms" },
      { title: "Cookie Policy", href: "/cookies" },
    ],
  },
  contentCategories: [
    {
      id: "comedy",
      title: "Relatable Comedy",
      hindiTitle: "देसी कॉमेडी",
      description: "Observational sketches capturing relatable desi household antics and everyday life.",
      icon: "Sparkles",
    },
    {
      id: "family",
      title: "Family Moments",
      hindiTitle: "पारिवारिक किस्से",
      description: "Warm, funny, and chaotic scenarios that happen in every Indian family.",
      icon: "Heart",
    },
    {
      id: "vlogs",
      title: "Vlogs & Travel",
      hindiTitle: "व्लॉग्स और सफर",
      description: "Authentic behind-the-scenes vlogs, travel diaries, and personal reflections.",
      icon: "Compass",
    },
    {
      id: "bts",
      title: "Behind the Scenes",
      hindiTitle: "शूटिंग के पीछे",
      description: "Blooper reels, creative ideation, and raw production moments.",
      icon: "Film",
    },
    {
      id: "stories",
      title: "Stories & Conversations",
      hindiTitle: "कहानियां और बातें",
      description: "Heart-to-heart discussions, fan questions, and humorous narratives.",
      icon: "MessageCircle",
    },
    {
      id: "collaborations",
      title: "Brand Collaborations",
      hindiTitle: "ब्रांड कोलैबोरेशन",
      description: "Creative storytelling integrated with leading brands and cultural campaigns.",
      icon: "Briefcase",
    },
  ],
};
