import { config } from "@/config/restaurant.config";

/**
 * Privacy + Terms — generated from config. Sensible starting templates for a
 * small-business site, NOT legal advice; have them reviewed before launch.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}
export interface LegalDoc {
  slug: "privacy" | "terms";
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const brand = config.brand.name;
const email = config.contact.email;
const location = `${config.contact.address.city}, ${config.contact.address.region}`;
const updated = "3 July 2026";

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated,
  intro: `This policy explains what information ${brand} collects through this website, how it is used, and the choices you have. We keep data collection to the minimum needed to respond to you and run the site.`,
  sections: [
    {
      heading: "Information we collect",
      body: [
        "Details you submit through our contact or reservation forms — such as your name, email, phone number, party size, and any message you send.",
        "Basic technical and usage data collected automatically to keep the site secure and understand how it is used.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "To respond to your enquiry, confirm a reservation, and provide the service you requested.",
        "To improve the website and our service. We do not sell your personal information.",
      ],
    },
    {
      heading: "Cookies & analytics",
      body: [
        "The site may use essential cookies to function and, if enabled, privacy-respecting analytics to measure traffic in aggregate. You can control cookies through your browser settings.",
      ],
    },
    {
      heading: "Data sharing & retention",
      body: [
        "We share information only with the providers that help us operate this site (hosting, email, reservations) and only as needed to deliver the service.",
        "We keep personal information only as long as necessary for the purpose it was collected or as required by law.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        `You may request access to, correction of, or deletion of your personal information. Contact us at ${email} and we will respond within a reasonable time.`,
      ],
    },
    {
      heading: "Contact",
      body: [
        `${brand} operates from ${location}. For any privacy question or request, email ${email}.`,
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated,
  intro: `These terms govern your use of the ${brand} website. By using the site you agree to them.`,
  sections: [
    {
      heading: "Use of the site",
      body: [
        "You may use this website for lawful purposes only. You agree not to misuse it or attempt to disrupt it.",
      ],
    },
    {
      heading: "Reservations & enquiries",
      body: [
        "Submitting a reservation form is a request, not a confirmed booking, until we confirm it with you directly. We make reasonable efforts to keep menus, prices, and availability accurate but do not guarantee they are error-free.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        `The content, branding, and design of this site belong to ${brand} or its licensors and may not be reused without permission.`,
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "The site is provided “as is”. To the fullest extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of the site.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.",
      ],
    },
    { heading: "Contact", body: [`Questions about these terms? Email ${email}.`] },
  ],
};

export const legalDocs = { privacy, terms };
