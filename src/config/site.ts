/**
 * Editorial site configuration for Dhanrit.
 * Centralizes copy, feedback survey URLs, and placeholders.
 */

export const SITE_CONFIG = {
  brandName: "Dhanrit",
  tagline: "Udhaar ab samajhdari se.",
  supportingDescription:
    "Dhanrit is exploring a simpler way for small merchants to manage udhaar, make informed credit decisions, and track repayments.",

  /**
   * CONFIGURABLE FEEDBACK FORM URL:
   * Replace this URL with your verified Google Form or research survey link.
   */
  feedbackFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe-dhanrit-merchant-survey-placeholder/viewform",

  /**
   * CONTACT EMAIL PLACEHOLDER:
   * Clearly marked for replacement before public domain deployment.
   */
  contactEmail: "inquiries@dhanrit.example", // [REPLACE WITH REAL CONTACT EMAIL]

  initialFocusLocation: "Raipur & Bhilai, Chhattisgarh",

  navLinks: [
    { label: "The Reality", href: "#problem" },
    { label: "Approach", href: "#approach" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Privacy", href: "#privacy" },
    { label: "Field Research", href: "#beginning" },
  ],
};
