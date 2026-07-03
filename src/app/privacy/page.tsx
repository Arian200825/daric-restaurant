import type { Metadata } from "next";
import { LegalView } from "@/components/sections/LegalView";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalView doc={privacy} />;
}
