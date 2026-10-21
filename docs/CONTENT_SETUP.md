# Content Management & Setup Guide

This guide explains how to customize and maintain all public text, videos, photo gallery assets, and creator information for **JI ABHISHEK JI**.

---

## 1. Architecture Philosophy: No Database Required
To ensure maximum speed, security, zero maintenance overhead, and free hosting on Vercel, all public content is managed through typed TypeScript configuration files.

---

## 2. File Location Guide

| Content Type | File Location | Purpose |
|---|---|---|
| **Site Metadata & Taglines** | `src/config/site.ts` | Brand name, creator name, taglines, biographies, nav links |
| **Video Library** | `src/data/videos.ts` | Sketches, shorts, vlogs, YouTube links & embed IDs |
| **Photo Gallery** | `src/data/gallery.ts` | Editorial portraits, stage photos, BTS shots |
| **Creator Milestones** | `src/data/milestones.ts` | Journey chapters and verified highlights |
| **Social Channels** | `src/data/socials.ts` | Official handles, verified profile URLs |

---

## 3. How to Update Specific Content

### A. Updating the Creator Portrait
1. Save your high-resolution portrait in `public/images/` (e.g., `public/images/abhishek-portrait.jpg`).
2. Open `src/components/media/CreatorPortrait.tsx`.
3. Update the default `src` prop:
   ```tsx
   src = "/images/abhishek-portrait.jpg",
   ```

### B. Adding YouTube Videos
Open `src/data/videos.ts` and add your video entry:

```ts
{
  id: "vid-my-new-sketch",
  title: "Title of Your Comedy Sketch",
  description: "Short description of the sketch or vlog...",
  category: "Relatable Comedy", // Options: "Relatable Comedy" | "Family Moments" | "Vlogs" | "Behind the Scenes" | "YouTube Shorts"
  platform: "youtube", // or "youtube_shorts"
  videoId: "dQw4w9WgXcQ", // 11-character YouTube video ID for embedded player
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  featured: true,
  tags: ["comedy", "desi", "bihar"],
}
```

### C. Adding Gallery Photographs
1. Save approved images into `public/images/`.
2. Open `src/data/gallery.ts` and add:

```ts
{
  id: "gal-my-stage-photo",
  title: "Live Show in Patna",
  category: "Live & Events", // Options: "Portraits" | "Behind the Scenes" | "Live & Events" | "Brand Shoots"
  imageUrl: "/images/live-patna.jpg",
  altText: "Abhishek Singh performing live comedy on stage",
  caption: "Performing for an incredible college festival crowd in Patna.",
  date: "2025",
  aspectRatio: "landscape", // "portrait" | "landscape" | "square"
}
```

### D. Updating Taglines & Biographies
Open `src/config/site.ts` to edit:
- `tagline`: `"From Bihar, With Love."`
- `supportingHeadline`: `"Comedy, kahaniyan aur zindagi ke asli pal."`
- `supportingDescription`: `"Welcome to the world of JI ABHISHEK JI..."`
- `bio` and `extendedBio` arrays.

---

## 4. Creator Compliance Rules
- **Never publish unverified metrics or follower counts:** Only publish metrics when verified by Abhishek.
- **Never represent unrelated stock photography as Abhishek Singh.**
- **Never invent booking rates or campaign commitments.**
