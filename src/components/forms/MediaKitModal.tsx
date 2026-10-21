import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FileText, Send, CheckCircle2 } from "lucide-react";
import { Modal } from "../ui/Modal";
import { InputField, TextareaField, CheckboxField } from "./FormField";
import { Button } from "../ui/Button";
import { submitForm } from "../../lib/forms";
import { mediaKitRequestSchema, type MediaKitRequestFormData } from "../../lib/validation";
import { useToast } from "../../hooks/useToast";
import { ConfigNoticeBanner } from "../ui/ConfigNoticeBanner";

export interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaKitModal: React.FC<MediaKitModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<MediaKitRequestFormData>({
    defaultValues: {
      contactName: "",
      workEmail: "",
      companyName: "",
      purpose: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: MediaKitRequestFormData) => {
    const validation = mediaKitRequestSchema.safeParse(data);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof MediaKitRequestFormData;
        if (fieldName) {
          setError(fieldName, { message: issue.message });
        }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm("media_kit", {
        contactName: data.contactName,
        workEmail: data.workEmail,
        companyName: data.companyName,
        purpose: data.purpose,
      });

      if (result.success) {
        setIsSubmitted(true);
        showToast({
          type: "success",
          title: "Media Kit Requested",
          message: "Our team will share the verified creator deck with your work email.",
        });
        reset();
      } else {
        showToast({
          type: result.isConfigMissing ? "warning" : "error",
          title: result.isConfigMissing ? "Setup Required" : "Request Failed",
          message: result.message,
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Network Error",
        message: "Failed to submit request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title="Request Official Media Kit"
      description="Access the verified creator deck, content themes, audience geographies, and commercial collaboration models for JI ABHISHEK JI."
      maxWidth="md"
    >
      <ConfigNoticeBanner inquiryType="media_kit" className="mb-4" />

      {isSubmitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold font-['Cinzel',serif] text-white">
            Request Logged
          </h4>
          <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm mx-auto">
            Our brand partnerships coordinator will review your request and dispatch the verified deck directly to your company email address.
          </p>
          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={handleModalClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 text-left">
          <InputField
            label="Your Name"
            placeholder="e.g. Aditi Sharma"
            required
            {...register("contactName")}
            error={errors.contactName?.message}
          />

          <InputField
            label="Work Email"
            type="email"
            placeholder="name@agency.com"
            required
            {...register("workEmail")}
            error={errors.workEmail?.message}
          />

          <InputField
            label="Brand / Agency Name"
            placeholder="e.g. Ogilvy, GroupM, Brand Studio"
            required
            {...register("companyName")}
            error={errors.companyName?.message}
          />

          <TextareaField
            label="Campaign Intention / Objective"
            placeholder="Briefly state why you're requesting the deck (e.g. Q4 Festive Campaign brief)..."
            required
            rows={3}
            {...register("purpose")}
            error={errors.purpose?.message}
          />

          <CheckboxField
            label="I confirm I am requesting this deck for legitimate commercial or media evaluation."
            {...register("privacyConsent")}
            error={errors.privacyConsent?.message}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Send Media Kit Request
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#71717a] pt-1">
            <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Strict privacy: Your details will never be sold or spammed.</span>
          </div>
        </form>
      )}
    </Modal>
  );
};
