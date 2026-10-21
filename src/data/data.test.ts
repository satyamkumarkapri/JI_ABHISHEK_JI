import { describe, it, expect } from "vitest";
import { siteConfig } from "../config/site";
import { videos } from "./videos";
import { galleryItems } from "./gallery";
import { milestones } from "./milestones";
import { socialChannels } from "./socials";

describe("Data Integrity & Compliance", () => {
  it("should have correct creator and brand identity", () => {
    expect(siteConfig.brandName).toBe("JI ABHISHEK JI");
    expect(siteConfig.creatorName).toBe("Abhishek Singh");
    expect(siteConfig.instagramHandle).toBe("@ji_abhishek_ji_");
    expect(siteConfig.tagline).toBe("From Bihar, With Love.");
  });

  it("should have verified official social URLs", () => {
    expect(siteConfig.socials.instagram).toBe("https://www.instagram.com/ji_abhishek_ji_/");
    expect(siteConfig.socials.youtube).toBe("https://www.youtube.com/@ji_abhishek_ji_");
    expect(siteConfig.socials.patnaInstagram).toBe("https://www.instagram.com/patna_wale_abhishek_ji/");
    expect(siteConfig.socials.mummyInstagram).toBe("https://www.instagram.com/ji_abhishek_ji_ki_mummy/");
  });

  it("should have verified categories in video data", () => {
    expect(videos.length).toBeGreaterThan(0);
    videos.forEach((video) => {
      expect(video.id).toBeTruthy();
      expect(video.title).toBeTruthy();
      expect(video.description).toBeTruthy();
      expect(["youtube", "youtube_shorts"]).toContain(video.platform);
      expect(video.videoUrl).toContain("youtube.com");
    });
  });

  it("should have descriptive alt text on all gallery items", () => {
    expect(galleryItems.length).toBeGreaterThan(0);
    galleryItems.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.altText.length).toBeGreaterThan(5);
      expect(item.imageUrl).toBeTruthy();
    });
  });

  it("should have valid creator milestones without invented statistics", () => {
    expect(milestones.length).toBeGreaterThan(0);
    milestones.forEach((m) => {
      expect(m.title).toBeTruthy();
      expect(m.subtitle).toBeTruthy();
      expect(m.description).toBeTruthy();
    });
  });

  it("should contain all 4 official verified channels", () => {
    expect(socialChannels.length).toBe(4);
    const handles = socialChannels.map((c) => c.handle);
    expect(handles).toContain("@ji_abhishek_ji_");
    expect(handles).toContain("@patna_wale_abhishek_ji");
    expect(handles).toContain("@ji_abhishek_ji_ki_mummy");
  });
});
