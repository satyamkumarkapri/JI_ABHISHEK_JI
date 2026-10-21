export type InquiryType = "fan" | "brand" | "event" | "media_kit" | "contact";

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  referenceCode?: string;
  isConfigMissing?: boolean;
  errors?: Record<string, string>;
}

/**
 * Generates a clean, transparent client-side reference tracking code
 * for the user's convenience to quote when following up.
 * Explicitly marked as client-side generated.
 */
export function generateReferenceCode(type: InquiryType): string {
  const prefixMap: Record<InquiryType, string> = {
    fan: "FAN",
    brand: "BRD",
    event: "EVT",
    media_kit: "MKT",
    contact: "CNT",
  };
  const prefix = prefixMap[type] || "INQ";
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `JA-${prefix}-${timestamp}${random}`;
}

/**
 * Resolves the appropriate Formspree endpoint for the given inquiry type.
 */
export function getFormspreeEndpoint(type: InquiryType): {
  id: string;
  url: string;
  isConfigured: boolean;
} {
  const fanId = import.meta.env.VITE_FORMSPREE_FAN_ID?.trim() || "";
  const brandId = import.meta.env.VITE_FORMSPREE_BRAND_ID?.trim() || "";
  const eventId = import.meta.env.VITE_FORMSPREE_EVENT_ID?.trim() || "";
  const mediaKitId = import.meta.env.VITE_FORMSPREE_MEDIA_KIT_ID?.trim() || "";
  const sharedId = import.meta.env.VITE_FORMSPREE_SHARED_ID?.trim() || "";

  let targetId = "";

  switch (type) {
    case "fan":
      targetId = fanId || sharedId;
      break;
    case "brand":
      targetId = brandId || sharedId;
      break;
    case "event":
      targetId = eventId || sharedId;
      break;
    case "media_kit":
      targetId = mediaKitId || brandId || sharedId;
      break;
    case "contact":
      targetId = sharedId || fanId || brandId;
      break;
  }

  const isConfigured = Boolean(targetId && targetId.length > 2);
  const url = isConfigured ? `https://formspree.io/f/${targetId}` : "";

  return {
    id: targetId,
    url,
    isConfigured,
  };
}

/**
 * Reusable, production-grade Formspree submission handler.
 * - Enforces zero fake submissions when unconfigured.
 * - Provides timeout resilience (10s abort controller).
 * - Safe JSON parsing with fallback.
 */
export async function submitForm(
  type: InquiryType,
  data: Record<string, unknown>
): Promise<FormSubmissionResult> {
  const endpoint = getFormspreeEndpoint(type);

  if (!endpoint.isConfigured) {
    return {
      success: false,
      isConfigMissing: true,
      message:
        "Form submission service is not yet configured for this inquiry channel. The site owner must set up the Formspree Form ID in environment variables. Please see docs/FORMSPREE_SETUP.md for quick setup instructions.",
    };
  }

  const referenceCode = generateReferenceCode(type);
  const payload = {
    ...data,
    _inquiry_type: type,
    _reference_code: referenceCode,
    _submitted_at: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(endpoint.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return {
        success: true,
        referenceCode,
        message: "Your inquiry has been successfully received. Thank you for reaching out!",
      };
    }

    let errorMessage = "Form submission failed. Please try again or contact via social channels.";
    try {
      const errorJson = await response.json();
      if (errorJson && Array.isArray(errorJson.errors) && errorJson.errors.length > 0) {
        errorMessage = errorJson.errors.map((e: { message: string }) => e.message).join(", ");
      } else if (errorJson?.error) {
        errorMessage = errorJson.error;
      }
    } catch {
      // Fallback if response is not JSON
      if (response.status === 429) {
        errorMessage = "Too many requests. Please wait a moment before trying again.";
      }
    }

    return {
      success: false,
      message: errorMessage,
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);

    if (err instanceof DOMException && err.name === "AbortError") {
      return {
        success: false,
        message: "The request timed out. Please verify your internet connection and try again.",
      };
    }

    return {
      success: false,
      message: "A network error occurred. Please check your connection and try again.",
    };
  }
}
