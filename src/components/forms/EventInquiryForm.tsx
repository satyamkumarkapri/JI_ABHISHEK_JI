import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Send, CheckCircle2, Copy, Check, MapPin, Users } from "lucide-react";
import { eventInquirySchema, type EventInquiryFormData } from "../../lib/validation";
import { submitForm } from "../../lib/forms";
import { InputField, TextareaField, SelectField, CheckboxField } from "./FormField";
import { Button } from "../ui/Button";
import { ConfigNoticeBanner } from "../ui/ConfigNoticeBanner";
import { useToast } from "../../hooks/useToast";
import { Link } from "react-router-dom";

export const EventInquiryForm: React.FC = () => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceCode: string;
    message: string;
  } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<EventInquiryFormData>({
    defaultValues: {
      organizerName: "",
      organizationName: "",
      email: "",
      phone: "",
      eventName: "",
      eventType: "college_festival",
      preferredDate: "",
      endDate: "",
      city: "",
      venue: "",
      expectedAudience: "500_2000",
      eventDescription: "",
      appearanceRequirements: "",
      budgetRange: "prefer_to_discuss",
      additionalInfo: "",
      privacyConsent: false,
    },
  });

  const eventDescription = watch("eventDescription") || "";

  const onSubmit = async (data: EventInquiryFormData) => {
    const validation = eventInquirySchema.safeParse(data);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof EventInquiryFormData;
        if (fieldName) {
          setError(fieldName, { message: issue.message });
        }
      });
      showToast({
        type: "error",
        title: "Please check event details",
        message: validation.error.issues[0]?.message || "Kindly complete all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm("event", {
        organizerName: data.organizerName,
        organizationName: data.organizationName,
        email: data.email,
        phone: data.phone || "Not provided",
        eventName: data.eventName,
        eventType: data.eventType,
        preferredDate: data.preferredDate,
        endDate: data.endDate || "Single day event",
        city: data.city,
        venue: data.venue,
        expectedAudience: data.expectedAudience,
        eventDescription: data.eventDescription,
        appearanceRequirements: data.appearanceRequirements,
        budgetRange: data.budgetRange,
        additionalInfo: data.additionalInfo || "None",
      });

      if (result.success && result.referenceCode) {
        setSubmissionSuccess({
          referenceCode: result.referenceCode,
          message: result.message,
        });
        showToast({
          type: "success",
          title: "Event Invitation Transmitted!",
          message: "Our event booking team has received your invitation.",
        });
        reset();
      } else {
        showToast({
          type: result.isConfigMissing ? "warning" : "error",
          title: result.isConfigMissing ? "Setup Required" : "Submission Failed",
          message: result.message,
          duration: 9000,
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Network Error",
        message: "Failed to submit event request. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ConfigNoticeBanner inquiryType="event" className="mb-6" />

      {submissionSuccess ? (
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14141c] border border-[#d4af37]/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-['Cinzel',serif] text-white">
              Event Invitation Received
            </h3>
            <p className="text-sm text-[#a1a1aa] max-w-lg mx-auto leading-relaxed">
              Thank you for inviting Abhishek Singh to your event. Your request is queued for availability and logistics review. Please note that this submission is an invitation request and does not constitute a confirmed appearance until formal confirmation is signed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0d0d12] border border-[#272733] inline-flex items-center gap-4">
            <div className="text-left">
              <span className="text-[10px] uppercase font-semibold text-[#71717a] block tracking-wider">
                Event Request Tracking Ref
              </span>
              <code className="text-sm font-mono text-[#d4af37] font-bold">
                {submissionSuccess.referenceCode}
              </code>
            </div>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(submissionSuccess.referenceCode);
                setCopiedCode(true);
                setTimeout(() => setCopiedCode(false), 2500);
              }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#d4d4d8] hover:text-white transition-colors cursor-pointer"
              title="Copy reference code"
            >
              {copiedCode ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmissionSuccess(null)}
            >
              Submit Another Event
            </Button>
            <Link to="/">
              <Button variant="secondary" size="md">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="p-6 sm:p-10 rounded-2xl bg-[#121218]/90 backdrop-blur-xl border border-[#272733] space-y-7 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#22222e]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-lg font-bold font-['Cinzel',serif] text-white">
                Event Booking Request
              </h3>
            </div>
            <span className="text-xs text-[#a1a1aa] font-medium hidden sm:inline">
              Official Invitation Channel
            </span>
          </div>

          {/* Section 1: Organizer Info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              1. Organizer &amp; Institution
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Organizer / Contact Name"
                placeholder="e.g. Ankit Verma"
                required
                {...register("organizerName")}
                error={errors.organizerName?.message}
              />

              <InputField
                label="Institution / Organization"
                placeholder="e.g. IIT Patna, Delhi University, Event Co."
                required
                {...register("organizationName")}
                error={errors.organizationName?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Official Contact Email"
                type="email"
                placeholder="events@college.edu or name@org.com"
                required
                {...register("email")}
                error={errors.email?.message}
              />

              <InputField
                label="Contact Phone / WhatsApp"
                type="tel"
                placeholder="+91 98765 43210"
                helperText="For time-sensitive scheduling coordination"
                {...register("phone")}
                error={errors.phone?.message}
              />
            </div>
          </div>

          {/* Section 2: Event Details */}
          <div className="space-y-4 pt-4 border-t border-[#22222e]">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              2. Event Scope &amp; Logistics
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Event Name"
                placeholder="e.g. Anwesha 2026, Annual Cultural Gala"
                required
                {...register("eventName")}
                error={errors.eventName?.message}
              />

              <SelectField
                label="Event Type"
                required
                options={[
                  { value: "college_festival", label: "College Cultural / Tech Festival" },
                  { value: "cultural_festival", label: "State / Cultural Festival" },
                  { value: "brand_event", label: "Corporate / Brand Launch Event" },
                  { value: "guest_appearance", label: "Celebrity Guest Appearance / Judge" },
                  { value: "interview_panel", label: "Live Panel / Interactive Keynote" },
                  { value: "public_show", label: "Public Comedy / Entertainment Show" },
                  { value: "other", label: "Other Special Gathering" },
                ]}
                {...register("eventType")}
                error={errors.eventType?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Preferred Date"
                type="date"
                required
                {...register("preferredDate")}
                error={errors.preferredDate?.message}
              />

              <InputField
                label="Event End Date (If multi-day)"
                type="date"
                {...register("endDate")}
                error={errors.endDate?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="City & State"
                placeholder="e.g. Patna, Bihar or New Delhi"
                required
                leftIcon={<MapPin className="w-4 h-4" />}
                {...register("city")}
                error={errors.city?.message}
              />

              <InputField
                label="Venue / Auditorium Name"
                placeholder="e.g. Main Auditorium, Open Air Theatre"
                required
                {...register("venue")}
                error={errors.venue?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SelectField
                label="Expected Audience Size"
                required
                options={[
                  { value: "under_500", label: "Intimate (Under 500 attendees)" },
                  { value: "500_2000", label: "Medium (500 – 2,000 attendees)" },
                  { value: "2000_5000", label: "Large (2,000 – 5,000 attendees)" },
                  { value: "5000_plus", label: "Festival Scale (5,000+ attendees)" },
                ]}
                {...register("expectedAudience")}
                error={errors.expectedAudience?.message}
              />

              <SelectField
                label="Allocated Budget Range (INR)"
                required
                options={[
                  { value: "prefer_to_discuss", label: "Prefer to Discuss / Institutional Standard" },
                  { value: "under_1lakh", label: "Under ₹1,00,000" },
                  { value: "1lakh_3lakh", label: "₹1,00,000 – ₹3,00,000" },
                  { value: "3lakh_5lakh", label: "₹3,00,000 – ₹5,00,000" },
                  { value: "above_5lakh", label: "Above ₹5,00,000" },
                ]}
                {...register("budgetRange")}
                error={errors.budgetRange?.message}
              />
            </div>
          </div>

          {/* Section 3: Appearance Requirements & Description */}
          <div className="space-y-4 pt-4 border-t border-[#22222e]">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              3. Role &amp; Appearance Details
            </h4>

            <InputField
              label="Appearance Expectations"
              placeholder="e.g. 30-45 minute comedy performance, student Q&A, chief guest felicitation"
              required
              {...register("appearanceRequirements")}
              error={errors.appearanceRequirements?.message}
            />

            <TextareaField
              label="Event Description & Theme"
              placeholder="Tell us about your audience demographics, fest theme, stage and sound arrangements, and travel arrangements provided..."
              required
              rows={4}
              maxLength={2000}
              currentLength={eventDescription.length}
              {...register("eventDescription")}
              error={errors.eventDescription?.message}
            />
          </div>

          <div className="pt-2">
            <CheckboxField
              label={
                <span>
                  I understand this form is an invitation request and does not confirm the creator's attendance or date block. Confirmation is issued only upon mutual agreement. Handled as per the{" "}
                  <Link to="/privacy" className="text-[#d4af37] underline hover:text-white">
                    Privacy Policy
                  </Link>.
                </span>
              }
              {...register("privacyConsent")}
              error={errors.privacyConsent?.message}
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Event Invitation
            </Button>
          </div>

          <p className="text-center text-xs text-[#71717a] flex items-center justify-center gap-1.5 pt-1">
            <Users className="w-3.5 h-3.5 text-[#d4af37]" />
            Official event requests reviewed by management within 2-3 business days.
          </p>
        </form>
      )}
    </div>
  );
};
