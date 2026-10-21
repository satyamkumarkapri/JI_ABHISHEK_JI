import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Briefcase, Send, CheckCircle2, Copy, Check, FileText } from "lucide-react";
import { brandInquirySchema, type BrandInquiryFormData } from "../../lib/validation";
import { submitForm } from "../../lib/forms";
import { InputField, TextareaField, SelectField, CheckboxField } from "./FormField";
import { Button } from "../ui/Button";
import { ConfigNoticeBanner } from "../ui/ConfigNoticeBanner";
import { useToast } from "../../hooks/useToast";
import { Link } from "react-router-dom";

export const BrandInquiryForm: React.FC = () => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceCode: string;
    message: string;
  } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    "Instagram Reels",
  ]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<BrandInquiryFormData>({
    defaultValues: {
      contactName: "",
      workEmail: "",
      companyName: "",
      companyWebsite: "",
      industry: "",
      campaignObjective: "",
      requestedPlatform: "instagram_reels",
      deliverableTypes: ["Instagram Reels"],
      budgetRange: "prefer_to_discuss",
      startDate: "",
      endDate: "",
      targetAudience: "",
      campaignBrief: "",
      productUrl: "",
      additionalRequirements: "",
      privacyConsent: false,
    },
  });

  const campaignBrief = watch("campaignBrief") || "";

  const deliverableOptions = [
    "Sponsored Instagram Reels",
    "Instagram Stories (with link)",
    "YouTube Shorts",
    "YouTube In-Video Integration",
    "Dedicated YouTube Feature",
    "Product Launch Campaign",
    "Event Appearance & Coverage",
    "Long-term Creator Partnership",
  ];

  const handleDeliverableToggle = (option: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const onSubmit = async (data: BrandInquiryFormData) => {
    // Set deliverables from state
    const fullData = {
      ...data,
      deliverableTypes: selectedDeliverables,
    };

    const validation = brandInquirySchema.safeParse(fullData);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof BrandInquiryFormData;
        if (fieldName) {
          setError(fieldName, { message: issue.message });
        }
      });
      showToast({
        type: "error",
        title: "Incomplete Brand Brief",
        message: validation.error.issues[0]?.message || "Please check the highlighted fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm("brand", {
        contactName: fullData.contactName,
        workEmail: fullData.workEmail,
        companyName: fullData.companyName,
        companyWebsite: fullData.companyWebsite || "N/A",
        industry: fullData.industry,
        campaignObjective: fullData.campaignObjective,
        requestedPlatform: fullData.requestedPlatform,
        deliverableTypes: fullData.deliverableTypes.join(", "),
        budgetRange: fullData.budgetRange,
        startDate: fullData.startDate,
        endDate: fullData.endDate || "Flexible",
        targetAudience: fullData.targetAudience || "General Pan-India Hindi/Bhojpuri",
        campaignBrief: fullData.campaignBrief,
        productUrl: fullData.productUrl || "N/A",
        additionalRequirements: fullData.additionalRequirements || "None",
      });

      if (result.success && result.referenceCode) {
        setSubmissionSuccess({
          referenceCode: result.referenceCode,
          message: result.message,
        });
        showToast({
          type: "success",
          title: "Proposal Received!",
          message: "Our brand partnerships team will review and connect shortly.",
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
        message: "Failed to send brief. Please try again or reach out on Instagram.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ConfigNoticeBanner inquiryType="brand" className="mb-6" />

      {submissionSuccess ? (
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14141c] border border-[#d4af37]/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-['Cinzel',serif] text-white">
              Brand Proposal Transmitted
            </h3>
            <p className="text-sm text-[#a1a1aa] max-w-lg mx-auto leading-relaxed">
              Thank you for considering JI ABHISHEK JI for your campaign. Your brief has been routed directly to the brand partnerships inbox. Submitting an inquiry represents an exploratory discussion and does not constitute a binding booking confirmation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0d0d12] border border-[#272733] inline-flex items-center gap-4">
            <div className="text-left">
              <span className="text-[10px] uppercase font-semibold text-[#71717a] block tracking-wider">
                Brand Brief Tracking Ref
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
              Submit Another Brief
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
              <Briefcase className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-lg font-bold font-['Cinzel',serif] text-white">
                Brand Collaboration Brief
              </h3>
            </div>
            <span className="text-xs text-[#a1a1aa] font-medium hidden sm:inline">
              Formspree Secure Delivery
            </span>
          </div>

          {/* Section 1: Contact & Company Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              1. Brand &amp; Point of Contact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Contact Person Name"
                placeholder="e.g. Priyanshu Mehta"
                required
                {...register("contactName")}
                error={errors.contactName?.message}
              />

              <InputField
                label="Official Work Email"
                type="email"
                placeholder="collab@yourcompany.com"
                required
                {...register("workEmail")}
                error={errors.workEmail?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Company / Brand Name"
                placeholder="e.g. Swiggy, Zepto, Tata"
                required
                {...register("companyName")}
                error={errors.companyName?.message}
              />

              <InputField
                label="Industry"
                placeholder="e.g. FMCG, Fintech, Quick-Commerce"
                required
                {...register("industry")}
                error={errors.industry?.message}
              />
            </div>

            <InputField
              label="Company Website / Product Link"
              type="url"
              placeholder="https://yourbrand.com"
              {...register("companyWebsite")}
              error={errors.companyWebsite?.message}
            />
          </div>

          {/* Section 2: Campaign Scope & Deliverables */}
          <div className="space-y-4 pt-4 border-t border-[#22222e]">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              2. Campaign Scope &amp; Format
            </h4>

            <InputField
              label="Primary Campaign Objective"
              placeholder="e.g. Product Launch awareness, App installs, Brand recall"
              required
              {...register("campaignObjective")}
              error={errors.campaignObjective?.message}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SelectField
                label="Primary Target Platform"
                required
                options={[
                  { value: "instagram_reels", label: "Instagram Reels & Stories" },
                  { value: "youtube_shorts", label: "YouTube Shorts" },
                  { value: "youtube_dedicated", label: "YouTube Video Integration" },
                  { value: "cross_platform", label: "Cross-Platform (Instagram + YouTube)" },
                  { value: "event_appearance", label: "Offline Brand Launch / Event" },
                ]}
                {...register("requestedPlatform")}
                error={errors.requestedPlatform?.message}
              />

              <SelectField
                label="Estimated Budget Range (INR)"
                required
                options={[
                  { value: "prefer_to_discuss", label: "Prefer to Discuss / Custom Scope" },
                  { value: "under_50k", label: "Under ₹50,000" },
                  { value: "50k_1lakh", label: "₹50,000 – ₹1,00,000" },
                  { value: "1lakh_2.5lakh", label: "₹1,00,000 – ₹2,50,000" },
                  { value: "2.5lakh_5lakh", label: "₹2,50,000 – ₹5,00,000" },
                  { value: "above_5lakh", label: "Above ₹5,00,000" },
                ]}
                {...register("budgetRange")}
                error={errors.budgetRange?.message}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                Requested Deliverable Formats <span className="text-[#d4af37]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverableOptions.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                      selectedDeliverables.includes(opt)
                        ? "bg-[#1f1d16] border-[#d4af37] text-white"
                        : "bg-[#14141c] border-[#272735] text-[#a1a1aa] hover:border-[#3f3f50]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedDeliverables.includes(opt)}
                      onChange={() => handleDeliverableToggle(opt)}
                      className="h-4 w-4 rounded border-[#38384a] text-[#d4af37] focus:ring-0"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Target Start Date"
                type="date"
                required
                {...register("startDate")}
                error={errors.startDate?.message}
              />

              <InputField
                label="Target Completion / Live Date"
                type="date"
                {...register("endDate")}
                error={errors.endDate?.message}
              />
            </div>
          </div>

          {/* Section 3: Campaign Brief & Deliverables */}
          <div className="space-y-4 pt-4 border-t border-[#22222e]">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              3. Creative Brief
            </h4>

            <TextareaField
              label="Campaign Brief & Creative Expectations"
              placeholder="Share the brand story, key talking points, product benefits, do's and don'ts, or comedy angles you envision..."
              required
              rows={5}
              maxLength={3000}
              currentLength={campaignBrief.length}
              {...register("campaignBrief")}
              error={errors.campaignBrief?.message}
            />

            <InputField
              label="Product / Campaign Landing Page Link"
              type="url"
              placeholder="https://brand.com/campaign-page"
              {...register("productUrl")}
              error={errors.productUrl?.message}
            />
          </div>

          <div className="pt-2">
            <CheckboxField
              label={
                <span>
                  I understand this form submits a campaign proposal for review and is not an immediate commercial confirmation. Commercial terms are finalized via formal agreement. Handled as per the{" "}
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
              Submit Brand Brief
            </Button>
          </div>

          <div className="p-4 rounded-xl bg-[#14141c]/50 border border-[#272733] text-xs text-[#71717a] space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-[#d4d4d8]">
              <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
              Need a Media Kit first?
            </p>
            <p>
              You can also request a media kit directly through the "Request Media Kit" button on this page, or mention it in your brief above.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
