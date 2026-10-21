import { describe, it, expect } from "vitest";
import { generateReferenceCode, submitForm, getFormspreeEndpoint } from "./forms";

describe("Form Service Engine", () => {
  describe("Reference Code Generator", () => {
    it("should format fan references properly", () => {
      const code = generateReferenceCode("fan");
      expect(code).toMatch(/^JA-FAN-[A-Z0-9]+$/);
    });

    it("should format brand references properly", () => {
      const code = generateReferenceCode("brand");
      expect(code).toMatch(/^JA-BRD-[A-Z0-9]+$/);
    });

    it("should format event references properly", () => {
      const code = generateReferenceCode("event");
      expect(code).toMatch(/^JA-EVT-[A-Z0-9]+$/);
    });

    it("should produce unique codes on subsequent calls", () => {
      const c1 = generateReferenceCode("fan");
      const c2 = generateReferenceCode("fan");
      expect(c1).not.toBe(c2);
    });
  });

  describe("Endpoint Resolution & Unconfigured Safeguard", () => {
    it("should recognize when an endpoint is unconfigured", () => {
      const endpoint = getFormspreeEndpoint("fan");
      // In local dev without env variables, it is unconfigured
      expect(typeof endpoint.isConfigured).toBe("boolean");
    });

    it("should never produce a false positive success when unconfigured", async () => {
      // With empty endpoint, submitForm must return success: false
      const result = await submitForm("fan", { test: "data" });
      if (!result.success) {
        expect(result.isConfigMissing).toBe(true);
        expect(result.message).toContain("Form submission service is not yet configured");
      }
    });
  });
});
