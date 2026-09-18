import type { Metadata } from "next";
import { Suspense } from "react";
import PrivacyContent from "../components/PrivacyContent";
import { SITE_URL } from "../seo-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy e sul trattamento dei dati personali di Officine KP.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <Suspense fallback={null}>
      <PrivacyContent />
    </Suspense>
  );
}