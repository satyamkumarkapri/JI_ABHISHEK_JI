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
    year: "Chapter 1",
    title: "Grassroots Comedy & Relatable Desi Stories",
    subtitle: "From Everyday Observations to Screen",
    description: "Started recording authentic comedy skits and relatable sketches reflecting the warmth, humor, and cultural richness of Bihar and northern India.",
    tag: "Creative Genesis",
  },
  {
    year: "Chapter 2",
    title: "The Growing Digital Family",
    subtitle: "Connecting Across Generations",
    description: "Shorts and reels gained viral appreciation, creating an engaged community of viewers who see their own families reflected in Abhishek's comedy.",
    tag: "Audience Connection",
  },
  {
    year: "Chapter 3",
    title: "Vlogs, Travels & Live Audiences",
    subtitle: "Expanding Horizons",
    description: "Began sharing personal travel vlogs, cultural interactions, and live stage appearances at festivals and collegiate gatherings.",
    tag: "Live & Content Expansion",
  },
  {
    year: "Chapter 4",
    title: "Brand Storytelling & Official Digital Home",
    subtitle: "A Premium Creative Presence",
    description: "Collaborating with forward-thinking brands and establishing this official digital hub for fans, sponsors, and event partners.",
    tag: "The Next Era",
  },
];
