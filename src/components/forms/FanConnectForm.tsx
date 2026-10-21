import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles } from "lucide-react";
import { fanConnectSchema, type FanConnectFormData } from "../../lib/validation";
import { submitForm } from "../../lib/forms";
import { InputField, TextareaField, SelectField, CheckboxField } from "./FormField";
import { Button } from "../ui/Button";
import { ConfigNoticeBanner } from "../ui/ConfigNoticeBanner";
import { useToast } from "../../hooks/useToast";
import { Link } from "react-router-dom";

export const FanConnectForm: React.FC = () => {
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
  } = useForm<FanConnectFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      socialHandle: "",
      category: "general",
      subject: "",
      message: "",
      privacyConsent: false,
    },
  });

  const messageValue = watch("message") || "";

  const categoryOptions = [
    { value: "general", label: "General Message / नमस्ते" },
    { value: "question", label: "Ask a Question / सवाल" },
    { value: "video_idea", label: "Suggest a Video Idea / नया वीडियो विचार" },
    { value: "comedy_topic", label: "Suggest a Comedy Topic / हास्य विषय" },
    { value: "appreciation", label: "Appreciation Message / प्यार और समर्थन" },
    { value: "other", label: "Other Inquiry / अन्य" },
  ];

  const onSubmit = async (data: FanConnectFormData) => {
    // Validate with Zod safeParse first
    const validation = fanConnectSchema.safeParse(data);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FanConnectFormData;
        if (fieldName) {
          setError(fieldName, { message: issue.message });
        }
      });
      showToast({
        type: "error",
        title: "Please check your inputs",
        message: validation.error.issues[0]?.message || "Some fields need your correction.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm("fan", {
        fullName: data.fullName,
        email: data.email || "Not provided (social handle supplied)",
        socialHandle: data.socialHandle || "Not provided",
        category: data.category,
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
          title: "Message Sent!",
          message: "Thank you for reaching out to JI ABHISHEK JI.",
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
        message: "Failed to connect to form service. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReferenceCode = () => {
    if (submissionSuccess?.referenceCode) {
      navigator.clipboard.writeText(submissionSuccess.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ConfigNoticeBanner inquiryType="fan" className="mb-6" />

      {submissionSuccess ? (
        <div className="p-8 sm:p-10 rounded-2xl bg-[#14141c] border border-emerald-500/30 text-center space-y-6 shadow-2xl animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-['Cinzel',serif] text-white">
              Message Received With Love!
            </h3>
            <p className="text-sm text-[#a1a1aa] max-w-md mx-auto">
              Your message has been safely delivered to our inbox. While Abhishek cannot reply to every single message individually due to filming schedules, genuine thoughts and ideas are warmly read!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e0e14] border border-[#272733] inline-flex items-center gap-3">
            <div className="text-left">
              <span className="text-[10px] uppercase font-semibold text-[#71717a] block tracking-wider">
                Submission Reference
              </span>
              <code className="text-sm font-mono text-[#d4af37] font-bold">
                {submissionSuccess.referenceCode}
              </code>
            </div>
            <button
              type="button"
              onClick={copyReferenceCode}
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

          <div className="pt-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmissionSuccess(null)}
            >
              Send Another Note
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="p-6 sm:p-10 rounded-2xl bg-[#121218]/90 backdrop-blur-xl border border-[#272733] space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-[#22222e]">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <h3 className="text-lg font-bold font-['Cinzel',serif] text-white">
              Fan Connect Form
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Your Full Name"
              placeholder="e.g. Rahul Sharma"
              required
              {...register("fullName")}
              error={errors.fullName?.message}
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              helperText="Either email or social handle is required"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Instagram / Social Handle"
              placeholder="@yourhandle"
              {...register("socialHandle")}
              error={errors.socialHandle?.message}
            />

            <SelectField
              label="Message Category"
              required
              options={categoryOptions}
              {...register("category")}
              error={errors.category?.message}
            />
          </div>

          <InputField
            label="Subject"
            placeholder="What is this about? (e.g. Comedy Idea: Desi Train Berths)"
            required
            {...register("subject")}
            error={errors.subject?.message}
          />

          <TextareaField
            label="Your Message"
            placeholder="Write your thoughts, suggestions, or words of encouragement here..."
            required
            rows={5}
            maxLength={2000}
            currentLength={messageValue.length}
            {...register("message")}
            error={errors.message?.message}
          />

          <div className="pt-2">
            <CheckboxField
              label={
                <span>
                  I understand this message will be sent through Formspree and handled in accordance with the{" "}
                  <Link to="/privacy" className="text-[#d4af37] underline hover:text-white">
                    Privacy Policy
                  </Link>. Abhishek receives inquiries here, but responses are not guaranteed.
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
              Send Message
            </Button>
          </div>

          <p className="text-center text-xs text-[#71717a] flex items-center justify-center gap-1.5 pt-1">
            <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
            Official messages delivered directly to authorized creator email inbox.
          </p>
        </form>
      )}
    </div>
  );
};
