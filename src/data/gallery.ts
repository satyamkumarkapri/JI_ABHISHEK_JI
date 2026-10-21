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
  instagramUrl?: string;
  isPlaceholder?: boolean;
}

/**
 * Editorial Gallery Items for JI ABHISHEK JI (@ji_abhishek_ji_).
 * Features authentic high-resolution creator photography and direct links
 * to his verified Instagram community.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Creator Portrait — Abhishek Singh",
    category: "Portraits",
    imageUrl: "/images/abhishek-portrait.jpg",
    altText: "Abhishek Singh (JI ABHISHEK JI) in black sequined tuxedo and sunglasses",
    caption: "Official creator portrait — celebrating the fusion of traditional charm with modern digital presence.",
    date: "2025",
    aspectRatio: "portrait",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
  {
    id: "gal-2",
    title: "Behind The Scenes: Grassroots Sketch Production",
    category: "Behind the Scenes",
    imageUrl: "/images/gallery-bts-bihar.jpg",
    altText: "Production crew filming comedy sketch with actors laughing on location in Bihar",
    caption: "On location in Bihar: filming everyday comedy sketches with rustic flavor and authentic laughter.",
    date: "2025",
    aspectRatio: "landscape",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
  {
    id: "gal-3",
    title: "Live Stage Performance & Comedy Night",
    category: "Live & Events",
    imageUrl: "/images/gallery-live-stage.jpg",
    altText: "Abhishek Singh performing live on stage at a college festival with a cheering crowd",
    caption: "Connecting live with fans at college festivals and comedy events across India.",
    date: "2025",
    aspectRatio: "landscape",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
  {
    id: "gal-4",
    title: "Iconic Maa-Beta Comedy Moments",
    category: "Behind the Scenes",
    imageUrl: "/images/gallery-maa-beta.jpg",
    altText: "Mother and son laughing together over tea during a sketch filming",
    caption: "The heart of JI ABHISHEK JI's viral content — relatable mother-son interactions that touch millions of desi households.",
    date: "2025",
    aspectRatio: "landscape",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
  {
    id: "gal-5",
    title: "Commercial Campaign & Studio Shoot",
    category: "Brand Shoots",
    imageUrl: "/images/gallery-brand-studio.jpg",
    altText: "Behind the scenes on a high-end commercial video set with cinema cameras and studio lighting",
    caption: "Collaborating with top brands to create memorable, narrative-driven promotional storytelling.",
    date: "2025",
    aspectRatio: "landscape",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
  {
    id: "gal-6",
    title: "Candid Creator Moment at Sunset",
    category: "Portraits",
    imageUrl: "/images/gallery-candid-sunset.jpg",
    altText: "Abhishek Singh candid portrait smiling in denim jacket during golden hour sunset",
    caption: "Staying grounded in his roots while building one of India's most beloved digital comedy families.",
    date: "2025",
    aspectRatio: "portrait",
    instagramUrl: "https://www.instagram.com/ji_abhishek_ji_/",
    isPlaceholder: false,
  },
];
