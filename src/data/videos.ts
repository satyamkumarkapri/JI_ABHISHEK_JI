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
    description: "One of the most viral videos on the channel — Abhishek switches daily routines with his mother with hilarious unexpected results.",
    category: "Family Moments",
    platform: "youtube",
    videoId: "P9ipQ2C0YJ8",
    videoUrl: "https://www.youtube.com/watch?v=P9ipQ2C0YJ8",
    thumbnailUrl: "https://img.youtube.com/vi/P9ipQ2C0YJ8/hqdefault.jpg",
    duration: "18:42",
    featured: true,
    tags: ["maabeta", "challenge", "bhojpuri", "family", "comedy"],
  },
  {
    id: "vid-2",
    title: "Why Did Mom Get Angry After Seeing The Surprise? | Comedy Video",
    description: "Classic desi mother reaction comedy when a surprise gift triggers unexpected scolding instead.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoId: "4UXP1fNZBN8",
    videoUrl: "https://www.youtube.com/watch?v=4UXP1fNZBN8",
    thumbnailUrl: "https://img.youtube.com/vi/4UXP1fNZBN8/hqdefault.jpg",
    duration: "14:15",
    featured: true,
    tags: ["surprise", "maa", "desi", "comedy"],
  },
  {
    id: "vid-3",
    title: "Tilak Me Orchestra Bihar Wedding Vlog | Bihari Village Wedding",
    description: "Experience the colorful chaos, vibrant music, and authentic village celebration at a traditional wedding in Bihar.",
    category: "Vlogs",
    platform: "youtube",
    videoId: "ooM2QuTdSNM",
    videoUrl: "https://www.youtube.com/watch?v=ooM2QuTdSNM",
    thumbnailUrl: "https://img.youtube.com/vi/ooM2QuTdSNM/hqdefault.jpg",
    duration: "29:55",
    featured: true,
    tags: ["vlog", "bihar", "wedding", "culture"],
  },
  {
    id: "vid-4",
    title: "Bihar Wedding Vlog | My Brother's Wedding in Village from Patna",
    description: "Heartwarming family moments traveling from Patna to ancestral village for brother's wedding celebrations.",
    category: "Family Moments",
    platform: "youtube",
    videoId: "9kZw-3hwR7E",
    videoUrl: "https://www.youtube.com/watch?v=9kZw-3hwR7E",
    thumbnailUrl: "https://img.youtube.com/vi/9kZw-3hwR7E/hqdefault.jpg",
    duration: "24:10",
    featured: false,
    tags: ["family", "wedding", "patna", "brother"],
  },
  {
    id: "vid-5",
    title: "RCB Match Movie Theater Mein Dekha! Patna INOX Ka IPL Experience",
    description: "Watching a live IPL cricket match in a multiplex cinema theater in Patna with passionate fans.",
    category: "Vlogs",
    platform: "youtube",
    videoId: "_Ngs57CKNWo",
    videoUrl: "https://www.youtube.com/watch?v=_Ngs57CKNWo",
    thumbnailUrl: "https://img.youtube.com/vi/_Ngs57CKNWo/hqdefault.jpg",
    duration: "16:30",
    featured: false,
    tags: ["ipl", "patna", "cinema", "cricket"],
  },
  {
    id: "vid-6",
    title: "Maine Rath Khich Liya | Jagannath Rath Yatra Behind The Scenes",
    description: "Behind the scenes participating in the auspicious Jagannath Rath Yatra festival with thousands of devotees.",
    category: "Behind the Scenes",
    platform: "youtube",
    videoId: "RNVR7VChQ0E",
    videoUrl: "https://www.youtube.com/watch?v=RNVR7VChQ0E",
    thumbnailUrl: "https://img.youtube.com/vi/RNVR7VChQ0E/hqdefault.jpg",
    duration: "12:45",
    featured: false,
    tags: ["rathyatra", "bts", "spiritual", "vlog"],
  },
  {
    id: "vid-7",
    title: "Karan Arjun Double Role In My House | Desi Comedy Series",
    description: "Double role situational comedy sketch creating playful confusion and laughs at home.",
    category: "Relatable Comedy",
    platform: "youtube",
    videoId: "Uicf5L8RoHA",
    videoUrl: "https://www.youtube.com/watch?v=Uicf5L8RoHA",
    thumbnailUrl: "https://img.youtube.com/vi/Uicf5L8RoHA/hqdefault.jpg",
    duration: "15:20",
    featured: true,
    tags: ["comedy", "doublerole", "sketch", "funny"],
  },
  {
    id: "vid-8",
    title: "New Home Pooja | Family Vlog in Bhojpuri | JI ABHISHEK JI",
    description: "A special milestone moment performing traditional Griha Pravesh home blessing pooja with his family.",
    category: "Family Moments",
    platform: "youtube",
    videoId: "mPrEnqkbco0",
    videoUrl: "https://www.youtube.com/watch?v=mPrEnqkbco0",
    thumbnailUrl: "https://img.youtube.com/vi/mPrEnqkbco0/hqdefault.jpg",
    duration: "21:14",
    featured: false,
    tags: ["pooja", "home", "family", "bhojpuri"],
  },
  {
    id: "vid-9",
    title: "Ghar Ke Karname Aur Relatives Ki Baatein | Viral Shorts",
    description: "Quick, punchy situational satire tackling nosy relatives and everyday middle class antics.",
    category: "YouTube Shorts",
    platform: "youtube_shorts",
    videoId: "R6lTK9FFeoI",
    videoUrl: "https://www.youtube.com/shorts/R6lTK9FFeoI",
    thumbnailUrl: "https://img.youtube.com/vi/R6lTK9FFeoI/hqdefault.jpg",
    duration: "0:59",
    featured: false,
    tags: ["shorts", "viral", "relatives", "satire"],
  },
];
