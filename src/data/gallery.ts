export type GalleryCategory =
  | "All"
  | "Portraits"
  | "Behind the Scenes"
  | "Live & Events"
  | "Brand Shoots";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Portraits" | "Behind the Scenes" | "Live & Events" | "Brand Shoots";
  imageUrl: string;
  altText: string;
  caption: string;
  date?: string;
  aspectRatio: "portrait" | "landscape" | "square";
  isPlaceholder?: boolean;
}

/**
 * Editorial Gallery Items
 * Note: These items use high-aesthetic neutral editorial placeholders clearly marked
 * for one-click replacement with approved photographs from Abhishek Singh.
 * Replace URLs with your official photography in this file.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cinematic Creator Portrait",
    category: "Portraits",
    imageUrl: "/images/gallery-1.svg",
    altText: "Artistic portrait silhouette representing Abhishek Singh in studio lighting",
    caption: "Editorial studio shoot capturing the introspective side of comedy.",
    date: "2025",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
  {
    id: "gal-2",
    title: "Behind The Scenes: Field Production",
    category: "Behind the Scenes",
    imageUrl: "/images/gallery-2.svg",
    altText: "Field production setup for video filming",
    caption: "Filming grassroots sketches on location across Bihar.",
    date: "2025",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
  {
    id: "gal-3",
    title: "Live Stage Interaction",
    category: "Live & Events",
    imageUrl: "/images/gallery-3.svg",
    altText: "Abhishek Singh addressing an enthusiastic audience at an event",
    caption: "Sharing laughs, stories, and unforgettable memories with the live audience.",
    date: "2025",
    aspectRatio: "square",
    isPlaceholder: true,
  },
  {
    id: "gal-4",
    title: "Storytelling & Character Workshop",
    category: "Behind the Scenes",
    imageUrl: "/images/gallery-4.svg",
    altText: "Creative writing and comedy character development notes",
    caption: "Where the sketches begin: raw dialogue notes and desi idioms.",
    date: "2025",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
  {
    id: "gal-5",
    title: "Creative Brand Collaboration Shoot",
    category: "Brand Shoots",
    imageUrl: "/images/gallery-5.svg",
    altText: "Professional studio set for brand partnership campaign",
    caption: "High-production brand campaign combining humor and visual flair.",
    date: "2025",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
  {
    id: "gal-6",
    title: "The Creator In Elements",
    category: "Portraits",
    imageUrl: "/images/gallery-6.svg",
    altText: "Candid portrait of Abhishek smiling on set",
    caption: "Pure joy between takes — making people laugh is the real reward.",
    date: "2025",
    aspectRatio: "square",
    isPlaceholder: true,
  },
];
