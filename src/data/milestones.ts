export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

/**
 * Verified Creator Milestones
 * Only owner-approved milestone categories are listed without inventing fake award statistics.
 */
export const milestones: Milestone[] = [
  {
    year: "The Foundation",
    title: "Grit, Hard Work & Early Struggles",
    subtitle: "Mumbai to Bihar",
    description: "Supported his family through sheer determination — working in a cloth-rolling factory and delivery services in Mumbai before returning home to Bihar with a dream to create.",
    tag: "The Hustle",
  },
  {
    year: "The Breakthrough",
    title: "Grassroots Comedy & Maa-Beta Sketches",
    subtitle: "From Hometown to Viral Sensation",
    description: "Began recording relatable desi sketches with his mother and brother Vishal. The warmth, Bhojpuri flavor, and pure family humor exploded across Instagram and YouTube.",
    tag: "Creative Genesis",
  },
  {
    year: "Community Surge",
    title: "1.9M+ Instagram & 1.3M+ YouTube Family",
    subtitle: "Connecting Across Generations",
    description: "Reels and mini-vlogs created an emotional bond with millions of viewers across India who recognized their own households in his sketches.",
    tag: "Audience Milestone",
  },
  {
    year: "The Next Era",
    title: "Live Shows, Brand Storytelling & Official Home",
    subtitle: "Taking Regional Comedy Nationwide",
    description: "Headlining live festival comedy nights, partnering with premier national brands, and launching this verified digital headquarters.",
    tag: "Mainstream Stardom",
  },
];
