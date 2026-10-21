export type VideoCategory =
  | "Relatable Comedy"
  | "Family Moments"
  | "Vlogs"
  | "Behind the Scenes"
  | "YouTube Shorts";

export interface Video {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  platform: "youtube" | "youtube_shorts";
  videoId?: string; // YouTube 11-char ID when configured
  videoUrl: string; // Direct official YouTube link
  thumbnailUrl?: string;
  publishedAt?: string;
  duration?: string;
  featured?: boolean;
  tags?: string[];
}

/**
 * Centrally managed video collection for JI ABHISHEK JI.
 * 
 * STRICT COMPLIANCE RULE:
 * As mandated by creator guidelines, no fake or randomly invented video IDs are published.
 * Real videos can be populated here or fetched dynamically via YouTube Data API.
 * When this list is empty or items lack videoId, the website presents an elegant, 
 * cinematic channel showcase linking directly to https://www.youtube.com/@ji_abhishek_ji_
 */
export const videos: Video[] = [
  {
    id: "vid-1",
    title: "Desi Ghar Ki Chai Aur Subah Ki Charcha",
    description: "Every Indian household morning story — from missing socks to the quintessential hot cup of masala chai and family banter.",
    category: "Family Moments",
    platform: "youtube",
    // Replace with real YouTube video ID when approved by creator
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["family", "desi", "comedy", "morning"],
  },
  {
    id: "vid-2",
    title: "Bihar Se Dilli: Sleeper Class Ke Karname",
    description: "Hilarious journey observations in Indian Railways sleeper coach — berths, uncle ji ki advice, and shared snacks.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["railway", "bihar", "relatable", "humor"],
  },
  {
    id: "vid-3",
    title: "Jab Papa Bole 'Chalo Bazaar'",
    description: "Shopping with Indian parents — the art of bargaining, vegetables scrutiny, and unwritten market rules.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: false,
    tags: ["parents", "shopping", "desi", "comedy"],
  },
  {
    id: "vid-4",
    title: "Behind The Scenes: Shooting in Patna",
    description: "Unfiltered bloopers, street laughter, and behind the camera moments while shooting comedy sketches in Bihar.",
    category: "Behind the Scenes",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: false,
    tags: ["bts", "patna", "blooper", "filmmaking"],
  },
  {
    id: "vid-5",
    title: "Ghar Wapsi Ka Swaad | Mini Vlog",
    description: "Returning home to homemade sattu, litti chokha, and reconnecting with childhood streets.",
    category: "Vlogs",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["vlog", "bihar", "home", "food"],
  },
  {
    id: "vid-6",
    title: "Relatives Asking 'Aur Aage Ka Kya Plan Hai?'",
    description: "That dread-filled question at every wedding and family get-together, tackled with pure desi satire.",
    category: "YouTube Shorts",
    platform: "youtube_shorts",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_/shorts",
    featured: false,
    tags: ["shorts", "relatives", "wedding", "satire"],
  },
];
