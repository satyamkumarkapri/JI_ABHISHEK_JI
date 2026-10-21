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
    title: "Switching Lives with my Mom for 24 Hours | मां बेटे की अदला बदली",
    description: "One of the most viral sketches on the channel — taking on mother's daily household duties with hilarious unexpected consequences.",
    category: "Family Moments",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["maabeta", "challenge", "bhojpuri", "family", "comedy"],
  },
  {
    id: "vid-2",
    title: "Aakhir Surprise Dekh Kar Kyun Aaya Maa Ko Gussa",
    description: "Relatable family situational comedy when children try to surprise Indian moms and get hilarious reactions instead.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["surprise", "maa", "desi", "comedy"],
  },
  {
    id: "vid-3",
    title: "Aapki Haldi Kis Dabbe Me Hai? #BihariMaa",
    description: "The eternal mystery of Indian kitchens — where spices live in reused cookie tins and Bournvita jars.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: false,
    tags: ["biharimaa", "kitchen", "relatable", "reels"],
  },
  {
    id: "vid-4",
    title: "Behind The Scenes: Shooting Sketches in Bihar With Vishal",
    description: "Unfiltered bloopers, street laughter, and behind the camera moments while filming with brother Vishal and friends across Bihar.",
    category: "Behind the Scenes",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: false,
    tags: ["bts", "patna", "blooper", "vishal", "filmmaking"],
  },
  {
    id: "vid-5",
    title: "Aapne Belan Se Maar Khai Hai? | Mini Vlog",
    description: "Childhood nostalgia and funny anecdotes of growing up in a traditional Indian household, told with authentic Bhojpuri warmth.",
    category: "Vlogs",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_",
    featured: true,
    tags: ["vlog", "nostalgia", "belan", "bihar"],
  },
  {
    id: "vid-6",
    title: "Ghar Wale Mujhe Pehchan Kyu Nahi Rahe | Viral Comedy",
    description: "Quick, punchy situational satire when you dress up differently and family members pretend they don't know you.",
    category: "YouTube Shorts",
    platform: "youtube_shorts",
    videoUrl: "https://www.youtube.com/@ji_abhishek_ji_/shorts",
    featured: false,
    tags: ["shorts", "viral", "family", "satire"],
  },
];
