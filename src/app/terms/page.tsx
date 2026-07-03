import type { Metadata } from "next";
import { LegalView } from "@/components/sections/LegalView";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: terms.intro,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalView doc={terms} />;
}
