import { z } from "zod";

// Helper for optional URL that allows empty string
const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((val) => !val || /^https?:\/\/.+\..+/.test(val), {
    message: "Please enter a valid URL including http:// or https://",
  });

// Helper for optional email
const optionalEmail = z
  .string()
  .trim()
  .optional()
  .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "Please enter a valid email address",
  });

/**
 * 1. Fan Connect Form Schema
 */
export const fanConnectSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(80, "Full name cannot exceed 80 characters"),
    email: optionalEmail,
    socialHandle: z
      .string()
      .trim()
      .max(60, "Social handle cannot exceed 60 characters")
      .optional(),
    category: z.enum(
      [
        "general",
        "question",
        "video_idea",
        "comedy_topic",
        "appreciation",
        "other",
      ] as const,
      {
        message: "Please choose an inquiry category",
      }
    ),
    subject: z
      .string()
      .trim()
      .min(3, "Subject must be at least 3 characters")
      .max(120, "Subject cannot exceed 120 characters"),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(2000, "Message cannot exceed 2000 characters"),
    privacyConsent: z.boolean().refine((val) => val === true, {
      message: "You must acknowledge the privacy notice to submit",
    }),
  })
  .refine(
    (data) => Boolean((data.email && data.email.length > 0) || (data.socialHandle && data.socialHandle.length > 0)),
    {
      message: "Please provide either an email or an Instagram/social handle so we know where this came from",
      path: ["email"],
    }
  );

export type FanConnectFormData = z.infer<typeof fanConnectSchema>;

/**
 * 2. Brand Collaboration Form Schema
 */
export const brandInquirySchema = z
  .object({
    contactName: z
      .string()
      .trim()
      .min(2, "Contact name must be at least 2 characters")
      .max(80, "Contact name cannot exceed 80 characters"),
    workEmail: z
      .string()
      .trim()
      .email("Please provide a valid business or work email address"),
    companyName: z
      .string()
      .trim()
      .min(2, "Company / Brand name must be at least 2 characters")
      .max(100, "Company name cannot exceed 100 characters"),
    companyWebsite: optionalUrl,
    industry: z
      .string()
      .trim()
      .min(2, "Please specify your industry (e.g. FMCG, Tech, Lifestyle)")
      .max(80, "Industry cannot exceed 80 characters"),
    campaignObjective: z
      .string()
      .trim()
      .min(5, "Please describe the campaign objective (min 5 characters)")
      .max(200, "Campaign objective cannot exceed 200 characters"),
    requestedPlatform: z.enum(
      [
        "instagram_reels",
        "youtube_shorts",
        "youtube_dedicated",
        "cross_platform",
        "event_appearance",
      ] as const,
      {
        message: "Please select the primary platform requested",
      }
    ),
    deliverableTypes: z
      .array(z.string())
      .min(1, "Please select at least one deliverable format"),
    budgetRange: z.enum(
      [
        "under_50k",
        "50k_1lakh",
        "1lakh_2.5lakh",
        "2.5lakh_5lakh",
        "above_5lakh",
        "prefer_to_discuss",
      ] as const,
      {
        message: "Please select an estimated budget range in INR",
      }
    ),
    startDate: z.string().min(1, "Please select a target campaign start date"),
    endDate: z.string().optional(),
    targetAudience: z.string().trim().max(200, "Audience description too long").optional(),
    campaignBrief: z
      .string()
      .trim()
      .min(20, "Please share a brief description of the campaign (at least 20 characters)")
      .max(3000, "Campaign brief cannot exceed 3000 characters"),
    productUrl: optionalUrl,
    additionalRequirements: z.string().trim().max(1000).optional(),
    privacyConsent: z.boolean().refine((val) => val === true, {
      message: "Please agree to the privacy policy to submit your inquiry",
    }),
  })
  .refine(
    (data) => {
      if (!data.endDate || !data.startDate) return true;
      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message: "Campaign end date cannot be earlier than start date",
      path: ["endDate"],
    }
  );

export type BrandInquiryFormData = z.infer<typeof brandInquirySchema>;

/**
 * 3. Event Booking Form Schema
 */
export const eventInquirySchema = z
  .object({
    organizerName: z
      .string()
      .trim()
      .min(2, "Organizer name must be at least 2 characters")
      .max(80, "Name cannot exceed 80 characters"),
    organizationName: z
      .string()
      .trim()
      .min(2, "Organization or College name must be at least 2 characters")
      .max(120, "Organization name cannot exceed 120 characters"),
    email: z
      .string()
      .trim()
      .email("Please provide a valid contact email"),
    phone: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || /^(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}$/.test(val.replace(/\s+/g, "")), {
        message: "Please enter a valid phone number",
      }),
    eventName: z
      .string()
      .trim()
      .min(2, "Event name must be at least 2 characters")
      .max(120, "Event name cannot exceed 120 characters"),
    eventType: z.enum(
      [
        "college_festival",
        "cultural_festival",
        "brand_event",
        "guest_appearance",
        "interview_panel",
        "public_show",
        "other",
      ] as const,
      {
        message: "Please select an event type",
      }
    ),
    preferredDate: z.string().min(1, "Please select the preferred event date"),
    endDate: z.string().optional(),
    city: z
      .string()
      .trim()
      .min(2, "City name must be at least 2 characters")
      .max(80, "City name cannot exceed 80 characters"),
    venue: z
      .string()
      .trim()
      .min(2, "Venue name or campus must be at least 2 characters")
      .max(120, "Venue name cannot exceed 120 characters"),
    expectedAudience: z.enum(
      [
        "under_500",
        "500_2000",
        "2000_5000",
        "5000_plus",
      ] as const,
      {
        message: "Please select expected audience size",
      }
    ),
    eventDescription: z
      .string()
      .trim()
      .min(20, "Event description must be at least 20 characters")
      .max(2000, "Event description cannot exceed 2000 characters"),
    appearanceRequirements: z
      .string()
      .trim()
      .min(5, "Please summarize the appearance requirements (e.g. 30 min comedy set, chief guest, judging)")
      .max(500, "Cannot exceed 500 characters"),
    budgetRange: z.enum(
      [
        "under_1lakh",
        "1lakh_3lakh",
        "3lakh_5lakh",
        "above_5lakh",
        "prefer_to_discuss",
      ] as const,
      {
        message: "Please select a budget range in INR",
      }
    ),
    additionalInfo: z.string().trim().max(1000).optional(),
    privacyConsent: z.boolean().refine((val) => val === true, {
      message: "Please acknowledge the privacy policy to submit",
    }),
  })
  .refine(
    (data) => {
      if (!data.endDate || !data.preferredDate) return true;
      return new Date(data.endDate) >= new Date(data.preferredDate);
    },
    {
      message: "Event end date cannot be earlier than start date",
      path: ["endDate"],
    }
  );

export type EventInquiryFormData = z.infer<typeof eventInquirySchema>;

/**
 * 4. Media Kit Request Schema
 */
export const mediaKitRequestSchema = z.object({
  contactName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80),
  workEmail: z.string().trim().email("Please provide a valid work email"),
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100),
  purpose: z
    .string()
    .trim()
    .min(5, "Please briefly state the campaign purpose or brand intention")
    .max(500),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Consent required to receive media kit",
  }),
});

export type MediaKitRequestFormData = z.infer<typeof mediaKitRequestSchema>;

/**
 * 5. General Contact Schema
 */
export const generalContactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Please provide a valid email"),
  inquiryType: z.enum(["general", "press", "brand", "event", "other"] as const),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Please agree to the privacy policy",
  }),
});

export type GeneralContactFormData = z.infer<typeof generalContactSchema>;
