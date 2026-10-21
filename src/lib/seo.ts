export interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: "website" | "profile" | "article";
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

export function updatePageSEO({
  title,
  description,
  keywords = "ji abhishek ji, jii abhishek, abhishek jii, ji abhishek, abhishek ji, abhishek singh, abhishek singh comedian, patna wale abhishek ji, ji_abhishek_ji_, ji abhishek ji instagram, bihar comedian abhishek singh, maa beta comedy, desi comedy reels",
  canonicalPath = "",
  ogType = "website",
  ogImage = "/images/abhishek-portrait.jpg",
  structuredData,
}: PageSEOProps) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || "https://ji-abhishek-ji.vercel.app").replace(/\/$/, "");
  const fullTitle = title.includes("JI ABHISHEK JI")
    ? title
    : `${title} | JI ABHISHEK JI — Abhishek Singh (Jii Abhishek)`;
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  // Update title
  document.title = fullTitle;

  // Update or create meta tags helper
  const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
    const attr = isProperty ? "property" : "name";
    let element = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, nameOrProperty);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  setMeta("description", description);
  setMeta("keywords", keywords);
  setMeta("og:title", fullTitle, true);
  setMeta("og:description", description, true);
  setMeta("og:type", ogType, true);
  setMeta("og:url", canonicalUrl, true);
  setMeta("og:image", ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`, true);
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", description);
  setMeta("twitter:url", canonicalUrl);
  setMeta("twitter:image", ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`);

  // Canonical tag
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute("href", canonicalUrl);

  // Structured Data (JSON-LD)
  const scriptId = "dynamic-json-ld";
  let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!jsonLdScript) {
    jsonLdScript = document.createElement("script");
    jsonLdScript.id = scriptId;
    jsonLdScript.type = "application/ld+json";
    document.head.appendChild(jsonLdScript);
  }

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Abhishek Singh",
        alternateName: [
          "JI ABHISHEK JI",
          "Ji Abhishek Ji",
          "Jii Abhishek",
          "Abhishek Jii",
          "Abhishek Ji",
          "ji_abhishek_ji_",
          "Patna Wale Abhishek Ji"
        ],
        jobTitle: "Comedian & Digital Content Creator",
        description: "Abhishek Singh, popularly known as JI ABHISHEK JI (or Jii Abhishek / Abhishek Jii), is an Indian comedian, entertainer, and storyteller from Bihar.",
        url: siteUrl,
        image: `${siteUrl}/images/abhishek-portrait.jpg`,
        sameAs: [
          "https://www.instagram.com/ji_abhishek_ji_/",
          "https://www.youtube.com/@ji_abhishek_ji_",
          "https://www.instagram.com/patna_wale_abhishek_ji/",
          "https://www.instagram.com/ji_abhishek_ji_ki_mummy/",
        ],
        nationality: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: ["Comedy", "Digital Content Creation", "Hindi and Bhojpuri Entertainment", "Standup Comedy", "Family Sketches"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "JI ABHISHEK JI Official",
        alternateName: [
          "Jii Abhishek Website",
          "Abhishek Jii Official",
          "Ji Abhishek Official Website",
          "ji_abhishek_ji_",
        ],
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: ["en", "hi", "bho"],
      },
    ],
  };

  jsonLdScript.textContent = JSON.stringify(structuredData || defaultStructuredData);
}
