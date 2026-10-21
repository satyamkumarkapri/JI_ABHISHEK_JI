import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, MessageSquare, Copy, Check } from "lucide-react";
import { generalContactSchema, type GeneralContactFormData } from "../../lib/validation";
import { submitForm } from "../../lib/forms";
import { InputField, TextareaField, SelectField, CheckboxField } from "./FormField";
import { Button } from "../ui/Button";
import { ConfigNoticeBanner } from "../ui/ConfigNoticeBanner";
import { useToast } from "../../hooks/useToast";
import { Link } from "react-router-dom";

export const GeneralContactForm: React.FC = () => {
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
  } = useForm<GeneralContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      inquiryType: "general",
      subject: "",
      message: "",
      privacyConsent: false,
    },
  });

  const messageText = watch("message") || "";

  const onSubmit = async (data: GeneralContactFormData) => {
    const validation = generalContactSchema.safeParse(data);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof GeneralContactFormData;
        if (fieldName) {
          setError(fieldName, { message: issue.message });
        }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm("contact", {
        fullName: data.fullName,
        email: data.email,
        inquiryType: data.inquiryType,
        subject: data.subject,
        message: data.message,
      });

      if (result.success && result.referenceCode) {
        setSubmissionSuccess({
          referenceCode: result.referenceCode,
          message: result.message,
        });
        showToast({
          type: "success",
          title: "Inquiry Sent!",
          message: "Thank you for getting in touch with our team.",
        });
        reset();
      } else {
        showToast({
          type: result.isConfigMissing ? "warning" : "error",
          title: result.isConfigMissing ? "Setup Required" : "Submission Failed",
          message: result.message,
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Network Error",
        message: "Failed to deliver message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <ConfigNoticeBanner inquiryType="contact" className="mb-6" />

      {submissionSuccess ? (
        <div className="p-8 rounded-2xl bg-[#14141c] border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold font-['Cinzel',serif] text-white">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm mx-auto">
            Your message has been received and routed to our support team.
          </p>

          <div className="p-3.5 rounded-xl bg-[#0e0e14] border border-[#272733] inline-flex items-center gap-3">
            <div className="text-left">
              <span className="text-[10px] uppercase font-semibold text-[#71717a] block tracking-wider">
                Reference Code
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
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#d4d4d8] hover:text-white transition-colors cursor-pointer"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={() => setSubmissionSuccess(null)}>
              Send Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="p-6 sm:p-8 rounded-2xl bg-[#121218]/90 backdrop-blur-xl border border-[#272733] space-y-5 shadow-2xl"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-[#22222e]">
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <h3 className="text-base font-bold font-['Cinzel',serif] text-white">
              General Inquiries &amp; Press
            </h3>
          </div>

          <InputField
            label="Your Name"
            placeholder="e.g. Vikramaditya"
            required
            {...register("fullName")}
            error={errors.fullName?.message}
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            required
            {...register("email")}
            error={errors.email?.message}
          />

          <SelectField
            label="Inquiry Nature"
            required
            options={[
              { value: "general", label: "General Feedback / Question" },
              { value: "press", label: "Press, Interview & Media Coverage" },
              { value: "brand", label: "Brand Collaboration Routing" },
              { value: "event", label: "Live Appearance Routing" },
              { value: "other", label: "Other Topic" },
            ]}
            {...register("inquiryType")}
            error={errors.inquiryType?.message}
          />

          <InputField
            label="Subject"
            placeholder="Brief topic summary..."
            required
            {...register("subject")}
            error={errors.subject?.message}
          />

          <TextareaField
            label="Message"
            placeholder="Write your note here..."
            required
            rows={4}
            maxLength={2000}
            currentLength={messageText.length}
            {...register("message")}
            error={errors.message?.message}
          />

          <CheckboxField
            label={
              <span>
                I agree to the processing of this message in accordance with the{" "}
                <Link to="/privacy" className="text-[#d4af37] underline hover:text-white">
                  Privacy Policy
                </Link>.
              </span>
            }
            {...register("privacyConsent")}
            error={errors.privacyConsent?.message}
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            isLoading={isSubmitting}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Submit Inquiry
          </Button>
        </form>
      )}
    </div>
  );
};
