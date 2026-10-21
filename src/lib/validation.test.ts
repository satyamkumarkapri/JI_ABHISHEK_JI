import { describe, it, expect } from "vitest";
import {
  fanConnectSchema,
  brandInquirySchema,
  eventInquirySchema,
} from "./validation";

describe("Validation Schemas", () => {
  describe("Fan Connect Schema", () => {
    it("should accept valid submission with email", () => {
      const data = {
        fullName: "Rahul Kumar",
        email: "rahul@example.com",
        socialHandle: "",
        category: "video_idea",
        subject: "Desi Train Journey Sketch Idea",
        message: "Hey Abhishek bhai, love your comedy! How about a sketch on uncle jis in sleeper class?",
        privacyConsent: true,
      };
      const result = fanConnectSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("should accept valid submission with social handle instead of email", () => {
      const data = {
        fullName: "Priya Sharma",
        email: "",
        socialHandle: "@priyacomedyfan",
        category: "appreciation",
        subject: "Loved the Patna vlog",
        message: "Your videos always bring a smile to our entire family!",
        privacyConsent: true,
      };
      const result = fanConnectSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("should reject when neither email nor social handle is supplied", () => {
      const data = {
        fullName: "Anonymous",
        email: "",
        socialHandle: "",
        category: "general",
        subject: "General note",
        message: "Just saying hello from Bihar!",
        privacyConsent: true,
      };
      const result = fanConnectSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject when privacyConsent is false", () => {
      const data = {
        fullName: "Amit Singh",
        email: "amit@example.com",
        category: "general",
        subject: "Greeting",
        message: "Great work on the latest sketch!",
        privacyConsent: false,
      };
      const result = fanConnectSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("Brand Inquiry Schema", () => {
    it("should validate a complete and valid brand brief", () => {
      const data = {
        contactName: "Neha Kapoor",
        workEmail: "neha.kapoor@brandagency.com",
        companyName: "Acme Quick Commerce",
        companyWebsite: "https://acmebrand.com",
        industry: "FMCG / Quick Commerce",
        campaignObjective: "Drive awareness for festive grocery delivery in Bihar & UP",
        requestedPlatform: "instagram_reels",
        deliverableTypes: ["Sponsored Instagram Reels", "Instagram Stories (with link)"],
        budgetRange: "1lakh_2.5lakh",
        startDate: "2026-11-01",
        endDate: "2026-11-15",
        targetAudience: "Youth & Families aged 18-35 in North India",
        campaignBrief: "We want a relatable sketch highlighting how family emergencies get solved instantly via quick delivery.",
        productUrl: "https://acmebrand.com/app",
        privacyConsent: true,
      };
      const result = brandInquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("should reject when campaign end date is before start date", () => {
      const data = {
        contactName: "Vikram",
        workEmail: "vikram@brand.com",
        companyName: "Brand Co",
        industry: "Tech",
        campaignObjective: "App installs",
        requestedPlatform: "instagram_reels",
        deliverableTypes: ["Sponsored Instagram Reels"],
        budgetRange: "under_50k",
        startDate: "2026-12-10",
        endDate: "2026-12-01", // earlier than start date
        campaignBrief: "A creative sketch promoting the app launch.",
        privacyConsent: true,
      };
      const result = brandInquirySchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject invalid email", () => {
      const data = {
        contactName: "Vikram",
        workEmail: "not-an-email",
        companyName: "Brand Co",
        industry: "Tech",
        campaignObjective: "Objective",
        requestedPlatform: "instagram_reels",
        deliverableTypes: ["Sponsored Instagram Reels"],
        budgetRange: "under_50k",
        startDate: "2026-12-01",
        campaignBrief: "Sufficiently long brief explaining the campaign parameters.",
        privacyConsent: true,
      };
      const result = brandInquirySchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("Event Inquiry Schema", () => {
    it("should validate a complete event booking request", () => {
      const data = {
        organizerName: "Saurabh Raj",
        organizationName: "Patna University Cultural Society",
        email: "fest@patnauniversity.ac.in",
        phone: "+91 98765 43210",
        eventName: "Aagaz Cultural Fest 2026",
        eventType: "college_festival",
        preferredDate: "2026-12-20",
        endDate: "2026-12-21",
        city: "Patna",
        venue: "Main University Amphitheatre",
        expectedAudience: "2000_5000",
        eventDescription: "Annual student festival gathering students from colleges across eastern India for comedy and music.",
        appearanceRequirements: "45-minute live comedy set and student interaction.",
        budgetRange: "1lakh_3lakh",
        privacyConsent: true,
      };
      const result = eventInquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });
  });
});
